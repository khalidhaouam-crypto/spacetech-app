import type { TargetLanguageCourse } from './languageLearningTypes';
import { FRENCH_QUIZ_BY_LEVEL } from './languageQuizFrench';

export const FRENCH_COURSE: TargetLanguageCourse = {
  id: 'fr',
  nameAr: 'اللغة الفرنسية',
  nativeName: 'Français',
  flag: '🇫🇷',
  speechLang: 'fr-FR',
  accentColor: '#2563eb',
  taglineAr: 'بنك المفردات اليومية، الحوارات التواصلية، والاختبارات التفاعلية متدرجة الصعوبة',
  vocabulary: [
    // 1. Greetings
    { id: 'fr-v-1', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'Bonjour', reading: 'bɔ̃ʒuʁ', approxAr: 'بونجور', meaningAr: 'صباح الخير / مرحباً', example: 'Bonjour, comment allez-vous ?', exampleMeaningAr: 'صباح الخير، كيف حالكم؟' },
    { id: 'fr-v-2', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'Bonsoir', reading: 'bɔ̃swaʁ', approxAr: 'بونسوار', meaningAr: 'مساء الخير', example: 'Bonsoir à toute la famille.', exampleMeaningAr: 'مساء الخير لجميع أفراد العائلة.' },
    { id: 'fr-v-3', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'Merci beaucoup', reading: 'mɛʁsi boku', approxAr: 'ميرسي بوكو', meaningAr: 'شكراً جزيلاً', example: 'Merci beaucoup pour votre aide.', exampleMeaningAr: 'شكراً جزيلاً على مساعدتكم.' },
    { id: 'fr-v-4', category: 'greetings', categoryAr: 'التحيات والتعارف', word: "S'il vous plaît", reading: 'sil vu plɛ', approxAr: 'سيل فو بليه', meaningAr: 'من فضلك (باحترام)', example: 'Un verre d’eau, s’il vous plaît.', exampleMeaningAr: 'كأس ماء، من فضلك.' },
    { id: 'fr-v-5', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'Excusez-moi', reading: 'ɛkskyze mwa', approxAr: 'إيكسكوزيه موا', meaningAr: 'اعذرني / لو سمحت', example: 'Excusez-moi, où est la gare ?', exampleMeaningAr: 'اعذرني، أين توجد المحطة؟' },
    { id: 'fr-v-6', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'Enchanté(e)', reading: 'ɑ̃ʃɑ̃te', approxAr: 'أونشانتيه', meaningAr: 'تشرفت بمعرفتك', example: 'Je m’appelle Sami, enchanté !', exampleMeaningAr: 'اسمي سامي، تشرفت بمعرفتك!' },
    { id: 'fr-v-7', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'Au revoir', reading: 'o ʁəvwaʁ', approxAr: 'أو روفوار', meaningAr: 'إلى اللقاء', example: 'Au revoir et à demain !', exampleMeaningAr: 'إلى اللقاء وأراك غداً!' },
    { id: 'fr-v-8', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'De rien', reading: 'də ʁjɛ̃', approxAr: 'دو ريان', meaningAr: 'عفواً / لا شكر على واجب', example: 'Merci ! — De rien, avec plaisir.', exampleMeaningAr: 'شكراً! — عفواً، بكل سرور.' },

    // 2. Numbers & Time
    { id: 'fr-v-9', category: 'time', categoryAr: 'الأرقام والوقت', word: "Aujourd'hui", reading: 'oʒuʁdɥi', approxAr: 'أوجوردوي', meaningAr: 'اليوم', example: "Aujourd'hui, nous étudions le français.", exampleMeaningAr: 'اليوم، نحن ندرس اللغة الفرنسية.' },
    { id: 'fr-v-10', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Demain', reading: 'dəmɛ̃', approxAr: 'دومان', meaningAr: 'غداً', example: "Nous avons un examen demain matin.", exampleMeaningAr: 'لدينا امتحان غداً صباحاً.' },
    { id: 'fr-v-11', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Hier', reading: 'jɛʁ', approxAr: 'إيير', meaningAr: 'أمس / البارحة', example: "Hier, j'ai lu une nouvelle.", exampleMeaningAr: 'البارحة، قرأت قصة قصيرة.' },
    { id: 'fr-v-12', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Maintenant', reading: 'mɛ̃tnɑ̃', approxAr: 'مانتونون', meaningAr: 'الآن', example: 'Je commence mes révisions maintenant.', exampleMeaningAr: 'أبدأ مراجعتي الآن.' },
    { id: 'fr-v-13', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Toujours', reading: 'tuʒuʁ', approxAr: 'توجور', meaningAr: 'دائماً', example: 'Elle arrive toujours à l’heure.', exampleMeaningAr: 'هي تصل دائماً في الوقت المحدد.' },
    { id: 'fr-v-14', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Une semaine', reading: 'yn səmɛn', approxAr: 'أون سومين', meaningAr: 'أسبوع', example: 'Les vacances durent une semaine.', exampleMeaningAr: 'العطلة تدوم أسبوعاً.' },
    { id: 'fr-v-15', category: 'time', categoryAr: 'الأرقام والوقت', word: "L'heure", reading: 'lœʁ', approxAr: 'لور', meaningAr: 'الساعة / الوقت', example: 'Quelle heure est-il maintenant ?', exampleMeaningAr: 'كم الساعة الآن؟' },
    { id: 'fr-v-16', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Le matin', reading: 'lə matɛ̃', approxAr: 'لو ماتان', meaningAr: 'الصباح', example: 'Je me réveille tôt le matin.', exampleMeaningAr: 'أستيقظ باكراً في الصباح.' },

    // 3. Family & People
    { id: 'fr-v-17', category: 'family', categoryAr: 'العائلة والناس', word: 'La famille', reading: 'la famij', approxAr: 'لا فامي', meaningAr: 'العائلة', example: 'Ma famille habite à Marrakech.', exampleMeaningAr: 'عائلتي تسكن في مراكش.' },
    { id: 'fr-v-18', category: 'family', categoryAr: 'العائلة والناس', word: 'Les parents', reading: 'le paʁɑ̃', approxAr: 'ليه بارون', meaningAr: 'الوالدان', example: 'Mes parents m’encouragent toujours.', exampleMeaningAr: 'والداي يشجعانني دائماً.' },
    { id: 'fr-v-19', category: 'family', categoryAr: 'العائلة والناس', word: 'Le frère', reading: 'lə fʁɛʁ', approxAr: 'لو فرير', meaningAr: 'الأخ', example: 'Mon frère prépare son baccalauréat.', exampleMeaningAr: 'أخي يستعد للبكالوريا.' },
    { id: 'fr-v-20', category: 'family', categoryAr: 'العائلة والناس', word: 'La sœur', reading: 'la sœʁ', approxAr: 'لا سور', meaningAr: 'الأخت', example: 'Ma petite sœur adore dessiner.', exampleMeaningAr: 'أختي الصغيرة تحب الرسم.' },
    { id: 'fr-v-21', category: 'family', categoryAr: 'العائلة والناس', word: "L'ami / L'amie", reading: 'lami', approxAr: 'لامي', meaningAr: 'الصديق / الصديقة', example: 'Mon meilleur ami s’appelle Yassine.', exampleMeaningAr: 'أفضل صديق لي اسمه ياسين.' },
    { id: 'fr-v-22', category: 'family', categoryAr: 'العائلة والناس', word: 'Le voisin', reading: 'lə vwazɛ̃', approxAr: 'لو فوازان', meaningAr: 'الجار', example: 'Notre voisin est très serviable.', exampleMeaningAr: 'جارنا خدوم جداً.' },
    { id: 'fr-v-23', category: 'family', categoryAr: 'العائلة والناس', word: 'Le professeur', reading: 'lə pʁɔfesœʁ', approxAr: 'لو بروفيسور', meaningAr: 'الأستاذ / المعلم', example: 'Le professeur explique la leçon.', exampleMeaningAr: 'الأستاذ يشرح الدرس.' },
    { id: 'fr-v-24', category: 'family', categoryAr: 'العائلة والناس', word: "L'élève", reading: 'lelɛv', approxAr: 'ليليف', meaningAr: 'التلميذ', example: 'Cet élève est très sérieux.', exampleMeaningAr: 'هذا التلميذ جاد جداً.' },

    // 4. School & Study
    { id: 'fr-v-25', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'Le collège', reading: 'lə kɔlɛʒ', approxAr: 'لو كوليج', meaningAr: 'الإعدادية', example: 'Je vais au collège à huit heures.', exampleMeaningAr: 'أذهب إلى الإعدادية في الثامنة.' },
    { id: 'fr-v-26', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'Le cahier', reading: 'lə kaje', approxAr: 'لو كاييه', meaningAr: 'الدفتر', example: 'J’écris la date sur mon cahier.', exampleMeaningAr: 'أكتب التاريخ على دفتري.' },
    { id: 'fr-v-27', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'La bibliothèque', reading: 'la biblijɔtɛk', approxAr: 'لا بيبليوتيك', meaningAr: 'المكتبة', example: 'Nous lisons des livres à la bibliothèque.', exampleMeaningAr: 'نقرأ الكتب في المكتبة.' },
    { id: 'fr-v-28', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'La réussite', reading: 'la ʁeysit', approxAr: 'لا ريوسيت', meaningAr: 'النجاح', example: 'Le travail régulier mène à la réussite.', exampleMeaningAr: 'العمل المنتظم يؤدي إلى النجاح.' },
    { id: 'fr-v-29', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'La question', reading: 'la kɛstjɔ̃', approxAr: 'لا كيستيون', meaningAr: 'السؤال', example: 'Puis-je poser une question ?', exampleMeaningAr: 'هل يمكنني طرح سؤال؟' },
    { id: 'fr-v-30', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'La réponse', reading: 'la ʁepɔ̃s', approxAr: 'لا ريبونس', meaningAr: 'الجواب', example: 'Ta réponse est tout à fait correcte.', exampleMeaningAr: 'جوابك صحيح تماماً.' },
    { id: 'fr-v-31', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'Le dictionnaire', reading: 'lə diksjɔnɛʁ', approxAr: 'لو ديكسيونير', meaningAr: 'القاموس', example: 'Cherche ce mot dans le dictionnaire.', exampleMeaningAr: 'ابحث عن هذه الكلمة في القاموس.' },
    { id: 'fr-v-32', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'Le projet', reading: 'lə pʁɔʒɛ', approxAr: 'لو بروجيه', meaningAr: 'المشروع', example: 'Nous préparons un projet scientifique.', exampleMeaningAr: 'نعد مشروعاً علمياً.' },

    // 5. Food & Drinks
    { id: 'fr-v-33', category: 'food', categoryAr: 'الطعام والشراب', word: "L'eau", reading: 'lo', approxAr: 'لو', meaningAr: 'الماء', example: "Il faut boire beaucoup d'eau.", exampleMeaningAr: 'يجب شرب الكثير من الماء.' },
    { id: 'fr-v-34', category: 'food', categoryAr: 'الطعام والشراب', word: 'Le pain', reading: 'lə pɛ̃', approxAr: 'لو بان', meaningAr: 'الخبز', example: 'J’achète du pain frais chaque matin.', exampleMeaningAr: 'أشتري خبزاً طازجاً كل صباح.' },
    { id: 'fr-v-35', category: 'food', categoryAr: 'الطعام والشراب', word: 'Le thé à la menthe', reading: 'lə te a la mɑ̃t', approxAr: 'لو تيه أ لا مونت', meaningAr: 'الشاي بالنعناع', example: 'Le thé à la menthe est délicieux.', exampleMeaningAr: 'الشاي بالنعناع لذيذ.' },
    { id: 'fr-v-36', category: 'food', categoryAr: 'الطعام والشراب', word: 'Le repas', reading: 'lə ʁəpa', approxAr: 'لو روبا', meaningAr: 'الوجبة', example: 'Le dîner est un repas léger.', exampleMeaningAr: 'العشاء وجبة خفيفة.' },
    { id: 'fr-v-37', category: 'food', categoryAr: 'الطعام والشراب', word: 'Les fruits', reading: 'le fʁɥi', approxAr: 'ليه فروي', meaningAr: 'الفواكه', example: 'Les fruits sont riches en vitamines.', exampleMeaningAr: 'الفواكه غنية بالفيتامينات.' },
    { id: 'fr-v-38', category: 'food', categoryAr: 'الطعام والشراب', word: "L'addition", reading: 'ladisjɔ̃', approxAr: 'لاديسيون', meaningAr: 'الحساب / الفاتورة', example: "L'addition, s'il vous plaît.", exampleMeaningAr: 'الحساب، من فضلك.' },

    // 6. Travel & Places
    { id: 'fr-v-39', category: 'travel', categoryAr: 'السفر والأماكن', word: 'La gare', reading: 'la ɡaʁ', approxAr: 'لا غار', meaningAr: 'محطة القطار', example: 'Le train part de la gare centrale.', exampleMeaningAr: 'ينطلق القطار من المحطة المركزية.' },
    { id: 'fr-v-40', category: 'travel', categoryAr: 'السفر والأماكن', word: 'Le billet', reading: 'lə bijɛ', approxAr: 'لو بييه', meaningAr: 'التذكرة', example: 'J’ai réservé un billet aller-retour.', exampleMeaningAr: 'حجزت تذكرة ذهاب وإياب.' },
    { id: 'fr-v-41', category: 'travel', categoryAr: 'السفر والأماكن', word: 'À droite / À gauche', reading: 'a dʁwat / a ɡoʃ', approxAr: 'أ دروات / أ غوش', meaningAr: 'يميناً / يساراً', example: 'Tournez à droite après le feu.', exampleMeaningAr: 'انعطف يميناً بعد إشارة المرور.' },
    { id: 'fr-v-42', category: 'travel', categoryAr: 'السفر والأماكن', word: 'Tout droit', reading: 'tu dʁwa', approxAr: 'تو دروا', meaningAr: 'مباشرة للأمام', example: 'Continuez tout droit pendant cent mètres.', exampleMeaningAr: 'واصل السير مباشرة لمئة متر.' },
    { id: 'fr-v-43', category: 'travel', categoryAr: 'السفر والأماكن', word: 'La ville', reading: 'la vil', approxAr: 'لا فيل', meaningAr: 'المدينة', example: 'Fès est une ville historique magnifique.', exampleMeaningAr: 'فاس مدينة تاريخية رائعة.' },
    { id: 'fr-v-44', category: 'travel', categoryAr: 'السفر والأماكن', word: "L'aéroport", reading: 'laeʁɔpɔʁ', approxAr: 'لايروبور', meaningAr: 'المطار', example: 'Nous arrivons à l’aéroport à midi.', exampleMeaningAr: 'نصل إلى المطار عند الظهيرة.' },

    // 7. Everyday Verbs
    { id: 'fr-v-45', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Comprendre', reading: 'kɔ̃pʁɑ̃dʁ', approxAr: 'كومبروندر', meaningAr: 'فَهِمَ', example: 'Je comprends bien cette règle.', exampleMeaningAr: 'أفهم هذه القاعدة جيداً.' },
    { id: 'fr-v-46', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Apprendre', reading: 'apʁɑ̃dʁ', approxAr: 'أبروندر', meaningAr: 'تعلّمَ', example: 'J’aime apprendre de nouvelles langues.', exampleMeaningAr: 'أحب تعلم لغات جديدة.' },
    { id: 'fr-v-47', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Parler', reading: 'paʁle', approxAr: 'بارليه', meaningAr: 'تكلّمَ', example: 'Elle parle trois langues couramment.', exampleMeaningAr: 'هي تتكلم ثلاث لغات بطلاقة.' },
    { id: 'fr-v-48', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Écrire', reading: 'ekʁiʁ', approxAr: 'إيكرير', meaningAr: 'كَتَبَ', example: 'J’écris un message à mon ami.', exampleMeaningAr: 'أكتب رسالة إلى صديقي.' },
    { id: 'fr-v-49', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Écouter', reading: 'ekute', approxAr: 'إيكوتيه', meaningAr: 'استمعَ', example: 'Écoute attentivement la prononciation.', exampleMeaningAr: 'استمع بانتباه إلى النطق.' },
    { id: 'fr-v-50', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Chercher', reading: 'ʃɛʁʃe', approxAr: 'شيرشيه', meaningAr: 'بَحَثَ عن', example: 'Je cherche une information précise.', exampleMeaningAr: 'أبحث عن معلومة دقيقة.' },
    { id: 'fr-v-51', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Aider', reading: 'ɛde', approxAr: 'إيديه', meaningAr: 'ساعَدَ', example: 'Peux-tu m’aider à traduire cette phrase ?', exampleMeaningAr: 'هل يمكنك مساعدتي في ترجمة هذه الجملة؟' },
    { id: 'fr-v-52', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Choisir', reading: 'ʃwaziʁ', approxAr: 'شوازير', meaningAr: 'اختارَ', example: 'Tu dois choisir la bonne réponse.', exampleMeaningAr: 'عليك اختيار الإجابة الصحيحة.' },

    // 8. Adjectives & Feelings
    { id: 'fr-v-53', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Heureux / Contente', reading: 'øʁø / kɔ̃tɑ̃t', approxAr: 'أورو / كونتونت', meaningAr: 'سعيد / مسرورة', example: 'Je suis très heureux de te voir.', exampleMeaningAr: 'أنا سعيد جداً برؤيتك.' },
    { id: 'fr-v-54', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Facile', reading: 'fasil', approxAr: 'فاسيل', meaningAr: 'سهل', example: 'Cet exercice est vraiment facile.', exampleMeaningAr: 'هذا التمرين سهل حقاً.' },
    { id: 'fr-v-55', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Difficile', reading: 'difisil', approxAr: 'ديفيسيل', meaningAr: 'صعب', example: 'Rien n’est difficile avec la pratique.', exampleMeaningAr: 'لا شيء صعباً مع الممارسة.' },
    { id: 'fr-v-56', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Important', reading: 'ɛ̃pɔʁtɑ̃', approxAr: 'أمبورتون', meaningAr: 'مهم', example: 'Le respect est une valeur importante.', exampleMeaningAr: 'الاحترام قيمة مهمة.' },
    { id: 'fr-v-57', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Rapide', reading: 'ʁapid', approxAr: 'رابيد', meaningAr: 'سريع', example: 'Le train à grande vitesse est rapide.', exampleMeaningAr: 'القطار فائق السرعة سريع.' },
    { id: 'fr-v-58', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Magnifique', reading: 'maɲifik', approxAr: 'مانيفيك', meaningAr: 'رائع', example: 'Le coucher du soleil est magnifique.', exampleMeaningAr: 'غروب الشمس رائع.' }
  ],
  dialogues: [
    {
      id: 'fr-d-1',
      titleAr: 'التعارف وتبادل التحية',
      titleTarget: 'Faire connaissance',
      level: 'مبتدئ',
      contextAr: 'لقاء أول بين تلميذين في ساحة المؤسسة لتبادل التحية والتعرف على الأسماء والاهتمامات.',
      lines: [
        { speaker: 'Salma', text: 'Bonjour ! Tu es nouveau dans ce collège ?', reading: 'Bon-jour ! Tu é nou-vo dan se ko-lèj ?', meaningAr: 'صباح الخير! هل أنت جديد في هذه الإعدادية؟' },
        { speaker: 'Adam', text: 'Oui, bonjour ! Je m’appelle Adam. Et toi ?', reading: 'Wi, bon-jour ! Je ma-pèl A-dam. É twa ?', meaningAr: 'نعم، صباح الخير! اسمي آدم. وأنتِ؟' },
        { speaker: 'Salma', text: 'Moi, c’est Salma. Enchantée, Adam ! Tu aimes les langues ?', reading: 'Mwa, sè Sal-ma. An-shan-té, A-dam ! Tu èm lé lang ?', meaningAr: 'أنا سلمى. تشرفت بمعرفتك يا آدم! هل تحب اللغات؟' },
        { speaker: 'Adam', text: 'Beaucoup ! J’apprends le français, l’anglais et un peu de coréen.', reading: 'Bo-kou ! Ja-pran le fran-sè, lan-glè é un peu de ko-ré-in.', meaningAr: 'كثيراً! أتعلم الفرنسية والإنجليزية وقليلاً من الكورية.' }
      ],
      keyPhrases: [
        { phrase: 'Je m’appelle...', reading: 'Je ma-pèl...', meaningAr: 'اسمي...' },
        { phrase: 'Enchanté de faire ta connaissance', reading: 'An-shan-té...', meaningAr: 'تشرفت بمعرفتك' },
        { phrase: 'Quelle langue parles-tu ?', reading: 'Kèl lang parl-tu ?', meaningAr: 'أي لغة تتكلم؟' }
      ]
    },
    {
      id: 'fr-d-2',
      titleAr: 'في القسم مع الأستاذ',
      titleTarget: 'En classe avec le professeur',
      level: 'مبتدئ',
      contextAr: 'عبارات أساسية لطلب التوضيح أو الإذن داخل الفصل الدراسي بالفرنسية.',
      lines: [
        { speaker: 'Élève', text: 'Excusez-moi, monsieur, je n’ai pas bien compris ce mot.', reading: 'Èks-ku-zé mwa, me-syeu, je né pa byin kon-pri se mo.', meaningAr: 'اعذرني يا أستاذ، لم أفهم هذه الكلمة جيداً.' },
        { speaker: 'Professeur', text: 'Pas de problème. Écoute attentivement la prononciation.', reading: 'Pa de pro-blèm. É-kout a-tan-tiv-man la pro-non-sya-syon.', meaningAr: 'لا مشكلة. استمع بانتباه إلى النطق.' },
        { speaker: 'Élève', text: 'Pourriez-vous répéter plus lentement, s’il vous plaît ?', reading: 'Pou-ryé vou ré-pé-té plu lan-t-man, sil vou plè ?', meaningAr: 'هل يمكنك الإعادة ببطء أكثر، من فضلك؟' },
        { speaker: 'Professeur', text: 'Bien sûr ! Répète après moi à voix haute.', reading: 'Byin sur ! Ré-pèt a-prè mwa a vwa ot.', meaningAr: 'بكل تأكيد! ردد بعدي بصوت مرتفع.' }
      ],
      keyPhrases: [
        { phrase: 'Pouvez-vous répéter, s’il vous plaît ?', reading: 'Pou-vé vou ré-pé-té...', meaningAr: 'هل يمكنك الإعادة من فضلك؟' },
        { phrase: 'Comment dit-on ... en français ?', reading: 'Ko-man di-ton ... an fran-sè ?', meaningAr: 'كيف نقول ... بالفرنسية؟' },
        { phrase: 'Que signifie ce mot ?', reading: 'Ke si-nyi-fi se mo ?', meaningAr: 'ماذا تعني هذه الكلمة؟' }
      ]
    },
    {
      id: 'fr-d-3',
      titleAr: 'في المقهى أو المطعم',
      titleTarget: 'Au café',
      level: 'أساسي',
      contextAr: 'طلب مشروب أو وجبة خفيفة بأدب ثم طلب الحساب.',
      lines: [
        { speaker: 'Serveur', text: 'Bonjour, qu’est-ce que vous désirez commander ?', reading: 'Bon-jour, kès-ke vou dé-zi-ré ko-man-dé ?', meaningAr: 'مرحباً، ماذا ترغبون في طلبه؟' },
        { speaker: 'Client', text: 'Je voudrais un jus d’orange et un croissant, s’il vous plaît.', reading: 'Je vou-drè un ju do-ranj é un krwa-san, sil vou plè.', meaningAr: 'أريد عصير برتقال وكرواسون، من فضلك.' },
        { speaker: 'Serveur', text: 'Très bien, je vous apporte cela tout de suite.', reading: 'Trè byin, je vou za-port se-la tou de swit.', meaningAr: 'حسناً جداً، سأحضر لك ذلك حالاً.' },
        { speaker: 'Client', text: 'Merci ! Est-ce que je peux avoir l’addition, s’il vous plaît ?', reading: 'Mèr-si ! Ès-ke je peu a-vwar la-di-syon ?', meaningAr: 'شكراً! هل يمكنني الحصول على الحساب من فضلك؟' }
      ],
      keyPhrases: [
        { phrase: 'Je voudrais...', reading: 'Je vou-drè...', meaningAr: 'أود / أريد (بأدب)...' },
        { phrase: 'C’est délicieux !', reading: 'Sè dé-li-syeu !', meaningAr: 'إنه لذيذ!' },
        { phrase: "L'addition, s'il vous plaît", reading: 'La-di-syon, sil vou plè', meaningAr: 'الفاتورة من فضلك' }
      ]
    },
    {
      id: 'fr-d-4',
      titleAr: 'السؤال عن الطريق',
      titleTarget: 'Demander son chemin',
      level: 'متوسط',
      contextAr: 'سؤال أحد المارة عن موقع المكتبة البلدية وفهم الاتجاهات.',
      lines: [
        { speaker: 'Karim', text: 'Pardon, madame, pourriez-vous m’indiquer la bibliothèque municipale ?', reading: 'Par-don, ma-dam, pou-ryé vou min-di-ké la bi-bli-o-tèk ?', meaningAr: 'عفواً سيدتي، هل يمكنك إرشادي إلى المكتبة البلدية؟' },
        { speaker: 'Passante', text: 'Oui, allez tout droit jusqu’au rond-point, puis tournez à gauche.', reading: 'Wi, a-lé tou drwa jus-ko ron-pwin, pwi tour-né a goch.', meaningAr: 'نعم، سر مباشرة حتى المدار، ثم انعطف يساراً.' },
        { speaker: 'Karim', text: 'C’est loin d’ici à pied ?', reading: 'Sè lwin di-si a pyé ?', meaningAr: 'هل هي بعيدة عن هنا سيراً على الأقدام؟' },
        { speaker: 'Passante', text: 'Non, c’est à cinq minutes environ, juste en face du parc.', reading: 'Non, sè ta sink mi-nut an-vi-ron, just an fas du park.', meaningAr: 'لا، تبعد حوالي خمس دقائق، مباشرة مقابل الحديقة.' }
      ],
      keyPhrases: [
        { phrase: 'Où se trouve... ?', reading: 'Ou se trouv... ?', meaningAr: 'أين يوجد...؟' },
        { phrase: 'Allez tout droit', reading: 'A-lé tou drwa', meaningAr: 'سر مباشرة للأمام' },
        { phrase: 'Juste en face de', reading: 'Just an fas de', meaningAr: 'مباشرة مقابل' }
      ]
    }
  ],
  quizByLevel: FRENCH_QUIZ_BY_LEVEL
};
