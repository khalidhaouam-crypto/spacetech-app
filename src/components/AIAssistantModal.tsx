import React, { useState } from 'react';
import { Language } from '../types';
import {
  HISTOIRE_TERMS,
  GEOGRAPHIE_TERMS,
  CITOYENNETE_TERMS,
  HISTOIRE_MINDMAPS,
  GEOGRAPHIE_MINDMAPS,
  CITOYENNETE_MINDMAPS,
  ESSAY_METHODOLOGY,
  GRAPH_METHODOLOGY,
  FRENCH_LETTER_TYPES,
  EXAM_PRACTICES,
  TermDefinition,
  MindMapItem,
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
// French: 'FR_LIST' | 'FR_DETAIL'
// HG Branches: 'HG_BRANCHES' (Histoire, Geo, Citoyennete)
// HG Subject Menu: 'HG_MENU' (Select between Lessons, Terms, Mindmaps, Essay, Graphs)
// HG Terms: 'HG_TERMS' (Filtered by subject)
// HG Mindmaps: 'HG_MINDMAPS' (Filtered by subject) | 'HG_MINDMAP_DETAIL'
// HG Essay Methodology: 'HG_ESSAY'
// HG Graph Methodology: 'HG_GRAPHS'
// Exam Practice: 'EXAM_LIST' (Local or Regional) | 'EXAM_DETAIL'

type NavState =
  | { view: 'ROOT' }
  | { view: 'FR_LIST' }
  | { view: 'FR_DETAIL'; letterId: string }
  | { view: 'HG_BRANCHES' }
  | { view: 'HG_SUBJECT_MENU'; subject: 'histoire' | 'geographie' | 'citoyennete' }
  | { view: 'HG_TERMS'; subject: 'histoire' | 'geographie' | 'citoyennete'; lessonFilter?: string }
  | { view: 'HG_MINDMAPS'; subject: 'histoire' | 'geographie' | 'citoyennete' }
  | { view: 'HG_MINDMAP_DETAIL'; mapId: string; subject: 'histoire' | 'geographie' | 'citoyennete' }
  | { view: 'HG_ESSAY'; originSubject?: 'histoire' | 'geographie' | 'citoyennete' }
  | { view: 'HG_GRAPHS' }
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

  // Toggle answer reveal for practice
  const toggleExamQAnswer = (id: string) => {
    setShowAnswerForExamQ(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleMindmapCorrection = (id: string) => {
    setShowMindmapCorrection(prev => ({ ...prev, [id]: !prev[id] }));
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
                  onClick={() => setNav({ view: 'FR_LIST' })}
                  className="p-5 rounded-2xl bg-white dark:bg-[#2a2a2a] border-2 border-purple-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-right group flex flex-col justify-between h-36 active:scale-98"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/70 text-blue-600 dark:text-blue-300 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      🇫🇷
                    </span>
                    <span className="text-xs font-black text-primary bg-primary/10 px-2 py-1 rounded-lg">
                      3AC Brevet
                    </span>
                  </div>
                  <div>
                    <h4 className="font-black text-lg text-gray-900 dark:text-white group-hover:text-primary transition">
                      اللغة الفرنسية (Français)
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-xs font-bold text-primary dark:text-purple-300 pt-2 border-t border-gray-100 dark:border-gray-700">
                    <span>فتح الرسائل والمواضيع</span>
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

                {/* 3. تدريب الامتحان المحلي */}
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

                {/* 4. تدريب الامتحان الجهوي */}
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
                  onClick={() => setNav({ view: 'ROOT' })}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-200 dark:border-gray-700 text-xs font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition flex items-center gap-1.5"
                >
                  <i className="fas fa-arrow-right"></i>
                  <span>الرئيسية</span>
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

              {/* Distinction requested: Terms, Mindmaps, Essay, Graphs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* 1. المفاهيم والمصطلحات */}
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

                {/* 2. الخطاطات الذهنية والتعليمية */}
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

                {/* 3. منهجية كتابة موضوع مقالي */}
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

                {/* 4. منهجية إنجاز المبيانات (Only in Geography as requested) */}
                {nav.subject === 'geographie' && (
                  <button
                    onClick={() => setNav({ view: 'HG_GRAPHS' })}
                    className="p-4 rounded-2xl bg-white dark:bg-[#282828] border-2 border-blue-200 dark:border-gray-700 hover:border-blue-500 shadow-sm hover:shadow-md transition text-right group active:scale-98"
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

            return (
              <div className="space-y-4 max-w-3xl mx-auto pb-6">
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

                <div className="grid grid-cols-1 gap-3 pt-2">
                  {mindmaps.map(mm => (
                    <button
                      key={mm.id}
                      onClick={() => setNav({ view: 'HG_MINDMAP_DETAIL', mapId: mm.id, subject: nav.subject })}
                      className="p-4 rounded-2xl bg-white dark:bg-[#282828] border border-gray-200 dark:border-gray-700 hover:border-primary shadow-sm hover:shadow-md transition text-right flex items-center justify-between group active:scale-98"
                    >
                      <div>
                        <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-lg inline-block mb-1">
                          درس: {mm.lessonName}
                        </span>
                        <h4 className="font-bold text-base text-gray-900 dark:text-white group-hover:text-primary transition">
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
