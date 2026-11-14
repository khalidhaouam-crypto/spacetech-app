import type { LanguageQuizQuestion, QuizDifficulty } from './languageLearningTypes';

export const ENGLISH_QUIZ_BY_LEVEL: Record<QuizDifficulty, LanguageQuizQuestion[]> = {
  easy: [
    {
      id: 'en-e-1',
      questionAr: 'ما معنى تحية « Good morning » بالعربية؟',
      promptTarget: 'Good morning!',
      audioText: 'Good morning',
      options: ['مساء الخير', 'صباح الخير', 'تصبح على خير', 'إلى اللقاء'],
      correctIndex: 1,
      explanationAr: '« Good morning » تُقال في الصباح وتعني صباح الخير.'
    },
    {
      id: 'en-e-2',
      questionAr: 'كيف تقول « شكراً جزيلاً لك » بالإنجليزية؟',
      audioText: 'Thank you very much',
      options: ['Excuse me', 'See you soon', 'Thank you very much', 'Good night'],
      correctIndex: 2,
      explanationAr: '« Thank you very much » تعني شكراً جزيلاً لك.'
    },
    {
      id: 'en-e-3',
      questionAr: 'ما الرد المناسب على « Thank you! »؟',
      promptTarget: 'Thank you! — ___ .',
      options: ["You're welcome", 'Good bye', 'Tomorrow', 'Excuse me'],
      correctIndex: 0,
      explanationAr: "« You're welcome » تعني على الرحب والسعة / عفواً."
    },
    {
      id: 'en-e-4',
      questionAr: 'استمع إلى الكلمة واختر معناها الصحيح:',
      audioText: 'Water',
      options: ['خبز', 'شاي', 'ماء', 'فاكهة'],
      correctIndex: 2,
      explanationAr: '« Water » تعني ماء.'
    },
    {
      id: 'en-e-5',
      questionAr: 'ما معنى كلمة « Friend »؟',
      promptTarget: 'He is my best friend.',
      audioText: 'Friend',
      options: ['معلم', 'صديق', 'جار', 'أخ'],
      correctIndex: 1,
      explanationAr: '« Friend » تعني صديق.'
    },
    {
      id: 'en-e-6',
      questionAr: 'أي كلمة تعني « اليوم » بالإنجليزية؟',
      options: ['Yesterday', 'Tomorrow', 'Today', 'Minute'],
      correctIndex: 2,
      explanationAr: '« Today » تعني اليوم، و« Tomorrow » تعني غداً، و« Yesterday » تعني البارحة.'
    },
    {
      id: 'en-e-7',
      questionAr: 'ما معنى « Teacher »؟',
      audioText: 'Teacher',
      options: ['تلميذ', 'أستاذ / معلم', 'طبيب', 'سائق'],
      correctIndex: 1,
      explanationAr: '« Teacher » تعني أستاذ أو معلم.'
    },
    {
      id: 'en-e-8',
      questionAr: 'كيف تسأل شخصاً « ما اسمك؟ » بالإنجليزية؟',
      options: ['Where are you from?', "What's your name?", 'How old are you?', 'How much is it?'],
      correctIndex: 1,
      explanationAr: "« What's your name? » تعني ما اسمك؟"
    },
    {
      id: 'en-e-9',
      questionAr: 'ما معنى كلمة « Classroom »؟',
      promptTarget: 'Welcome to our classroom.',
      options: ['المكتبة', 'المطار', 'حجرة الدرس / القسم', 'المحطة'],
      correctIndex: 2,
      explanationAr: '« Classroom » تعني حجرة الدرس أو الفصل.'
    },
    {
      id: 'en-e-10',
      questionAr: 'استمع واختر الترجمة العربية لـ « Breakfast »:',
      audioText: 'Breakfast',
      options: ['وجبة الفطور', 'وجبة العشاء', 'قائمة الطعام', 'الفواكه'],
      correctIndex: 0,
      explanationAr: '« Breakfast » تعني وجبة الفطور.'
    },
    {
      id: 'en-e-11',
      questionAr: 'ما معنى عبارة « Nice to meet you »؟',
      audioText: 'Nice to meet you',
      options: ['أراك لاحقاً', 'سعيد بلقائك', 'عفواً لو سمحت', 'أنا ذاهب الآن'],
      correctIndex: 1,
      explanationAr: '« Nice to meet you » تُقال عند التعرف وتعني سعيد بلقائك.'
    },
    {
      id: 'en-e-12',
      questionAr: 'ما معنى كلمة « Parents »؟',
      options: ['الأصدقاء', 'الجيران', 'الوالدان', 'الأساتذة'],
      correctIndex: 2,
      explanationAr: '« Parents » تعني الوالدين (الأم والأب).'
    },
    {
      id: 'en-e-13',
      questionAr: 'أي كلمة تعني « سؤال »؟',
      audioText: 'Question',
      options: ['Answer', 'Question', 'Schedule', 'Ticket'],
      correctIndex: 1,
      explanationAr: '« Question » تعني سؤال و« Answer » تعني جواب.'
    },
    {
      id: 'en-e-14',
      questionAr: 'ما معنى صفة « Delicious »؟',
      promptTarget: 'This meal is delicious!',
      audioText: 'Delicious',
      options: ['سريع', 'لذيذ', 'صعب', 'طويل'],
      correctIndex: 1,
      explanationAr: '« Delicious » تعني لذيذ الطعم.'
    },
    {
      id: 'en-e-15',
      questionAr: 'كيف تقول « أنا تلميذ » بالإنجليزية؟',
      options: ['I am a student.', 'I have a student.', 'I go a student.', 'I do a student.'],
      correctIndex: 0,
      explanationAr: 'نستخدم Verb To Be: « I am a student. »'
    },
    {
      id: 'en-e-16',
      questionAr: 'ما معنى كلمة « Notebook »؟',
      options: ['حاسوب محمول', 'دفتر الملاحظات', 'مكتبة', 'قلم حبر'],
      correctIndex: 1,
      explanationAr: '« Notebook » تعني دفتر الملاحظات (بينما Laptop تعني الحاسوب المحمول).'
    },
    {
      id: 'en-e-17',
      questionAr: 'استمع واختر معنى « See you soon »:',
      audioText: 'See you soon',
      options: ['أراك قريباً', 'صباح الخير', 'من فضلك', 'لا مشكلة'],
      correctIndex: 0,
      explanationAr: '« See you soon » تعني أراك قريباً.'
    },
    {
      id: 'en-e-18',
      questionAr: 'ما معنى كلمة « Always »؟',
      options: ['أبداً', 'أحياناً', 'دائماً', 'البارحة'],
      correctIndex: 2,
      explanationAr: '« Always » تعني دائماً.'
    },
    {
      id: 'en-e-19',
      questionAr: 'أي كلمة تعني « المطار »؟',
      audioText: 'Airport',
      options: ['Station', 'Library', 'Airport', 'Park'],
      correctIndex: 2,
      explanationAr: '« Airport » تعني المطار.'
    },
    {
      id: 'en-e-20',
      questionAr: 'ما معنى الفعل « Understand »؟',
      promptTarget: 'I understand you.',
      options: ['يكتب', 'يفهم', 'يسافر', 'يختار'],
      correctIndex: 1,
      explanationAr: '« Understand » يعني يفهم.'
    }
  ],
  medium: [
    {
      id: 'en-m-1',
      questionAr: 'استمع إلى التوجيه واختر معناه الصحيح:',
      audioText: 'Go straight ahead and turn right.',
      options: [
        'انعطف يساراً ثم توقف',
        'امش مباشرة للأمام ثم انعطف يميناً',
        'ارجع إلى المحطة الرئيسية',
        'المتحف أمام الحديقة مباشرة'
      ],
      correctIndex: 1,
      explanationAr: '« Straight ahead » تعني مباشرة للأمام، و« turn right » تعني انعطف يميناً.'
    },
    {
      id: 'en-m-2',
      questionAr: 'أي حرف جر يناسب الساعة: « The lesson starts ___ 8:30 a.m. »؟',
      promptTarget: 'The lesson starts ___ 8:30 a.m.',
      options: ['in', 'on', 'at', 'for'],
      correctIndex: 2,
      explanationAr: 'تُستخدم « at » دائماً قبل الساعات الدقيقة.'
    },
    {
      id: 'en-m-3',
      questionAr: 'ما معنى كلمة « Library » بالعربية؟',
      audioText: 'Library',
      options: ['مكتبة للقراءة والاستعارة', 'مكتبة لبيع الأدوات', 'حجرة الأساتذة', 'مختبر العلوم'],
      correctIndex: 0,
      explanationAr: '« Library » هي المكتبة العامة أو المدرسية للمطالعة واستعارة الكتب.'
    },
    {
      id: 'en-m-4',
      questionAr: 'ما العبارة المهذبة لطلب قائمة الطعام في مطعم؟',
      options: [
        'Give me food fast.',
        'May I see the menu, please?',
        'Where is the ticket?',
        'Turn left at the door.'
      ],
      correctIndex: 1,
      explanationAr: '« May I see the menu, please? » طلب لطيف ومهذب لرؤية قائمة الطعام.'
    },
    {
      id: 'en-m-5',
      questionAr: 'ما معنى كلمة « Knowledge »؟',
      promptTarget: 'Reading opens the door to knowledge.',
      audioText: 'Knowledge',
      options: ['النجاح', 'المعرفة', 'الممارسة', 'الجدول'],
      correctIndex: 1,
      explanationAr: '« Knowledge » تعني المعرفة والعلم (وحرف k في البداية صامت).'
    },
    {
      id: 'en-m-6',
      questionAr: 'اختر حرف الجر المناسب ليوم الأسبوع: « We meet ___ Friday. »',
      options: ['in', 'at', 'on', 'to'],
      correctIndex: 2,
      explanationAr: 'نستخدم « on » مع أيام الأسبوع والتواريخ.'
    },
    {
      id: 'en-m-7',
      questionAr: 'استمع واختر معنى العبارة:',
      audioText: 'Could you speak more slowly, please?',
      options: [
        'هل يمكنك التحدث ببطء أكثر من فضلك؟',
        'هل يمكنك كتابة اسمك هنا؟',
        'كم ثمن هذه التذكرة؟',
        'أين تسكن في المدينة؟'
      ],
      correctIndex: 0,
      explanationAr: '« Speak more slowly » تعني التحدث ببطء أكثر.'
    },
    {
      id: 'en-m-8',
      questionAr: 'ما معنى « Across from the park »؟',
      options: ['داخل الحديقة', 'خلف الحديقة', 'مقابل الحديقة', 'فوق الحديقة'],
      correctIndex: 2,
      explanationAr: '« Across from » تعني في الجهة المقابلة لـ...'
    },
    {
      id: 'en-m-9',
      questionAr: 'ما معنى صفة « Confident »؟',
      audioText: 'Feel confident',
      options: ['متردد', 'واثق من نفسه', 'قلق', 'بطيء'],
      correctIndex: 1,
      explanationAr: '« Confident » تعني واثق من نفسه.'
    },
    {
      id: 'en-m-10',
      questionAr: 'اختر السؤال الصحيح للسؤال عن السعر:',
      options: ['How many time is it?', 'How much is this?', 'Where much is it?', 'Who cost is this?'],
      correctIndex: 1,
      explanationAr: 'نستخدم « How much is this? » أو « How much does it cost? » للسؤال عن الثمن.'
    },
    {
      id: 'en-m-11',
      questionAr: 'ما معنى الفعل « Improve »؟',
      promptTarget: 'I want to improve my English.',
      audioText: 'Improve',
      options: ['يحفظ غيباً', 'يحسّن ويطوّر', 'يتوقف عن', 'ينتظر'],
      correctIndex: 1,
      explanationAr: '« Improve » يعني يحسّن أو يطوّر مستوى مهارة ما.'
    },
    {
      id: 'en-m-12',
      questionAr: 'أكمل الجملة في المضارع البسيط: « She ___ every evening. »',
      options: ['study', 'studies', 'studying', 'to study'],
      correctIndex: 1,
      explanationAr: 'مع الضمير She في المضارع البسيط نضيف -s/-ies للفعل: « She studies ».'
    },
    {
      id: 'en-m-13',
      questionAr: 'ما معنى كلمة « Schedule »؟',
      audioText: 'Study schedule',
      options: ['امتحان', 'جدول زمني', 'حقيبة', 'دفتر'],
      correctIndex: 1,
      explanationAr: '« Schedule » تعني برنامج أو جدول زمني.'
    },
    {
      id: 'en-m-14',
      questionAr: 'ما معنى صفة « Useful »؟',
      options: ['ممل', 'مفيد', 'قديم', 'صعب'],
      correctIndex: 1,
      explanationAr: '« Useful » تعني مفيد وعملي.'
    },
    {
      id: 'en-m-15',
      questionAr: 'استمع للجملة واختر ترجمتها الصحيحة:',
      audioText: 'Could you explain that rule again?',
      options: [
        'هل يمكنك شرح تلك القاعدة مجدداً؟',
        'هل يمكنك فتح النافذة الآن؟',
        'أين وضعتَ دفتر الملاحظات؟',
        'سأبدأ الدراسة غداً صباحاً.'
      ],
      correctIndex: 0,
      explanationAr: '« Explain ... again » تعني اشرح ذلك مرة أخرى.'
    },
    {
      id: 'en-m-16',
      questionAr: 'ما معنى كلمة « Neighbor »؟',
      options: ['زميل عمل', 'جار', 'سائح', 'مسؤول'],
      correctIndex: 1,
      explanationAr: '« Neighbor » (أو Neighbour في البريطانية) تعني الجار.'
    },
    {
      id: 'en-m-17',
      questionAr: 'أي كلمة تعني « يتذكر »؟',
      audioText: 'Remember',
      options: ['Forget', 'Remember', 'Choose', 'Explain'],
      correctIndex: 1,
      explanationAr: '« Remember » تعني يتذكر، وعكسها « Forget » (ينسى).'
    },
    {
      id: 'en-m-18',
      questionAr: 'اختر الجملة الصحيحة لتقديم نفسك بأدب في مقهى:',
      options: [
        "I'd like a cup of green tea, please.",
        'I want you give me green tea.',
        'Me like green tea fast.',
        'Green tea is bring me.'
      ],
      correctIndex: 0,
      explanationAr: "« I'd like..., please » هي العبارة المهذبة للطلب."
    },
    {
      id: 'en-m-19',
      questionAr: 'ما معنى كلمة « Success »؟',
      options: ['المحاولة', 'النجاح', 'التركيز', 'التدريب'],
      correctIndex: 1,
      explanationAr: '« Success » تعني النجاح.'
    },
    {
      id: 'en-m-20',
      questionAr: 'ما معنى عبارة « Keep the ticket safe »؟',
      audioText: 'Keep your ticket safe',
      options: ['اشترِ تذكرة جديدة', 'احتفظ بالتذكرة في مكان آمن', 'اسأل عن موعد القطار', 'تأخر القطار قليلاً'],
      correctIndex: 1,
      explanationAr: '« Keep ... safe » تعني حافظ عليه بأمان.'
    }
  ],
  hard: [
    {
      id: 'en-h-1',
      questionAr: 'أي جملة تفرّق بشكل صحيح بين المضارع البسيط (العادة) والمستمر (الآن)؟',
      options: [
        'He is usually reading at 8 p.m., and now he reads a novel.',
        'He usually reads at 8 p.m., and right now he is writing notes.',
        'He reading every day, and now he write notes.',
        'He reads right now while he is always writing.'
      ],
      correctIndex: 1,
      explanationAr: '« usually » تدل على العادة (Simple Present: reads)، و« right now » تدل على اللحظة الراهنة (Continuous: is writing).'
    },
    {
      id: 'en-h-2',
      questionAr: 'استمع للجملة واختر معناها الأدق:',
      audioText: "You can't miss it; it's right across from the central library.",
      options: [
        'لن تجدها بسهولة لأنها بعيدة جداً',
        'لن تخطئها؛ إنها مباشرة مقابل المكتبة المركزية',
        'عليك ركوب القطار للوصول إليها',
        'المكتبة مغلقة اليوم للصيانة'
      ],
      correctIndex: 1,
      explanationAr: "تعبير « You can't miss it » يُقال عند وصف مكان واضح جداً ومعناه « لن تخطئه / من السهل جداً رؤيته »."
    },
    {
      id: 'en-h-3',
      questionAr: 'اختر السؤال الصحيح نحوياً باستخدام أداة استفهام في الماضي البسيط:',
      options: [
        'Where did you went yesterday?',
        'Where you went yesterday?',
        'Where did you go yesterday?',
        'Where were you go yesterday?'
      ],
      correctIndex: 2,
      explanationAr: 'بعد الفعل المساعد « did » يجب إعادة الفعل الرئيسي إلى المصدر بدون تصريف: « did you go ».'
    },
    {
      id: 'en-h-4',
      questionAr: 'اختر ترتيب حروف الجر الصحيح: « The conference takes place ___ October 14th ___ 10:00 a.m. ___ London. »',
      options: ['in / at / on', 'on / at / in', 'at / on / in', 'on / in / at'],
      correctIndex: 1,
      explanationAr: 'التاريخ الكامل يأخذ « on » (on October 14th)، والساعة تأخذ « at » (at 10:00 a.m.)، والمدينة تأخذ « in » (in London).'
    },
    {
      id: 'en-h-5',
      questionAr: 'ما معنى الصفة « Fluent » في سياق تعلم اللغات؟',
      promptTarget: 'She speaks three languages fluently.',
      audioText: 'She is fluent in three languages.',
      options: ['مبتدئة في اللغة', 'طليقة وتتكلم بسلاسة', 'تجد صعوبة في القراءة', 'تتحدث بصوت خافت'],
      correctIndex: 1,
      explanationAr: '« Fluent » تعني طليق اللسان ومتقن للغة بسلاسة.'
    },
    {
      id: 'en-h-6',
      questionAr: 'أي جملة تستخدم صيغة الطلب الأعلى أدباً في الإنجليزية؟',
      options: [
        'Would you mind repeating that sentence more slowly?',
        'Repeat that sentence immediately.',
        'You must tell me that again.',
        'Say it slow for me.'
      ],
      correctIndex: 0,
      explanationAr: 'صيغة « Would you mind + V-ing? » (هل تمانع في...؟) من أرقى أساليب التأدب في الإنجليزية.'
    },
    {
      id: 'en-h-7',
      questionAr: 'استمع للعبارة وحدد معناها في المطعم:',
      audioText: 'How much is that altogether? Keep the change, please.',
      options: [
        'كم المجموع كله؟ واحتفظ بالباقي من فضلك.',
        'هل الطعام بارد؟ أريد استبدال الطبق.',
        'أين يقع المخرج من فضلك؟',
        'أريد الفاتورة مقسمة على شخصين.'
      ],
      correctIndex: 0,
      explanationAr: '« altogether » تعني إجمالاً/كله، و« Keep the change » تعني احتفظ بالباقي.'
    },
    {
      id: 'en-h-8',
      questionAr: 'في الجملة الشرطية من النوع الثاني (تخيّل في الحاضر)، اختر الصياغة الصحيحة:',
      options: [
        'If I had more time, I would learn Japanese too.',
        'If I have more time, I would learned Japanese.',
        'If I would have more time, I learn Japanese.',
        'If I has more time, I will learnt Japanese.'
      ],
      correctIndex: 0,
      explanationAr: 'القاعدة في Second Conditional: « If + Past Simple, ... would + Base Verb ».'
    },
    {
      id: 'en-h-9',
      questionAr: 'ما معنى كلمة « Progress » في عبارة « Practice makes progress »؟',
      audioText: 'Consistent practice leads to steady progress.',
      options: ['تراجع', 'تقدّم وتطور', 'إرهاق', 'منافسة'],
      correctIndex: 1,
      explanationAr: '« Progress » تعني التقدم والتحسن المستمر.'
    },
    {
      id: 'en-h-10',
      questionAr: 'اختر الجملة التي تخلو من أخطاء قواعدية في المقارنة:',
      options: [
        'Daily practice is more effective than memorizing randomly.',
        'Daily practice is most effective than memorizing randomly.',
        'Daily practice is effectiver than memorizing randomly.',
        'Daily practice is effective as memorizing randomly.'
      ],
      correctIndex: 0,
      explanationAr: 'للصفات الطويلة مثل effective نستخدم « more + adjective + than » عند المقارنة بين شيئين.'
    },
    {
      id: 'en-h-11',
      questionAr: 'ما معنى الفعل المركب « Look up a word » في سياق الدراسة؟',
      promptTarget: 'Look up unfamiliar words in a dictionary.',
      audioText: 'Look up unfamiliar words in a dictionary.',
      options: ['حذف كلمة من النص', 'البحث عن معنى كلمة في القاموس', 'تخمين الكلمة دون قراءة', 'كتابة كلمة بخط كبير'],
      correctIndex: 1,
      explanationAr: '« Look up » تعني البحث عن معلومة أو معنى كلمة داخل مرجع أو قاموس.'
    },
    {
      id: 'en-h-12',
      questionAr: 'أي جملة صحيحة للتعبير عن السبب والنتيجة؟',
      options: [
        'Although he studied hard, so he succeeded.',
        'Because he practiced daily, his accent improved noticeably.',
        'Despite he practiced daily, he improved.',
        'In order to he speaks well, he listens daily.'
      ],
      correctIndex: 1,
      explanationAr: 'لا نجمع « Although » مع « so »، و« Despite » يتبعها اسم لا جملة، أما « Because + جملة » فهي سليمة تماماً.'
    },
    {
      id: 'en-h-13',
      questionAr: 'استمع للجملة واختر التفسير الصحيح:',
      audioText: 'Listening to native dialogues builds natural rhythm and confidence.',
      options: [
        'الاستماع للحوارات الأصلية يبني الإيقاع الطبيعي والثقة في النفس',
        'حفظ القواعد دون استماع يكفي لإتقان المحادثة',
        'الحوارات السريعة تعيق فهم المبتدئين دائماً',
        'الكتابة أهم من النطق في اللقاءات المباشرة'
      ],
      correctIndex: 0,
      explanationAr: '« natural rhythm » تعني الإيقاع الصوتي الطبيعي، و« confidence » تعني الثقة.'
    },
    {
      id: 'en-h-14',
      questionAr: 'ما الفرق بين « Borrow » و « Lend »؟',
      options: [
        'Borrow = يستعير (يأخذ مؤقتاً) | Lend = يُعير (يعطي مؤقتاً)',
        'Borrow = يبيع | Lend = يشتري',
        'كلاهما يعني يستأجر منزلاً',
        'Borrow للمكان و Lend للزمان'
      ],
      correctIndex: 0,
      explanationAr: 'أنت تستعير كتاباً من صديق (borrow from)، وصديقك يعيرك إياه (lend to).'
    },
    {
      id: 'en-h-15',
      questionAr: 'اختر الاستعمال الصحيح للمضارع التام (Present Perfect) للخبرة الحياتية:',
      options: [
        'Have you ever visited South Korea?',
        'Did you ever visited South Korea?',
        'Have you ever visit South Korea?',
        'Are you ever visited South Korea?'
      ],
      correctIndex: 0,
      explanationAr: 'للسؤال عن تجربة سابقة دون تحديد وقت نستخدم: « Have/Has + Subject + ever + Past Participle? ».'
    },
    {
      id: 'en-h-16',
      questionAr: 'ما معنى عبارة « Walk straight ahead for two blocks »؟',
      audioText: 'Walk straight ahead for two blocks.',
      options: [
        'امشِ مباشرة للأمام لمسافة مربعين سكنيين (شارعين)',
        'ادخل في أول زقاق على اليسار',
        'انتظر الحافلة رقم اثنين',
        'اصعد الطابق الثاني في البناية'
      ],
      correctIndex: 0,
      explanationAr: 'كلمة « block » في وصف المدن تشير إلى المسافة بين شارعين متقاطعين.'
    },
    {
      id: 'en-h-17',
      questionAr: 'أكمل الجملة بحرف الجر الصحيح: « She is interested ___ learning Korean culture. »',
      options: ['on', 'at', 'in', 'to'],
      correctIndex: 2,
      explanationAr: 'الصفة « interested » تأخذ دائماً حرف الجر « in ».'
    },
    {
      id: 'en-h-18',
      questionAr: 'استمع للجملة واختر الترجمة الأنسب:',
      audioText: 'Could you please clarify the difference between these two expressions?',
      options: [
        'هل يمكنك توضيح الفرق بين هذين التعبيرين من فضلك؟',
        'هل يمكنك ترجمة هذا الكتاب بالكامل؟',
        'متى سنبدأ الاختبار النهائي؟',
        'أين أستطيع شراء قاموس جديد؟'
      ],
      correctIndex: 0,
      explanationAr: 'الفعل « clarify » يعني يوضّح ويشرح بدقة.'
    },
    {
      id: 'en-h-19',
      questionAr: 'أي جملة صحيحة في استخدام صيغة « Used to » للعادات الماضية؟',
      options: [
        'I used to find pronunciation difficult, but now it feels natural.',
        'I use to found pronunciation difficult.',
        'I was used to found pronunciation difficult.',
        'I used finding pronunciation difficult.'
      ],
      correctIndex: 0,
      explanationAr: 'للعادة التي كانت في الماضي وتغيرت نستخدم: « Subject + used to + Base Verb ».'
    },
    {
      id: 'en-h-20',
      questionAr: 'ما معنى الجملة: « Patience and daily effort inevitably lead to mastery »؟',
      audioText: 'Patience and daily effort lead to mastery.',
      options: [
        'الصبر والجهد اليومي يؤديان حتماً إلى الإتقان',
        'السرعة أهم من الدقة في التعلم',
        'التعلم يتوقف بعد المرحلة الإعدادية',
        'الكتابة أصعب من الاستماع دائماً'
      ],
      correctIndex: 0,
      explanationAr: '« Patience » تعني الصبر، و« effort » الجهد، و« mastery » الإتقان.'
    }
  ]
};
