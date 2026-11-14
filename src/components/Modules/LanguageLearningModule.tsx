import React, { useEffect, useMemo, useState } from 'react';
import { Language } from '../../types';
import {
  LANGUAGE_COURSES,
  LANGUAGE_COURSE_LIST,
  QuizDifficulty,
  TargetLangId
} from '../../data/languageLearningData';

interface LanguageLearningModuleProps {
  language: Language;
}

type CourseTab = 'vocabulary' | 'dialogues' | 'quiz';

interface PersistedProgress {
  masteredIds: string[];
  bestScores: Partial<Record<TargetLangId, Partial<Record<QuizDifficulty, number>>>>;
}

const STORAGE_KEY = 'spacetech_language_learning_v2';
const LEGACY_STORAGE_KEY = 'spacetech_language_learning_v1';
const SPEECH_RATE = 0.8;

const QUIZ_LEVELS: { id: QuizDifficulty; labelAr: string; subtitleAr: string }[] = [
  { id: 'easy', labelAr: 'المستوى السهل', subtitleAr: 'أساسيات الكلمات والتعابير' },
  { id: 'medium', labelAr: 'المستوى المتوسط', subtitleAr: 'المواقف اليومية وبناء الجمل' },
  { id: 'hard', labelAr: 'المستوى الصعب', subtitleAr: 'التراكيب المتقدمة والفهم الدقيق' }
];

function loadInitialProgress(): PersistedProgress {
  try {
    const rawV2 = localStorage.getItem(STORAGE_KEY);
    if (rawV2) {
      const parsed = JSON.parse(rawV2) as Partial<PersistedProgress>;
      return {
        masteredIds: Array.isArray(parsed.masteredIds) ? parsed.masteredIds : [],
        bestScores: parsed.bestScores && typeof parsed.bestScores === 'object' ? parsed.bestScores : {}
      };
    }
    const rawV1 = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (rawV1) {
      const legacy = JSON.parse(rawV1) as { masteredIds?: unknown };
      return {
        masteredIds: Array.isArray(legacy.masteredIds)
          ? legacy.masteredIds.filter((x): x is string => typeof x === 'string')
          : [],
        bestScores: {}
      };
    }
  } catch {
    // ignore malformed storage
  }
  return { masteredIds: [], bestScores: {} };
}

export const LanguageLearningModule: React.FC<LanguageLearningModuleProps> = ({ language }) => {
  const [selectedLang, setSelectedLang] = useState<TargetLangId>('fr');
  const [activeTab, setActiveTab] = useState<CourseTab>('vocabulary');
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  // Vocabulary filters (no favorites)
  const [vocabCategory, setVocabCategory] = useState<string>('all');
  const [vocabSearch, setVocabSearch] = useState<string>('');

  // Dialogues state
  const [activeDialogueId, setActiveDialogueId] = useState<string>('fr-d-1');
  const [hideTranslations, setHideTranslations] = useState<boolean>(false);

  // Quiz state (3 difficulty levels x 20 questions each)
  const [quizDifficulty, setQuizDifficulty] = useState<QuizDifficulty>('easy');
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const [progress, setProgress] = useState<PersistedProgress>(loadInitialProgress);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // ignore storage quota errors
    }
  }, [progress]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const course = LANGUAGE_COURSES[selectedLang];

  const stopSpeech = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingText(null);
  };

  const handleSelectTargetLanguage = (id: TargetLangId) => {
    setSelectedLang(id);
    setVocabCategory('all');
    setVocabSearch('');
    setActiveDialogueId(LANGUAGE_COURSES[id].dialogues[0]?.id || '');
    setQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
    stopSpeech();
  };

  const handleSelectQuizDifficulty = (level: QuizDifficulty) => {
    if (level === quizDifficulty) return;
    setQuizDifficulty(level);
    setQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
    stopSpeech();
  };

  // Speech synthesis playback fixed at 0.8x slow educational pace
  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = course.speechLang;
    utterance.rate = SPEECH_RATE;
    const voices = window.speechSynthesis.getVoices();
    const prefix = course.speechLang.split('-')[0];
    const matchedVoice = voices.find(v => v.lang.toLowerCase().startsWith(prefix));
    if (matchedVoice) utterance.voice = matchedVoice;
    utterance.onstart = () => setSpeakingText(text);
    utterance.onend = () => setSpeakingText(null);
    utterance.onerror = () => setSpeakingText(null);
    window.speechSynthesis.speak(utterance);
  };

  const toggleMastered = (id: string) => {
    setProgress(prev => {
      const exists = prev.masteredIds.includes(id);
      return {
        ...prev,
        masteredIds: exists ? prev.masteredIds.filter(x => x !== id) : [...prev.masteredIds, id]
      };
    });
  };

  const vocabCategories = useMemo(() => {
    const map = new Map<string, string>();
    course.vocabulary.forEach(v => {
      if (!map.has(v.category)) map.set(v.category, v.categoryAr);
    });
    return Array.from(map.entries()).map(([key, label]) => ({ key, label }));
  }, [course.vocabulary]);

  const filteredVocab = useMemo(() => {
    const q = vocabSearch.trim().toLowerCase();
    return course.vocabulary.filter(item => {
      if (vocabCategory !== 'all' && item.category !== vocabCategory) return false;
      if (!q) return true;
      return (
        item.word.toLowerCase().includes(q) ||
        item.reading.toLowerCase().includes(q) ||
        item.approxAr.toLowerCase().includes(q) ||
        item.meaningAr.toLowerCase().includes(q)
      );
    });
  }, [course.vocabulary, vocabCategory, vocabSearch]);

  const activeDialogue = useMemo(
    () => course.dialogues.find(d => d.id === activeDialogueId) || course.dialogues[0],
    [course.dialogues, activeDialogueId]
  );

  const courseMasteredCount = useMemo(
    () => course.vocabulary.filter(v => progress.masteredIds.includes(v.id)).length,
    [course.vocabulary, progress.masteredIds]
  );

  const masteryPercentage = course.vocabulary.length
    ? Math.round((courseMasteredCount / course.vocabulary.length) * 100)
    : 0;

  // Quiz handlers
  const quizQuestions = course.quizByLevel[quizDifficulty];
  const currentQuestion = quizQuestions[quizIndex];
  const currentLevelMeta = QUIZ_LEVELS.find(l => l.id === quizDifficulty) || QUIZ_LEVELS[0];

  const handleAnswerQuiz = (optionIdx: number) => {
    if (selectedOption !== null || !currentQuestion) return;
    setSelectedOption(optionIdx);
    if (optionIdx === currentQuestion.correctIndex) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (quizIndex + 1 >= quizQuestions.length) {
      const finalScore = quizScore;
      setQuizFinished(true);
      setProgress(prev => {
        const langScores = prev.bestScores[selectedLang] ?? {};
        const prevBest = langScores[quizDifficulty] ?? 0;
        return {
          ...prev,
          bestScores: {
            ...prev.bestScores,
            [selectedLang]: {
              ...langScores,
              [quizDifficulty]: Math.max(prevBest, finalScore)
            }
          }
        };
      });
    } else {
      setQuizIndex(prev => prev + 1);
      setSelectedOption(null);
    }
  };

  const handleRestartQuiz = () => {
    setQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
    stopSpeech();
  };

  const tabs: { id: CourseTab; label: string; icon: string }[] = [
    { id: 'vocabulary', label: 'بنك المفردات', icon: 'fas fa-book' },
    { id: 'dialogues', label: 'الحوارات اليومية', icon: 'fas fa-comments' },
    { id: 'quiz', label: 'الاختبار التفاعلي', icon: 'fas fa-check-double' }
  ];

  const uiTitle =
    language === 'fr'
      ? 'Apprentissage des Langues'
      : language === 'en'
      ? 'Language Learning Studio'
      : 'أكاديمية تعلّم اللغات';

  const getLanguageTotalQuizInfo = (langId: TargetLangId) => {
    const c = LANGUAGE_COURSES[langId];
    const totalQuestions =
      c.quizByLevel.easy.length + c.quizByLevel.medium.length + c.quizByLevel.hard.length;
    const scores = progress.bestScores[langId] ?? {};
    const totalBest = (scores.easy ?? 0) + (scores.medium ?? 0) + (scores.hard ?? 0);
    return { totalQuestions, totalBest };
  };

  const nextLevelId: QuizDifficulty | null =
    quizDifficulty === 'easy' ? 'medium' : quizDifficulty === 'medium' ? 'hard' : null;
  const nextLevelLabel =
    nextLevelId === 'medium'
      ? 'الانتقال إلى المستوى المتوسط'
      : nextLevelId === 'hard'
      ? 'الانتقال إلى المستوى الصعب'
      : null;

  return (
    <div className="animate-fadeIn pb-12 space-y-6 text-right" dir="rtl">
      {/* Header & Language Selector */}
      <div className="bg-white dark:bg-[#242428] rounded-3xl border border-slate-200 dark:border-slate-700/80 p-5 sm:p-6 shadow-sm space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {uiTitle}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium">
              {course.taglineAr}
            </p>
          </div>

          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 self-start md:self-auto">
            النطق الصوتي: سرعة بطيئة واضحة (<span dir="ltr" className="tabular-nums">0.8x</span>)
          </div>
        </div>

        {/* 3 Target Language Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {LANGUAGE_COURSE_LIST.map(item => {
            const isSelected = item.id === selectedLang;
            const learned = item.vocabulary.filter(v => progress.masteredIds.includes(v.id)).length;
            const { totalQuestions, totalBest } = getLanguageTotalQuizInfo(item.id);

            return (
              <button
                key={item.id}
                onClick={() => handleSelectTargetLanguage(item.id)}
                className={`p-4 rounded-2xl border text-right transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md'
                    : 'bg-slate-50 dark:bg-[#1d1d22] text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700/80 hover:border-slate-400 dark:hover:border-slate-500'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl leading-none" aria-hidden="true">
                    {item.flag}
                  </span>
                  <div>
                    <div className="font-extrabold text-base">{item.nameAr}</div>
                    <div
                      className={`text-xs font-semibold ${
                        isSelected ? 'text-slate-300 dark:text-slate-600' : 'text-slate-500 dark:text-slate-400'
                      }`}
                      dir="ltr"
                    >
                      {item.nativeName}
                    </div>
                  </div>
                </div>
                <div
                  className={`text-xs font-semibold tabular-nums text-left ${
                    isSelected ? 'text-slate-300 dark:text-slate-600' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  <div>{learned}/{item.vocabulary.length} كلمة</div>
                  <div>الاختبارات: {totalBest}/{totalQuestions}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Progress Bar + Section Navigation Tabs */}
        <div className="pt-2 border-t border-slate-200 dark:border-slate-700/80 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
            <span>
              تقدّمك في {course.nameAr}: {courseMasteredCount} من {course.vocabulary.length} كلمة متقنة
            </span>
            <span className="tabular-nums">{masteryPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-[#19191d] rounded-full overflow-hidden">
            <div
              className="h-full transition-all duration-300 rounded-full"
              style={{ width: `${masteryPercentage}%`, backgroundColor: course.accentColor }}
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {tabs.map(tab => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    active
                      ? 'text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-[#1d1d22] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#2c2c34]'
                  }`}
                  style={active ? { backgroundColor: course.accentColor } : undefined}
                >
                  <i className={tab.icon}></i>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= TAB 1: VOCABULARY BANK (NO FAVORITES) ================= */}
      {activeTab === 'vocabulary' && (
        <div className="space-y-5">
          {/* Controls Bar */}
          <div className="bg-white dark:bg-[#242428] rounded-3xl border border-slate-200 dark:border-slate-700/80 p-4 sm:p-5 space-y-4">
            <div className="relative">
              <input
                type="text"
                value={vocabSearch}
                onChange={e => setVocabSearch(e.target.value)}
                placeholder="ابحث عن كلمة بالعربية أو باللغة المختارة أو بالنطق..."
                className="w-full py-2.5 pr-10 pl-4 rounded-xl bg-slate-50 dark:bg-[#1a1a1f] border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white outline-none focus:border-slate-500"
              />
              <i className="fas fa-search absolute right-3.5 top-3.5 text-slate-400 text-xs"></i>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              <button
                onClick={() => setVocabCategory('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                  vocabCategory === 'all'
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-[#1b1b1f] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#2c2c34]'
                }`}
              >
                الكل ({course.vocabulary.length})
              </button>
              {vocabCategories.map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setVocabCategory(cat.key)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                    vocabCategory === cat.key
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                      : 'bg-slate-100 dark:bg-[#1b1b1f] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#2c2c34]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {filteredVocab.length === 0 ? (
            <div className="bg-white dark:bg-[#242428] rounded-3xl border border-slate-200 dark:border-slate-700/80 p-10 text-center text-slate-500 dark:text-slate-400 text-sm font-bold">
              لا توجد مفردات مطابقة لبحثك الحالي.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredVocab.map(item => {
                const isMastered = progress.masteredIds.includes(item.id);

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border p-5 flex flex-col justify-between gap-3 transition ${
                      isMastered
                        ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/70'
                        : 'bg-white dark:bg-[#242428] border-slate-200 dark:border-slate-700/80'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {item.categoryAr} · {item.approxAr}
                        </div>
                        <h4 className="text-xl font-extrabold text-slate-900 dark:text-white" dir="ltr">
                          {item.word}
                        </h4>
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400" dir="ltr">
                          /{item.reading}/
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          onClick={() => speakText(item.word)}
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                            speakingText === item.word
                              ? 'text-white'
                              : 'bg-slate-100 dark:bg-[#1b1b1f] text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#303038]'
                          }`}
                          style={speakingText === item.word ? { backgroundColor: course.accentColor } : undefined}
                          title="استمع للكلمة (0.8x)"
                        >
                          <i className="fas fa-volume-up text-xs"></i>
                        </button>
                        <button
                          onClick={() => toggleMastered(item.id)}
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                            isMastered
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-100 dark:bg-[#1b1b1f] text-slate-400 hover:text-emerald-600'
                          }`}
                          title={isMastered ? 'تم الإتقان' : 'تحديد كمتقنة'}
                        >
                          <i className="fas fa-check text-xs"></i>
                        </button>
                      </div>
                    </div>

                    <div className="text-base font-bold text-slate-800 dark:text-slate-100">
                      {item.meaningAr}
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200" dir="ltr">
                          {item.example}
                        </p>
                        <button
                          onClick={() => speakText(item.example)}
                          className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white shrink-0"
                          title="استمع للجملة (0.8x)"
                        >
                          <i className="fas fa-play-circle"></i>
                        </button>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {item.exampleMeaningAr}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 2: DIALOGUES & EXPRESSIONS ================= */}
      {activeTab === 'dialogues' && activeDialogue && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Scenario Sidebar */}
          <div className="lg:col-span-4 space-y-2.5">
            {course.dialogues.map(dlg => {
              const selected = dlg.id === activeDialogue.id;
              return (
                <button
                  key={dlg.id}
                  onClick={() => setActiveDialogueId(dlg.id)}
                  className={`w-full p-4 rounded-2xl border text-right transition ${
                    selected
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-sm'
                      : 'bg-white dark:bg-[#242428] text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700/80 hover:border-slate-400'
                  }`}
                >
                  <div
                    className={`text-xs font-semibold mb-1 ${
                      selected ? 'text-slate-300 dark:text-slate-600' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    المستوى: {dlg.level}
                  </div>
                  <div className="font-extrabold text-sm sm:text-base">{dlg.titleAr}</div>
                  <div
                    className={`text-xs font-medium mt-0.5 ${
                      selected ? 'text-slate-300 dark:text-slate-600' : 'text-slate-500 dark:text-slate-400'
                    }`}
                    dir="ltr"
                  >
                    {dlg.titleTarget}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Dialogue Stage */}
          <div className="lg:col-span-8 bg-white dark:bg-[#242428] rounded-3xl border border-slate-200 dark:border-slate-700/80 p-5 sm:p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  {activeDialogue.titleAr}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                  {activeDialogue.contextAr}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setHideTranslations(!hideTranslations)}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#303038] transition whitespace-nowrap"
                >
                  {hideTranslations ? 'إظهار الترجمة' : 'إخفاء الترجمة للتدرب'}
                </button>
                <button
                  onClick={() => speakText(activeDialogue.lines.map(l => l.text).join('. '))}
                  className="px-4 py-2 rounded-xl text-white text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap shadow-sm"
                  style={{ backgroundColor: course.accentColor }}
                >
                  <i className="fas fa-play"></i>
                  <span>تشغيل الحوار</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {activeDialogue.lines.map((line, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1b1b1f] border border-slate-200/80 dark:border-slate-800 space-y-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold text-slate-700 dark:text-slate-300">
                      {line.speaker}
                    </span>
                    <button
                      onClick={() => speakText(line.text)}
                      className={`px-2.5 py-1 rounded-lg border text-xs font-bold transition flex items-center gap-1.5 ${
                        speakingText === line.text
                          ? 'text-white border-transparent'
                          : 'bg-white dark:bg-[#2a2a32] border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#353540]'
                      }`}
                      style={speakingText === line.text ? { backgroundColor: course.accentColor } : undefined}
                    >
                      <i className="fas fa-volume-up"></i>
                      <span>استمع</span>
                    </button>
                  </div>

                  <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed" dir="ltr">
                    {line.text}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium" dir="ltr">
                    {line.reading}
                  </p>

                  {!hideTranslations && (
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 pt-2 border-t border-slate-200/70 dark:border-slate-700/70">
                      {line.meaningAr}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Key Phrases */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                عبارات ذهبية من هذا الموقف:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {activeDialogue.keyPhrases.map((kp, kIdx) => (
                  <button
                    key={kIdx}
                    onClick={() => speakText(kp.phrase)}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-[#1b1b1f] border border-slate-200 dark:border-slate-700/80 hover:border-slate-400 text-right space-y-1 transition"
                  >
                    <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white" dir="ltr">
                      {kp.phrase}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400" dir="ltr">
                      {kp.reading}
                    </div>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      {kp.meaningAr}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= TAB 3: INTERACTIVE QUIZ (3 LEVELS x 20 QUESTIONS) ================= */}
      {activeTab === 'quiz' && (
        <div className="space-y-5 max-w-3xl mx-auto">
          {/* Difficulty Selector */}
          <div className="bg-white dark:bg-[#242428] rounded-3xl border border-slate-200 dark:border-slate-700/80 p-4 sm:p-5 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                اختر مستوى الصعوبة ({course.nameAr})
              </h3>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                20 سؤالاً في كل مستوى · النطق بسرعة 0.8x
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {QUIZ_LEVELS.map(lvl => {
                const active = lvl.id === quizDifficulty;
                const lvlQuestions = course.quizByLevel[lvl.id];
                const best = progress.bestScores[selectedLang]?.[lvl.id] ?? 0;

                return (
                  <button
                    key={lvl.id}
                    onClick={() => handleSelectQuizDifficulty(lvl.id)}
                    className={`p-3.5 rounded-2xl border text-right transition flex flex-col justify-between gap-2 ${
                      active
                        ? 'text-white border-transparent shadow-sm'
                        : 'bg-slate-50 dark:bg-[#1b1b1f] text-slate-800 dark:text-slate-100 border-slate-200 dark:border-slate-700/80 hover:border-slate-400'
                    }`}
                    style={active ? { backgroundColor: course.accentColor } : undefined}
                  >
                    <div>
                      <div className="font-extrabold text-sm">{lvl.labelAr}</div>
                      <div
                        className={`text-[11px] font-medium mt-0.5 ${
                          active ? 'text-white/85' : 'text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {lvl.subtitleAr}
                      </div>
                    </div>
                    <div
                      className={`text-xs font-bold tabular-nums flex items-center justify-between pt-2 border-t ${
                        active
                          ? 'border-white/25 text-white'
                          : 'border-slate-200/80 dark:border-slate-700/70 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <span>{lvlQuestions.length} سؤالاً</span>
                      <span>الأفضل: {best}/{lvlQuestions.length}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quiz Stage */}
          <div className="bg-white dark:bg-[#242428] rounded-3xl border border-slate-200 dark:border-slate-700/80 p-5 sm:p-7 space-y-6">
            {quizFinished ? (
              <div className="text-center py-6 space-y-5">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl">
                  <i className="fas fa-award"></i>
                </div>
                <div className="space-y-1.5">
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {course.nameAr} · {currentLevelMeta.labelAr}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    أنهيت الاختبار بنجاح!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    نتيجتك:{' '}
                    <span className="font-extrabold tabular-nums">
                      {quizScore} / {quizQuestions.length}
                    </span>{' '}
                    ({Math.round((quizScore / quizQuestions.length) * 100)}%)
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleRestartQuiz}
                    className="px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-bold hover:bg-slate-100 dark:hover:bg-[#303038] transition"
                  >
                    إعادة نفس المستوى
                  </button>
                  {nextLevelId && nextLevelLabel && (
                    <button
                      onClick={() => handleSelectQuizDifficulty(nextLevelId)}
                      className="px-5 py-3 rounded-xl text-white text-xs sm:text-sm font-bold transition shadow-sm hover:opacity-95"
                      style={{ backgroundColor: course.accentColor }}
                    >
                      {nextLevelLabel}
                    </button>
                  )}
                </div>
              </div>
            ) : currentQuestion ? (
              <>
                <div className="space-y-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400">
                    <span>
                      {currentLevelMeta.labelAr} · السؤال{' '}
                      <span className="tabular-nums">{quizIndex + 1}</span> من{' '}
                      <span className="tabular-nums">{quizQuestions.length}</span>
                    </span>
                    <span className="tabular-nums">النتيجة الحالية: {quizScore}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-[#19191d] rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-300 rounded-full"
                      style={{
                        width: `${Math.round(((quizIndex + 1) / quizQuestions.length) * 100)}%`,
                        backgroundColor: course.accentColor
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-relaxed">
                    {currentQuestion.questionAr}
                  </h3>

                  {(currentQuestion.promptTarget || currentQuestion.audioText) && (
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1f] border border-slate-200 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
                      {currentQuestion.promptTarget && (
                        <span className="text-lg font-extrabold text-slate-900 dark:text-white" dir="ltr">
                          {currentQuestion.promptTarget}
                        </span>
                      )}
                      {currentQuestion.audioText && (
                        <button
                          onClick={() => speakText(currentQuestion.audioText!)}
                          className="px-4 py-2 rounded-xl text-white text-xs font-bold transition flex items-center gap-2"
                          style={{ backgroundColor: course.accentColor }}
                        >
                          <i className="fas fa-volume-up"></i>
                          <span>استمع للنطق (0.8x)</span>
                        </button>
                      )}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-2.5">
                    {currentQuestion.options.map((opt, oIdx) => {
                      const isAnswered = selectedOption !== null;
                      const isCorrect = oIdx === currentQuestion.correctIndex;
                      const isChosen = oIdx === selectedOption;

                      let btnStyle =
                        'bg-slate-50 dark:bg-[#1d1d22] border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:border-slate-400';
                      if (isAnswered) {
                        if (isCorrect) {
                          btnStyle =
                            'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-900 dark:text-emerald-200';
                        } else if (isChosen) {
                          btnStyle =
                            'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-200';
                        } else {
                          btnStyle =
                            'bg-slate-50/50 dark:bg-[#1b1b1f]/50 border-slate-200 dark:border-slate-800 text-slate-400';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={isAnswered}
                          onClick={() => handleAnswerQuiz(oIdx)}
                          className={`w-full p-4 rounded-2xl border text-right font-bold text-sm transition flex items-center justify-between gap-3 ${btnStyle}`}
                        >
                          <span>{opt}</span>
                          {isAnswered && isCorrect && <i className="fas fa-check-circle text-emerald-600"></i>}
                          {isAnswered && isChosen && !isCorrect && <i className="fas fa-times-circle text-rose-600"></i>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedOption !== null && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a1a1f] border border-slate-200 dark:border-slate-700/80 space-y-3 animate-fadeIn">
                    <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                      {selectedOption === currentQuestion.correctIndex ? '✓ إجابة صحيحة: ' : '✕ التوضيح: '}
                      <span className="font-medium text-slate-600 dark:text-slate-300">
                        {currentQuestion.explanationAr}
                      </span>
                    </div>
                    <div className="flex justify-end">
                      <button
                        onClick={handleNextQuestion}
                        className="px-5 py-2.5 rounded-xl text-white text-xs font-bold transition shadow-sm"
                        style={{ backgroundColor: course.accentColor }}
                      >
                        {quizIndex + 1 >= quizQuestions.length ? 'عرض النتيجة النهائية' : 'السؤال التالي'}
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageLearningModule;
