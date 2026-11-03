import { LinksData, SubjectInfo, LinkItem } from './types';
import { MIDDLE_SCHOOL_3AC_RAW_DATA } from './data/middleSchool3ACData';

// ==========================================
// 1. CONFIGURATION & LISTS
// ==========================================

export const HS_LEVELS = [
  { value: 'Jada_Muchtarak', label: 'الجذع المشترك' },
  { value: '1_Bac', label: 'الأولى باكالوريا' },
  { value: '2_Bac', label: 'الثانية باكالوريا' }
];

export const HS_BRANCHES: { [key: string]: string[] } = {
  'Jada_Muchtarak': [
    'العلوم',
    'التكنولوجيا',
    'الآداب والعلوم الإنسانية'
  ],
  '1_Bac': [
    'العلوم الرياضية',
    'العلوم التجريبية',
    'العلوم و التكنولوجيات الكهربائية',
    'العلوم و التكنولوجيات الميكانيكية',
    'العلوم الاقتصادية والتدبير',
    'الآداب والعلوم الإنسانية'
  ],
  '2_Bac': [
    'العلوم الرياضية أ',
    'العلوم الرياضية ب',
    'العلوم الفيزيائية',
    'علوم الحياة والأرض',
    'العلوم الزراعية',
    'العلوم و التكنولوجيات الكهربائية',
    'العلوم و التكنولوجيات الميكانيكية',
    'العلوم الإقتصادية',
    'علوم التدبير المحاسباتي',
    'الآداب',
    'العلوم الإنسانية'
  ]
};

// Generic Subjects List
const GENERIC_HS_SUBJECTS: SubjectInfo[] = [
  { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
  { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
  { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#27ae60" },
  { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" },
  { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
  { name: "الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
  { name: "الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
  { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
  { name: "التاريخ والجغرافيا", icon: "fa-solid fa-globe-africa", color: "#d35400" }
];

// --- Specific Subject Lists (Added BIOF) ---

const CC_SCIENCE_SUBJECTS: SubjectInfo[] = [
  { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
  { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
  { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
  { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
  { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
  { name: "Sciences de la vie et de la Terre (SVT BIOF)", icon: "fa-solid fa-dna", color: "#27ae60" },
  { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
  { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
  { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
  { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
  { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
  { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" },
  { name: "المعلوميات", icon: "fas fa-laptop-code", color: "#2980b9" }
];

const CC_TECH_SUBJECTS: SubjectInfo[] = [
  { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
  { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
  { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
  { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
  { name: "علوم المهندس", icon: "fa-solid fa-gears", color: "#7f8c8d" },
  { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
  { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
  { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
  { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
  { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
  { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" }
];

const CC_ARTS_SUBJECTS: SubjectInfo[] = [
  { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
  { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
  { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
  { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
  { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" },
  { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
  { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
  { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" }
];

const BAC_SC_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (BIOF)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (BIOF)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
    { name: "Sciences de la vie et de la Terre (SVT BIOF)", icon: "fa-solid fa-dna", color: "#27ae60" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" } // Regional for Sc
];

const BAC_ECO_SUBJECTS: SubjectInfo[] = [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "الإقتصاد العام والإحصاء", icon: "fas fa-chart-line", color: "#2980b9" },
    { name: "الإقتصاد والتنظيم الإداري للمقاولات", icon: "fas fa-building", color: "#34495e" },
    { name: "المحاسبة والرياضيات المالية", icon: "fas fa-calculator", color: "#16a085" },
    { name: "القانون", icon: "fas fa-balance-scale", color: "#8e44ad" },
    { name: "معلوميات التدبير", icon: "fas fa-laptop-code", color: "#27ae60" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" }
];

const BAC_ARTS_SUBJECTS: SubjectInfo[] = [
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة الإنجليزية", icon: "fa-solid fa-language", color: "#e84393" },
    { name: "الإجتماعيات", icon: "fa-solid fa-globe-africa", color: "#d35400" },
    { name: "الفلسفة", icon: "fa-solid fa-brain", color: "#8e44ad" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" }
];

// Map branches to subject lists
const BRANCH_SUBJECT_MAPPING: { [key: string]: SubjectInfo[] } = {
    // Common Core
    'العلوم': CC_SCIENCE_SUBJECTS,
    'التكنولوجيا': CC_TECH_SUBJECTS,
    'الآداب والعلوم الإنسانية': CC_ARTS_SUBJECTS,
    // 1st Bac
    'العلوم الرياضية': BAC_SC_SUBJECTS,
    'العلوم التجريبية': BAC_SC_SUBJECTS,
    'العلوم و التكنولوجيات الكهربائية': [...CC_TECH_SUBJECTS],
    'العلوم و التكنولوجيات الميكانيكية': [...CC_TECH_SUBJECTS],
    'العلوم الاقتصادية والتدبير': BAC_ECO_SUBJECTS,
    'الآداب والعلوم الإنسانية (1)': BAC_ARTS_SUBJECTS,
    // 2nd Bac
    'العلوم الرياضية أ': BAC_SC_SUBJECTS,
    'العلوم الرياضية ب': BAC_SC_SUBJECTS,
    'العلوم الفيزيائية': BAC_SC_SUBJECTS,
    'علوم الحياة والأرض': BAC_SC_SUBJECTS,
    'العلوم الزراعية': BAC_SC_SUBJECTS,
    'العلوم و التكنولوجيات الكهربائية (2)': [...CC_TECH_SUBJECTS],
    'العلوم و التكنولوجيات الميكانيكية (2)': [...CC_TECH_SUBJECTS],
    'العلوم الإقتصادية': BAC_ECO_SUBJECTS,
    'علوم التدبير المحاسباتي': BAC_ECO_SUBJECTS,
    'الآداب': BAC_ARTS_SUBJECTS,
    'العلوم الإنسانية': BAC_ARTS_SUBJECTS
};

// Fix for key matching issues
BRANCH_SUBJECT_MAPPING['الآداب والعلوم الإنسانية'] = BAC_ARTS_SUBJECTS;
BRANCH_SUBJECT_MAPPING['العلوم و التكنولوجيات الكهربائية'] = CC_TECH_SUBJECTS; 
BRANCH_SUBJECT_MAPPING['العلوم و التكنولوجيات الميكانيكية'] = CC_TECH_SUBJECTS;

export const SUBJECTS_DATA: { [key: string]: SubjectInfo[] } = {
  "الثانوي الإعدادي": [
    { name: "الرياضيات", icon: "fas fa-square-root-alt", color: "#e74c3c" },
    { name: "Mathématiques (Fr)", icon: "fas fa-square-root-alt", color: "#c0392b" },
    { name: "الفيزياء والكيمياء", icon: "fa-solid fa-flask-vial", color: "#f39c12" },
    { name: "Physique et Chimie (Fr)", icon: "fa-solid fa-flask-vial", color: "#e67e22" },
    { name: "علوم الحياة والأرض", icon: "fa-solid fa-dna", color: "#2ecc71" },
    { name: "Sciences de la vie et de la Terre (SVT Fr)", icon: "fa-solid fa-dna", color: "#27ae60" },
    { name: "اللغة الفرنسية", icon: "fa-solid fa-book", color: "#3498db" },
    { name: "اللغة العربية", icon: "fa-solid fa-pen-nib", color: "#2c3e50" },
    { name: "التربية الإسلامية", icon: "fa-solid fa-mosque", color: "#16a085" },
    { name: "التاريخ", icon: "fa-solid fa-landmark", color: "#d35400" },
    { name: "الجغرافيا", icon: "fa-solid fa-earth-africa", color: "#e67e22" },
    { name: "التربية على المواطنة", icon: "fa-solid fa-people-group", color: "#9b59b6" }
  ]
};

// Export explicit level subjects for App.tsx
export const LEVEL_SUBJECTS: any = {
    'Jada_Muchtarak': {
        'العلوم': CC_SCIENCE_SUBJECTS,
        'التكنولوجيا': CC_TECH_SUBJECTS,
        'الآداب والعلوم الإنسانية': CC_ARTS_SUBJECTS
    },
    '1_Bac': {
        'العلوم الرياضية': BAC_SC_SUBJECTS,
        'العلوم التجريبية': BAC_SC_SUBJECTS,
        'العلوم و التكنولوجيات الكهربائية': CC_TECH_SUBJECTS,
        'العلوم و التكنولوجيات الميكانيكية': CC_TECH_SUBJECTS,
        'العلوم الاقتصادية والتدبير': BAC_ECO_SUBJECTS,
        'الآداب والعلوم الإنسانية': BAC_ARTS_SUBJECTS
    },
    '2_Bac': {
        'العلوم الرياضية أ': BAC_SC_SUBJECTS,
        'العلوم الرياضية ب': BAC_SC_SUBJECTS,
        'العلوم الفيزيائية': BAC_SC_SUBJECTS,
        'علوم الحياة والأرض': BAC_SC_SUBJECTS,
        'العلوم الزراعية': BAC_SC_SUBJECTS,
        'العلوم و التكنولوجيات الكهربائية': CC_TECH_SUBJECTS,
        'العلوم و التكنولوجيات الميكانيكية': CC_TECH_SUBJECTS,
        'العلوم الإقتصادية': BAC_ECO_SUBJECTS,
        'علوم التدبير المحاسباتي': BAC_ECO_SUBJECTS,
        'الآداب': BAC_ARTS_SUBJECTS,
        'العلوم الإنسانية': BAC_ARTS_SUBJECTS
    }
}

export const VIDEOS_DATA: { [key: string]: LinkItem[] } = {
  "الرياضيات": [
    { id: "dQw4w9WgXcQ", title: "درس: المتتاليات العددية - الجزء 1", duration: "15:30" },
    { id: "abc123def45", title: "درس: الأعداد العقدية - ملخص شامل", duration: "22:15" },
    { id: "xyz789uvw12", title: "تمارين محلولة: دراسة الدوال", duration: "18:45" }
  ],
  "الفيزياء والكيمياء": [
    { id: "12345", title: "الموجات الميكانيكية المتوالية", duration: "12:00" },
    { id: "67890", title: "التحولات النووية - التناقص الإشعاعي", duration: "20:00" }
  ]
};

// ==========================================
// 2. SHARED CONTENT STRUCTURES (High School)
// ==========================================

// --- Specific Arabic Content for Common Core ---

// 1. For Science & Technology (الجذع المشترك العلمي والتكنولوجي)
const HS_ARABIC_SC_TECH_LESSONS = {
  "المجزوأت": [
    {title: "مجزوءة الحكي", url: "#"},
    {title: "مجزوءة الحجاج", url: "#"},
    {title: "مجزوءة الشعر (قضايا معاصرة)", url: "#"}
  ],
  "الدروس اللغوية": [
    {title: "التمييز", url: "#"},
    {title: "العدد", url: "#"},
    {title: "الأمر والنهي", url: "#"},
    {title: "الاستفهام", url: "#"},
    {title: "التمني", url: "#"},
    {title: "المصادر", url: "#"}
  ],
  "دروس النصوص": [
    {title: "نص: اختيار الشريك", url: "#"},
    {title: "نص: التكنولوجيا والثقافة", url: "#"},
    {title: "نص: التلوث البيئي", url: "#"}
  ],
  "دروس التعبير والإنشاء": [
    {title: "مهارة إنتاج نص سردي", url: "#"},
    {title: "مهارة الحجاج: الدفاع عن وجهة نظر", url: "#"},
    {title: "مهارة تحويل نص", url: "#"}
  ]
};

// 2. For Arts & Humanities (الجذع المشترك للآداب والعلوم الإنسانية)
const HS_ARABIC_ARTS_LESSONS = {
  "المجزوأت": [
    {title: "مجزوءة الشعر الجاهلي", url: "#"},
    {title: "مجزوءة الشعر الأموي", url: "#"},
    {title: "مجزوءة الشعر العباسي", url: "#"},
    {title: "مجزوءة النثر القديم", url: "#"}
  ],
  "الدروس اللغوية": [
    {title: "الصرف: الميزان الصرفي", url: "#"},
    {title: "الصرف: أبنية الأفعال", url: "#"},
    {title: "البلاغة: التشبيه وأركانه", url: "#"},
    {title: "البلاغة: الحقيقة والمجاز", url: "#"},
    {title: "العروض: الكتابة العروضية", url: "#"},
    {title: "العروض: البحر الطويل والبسيط", url: "#"}
  ],
  "دروس النصوص": [
    {title: "نص شعري: معلقة امرؤ القيس", url: "#"},
    {title: "نص شعري: شعر الفروسية (عنترة)", url: "#"},
    {title: "نص نثري: الخطابة في العصر الجاهلي", url: "#"},
    {title: "نص شعري: الغزل العذري", url: "#"}
  ],
  "دروس التعبير والإنشاء": [
    {title: "مهارة كتابة إنشاء أدبي حول نص شعري", url: "#"},
    {title: "مهارة كتابة إنشاء أدبي حول نص نثري", url: "#"},
    {title: "مهارة التلخيص", url: "#"}
  ]
};


const HS_ARABIC_LESSONS = {
  "المجزوأت": [
    {title: "الشعر العربي الدجلي", url: "#"},
    {title: "مجزوءة الشعر الأموي", url: "#"},
    {title: "مجزوءة الشعر العباسي", url: "#"},
    {title: "مجزوءة النثر القديم", url: "#"}
  ],
  "الدروس اللغوية": [
    {title: "الصرف: الميزان الصرفي", url: "#"},
    {title: "الصرف: أبنية الأفعال", url: "#"},
    {title: "البلاغة: التشبيه وأركانه", url: "#"},
    {title: "البلاغة: الحقيقة والمجاز", url: "#"},
    {title: "العروض: الكتابة العروضية", url: "#"},
    {title: "العروض: البحر الطويل والبسيط", url: "#"}
  ],
  "دروس النصوص": [
    {title: "نص شعري: معلقة امرؤ القيس", url: "#"},
    {title: "نص شعري: شعر الفروسية (عنترة)", url: "#"},
    {title: "نص نثري: الخطابة في العصر الجاهلي", url: "#"},
    {title: "نص شعري: الغزل العذري", url: "#"}
  ],
  "دروس التعبير والإنشاء": [
    {title: "مهارة كتابة إنشاء أدبي حول نص شعري", url: "#"},
    {title: "مهارة كتابة إنشاء أدبي حول نص نثري", url: "#"},
    {title: "مهارة التلخيص", url: "#"}
  ]
};

const HS_ISLAMIC_LESSONS = {
  "مدخل التزكية (القرآن الكريم)": [{title: "سورة الكهف / يس", url: "#"}],
  "مدخل التزكية (العقيدة)": [{title: "الإيمان والغيب", url: "#"}, {title: "الإيمان والعلم", url: "#"}],
  "مدخل الإقتداء": [{title: "صلح الحديبية", url: "#"}, {title: "الرسول (ص) مفاوضاً", url: "#"}],
  "مدخل الإستجابة": [{title: "فقه الأسرة: الزواج", url: "#"}, {title: "فقه الأسرة: الطلاق", url: "#"}],
  "مدخل القسط": [{title: "حق الله: الوفاء بالأمانة", url: "#"}, {title: "حق النفس: الصبر واليقين", url: "#"}],
  "مدخل الحكمة": [{title: "التصور الإسلامي للحرية", url: "#"}, {title: "الرحمة والرفق", url: "#"}]
};

const HS_SOCIAL_LESSONS = {
  "التاريخ": [{title: "التحولات الكبرى في العالم الرأسمالي", url: "#"}, {title: "نظام الحماية بالمغرب", url: "#"}],
  "الجغرافيا": [{title: "المجال العالمي: التحديات الكبرى", url: "#"}, {title: "الاتحاد الأوروبي", url: "#"}]
};

const HS_FRENCH_COMMON_LESSONS = {
  "Activités de lecture": [{title: "Étude de texte: La nouvelle réaliste", url: "#"}, {title: "Étude de poème", url: "#"}],
  "Activités de langue": [{title: "Grammaire: Les temps du récit", url: "#"}, {title: "Figures de style", url: "#"}],
  "Module 1": [{title: "Séquence 1: La typologie textuelle", url: "#"}],
  "Module 2": [{title: "Séquence 2: La nouvelle", url: "#"}]
};

const HS_FRENCH_1BAC_LESSONS = {
  "La Boîte à merveilles": [{title: "Fiche de lecture", url: "#"}, {title: "Résumé par chapitre", url: "#"}, {title: "Personnages", url: "#"}],
  "Antigone": [{title: "Fiche de lecture", url: "#"}, {title: "Résumé et Scènes", url: "#"}, {title: "Le mythe d'Oedipe", url: "#"}],
  "Le dernier jour d’un condamné": [{title: "Fiche de lecture", url: "#"}, {title: "Thèmes principaux", url: "#"}],
  "Cours de langue": [{title: "Les figures de style", url: "#"}, {title: "Les registres de langue", url: "#"}, {title: "La focalisation", url: "#"}],
  "Production écrite": [{title: "Sujet de réflexion: La peine de mort", url: "#"}, {title: "Sujet: La tradition et la modernité", url: "#"}]
};


// ==========================================
// 3. EXPORTED DATA
// ==========================================

const ms_gen_c1 = (MIDDLE_SCHOOL_3AC_RAW_DATA as any)["عام"]["1"]["3"];
const ms_biof_c1 = (MIDDLE_SCHOOL_3AC_RAW_DATA as any)["دولي"]["1"]["3"];

const ms_gen_c2 = (MIDDLE_SCHOOL_3AC_RAW_DATA as any)["عام"]["2"]["3"];
const ms_biof_c2 = (MIDDLE_SCHOOL_3AC_RAW_DATA as any)["دولي"]["2"]["3"];

export const middleSchool3AC_C1: any = {
  ...ms_gen_c1,
  "Mathématiques (Fr)": ms_biof_c1["Mathématiques"],
  "Mathématiques": ms_biof_c1["Mathématiques"],
  "Physique et Chimie (Fr)": ms_biof_c1["Physique et Chimie"],
  "Physique et Chimie": ms_biof_c1["Physique et Chimie"],
  "Sciences de la vie et de la Terre (SVT Fr)": ms_biof_c1["Sciences de la Vie et de la Terre"],
  "Sciences de la Vie et de la Terre": ms_biof_c1["Sciences de la Vie et de la Terre"],
  "اللغة الفرنسية": ms_gen_c1["الفرنسية"] || ms_biof_c1["الفرنسية"],
  "الفرنسية": ms_gen_c1["الفرنسية"] || ms_biof_c1["الفرنسية"],
};

export const middleSchool3AC_C2: any = {
  ...ms_gen_c2,
  "Mathématiques (Fr)": ms_biof_c2["Mathématiques"],
  "Mathématiques": ms_biof_c2["Mathématiques"],
  "Physique et Chimie (Fr)": ms_biof_c2["Physique et Chimie"],
  "Physique et Chimie": ms_biof_c2["Physique et Chimie"],
  "Sciences de la vie et de la Terre (SVT Fr)": ms_biof_c2["Sciences de la Vie et de la Terre"],
  "Sciences de la Vie et de la Terre": ms_biof_c2["Sciences de la Vie et de la Terre"],
  "اللغة الفرنسية": ms_gen_c2["الفرنسية"] || ms_biof_c2["الفرنسية"],
  "الفرنسية": ms_gen_c2["الفرنسية"] || ms_biof_c2["الفرنسية"],
};

export const LINKS_DATA: any = {
  "عام": (MIDDLE_SCHOOL_3AC_RAW_DATA as any)["عام"],
  "دولي": (MIDDLE_SCHOOL_3AC_RAW_DATA as any)["دولي"],
  "الثانوي الإعدادي": {
    "1": {
      "1": {
        "الرياضيات": {
          "دروس":[
            { title: "النشر والتعميل", url: "https://drive.google.com/file/d/1t3998-i8p4sXeHYm8xncqwOrrhTdbbsE/view?usp=drive_link" },
            { title: "القوى", url: "https://drive.google.com/file/d/1-YpeSe8A0E5DrqfM3Wby1AL37XTzQiuQ/view?usp=drive_link" }
          ],
          "تمارين":[{ title:"النشر والتعميل - سلسلة التمارين 1", url:"#"}],
          "فروض + التصحيح": {
            "المرحلة الأولى":[{title:"الفرض 1 نموذج 1 - الرياضيات", url:"#"}],
            "المرحلة الثانية":[],
            "المرحلة الثالثة":[]
          },
          "امتحانات محلية + التصحيح":[ {title:"امتحان محلي مثال", url:"#"} ],
          "امتحانات جهوية + التصحيح":[ {title:"امتحان جهوي مثال", url:"#"} ]
        },
        "اللغة العربية": {
          "دروس": {
            "الدروس اللغوية": [
              { title: "قواعد - درس 1", urls: ["",""] },
              { title: "قواعد - درس 2", urls: ["",""] }
            ],
            "النصوص القرائية": [
              { title: "نص - درس 1", urls: ["",""] },
              { title: "نص - درس 2", urls: ["",""]}
            ],
            "دروس التعبير والإنشاء": [
              { title: "إنشاء - درس 1", urls: ["",""] }
            ]
          },
          "تمارين": [],
          "فروض + التصحيح": {"المرحلة الأولى":[],"المرحلة الثانية":[],"المرحلة الثالثة":[]}
        },
        "التربية الإسلامية": {
          "دروس": {
            "مدخل التزكية (القرآن الكريم)":[{title:"آيات موضوع 1", urls:["",""]}],
            "مدخل التزكية (العقيدة)":[{title:"عقيدة - درس1", urls:["",""]}],
            "مدخل الاقتداء":[{title:"اقتداء - درس1", urls:["",""]}],
            "مدخل الاستجابة":[{title:"استجابة - درس1", urls:["",""]}],
            "مدخل القسط":[{title:"درس قسط 1", urls:["",""]}],
            "مدخل الحكمة":[{title:"درس حكمة 1", urls:["",""]}]
          },
          "تمارين": [],
          "فروض + التصحيح": {"المرحلة الأولى":[],"المرحلة الثانية":[],"المرحلة الثالثة":[]}
        }
      },
      "2": {
        "الرياضيات": {"دروس":[{title:"درس 1", url:"#"}],"تمارين":[{title:"تمرين 1", url:"#"}],"فروض + التصحيح":{}},
        "اللغة العربية": {
          "دروس": {
            "الدروس اللغوية":[{title:"قواعد - درس1", urls:["#"]}],
            "النصوص القرائية":[{title:"نص - درس1", urls:["#"]}],
            "دروس التعبير والإنشاء":[{title:"إنشاء - درس1", urls:["#"]}]
          }
        },
        "التربية الإسلامية": {
          "دروس": {
            "مدخل التزكية (القرآن الكريم)":[{title:"درس قرآني 1", urls:["#"]}],
            "مدخل التزكية (العقيدة)":[{title:"درس عقيدة 1", urls:["#"]}],
            "مدخل الاقتداء":[{title:"درس اقتداء 1", urls:["#"]}],
            "مدخل الاستجابة":[{title:"درس استجابة 1", urls:["#"]}],
            "مدخل القسط":[{title:"درس قسط 1", urls:["#"]}],
            "مدخل الحكمة":[{title:"درس حكمة 1", urls:["#"]}]
          }
        }
      },
      "3": middleSchool3AC_C1
    },
    "2": {
      "1": {
        "الرياضيات": { "دروس": [{title: "المعادلات", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
        "اللغة العربية": { 
          "دروس": {
            "الدروس اللغوية": [{title: "المبتدأ والخبر", url: "#"}],
            "النصوص القرائية": [{title: "الرياضة", url: "#"}],
            "التعبير والإنشاء": [{title: "كتابة رسالة", url: "#"}]
          },
          "تمارين": [], "فروض + التصحيح": {} 
        },
        "التربية الإسلامية": { 
          "دروس": {
            "مدخل التزكية (القرآن الكريم)": [{title: "سورة لقمان", url: "#"}],
            "مدخل التزكية (العقيدة)": [{title: "اليوم الآخر", url: "#"}],
            "مدخل الإقتداء": [{title: "الصبر", url: "#"}],
            "مدخل الإستجابة": [{title: "الصيام", url: "#"}],
            "مدخل القسط": [{title: "التسامح", url: "#"}],
            "مدخل الحكمة": [{title: "العفو", url: "#"}]
          },
          "تمارين": [], "فروض + التصحيح": {} 
        }
      },
      "2": {
        "الرياضيات": { "دروس": [{title: "المتجهات والإزاحة", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
        "اللغة العربية": { 
          "دروس": {
            "الدروس اللغوية": [{title: "المفعول المطلق", url: "#"}],
            "النصوص القرائية": [{title: "حقوق الإنسان", url: "#"}],
            "التعبير والإنشاء": [{title: "تحويل نص", url: "#"}]
          },
          "تمارين": [], "فروض + التصحيح": {} 
        },
        "التربية الإسلامية": { 
          "دروس": {
            "مدخل التزكية (القرآن الكريم)": [{title: "سورة النجم", url: "#"}],
            "مدخل التزكية (العقيدة)": [{title: "القدر", url: "#"}],
            "مدخل الإقتداء": [{title: "فتح مكة", url: "#"}],
            "مدخل الإستجابة": [{title: "الحج", url: "#"}],
            "مدخل القسط": [{title: "العدل", url: "#"}],
            "مدخل الحكمة": [{title: "التضامن", url: "#"}]
          },
          "تمارين": [], "فروض + التصحيح": {} 
        }
      },
      "3": middleSchool3AC_C2
    }
  },
  "الثانوي التأهيلي": {
    "1": {
      "Jada_Muchtarak": {
        "العلوم": {
          "الرياضيات": {
            "دروس": [
              { title: "المجموعات N, Z, Q, R", url: "https://drive.google.com/file/d/math_cc_sets/view" },
              { title: "الحساب المتجهي في المستوى", url: "https://drive.google.com/file/d/math_cc_vectors/view" }
            ],
            "تمارين": [
              { title: "سلسلة تمارين المجموعات", url: "https://drive.google.com/file/d/math_cc_ex_sets/view" }
            ],
            "فروض + التصحيح": {
              "الدورة 1": [
                { title: "فرض محروس رقم 1", url: "https://drive.google.com/file/d/math_cc_test1/view" }
              ]
            },
            "فيديوهات": VIDEOS_DATA["الرياضيات"]
          },
          "Mathématiques (BIOF)": {
            "دروس": [
              { title: "Ensembles de nombres N, Z, Q, R", url: "https://drive.google.com/file/d/mathbiof_cc_sets/view" }
            ],
            "تمارين": [],
            "فروض + التصحيح": {}
          },
          "الفيزياء والكيمياء": {
            "دروس": [
              { title: "التجاذب الكوني", url: "https://drive.google.com/file/d/phy_cc_grav/view" }
            ],
            "تمارين": [],
            "فروض + التصحيح": {}
          },
          "Physique et Chimie (BIOF)": {
            "دروس": [
              { title: "La gravitation universelle", url: "https://drive.google.com/file/d/phybiof_cc_grav/view" }
            ],
            "تمارين": [],
            "فروض + التصحيح": {}
          },
          "علوم الحياة والأرض": { "دروس": [{ title: "علم البيئة", url: "#" }], "تمارين": [], "فروض + التصحيح": {} },
          "Sciences de la vie et de la Terre (SVT BIOF)": { "دروس": [{ title: "Écologie", url: "#" }], "تمارين": [], "فروض + التصحيح": {} },
          // Using Science/Tech Arabic
          "اللغة العربية": { "دروس": HS_ARABIC_SC_TECH_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
          "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
          "اللغة الإنجليزية": { "دروس": [{ title: "Education", url: "#" }], "تمارين": [], "فروض + التصحيح": {} },
          "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
          "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
          "الفلسفة": { "دروس": [{ title: "نشأة الفلسفة", url: "#" }], "تمارين": [], "فروض + التصحيح": {} },
          "المعلوميات": { "دروس": [{ title: "Généralités sur l'informatique", url: "#" }], "تمارين": [], "فروض + التصحيح": {} }
        },
        "التكنولوجيا": {
             "الرياضيات": { "دروس": [{ title: "الحساب المتجهي", url: "#" }], "تمارين": [], "فروض + التصحيح": {} },
             "Mathématiques (BIOF)": { "دروس": [{ title: "Calcul vectoriel", url: "#" }], "تمارين": [], "فروض + التصحيح": {} },
             "الفيزياء والكيمياء": { "دروس": [{ title: "التجاذب الكوني", url: "#" }], "تمارين": [], "فروض + التصحيح": {} },
             "Physique et Chimie (BIOF)": { "دروس": [{ title: "Gravitation", url: "#" }], "تمارين": [], "فروض + التصحيح": {} },
             "علوم المهندس": { "دروس": [{ title: "Analyse fonctionnelle", url: "#" }], "تمارين": [], "فروض + التصحيح": {} },
             // Using Science/Tech Arabic
             "اللغة العربية": { "دروس": HS_ARABIC_SC_TECH_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
             "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
             "اللغة الإنجليزية": { "دروس": [{title: "Unit 1", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
             "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
             "الفلسفة": { "دروس": [{title: "مدخل للفلسفة", url: "#"}], "تمارين": [], "فروض + التصحيح": {} }
        },
        "الآداب والعلوم الإنسانية": {
             // Using Arts Arabic
             "اللغة العربية": { "دروس": HS_ARABIC_ARTS_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
             "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
             "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
             "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "تمارين": [], "فروض + التصحيح": {} },
             "الفلسفة": { "دروس": [{title: "بداية التفلسف", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "اللغة الإنجليزية": { "دروس": [{title: "Grammar", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "الرياضيات": { "دروس": [{title: "الحساب العددي", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "علوم الحياة والأرض": { "دروس": [{title: "الماء", url: "#"}], "تمارين": [], "فروض + التصحيح": {} }
        }
      },
      "1_Bac": {
         "العلوم التجريبية": {
             "الرياضيات": { "دروس": [{title: "المنطق", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "Mathématiques (BIOF)": { "دروس": [{title: "Logique", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "الفيزياء والكيمياء": { "دروس": [{title: "حركة دوران جسم صلب", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "Physique et Chimie (BIOF)": { "دروس": [{title: "Mouvement de rotation", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "علوم الحياة والأرض": { "دروس": [{title: "امتصاص الماء", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "Sciences de la vie et de la Terre (SVT BIOF)": { "دروس": [{title: "Absorption de l'eau", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "تمارين": [], "فروض + التصحيح": {}, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي 2022", url: "#"}] },
             "اللغة الفرنسية": { "دروس": HS_FRENCH_1BAC_LESSONS, "تمارين": [], "فروض + التصحيح": {}, "امتحانات جهوية + التصحيح": [{title: "Examen Régional 2022", url: "#"}] },
             "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "تمارين": [], "فروض + التصحيح": {}, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي 2022", url: "#"}] },
             "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "تمارين": [], "فروض + التصحيح": {}, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي 2022", url: "#"}] },
             "الفلسفة": { "دروس": [{title: "الوعي واللاوعي", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "اللغة الإنجليزية": { "دروس": [{title: "Education", url: "#"}], "تمارين": [], "فروض + التصحيح": {} }
         },
         "العلوم الرياضية": {
             "الرياضيات": { "دروس": [{title: "المنطق", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "Mathématiques (BIOF)": { "دروس": [{title: "Logique", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "الفيزياء والكيمياء": { "دروس": [{title: "شغل وقدرة قوة", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "Physique et Chimie (BIOF)": { "دروس": [{title: "Travail et puissance", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "علوم الحياة والأرض": { "دروس": [{title: "الدراسات الاحصائية", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "Sciences de la vie et de la Terre (SVT BIOF)": { "دروس": [{title: "Statistiques", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "تمارين": [], "فروض + التصحيح": {}, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي 2021", url: "#"}] },
             "اللغة الفرنسية": { "دروس": HS_FRENCH_1BAC_LESSONS, "تمارين": [], "فروض + التصحيح": {}, "امتحانات جهوية + التصحيح": [{title: "Examen Régional 2021", url: "#"}] },
             "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "تمارين": [], "فروض + التصحيح": {}, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي 2021", url: "#"}] },
             "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "تمارين": [], "فروض + التصحيح": {}, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي 2021", url: "#"}] },
             "الفلسفة": { "دروس": [{title: "الرغبة", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "اللغة الإنجليزية": { "دروس": [{title: "Media", url: "#"}], "تمارين": [], "فروض + التصحيح": {} }
         },
         "العلوم الاقتصادية والتدبير": {
             "الرياضيات": { "دروس": [{title: "المتتاليات", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "الإقتصاد العام والإحصاء": { "دروس": [{title: "Les marchés", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "الإقتصاد والتنظيم الإداري للمقاولات": { "دروس": [{title: "L'entreprise", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "المحاسبة والرياضيات المالية": { "دروس": [{title: "Les amortissements", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "القانون": { "دروس": [{title: "Droit commercial", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "تمارين": [], "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "اللغة الفرنسية": { "دروس": HS_FRENCH_1BAC_LESSONS, "تمارين": [], "امتحانات جهوية + التصحيح": [{title: "Examen Régional", url: "#"}] },
             "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "تمارين": [], "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "تمارين": [], "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "اللغة الإنجليزية": { "دروس": [{title: "Business English", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "الفلسفة": { "دروس": [{title: "المجتمع", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "معلوميات التدبير": { "دروس": [{title: "Excel avancé", url: "#"}], "تمارين": [], "فروض + التصحيح": {} }
         },
         "الآداب والعلوم الإنسانية": {
             "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "تمارين": [], "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "اللغة الفرنسية": { "دروس": HS_FRENCH_1BAC_LESSONS, "تمارين": [], "امتحانات جهوية + التصحيح": [{title: "Examen Régional", url: "#"}] },
             "اللغة الإنجليزية": { "دروس": [{title: "Grammar & Vocab", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "تمارين": [], "fروض + التصحيح": {} },
             "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "تمارين": [], "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "الرياضيات": { "دروس": [{title: "الحساب العددي", url: "#"}], "تمارين": [], "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "الفلسفة": { "دروس": [{title: "الإنسان", url: "#"}], "تمارين": [], "فروض + التصحيح": {} }
         },
         "العلوم و التكنولوجيات الكهربائية": {
             "الرياضيات": { "دروس": [{title: "المنطق", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "Mathématiques (BIOF)": { "دروس": [{title: "Logique", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "علوم المهندس": { "دروس": [{title: "Fonction alimenter", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "الفيزياء والكيمياء": { "دروس": [{title: "الكهرباء", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "Physique et Chimie (BIOF)": { "دروس": [{title: "Électricité", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "اللغة الفرنسية": { "دروس": HS_FRENCH_1BAC_LESSONS, "امتحانات جهوية + التصحيح": [{title: "Examen Régional", url: "#"}] },
             "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "الفلسفة": { "دروس": [{title: "الوعي", url: "#"}], "فروض + التصحيح": {} },
             "اللغة الإنجليزية": { "دروس": [{title: "Technology", url: "#"}], "فروض + التصحيح": {} }
         },
         "العلوم و التكنولوجيات الميكانيكية": {
             "الرياضيات": { "دروس": [{title: "المنطق", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "Mathématiques (BIOF)": { "دروس": [{title: "Logique", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "علوم المهندس": { "دروس": [{title: "Dessin industriel", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "الفيزياء والكيمياء": { "دروس": [{title: "الميكانيك", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "Physique et Chimie (BIOF)": { "دروس": [{title: "Mécanique", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
             "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "اللغة الفرنسية": { "دروس": HS_FRENCH_1BAC_LESSONS, "امتحانات جهوية + التصحيح": [{title: "Examen Régional", url: "#"}] },
             "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "امتحانات جهوية + التصحيح": [{title: "امتحان جهوي", url: "#"}] },
             "الفلسفة": { "دروس": [{title: "الوعي", url: "#"}], "فروض + التصحيح": {} },
             "اللغة الإنجليزية": { "دروس": [{title: "Technology", url: "#"}], "فروض + التصحيح": {} }
         }
      },
      "2_Bac": {
          "العلوم الفيزيائية": {
              "الرياضيات": { "دروس": [{title: "الاتصال", url: "#"}, {title: "الاشتقاق", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Mathématiques (BIOF)": { "دروس": [{title: "Continuité", url: "#"}, {title: "Dérivation", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "الفيزياء والكيمياء": { "دروس": [{title: "الموجات", url: "#"}, {title: "النووي", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Physique et Chimie (BIOF)": { "دروس": [{title: "Ondes", url: "#"}, {title: "Nucléaire", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "علوم الحياة والأرض": { "دروس": [{title: "استهلاك المادة العضوية", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
              "Sciences de la vie et de la Terre (SVT BIOF)": { "دروس": [{title: "Consommation matière organique", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
              "اللغة الإنجليزية": { "دروس": [{title: "Youth", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الفلسفة": { "دروس": [{title: "الوضع البشري", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "فروض + التصحيح": {} },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "فروض + التصحيح": {} },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "فروض + التصحيح": {} }
          },
          "علوم الحياة والأرض": {
              "الرياضيات": { "دروس": [{title: "الدوال الأسية", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Mathématiques (BIOF)": { "دروس": [{title: "Fonctions exp", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "الفيزياء والكيمياء": { "دروس": [{title: "الكهرباء", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Physique et Chimie (BIOF)": { "دروس": [{title: "Électricité", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "علوم الحياة والأرض": { "دروس": [{title: "الخبر الوراثي", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Sciences de la vie et de la Terre (SVT BIOF)": { "دروس": [{title: "Information génétique", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "اللغة الإنجليزية": { "دروس": [{title: "Humor", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الفلسفة": { "دروس": [{title: "المعرفة", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "فروض + التصحيح": {} },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "فروض + التصحيح": {} },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "فروض + التصحيح": {} }
          },
          "العلوم الرياضية أ": {
              "الرياضيات": { "دروس": [{title: "الحسابيات", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Mathématiques (BIOF)": { "دروس": [{title: "Arithmétique", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "الفيزياء والكيمياء": { "دروس": [{title: "الميكانيك", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Physique et Chimie (BIOF)": { "دروس": [{title: "Mécanique", url: "#"}], "تمارين": [], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "علوم الحياة والأرض": { "دروس": [{title: "الخبر الوراثي", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
              "Sciences de la vie et de la Terre (SVT BIOF)": { "دروس": [{title: "Génétique", url: "#"}], "تمارين": [], "فروض + التصحيح": {} },
              "اللغة الإنجليزية": { "دروس": [{title: "Advances", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الفلسفة": { "دروس": [{title: "السياسة", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "فروض + التصحيح": {} },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "فروض + التصحيح": {} },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "فروض + التصحيح": {} }
          },
          "العلوم الرياضية ب": {
              "الرياضيات": { "دروس": [{title: "البنيات الجبرية", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Mathématiques (BIOF)": { "دروس": [{title: "Structures algébriques", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "الفيزياء والكيمياء": { "دروس": [{title: "الكهرباء", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Physique et Chimie (BIOF)": { "دروس": [{title: "Électricité", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "علوم المهندس": { "دروس": [{title: "Grafcet", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة الإنجليزية": { "دروس": [{title: "Women", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الفلسفة": { "دروس": [{title: "الوضع البشري", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "فروض + التصحيح": {} },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "فروض + التصحيح": {} },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "فروض + التصحيح": {} }
          },
          "العلوم الإقتصادية": {
              "الرياضيات": { "دروس": [{title: "الاحتمالات", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الإقتصاد العام والإحصاء": { "دروس": [{title: "Mondialisation", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "الإقتصاد والتنظيم الإداري للمقاولات": { "دروس": [{title: "Stratégie", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "المحاسبة والرياضيات المالية": { "دروس": [{title: "Bilan", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "القانون": { "دروس": [{title: "Droit du travail", url: "#"}], "fروض + التصحيح": {} },
              "الفلسفة": { "دروس": [{title: "الدولة", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة الإنجليزية": { "دروس": [{title: "Business", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "فروض + التصحيح": {} },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "فروض + التصحيح": {} },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "فروض + التصحيح": {} }
          },
          "علوم التدبير المحاسباتي": {
              "الرياضيات": { "دروس": [{title: "الدوال", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الإقتصاد العام والإحصاء": { "دروس": [{title: "Développement", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "الإقتصاد والتنظيم الإداري للمقاولات": { "دروس": [{title: "GRH", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "المحاسبة والرياضيات المالية": { "دروس": [{title: "Comptabilité analytique", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "القانون": { "دروس": [{title: "Contrats", url: "#"}], "fروض + التصحيح": {} },
              "الفلسفة": { "دروس": [{title: "العنف", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة الإنجليزية": { "دروس": [{title: "Global Issues", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "فروض + التصحيح": {} },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "فروض + التصحيح": {} },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "فروض + التصحيح": {} }
          },
          "العلوم الزراعية": {
              "الرياضيات": { "دروس": [{title: "الدوال", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Mathématiques (BIOF)": { "دروس": [{title: "Fonctions", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "الفيزياء والكيمياء": { "دروس": [{title: "الكيمياء العضوية", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Physique et Chimie (BIOF)": { "دروس": [{title: "Chimie organique", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "علوم الحياة والأرض": { "دروس": [{title: "الجيولوجيا", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Sciences de la vie et de la Terre (SVT BIOF)": { "دروس": [{title: "Géologie", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "اللغة الإنجليزية": { "دروس": [{title: "Ecology", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الفلسفة": { "دروس": [{title: "الحق والعدالة", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "فروض + التصحيح": {} },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "فروض + التصحيح": {} },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "فروض + التصحيح": {} }
          },
          "العلوم و التكنولوجيات الكهربائية": {
              "الرياضيات": { "دروس": [{title: "الدوال", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Mathématiques (BIOF)": { "دروس": [{title: "Fonctions", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "علوم المهندس": { "دروس": [{title: "Moduler", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الفيزياء والكيمياء": { "دروس": [{title: "الكهرباء", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Physique et Chimie (BIOF)": { "دروس": [{title: "Électricité", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "الفلسفة": { "دروس": [{title: "التقنية", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة الإنجليزية": { "دروس": [{title: "Technology", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "فروض + التصحيح": {} },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "فروض + التصحيح": {} },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "فروض + التصحيح": {} }
          },
          "العلوم و التكنولوجيات الميكانيكية": {
              "الرياضيات": { "دروس": [{title: "التكامل", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Mathématiques (BIOF)": { "دروس": [{title: "Intégration", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "علوم المهندس": { "دروس": [{title: "Transmettre", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الفيزياء والكيمياء": { "دروس": [{title: "الميكانيك", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "Physique et Chimie (BIOF)": { "دروس": [{title: "Mécanique", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "الفلسفة": { "دروس": [{title: "الشغل", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة الإنجليزية": { "دروس": [{title: "Industry", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "فروض + التصحيح": {} },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "فروض + التصحيح": {} },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "فروض + التصحيح": {} }
          },
          "الآداب": {
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "اللغة الإنجليزية": { "دروس": [{title: "Education", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الفلسفة": { "دروس": [{title: "الوضع البشري", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "fروض + التصحيح": {} },
              "الرياضيات": { "دروس": [{title: "المتتاليات", url: "#"}], "فروض + التصحيح": {} }
          },
          "العلوم الإنسانية": {
              "اللغة العربية": { "دروس": HS_ARABIC_LESSONS, "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "اللغة الفرنسية": { "دروس": HS_FRENCH_COMMON_LESSONS, "امتحانات وطنية + التصحيح": [{title: "National 2023", url: "#"}] },
              "اللغة الإنجليزية": { "دروس": [{title: "Culture", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الإجتماعيات": { "دروس": HS_SOCIAL_LESSONS, "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "الفلسفة": { "دروس": [{title: "الشخص", url: "#"}], "امتحانات وطنية + التصحيح": [{title: "وطني 2023", url: "#"}] },
              "التربية الإسلامية": { "دروس": HS_ISLAMIC_LESSONS, "فروض + التصحيح": {} },
              "الرياضيات": { "دروس": [{title: "الدوال", url: "#"}], "فروض + التصحيح": {} }
          }
      }
    },
    "2": {
      // Cycle 2 mirrors Cycle 1 structure (simplified for this example as content usually differs by lessons, but structure holds)
      "Jada_Muchtarak": {
         "العلوم": { "الرياضيات": { "دروس": [{title: "الحساب المثلثي", url: "#"}], "تمارين": [], "فروض + التصحيح": {} }, "الفيزياء والكيمياء": { "دروس": [{title: "التيار المستمر", url: "#"}], "تمارين": [], "فروض + التصحيح": {} } /* ... fill as needed ... */ },
         "التكنولوجيا": { "الرياضيات": { "دروس": [{title: "الإحصاء", url: "#"}], "تمارين": [], "فروض + التصحيح": {} } /* ... */ },
         "الآداب والعلوم الإنسانية": { "اللغة العربية": { "دروس": [{title: "البلاغة", url: "#"}], "تمارين": [], "فروض + التصحيح": {} } /* ... */ }
      },
      "1_Bac": {
         "العلوم التجريبية": { "الرياضيات": { "دروس": [{title: "الاشتقاق", url: "#"}], "تمارين": [], "فروض + التصحيح": {} } /* ... */ },
         "العلوم الرياضية": { "الرياضيات": { "دروس": [{title: "الحسابيات", url: "#"}], "تمارين": [], "فروض + التصحيح": {} } /* ... */ },
         "الآداب والعلوم الإنسانية": { "اللغة العربية": { "دروس": [{title: "الشعر الحديث", url: "#"}], "تمارين": [], "فروض + التصحيح": {} } /* ... */ }
         // ... placeholders for other branches in cycle 2
      },
      "2_Bac": {
         "العلوم الفيزيائية": { "الرياضيات": { "دروس": [{title: "التكامل", url: "#"}], "تمارين": [], "فروض + التصحيح": {} } /* ... */ }
         // ... placeholders for other branches in cycle 2
      }
    }
  }
};
