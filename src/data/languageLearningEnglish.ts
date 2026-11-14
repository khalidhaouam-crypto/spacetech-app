import type { TargetLanguageCourse } from './languageLearningTypes';
import { ENGLISH_QUIZ_BY_LEVEL } from './languageQuizEnglish';

export const ENGLISH_COURSE: TargetLanguageCourse = {
  id: 'en',
  nameAr: 'اللغة الإنجليزية',
  nativeName: 'English',
  flag: '🇬🇧',
  speechLang: 'en-US',
  accentColor: '#0284c7',
  taglineAr: 'تعلّم المفردات الأساسية، المحادثات اليومية، والاختبارات التفاعلية في 3 مستويات',
  vocabulary: [
    // 1. Greetings
    { id: 'en-v-1', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'Hello / Good morning', reading: 'həˈloʊ / ɡʊd ˈmɔːrnɪŋ', approxAr: 'هيلو / غود مورنينغ', meaningAr: 'مرحباً / صباح الخير', example: 'Good morning, how are you today?', exampleMeaningAr: 'صباح الخير، كيف حالك اليوم؟' },
    { id: 'en-v-2', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'Nice to meet you', reading: 'naɪs tuː miːt juː', approxAr: 'نايس تو ميت يو', meaningAr: 'سعيد بلقائك', example: "I'm Layla, nice to meet you!", exampleMeaningAr: 'أنا ليلى، سعيدة بلقائك!' },
    { id: 'en-v-3', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'Thank you very much', reading: 'θæŋk juː ˈveri mʌtʃ', approxAr: 'ثانك يو فيري ماتش', meaningAr: 'شكراً جزيلاً لك', example: 'Thank you very much for your help.', exampleMeaningAr: 'شكراً جزيلاً لك على مساعدتك.' },
    { id: 'en-v-4', category: 'greetings', categoryAr: 'التحيات والتعارف', word: "You're welcome", reading: 'jʊr ˈwelkəm', approxAr: 'يور ويلكم', meaningAr: 'على الرحب والسعة', example: "Thanks for the book! — You're welcome.", exampleMeaningAr: 'شكراً على الكتاب! — على الرحب والسعة.' },
    { id: 'en-v-5', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'Excuse me', reading: 'ɪkˈskjuːz miː', approxAr: 'إيكسكيوز مي', meaningAr: 'عفواً / لو سمحت', example: 'Excuse me, can you help me?', exampleMeaningAr: 'لو سمحت، هل يمكنك مساعدتي؟' },
    { id: 'en-v-6', category: 'greetings', categoryAr: 'التحيات والتعارف', word: 'See you soon', reading: 'siː juː suːn', approxAr: 'سي يو سون', meaningAr: 'أراك قريباً', example: 'Have a great day, see you soon!', exampleMeaningAr: 'أتمنى لك يوماً رائعاً، أراك قريباً!' },

    // 2. Time & Numbers
    { id: 'en-v-7', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Today', reading: 'təˈdeɪ', approxAr: 'توداي', meaningAr: 'اليوم', example: 'We have an English lesson today.', exampleMeaningAr: 'لدينا درس لغة إنجليزية اليوم.' },
    { id: 'en-v-8', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Tomorrow', reading: 'təˈmɑːroʊ', approxAr: 'تومورو', meaningAr: 'غداً', example: 'I will visit my grandparents tomorrow.', exampleMeaningAr: 'سأزور جدي وجدتي غداً.' },
    { id: 'en-v-9', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Yesterday', reading: 'ˈjestərdeɪ', approxAr: 'يسترداي', meaningAr: 'البارحة / أمس', example: 'Yesterday, I finished my homework early.', exampleMeaningAr: 'البارحة، أنهيت واجبي المنزلي باكراً.' },
    { id: 'en-v-10', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Always', reading: 'ˈɔːlweɪz', approxAr: 'أولويز', meaningAr: 'دائماً', example: 'She always practices speaking English.', exampleMeaningAr: 'هي تمارس التحدث بالإنجليزية دائماً.' },
    { id: 'en-v-11', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Schedule', reading: 'ˈskedʒuːl', approxAr: 'سكيدجول', meaningAr: 'جدول زمني', example: 'Check your study schedule every morning.', exampleMeaningAr: 'تفقد جدول دراستك كل صباح.' },
    { id: 'en-v-12', category: 'time', categoryAr: 'الأرقام والوقت', word: 'Minute / Hour', reading: 'ˈmɪnɪt / ˈaʊər', approxAr: 'مينيت / أور', meaningAr: 'دقيقة / ساعة', example: 'Wait five minutes, please.', exampleMeaningAr: 'انتظر خمس دقائق من فضلك.' },

    // 3. Family & People
    { id: 'en-v-13', category: 'family', categoryAr: 'العائلة والناس', word: 'Parents', reading: 'ˈperənts', approxAr: 'بيرينتس', meaningAr: 'الوالدان', example: 'My parents support my education.', exampleMeaningAr: 'والداي يدعمان تعليمي.' },
    { id: 'en-v-14', category: 'family', categoryAr: 'العائلة والناس', word: 'Brother / Sister', reading: 'ˈbrʌðər / ˈsɪstər', approxAr: 'براذر / سيستر', meaningAr: 'أخ / أخت', example: 'My brother is studying computer science.', exampleMeaningAr: 'أخي يدرس علوم الحاسوب.' },
    { id: 'en-v-15', category: 'family', categoryAr: 'العائلة والناس', word: 'Friend', reading: 'frend', approxAr: 'فريند', meaningAr: 'صديق', example: 'A good friend listens carefully.', exampleMeaningAr: 'الصديق الجيد يستمع باهتمام.' },
    { id: 'en-v-16', category: 'family', categoryAr: 'العائلة والناس', word: 'Teacher', reading: 'ˈtiːtʃər', approxAr: 'تيتشر', meaningAr: 'أستاذ / معلم', example: 'Our teacher explains clearly.', exampleMeaningAr: 'أستاذنا يشرح بوضوح.' },
    { id: 'en-v-17', category: 'family', categoryAr: 'العائلة والناس', word: 'Student', reading: 'ˈstuːdənt', approxAr: 'ستودنت', meaningAr: 'تلميذ / طالب', example: 'Every student needs curiosity.', exampleMeaningAr: 'كل طالب يحتاج إلى الفضول المعرفي.' },
    { id: 'en-v-18', category: 'family', categoryAr: 'العائلة والناس', word: 'Neighbor', reading: 'ˈneɪbər', approxAr: 'نيبر', meaningAr: 'جار', example: 'Our neighbor greeted us warmly.', exampleMeaningAr: 'حيانا جارنا بحرارة.' },

    // 4. School & Study
    { id: 'en-v-19', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'Classroom', reading: 'ˈklæsruːm', approxAr: 'كلاسروم', meaningAr: 'حجرة الدرس', example: 'The classroom is clean and bright.', exampleMeaningAr: 'حجرة الدرس نظيفة ومضيئة.' },
    { id: 'en-v-20', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'Notebook', reading: 'ˈnoʊtbʊk', approxAr: 'نوتبوك', meaningAr: 'دفتر الملاحظات', example: 'Write new words in your notebook.', exampleMeaningAr: 'اكتب الكلمات الجديدة في دفترك.' },
    { id: 'en-v-21', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'Knowledge', reading: 'ˈnɑːlɪdʒ', approxAr: 'نوليدج', meaningAr: 'المعرفة', example: 'Reading opens the door to knowledge.', exampleMeaningAr: 'القراءة تفتح باب المعرفة.' },
    { id: 'en-v-22', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'Success', reading: 'səkˈses', approxAr: 'ساكسيس', meaningAr: 'النجاح', example: 'Patience and effort bring success.', exampleMeaningAr: 'الصبر والجهد يجلبان النجاح.' },
    { id: 'en-v-23', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'Question / Answer', reading: 'ˈkwestʃən / ˈænsər', approxAr: 'كويسشن / آنسر', meaningAr: 'سؤال / جواب', example: 'Think before giving your answer.', exampleMeaningAr: 'فكر قبل إعطاء جوابك.' },
    { id: 'en-v-24', category: 'school', categoryAr: 'المدرسة والدراسة', word: 'Library', reading: 'ˈlaɪbreri', approxAr: 'لايبراري', meaningAr: 'المكتبة', example: 'I study at the library after school.', exampleMeaningAr: 'أدرس في المكتبة بعد المدرسة.' },

    // 5. Food & Drinks
    { id: 'en-v-25', category: 'food', categoryAr: 'الطعام والشراب', word: 'Breakfast', reading: 'ˈbrekfəst', approxAr: 'بريكفاست', meaningAr: 'وجبة الفطور', example: 'Breakfast gives you energy for school.', exampleMeaningAr: 'وجبة الفطور تمنحك الطاقة للمدرسة.' },
    { id: 'en-v-26', category: 'food', categoryAr: 'الطعام والشراب', word: 'Water', reading: 'ˈwɔːtər', approxAr: 'ووتر', meaningAr: 'ماء', example: 'Could I have a bottle of water?', exampleMeaningAr: 'هل يمكنني الحصول على زجاجة ماء؟' },
    { id: 'en-v-27', category: 'food', categoryAr: 'الطعام والشراب', word: 'Delicious', reading: 'dɪˈlɪʃəs', approxAr: 'ديليشس', meaningAr: 'لذيذ', example: 'Moroccan food is very delicious.', exampleMeaningAr: 'الطعام المغربي لذيذ جداً.' },
    { id: 'en-v-28', category: 'food', categoryAr: 'الطعام والشراب', word: 'Menu', reading: 'ˈmenjuː', approxAr: 'مينيو', meaningAr: 'قائمة الطعام', example: 'May I see the menu, please?', exampleMeaningAr: 'هل يمكنني رؤية قائمة الطعام من فضلك؟' },
    { id: 'en-v-29', category: 'food', categoryAr: 'الطعام والشراب', word: 'Fresh fruit', reading: 'freʃ fruːt', approxAr: 'فريش فروت', meaningAr: 'فواكه طازجة', example: 'Fresh fruit is a healthy snack.', exampleMeaningAr: 'الفواكه الطازجة وجبة خفيفة صحية.' },

    // 6. Travel & Places
    { id: 'en-v-30', category: 'travel', categoryAr: 'السفر والأماكن', word: 'Airport', reading: 'ˈerpɔːrt', approxAr: 'إيربورت', meaningAr: 'المطار', example: 'We arrived at the airport early.', exampleMeaningAr: 'وصلنا إلى المطار باكراً.' },
    { id: 'en-v-31', category: 'travel', categoryAr: 'السفر والأماكن', word: 'Ticket', reading: 'ˈtɪkɪt', approxAr: 'تيكيت', meaningAr: 'تذكرة', example: 'Keep your train ticket safe.', exampleMeaningAr: 'احتفظ بتذكرة القطار بأمان.' },
    { id: 'en-v-32', category: 'travel', categoryAr: 'السفر والأماكن', word: 'Straight ahead', reading: 'streɪt əˈhed', approxAr: 'ستريت أهيد', meaningAr: 'مباشرة للأمام', example: 'Walk straight ahead for two blocks.', exampleMeaningAr: 'امش مباشرة للأمام لشارعين.' },
    { id: 'en-v-33', category: 'travel', categoryAr: 'السفر والأماكن', word: 'Turn right / left', reading: 'tɜːrn raɪt / left', approxAr: 'تيرن رايت / ليفت', meaningAr: 'انعطف يميناً / يساراً', example: 'Turn left at the next corner.', exampleMeaningAr: 'انعطف يساراً عند المنعطف القادم.' },
    { id: 'en-v-34', category: 'travel', categoryAr: 'السفر والأماكن', word: 'Station', reading: 'ˈsteɪʃən', approxAr: 'ستيشن', meaningAr: 'محطة', example: 'Where is the nearest bus station?', exampleMeaningAr: 'أين تقع أقرب محطة حافلات؟' },

    // 7. Everyday Verbs
    { id: 'en-v-35', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Understand', reading: 'ˌʌndərˈstænd', approxAr: 'أندرستاند', meaningAr: 'يفهم', example: 'Do you understand this sentence?', exampleMeaningAr: 'هل تفهم هذه الجملة؟' },
    { id: 'en-v-36', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Practice', reading: 'ˈpræktɪs', approxAr: 'براكتيس', meaningAr: 'يتمرن / يمارس', example: 'Practice makes progress every day.', exampleMeaningAr: 'الممارسة تصنع التقدم كل يوم.' },
    { id: 'en-v-37', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Explain', reading: 'ɪkˈspleɪn', approxAr: 'إيكسبلين', meaningAr: 'يشرح', example: 'Can you explain that rule again?', exampleMeaningAr: 'هل يمكنك شرح تلك القاعدة مجدداً؟' },
    { id: 'en-v-38', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Remember', reading: 'rɪˈmembər', approxAr: 'ريميمبر', meaningAr: 'يتذكر', example: 'I always remember new words in context.', exampleMeaningAr: 'أتذكر دائماً الكلمات الجديدة في سياقها.' },
    { id: 'en-v-39', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Improve', reading: 'ɪmˈpruːv', approxAr: 'إمبروف', meaningAr: 'يحسّن / يطوّر', example: 'Listening daily helps improve your accent.', exampleMeaningAr: 'الاستماع يومياً يساعد على تحسين نطقك.' },
    { id: 'en-v-40', category: 'verbs', categoryAr: 'الأفعال اليومية', word: 'Choose', reading: 'tʃuːz', approxAr: 'تشوز', meaningAr: 'يختار', example: 'Choose the correct option below.', exampleMeaningAr: 'اختر الإجابة الصحيحة أدناه.' },

    // 8. Adjectives & Feelings
    { id: 'en-v-41', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Confident', reading: 'ˈkɑːnfɪdənt', approxAr: 'كونفيدنت', meaningAr: 'واثق من نفسه', example: 'Speak slowly and feel confident.', exampleMeaningAr: 'تكلم ببطء واشعر بالثقة.' },
    { id: 'en-v-42', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Useful', reading: 'ˈjuːsfəl', approxAr: 'يوسفول', meaningAr: 'مفيد', example: 'This phrase is very useful in travel.', exampleMeaningAr: 'هذه العبارة مفيدة جداً في السفر.' },
    { id: 'en-v-43', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Important', reading: 'ɪmˈpɔːrtənt', approxAr: 'إمبورتانت', meaningAr: 'مهم', example: 'Good pronunciation is important.', exampleMeaningAr: 'النطق السليم مهم.' },
    { id: 'en-v-44', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Excited', reading: 'ɪkˈsaɪtɪd', approxAr: 'إكسايتد', meaningAr: 'متحمس', example: "I'm excited to learn three languages!", exampleMeaningAr: 'أنا متحمس لتعلم ثلاث لغات!' },
    { id: 'en-v-45', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: 'Polite', reading: 'pəˈlaɪt', approxAr: 'بولايت', meaningAr: 'مهذب', example: 'Always use polite expressions.', exampleMeaningAr: 'استعمل دائماً عبارات مهذبة.' }
  ],
  dialogues: [
    {
      id: 'en-d-1',
      titleAr: 'التعارف وتبادل الخبرات',
      titleTarget: 'Meeting Someone New',
      level: 'مبتدئ',
      contextAr: 'محادثة ودية للتعريف بالنفس والبلد والهوايات باللغة الإنجليزية.',
      lines: [
        { speaker: 'Sara', text: "Hi there! My name is Sara. What's your name?", reading: 'هاي ذير! ماي نيم إيز سارة. واتس يور نيم؟', meaningAr: 'مرحباً! اسمي سارة. ما اسمك؟' },
        { speaker: 'Omar', text: "Hello Sara! I'm Omar, and I'm from Morocco. Nice to meet you.", reading: 'هيلو سارة! آيم عمر، آند آيم فروم موروكو. نايس تو ميت يو.', meaningAr: 'مرحباً سارة! أنا عمر، وأنا من المغرب. سعيد بلقائك.' },
        { speaker: 'Sara', text: 'Nice to meet you too! What languages are you learning?', reading: 'نايس تو ميت يو تو! وات لانغويدجيز آر يو ليرنينغ؟', meaningAr: 'سعيدة بلقائك أيضاً! ما اللغات التي تتعلمها؟' },
        { speaker: 'Omar', text: 'I speak Arabic and French, and now I am improving my English and Korean.', reading: 'آي سبيك أرابيك آند فرينش، آند ناو آي آم إمبروفينغ ماي إنغليش آند كوريان.', meaningAr: 'أتكلم العربية والفرنسية، والآن أطور إنجليزيتي وكوريتي.' }
      ],
      keyPhrases: [
        { phrase: "What's your name?", reading: 'واتس يور نيم؟', meaningAr: 'ما اسمك؟' },
        { phrase: 'Where are you from?', reading: 'وير آر يو فروم؟', meaningAr: 'من أين أنت؟' },
        { phrase: 'Nice to meet you!', reading: 'نايس تو ميت يو!', meaningAr: 'تشرفت بلقائك!' }
      ]
    },
    {
      id: 'en-d-2',
      titleAr: 'طلب المساعدة في المدرسة',
      titleTarget: 'Asking for Help at School',
      level: 'مبتدئ',
      contextAr: 'موقف تعليمي للسؤال عن معنى كلمة أو إعادة الشرح بأدب.',
      lines: [
        { speaker: 'Student', text: 'Excuse me, teacher, could you explain this word again?', reading: 'إيكسكيوز مي تيتشر، كود يو إيكسبلين ذيس وورد أغين؟', meaningAr: 'لو سمحت يا أستاذ، هل يمكنك شرح هذه الكلمة مجدداً؟' },
        { speaker: 'Teacher', text: 'Of course! Which word is unclear to you?', reading: 'أوف كورس! ويتش وورد إيز أنكلير تو يو؟', meaningAr: 'بالطبع! أي كلمة غير واضحة لك؟' },
        { speaker: 'Student', text: 'How do you pronounce "knowledge" correctly?', reading: 'هاو دو يو بروناونس نوليدج كوريكتلي؟', meaningAr: 'كيف ننطق كلمة "knowledge" بشكل صحيح؟' },
        { speaker: 'Teacher', text: 'The "k" is silent, so we say "noll-ij". Great question!', reading: 'ذا كي إيز سايلنت، سو وي ساي نوليدج. غريت كويسشن!', meaningAr: 'حرف k صامت، لذلك ننطقها «نوليدج». سؤال رائع!' }
      ],
      keyPhrases: [
        { phrase: 'Could you speak more slowly?', reading: 'كود يو سبيك مور سلولي؟', meaningAr: 'هل يمكنك التحدث ببطء أكثر؟' },
        { phrase: 'What does this mean?', reading: 'وات داز ذيس مين؟', meaningAr: 'ماذا يعني هذا؟' },
        { phrase: 'Thank you for explaining', reading: 'ثانك يو فور إيكسبلينينغ', meaningAr: 'شكراً على الشرح' }
      ]
    },
    {
      id: 'en-d-3',
      titleAr: 'في المقهى وطلب الطعام',
      titleTarget: 'Ordering at a Café',
      level: 'أساسي',
      contextAr: 'طلب مشروب وساندويتش بأدب باستخدام صيغة I would like.',
      lines: [
        { speaker: 'Barista', text: 'Welcome! What can I get for you today?', reading: 'ويلكم! وات كان آي غيت فور يو توداي؟', meaningAr: 'أهلاً بك! ماذا يمكنني أن أحضر لك اليوم؟' },
        { speaker: 'Youssef', text: "I'd like a cup of green tea and a cheese sandwich, please.", reading: 'آيد لايك أ كاب أوف غرين تي آند أ تشيز ساندويتش بليز.', meaningAr: 'أود كوب شاي أخضر وساندويتش جبن، من فضلك.' },
        { speaker: 'Barista', text: 'Sure! Would you like anything else?', reading: 'شور! وود يو لايك إينيثينغ إيلس؟', meaningAr: 'بالتأكيد! هل تود أي شيء آخر؟' },
        { speaker: 'Youssef', text: 'No, thank you. How much is that altogether?', reading: 'نو، ثانك يو. هاو ماتش إيز ذات أولتوغيذر؟', meaningAr: 'لا، شكراً لك. كم المجموع كله؟' }
      ],
      keyPhrases: [
        { phrase: "I'd like..., please", reading: 'آيد لايك... بليز', meaningAr: 'أود... من فضلك' },
        { phrase: 'How much is this?', reading: 'هاو ماتش إيز ذيس؟', meaningAr: 'كم ثمن هذا؟' },
        { phrase: 'Keep the change', reading: 'كيب ذا تشينج', meaningAr: 'احتفظ بالباقي' }
      ]
    },
    {
      id: 'en-d-4',
      titleAr: 'السؤال عن الاتجاهات',
      titleTarget: 'Asking for Directions',
      level: 'متوسط',
      contextAr: 'الاستفسار عن أقرب محطة حافلات وفهم الوصف المكاني.',
      lines: [
        { speaker: 'Traveler', text: 'Excuse me, how can I get to the central train station?', reading: 'إيكسكيوز مي، هاو كان آي غيت تو ذا سنترال ترين ستيشن؟', meaningAr: 'عذراً، كيف أصل إلى محطة القطار المركزية؟' },
        { speaker: 'Local', text: 'Go straight ahead for two minutes, then turn right at the traffic lights.', reading: 'غو ستريت أهيد فور تو مينيتس، ذين تيرن رايت آت ذا ترافيك لايتس.', meaningAr: 'امش مباشرة للأمام لدقيقتين، ثم انعطف يميناً عند إشارات المرور.' },
        { speaker: 'Traveler', text: 'Is it next to the city museum?', reading: 'إيز إت نيكست تو ذا سيتي ميوزيم؟', meaningAr: 'هل هي بجانب متحف المدينة؟' },
        { speaker: 'Local', text: "Yes, you can't miss it. It's right across from the park.", reading: 'يس، يو كانت ميس إت. إتس رايت أكروس فروم ذا بارك.', meaningAr: 'نعم، لن تخطئها. إنها مباشرة مقابل الحديقة.' }
      ],
      keyPhrases: [
        { phrase: 'How do I get to...?', reading: 'هاو دو آي غيت تو...؟', meaningAr: 'كيف أصل إلى...؟' },
        { phrase: 'Turn right / Turn left', reading: 'تيرن رايت / تيرن ليفت', meaningAr: 'انعطف يميناً / يساراً' },
        { phrase: 'Across from / Next to', reading: 'أكروس فروم / نيكست تو', meaningAr: 'مقابل / بجانب' }
      ]
    }
  ],
  quizByLevel: ENGLISH_QUIZ_BY_LEVEL
};
