
import React, { useState, useEffect, useRef } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import TopBar from './components/TopBar';
import SocialIcons from './components/SocialIcons';
import VideoCard from './components/VideoCard';
import TasksModule from './components/Modules/TasksModule';
import NotesModule from './components/Modules/NotesModule';
import FlashcardsModule from './components/Modules/FlashcardsModule';
import PomodoroModule from './components/Modules/PomodoroModule';
import MindMapsModule from './components/Modules/MindMapsModule';
import GradeCalculatorModule from './components/Modules/GradeCalculatorModule';
import SearchOverlay from './components/SearchOverlay';
import HolidaysModal from './components/HolidaysModal';
import DocumentViewer from './components/DocumentViewer';
import StarryBackground from './components/StarryBackground';
import InfoModal from './components/InfoModal';
import AIAssistantModal from './components/AIAssistantModal';
import { LINKS_DATA, VIDEOS_DATA, HS_LEVELS, HS_BRANCHES, LEVEL_SUBJECTS, SUBJECTS_DATA } from './constants';
import { TRANSLATIONS, DATA_TRANSLATIONS } from './translations';
import { EducationType, CycleType, LevelType, LinkItem, NestedSubjectData, Language, SubjectInfo } from './types';

type View = 'WELCOME' | 'HOME' | 'BRANCHES' | 'SUBJECTS' | 'OPTIONS' | 'CONTENT' | 'ABOUT' | 'TASKS' | 'NOTES' | 'FLASHCARDS' | 'POMODORO' | 'MINDMAPS' | 'CALCULATOR';

const App: React.FC = () => {
  const [view, setView] = useState<View>('WELCOME');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
  
  // Modals state
  const [showHolidays, setShowHolidays] = useState(false);
  const [infoModalData, setInfoModalData] = useState<{title: string, content: string} | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  const [language, setLanguage] = useState<Language>('ar');
  const optionsMenuRef = useRef<HTMLDivElement>(null);

  // User Selection State
  const [name, setName] = useState('');
  const [education, setEducation] = useState<EducationType>('');
  const [cycle, setCycle] = useState<CycleType>('');
  const [level, setLevel] = useState<LevelType>('');
  const [branch, setBranch] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedContentType, setSelectedContentType] = useState('');
  const [contentList, setContentList] = useState<LinkItem[]>([]);
  const [nestedContent, setNestedContent] = useState<{[key:string]: LinkItem[]} | null>(null);

  const [viewingDoc, setViewingDoc] = useState<{url: string, title: string} | null>(null);

  const isBackNav = useRef(false);
  const prevView = useRef<View>('WELCOME');

  const [pomoTimeLeft, setPomoTimeLeft] = useState(25 * 60);
  const [pomoIsActive, setPomoIsActive] = useState(false);
  const [pomoMode, setPomoMode] = useState<'FOCUS' | 'BREAK'>('FOCUS');
  const [pomoFocusDur, setPomoFocusDur] = useState(25);
  const [pomoBreakDur, setPomoBreakDur] = useState(5);
  const pomoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const t = TRANSLATIONS[language];

  useEffect(() => {
    const savedName = localStorage.getItem('spacetech_name');
    if (savedName) setName(savedName);
    
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'false') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    const savedLang = localStorage.getItem('spacetech_language');
    if (savedLang && (savedLang === 'ar' || savedLang === 'fr' || savedLang === 'en')) {
      setLanguage(savedLang as Language);
    }
  }, []);

  useEffect(() => {
    window.history.replaceState({ view: 'WELCOME', docOpen: false }, '');

    const handlePopState = (event: PopStateEvent) => {
      isBackNav.current = true;
      if (event.state) {
        if (event.state.docOpen && event.state.docUrl) {
             setViewingDoc({ url: event.state.docUrl, title: event.state.docTitle });
        } else {
             setViewingDoc(null);
        }

        if (event.state.view) {
          setView(event.state.view as View);
          prevView.current = event.state.view;
        }
      } else {
        setView('WELCOME');
        setViewingDoc(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (isBackNav.current) {
      isBackNav.current = false;
      return;
    }
    if (prevView.current === 'WELCOME' && view === 'HOME') {
       window.history.replaceState({ view: 'HOME', docOpen: false }, '');
    } else {
       window.history.pushState({ view: view, docOpen: false }, '');
    }
    prevView.current = view;
  }, [view]);

  useEffect(() => {
    if (viewingDoc) {
      window.history.pushState({ view: view, docOpen: true, docUrl: viewingDoc.url, docTitle: viewingDoc.title }, '');
    }
  }, [viewingDoc]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('spacetech_language', language);
  }, [language]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOptionsMenuOpen && optionsMenuRef.current && !optionsMenuRef.current.contains(event.target as Node)) {
        setIsOptionsMenuOpen(false);
      }
    };
    if (isOptionsMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOptionsMenuOpen]);

  const toggleLanguage = () => {
    if (language === 'ar') setLanguage('fr');
    else if (language === 'fr') setLanguage('en');
    else setLanguage('ar');
  };

  useEffect(() => {
    if (pomoIsActive && pomoTimeLeft > 0) {
        pomoTimerRef.current = setInterval(() => {
            setPomoTimeLeft(prev => prev - 1);
        }, 1000);
    } else if (pomoTimeLeft === 0) {
        if (pomoIsActive) {
            const audio = new Audio('https://actions.google.com/sounds/v1/alarms/beep_short.ogg');
            audio.play().catch(() => {});
            setPomoIsActive(false);
            if (pomoMode === 'FOCUS') {
                alert('🎉 انتهت جلسة التركيز! خذ استراحة.');
                setPomoMode('BREAK');
                setPomoTimeLeft(pomoBreakDur * 60);
            } else {
                alert('⏰ انتهت الاستراحة! لنعد للعمل.');
                setPomoMode('FOCUS');
                setPomoTimeLeft(pomoFocusDur * 60);
            }
        }
    }
    return () => {
        if (pomoTimerRef.current) clearInterval(pomoTimerRef.current);
    };
  }, [pomoIsActive, pomoTimeLeft, pomoMode, pomoBreakDur, pomoFocusDur]);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', String(newMode));
    if (newMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  const handleStart = () => {
    if (name) localStorage.setItem('spacetech_name', name);
    if (education === 'الثانوي التأهيلي') {
      setView('BRANCHES');
    } else {
      setView('SUBJECTS');
    }
  };

  const selectBranch = (b: string) => {
    setBranch(b);
    setView('SUBJECTS');
  };

  const selectSubject = (subjectName: string) => {
    setSelectedSubject(subjectName);
    setView('OPTIONS');
  };

  const selectOption = (typeKey: string) => {
    let dataKey = typeKey;
    if (typeKey === t.videos) dataKey = 'فيديوهات';
    else if (typeKey === t.lessons) dataKey = 'دروس';
    else if (typeKey === t.exercises) dataKey = 'تمارين';
    else if (typeKey === t.exams) dataKey = 'فروض + التصحيح';
    else if (typeKey === t.localExams) dataKey = 'امتحانات محلية + التصحيح';
    else if (typeKey === t.regionalExams) dataKey = 'امتحانات جهوية + التصحيح';
    else if (typeKey === t.nationalExams) dataKey = 'امتحانات وطنية + التصحيح';
    else if (typeKey === (t as any).mindMapsOption || typeKey === 'خطاطات ذهنية') dataKey = 'خطاطات ذهنية';

    setSelectedContentType(typeKey);

    let subjectData: NestedSubjectData | undefined;
    const safeCycle = cycle || '1';
    
    if (education === 'الثانوي الإعدادي') {
      const msData = LINKS_DATA['الثانوي الإعدادي']?.[safeCycle]?.[level];
      if (msData) {
        subjectData = (msData[selectedSubject] || 
                       (selectedSubject === 'اللغة الفرنسية' ? msData['الفرنسية'] : undefined) ||
                       (selectedSubject === 'الفرنسية' ? msData['اللغة الفرنسية'] : undefined) ||
                       (selectedSubject === 'Mathématiques (Fr)' ? msData['Mathématiques'] : undefined) ||
                       (selectedSubject === 'Physique et Chimie (Fr)' ? msData['Physique et Chimie'] : undefined) ||
                       (selectedSubject === 'Sciences de la vie et de la Terre (SVT Fr)' ? msData['Sciences de la Vie et de la Terre'] : undefined)) as NestedSubjectData;
      }
    } else if (education === 'الثانوي التأهيلي') {
      // Access via branch for High School
      subjectData = LINKS_DATA['الثانوي التأهيلي']?.[safeCycle]?.[level]?.[branch]?.[selectedSubject] as NestedSubjectData;
    }
    
    if (!subjectData) {
      setContentList([]);
      setNestedContent(null);
      setView('CONTENT');
      return;
    }
    
    if (dataKey === 'فيديوهات') {
      const videos = subjectData['فيديوهات'] || VIDEOS_DATA[selectedSubject] || [];
      setContentList(videos);
      setNestedContent(null);
    } else if (dataKey === 'دروس' && subjectData['دروس'] && !Array.isArray(subjectData['دروس'])) {
      setNestedContent(subjectData['دروس'] as {[key:string]: LinkItem[]});
      setContentList([]);
    } else if (dataKey === 'فروض + التصحيح' && subjectData['فروض + التصحيح']) {
      setNestedContent(subjectData['فروض + التصحيح']);
      setContentList([]);
    } else if (dataKey === 'خطاطات ذهنية' && subjectData['خطاطات ذهنية'] && !Array.isArray(subjectData['خطاطات ذهنية'])) {
      setNestedContent(subjectData['خطاطات ذهنية'] as {[key:string]: LinkItem[]});
      setContentList([]);
    } else {
      const data = (subjectData as any)[dataKey];
      setContentList(Array.isArray(data) ? data : []);
      setNestedContent(null);
    }
    setView('CONTENT');
  };

  const handleLinkClick = (e: React.MouseEvent, item: LinkItem) => {
    e.preventDefault();
    const url = item.url || item.urls?.[0];
    if (!url || url === '#') return;

    if (url.includes('drive.google.com')) {
      setViewingDoc({ url, title: item.title });
    } else {
      window.open(url, '_blank');
    }
  };

  const renderContent = () => {
    if (selectedContentType === t.videos) {
        if (contentList.length === 0) return <div className="p-8 text-center bg-orange-50 text-orange-600 rounded-xl font-bold border border-orange-200">{t.noLinks}</div>;
        return (
            <div>
                 <h3 className={`text-primary border-b-2 border-primary/20 pb-3 mb-5 font-extrabold text-xl ${language === 'ar' ? 'text-right' : 'text-left'}`}>📹 {t.videos}</h3>
                 {contentList.map((video, idx) => (
                     <VideoCard key={idx} video={video} />
                 ))}
            </div>
        );
    }
    if (nestedContent) {
        return Object.keys(nestedContent).map(key => (
            <div key={key} className="mb-6">
                <div className={`p-4 mb-3 rounded-xl cursor-pointer font-bold border-r-4 transition-all hover:translate-x-[-5px] bg-gradient-to-r from-[#f3e5f5] to-white text-[#8e44ad] border-primary shadow-sm hover:shadow-md`}>
                    {key}
                </div>
                <div className="pr-4 space-y-2">
                    {nestedContent[key].length > 0 ? (
                        nestedContent[key].map((item, idx) => (
                             <div 
                               key={idx} 
                               onClick={(e) => handleLinkClick(e, item)}
                               className={`block p-4 rounded-xl bg-white dark:bg-[#3d3d3d] border border-gray-100 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:text-primary hover:border-primary transition shadow-sm hover:shadow-md font-semibold flex items-center justify-between group cursor-pointer ${language === 'ar' ? 'text-right' : 'text-left'}`}
                             >
                                <span>{item.title}</span>
                                {(item.url || item.urls?.[0])?.includes('drive') ? <i className="fas fa-file-alt text-green-600"></i> : <i className="fas fa-external-link-alt text-gray-300 group-hover:text-primary transition"></i>}
                             </div>
                        ))
                    ) : (
                        <div className="text-gray-400 text-sm font-bold mr-2">{t.noLinks}</div>
                    )}
                </div>
            </div>
        ));
    }
    if (contentList.length === 0) return <div className="p-8 text-center bg-orange-50 text-orange-600 rounded-xl font-bold border border-orange-200">{t.noLinks}</div>;
    return contentList.map((item, idx) => (
        <div 
           key={idx} 
           onClick={(e) => handleLinkClick(e, item)}
           className={`block p-4 mb-3 rounded-xl bg-gradient-to-l from-white to-[#f8f9fa] dark:from-[#3d3d3d] dark:to-[#333] border-r-4 border-primary text-gray-800 dark:text-white hover:translate-x-[-5px] hover:shadow-lg transition-all duration-300 font-bold flex items-center justify-between group cursor-pointer ${language === 'ar' ? 'text-right' : 'text-left'}`}
        >
            <span>{item.title}</span>
            {(item.url || item.urls?.[0])?.includes('drive') ? <i className="fas fa-file-alt text-green-600"></i> : <i className="fas fa-chevron-left text-gray-300 group-hover:text-primary transition"></i>}
        </div>
    ));
  };

  const getSubjectsList = () => {
    let list: SubjectInfo[] = [];
    if (education === 'الثانوي الإعدادي') {
      list = SUBJECTS_DATA['الثانوي الإعدادي'] || [];
    } else {
        if (level && LEVEL_SUBJECTS[level] && LEVEL_SUBJECTS[level][branch]) {
            list = LEVEL_SUBJECTS[level][branch];
        } else {
            // Fallback if specific mapping fails, though should cover all with new constants
            list = SUBJECTS_DATA[branch] || [];
        }
    }
    return list;
  };
  
  const getSubjectDisplayName = (subjectName: string) => {
    return DATA_TRANSLATIONS[subjectName]?.[language] || subjectName;
  };
  
  const getBranchName = (b: string) => {
      return DATA_TRANSLATIONS[b]?.[language] || b;
  };

  const isStartEnabled = () => {
    if (!name || !education || !cycle || !level) return false;
    return true;
  };

  if (view === 'WELCOME') return <WelcomeScreen onComplete={() => setView('HOME')} />;

  const isWideView = ['MINDMAPS', 'CALCULATOR', 'TASKS', 'NOTES', 'FLASHCARDS', 'POMODORO'].includes(view);
  const containerPaddingTop = "pt-[130px]";
  const optionsMenuPosition = language === 'ar' ? 'left-4' : 'right-4';

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-primary/20 relative ${containerPaddingTop}`}>
      {view === 'HOME' && <StarryBackground />}

      <TopBar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode}
        language={language}
        onToggleLanguage={toggleLanguage}
        onHome={() => {
            if (education === 'الثانوي التأهيلي' && branch) setView('BRANCHES');
            else setView('HOME');
        }}
        onToggleOptions={(e) => { e.stopPropagation(); setIsOptionsMenuOpen(!isOptionsMenuOpen); }}
      />

      <SearchOverlay 
        onNavigate={(sub, type) => { setSelectedSubject(sub); setView('OPTIONS'); }} 
        onOpenDoc={(url, title) => setViewingDoc({ url, title })}
        language={language} 
      />
      
      {showHolidays && <HolidaysModal onClose={() => setShowHolidays(false)} />}
      
      {infoModalData && (
        <InfoModal 
          title={infoModalData.title} 
          content={infoModalData.content} 
          onClose={() => setInfoModalData(null)} 
        />
      )}

      {viewingDoc && (
        <DocumentViewer 
          url={viewingDoc.url} 
          title={viewingDoc.title} 
          onClose={() => window.history.back()} 
        />
      )}

      {isOptionsMenuOpen && (
        <div ref={optionsMenuRef} className={`fixed top-[60px] ${optionsMenuPosition} bg-white/90 dark:bg-[#2d2d2d]/90 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl z-[10001] w-[260px] animate-slideDown overflow-hidden`}>
            {[
                { name: t.modules.tasks, icon: 'fas fa-tasks', action: () => setView('TASKS') },
                { name: t.modules.notes, icon: 'fas fa-sticky-note', action: () => setView('NOTES') },
                { name: t.modules.flashcards, icon: 'fas fa-layer-group', action: () => setView('FLASHCARDS') },
                { name: t.modules.pomodoro, icon: 'fas fa-clock', action: () => setView('POMODORO') },
                { name: t.modules.mindmaps, icon: 'fas fa-project-diagram', action: () => setView('MINDMAPS') },
                { name: t.modules.calculator, icon: 'fas fa-calculator', action: () => setView('CALCULATOR') },
                { name: language === 'ar' ? 'المساعد الذكي (الثالثة إعدادي)' : 'Assistant IA (3AC)', icon: 'fas fa-user-astronaut', action: () => setIsAssistantOpen(true) },
            ].map((opt, i) => (
                <div key={i} onClick={() => { setIsOptionsMenuOpen(false); if(typeof opt.action === 'function') opt.action(); }} className="p-4 flex items-center gap-4 hover:bg-primary/5 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-0 transition-all active:scale-95">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <i className={`${opt.icon} text-primary text-sm`}></i>
                    </div>
                    <span className="font-bold text-gray-700 dark:text-gray-200">{opt.name}</span>
                </div>
            ))}
        </div>
      )}

      <div className={`container mx-auto p-5 transition-all duration-500 flex-1 ${isWideView ? 'max-w-[1400px]' : 'max-w-[550px]'}`}>
        
        {view === 'HOME' && (
          <div className="animate-fadeIn relative z-10">
            <h2 className="text-3xl text-center font-black mb-8 text-primary dark:text-white drop-shadow-sm">
                {t.welcome} <br/> <span className="text-4xl text-accent">SPACETECH</span>
            </h2>
            
            <div className="bg-white dark:bg-[#2d2d2d] rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                <div className="mb-5 relative">
                    <label className={`block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ${language === 'ar' ? 'pr-1' : 'pl-1'}`}>{t.nameLabel}</label>
                    <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    placeholder={t.namePlaceholder} 
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border-2 border-gray-200 dark:border-gray-600 focus:border-primary focus:bg-white dark:focus:bg-[#333] outline-none font-bold transition-all text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    />
                </div>
                
                <div className="mb-4">
                    <label className={`block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ${language === 'ar' ? 'pr-1' : 'pl-1'}`}>{t.stageLabel}</label>
                    <select 
                    value={education} 
                    onChange={(e) => { 
                        setEducation(e.target.value as EducationType); 
                        setLevel(''); 
                        setBranch('');
                    }}
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border-2 border-gray-200 dark:border-gray-600 focus:border-primary outline-none font-bold transition-all appearance-none cursor-pointer text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    >
                    <option value="">{t.stagePlaceholder}</option>
                    <option value="الثانوي الإعدادي">{t.middleSchool}</option>
                    <option value="الثانوي التأهيلي">{t.highSchool}</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className={`block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ${language === 'ar' ? 'pr-1' : 'pl-1'}`}>{t.cycleLabel}</label>
                    <select 
                    value={cycle} 
                    onChange={(e) => setCycle(e.target.value as CycleType)}
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border-2 border-gray-200 dark:border-gray-600 focus:border-primary outline-none font-bold transition-all appearance-none cursor-pointer text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    >
                    <option value="">{t.cyclePlaceholder}</option>
                    <option value="1">{t.cycle1}</option>
                    <option value="2">{t.cycle2}</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className={`block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 ${language === 'ar' ? 'pr-1' : 'pl-1'}`}>{t.levelLabel}</label>
                    <select 
                    value={level}
                    onChange={(e) => { 
                        setLevel(e.target.value as LevelType); 
                        setBranch('');
                    }}
                    disabled={!education}
                    className={`w-full p-4 rounded-xl bg-gray-50 dark:bg-[#3d3d3d] border-2 border-gray-200 dark:border-gray-600 focus:border-primary outline-none font-bold transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-gray-900 dark:text-white ${language === 'ar' ? 'text-right' : 'text-left'}`}
                    >
                    <option value="">{t.levelPlaceholder}</option>
                    {education === 'الثانوي الإعدادي' ? (
                        <>
                        <option value="1">{t.middle1}</option>
                        <option value="2">{t.middle2}</option>
                        <option value="3">{t.middle3}</option>
                        </>
                    ) : education === 'الثانوي التأهيلي' ? (
                        HS_LEVELS.map(l => <option key={l.value} value={l.value}>{DATA_TRANSLATIONS[l.label]?.[language] || l.label}</option>)
                    ) : null}
                    </select>
                </div>

                <button 
                onClick={handleStart}
                disabled={!isStartEnabled()}
                className="w-full p-4 rounded-xl font-black text-white bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] hover:bg-right shadow-lg hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                {t.startBtn}
                </button>
            </div>

            <div className="mt-6">
                 <button onClick={() => setView('ABOUT')} className="w-full py-3 rounded-xl font-bold text-primary border-2 border-primary bg-white hover:bg-primary hover:text-white transition shadow-lg">
                    {t.aboutBtn}
                 </button>
            </div>

            <SocialIcons />
          </div>
        )}

        {/* ... (BRANCHES, SUBJECTS, OPTIONS, CONTENT views remain same) ... */}
        {view === 'BRANCHES' && (
          <div className="animate-fadeIn">
            <h2 className="text-2xl font-black text-center mb-6 text-primary drop-shadow-sm">{t.selectBranch}</h2>
            <div className="flex flex-col gap-4">
              {HS_BRANCHES[level]?.map((b, idx) => (
                <button 
                  key={idx}
                  onClick={() => selectBranch(b)}
                  className={`p-5 rounded-2xl bg-white dark:bg-[#2d2d2d] border border-gray-100 dark:border-gray-700 shadow-md hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 dark:active:border-primary transition-all duration-300 font-bold text-lg flex items-center justify-between group ${language === 'ar' ? 'text-right' : 'text-left'}`}
                >
                  <span className="text-gray-800 dark:text-white group-hover:text-primary transition">{getBranchName(b)}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-[#3d3d3d] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition">
                     <i className={`fas fa-chevron-${language === 'ar' ? 'left' : 'right'} text-sm`}></i>
                  </div>
                </button>
              ))}
            </div>
            <button onClick={() => setView('HOME')} className="mt-8 w-full py-3 bg-white border-2 border-primary text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition shadow-sm">{t.changeLevel}</button>
          </div>
        )}

        {view === 'SUBJECTS' && (
           <div className="animate-fadeIn">
              <h2 className="text-2xl font-black text-center mb-2 text-gray-800 dark:text-white bg-white/80 dark:bg-[#333]/80 rounded-full inline-block px-6 py-2 backdrop-blur-sm">{t.subjectsTitle}</h2>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-6 text-sm font-bold bg-white/50 dark:bg-[#333]/50 inline-block px-4 py-1 rounded-full">{education === 'الثانوي الإعدادي' ? t.middleSchool : t.highSchool} - {branch ? getBranchName(branch) : (level === '1' ? '1' : level === '2' ? '2' : '3')}</p>
              
              <div className="grid grid-cols-1 gap-4">
                 {getSubjectsList().map((sub, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => selectSubject(sub.name)}
                      className="group relative overflow-hidden p-5 rounded-2xl text-white font-bold text-lg flex items-center gap-4 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent dark:active:border-primary transition-all duration-300"
                      style={{ background: `linear-gradient(135deg, ${sub.color}, ${adjustColor(sub.color, -20)})` }}
                    >
                       <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
                       <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-inner">
                            <i className={`${sub.icon} text-2xl`}></i>
                       </div>
                       <span className="flex-1 text-xl">{getSubjectDisplayName(sub.name)}</span>
                       <i className={`fas fa-arrow-${language === 'ar' ? 'left' : 'right'} opacity-0 group-hover:opacity-100 ${language === 'ar' ? '-translate-x-4' : 'translate-x-4'} group-hover:translate-x-0 transition-all duration-300`}></i>
                    </div>
                 ))}
                 {getSubjectsList().length === 0 && <div className="text-center text-gray-500 py-10">{t.noSubjects}</div>}
              </div>
              <button onClick={() => { education === 'الثانوي التأهيلي' ? setView('BRANCHES') : setView('HOME') }} className="mt-8 w-full py-3 border-2 border-gray-300 bg-white text-gray-600 rounded-xl font-bold hover:border-primary hover:text-primary hover:bg-white transition shadow-lg">{t.backBtn}</button>
           </div>
        )}

        {view === 'OPTIONS' && (
            <div className="animate-fadeIn">
                <h2 className="text-2xl font-black text-center mb-6 text-primary bg-white/90 dark:bg-[#333]/90 rounded-xl py-2 shadow-lg">{getSubjectDisplayName(selectedSubject)}</h2>
                <div className="grid grid-cols-1 gap-4">
                    {[
                        { title: t.lessons, icon: 'fas fa-book-open', desc: t.descLessons },
                        { title: t.exercises, icon: 'fas fa-pen-fancy', desc: t.descExercises },
                        { title: t.exams, icon: 'fas fa-file-signature', desc: t.descExams },
                        { title: t.videos, icon: 'fas fa-play-circle', desc: t.descVideos }
                    ].map(opt => (
                        <button key={opt.title} onClick={() => selectOption(opt.title)} className={`group p-5 rounded-2xl bg-white dark:bg-[#2d2d2d] border border-gray-100 dark:border-gray-700 shadow-md hover:border-primary hover:shadow-xl hover:-translate-y-1 dark:active:border-primary transition-all duration-300 flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <i className={`${opt.icon} text-xl`}></i>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-lg text-gray-800 dark:text-white">{opt.title}</div>
                                <div className="text-xs text-gray-500 font-normal mt-1">{opt.desc}</div>
                            </div>
                            <i className={`fas fa-chevron-${language === 'ar' ? 'left' : 'right'} text-gray-300 group-hover:text-primary transition`}></i>
                        </button>
                    ))}
                    
                    {/* Mind maps if present for current subject */}
                    {(() => {
                      const safeCycle = cycle || '1';
                      const msData = education === 'الثانوي الإعدادي' ? LINKS_DATA['الثانوي الإعدادي']?.[safeCycle]?.[level] : null;
                      const subData = msData ? (msData[selectedSubject] || msData['الفرنسية'] || msData['Mathématiques']) : null;
                      const mindMapsData = subData?.['خطاطات ذهنية'];
                      const hasMindMaps = Array.isArray(mindMapsData) ? mindMapsData.length > 0 : !!mindMapsData;
                      if (!hasMindMaps) return null;
                      return (
                        <button 
                          onClick={() => selectOption((t as any).mindMapsOption || 'خطاطات ذهنية')} 
                          className={`group p-5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}
                        >
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                                <i className="fas fa-project-diagram text-xl"></i>
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-lg text-white">{(t as any).mindMapsOption || 'خطاطات ذهنية'}</div>
                                <div className="text-xs text-white/80 font-normal mt-1">{(t as any).descMindMaps || 'خرائط ذهنية وتبسيط للمفاهيم'}</div>
                            </div>
                            <i className={`fas fa-chevron-${language === 'ar' ? 'left' : 'right'} text-white/60 group-hover:text-white transition`}></i>
                        </button>
                      );
                    })()}

                    {level === '3' && education === 'الثانوي الإعدادي' && (
                        <button onClick={() => selectOption(cycle === '1' ? t.localExams : t.regionalExams)} className={`group p-5 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 border-2 border-transparent dark:active:border-primary transition-all duration-300 flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                                <i className="fas fa-award text-xl"></i>
                            </div>
                            <div className="flex-1 font-bold text-lg">
                                {cycle === '1' ? t.localExams : t.regionalExams}
                            </div>
                        </button>
                    )}

                    {(level === '1_Bac') && (
                        <button onClick={() => selectOption(t.regionalExams)} className={`group p-5 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-orange-500/40 hover:-translate-y-1 border-2 border-transparent dark:active:border-primary transition-all duration-300 flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                                <i className="fas fa-map-marked-alt text-xl"></i>
                            </div>
                            <div className="flex-1 font-bold text-lg">
                                {t.regionalExams}
                            </div>
                        </button>
                    )}

                    {(level === '2_Bac') && (
                        <button onClick={() => selectOption(t.nationalExams)} className={`group p-5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-green-500/40 hover:-translate-y-1 border-2 border-transparent dark:active:border-primary transition-all duration-300 flex items-center gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                                <i className="fas fa-graduation-cap text-xl"></i>
                            </div>
                            <div className="flex-1 font-bold text-lg">
                                {t.nationalExams}
                            </div>
                        </button>
                    )}
                </div>
                <button onClick={() => setView('SUBJECTS')} className="mt-8 w-full py-3 border-2 border-primary bg-white text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition shadow-lg">{t.backBtn}</button>
            </div>
        )}

        {view === 'CONTENT' && (
            <div className="animate-fadeIn">
                <h2 className="text-xl font-bold text-center mb-6 text-gray-800 dark:text-white bg-white dark:bg-[#333] py-2 px-4 rounded-full shadow-sm inline-block mx-auto">{getSubjectDisplayName(selectedSubject)} <span className="text-primary mx-2">•</span> {selectedContentType}</h2>
                <div className="bg-white/80 dark:bg-[#2d2d2d]/80 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/20 dark:border-gray-700 min-h-[400px]">
                    {renderContent()}
                </div>
                <button onClick={() => setView('OPTIONS')} className="mt-6 w-full py-3 border-2 border-primary bg-white text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition shadow-sm">{t.backBtn}</button>
            </div>
        )}

        {view === 'TASKS' && <TasksModule language={language} />}
        {view === 'NOTES' && <NotesModule language={language} />}
        {view === 'FLASHCARDS' && <FlashcardsModule language={language} />}
        {view === 'POMODORO' && (
            <PomodoroModule 
                timeLeft={pomoTimeLeft} 
                setTimeLeft={setPomoTimeLeft}
                isActive={pomoIsActive}
                setIsActive={setPomoIsActive}
                mode={pomoMode}
                setMode={setPomoMode}
                focusDuration={pomoFocusDur}
                setFocusDuration={setPomoFocusDur}
                breakDuration={pomoBreakDur}
                setBreakDuration={setPomoBreakDur}
                language={language}
            />
        )}
        {view === 'MINDMAPS' && <MindMapsModule language={language} />}
        {view === 'CALCULATOR' && <GradeCalculatorModule language={language} />}

        {view === 'ABOUT' && (
             <div className="animate-fadeIn space-y-8 pb-10">
                <div className="text-center">
                   <h2 className="text-3xl font-black text-primary mb-2">{t.aboutTitle}</h2>
                   <p className="text-gray-500 font-medium">Built for students, by students.</p>
                </div>
                
                {/* Description Card */}
                <div className="bg-white dark:bg-[#2d2d2d] p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                   <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 dark:text-white">
                      {language === 'ar' ? 'قصتنا' : language === 'fr' ? 'Notre Histoire' : 'Our Story'}
                   </h3>
                   <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {t.aboutText}
                   </p>
                </div>

                {/* Statistics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {[
                      { val: '10k+', label: language === 'ar' ? 'مستخدم نشط' : 'Active Users', icon: 'fas fa-users', color: 'text-indigo-500' },
                      { val: '500+', label: language === 'ar' ? 'درس وتمرين' : 'Resources', icon: 'fas fa-book-open', color: 'text-emerald-500' },
                      { val: '4.8', label: language === 'ar' ? 'تقييم' : 'Rating', icon: 'fas fa-star', color: 'text-amber-500' },
                      { val: '24/7', label: language === 'ar' ? 'ولوج دائم' : 'Always On', icon: 'fas fa-clock', color: 'text-rose-500' },
                   ].map((stat, i) => (
                      <div key={i} className="bg-white dark:bg-[#2d2d2d] p-4 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:-translate-y-1 transition duration-300">
                         <i className={`${stat.icon} ${stat.color} text-2xl mb-2`}></i>
                         <div className="font-black text-2xl text-gray-800 dark:text-white">{stat.val}</div>
                         <div className="text-xs text-gray-500 font-bold mt-1">{stat.label}</div>
                      </div>
                   ))}
                </div>

                {/* Roadmap Section */}
                <div className="bg-white dark:bg-[#2d2d2d] rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                    <h3 className="text-2xl font-black text-center mb-8 text-primary flex items-center justify-center gap-2">
                        <i className="fas fa-map-signs"></i>
                        {t.roadmapTitle}
                    </h3>
                    
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className={`absolute top-0 bottom-0 ${language === 'ar' ? 'right-6 md:right-1/2' : 'left-6 md:left-1/2'} w-1 bg-gray-200 dark:bg-gray-700 transform ${language === 'ar' ? 'translate-x-1/2' : '-translate-x-1/2'}`}></div>

                        <div className="space-y-8 relative">
                            {t.roadmapSteps?.map((step: any, idx: number) => {
                                const isRight = idx % 2 === 0;
                                return (
                                    <div key={idx} className={`flex items-center gap-8 ${language === 'ar' ? (isRight ? 'md:flex-row-reverse' : 'md:flex-row') : (isRight ? 'md:flex-row' : 'md:flex-row-reverse')}`}>
                                        
                                        {/* Content Box */}
                                        <div className="flex-1 hidden md:block"></div>
                                        
                                        {/* Icon/Dot */}
                                        <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-4 border-white dark:border-[#2d2d2d] shadow-lg flex items-center justify-center"
                                             style={{ backgroundColor: step.status === 'done' ? '#2ecc71' : step.status === 'in_progress' ? '#f1c40f' : '#e0e0e0' }}
                                        >
                                            {step.status === 'done' ? <i className="fas fa-check text-white"></i> : 
                                             step.status === 'in_progress' ? <i className="fas fa-sync fa-spin text-white"></i> :
                                             <i className="fas fa-circle text-gray-400 text-[10px]"></i>}
                                        </div>

                                        {/* Content Box (Mobile & Desktop) */}
                                        <div className="flex-1 bg-gray-50 dark:bg-[#333] p-4 rounded-xl border border-gray-100 dark:border-gray-600 shadow-sm hover:shadow-md transition-all">
                                            <div className="text-xs font-bold text-gray-400 mb-1 uppercase tracking-wide">{step.phase}</div>
                                            <h4 className="font-bold text-gray-800 dark:text-white mb-1">{step.title}</h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">{step.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Legal & Extra Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button onClick={() => setInfoModalData({ title: t.privacyBtn, content: t.privacyContent })} className="p-4 bg-white dark:bg-[#2d2d2d] rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300 hover:text-primary hover:border-primary dark:active:border-primary transition flex items-center justify-center gap-2">
                        <i className="fas fa-user-shield"></i>
                        {t.privacyBtn}
                    </button>
                    <button onClick={() => setInfoModalData({ title: t.termsBtn, content: t.termsContent })} className="p-4 bg-white dark:bg-[#2d2d2d] rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300 hover:text-primary hover:border-primary dark:active:border-primary transition flex items-center justify-center gap-2">
                        <i className="fas fa-file-contract"></i>
                        {t.termsBtn}
                    </button>
                    <button onClick={() => setShowHolidays(true)} className="p-4 bg-white dark:bg-[#2d2d2d] rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300 hover:text-primary hover:border-primary dark:active:border-primary transition flex items-center justify-center gap-2">
                        <i className="fas fa-calendar-alt"></i>
                        {t.holidaysBtn}
                    </button>
                </div>

                <button onClick={() => setView('HOME')} className="w-full py-3 border-2 border-primary bg-white text-primary rounded-xl font-bold hover:bg-primary hover:text-white transition shadow-lg">{t.backBtn}</button>
             </div>
        )}

      </div>

      <footer className="w-full text-center py-6 text-gray-500 dark:text-gray-400 font-bold text-sm relative z-0 mt-auto opacity-80 border-t border-gray-200 dark:border-gray-800">
        SPACETECH &copy; 2025 - {t.footerRights}
      </footer>
      
      {/* AIAssistantModal for 3AC (Controlled strictly by X button, persistent against outside clicks and popstate) */}
      <AIAssistantModal 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
        language={language} 
      />

      <button
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 left-6 z-[8000] w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-accent text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 border-4 border-white dark:border-[#2d2d2d] group cursor-pointer"
        title={language === 'ar' ? "المساعد الذكي (الثالثة إعدادي)" : "Assistant IA (3AC)"}
      >
        <i className="fas fa-user-astronaut text-2xl group-hover:rotate-12 transition-transform text-yellow-300"></i>
        {/* 3AC Badge retained */}
        <span className="absolute -top-1.5 -right-1 bg-yellow-400 text-purple-950 font-black text-[9px] px-1.5 py-0.5 rounded-full shadow-md animate-bounce">
          3AC
        </span>
      </button>

    </div>
  );
};

function adjustColor(color: string, amount: number) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

export default App;
