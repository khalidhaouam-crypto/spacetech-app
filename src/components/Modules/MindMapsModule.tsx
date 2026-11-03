
import React, { useState } from 'react';
import { Language } from '../../types';
import { TRANSLATIONS, DATA_TRANSLATIONS } from '../../translations';

// أنواع البيانات
type ViewState = 'SUBJECTS' | 'LESSONS' | 'MAP';

interface MindMapNode {
  name: string;
  sub: string[];
}

interface MindMapData {
  title: string;
  root: string;
  branches: MindMapNode[];
}

// بيانات المواد (تم حذف الرياضيات والفيزياء)
const THIRD_YEAR_SUBJECTS = [
  { id: 'svt', name: 'علوم الحياة والأرض', icon: 'fas fa-dna', color: '#1abc9c' },
  { id: 'islamic', name: 'التربية الإسلامية', icon: 'fas fa-mosque', color: '#2ecc71' },
  { id: 'arabic', name: 'اللغة العربية', icon: 'fas fa-pen-nib', color: '#3498db' },
  { id: 'history', name: 'الاجتماعيات', icon: 'fas fa-globe-africa', color: '#e67e22' },
  { id: 'french', name: 'اللغة الفرنسية', icon: 'fas fa-book', color: '#9b59b6' },
  { id: 'svt_fr', name: 'Sciences de la vie et de la Terre (SVT Fr)', icon: 'fas fa-microscope', color: '#16a085' },
];

// بيانات الدروس
const LESSONS_DATA: { [subjectId: string]: string[] } = {
  'svt': [
    'التربية الغذائية',
    'الهضم والامتصاص',
    'التنفس عند الإنسان',
    'الدم والدوران الدموي',
    'الإبراز البولي',
    'الجهاز العصبي',
    'الجهاز العضلي'
  ],
  'islamic': [
    'سورة الحشر',
    'أسماء الله الحسنى',
    'أهمية التدين في حياة الفرد',
    'الهجرة النبوية',
    'المسجد نواة المجتمع',
    'الزكاة: أحكامها ومقاصدها',
    'العبادة غاية الخلق',
    'حق الله: تقوى الله',
    'حق النفس: التخطيط والتنظيم',
    'الهجرة المتجددة',
    'الإيثار والتضحية',
    'سورة الحديد',
    'الإسلام عقيدة وشريعة',
    'الرسول (ص) نموذج الكمال',
    'إمارة المؤمنين',
    'التعارف والتعايش',
    'القرآن الكريم منهاج حياة'
  ],
  'arabic': [
      'اسم الفاعل وصيغ المبالغة', 
      'اسم المفعول', 
      'أسماء الزمان والمكان', 
      'اسم الآلة', 
      'النسبة', 
      'المعاجم',
      'الإعلال والإبدال',
      'التصغير',
      'أسلوب التعجب',
      'أسلوب المدح والذم',
      'أسلوب النداء',
      'أسلوب الاختصاص',
      'أسلوب الاستفهام'
  ],
  'history': [
    'تاريخ: ازدهار الرأسمالية الأوربية',
    'تاريخ: الإمبريالية وليدة الرأسمالية',
    'تاريخ: الضغط الاستعماري على المغرب',
    'تاريخ: الحرب العالمية الأولى',
    'تاريخ: انهيار الإمبراطورية العثمانية',
    'تاريخ: أزمة 1929',
    'تاريخ: الحرب العالمية الثانية',
    'تاريخ: القضية الفلسطينية',
    'جغرافيا: المغرب العربي (عناصر الوحدة)',
    'جغرافيا: المغرب العربي (التكامل)',
    'جغرافيا: اتحاد المغرب العربي',
    'جغرافيا: الاتحاد الأوربي (إمكانيات)',
    'جغرافيا: الاتحاد الأوربي (مكانة)',
    'جغرافيا: الولايات المتحدة الأمريكية',
    'جغرافيا: اليابان قوة تكنولوجية',
    'جغرافيا: روسيا ورهانات التحول',
    'جغرافيا: مصر نموذج تنموي',
    'مواطنة: المشاركة حق وواجب',
    'مواطنة: معالجة مشكل اجتماعي',
    'مواطنة: مسؤولية الدولة والمجتمع',
    'مواطنة: تخليق الحياة العامة',
    'مواطنة: الحفاظ على التراث',
    'مواطنة: نحن والعالم',
    'مواطنة: الحفاظ على الموارد الطبيعية'
  ],
  'french': [
      'La nouvelle réaliste', 
      'Le schéma narratif', 
      'Les personnages',
      'Le temps du récit',
      'La description',
      'Le dialogue dans le récit',
      'La lettre administrative',
      'La lettre personnelle',
      'L\'invitation',
      'L\'autorisation',
      'La coordination',
      'La cause et la conséquence',
      'Le but et la concession',
      'L\'hypothèse'
  ],
  'svt_fr': [
    'L\'éducation nutritionnelle',
    'La digestion et l\'absorption',
    'La respiration chez l\'Homme',
    'Le sang et la circulation sanguine',
    'L\'excrétion urinaire',
    'Le système nerveux',
    'Le système musculaire'
  ]
};

// دالة توليد الخطاطة الذهنية
const getMindMap = (subjectId: string, lessonTitle: string): MindMapData => {
  
  // ================= SVT (Arabic) =================
  if (subjectId === 'svt') {
    if (lessonTitle.includes('الغذائية')) return {
      title: lessonTitle, root: 'التربية الغذائية', branches: [
        { name: 'الأغذية', sub: ['بسيطة (سكريات، دهنيات..)', 'مركبة (خبز، حليب..)', 'الوظيفة: طاقية، بانية، واقية'] },
        { name: 'الكواشف', sub: ['ماء اليودي (النشا)', 'نترات الفضة (الكلورور)', 'فهلينغ (السكريات)', 'حمض النيتريك (البروتيدات)'] },
        { name: 'الفاقت الغذائية', sub: ['الكساح (نقص الكالسيوم/فيتامين D)', 'التدرق (نقص اليود)', 'فقر الدم (نقص الحديد)', 'الاسقربوط (نقص فيتامين C)'] },
        { name: 'الكلتة الغذائية', sub: ['تغطية حاجيات الجسم', 'عوامل التغير: السن، الجنس، النشاط', 'شروطها: التنوع والتوازن'] }
      ]};
    if (lessonTitle.includes('الهضم')) return {
      title: lessonTitle, root: 'الهضم والامتصاص', branches: [
        { name: 'الجهاز الهضمي', sub: ['الأنبوب الهضمي (فم، مريء، معدة، أمعاء)', 'الغدد الملحقة (لعابية، كبد، بنكرياس)'] },
        { name: 'الهضم', sub: ['آلي: الأسنان، التقلصات', 'كيميائي: الإنزيمات (نشواز، بيبسين...)'] },
        { name: 'نواتج الهضم', sub: ['مواد القيت (أحماض أمينية، غليكوز، أحماض دهنية)', 'الماء والأملاح والفيتامينات', 'الألياف (لا تهضم)'] },
        { name: 'الامتصاص', sub: ['المعي الدقيق', 'الخملات المعوية (مساحة كبيرة)', 'الطريق الدموي واللمفاوي'] }
      ]};
    if (lessonTitle.includes('التنفس')) return {
      title: lessonTitle, root: 'التنفس', branches: [
        { name: 'التبادلات الغازية', sub: ['في الرئة (الأسناخ الرئوية)', 'في الأعضاء (الأنسجة)'] },
        { name: 'آلية التبادل', sub: ['انتشار الغازات', 'اختلاف الضغط الجزئي'] },
        { name: 'التنفس الخلوي', sub: ['أكسدة مواد القيت (الغليكوز)', 'إنتاج الطاقة (ATP)', 'طرح CO2 والفضلات'] },
        { name: 'صحة الجهاز', sub: ['أخطار التدخين', 'تلوث الهواء', 'أمراض الجهاز التنفسي'] }
      ]};
    if (lessonTitle.includes('الدم')) return {
      title: lessonTitle, root: 'الدم والدوران', branches: [
        { name: 'مكونات الدم', sub: ['البلازما (نقل)', 'الكريات الحمراء (هيموغلوبين)', 'الكريات البيضاء (مناعة)', 'الصفائح (تخثر)'] },
        { name: 'القلب', sub: ['عضلة مجوفة', '4 تجاويف (أذينتان، بطينان)', 'انقباض وانبساط'] },
        { name: 'الأوعية', sub: ['شرايين (سميكة، ضغط عال)', 'أوردة (رقيقة، صمامات)', 'شعيرات (دقيقة، تبادل)'] },
        { name: 'الدورة الدموية', sub: ['الدورة الرئوية (تنقية الدم)', 'الدورة العامة (تزويد الأعضاء)'] }
      ]};
    if (lessonTitle.includes('البولي')) return {
      title: lessonTitle, root: 'الإبراز البولي', branches: [
        { name: 'الجهاز البولي', sub: ['الكليتين (تصفية)', 'الحالبين (نقل)', 'المثانة (تخزين)', 'الإحليل (طرح)'] },
        { name: 'مكونات البول', sub: ['ماء وأملاح زائدة', 'فضلات سامة (بولة، حمض بولي)', 'غياب الزلال والغليكوز (عند السليم)'] },
        { name: 'تشكل البول', sub: ['في النفرون', 'الترشيح الكبيبي', 'إعادة الامتصاص', 'الإفراز الأنبوبي'] },
        { name: 'دور الكلية', sub: ['تخليص الدم من السموم', 'ثبات الوسط الداخلي (التوازن المائي المعدني)'] }
      ]};
    if (lessonTitle.includes('العصبي')) return {
      title: lessonTitle, root: 'الجهاز العصبي', branches: [
        { name: 'المكونات', sub: ['الدماغ والنخاع الشوكي (مركزية)', 'الأعصاب (محيطية)', 'الخلية العصبية (العصبون)'] },
        { name: 'الحساسية الشعورية', sub: ['مهيج، مستقبل حسي', 'موصل حسي (عصب)', 'مركز عصبي (باحات)'] },
        { name: 'التحركية الإرادية', sub: ['باحة الحركة', 'نقل السيالة النابذة', 'العضلة (مستجيب)'] },
        { name: 'التحركية اللاإرادية', sub: ['انعكاس شوكي', 'النخاع الشوكي (مركز)', 'قوس الانعكاس'] }
      ]};
    if (lessonTitle.includes('العضلي')) return {
      title: lessonTitle, root: 'الجهاز العضلي', branches: [
        { name: 'أنواع العضلات', sub: ['هيكلية (إرادية)', 'ملساء (لا إرادية)', 'قلبية'] },
        { name: 'خصائص العضلة', sub: ['الاهتياجية', 'القلوصية', 'المرونة (محدودة)'] },
        { name: 'بنية العضلة', sub: ['حزم ألياف', 'ليف عضلي (خلية)', 'خويطات (أكتين وميوزين)'] },
        { name: 'الوقاية', sub: ['تجنب التعب', 'تغذية متوازنة', 'الإحماء الرياضي'] }
      ]};
  }

  // ================= التربية الإسلامية =================
  if (subjectId === 'islamic') {
    if (lessonTitle.includes('الحشر')) return {
      title: lessonTitle, root: 'سورة الحشر', branches: [
        { name: 'التعريف', sub: ['مدنية', '24 آية', 'نزلت في بني النضير'] },
        { name: 'أسباب النزول', sub: ['غدر يهود بني النضير', 'محاولة قتل الرسول (ص)'] },
        { name: 'المضامين', sub: ['عظمة الله', 'جلاء اليهود', 'تشريع الفيء', 'أخلاق المؤمنين'] },
        { name: 'القيم', sub: ['التقوى', 'الإيثار', 'الاعتبار', 'تعظيم الله'] }
      ]};
    if (lessonTitle.includes('أسماء الله')) return {
      title: lessonTitle, root: 'أسماء الله الحسنى', branches: [
        { name: 'المفهوم', sub: ['أسماء سمى بها الله نفسه', 'دالة على كماله وجلاله'] },
        { name: 'الغاية', sub: ['معرفة الله', 'دعوته بها', 'التعبد بمقتضاها'] },
        { name: 'أمثلة', sub: ['الرحيم (الرحمة)', 'العليم (المراقبة)', 'الكريم (الجود)'] },
        { name: 'الأثر', sub: ['السكينة', 'الخشوع', 'استقامة السلوك'] }
      ]};
    if (lessonTitle.includes('الهجرة')) return {
      title: lessonTitle, root: 'الهجرة النبوية', branches: [
        { name: 'الدوافع', sub: ['إيذاء قريش', 'البحث عن بيئة آمنة', 'نشر الدعوة'] },
        { name: 'التخطيط', sub: ['السرية', 'الصاحب (أبو بكر)', 'المبيت (علي)', 'الدليل'] },
        { name: 'النتائج', sub: ['تأسيس الدولة', 'بناء المسجد', 'المؤاخاة', 'الوثيقة'] },
        { name: 'العبر', sub: ['الثقة بالله', 'الأخذ بالأسباب', 'التضحية'] }
      ]};
    if (lessonTitle.includes('الزكاة')) return {
      title: lessonTitle, root: 'الزكاة', branches: [
        { name: 'التعريف', sub: ['لغة: النماء', 'شرعاً: حق معلوم في مال مخصوص'] },
        { name: 'الحكم', sub: ['ركن ثالث', 'فرض عين', 'يكفر جاحدها'] },
        { name: 'الشروط', sub: ['الإسلام', 'ملك النصاب', 'مرور الحول', 'خلوه من الدين'] },
        { name: 'المقاصد', sub: ['تطهير النفس', 'التكافل', 'الحد من الفقر', 'نماء المال'] }
      ]};
    if (lessonTitle.includes('الحديد')) return {
      title: lessonTitle, root: 'سورة الحديد', branches: [
        { name: 'التعريف', sub: ['مدنية', 'تعنى بالتشريع والعقيدة'] },
        { name: 'المواضيع', sub: ['التسبيح', 'الإنفاق', 'حقيقة الدنيا', 'القدر'] },
        { name: 'الإيمان', sub: ['الإيمان بالله ورسوله', 'الإنفاق دليل صدق الإيمان'] },
        { name: 'القلوب', sub: ['الخشوع لذكر الله', 'قسوة القلوب وطول الأمد'] }
      ]};
    if (lessonTitle.includes('إمارة المؤمنين')) return {
      title: lessonTitle, root: 'إمارة المؤمنين', branches: [
        { name: 'المفهوم', sub: ['قيادة عظمى', 'حراسة الدين', 'سياسة الدنيا'] },
        { name: 'الأسس', sub: ['البيعة الشرعية', 'أهل الحل والعقد', 'السمع والطاعة'] },
        { name: 'الوظائف', sub: ['حماية الملة', 'إقامة العدل', 'حفظ الأمن', 'الوحدة'] },
        { name: 'في المغرب', sub: ['خصوصية تاريخية', 'ضمان الاستقرار الروحي والسياسي'] }
      ]};
    return {
      title: lessonTitle, root: lessonTitle.split(':')[0], 
      branches: [
        { name: 'المفهوم', sub: ['التعريف اللغوي', 'التعريف الشرعي'] },
        { name: 'الأركان/العناصر', sub: ['عنصر 1', 'عنصر 2', 'عنصر 3'] },
        { name: 'الأدلة', sub: ['من القرآن', 'من السنة'] },
        { name: 'الآثار/القيم', sub: ['على الفرد', 'على المجتمع'] }
      ]
    };
  }

  // ================= اللغة العربية =================
  if (subjectId === 'arabic') {
    if (lessonTitle.includes('اسم الفاعل')) return {
      title: lessonTitle, root: 'اسم الفاعل', branches: [
        { name: 'التعريف', sub: ['اسم مشتق يدل على من قام بالفعل'] },
        { name: 'الصياغة', sub: ['من الثلاثي: فاعِل', 'من غير الثلاثي: ميم مضمومة وكسر ما قبل الآخر'] },
        { name: 'صيغ المبالغة', sub: ['للكثرة والمبالغة', 'أوزان: فَعّال، مِفْعال، فَعُول، فَعِيل، فَعِل'] },
        { name: 'العمل', sub: ['يعمل عمل فعله المبني للمعلوم', 'بشروط إذا كان نكرة (مسبوق بنفي/استفهام...)'] }
      ]};
    if (lessonTitle.includes('اسم المفعول')) return {
      title: lessonTitle, root: 'اسم المفعول', branches: [
        { name: 'التعريف', sub: ['اسم مشتق يدل على من وقع عليه الفعل'] },
        { name: 'الصياغة', sub: ['من الثلاثي: مَفْعُول', 'من غير الثلاثي: ميم مضمومة وفتح ما قبل الآخر'] },
        { name: 'العمل', sub: ['يعمل عمل فعله المبني للمجهول', 'يرفع نائب الفاعل'] }
      ]};
    if (lessonTitle.includes('الزمان والمكان')) return {
      title: lessonTitle, root: 'اسما الزمان والمكان', branches: [
        { name: 'التعريف', sub: ['يدلان على زمان أو مكان وقوع الفعل'] },
        { name: 'من الثلاثي', sub: ['مَفْعَل (مضارعه مفتوح/مضموم العين)', 'مَفْعِل (مضارعه مكسور العين/مثال)'] },
        { name: 'من غير الثلاثي', sub: ['على وزن اسم المفعول', 'ميم مضمومة وفتح ما قبل الآخر'] }
      ]};
    if (lessonTitle.includes('الآلة')) return {
      title: lessonTitle, root: 'اسم الآلة', branches: [
        { name: 'التعريف', sub: ['اسم يدل على الأداة التي ينجز بها الفعل'] },
        { name: 'مشتق قياسي', sub: ['مِفْعَال (مفتاح)', 'مِفْعَل (مبرد)', 'مِفْعَلَة (مكنسة)', 'فَعَّالَة (ثلاجة)'] },
        { name: 'جامد سماعي', sub: ['لا وزن له', 'مثل: سكين، سيف، فاس، قلم'] }
      ]};
    if (lessonTitle.includes('النسبة')) return {
      title: lessonTitle, root: 'النسبة', branches: [
        { name: 'الطريقة', sub: ['إضافة ياء مشددة وكسر ما قبلها', 'مغرب -> مغربي'] },
        { name: 'المختوم بالتاء', sub: ['تحذف التاء', 'فاطمة -> فاطمي'] },
        { name: 'المقصور', sub: ['تقلب الألف واواً (غالباً)', 'عصا -> عصوي'] },
        { name: 'المنقوص', sub: ['تقلب الياء واواً (غالباً)', 'قاضي -> قاضوي'] }
      ]};
    if (lessonTitle.includes('التعجب')) return {
      title: lessonTitle, root: 'أسلوب التعجب', branches: [
        { name: 'الصيغ القياسية', sub: ['ما أَفْعَلَ (ما أجملَ السماءَ)', 'أَفْعِلْ بِـ (أجملْ بالسماءِ)'] },
        { name: 'شروط الصياغة', sub: ['ثلاثي، تام، متصرف', 'مثبت، مبني للمعلوم', 'قابل للتفاضل'] },
        { name: 'الصياغة غير المباشرة', sub: ['المصدر المؤول/الصريح + مساعد', 'ما أشدَّ زرقةَ السماء'] }
      ]};
    return {
      title: lessonTitle, root: lessonTitle, branches: [
        { name: 'التعريف', sub: ['المعنى اللغوي', 'الوظيفة النحوية'] },
        { name: 'القواعد', sub: ['طرق الصياغة', 'الأوزان والشروط'] },
        { name: 'الإعراب', sub: ['حالات الرفع/النصب/الجر', 'أمثلة تطبيقية'] }
      ]
    };
  }

  // ================= الاجتماعيات =================
  if (subjectId === 'history') {
    if (lessonTitle.includes('الرأسمالية')) return {
      title: lessonTitle, root: 'ازدهار الرأسمالية', branches: [
        { name: 'المظاهر التقنية', sub: ['الثورة الصناعية', 'تطور المواصلات', 'شركات مجهولة الاسم'] },
        { name: 'النتائج الاقتصادية', sub: ['التركيز الرأسمالي', 'تزايد الإنتاج', 'الحاجة للأسواق'] },
        { name: 'النتائج الاجتماعية', sub: ['ظهور الطبقة العاملة (البروليتاريا)', 'ظهور البرجوازية', 'توسع المدن'] }
      ]};
    if (lessonTitle.includes('الإمبريالية')) return {
      title: lessonTitle, root: 'الإمبريالية', branches: [
        { name: 'الدوافع', sub: ['تصريف فائض الإنتاج', 'البحث عن مواد أولية', 'تصدير رؤوس الأموال'] },
        { name: 'المبررات', sub: ['نشر الحضارة', 'حماية الأمن', 'التفوق العرقي'] },
        { name: 'الوسائل', sub: ['بعثات تبشيرية', 'رحلات استكشافية', 'قوة عسكرية'] }
      ]};
    if (lessonTitle.includes('الحرب العالمية الأولى')) return {
      title: lessonTitle, root: 'الحرب العالمية 1', branches: [
        { name: 'الأسباب', sub: ['التنافس الإمبريالي', 'التحالفات', 'اغتيال ولي عهد النمسا'] },
        { name: 'المراحل', sub: ['حرب الحركة', 'حرب الخنادق', 'دخول أمريكا'] },
        { name: 'النتائج', sub: ['خسائر بشرية هائلة', 'تغير خريطة أوروبا', 'عصبة الأمم', 'انهيار الاقتصاد'] }
      ]};
    if (lessonTitle.includes('المغرب العربي')) return {
      title: lessonTitle, root: 'المغرب العربي', branches: [
        { name: 'عناصر الوحدة', sub: ['الدين واللغة', 'التاريخ المشترك', 'المجال الجغرافي'] },
        { name: 'عناصر التنوع', sub: ['الموارد الطبيعية (نفط/فلاحة)', 'المؤهلات البشرية'] },
        { name: 'أهمية التكتل', sub: ['مواجهة التحديات (العولمة)', 'تكامل اقتصادي', 'وزن سياسي'] }
      ]};
    if (lessonTitle.includes('الاتحاد الأوربي')) return {
      title: lessonTitle, root: 'الاتحاد الأوربي', branches: [
        { name: 'المراحل', sub: ['مجموعة الفحم والفولاذ', 'السوق المشتركة', 'ماستريخت (الاتحاد)'] },
        { name: 'مظاهر القوة', sub: ['فلاحية (مراتب أولى)', 'صناعية (إيرباص، سيارات)', 'تجارية (عملة اليورو)'] },
        { name: 'المعيقات', sub: ['الشيخوخة', 'تباين النمو', 'المنافسة الخارجية'] }
      ]};
    if (lessonTitle.includes('مواطنة')) return {
      title: lessonTitle, root: 'التربية على المواطنة', branches: [
        { name: 'المفهوم', sub: ['حقوق وواجبات', 'سلوك مدني', 'مسؤولية'] },
        { name: 'الآليات', sub: ['القانون', 'المؤسسات', 'المجتمع المدني'] },
        { name: 'خطوات المعالجة', sub: ['التشخيص', 'الحلول', 'التخطيط', 'التنفيذ'] }
      ]};
    return {
      title: lessonTitle, root: lessonTitle.replace(/.*: /, ''), 
      branches: [
        { name: 'السياق/التعريف', sub: ['الزمان والمكان', 'المفاهيم الأساسية'] },
        { name: 'المظاهر/الخصائص', sub: ['التجليات', 'العناصر المكونة'] },
        { name: 'العوامل/الأسباب', sub: ['مفسرة', 'مباشرة وغير مباشرة'] },
        { name: 'النتائج/المشاكل', sub: ['انعكاسات', 'تحديات وحلول'] }
      ]
    };
  }

  // ================= French =================
  if (subjectId === 'french') {
     if (lessonTitle.includes('nouvelle')) return {
        title: lessonTitle, root: 'La Nouvelle', branches: [
            { name: 'Définition', sub: ['Récit court', 'Faits réels/vraisemblables', 'Peu de personnages'] },
            { name: 'Structure', sub: ['Situation stable', 'Perturbation', 'Actions', 'Résolution', 'Situation finale'] },
            { name: 'Chute', sub: ['Fin inattendue', 'Effet de surprise', 'Morale implicite'] }
        ]
     };
     if (lessonTitle.includes('lettre')) return {
        title: lessonTitle, root: 'La Correspondance', branches: [
            { name: 'Administrative', sub: ['Conventionnelle', 'Formules de politesse', 'Expéditeur/Destinataire', 'Objet'] },
            { name: 'Personnelle', sub: ['Amicale/Familiale', 'Langage courant/familier', 'Subjectivité'] },
            { name: 'Types', sub: ['Demande d\'autorisation', 'Invitation', 'Remerciement', 'Réclamation'] }
        ]
     };
     if (lessonTitle.includes('cause') || lessonTitle.includes('conséquence') || lessonTitle.includes('but')) return {
        title: lessonTitle, root: 'Raisonnement', branches: [
            { name: 'La Cause', sub: ['Parce que, car', 'Comme, Puisque', 'À cause de / Grâce à'] },
            { name: 'La Conséquence', sub: ['Donc, alors', 'Si bien que', 'C\'est pourquoi'] },
            { name: 'Le But', sub: ['Pour, afin de (+inf)', 'Pour que (+subj)', 'De peur que'] }
        ]
     };
     if (lessonTitle.includes('hypothèse')) return {
        title: lessonTitle, root: 'L\'Hypothèse', branches: [
            { name: 'Si + Présent', sub: ['-> Futur simple', '(Réel / Possible)'] },
            { name: 'Si + Imparfait', sub: ['-> Conditionnel Présent', '(Irréel du présent)'] },
            { name: 'Si + Plus-que-parfait', sub: ['-> Conditionnel Passé', '(Irréel du passé)'] }
        ]
     };
     return {
        title: lessonTitle, root: lessonTitle, branches: [
            { name: 'Définitions', sub: ['Notions clés', 'Vocabulaire'] },
            { name: 'Règles', sub: ['Formation', 'Structure gramaticale'] },
            { name: 'Emploi', sub: ['Quand l\'utiliser?', 'Contexte'] },
            { name: 'Exemples', sub: ['Phrases types', 'Illustrations'] }
        ]
     };
  }

  // ================= SVT (French) =================
  if (subjectId === 'svt_fr') {
    if (lessonTitle.includes('nutritionnelle')) return {
      title: lessonTitle, root: 'Éducation Nutritionnelle', branches: [
        { name: 'Aliments', sub: ['Simples (Glucides...)', 'Composés', 'Rôles: Énergétique, Bâtisseur, Protecteur'] },
        { name: 'Tests', sub: ['Eau iodée (Amidon)', 'Nitrate d\'argent (Chlorures)', 'Liqueur de Fehling (Sucres)'] },
        { name: 'Carences', sub: ['Kwashiorkor (Protides)', 'Rachitisme (Vit D)', 'Anémie (Fer)'] },
        { name: 'Ration', sub: ['Équilibrée', 'Suffisante', 'Variée'] }
      ]};
    if (lessonTitle.includes('digestion')) return {
      title: lessonTitle, root: 'Digestion', branches: [
        { name: 'Appareil', sub: ['Tube digestif', 'Glandes annexes'] },
        { name: 'Action Mécanique', sub: ['Mastication', 'Brassage'] },
        { name: 'Action Chimique', sub: ['Enzymes', 'Sucs digestifs', 'Simplification'] },
        { name: 'Absorption', sub: ['Villosités intestinales', 'Passage vers le sang/lymphe'] }
      ]};
    if (lessonTitle.includes('respiration')) return {
      title: lessonTitle, root: 'Respiration', branches: [
        { name: 'Échanges gazeux', sub: ['Alvéoles pulmonaires', 'Tissus organiques'] },
        { name: 'Transport', sub: ['Hémoglobine (O2)', 'Plasma (CO2/Nutriments)'] },
        { name: 'Respiration cellulaire', sub: ['Oxydation du glucose', 'Production d\'énergie', 'Rejet de CO2'] }
      ]};
    if (lessonTitle.includes('sang')) return {
      title: lessonTitle, root: 'Circulation Sanguine', branches: [
        { name: 'Sang', sub: ['Plasma', 'Globules rouges', 'Globules blancs', 'Plaquettes'] },
        { name: 'Cœur', sub: ['Pompe cardiaque', 'Oreillettes/Ventricules', 'Révolution cardiaque'] },
        { name: 'Vaisseaux', sub: ['Artères (Départ)', 'Veines (Retour)', 'Capillaires (Échanges)'] }
      ]};
    if (lessonTitle.includes('nerveux')) return {
      title: lessonTitle, root: 'Système Nerveux', branches: [
        { name: 'Organes', sub: ['Encéphale', 'Moelle épinière', 'Nerfs'] },
        { name: 'Sensibilité', sub: ['Organe sensoriel', 'Nerf sensitif', 'Aire sensorielle'] },
        { name: 'Motricité', sub: ['Aire motrice', 'Nerf moteur', 'Muscle'] },
        { name: 'Neurone', sub: ['Corps cellulaire', 'Axone', 'Synapse'] }
      ]};
    return {
        title: lessonTitle, root: lessonTitle, branches: [
            { name: 'Définitions', sub: ['Mots clés', 'Termes scientifiques'] },
            { name: 'Structures', sub: ['Anatomie', 'Organes'] },
            { name: 'Fonctions', sub: ['Physiologie', 'Rôles'] },
            { name: 'Hygiène', sub: ['Prévention', 'Maladies'] }
        ]
     };
  }

  // Default Generic Map
  return {
    title: lessonTitle,
    root: lessonTitle,
    branches: [
      { name: 'المحور الأول', sub: ['مفهوم أساسي', 'نقطة هامة'] },
      { name: 'المحور الثاني', sub: ['تحليل', 'مناقشة'] },
      { name: 'خلاصة', sub: ['استنتاج عام', 'أهمية الموضوع'] }
    ]
  };
};

interface MindMapsModuleProps {
  language?: Language;
}

const MindMapsModule: React.FC<MindMapsModuleProps> = ({ language = 'ar' }) => {
  const [view, setView] = useState<ViewState>('SUBJECTS');
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedLesson, setSelectedLesson] = useState<string>('');

  const t = TRANSLATIONS[language];

  const handleSubjectSelect = (id: string) => {
    setSelectedSubject(id);
    setView('LESSONS');
  };

  const handleLessonSelect = (lesson: string) => {
    setSelectedLesson(lesson);
    setView('MAP');
  };

  const goBack = () => {
    if (view === 'MAP') setView('LESSONS');
    else if (view === 'LESSONS') setView('SUBJECTS');
  };

  const currentMap = view === 'MAP' ? getMindMap(selectedSubject, selectedLesson) : null;
  const currentSubjectName = THIRD_YEAR_SUBJECTS.find(s => s.id === selectedSubject)?.name;
  const translatedSubjectName = currentSubjectName ? (DATA_TRANSLATIONS[currentSubjectName]?.[language] || currentSubjectName) : '';

  return (
    <div className="w-full h-full min-h-screen p-6 animate-slideDown flex flex-col">
      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto mb-8 flex justify-between items-center border-b-2 border-primary pb-4">
        <div className="flex items-center gap-4">
           {view !== 'SUBJECTS' && (
             <button onClick={goBack} className="bg-white dark:bg-[#333] hover:bg-gray-100 dark:hover:bg-[#444] shadow-sm border border-gray-200 dark:border-gray-700 p-3 rounded-full w-12 h-12 flex items-center justify-center transition text-gray-800 dark:text-white">
               <i className={`fas fa-arrow-${language === 'ar' ? 'right' : 'left'} text-lg`}></i>
             </button>
           )}
           <div>
             <div className="text-3xl font-black text-primary flex items-center gap-3">
               <i className="fas fa-project-diagram"></i>
               <span>{t.mindmaps.title}</span>
             </div>
             <div className="text-gray-500 dark:text-gray-400 mt-1 font-medium text-sm">
               {view === 'SUBJECTS' ? t.mindmaps.selectSubject : view === 'LESSONS' ? `${t.mindmaps.lessonsFor} ${translatedSubjectName}` : currentMap?.title}
             </div>
           </div>
        </div>
      </div>
      
      <div className="flex-1 w-full max-w-7xl mx-auto">
        {/* VIEW 1: SUBJECTS GRID */}
        {view === 'SUBJECTS' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {THIRD_YEAR_SUBJECTS.map((subject) => (
              <button 
                key={subject.id}
                onClick={() => handleSubjectSelect(subject.id)}
                className="group bg-white dark:bg-[#2d2d2d] p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col items-center gap-6 h-full"
              >
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3" style={{ backgroundColor: subject.color }}>
                  <i className={subject.icon}></i>
                </div>
                <span className="font-bold text-xl text-gray-800 dark:text-white group-hover:text-primary transition-colors text-center">
                  {DATA_TRANSLATIONS[subject.name]?.[language] || subject.name}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* VIEW 2: LESSONS LIST */}
        {view === 'LESSONS' && (
          <div className="bg-white dark:bg-[#2d2d2d] rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {LESSONS_DATA[selectedSubject]?.map((lesson, idx) => (
                 <button 
                   key={idx}
                   onClick={() => handleLessonSelect(lesson)}
                   className={`p-6 rounded-2xl bg-gray-50 dark:bg-[#3d3d3d] hover:bg-primary hover:text-white text-gray-800 dark:text-white font-bold text-lg transition-all duration-200 border-2 border-transparent hover:border-primary/50 flex items-center justify-between group shadow-sm hover:shadow-md ${language === 'ar' ? 'text-right' : 'text-left'}`}
                 >
                   <span>{lesson}</span>
                   <i className={`fas fa-chevron-${language === 'ar' ? 'left' : 'right'} text-gray-300 group-hover:text-white/80 transition`}></i>
                 </button>
               ))}
             </div>
          </div>
        )}

        {/* VIEW 3: MIND MAP VISUALIZATION (Responsive) */}
        {view === 'MAP' && currentMap && (
          <div className="w-full h-full bg-white dark:bg-[#2d2d2d] rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col min-h-[600px] overflow-hidden">
            {/* Map Toolbar */}
            <div className="bg-gray-50 dark:bg-[#333] p-4 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center z-20 relative">
               <div className="font-bold text-gray-500 dark:text-gray-400 text-sm">
                 <i className="fas fa-expand-arrows-alt mr-2"></i>
                 {t.mindmaps.desktopView}
               </div>
               <button className="text-primary hover:underline text-sm font-bold" onClick={() => window.print()}>
                 <i className="fas fa-print mr-1"></i> {t.mindmaps.print}
               </button>
            </div>

            {/* Scrollable Container */}
            <div className="flex-1 overflow-auto bg-grid-pattern relative">
                <div className="min-w-full min-h-full p-8 flex flex-col items-center justify-start">
                  
                    {/* Root Node */}
                    <div className="bg-gradient-to-br from-primary to-accent text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-black text-xl md:text-2xl shadow-2xl mb-8 md:mb-16 relative z-10 animate-fadeIn transform hover:scale-105 transition-transform cursor-default border-4 border-white dark:border-[#2d2d2d] max-w-[90%] md:max-w-[80%] text-center">
                      {currentMap.root}
                      {/* Connector to branches */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-8 md:h-16 bg-primary/30"></div>
                    </div>

                    {/* Branches Container - Vertical on mobile, Horizontal on desktop */}
                    <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 md:gap-4 animate-fadeIn delay-100 relative md:px-4">
                      
                      {/* Horizontal Connecting Bar (Desktop Only) */}
                      {currentMap.branches.length > 1 && (
                        <div className="hidden md:block absolute top-0 left-[12%] right-[12%] h-1 bg-primary/30 rounded-full"></div>
                      )}

                      {currentMap.branches.map((branch, idx) => (
                        <div key={idx} className="flex flex-col items-center flex-1 w-full md:w-auto relative">
                          
                          {/* Desktop Vertical Line (From horizontal bar) */}
                          <div className="hidden md:block w-1 h-8 bg-primary/30 -mt-0 mb-0"></div>
                          
                          {/* Mobile Connector (From previous element or root) */}
                          <div className="md:hidden w-1 h-8 bg-primary/30 -mt-8 mb-0 absolute -top-8 left-1/2 -translate-x-1/2"></div>

                          {/* Branch Node */}
                          <div className="bg-white dark:bg-[#3d3d3d] border-t-4 border-primary p-4 rounded-xl font-bold text-gray-900 dark:text-white shadow-lg w-full md:w-auto min-w-[200px] text-center hover:shadow-xl transition-all cursor-default relative z-10 mb-4 mt-2 min-h-[60px] flex items-center justify-center">
                            <h4 className="text-lg leading-tight">{branch.name}</h4>
                          </div>

                          {/* Connection to children */}
                          {branch.sub.length > 0 && <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600 mb-2"></div>}

                          {/* Sub Items (Leaves) */}
                          <div className="flex flex-col gap-3 w-full max-w-[250px]">
                            {branch.sub.map((item, subIdx) => (
                              <div key={subIdx} className="bg-gray-50 dark:bg-[#444] p-3 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 border-l-4 border-gray-300 dark:border-gray-500 text-center shadow-sm hover:bg-white dark:hover:bg-[#555] transition-colors relative group">
                                {item}
                                {/* Simple connector line visual */}
                                {subIdx < branch.sub.length - 1 && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-gray-200 dark:bg-gray-600 translate-y-full z-0"></div>}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MindMapsModule;
