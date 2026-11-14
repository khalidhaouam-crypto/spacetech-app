import React, { useState } from 'react';
import { Language } from '../types';
import {
  HISTOIRE_TERMS,
  GEOGRAPHIE_TERMS,
  CITOYENNETE_TERMS,
  HISTOIRE_MINDMAPS,
  GEOGRAPHIE_MINDMAPS,
  CITOYENNETE_MINDMAPS,
  HISTOIRE_SUMMARIES,
  GEOGRAPHIE_SUMMARIES,
  CITOYENNETE_SUMMARIES,
  ISLAMIC_SUMMARIES,
  ISLAMIC_TERMS,
  ISLAMIC_MINDMAPS,
  ISLAMIC_METHODOLOGY,
  ESSAY_METHODOLOGY,
  GRAPH_METHODOLOGY,
  FRENCH_LETTER_TYPES,
  FRENCH_SUMMARIES,
  FRENCH_TERMS,
  FRENCH_EXAM_METHODOLOGY,
  EXAM_PRACTICES,
  TermDefinition,
  MindMapItem,
  LessonSummaryItem,
  IslamicLessonSummaryItem,
  FrenchLessonSummaryItem,
  FrenchLetterType,
  ExamPractice
} from '../data/assistant3ACCompleteData';

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

// Hierarchical Navigation Views:
// Root: 'ROOT'
// French: 'FR_MENU' | 'FR_LESSONS' | 'FR_LESSON_DETAIL' | 'FR_LIST' | 'FR_DETAIL' | 'FR_TERMS' | 'FR_METHODOLOGY'
// HG Branches: 'HG_BRANCHES' (Histoire, Geo, Citoyennete)
// HG Subject Menu: 'HG_SUBJECT_MENU' (Select between Lessons, Terms, Mindmaps, Essay, Graphs)
// HG Lessons: 'HG_LESSONS' | 'HG_LESSON_DETAIL'
// HG Terms: 'HG_TERMS' (Filtered by subject)
// HG Mindmaps: 'HG_MINDMAPS' (Filtered by subject) | 'HG_MINDMAP_DETAIL'
// HG Essay Methodology: 'HG_ESSAY'
// HG Graph Methodology: 'HG_GRAPHS'
// Exam Practice: 'EXAM_LIST' (Local or Regional) | 'EXAM_DETAIL'

type NavState =
  | { view: 'ROOT' }
  | { view: 'FR_MENU' }
  | { view: 'FR_LESSONS' }
  | { view: 'FR_LESSON_DETAIL'; lessonId: string }
  | { view: 'FR_LIST' }
  | { view: 'FR_DETAIL'; letterId: string }
  | { view: 'FR_TERMS' }
  | { view: 'FR_METHODOLOGY' }
  | { view: 'HG_BRANCHES' }
  | { view: 'HG_SUBJECT_MENU'; subject: 'histoire' | 'geographie' | 'citoyennete' }
  | { view: 'HG_LESSONS'; subject: 'histoire' | 'geographie' | 'citoyennete' }
  | { view: 'HG_LESSON_DETAIL'; lessonId: string; subject: 'histoire' | 'geographie' | 'citoyennete' }
  | { view: 'HG_TERMS'; subject: 'histoire' | 'geographie' | 'citoyennete'; lessonFilter?: string }
  | { view: 'HG_MINDMAPS'; subject: 'histoire' | 'geographie' | 'citoyennete' }
  | { view: 'HG_MINDMAP_DETAIL'; mapId: string; subject: 'histoire' | 'geographie' | 'citoyennete' }
  | { view: 'HG_ESSAY'; originSubject?: 'histoire' | 'geographie' | 'citoyennete' }
  | { view: 'HG_GRAPHS' }
  | { view: 'ISLAMIC_MENU' }
  | { view: 'ISLAMIC_LESSONS' }
  | { view: 'ISLAMIC_LESSON_DETAIL'; lessonId: string }
  | { view: 'ISLAMIC_TERMS' }
  | { view: 'ISLAMIC_MINDMAPS' }
  | { view: 'ISLAMIC_MINDMAP_DETAIL'; mapId: string }
  | { view: 'ISLAMIC_METHODOLOGY' }
  | { view: 'EXAM_LIST'; examType: 'local' | 'regional' }
  | { view: 'EXAM_DETAIL'; examId: string; examType: 'local' | 'regional' };

export const AIAssistantModal: React.FC<AIAssistantModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const [nav, setNav] = useState<NavState>({ view: 'ROOT' });
  const [searchTerm, setSearchTerm] = useState('');
  const [showAnswerForExamQ, setShowAnswerForExamQ] = useState<{ [key: string]: boolean }>({});
  const [showMindmapCorrection, setShowMindmapCorrection] = useState<{ [key: string]: boolean }>({});

  // Prevent closing when telephone back button is pressed
  React.useEffect(() => {
    if (!isOpen) return;

    const handlePopState = () => {
      // Re-push state so phone back button does not dismiss the assistant modal
      window.history.pushState({ assistantModal: true }, '', window.location.href);
    };

    window.history.pushState({ assistantModal: true }, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isRTL = language === 'ar';

  const resetToRoot = () => {
    setNav({ view: 'ROOT' });
    setSearchTerm('');
  };

  const getSubjectTitle = (subject: 'histoire' | 'geographie' | 'citoyennete') => {
    if (subject === 'histoire') return 'مكون التاريخ';
    if (subject === 'geographie') return 'مكون الجغرافيا';
    return 'مكون التربية على المواطنة';
  };

  const getSubjectIcon = (subject: 'histoire' | 'geographie' | 'citoyennete') => {
    if (subject === 'histoire') return 'fas fa-landmark text-amber-500';
    if (subject === 'geographie') return 'fas fa-globe-africa text-blue-500';
    return 'fas fa-balance-scale text-purple-500';
  };

  const getTermsBySubject = (subject: 'histoire' | 'geographie' | 'citoyennete'): TermDefinition[] => {
    if (subject === 'histoire') return HISTOIRE_TERMS;
    if (subject === 'geographie') return GEOGRAPHIE_TERMS;
    return CITOYENNETE_TERMS;
  };

  const getMindmapsBySubject = (subject: 'histoire' | 'geographie' | 'citoyennete'): MindMapItem[] => {
    if (subject === 'histoire') return HISTOIRE_MINDMAPS;
    if (subject === 'geographie') return GEOGRAPHIE_MINDMAPS;
    return CITOYENNETE_MINDMAPS;
  };

  const getSummariesBySubject = (subject: 'histoire' | 'geographie' | 'citoyennete'): LessonSummaryItem[] => {
    if (subject === 'histoire') return HISTOIRE_SUMMARIES;
    if (subject === 'geographie') return GEOGRAPHIE_SUMMARIES;
    return CITOYENNETE_SUMMARIES;
  };

  // Toggle answer reveal for practice
  const toggleExamQAnswer = (id: string) => {
    setShowAnswerForExamQ(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMindmapCorrection = (id: string) => {
    setShowMindmapCorrection(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Helper to render "FR : ... | AR : ..." or "FR : ...\nAR : ..." cleanly with proper LTR/RTL direction
  const renderBilingualText = (text: string, frClass = 'font-semibold text-gray-900 dark:text-gray-100', arClass = 'text-gray-700 dark:text-gray-300 font-medium') => {
    const normalized = text.trim();
    const lines = normalized.split('\n').filter(Boolean);
    if (lines.length === 2 && /^(?:\d+\.\s*)?FR(?:\s*\([^)]+\))?\s*:/.test(lines[0]) && /^(?:\d+\.\s*)?AR(?:\s*\([^)]+\))?\s*:/.test(lines[1])) {
      return (
        <div className="space-y-1">
          <p className={frClass} dir="ltr">{lines[0]}</p>
          <p className={arClass} dir="rtl">{lines[1]}</p>
        </div>
      );
    }

    return (
      <div className="space-y-1.5">
        {lines.map((line, idx) => {
          const pipeMatch = line.match(/^(.+?)\s*\|\s*((?:AR(?:\s*\([^)]+\))?\s*:|[\u0600-\u06FF]).*)$/);
          if (pipeMatch) {
            return (
              <div key={idx} className="space-y-0.5 pb-1 last:pb-0 border-b border-gray-100/70 dark:border-gray-800/70 last:border-0">
                <p className={frClass} dir="ltr">{pipeMatch[1].trim()}</p>
                <p className={arClass} dir="rtl">{pipeMatch[2].trim()}</p>
              </div>
            );
          }
          const isFrLine = /^(?:\d+\.\s*)?FR(?:\s*\([^)]+\))?\s*:/.test(line);
          return (
            <p
              key={idx}
              className={isFrLine ? frClass : arClass}
              dir={isFrLine ? 'ltr' : 'auto'}
            >
              {line}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-[99999] bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 select-none"
      onClick={(e) => {
        // Explicitly prevent closing when clicking the backdrop
        e.stopPropagation();
      }}
    >
      <div
        className="w-full max-w-4xl h-[92vh] max-h-[850px] bg-white dark:bg-[#1f1f1f] text-gray-800 dark:text-gray-100 rounded-3xl shadow-2xl border-2 border-purple-500/30 flex flex-col overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ================= Header ================= */}
        <div className="bg-gradient-to-r from-primary via-purple-700 to-accent text-white px-5 py-3.5 flex items-center justify-between shadow-md relative z-10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-xl shadow-inner border border-white/30 text-yellow-300">
              <i className="fas fa-user-astronaut"></i>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-black text-base sm:text-lg">
                  المساعد الذكي للثالثة إعدادي (3AC)
                </h2>
                <span className="bg-yellow-400 text-purple-950 font-black text-[10px] px-2 py-0.5 rounded-full shadow-sm">
                  الإطار المرجعي
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {nav.view !== 'ROOT' && (
              <button
                onClick={resetToRoot}
                className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition flex items-center gap-1.5 border border-white/20 active:scale-95"
                title="الرجوع للقائمة الرئيسية"
              >
                <i className="fas fa-home"></i>
                <span className="hidden sm:inline">الرئيسية</span>
              </button>
            )}

            {/* Close Button ONLY (Rule requirement) */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/20 hover:bg-rose-600 text-white flex items-center justify-center transition border border-white/30 shadow-md active:scale-95"
              title="إغلاق المساعد"
              aria-label="Close"
            >
              <i className="fas fa-times text-base font-bold"></i>
            </button>
          </div>
        </div>

        {/* ================= Content Area ================= */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-gradient-to-b from-purple-50/30 to-white dark:from-[#181818] dark:to-[#222]">

          {/* ================= 1. ROOT VIEW ================= */}
          {nav.view === 'ROOT' && (
            <div className="space-y-6 max-w-2xl mx-auto py-2">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-purple-300 rounded-full text-xs font-black">
                  <i className="fas fa-compass"></i>
                  <span>أقسام المساعد الذكي</span>
                </div>
              </div>

              {/* Four Main Sections (Clean, without small explanatory subtitle texts) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* 1. اللغة الفرنسية */}
                <button
                  onClick={() => setNav({ view: 'FR_MENU' })}
                  className="p-5 rounded-2xl bg-white dark:bg-[#2a2a2a] border-2 border-purple-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-right group flex flex-col justify-between h-36 active:scale-98"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      🇫🇷
                    </span>
                    <span className="text-xs font-black text-primary bg-primary/10 px-2 py-1 rounded-lg">
                      الدورة 1 و 2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-primary transition">
                      اللغة الفرنسية (Français)
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-primary dark:text-purple-300 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span>الدروس، الرسائل والقواعد</span>
                    <i className="fas fa-chevron-left group-hover:-translate-x-1 transition-transform"></i>
                  </div>
                </button>

                {/* 2. الاجتماعيات */}
                <button
                  onClick={() => setNav({ view: 'HG_BRANCHES' })}
                  className="p-5 rounded-2xl bg-white dark:bg-[#2a2a2a] border-2 border-amber-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-right group flex flex-col justify-between h-36 active:scale-98"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 dark:text-amber-300 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      📜
                    </span>
                    <span className="text-xs font-black text-amber-600 bg-amber-100 dark:bg-amber-950 px-2 py-1 rounded-lg">
                      3 مكونات
                    </span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-amber-600 transition">
                      الاجتماعيات (التاريخ، الجغرافيا، المواطنة)
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-amber-600 dark:text-amber-400 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span>دخول المواد الثلاث</span>
                    <i className="fas fa-chevron-left group-hover:-translate-x-1 transition-transform"></i>
                  </div>
                </button>

                {/* 3. التربية الإسلامية */}
                <button
                  onClick={() => setNav({ view: 'ISLAMIC_MENU' })}
                  className="p-5 rounded-2xl bg-white dark:bg-[#2a2a2a] border-2 border-teal-200 dark:border-gray-700 hover:border-teal-500 dark:hover:border-teal-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-right group flex flex-col justify-between h-36 active:scale-98 sm:col-span-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/70 text-teal-600 dark:text-teal-300 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      🕌
                    </span>
                    <span className="text-xs font-black text-teal-600 bg-teal-100 dark:bg-teal-950 px-2 py-1 rounded-lg">
                      المداخل الخمسة + القرآن
                    </span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-teal-600 transition">
                      التربية الإسلامية
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-teal-600 dark:text-teal-400 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span>دخول الدروس والمصطلحات والخطاطات</span>
                    <i className="fas fa-chevron-left group-hover:-translate-x-1 transition-transform"></i>
                  </div>
                </button>

                {/* 4. تدريب الامتحان المحلي */}
                <button
                  onClick={() => setNav({ view: 'EXAM_LIST', examType: 'local' })}
                  className="p-5 rounded-2xl bg-white dark:bg-[#2a2a2a] border-2 border-emerald-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-right group flex flex-col justify-between h-36 active:scale-98"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-300 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      📝
                    </span>
                    <span className="text-xs font-black text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-2 py-1 rounded-lg">
                      دورة يناير
                    </span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-emerald-600 transition">
                      تدريب الامتحان المحلي
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span>بدء التدريب المحلي</span>
                    <i className="fas fa-chevron-left group-hover:-translate-x-1 transition-transform"></i>
                  </div>
                </button>

                {/* 5. تدريب الامتحان الجهوي */}
                <button
                  onClick={() => setNav({ view: 'EXAM_LIST', examType: 'regional' })}
                  className="p-5 rounded-2xl bg-white dark:bg-[#2a2a2a] border-2 border-rose-200 dark:border-gray-700 hover:border-rose-500 dark:hover:border-rose-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-right group flex flex-col justify-between h-36 active:scale-98"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-950/70 text-rose-600 dark:text-rose-300 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      🎓
                    </span>
                    <span className="text-xs font-black text-rose-600 bg-rose-100 dark:bg-rose-950 px-2 py-1 rounded-lg">
                      دورة يونيو
                    </span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-rose-600 transition">
                      تدريب الامتحان الجهوي
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-rose-600 dark:text-rose-400 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span>بدء التدريب الجهوي</span>
                    <i className="fas fa-chevron-left group-hover:-translate-x-1 transition-transform"></i>
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* ================= 2A. FRENCH MENU ================= */}
          {nav.view === 'FR_MENU' && (
            <div className="space-y-6 max-w-2xl mx-auto py-2">
              <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇫🇷</span>
                  <h3 className="font-black text-xl text-gray-900 dark:text-white">
                    مادة اللغة الفرنسية (3AC)
                  </h3>
                </div>
                <button
                  onClick={() => setNav({ view: 'ROOT' })}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>الرئيسية</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. جميع الدروس الدورة 1 و 2 */}
                <button
                  onClick={() => setNav({ view: 'FR_LESSONS' })}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-blue-200 dark:border-gray-700 hover:border-blue-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-600 transition">
                    دروس مقرر Passerelle (الدورة 1 و 2)
                  </h4>
                </button>

                {/* 2. نماذج الرسائل */}
                <button
                  onClick={() => setNav({ view: 'FR_LIST' })}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-indigo-200 dark:border-gray-700 hover:border-indigo-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-envelope-open-text"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-indigo-600 transition">
                    نماذج الرسائل (الدورة الأولى)
                  </h4>
                </button>

                {/* 3. المفاهيم والقواعد */}
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setNav({ view: 'FR_TERMS' });
                  }}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-emerald-200 dark:border-gray-700 hover:border-emerald-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-book-reader"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-emerald-600 transition">
                    المفاهيم والمصطلحات والقواعد
                  </h4>
                </button>

                {/* 4. منهجية الامتحان الجهوي */}
                <button
                  onClick={() => setNav({ view: 'FR_METHODOLOGY' })}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-amber-200 dark:border-gray-700 hover:border-amber-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-pen-fancy"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-amber-600 transition">
                    منهجية الامتحان الجهوي (الفهم + اللغة + الإنشاء)
                  </h4>
                </button>
              </div>
            </div>
          )}

          {/* ================= 2B. FRENCH LESSONS LIST (CYCLE 1 & 2 - PASSERELLE 3AC) ================= */}
          {nav.view === 'FR_LESSONS' && (() => {
            const cycle1 = FRENCH_SUMMARIES.filter(l => l.cycle === 'الدورة الأولى');
            const cycle2 = FRENCH_SUMMARIES.filter(l => l.cycle === 'الدورة الثانية');

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-6">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇫🇷</span>
                    <h3 className="font-black text-lg text-gray-900 dark:text-white">
                      دروس مقرر Passerelle 3AC (شرح مزدوج: فرنسية + عربية)
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'FR_MENU' })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>رجوع</span>
                  </button>
                </div>

                {[
                  { label: 'الدورة الأولى — Passerelle S1 (La Correspondance : Séquences 1–4)', items: cycle1, badgeClass: 'bg-blue-100 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border-blue-500' },
                  { label: 'الدورة الثانية — Passerelle S2 (La Nouvelle & الإطار المرجعي : Séquences 1–4)', items: cycle2, badgeClass: 'bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-300 border-purple-500' }
                ].map((group) => (
                  <div key={group.label} className="space-y-2.5">
                    <div className={`px-3 py-2 rounded-xl border-r-4 text-xs font-black flex items-center justify-between ${group.badgeClass}`}>
                      <span>📘 {group.label}</span>
                      <span>{group.items.length} دروس</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {group.items.map(lesson => (
                        <button
                          key={lesson.id}
                          onClick={() => setNav({ view: 'FR_LESSON_DETAIL', lessonId: lesson.id })}
                          className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 hover:border-blue-500 shadow-sm hover:shadow-md transition text-right flex items-center justify-between gap-3 group active:scale-98"
                        >
                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md inline-block" dir="ltr">
                                {lesson.sequence}
                              </span>
                              <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md inline-block" dir="ltr">
                                {lesson.category}
                              </span>
                            </div>
                            <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                              {lesson.title}
                            </h4>
                            <p className="text-xs font-semibold text-primary" dir="ltr">
                              {lesson.frenchTitle}
                            </p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition">
                            <i className="fas fa-chevron-left text-xs"></i>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* ================= 2C. FRENCH LESSON DETAIL (BILINGUAL FR + AR) ================= */}
          {nav.view === 'FR_LESSON_DETAIL' && (() => {
            const lesson: FrenchLessonSummaryItem | undefined = FRENCH_SUMMARIES.find(l => l.id === nav.lessonId);
            if (!lesson) return null;

            const isExRevealed = !!showMindmapCorrection[lesson.id];

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-8">
                <div className="flex items-center justify-between gap-3 border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/70 px-2.5 py-0.5 rounded-md">
                        {lesson.cycle}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2.5 py-0.5 rounded-md" dir="ltr">
                        {lesson.sequence}
                      </span>
                      <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/70 px-2.5 py-0.5 rounded-md" dir="ltr">
                        {lesson.category}
                      </span>
                    </div>
                    <h3 className="font-black text-lg sm:text-xl text-gray-900 dark:text-white">
                      {lesson.title}
                    </h3>
                    <p className="text-xs font-bold text-primary mt-0.5" dir="ltr">
                      {lesson.frenchTitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'FR_LESSONS' })}
                    className="px-3.5 py-1.5 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold hover:bg-blue-600 hover:text-white transition flex items-center gap-1.5 flex-shrink-0"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>قائمة الدروس</span>
                  </button>
                </div>

                {/* تمهيد الدرس (بالفرنسية + الترجمة العربية) */}
                <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border-r-4 border-blue-500 text-xs sm:text-sm space-y-2">
                  <div className="font-black text-blue-800 dark:text-blue-300 flex items-center gap-2">
                    <i className="fas fa-compass"></i>
                    <span>تقديم الدرس وأهدافه (Introduction):</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/80 dark:bg-[#1e1e1e]/80 border border-blue-200/70 dark:border-blue-900/50 space-y-1.5">
                    <p className="font-bold text-gray-900 dark:text-gray-100 leading-relaxed" dir="ltr">
                      {lesson.introductionBilingual.fr}
                    </p>
                    <p className="text-blue-900 dark:text-blue-200 leading-relaxed font-medium pt-1.5 border-t border-blue-100 dark:border-blue-900/60" dir="rtl">
                      {lesson.introductionBilingual.ar}
                    </p>
                  </div>
                </div>

                {/* محاور الدرس (كل جملة فرنسية مع ترجمتها العربية) */}
                <div className="space-y-4">
                  {lesson.bilingualSections.map((section, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-4 rounded-2xl border-r-4 shadow-sm space-y-3 ${section.colorClass}`}
                    >
                      <div className="space-y-0.5">
                        <h4 className="font-black text-sm sm:text-base" dir="ltr">
                          {section.headingFr}
                        </h4>
                        <p className="font-bold text-xs sm:text-sm opacity-90" dir="rtl">
                          {section.headingAr}
                        </p>
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-[13px]">
                        {section.items.map((item, pIdx) => (
                          <li
                            key={pIdx}
                            className="p-3 rounded-xl bg-white/85 dark:bg-[#1e1e1e]/85 border border-black/5 dark:border-white/10 space-y-1.5"
                          >
                            <p className="font-bold text-gray-900 dark:text-gray-100 leading-relaxed" dir="ltr">
                              • {item.fr}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed pt-1 border-t border-gray-200/70 dark:border-gray-700/70" dir="rtl">
                              {item.ar}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* أمثلة فرنسية مترجمة */}
                {lesson.examplesFr && lesson.examplesFr.length > 0 && (
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 space-y-2.5">
                    <div className="font-black text-xs sm:text-sm text-primary flex items-center gap-2">
                      <i className="fas fa-quote-left"></i>
                      <span>أمثلة نموذجية بالفرنسية مع الترجمة:</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      {lesson.examplesFr.map((ex, eIdx) => (
                        <div key={eIdx} className="p-3 rounded-xl bg-gray-50 dark:bg-[#1f1f1f] border border-gray-100 dark:border-gray-700 space-y-1.5">
                          <p className="font-bold text-gray-900 dark:text-gray-100 whitespace-pre-line" dir="ltr">
                            {ex.fr}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 font-medium pt-1 border-t border-gray-200/70 dark:border-gray-700/70" dir="rtl">
                            {ex.ar}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* تنبيه الإطار المرجعي */}
                {lesson.examTipBilingual && (
                  <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-xs space-y-2">
                    <div className="font-black text-rose-800 dark:text-rose-300 flex items-center gap-2">
                      <i className="fas fa-exclamation-triangle"></i>
                      <span>تنبيه الإطار المرجعي للامتحان (Conseil d'examen):</span>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-rose-950 dark:text-rose-100 font-bold leading-relaxed" dir="ltr">
                        {lesson.examTipBilingual.fr}
                      </p>
                      <p className="text-rose-900 dark:text-rose-200 font-semibold leading-relaxed pt-1 border-t border-rose-200/70 dark:border-rose-800/70" dir="rtl">
                        {lesson.examTipBilingual.ar}
                      </p>
                    </div>
                  </div>
                )}

                {/* أبرز الخلاصات */}
                {lesson.keyTakeawaysBilingual && lesson.keyTakeawaysBilingual.length > 0 && (
                  <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-2.5">
                    <div className="font-black text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-center gap-2">
                      <i className="fas fa-star"></i>
                      <span>خلاصات مركزة للحفظ (À retenir):</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {lesson.keyTakeawaysBilingual.map((item, kIdx) => (
                        <div
                          key={kIdx}
                          className="p-3 rounded-xl bg-white dark:bg-[#262626] border border-amber-200 dark:border-amber-800/70 text-xs shadow-sm space-y-1"
                        >
                          <p className="font-bold text-gray-900 dark:text-gray-100" dir="ltr">
                            {item.fr}
                          </p>
                          <p className="text-amber-900 dark:text-amber-200 font-medium pt-1 border-t border-amber-100 dark:border-amber-900/50" dir="rtl">
                            {item.ar}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* تطبيق تفاعلي */}
                {lesson.miniExerciseBilingual && (
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-emerald-300 dark:border-emerald-800 space-y-3 text-xs">
                    <div className="font-black text-sm text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                      <i className="fas fa-tasks"></i>
                      <span>تطبيق سريع للتحقق من الفهم (Exercice):</span>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#1f1f1f] border border-gray-100 dark:border-gray-700 space-y-1.5">
                      <p className="font-bold text-gray-900 dark:text-gray-100 leading-relaxed" dir="ltr">
                        {lesson.miniExerciseBilingual.questionFr}
                      </p>
                      <p className="font-medium text-gray-700 dark:text-gray-300 leading-relaxed pt-1 border-t border-gray-200/70 dark:border-gray-700/70" dir="rtl">
                        {lesson.miniExerciseBilingual.questionAr}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleMindmapCorrection(lesson.id)}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition flex items-center gap-2 active:scale-95 text-xs shadow-sm"
                    >
                      <i className={`fas ${isExRevealed ? 'fa-eye-slash' : 'fa-check-circle'}`}></i>
                      <span>{isExRevealed ? 'إخفاء الجواب النموذجي' : 'إظهار الجواب النموذجي'}</span>
                    </button>
                    {isExRevealed && (
                      <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 animate-fadeIn space-y-1.5">
                        <span className="font-black text-emerald-900 dark:text-emerald-300 block mb-1">✅ التصحيح النموذجي (Corrigé):</span>
                        <p className="text-gray-900 dark:text-gray-100 font-bold whitespace-pre-line leading-relaxed" dir="ltr">
                          {lesson.miniExerciseBilingual.answerFr}
                        </p>
                        <p className="text-emerald-900 dark:text-emerald-200 font-semibold whitespace-pre-line leading-relaxed pt-1.5 border-t border-emerald-200 dark:border-emerald-800" dir="rtl">
                          {lesson.miniExerciseBilingual.answerAr}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* خاتمة الدرس */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border-r-4 border-emerald-500 text-xs sm:text-sm space-y-2">
                  <div className="font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                    <i className="fas fa-check-double"></i>
                    <span>خلاصة الدرس (Synthèse):</span>
                  </div>
                  <div className="space-y-1.5">
                    <p className="text-gray-900 dark:text-gray-100 leading-relaxed font-bold" dir="ltr">
                      {lesson.conclusionBilingual.fr}
                    </p>
                    <p className="text-emerald-950 dark:text-emerald-200 leading-relaxed font-medium pt-1 border-t border-emerald-200/70 dark:border-emerald-800/70" dir="rtl">
                      {lesson.conclusionBilingual.ar}
                    </p>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* ================= 2D. FRENCH TERMS & RULES ================= */}
          {nav.view === 'FR_TERMS' && (() => {
            const q = searchTerm.toLowerCase();
            const filteredTerms = FRENCH_TERMS.filter(t =>
              t.term.toLowerCase().includes(q) ||
              t.lessonName.toLowerCase().includes(q) ||
              t.unit.toLowerCase().includes(q) ||
              t.definition.toLowerCase().includes(q)
            );

            const lessons = Array.from(new Set(filteredTerms.map(t => t.lessonName)));

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-6">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇫🇷</span>
                    <h3 className="font-black text-lg text-gray-900 dark:text-white">
                      المفاهيم والقواعد: اللغة الفرنسية
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'FR_MENU' })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>رجوع</span>
                  </button>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="ابحث بالعربية أو الفرنسية (مثال: subjonctif, cause, السرد)..."
                    className="w-full p-3 pr-10 rounded-xl bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 text-xs font-semibold focus:border-blue-500 outline-none text-gray-900 dark:text-white"
                  />
                  <i className="fas fa-search absolute right-3.5 top-3.5 text-gray-400 text-xs"></i>
                </div>

                {lessons.length === 0 ? (
                  <div className="p-8 text-center text-gray-400 font-bold text-xs bg-gray-50 dark:bg-[#252525] rounded-2xl">
                    لا توجد مصطلحات مطابقة لبحثك.
                  </div>
                ) : (
                  lessons.map((lessonName, lIdx) => {
                    const lessonTerms = filteredTerms.filter(t => t.lessonName === lessonName);
                    return (
                      <div key={lIdx} className="space-y-3">
                        <div className="p-2.5 rounded-xl bg-blue-100/70 dark:bg-blue-950/60 border-r-4 border-blue-600 text-xs font-black text-blue-900 dark:text-blue-200 flex items-center justify-between gap-2 flex-wrap">
                          <span>📚 {lessonName}</span>
                          <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-300">
                            {lessonTerms[0]?.unit}
                          </span>
                        </div>

                        <div className="space-y-2.5 pr-2">
                          {lessonTerms.map(term => (
                            <div
                              key={term.id}
                              className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 shadow-sm space-y-2 text-xs"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <h4 className="font-black text-sm sm:text-base text-blue-700 dark:text-blue-400" dir="auto">
                                  {term.term}
                                </h4>
                                <span className="text-[10px] bg-blue-50 dark:bg-blue-950 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-full font-bold flex-shrink-0">
                                  الإطار المرجعي
                                </span>
                              </div>
                              <div className="p-3 bg-blue-50/50 dark:bg-[#202020] rounded-xl border-r-4 border-blue-500 leading-relaxed">
                                {renderBilingualText(term.definition)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            );
          })()}

          {/* ================= 2E. FRENCH EXAM METHODOLOGY ================= */}
          {nav.view === 'FR_METHODOLOGY' && (() => {
            const isMethodCorrectionRevealed = !!showMindmapCorrection['french-methodology-practice'];

            return (
              <div className="space-y-6 max-w-3xl mx-auto pb-8">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div>
                    <h3 className="font-black text-lg sm:text-xl text-blue-700 dark:text-blue-400">
                      {FRENCH_EXAM_METHODOLOGY.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'FR_MENU' })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5 flex-shrink-0"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>رجوع</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <h4 className="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
                    <i className="fas fa-list-ol text-blue-600"></i>
                    <span>مكونات الامتحان الجهوي الثلاثة حسب الإطار المرجعي:</span>
                  </h4>

                  <div className="space-y-3">
                    {FRENCH_EXAM_METHODOLOGY.steps.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 space-y-2 text-xs"
                      >
                        <h5 className="font-black text-sm text-blue-700 dark:text-blue-400">
                          {st.stepName}
                        </h5>
                        <div className="leading-relaxed">
                          {renderBilingualText(st.description, 'font-bold text-gray-700 dark:text-gray-200', 'text-gray-500 dark:text-gray-400 font-medium')}
                        </div>
                        <ul className="space-y-2 pr-1 pt-1">
                          {st.details.map((dt, dIdx) => (
                            <li key={dIdx} className="p-2.5 rounded-xl bg-gray-50 dark:bg-[#1f1f1f] border border-gray-100 dark:border-gray-800">
                              {renderBilingualText(dt, 'font-bold text-gray-900 dark:text-gray-100', 'text-gray-700 dark:text-gray-300 font-medium')}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-[#252525] border-2 border-blue-300 dark:border-blue-900 space-y-4 text-xs">
                  <div>
                    <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-black uppercase">
                      نموذج تطبيقي مصحح
                    </span>
                    <h4 className="font-black text-base text-gray-900 dark:text-white mt-1">
                      {FRENCH_EXAM_METHODOLOGY.fullExample.subjectTitle}
                    </h4>
                    <div className="p-3 bg-white dark:bg-[#1e1e1e] rounded-xl border border-blue-200 dark:border-gray-700 mt-2 leading-relaxed whitespace-pre-line">
                      {renderBilingualText(FRENCH_EXAM_METHODOLOGY.fullExample.subjectContext)}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="font-black text-blue-800 dark:text-blue-400">المطلوب (Consignes):</span>
                    <ul className="space-y-1.5 text-gray-700 dark:text-gray-300">
                      {FRENCH_EXAM_METHODOLOGY.fullExample.instructions.map((ins, iIdx) => (
                        <li key={iIdx} className="p-2 rounded-lg bg-white/70 dark:bg-[#1e1e1e]/70">
                          {renderBilingualText(ins)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-blue-200 dark:border-gray-700">
                    <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-blue-100 dark:border-gray-800 space-y-1">
                      <span className="font-black text-blue-700 dark:text-blue-400 block">1. الفهم (Compréhension):</span>
                      {renderBilingualText(FRENCH_EXAM_METHODOLOGY.fullExample.sampleIntro)}
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-blue-100 dark:border-gray-800 space-y-2">
                      <span className="font-black text-amber-700 dark:text-amber-400 block">2 و3. اللغة وتتمة القصة (Langue & Rédaction):</span>
                      {FRENCH_EXAM_METHODOLOGY.fullExample.sampleBody.map((bPara, bIdx) => (
                        <div key={bIdx} className="pb-2 border-b border-gray-100 dark:border-gray-800 last:border-0">
                          {renderBilingualText(bPara)}
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-blue-100 dark:border-gray-800 space-y-1">
                      <span className="font-black text-emerald-700 dark:text-emerald-400 block">4. الوضعية النهائية (Situation finale):</span>
                      {renderBilingualText(FRENCH_EXAM_METHODOLOGY.fullExample.sampleConclusion)}
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white dark:bg-[#282828] border-2 border-emerald-300 dark:border-emerald-800 space-y-3 text-xs">
                  <h4 className="font-black text-sm text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                    <i className="fas fa-pencil-alt"></i>
                    <span>{FRENCH_EXAM_METHODOLOGY.practiceExercise.title}</span>
                  </h4>
                  <div className="bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl leading-relaxed">
                    {renderBilingualText(FRENCH_EXAM_METHODOLOGY.practiceExercise.subjectText)}
                  </div>
                  <div>
                    {renderBilingualText(FRENCH_EXAM_METHODOLOGY.practiceExercise.task, 'font-bold text-gray-800 dark:text-gray-100', 'font-bold text-gray-700 dark:text-gray-200')}
                  </div>

                  <div className="pt-1">
                    <button
                      onClick={() => toggleMindmapCorrection('french-methodology-practice')}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition flex items-center gap-2 active:scale-95 text-xs shadow-sm"
                    >
                      <i className={`fas ${isMethodCorrectionRevealed ? 'fa-eye-slash' : 'fa-check-circle'}`}></i>
                      <span>{isMethodCorrectionRevealed ? 'إخفاء التصحيح النموذجي' : 'إظهار التصحيح النموذجي والتعليل'}</span>
                    </button>
                  </div>

                  {isMethodCorrectionRevealed && (
                    <div className="mt-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 space-y-2 animate-fadeIn">
                      <div>
                        <span className="font-black text-emerald-900 dark:text-emerald-300 block mb-1">📋 التوجيه المنهجي:</span>
                        {renderBilingualText(FRENCH_EXAM_METHODOLOGY.modelCorrection.plan)}
                      </div>
                      <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800">
                        <span className="font-black text-emerald-900 dark:text-emerald-300 block mb-1">✅ الإجابة النموذجية:</span>
                        {renderBilingualText(FRENCH_EXAM_METHODOLOGY.modelCorrection.detailedResponse)}
                      </div>
                      <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800 text-gray-600 dark:text-gray-300">
                        <span className="font-black text-emerald-800 dark:text-emerald-400 block mb-1">💡 تعليل التصحيح:</span>
                        {renderBilingualText(FRENCH_EXAM_METHODOLOGY.modelCorrection.reasoning)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

          {/* ================= 2. FRENCH LETTERS LIST ================= */}
          {nav.view === 'FR_LIST' && (
            <div className="space-y-4 max-w-2xl mx-auto py-2">
              <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇫🇷</span>
                  <h3 className="font-black text-xl text-gray-900 dark:text-white">
                    رسائل مادة اللغة الفرنسية (3AC)
                  </h3>
                </div>
                <button
                  onClick={() => setNav({ view: 'FR_MENU' })}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>رجوع</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {FRENCH_LETTER_TYPES.map(letter => (
                  <button
                    key={letter.id}
                    onClick={() => setNav({ view: 'FR_DETAIL', letterId: letter.id })}
                    className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 hover:border-primary shadow-sm hover:shadow-md transition text-right flex items-center justify-between group active:scale-98"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-primary transition">
                        {letter.title}
                      </h4>
                      <p className="text-xs text-primary font-semibold mt-0.5" dir="ltr">
                        {letter.frenchTitle}
                      </p>
                    </div>
                    <i className="fas fa-chevron-left text-xs text-gray-400 group-hover:text-primary transition"></i>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ================= 3. FRENCH LETTER DETAIL (Rich pedagogical presentation) ================= */}
          {nav.view === 'FR_DETAIL' && (() => {
            const letter = FRENCH_LETTER_TYPES.find(l => l.id === nav.letterId);
            if (!letter) return null;

            const getDefaultPartTip = (frenchPart: string, customTip?: string) => {
              if (customTip) return customTip;
              const p = frenchPart.toLowerCase();
              if (p.includes('lieu') || p.includes('date')) return 'أعلى اليمين متبوعاً بالفاصلة والتاريخ كاملاً';
              if (p.includes('émetteur') || p.includes('emetteur')) return 'أعلى اليسار: الاسم الكامل، الصفة، المؤسسة والمدينة';
              if (p.includes('destinataire')) return 'تحت التاريخ جهة اليمين مع صفة المسؤول والمدينة';
              if (p.includes('objet')) return 'موجز ودقيق يحدد الغرض من المراسلة';
              if (p.includes('appel')) return 'عبارة نداء رسمية مع المنصب متبوعة بفاصلة';
              if (p.includes('corps') || p.includes('texte') || p.includes('développement')) return 'فقرات واضحة: طرح الموضوع، التفسير والأهداف، ثم الالتزام';
              if (p.includes('politesse') || p.includes('clôture') || p.includes('finale')) return 'عبارة ختامية رسمية مهذبة تتضمن تكرار صفة المنادى والاحترام';
              if (p.includes('signature')) return 'أسفل اليمين: الصفة والاسم الشخصي والعائلي';
              return 'عنصر إلزامي في هيكل الرسالة الرسمية';
            };

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-8">
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div>
                    <h3 className="font-black text-xl text-primary">
                      {letter.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold" dir="ltr">
                      {letter.frenchTitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'FR_LIST' })}
                    className="px-3.5 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-primary dark:text-purple-300 text-xs font-bold hover:bg-primary hover:text-white transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>قائمة الرسائل</span>
                  </button>
                </div>

                {/* 1. السياق والاستعمال */}
                <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-[#252525] border border-purple-200 dark:border-gray-700 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 font-black text-primary">
                    <i className="fas fa-info-circle"></i>
                    <span>سياق الرسالة واستعمالها في الامتحان:</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                    {letter.context}
                  </p>
                </div>

                {/* 2. الهيكل الإلزامي للرسالة */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
                      <i className="fas fa-layer-group text-primary"></i>
                      <span>الهيكل الإلزامي للرسالة وعناصره (Structure conventionnelle):</span>
                    </h4>
                    <span className="text-[10px] font-black bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 px-2.5 py-0.5 rounded-full">
                      {letter.structure.length} عناصر
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2 text-xs">
                    {letter.structure.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-gray-50 dark:bg-[#222] border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row sm:items-start justify-between gap-2"
                      >
                        <div className="sm:w-1/3">
                          <span className="font-bold text-primary block" dir="ltr">
                            {idx + 1}. {item.frenchPart}
                          </span>
                          <span className="text-[11px] text-gray-500 dark:text-gray-400">
                            {item.part}
                          </span>
                        </div>
                        <div className="sm:w-2/3">
                          <div className="p-2.5 bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-200 dark:border-gray-800 font-mono text-[11px] text-gray-800 dark:text-gray-200 whitespace-pre-wrap" dir="ltr">
                            {item.content}
                          </div>
                          <p className="text-[10px] text-amber-700 dark:text-amber-400 mt-1 font-medium">
                            💡 {getDefaultPartTip(item.frenchPart, item.tips)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. النموذج التطبيقي الكامل للرسالة */}
                <div className="p-5 rounded-2xl bg-amber-50/40 dark:bg-[#252525] border-2 border-amber-200 dark:border-gray-700 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-black text-amber-900 dark:text-amber-300">
                    <div className="flex items-center gap-2">
                      <i className="fas fa-file-alt"></i>
                      <span>النموذج التطبيقي الكامل للرسالة (Modèle complet):</span>
                    </div>
                    <span className="text-[10px] bg-amber-200/60 dark:bg-amber-900/40 px-2 py-0.5 rounded-full">
                      نموذج كامل ومضبوط
                    </span>
                  </div>
                  <div className="p-4 bg-white dark:bg-[#1c1c1c] rounded-xl border border-amber-100 dark:border-gray-800 font-mono text-xs text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed shadow-inner" dir="ltr">
                    {letter.sampleFullLetter}
                  </div>
                </div>

                {/* 4. عبارات وصيغ جاهزة للاستعمال */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 space-y-2.5">
                  <div className="font-bold text-xs text-primary flex items-center gap-2">
                    <i className="fas fa-key"></i>
                    <span>عبارات وصيغ جاهزة للاستعمال (Formules clés):</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5 text-xs">
                    {letter.keyExpressions.map((expr, eIdx) => (
                      <div key={eIdx} className="p-2.5 bg-gray-50 dark:bg-[#1f1f1f] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-1 border border-gray-100 dark:border-gray-700">
                        <span className="font-semibold text-gray-800 dark:text-gray-100" dir="ltr">« {expr.fr} »</span>
                        <span className="text-gray-500 dark:text-gray-400 text-[11px] font-medium">{expr.ar}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. موضوع تدريبي للامتحان الجهوي */}
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 space-y-2.5 text-xs">
                  <div className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                    <i className="fas fa-pen-nib"></i>
                    <span>موضوع تدريبي للامتحان (Sujet d'entraînement):</span>
                  </div>
                  <p className="font-medium text-gray-800 dark:text-gray-200 p-2.5 bg-white dark:bg-[#1d1d1d] rounded-xl border border-emerald-200 dark:border-emerald-900" dir="ltr">
                    {letter.practiceTopic.subject}
                  </p>
                  {letter.practiceTopic.expectedPlan && letter.practiceTopic.expectedPlan.length > 0 && (
                    <div className="pt-1">
                      <span className="font-bold text-emerald-900 dark:text-emerald-300 block mb-1">📋 عناصر الإجابة والتصميم المتوقع:</span>
                      <ul className="list-disc list-inside space-y-0.5 text-gray-700 dark:text-gray-300 font-medium pr-1" dir="ltr">
                        {letter.practiceTopic.expectedPlan.map((planItem, pIdx) => (
                          <li key={pIdx}>{planItem}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {letter.practiceTopic.modelAnswer && (
                    <div className="pt-1 border-t border-emerald-200 dark:border-emerald-800 text-[11px] text-gray-600 dark:text-gray-300">
                      <span className="font-bold text-emerald-800 dark:text-emerald-400 block mb-0.5">💡 توجيه الإنجاز:</span>
                      <p>{letter.practiceTopic.modelAnswer}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

          {/* ================= 4. HG BRANCHES (Histoire, Geo, Citoyennete) ================= */}
          {nav.view === 'HG_BRANCHES' && (
            <div className="space-y-5 max-w-2xl mx-auto py-2">
              <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="font-black text-xl text-gray-900 dark:text-white">
                    مادة الاجتماعيات (3AC)
                  </h3>
                </div>
                <button
                  onClick={() => setNav({ view: 'ROOT' })}
                  className="px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>رجوع</span>
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-1">
                {/* التاريخ */}
                <button
                  onClick={() => setNav({ view: 'HG_SUBJECT_MENU', subject: 'histoire' })}
                  className="p-5 rounded-2xl bg-white dark:bg-[#2a2a2a] border-2 border-amber-200 dark:border-gray-700 hover:border-amber-500 shadow-sm hover:shadow-lg transition text-right flex items-center justify-between group active:scale-98"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <i className="fas fa-landmark"></i>
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-amber-600 transition">
                        1. مكون التاريخ
                      </h4>
                    </div>
                  </div>
                  <i className="fas fa-chevron-left text-gray-400 group-hover:text-amber-600 transition"></i>
                </button>

                {/* الجغرافيا */}
                <button
                  onClick={() => setNav({ view: 'HG_SUBJECT_MENU', subject: 'geographie' })}
                  className="p-5 rounded-2xl bg-white dark:bg-[#2a2a2a] border-2 border-blue-200 dark:border-gray-700 hover:border-blue-500 shadow-sm hover:shadow-lg transition text-right flex items-center justify-between group active:scale-98"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/70 text-blue-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <i className="fas fa-globe-africa"></i>
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-blue-600 transition">
                        2. مكون الجغرافيا
                      </h4>
                    </div>
                  </div>
                  <i className="fas fa-chevron-left text-gray-400 group-hover:text-blue-600 transition"></i>
                </button>

                {/* التربية على المواطنة */}
                <button
                  onClick={() => setNav({ view: 'HG_SUBJECT_MENU', subject: 'citoyennete' })}
                  className="p-5 rounded-2xl bg-white dark:bg-[#2a2a2a] border-2 border-purple-200 dark:border-gray-700 hover:border-purple-500 shadow-sm hover:shadow-lg transition text-right flex items-center justify-between group active:scale-98"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <i className="fas fa-balance-scale"></i>
                    </div>
                    <div>
                      <h4 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-purple-600 transition">
                        3. مكون التربية على المواطنة
                      </h4>
                    </div>
                  </div>
                  <i className="fas fa-chevron-left text-gray-400 group-hover:text-purple-600 transition"></i>
                </button>
              </div>
            </div>
          )}

          {/* ================= 5. HG SUBJECT MENU (Clean distinction between sections) ================= */}
          {nav.view === 'HG_SUBJECT_MENU' && (
            <div className="space-y-6 max-w-2xl mx-auto py-2">
              <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    <i className={getSubjectIcon(nav.subject)}></i>
                  </span>
                  <div>
                    <h3 className="font-black text-xl text-gray-900 dark:text-white">
                      {getSubjectTitle(nav.subject)}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setNav({ view: 'HG_BRANCHES' })}
                  className="px-3 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>المواد الثلاث</span>
                </button>
              </div>

              {/* Distinction requested: Lessons, Terms, Mindmaps, Essay, Graphs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. ملخصات الدروس */}
                <button
                  onClick={() => setNav({ view: 'HG_LESSONS', subject: nav.subject })}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-indigo-200 dark:border-gray-700 hover:border-indigo-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-indigo-600 transition">
                    ملخصات الدروس
                  </h4>
                </button>

                {/* 2. المفاهيم والمصطلحات */}
                <button
                  onClick={() => setNav({ view: 'HG_TERMS', subject: nav.subject })}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-emerald-200 dark:border-gray-700 hover:border-emerald-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-book-reader"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-emerald-600 transition">
                    المفاهيم والمصطلحات الرسمية
                  </h4>
                </button>

                {/* 3. الخطاطات الذهنية والتعليمية */}
                <button
                  onClick={() => setNav({ view: 'HG_MINDMAPS', subject: nav.subject })}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-purple-200 dark:border-gray-700 hover:border-purple-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-primary flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-primary transition">
                    الخطاطات التعليمية
                  </h4>
                </button>

                {/* 4. منهجية كتابة موضوع مقالي */}
                <button
                  onClick={() => setNav({ view: 'HG_ESSAY', originSubject: nav.subject })}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-amber-200 dark:border-gray-700 hover:border-amber-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-pen-fancy"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-amber-600 transition">
                    منهجية كتابة موضوع مقالي
                  </h4>
                </button>

                {/* 5. منهجية إنجاز المبيانات (Only in Geography as requested) */}
                {nav.subject === 'geographie' && (
                  <button
                    onClick={() => setNav({ view: 'HG_GRAPHS' })}
                    className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-blue-200 dark:border-gray-700 hover:border-blue-500 shadow-sm hover:shadow-md transition text-right group active:scale-98 sm:col-span-2"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/70 text-blue-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                      <i className="fas fa-chart-column"></i>
                    </div>
                    <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-blue-600 transition">
                      منهجية إنجاز المبيانات الجغرافية
                    </h4>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ================= 5B. HG LESSONS LIST ================= */}
          {nav.view === 'HG_LESSONS' && (() => {
            const lessons = getSummariesBySubject(nav.subject);
            const cycle1 = lessons.filter(l => l.cycle === 'الدورة الأولى');
            const cycle2 = lessons.filter(l => l.cycle === 'الدورة الثانية');

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-6">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">
                      <i className={getSubjectIcon(nav.subject)}></i>
                    </span>
                    <h3 className="font-black text-lg text-gray-900 dark:text-white">
                      ملخصات الدروس: {getSubjectTitle(nav.subject)}
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'HG_SUBJECT_MENU', subject: nav.subject })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>رجوع</span>
                  </button>
                </div>

                {[
                  { label: 'الدورة الأولى', items: cycle1, badgeClass: 'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border-indigo-500' },
                  { label: 'الدورة الثانية', items: cycle2, badgeClass: 'bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border-purple-500' }
                ].map((group) => (
                  <div key={group.label} className="space-y-2.5">
                    <div className={`px-3 py-2 rounded-xl border-r-4 text-xs font-black flex items-center justify-between ${group.badgeClass}`}>
                      <span>📘 {group.label}</span>
                      <span>{group.items.length} دروس</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {group.items.map(lesson => (
                        <button
                          key={lesson.id}
                          onClick={() => setNav({ view: 'HG_LESSON_DETAIL', lessonId: lesson.id, subject: nav.subject })}
                          className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 hover:border-indigo-500 shadow-sm hover:shadow-md transition text-right flex items-center justify-between group active:scale-98"
                        >
                          <div className="space-y-1">
                            <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-md inline-block">
                              {lesson.unit}
                            </span>
                            <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
                              {lesson.title}
                            </h4>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition">
                            <i className="fas fa-chevron-left text-xs"></i>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* ================= 5C. HG LESSON DETAIL (Direct content without remaining lists) ================= */}
          {nav.view === 'HG_LESSON_DETAIL' && (() => {
            const lessons = getSummariesBySubject(nav.subject);
            const lesson = lessons.find(l => l.id === nav.lessonId);
            if (!lesson) return null;

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-8">
                <div className="flex items-center justify-between gap-3 border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-950/70 px-2.5 py-0.5 rounded-md">
                        {lesson.cycle}
                      </span>
                      <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/70 px-2.5 py-0.5 rounded-md">
                        {lesson.unit}
                      </span>
                    </div>
                    <h3 className="font-black text-lg sm:text-xl text-gray-900 dark:text-white">
                      {lesson.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'HG_LESSONS', subject: nav.subject })}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold hover:bg-indigo-600 hover:text-white transition flex items-center gap-1.5 flex-shrink-0"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>قائمة الدروس</span>
                  </button>
                </div>

                {/* مقدمة الدرس */}
                <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border-r-4 border-indigo-500 text-xs sm:text-sm space-y-1.5">
                  <div className="font-black text-indigo-800 dark:text-indigo-300 flex items-center gap-2">
                    <i className="fas fa-compass"></i>
                    <span>تمهيد إشكالي</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                    {lesson.introduction}
                  </p>
                </div>

                {/* محاور الدرس */}
                <div className="space-y-4">
                  {lesson.sections.map((section, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-4 rounded-2xl border-r-4 shadow-sm space-y-2.5 ${section.colorClass}`}
                    >
                      <h4 className="font-black text-sm sm:text-base flex items-center gap-2">
                        <span>{section.heading}</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-[13px] leading-relaxed font-medium">
                        {section.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* نقاط أساسية للحفظ */}
                {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
                  <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-2.5">
                    <div className="font-black text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-center gap-2">
                      <i className="fas fa-star"></i>
                      <span>أبرز الخلاصات المركزة</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {lesson.keyTakeaways.map((item, kIdx) => (
                        <span
                          key={kIdx}
                          className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#262626] border border-amber-200 dark:border-amber-800/70 text-xs font-bold text-gray-800 dark:text-gray-200 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* خاتمة الدرس */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border-r-4 border-emerald-500 text-xs sm:text-sm space-y-1.5">
                  <div className="font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                    <i className="fas fa-check-double"></i>
                    <span>خاتمة تركيبية</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                    {lesson.conclusion}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* ================= 6. HG TERMS SECTION (Organized by Subject & Lesson) ================= */}
          {nav.view === 'HG_TERMS' && (() => {
            const terms = getTermsBySubject(nav.subject);
            const filteredTerms = terms.filter(t =>
              t.term.includes(searchTerm) ||
              t.lessonName.includes(searchTerm) ||
              t.definition.includes(searchTerm)
            );

            // Group terms by lesson
            const lessons = Array.from(new Set(filteredTerms.map(t => t.lessonName)));

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-6">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">
                      <i className={getSubjectIcon(nav.subject)}></i>
                    </span>
                    <div>
                      <h3 className="font-black text-lg text-gray-900 dark:text-white">
                        المفاهيم والمصطلحات: {getSubjectTitle(nav.subject)}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'HG_SUBJECT_MENU', subject: nav.subject })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>رجوع</span>
                  </button>
                </div>

                {/* Search Bar for Terms */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="ابحث عن مصطلح أو اسم الدرس..."
                    className="w-full p-3 pr-10 rounded-xl bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 text-xs font-semibold focus:border-primary outline-none text-gray-900 dark:text-white"
                  />
                  <i className="fas fa-search absolute right-3.5 top-3.5 text-gray-400 text-xs"></i>
                </div>

                {/* Grouped Terms */}
                {lessons.length === 0 ? (
                  <div className="p-8 text-center text-gray-400 font-bold text-xs bg-gray-50 dark:bg-[#252525] rounded-2xl">
                    لا توجد مصطلحات مطابقة لبحثك.
                  </div>
                ) : (
                  lessons.map((lessonName, lIdx) => {
                    const lessonTerms = filteredTerms.filter(t => t.lessonName === lessonName);
                    return (
                      <div key={lIdx} className="space-y-3">
                        <div className="p-2.5 rounded-xl bg-purple-100/70 dark:bg-purple-950/60 border-r-4 border-primary text-xs font-black text-primary dark:text-purple-300 flex items-center justify-between">
                          <span>📚 درس: {lessonName}</span>
                          <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400">
                            {lessonTerms[0]?.unit}
                          </span>
                        </div>

                        <div className="space-y-2.5 pr-2">
                          {lessonTerms.map(term => (
                            <div
                              key={term.id}
                              className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 shadow-sm space-y-2 text-xs"
                            >
                              <div className="flex items-center justify-between">
                                <h4 className="font-black text-base text-emerald-700 dark:text-emerald-400">
                                  {term.term}
                                </h4>
                                <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                                  مصطلح إلزامي
                                </span>
                              </div>

                              <div className="p-3 bg-emerald-50/50 dark:bg-[#202020] rounded-xl border-r-4 border-emerald-500 text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                                {term.definition}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            );
          })()}

          {/* ================= 7. HG MINDMAPS LIST ================= */}
          {nav.view === 'HG_MINDMAPS' && (() => {
            const mindmaps = getMindmapsBySubject(nav.subject);
            const cycle1Maps = mindmaps.slice(0, 6);
            const cycle2Maps = mindmaps.slice(6);

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-6">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">
                      <i className={getSubjectIcon(nav.subject)}></i>
                    </span>
                    <div>
                      <h3 className="font-black text-lg text-gray-900 dark:text-white">
                        الخطاطات التعليمية: {getSubjectTitle(nav.subject)}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'HG_SUBJECT_MENU', subject: nav.subject })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>رجوع</span>
                  </button>
                </div>

                {[
                  { label: 'الدورة الأولى', items: cycle1Maps, badgeClass: 'bg-purple-100 dark:bg-purple-950/70 text-primary dark:text-purple-300 border-primary' },
                  { label: 'الدورة الثانية', items: cycle2Maps, badgeClass: 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border-amber-500' }
                ].map((group) => (
                  <div key={group.label} className="space-y-2.5">
                    <div className={`px-3 py-2 rounded-xl border-r-4 text-xs font-black flex items-center justify-between ${group.badgeClass}`}>
                      <span>🗺️ {group.label}</span>
                      <span>{group.items.length} خطاطات</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {group.items.map(mm => (
                        <button
                          key={mm.id}
                          onClick={() => setNav({ view: 'HG_MINDMAP_DETAIL', mapId: mm.id, subject: nav.subject })}
                          className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 hover:border-primary shadow-sm hover:shadow-md transition text-right flex items-center justify-between group active:scale-98"
                        >
                          <div>
                            <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg inline-block mb-1">
                              درس: {mm.lessonName}
                            </span>
                            <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-primary transition">
                              {mm.title}
                            </h4>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-950/70 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition">
                            <i className="fas fa-chevron-left text-xs"></i>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* ================= 8. HG MINDMAP DETAIL (Direct content without remaining lists) ================= */}
          {nav.view === 'HG_MINDMAP_DETAIL' && (() => {
            const mindmaps = getMindmapsBySubject(nav.subject);
            const mm = mindmaps.find(m => m.id === nav.mapId);
            if (!mm) return null;

            const isCorrectionRevealed = !!showMindmapCorrection[mm.id];

            return (
              <div className="space-y-6 max-w-3xl mx-auto pb-8">
                {/* Header with return button */}
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-md">
                      درس: {mm.lessonName}
                    </span>
                    <h3 className="font-black text-xl text-gray-900 dark:text-white mt-1">
                      {mm.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'HG_MINDMAPS', subject: nav.subject })}
                    className="px-3.5 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-primary dark:text-purple-300 text-xs font-bold hover:bg-primary hover:text-white transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>قائمة الخطاطات</span>
                  </button>
                </div>

                {/* 1. الفكرة الرئيسية والعلاقات */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#252525] border border-gray-200 dark:border-gray-700 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-primary font-black">
                    <i className="fas fa-lightbulb"></i>
                    <span>الفكرة الرئيسية للخطاطة:</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                    {mm.mainIdea}
                  </p>
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                    <span className="font-bold text-purple-700 dark:text-purple-300 block mb-0.5">🔗 شرح العلاقات المنطقية والسببية بين العناصر:</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      {mm.relationships}
                    </p>
                  </div>
                </div>

                {/* 2. الهيكل البصري المنظم بالألوان (Visual Nodes) */}
                <div className="space-y-3">
                  <h4 className="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
                    <i className="fas fa-sitemap text-primary"></i>
                    <span>التنظيم البصري لمضامين الخطاطة:</span>
                  </h4>

                  <div className="grid grid-cols-1 gap-3">
                    {mm.visualNodes.map((node, nIdx) => (
                      <div
                        key={nIdx}
                        className={`p-4 rounded-2xl border-2 shadow-sm space-y-2 ${node.color}`}
                      >
                        <h5 className="font-black text-sm flex items-center gap-2">
                          {node.category}
                        </h5>
                        <ul className="space-y-1.5 pr-2">
                          {node.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs font-semibold leading-relaxed">
                              <span className="text-xs mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. المثال التطبيقي */}
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 font-black text-amber-800 dark:text-amber-300">
                    <i className="fas fa-chalkboard-teacher"></i>
                    <span>{mm.appliedExample.title}</span>
                  </div>
                  <p className="text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
                    {mm.appliedExample.description}
                  </p>
                </div>

                {/* 4. التمرين التطبيقي والتصحيح النموذجي */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#282828] border-2 border-emerald-300 dark:border-emerald-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-black text-sm">
                      <i className="fas fa-tasks"></i>
                      <span>تمرين تطبيقي على الخطاطة:</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                      مستوى 3AC
                    </span>
                  </div>

                  <p className="font-bold text-gray-800 dark:text-gray-100 text-sm">
                    {mm.exercise.question}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => toggleMindmapCorrection(mm.id)}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition flex items-center gap-2 active:scale-95 text-xs shadow-sm"
                    >
                      <i className={`fas ${isCorrectionRevealed ? 'fa-eye-slash' : 'fa-check-circle'}`}></i>
                      <span>{isCorrectionRevealed ? 'إخفاء التصحيح النموذجي' : 'إظهار التصحيح النموذجي وتفسير الإجابة'}</span>
                    </button>
                  </div>

                  {isCorrectionRevealed && (
                    <div className="mt-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 space-y-2 animate-fadeIn">
                      <div>
                        <span className="font-black text-emerald-900 dark:text-emerald-300 block mb-0.5">✅ الإجابة النموذجية:</span>
                        <p className="text-gray-800 dark:text-gray-200 font-semibold">{mm.modelCorrection.answer}</p>
                      </div>
                      <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800 text-gray-600 dark:text-gray-300">
                        <span className="font-black text-emerald-800 dark:text-emerald-400 block mb-0.5">💡 تفسير سبب صحة الإجابة:</span>
                        <p>{mm.modelCorrection.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

          {/* ================= 9. HG ESSAY METHODOLOGY (Comprehensive 10/10 Guide) ================= */}
          {nav.view === 'HG_ESSAY' && (
            <div className="space-y-6 max-w-3xl mx-auto pb-8">
              <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="font-black text-xl text-amber-700 dark:text-amber-400">
                    {ESSAY_METHODOLOGY.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    if (nav.originSubject) {
                      setNav({ view: 'HG_SUBJECT_MENU', subject: nav.originSubject });
                    } else {
                      setNav({ view: 'HG_BRANCHES' });
                    }
                  }}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>رجوع</span>
                </button>
              </div>

              {/* 5 Sequential Steps */}
              <div className="space-y-3">
                <h4 className="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
                  <i className="fas fa-list-ol text-amber-600"></i>
                  <span>مراحل إنجاز المقال خطوة بخطوة:</span>
                </h4>

                <div className="space-y-3">
                  {ESSAY_METHODOLOGY.steps.map((st, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 space-y-2 text-xs"
                    >
                      <h5 className="font-black text-sm text-amber-700 dark:text-amber-400">
                        {st.stepName}
                      </h5>
                      <p className="text-gray-500 dark:text-gray-400 font-medium">
                        {st.description}
                      </p>
                      <ul className="space-y-1 pr-2 pt-1">
                        {st.details.map((dt, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2 text-gray-700 dark:text-gray-200 font-semibold">
                            <span className="text-amber-500">•</span>
                            <span>{dt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Complete Essay Example */}
              <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-[#252525] border-2 border-amber-300 dark:border-amber-900 space-y-4 text-xs">
                <div>
                  <span className="text-[10px] bg-amber-600 text-white px-2 py-0.5 rounded-full font-black uppercase">
                    نموذج كامل ومصحح
                  </span>
                  <h4 className="font-black text-base text-gray-900 dark:text-white mt-1">
                    {ESSAY_METHODOLOGY.fullExample.subjectTitle}
                  </h4>
                  <p className="p-3 bg-white dark:bg-[#1e1e1e] rounded-xl border border-amber-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold mt-2">
                    {ESSAY_METHODOLOGY.fullExample.subjectContext}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="font-black text-amber-800 dark:text-amber-400">الأسئلة الإشكالية المطلوبة:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-gray-700 dark:text-gray-300">
                    {ESSAY_METHODOLOGY.fullExample.instructions.map((ins, iIdx) => (
                      <li key={iIdx}>{ins}</li>
                    ))}
                  </ul>
                </div>

                {/* Essay Text Sections */}
                <div className="space-y-3 pt-2 border-t border-amber-200 dark:border-gray-700">
                  <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-amber-100 dark:border-gray-800">
                    <span className="font-black text-primary block mb-1">المقدمة النموذجية (2 نقاط):</span>
                    <p className="leading-relaxed text-gray-800 dark:text-gray-200">{ESSAY_METHODOLOGY.fullExample.sampleIntro}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-amber-100 dark:border-gray-800 space-y-2">
                    <span className="font-black text-amber-700 dark:text-amber-400 block">العرض التحليلي (7 نقاط - 3 فقرات):</span>
                    {ESSAY_METHODOLOGY.fullExample.sampleBody.map((bPara, bIdx) => (
                      <p key={bIdx} className="leading-relaxed text-gray-800 dark:text-gray-200 pb-1.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                        {bPara}
                      </p>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-amber-100 dark:border-gray-800">
                    <span className="font-black text-emerald-700 dark:text-emerald-400 block mb-1">الخاتمة المركزة (نقطة واحدة):</span>
                    <p className="leading-relaxed text-gray-800 dark:text-gray-200">{ESSAY_METHODOLOGY.fullExample.sampleConclusion}</p>
                  </div>
                </div>
              </div>

              {/* Practice Exercise */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-purple-200 dark:border-purple-800 space-y-2 text-xs">
                <h4 className="font-black text-sm text-primary flex items-center gap-2">
                  <i className="fas fa-pencil-alt"></i>
                  <span>{ESSAY_METHODOLOGY.practiceExercise.title}</span>
                </h4>
                <p className="font-semibold text-gray-800 dark:text-gray-200 bg-purple-50 dark:bg-purple-950/40 p-3 rounded-xl">
                  {ESSAY_METHODOLOGY.practiceExercise.subjectText}
                </p>
                <p className="text-gray-600 dark:text-gray-300 font-bold">
                  {ESSAY_METHODOLOGY.practiceExercise.task}
                </p>
              </div>
            </div>
          )}

          {/* ================= 9B. ISLAMIC EDUCATION MENU ================= */}
          {nav.view === 'ISLAMIC_MENU' && (
            <div className="space-y-6 max-w-2xl mx-auto py-2">
              <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-teal-600">
                    <i className="fas fa-mosque"></i>
                  </span>
                  <h3 className="font-black text-xl text-gray-900 dark:text-white">
                    مادة التربية الإسلامية (3AC)
                  </h3>
                </div>
                <button
                  onClick={() => setNav({ view: 'ROOT' })}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>الرئيسية</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. ملخصات الدروس */}
                <button
                  onClick={() => setNav({ view: 'ISLAMIC_LESSONS' })}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-teal-200 dark:border-gray-700 hover:border-teal-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950/70 text-teal-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-book-open"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-teal-600 transition">
                    ملخصات الدروس
                  </h4>
                </button>

                {/* 2. المفاهيم والمصطلحات */}
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setNav({ view: 'ISLAMIC_TERMS' });
                  }}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-emerald-200 dark:border-gray-700 hover:border-emerald-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-book-reader"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-emerald-600 transition">
                    المفاهيم والمصطلحات الشرعية
                  </h4>
                </button>

                {/* 3. الخطاطات التعليمية */}
                <button
                  onClick={() => setNav({ view: 'ISLAMIC_MINDMAPS' })}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-purple-200 dark:border-gray-700 hover:border-purple-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-primary flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-primary transition">
                    الخطاطات التعليمية
                  </h4>
                </button>

                {/* 4. منهجية حل الوضعية التقويمية */}
                <button
                  onClick={() => setNav({ view: 'ISLAMIC_METHODOLOGY' })}
                  className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-amber-200 dark:border-gray-700 hover:border-amber-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/70 text-amber-600 flex items-center justify-center text-lg mb-2 group-hover:scale-110 transition-transform">
                    <i className="fas fa-pen-fancy"></i>
                  </div>
                  <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-amber-600 transition">
                    منهجية حل الوضعية التقويمية
                  </h4>
                </button>
              </div>
            </div>
          )}

          {/* ================= 9C. ISLAMIC LESSONS LIST ================= */}
          {nav.view === 'ISLAMIC_LESSONS' && (() => {
            const cycle1 = ISLAMIC_SUMMARIES.filter(l => l.cycle === 'الدورة الأولى');
            const cycle2 = ISLAMIC_SUMMARIES.filter(l => l.cycle === 'الدورة الثانية');

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-6">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-teal-600">
                      <i className="fas fa-mosque"></i>
                    </span>
                    <h3 className="font-black text-lg text-gray-900 dark:text-white">
                      ملخصات الدروس: التربية الإسلامية
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'ISLAMIC_MENU' })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>رجوع</span>
                  </button>
                </div>

                {[
                  { label: 'الدورة الأولى (سورة الحشر + المداخل الخمسة)', items: cycle1, badgeClass: 'bg-teal-100 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 border-teal-500' },
                  { label: 'الدورة الثانية (سورة الحديد + المداخل الخمسة)', items: cycle2, badgeClass: 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border-emerald-500' }
                ].map((group) => (
                  <div key={group.label} className="space-y-2.5">
                    <div className={`px-3 py-2 rounded-xl border-r-4 text-xs font-black flex items-center justify-between ${group.badgeClass}`}>
                      <span>📘 {group.label}</span>
                      <span>{group.items.length} درساً</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {group.items.map(lesson => (
                        <button
                          key={lesson.id}
                          onClick={() => setNav({ view: 'ISLAMIC_LESSON_DETAIL', lessonId: lesson.id })}
                          className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 hover:border-teal-500 shadow-sm hover:shadow-md transition text-right flex items-center justify-between group active:scale-98"
                        >
                          <div className="space-y-1">
                            <span className="text-[11px] font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-md inline-block">
                              {lesson.domain}
                            </span>
                            <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition">
                              {lesson.title}
                            </h4>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition">
                            <i className="fas fa-chevron-left text-xs"></i>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* ================= 9D. ISLAMIC LESSON DETAIL ================= */}
          {nav.view === 'ISLAMIC_LESSON_DETAIL' && (() => {
            const lesson: IslamicLessonSummaryItem | undefined = ISLAMIC_SUMMARIES.find(l => l.id === nav.lessonId);
            if (!lesson) return null;

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-8">
                <div className="flex items-center justify-between gap-3 border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="text-[11px] font-bold text-teal-700 dark:text-teal-300 bg-teal-100 dark:bg-teal-950/70 px-2.5 py-0.5 rounded-md">
                        {lesson.cycle}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/70 px-2.5 py-0.5 rounded-md">
                        {lesson.domain}
                      </span>
                    </div>
                    <h3 className="font-black text-lg sm:text-xl text-gray-900 dark:text-white">
                      {lesson.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'ISLAMIC_LESSONS' })}
                    className="px-3.5 py-1.5 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-bold hover:bg-teal-600 hover:text-white transition flex items-center gap-1.5 flex-shrink-0"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>قائمة الدروس</span>
                  </button>
                </div>

                {/* تمهيد إشكالي */}
                <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border-r-4 border-teal-500 text-xs sm:text-sm space-y-1.5">
                  <div className="font-black text-teal-800 dark:text-teal-300 flex items-center gap-2">
                    <i className="fas fa-compass"></i>
                    <span>تمهيد إشكالي</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                    {lesson.introduction}
                  </p>
                </div>

                {/* السند الشرعي (القرآن والسنة) */}
                {lesson.scripturalEvidence && lesson.scripturalEvidence.length > 0 && (
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/70 dark:from-emerald-950/40 dark:to-teal-950/30 border border-emerald-300 dark:border-emerald-800 space-y-2.5">
                    <div className="font-black text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                      <i className="fas fa-quran"></i>
                      <span>النصوص الشرعية المؤطرة للدرس</span>
                    </div>
                    <div className="space-y-2">
                      {lesson.scripturalEvidence.map((ev, eIdx) => (
                        <div key={eIdx} className="p-3 rounded-xl bg-white/90 dark:bg-[#222] border border-emerald-200 dark:border-emerald-800/70 space-y-1">
                          <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 leading-relaxed">
                            {ev.text}
                          </p>
                          <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 block">
                            — {ev.source}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* محاور الدرس */}
                <div className="space-y-4">
                  {lesson.sections.map((section, sIdx) => (
                    <div
                      key={sIdx}
                      className={`p-4 rounded-2xl border-r-4 shadow-sm space-y-2.5 ${section.colorClass}`}
                    >
                      <h4 className="font-black text-sm sm:text-base flex items-center gap-2">
                        <span>{section.heading}</span>
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-[13px] leading-relaxed font-medium">
                        {section.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current flex-shrink-0"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* القيم التطبيقية */}
                {lesson.appliedValues && lesson.appliedValues.length > 0 && (
                  <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 space-y-2">
                    <div className="font-black text-xs sm:text-sm text-purple-800 dark:text-purple-300 flex items-center gap-2">
                      <i className="fas fa-seedling"></i>
                      <span>القيم التطبيقية المستفادة</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {lesson.appliedValues.map((val, vIdx) => (
                        <span
                          key={vIdx}
                          className="px-3 py-1 rounded-xl bg-white dark:bg-[#262626] border border-purple-200 dark:border-purple-800/70 text-xs font-bold text-purple-900 dark:text-purple-200 shadow-sm"
                        >
                          {val}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* أبرز الخلاصات المركزة */}
                {lesson.keyTakeaways && lesson.keyTakeaways.length > 0 && (
                  <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 space-y-2.5">
                    <div className="font-black text-xs sm:text-sm text-amber-800 dark:text-amber-300 flex items-center gap-2">
                      <i className="fas fa-star"></i>
                      <span>أبرز الخلاصات المركزة</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {lesson.keyTakeaways.map((item, kIdx) => (
                        <span
                          key={kIdx}
                          className="px-3 py-1.5 rounded-xl bg-white dark:bg-[#262626] border border-amber-200 dark:border-amber-800/70 text-xs font-bold text-gray-800 dark:text-gray-200 shadow-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* خاتمة تركيبية */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border-r-4 border-emerald-500 text-xs sm:text-sm space-y-1.5">
                  <div className="font-black text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                    <i className="fas fa-check-double"></i>
                    <span>خاتمة تركيبية</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                    {lesson.conclusion}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* ================= 9E. ISLAMIC TERMS SECTION ================= */}
          {nav.view === 'ISLAMIC_TERMS' && (() => {
            const filteredTerms = ISLAMIC_TERMS.filter(t =>
              t.term.includes(searchTerm) ||
              t.lessonName.includes(searchTerm) ||
              t.unit.includes(searchTerm) ||
              t.definition.includes(searchTerm)
            );

            const lessons = Array.from(new Set(filteredTerms.map(t => t.lessonName)));

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-6">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-teal-600">
                      <i className="fas fa-mosque"></i>
                    </span>
                    <h3 className="font-black text-lg text-gray-900 dark:text-white">
                      المفاهيم والمصطلحات: التربية الإسلامية
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'ISLAMIC_MENU' })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>رجوع</span>
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="ابحث عن مصطلح أو مدخل أو اسم الدرس..."
                    className="w-full p-3 pr-10 rounded-xl bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 text-xs font-semibold focus:border-teal-500 outline-none text-gray-900 dark:text-white"
                  />
                  <i className="fas fa-search absolute right-3.5 top-3.5 text-gray-400 text-xs"></i>
                </div>

                {lessons.length === 0 ? (
                  <div className="p-8 text-center text-gray-400 font-bold text-xs bg-gray-50 dark:bg-[#252525] rounded-2xl">
                    لا توجد مصطلحات مطابقة لبحثك.
                  </div>
                ) : (
                  lessons.map((lessonName, lIdx) => {
                    const lessonTerms = filteredTerms.filter(t => t.lessonName === lessonName);
                    return (
                      <div key={lIdx} className="space-y-3">
                        <div className="p-2.5 rounded-xl bg-teal-100/70 dark:bg-teal-950/60 border-r-4 border-teal-600 text-xs font-black text-teal-800 dark:text-teal-300 flex items-center justify-between gap-2 flex-wrap">
                          <span>📚 درس: {lessonName}</span>
                          <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-300">
                            {lessonTerms[0]?.unit}
                          </span>
                        </div>

                        <div className="space-y-2.5 pr-2">
                          {lessonTerms.map(term => (
                            <div
                              key={term.id}
                              className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 shadow-sm space-y-2 text-xs"
                            >
                              <div className="flex items-center justify-between">
                                <h4 className="font-black text-base text-teal-700 dark:text-teal-400">
                                  {term.term}
                                </h4>
                                <span className="text-[10px] bg-teal-50 dark:bg-teal-950 text-teal-800 dark:text-teal-300 px-2 py-0.5 rounded-full font-bold">
                                  مفهوم شرعي
                                </span>
                              </div>

                              <div className="p-3 bg-teal-50/50 dark:bg-[#202020] rounded-xl border-r-4 border-teal-500 text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                                {term.definition}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            );
          })()}

          {/* ================= 9F. ISLAMIC MINDMAPS LIST ================= */}
          {nav.view === 'ISLAMIC_MINDMAPS' && (() => {
            const cycle1Maps = ISLAMIC_MINDMAPS.slice(0, 7);
            const cycle2Maps = ISLAMIC_MINDMAPS.slice(7);

            return (
              <div className="space-y-5 max-w-3xl mx-auto pb-6">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <span className="text-xl text-teal-600">
                      <i className="fas fa-mosque"></i>
                    </span>
                    <h3 className="font-black text-lg text-gray-900 dark:text-white">
                      الخطاطات التعليمية: التربية الإسلامية
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'ISLAMIC_MENU' })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>رجوع</span>
                  </button>
                </div>

                {[
                  { label: 'خطاطات الدورة الأولى', items: cycle1Maps, badgeClass: 'bg-teal-100 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 border-teal-500' },
                  { label: 'خطاطات الدورة الثانية', items: cycle2Maps, badgeClass: 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 border-emerald-500' }
                ].map((group) => (
                  <div key={group.label} className="space-y-2.5">
                    <div className={`px-3 py-2 rounded-xl border-r-4 text-xs font-black flex items-center justify-between ${group.badgeClass}`}>
                      <span>🗺️ {group.label}</span>
                      <span>{group.items.length} خطاطات</span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {group.items.map(mm => (
                        <button
                          key={mm.id}
                          onClick={() => setNav({ view: 'ISLAMIC_MINDMAP_DETAIL', mapId: mm.id })}
                          className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 hover:border-teal-500 shadow-sm hover:shadow-md transition text-right flex items-center justify-between group active:scale-98"
                        >
                          <div>
                            <span className="text-[11px] font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-lg inline-block mb-1">
                              {mm.lessonName}
                            </span>
                            <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white group-hover:text-teal-600 transition">
                              {mm.title}
                            </h4>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-950/70 text-teal-600 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600 group-hover:text-white transition">
                            <i className="fas fa-chevron-left text-xs"></i>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

          {/* ================= 9G. ISLAMIC MINDMAP DETAIL ================= */}
          {nav.view === 'ISLAMIC_MINDMAP_DETAIL' && (() => {
            const mm = ISLAMIC_MINDMAPS.find(m => m.id === nav.mapId);
            if (!mm) return null;

            const isCorrectionRevealed = !!showMindmapCorrection[mm.id];

            return (
              <div className="space-y-6 max-w-3xl mx-auto pb-8">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div>
                    <span className="text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-md">
                      {mm.lessonName}
                    </span>
                    <h3 className="font-black text-xl text-gray-900 dark:text-white mt-1">
                      {mm.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'ISLAMIC_MINDMAPS' })}
                    className="px-3.5 py-1.5 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-bold hover:bg-teal-600 hover:text-white transition flex items-center gap-1.5 flex-shrink-0"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>قائمة الخطاطات</span>
                  </button>
                </div>

                {/* الفكرة الرئيسية والعلاقات */}
                <div className="p-4 rounded-2xl bg-white dark:bg-[#252525] border border-gray-200 dark:border-gray-700 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-black">
                    <i className="fas fa-lightbulb"></i>
                    <span>الفكرة الرئيسية للخطاطة:</span>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                    {mm.mainIdea}
                  </p>
                  <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                    <span className="font-bold text-teal-700 dark:text-teal-300 block mb-0.5">🔗 شرح العلاقات والترابطات بين المفاهيم:</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      {mm.relationships}
                    </p>
                  </div>
                </div>

                {/* الهيكل البصري */}
                <div className="space-y-3">
                  <h4 className="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
                    <i className="fas fa-sitemap text-teal-600"></i>
                    <span>التنظيم البصري لمضامين الخطاطة:</span>
                  </h4>

                  <div className="grid grid-cols-1 gap-3">
                    {mm.visualNodes.map((node, nIdx) => (
                      <div
                        key={nIdx}
                        className={`p-4 rounded-2xl border-2 shadow-sm space-y-2 ${node.color}`}
                      >
                        <h5 className="font-black text-sm flex items-center gap-2">
                          {node.category}
                        </h5>
                        <ul className="space-y-1.5 pr-2">
                          {node.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-2 text-xs font-semibold leading-relaxed">
                              <span className="text-xs mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* المثال التطبيقي */}
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-1.5 text-xs">
                  <div className="flex items-center gap-2 font-black text-amber-800 dark:text-amber-300">
                    <i className="fas fa-chalkboard-teacher"></i>
                    <span>{mm.appliedExample.title}</span>
                  </div>
                  <p className="text-amber-900 dark:text-amber-200 font-medium leading-relaxed">
                    {mm.appliedExample.description}
                  </p>
                </div>

                {/* التمرين التطبيقي والتصحيح النموذجي */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#282828] border-2 border-emerald-300 dark:border-emerald-800 space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-black text-sm">
                      <i className="fas fa-tasks"></i>
                      <span>تمرين تطبيقي على الخطاطة:</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                      مستوى 3AC
                    </span>
                  </div>

                  <p className="font-bold text-gray-800 dark:text-gray-100 text-sm">
                    {mm.exercise.question}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => toggleMindmapCorrection(mm.id)}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition flex items-center gap-2 active:scale-95 text-xs shadow-sm"
                    >
                      <i className={`fas ${isCorrectionRevealed ? 'fa-eye-slash' : 'fa-check-circle'}`}></i>
                      <span>{isCorrectionRevealed ? 'إخفاء التصحيح النموذجي' : 'إظهار التصحيح النموذجي وتفسير الإجابة'}</span>
                    </button>
                  </div>

                  {isCorrectionRevealed && (
                    <div className="mt-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 space-y-2 animate-fadeIn">
                      <div>
                        <span className="font-black text-emerald-900 dark:text-emerald-300 block mb-0.5">✅ الإجابة النموذجية:</span>
                        <p className="text-gray-800 dark:text-gray-200 font-semibold">{mm.modelCorrection.answer}</p>
                      </div>
                      <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800 text-gray-600 dark:text-gray-300">
                        <span className="font-black text-emerald-800 dark:text-emerald-400 block mb-0.5">💡 تفسير سبب صحة الإجابة:</span>
                        <p>{mm.modelCorrection.explanation}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

          {/* ================= 9H. ISLAMIC EXAM METHODOLOGY ================= */}
          {nav.view === 'ISLAMIC_METHODOLOGY' && (() => {
            const isMethodCorrectionRevealed = !!showMindmapCorrection['islamic-methodology-practice'];

            return (
              <div className="space-y-6 max-w-3xl mx-auto pb-8">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div>
                    <h3 className="font-black text-lg sm:text-xl text-teal-700 dark:text-teal-400">
                      {ISLAMIC_METHODOLOGY.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'ISLAMIC_MENU' })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5 flex-shrink-0"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>رجوع</span>
                  </button>
                </div>

                {/* 4 Sequential Steps */}
                <div className="space-y-3">
                  <h4 className="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
                    <i className="fas fa-list-ol text-teal-600"></i>
                    <span>مراحل الإجابة عن الوضعية التقويمية خطوة بخطوة:</span>
                  </h4>

                  <div className="space-y-3">
                    {ISLAMIC_METHODOLOGY.steps.map((st, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 space-y-2 text-xs"
                      >
                        <h5 className="font-black text-sm text-teal-700 dark:text-teal-400">
                          {st.stepName}
                        </h5>
                        <p className="text-gray-500 dark:text-gray-400 font-medium">
                          {st.description}
                        </p>
                        <ul className="space-y-1 pr-2 pt-1">
                          {st.details.map((dt, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-gray-700 dark:text-gray-200 font-semibold">
                              <span className="text-teal-500">•</span>
                              <span>{dt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Full Worked Example */}
                <div className="p-5 rounded-2xl bg-teal-50/60 dark:bg-[#252525] border-2 border-teal-300 dark:border-teal-900 space-y-4 text-xs">
                  <div>
                    <span className="text-[10px] bg-teal-600 text-white px-2 py-0.5 rounded-full font-black uppercase">
                      نموذج تطبيقي مصحح
                    </span>
                    <h4 className="font-black text-base text-gray-900 dark:text-white mt-1">
                      {ISLAMIC_METHODOLOGY.fullExample.subjectTitle}
                    </h4>
                    <p className="p-3 bg-white dark:bg-[#1e1e1e] rounded-xl border border-teal-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-semibold mt-2 leading-relaxed">
                      {ISLAMIC_METHODOLOGY.fullExample.subjectContext}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-black text-teal-800 dark:text-teal-400">الأسئلة المطلوبة:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-gray-700 dark:text-gray-300">
                      {ISLAMIC_METHODOLOGY.fullExample.instructions.map((ins, iIdx) => (
                        <li key={iIdx}>{ins}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-teal-200 dark:border-gray-700">
                    <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-teal-100 dark:border-gray-800">
                      <span className="font-black text-teal-700 dark:text-teal-400 block mb-1">1. تحديد القضية المركزية:</span>
                      <p className="leading-relaxed text-gray-800 dark:text-gray-200">{ISLAMIC_METHODOLOGY.fullExample.sampleIntro}</p>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-teal-100 dark:border-gray-800 space-y-2">
                      <span className="font-black text-amber-700 dark:text-amber-400 block">2 و3. التعاريف والموقف المعلل:</span>
                      {ISLAMIC_METHODOLOGY.fullExample.sampleBody.map((bPara, bIdx) => (
                        <p key={bIdx} className="leading-relaxed text-gray-800 dark:text-gray-200 pb-1.5 border-b border-gray-100 dark:border-gray-800 last:border-0">
                          {bPara}
                        </p>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-[#1e1e1e] border border-teal-100 dark:border-gray-800">
                      <span className="font-black text-emerald-700 dark:text-emerald-400 block mb-1">4. الاستدلال الشرعي الصحيح:</span>
                      <p className="leading-relaxed text-gray-800 dark:text-gray-200">{ISLAMIC_METHODOLOGY.fullExample.sampleConclusion}</p>
                    </div>
                  </div>
                </div>

                {/* Practice Exercise */}
                <div className="p-5 rounded-2xl bg-white dark:bg-[#282828] border-2 border-emerald-300 dark:border-emerald-800 space-y-3 text-xs">
                  <h4 className="font-black text-sm text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                    <i className="fas fa-pencil-alt"></i>
                    <span>{ISLAMIC_METHODOLOGY.practiceExercise.title}</span>
                  </h4>
                  <p className="font-semibold text-gray-800 dark:text-gray-200 bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl leading-relaxed">
                    {ISLAMIC_METHODOLOGY.practiceExercise.subjectText}
                  </p>
                  <p className="text-gray-700 dark:text-gray-200 font-bold">
                    {ISLAMIC_METHODOLOGY.practiceExercise.task}
                  </p>

                  <div className="pt-1">
                    <button
                      onClick={() => toggleMindmapCorrection('islamic-methodology-practice')}
                      className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition flex items-center gap-2 active:scale-95 text-xs shadow-sm"
                    >
                      <i className={`fas ${isMethodCorrectionRevealed ? 'fa-eye-slash' : 'fa-check-circle'}`}></i>
                      <span>{isMethodCorrectionRevealed ? 'إخفاء التصحيح النموذجي' : 'إظهار التصحيح النموذجي والتعليل'}</span>
                    </button>
                  </div>

                  {isMethodCorrectionRevealed && (
                    <div className="mt-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 space-y-2 animate-fadeIn">
                      <div>
                        <span className="font-black text-emerald-900 dark:text-emerald-300 block mb-0.5">📋 عناصر الإجابة المنهجية:</span>
                        <p className="text-gray-700 dark:text-gray-300 font-semibold">{ISLAMIC_METHODOLOGY.modelCorrection.plan}</p>
                      </div>
                      <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800">
                        <span className="font-black text-emerald-900 dark:text-emerald-300 block mb-0.5">✅ الإجابة النموذجية الكاملة:</span>
                        <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">{ISLAMIC_METHODOLOGY.modelCorrection.detailedResponse}</p>
                      </div>
                      <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800 text-gray-600 dark:text-gray-300">
                        <span className="font-black text-emerald-800 dark:text-emerald-400 block mb-0.5">💡 معيار التنقيط الرسمي:</span>
                        <p>{ISLAMIC_METHODOLOGY.modelCorrection.reasoning}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })()}

          {/* ================= 10. HG GRAPH METHODOLOGY (Geography graphs guide) ================= */}
          {nav.view === 'HG_GRAPHS' && (
            <div className="space-y-6 max-w-3xl mx-auto pb-8">
              <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="font-black text-xl text-blue-700 dark:text-blue-400">
                    {GRAPH_METHODOLOGY.title}
                  </h3>
                </div>
                <button
                  onClick={() => setNav({ view: 'HG_SUBJECT_MENU', subject: 'geographie' })}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>رجوع</span>
                </button>
              </div>

              {/* 5 Steps to make a graph */}
              <div className="space-y-3">
                <h4 className="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
                  <i className="fas fa-ruler-combined text-blue-600"></i>
                  <span>الخطوات المنهجية لإنجاز مبيان متكامل:</span>
                </h4>

                <div className="grid grid-cols-1 gap-2.5">
                  {GRAPH_METHODOLOGY.steps.map((st, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 space-y-1.5 text-xs"
                    >
                      <h5 className="font-black text-sm text-blue-700 dark:text-blue-400">
                        {st.stepName}
                      </h5>
                      <p className="text-gray-700 dark:text-gray-200 font-bold">
                        {st.rule}
                      </p>
                      <ul className="space-y-1 pr-2 pt-1 text-gray-600 dark:text-gray-300">
                        {st.tips.map((tp, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2">
                            <span className="text-blue-500">•</span>
                            <span>{tp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Types of graphs breakdown */}
              <div className="space-y-3">
                <h4 className="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
                  <i className="fas fa-chart-pie text-emerald-600"></i>
                  <span>الأنواع الثلاثة المقررة في الثالثة إعدادي:</span>
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {GRAPH_METHODOLOGY.types.map((tp, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-blue-50/50 dark:bg-[#262626] border border-blue-200 dark:border-gray-700 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <h5 className="font-black text-sm text-blue-800 dark:text-blue-300">{tp.typeName}</h5>
                        <span className="text-[10px] bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full font-bold">
                          قاعدة الاستعمال
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-200 font-semibold">{tp.whenToUse}</p>
                      <p className="font-mono text-emerald-700 dark:text-emerald-400 bg-white dark:bg-[#1e1e1e] p-2 rounded-lg border border-gray-100 dark:border-gray-800 text-[11px]">
                        📐 {tp.exampleFormula}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full practical graph exercise with calculations */}
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-300 dark:border-emerald-800 space-y-3 text-xs">
                <h4 className="font-black text-sm text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                  <i className="fas fa-calculator"></i>
                  <span>{GRAPH_METHODOLOGY.fullExample.title}</span>
                </h4>

                {/* Table display */}
                <div className="overflow-x-auto">
                  <table className="w-full text-center border-collapse bg-white dark:bg-[#202020] rounded-xl overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-emerald-600 text-white font-bold">
                        {GRAPH_METHODOLOGY.fullExample.rawDataTable.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-2 border border-emerald-700">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {GRAPH_METHODOLOGY.fullExample.rawDataTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="border-t border-gray-200 dark:border-gray-700 font-semibold">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-2 border border-gray-200 dark:border-gray-700">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-1.5 pt-2">
                  <p><span className="font-black text-emerald-900 dark:text-emerald-300">التعليل واختيار المبيان:</span> {GRAPH_METHODOLOGY.fullExample.graphChoice}</p>
                  <p><span className="font-black text-emerald-900 dark:text-emerald-300">طريقة حساب المقياس:</span> {GRAPH_METHODOLOGY.fullExample.scaleCalculation}</p>
                  <p><span className="font-black text-emerald-900 dark:text-emerald-300">قراءة واستخلاص النتائج:</span> {GRAPH_METHODOLOGY.fullExample.readingAndAnalysis}</p>
                </div>
              </div>
            </div>
          )}

          {/* ================= 11. EXAM PRACTICE (Local or Regional) ================= */}
          {nav.view === 'EXAM_LIST' && (() => {
            const practices = EXAM_PRACTICES.filter(p => p.type === nav.examType);

            return (
              <div className="space-y-4 max-w-3xl mx-auto pb-6">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div>
                    <h3 className="font-black text-xl text-gray-900 dark:text-white">
                      {nav.examType === 'local' ? 'تدريب الامتحان المحلي الموحد' : 'تدريب الامتحان الجهوي الموحد'}
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'ROOT' })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>الرئيسية</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {practices.map(exam => (
                    <button
                      key={exam.id}
                      onClick={() => setNav({ view: 'EXAM_DETAIL', examId: exam.id, examType: nav.examType })}
                      className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-gray-200 dark:border-gray-700 hover:border-primary shadow-sm hover:shadow-md transition text-right flex items-center justify-between group active:scale-98"
                    >
                      <div>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-md inline-block mb-1 ${exam.subject === 'fr' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300'}`}>
                          {exam.subject === 'fr' ? '🇫🇷 الفرنسية' : '📜 الاجتماعيات'}
                        </span>
                        <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-primary transition">
                          {exam.title}
                        </h4>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-950/70 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition">
                        <i className="fas fa-chevron-left text-xs"></i>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* ================= 12. EXAM DETAIL (Questions + Detailed Answers) ================= */}
          {nav.view === 'EXAM_DETAIL' && (() => {
            const exam = EXAM_PRACTICES.find(p => p.id === nav.examId);
            if (!exam) return null;

            return (
              <div className="space-y-6 max-w-3xl mx-auto pb-8">
                <div className="flex items-center justify-between border-b pb-3 border-gray-200 dark:border-gray-700">
                  <div>
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded-md inline-block mb-1 ${exam.subject === 'fr' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'}`}>
                      {exam.subject === 'fr' ? '🇫🇷 الفرنسية 3AC' : '📜 الاجتماعيات 3AC'}
                    </span>
                    <h3 className="font-black text-xl text-gray-900 dark:text-white">
                      {exam.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setNav({ view: 'EXAM_LIST', examType: nav.examType })}
                    className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                  >
                    <i className="fas fa-arrow-right"></i>
                    <span>قائمة النماذج</span>
                  </button>
                </div>

                {/* Document or Subject context box */}
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-[#252525] border border-amber-200 dark:border-gray-700 space-y-2 text-xs">
                  <h4 className="font-black text-amber-900 dark:text-amber-300 flex items-center gap-2">
                    <i className="fas fa-file-contract"></i>
                    <span>نص الانطلاق / وثيقة الامتحان:</span>
                  </h4>
                  <div className="p-3 bg-white dark:bg-[#1e1e1e] rounded-xl border border-amber-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-medium whitespace-pre-line leading-relaxed shadow-inner">
                    {exam.documentOrTopic}
                  </div>
                </div>

                {/* Exam Questions list */}
                <div className="space-y-3">
                  <h4 className="font-black text-sm text-gray-900 dark:text-white flex items-center gap-2">
                    <i className="fas fa-question-circle text-primary"></i>
                    <span>الأسئلة وسلم التنقيط مع التصحيح الفوري:</span>
                  </h4>

                  <div className="space-y-3">
                    {exam.questions.map(q => {
                      const qKey = `${exam.id}-q-${q.qNumber}`;
                      const isRevealed = !!showAnswerForExamQ[qKey];

                      return (
                        <div
                          key={q.qNumber}
                          className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 space-y-2.5 text-xs shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-black text-primary text-sm">
                              السؤال رقم {q.qNumber}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full font-bold">
                                {q.component}
                              </span>
                              <span className="text-[10px] bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full font-black">
                                {q.points}
                              </span>
                            </div>
                          </div>

                          <p className="font-bold text-gray-800 dark:text-gray-100 text-sm">
                            {q.questionText}
                          </p>

                          <div>
                            <button
                              onClick={() => toggleExamQAnswer(qKey)}
                              className="px-3 py-1.5 rounded-xl bg-purple-100 dark:bg-purple-950 text-primary dark:text-purple-300 font-bold transition flex items-center gap-1.5 active:scale-95 text-xs"
                            >
                              <i className={`fas ${isRevealed ? 'fa-eye-slash' : 'fa-check'}`}></i>
                              <span>{isRevealed ? 'إخفاء الإجابة' : 'عرض الإجابة النموذجية مع التعليل'}</span>
                            </button>
                          </div>

                          {isRevealed && (
                            <div className="mt-2.5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 space-y-2 animate-fadeIn">
                              <div>
                                <span className="font-black text-emerald-900 dark:text-emerald-300 block mb-0.5">✅ الجواب النموذجي للإطار المرجعي:</span>
                                <p className="text-gray-800 dark:text-gray-200 font-semibold whitespace-pre-line leading-relaxed">
                                  {q.modelAnswer}
                                </p>
                              </div>
                              <div className="pt-2 border-t border-emerald-200 dark:border-emerald-800 text-[11px] text-gray-600 dark:text-gray-300">
                                <span className="font-black text-emerald-800 dark:text-emerald-400 block mb-0.5">💡 توجيهات المصحح:</span>
                                <p>{q.explanation}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}

        </div>

        {/* ================= Footer ================= */}
        <div className="px-5 py-3 bg-gray-50 dark:bg-[#1a1a1a] border-t border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">
          <div className="flex items-center gap-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>مساعد 3AC جاهز • الإغلاق يتم حصراً عبر زر (X) بالأعلى</span>
          </div>
          <button
            onClick={resetToRoot}
            className="hover:text-primary transition font-bold"
          >
            الرئيسية
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantModal;
