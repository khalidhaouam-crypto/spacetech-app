import type { LanguageQuizQuestion, QuizDifficulty } from './languageLearningTypes';

export const FRENCH_QUIZ_BY_LEVEL: Record<QuizDifficulty, LanguageQuizQuestion[]> = {
  easy: [
    {
      id: 'fr-e-1',
      questionAr: 'ما معنى تحية « Bonjour » بالعربية؟',
      promptTarget: 'Bonjour !',
      audioText: 'Bonjour',
      options: ['صباح الخير / مرحباً', 'تصبح على خير', 'شكراً جزيلاً', 'إلى اللقاء'],
      correctIndex: 0,
      explanationAr: '« Bonjour » هي التحية النهارية الأساسية وتعني صباح الخير أو مرحباً.'
    },
    {
      id: 'fr-e-2',
      questionAr: 'كيف تقول « شكراً جزيلاً » بالفرنسية؟',
      audioText: 'Merci beaucoup',
      options: ['De rien', 'Merci beaucoup', 'Au revoir', 'Bonsoir'],
      correctIndex: 1,
      explanationAr: '« Merci beaucoup » تعني شكراً جزيلاً.'
    },
    {
      id: 'fr-e-3',
      questionAr: 'ما معنى « Au revoir » عند توديع شخص ما؟',
      promptTarget: 'Au revoir et à demain !',
      audioText: 'Au revoir',
      options: ['من فضلك', 'عفواً', 'إلى اللقاء', 'لا أعرف'],
      correctIndex: 2,
      explanationAr: '« Au revoir » تُقال عند المغادرة وتعني إلى اللقاء.'
    },
    {
      id: 'fr-e-4',
      questionAr: 'استمع إلى الكلمة واختر معناها الصحيح:',
      audioText: "L'eau",
      options: ['الخبز', 'الماء', 'الشاي', 'الحليب'],
      correctIndex: 1,
      explanationAr: "« L'eau » تعني الماء وتُنطق (لو)."
    },
    {
      id: 'fr-e-5',
      questionAr: 'ما الترجمة العربية لكلمة « La famille »؟',
      promptTarget: 'Ma famille habite ici.',
      audioText: 'La famille',
      options: ['المدرسة', 'المدينة', 'العائلة', 'الصديق'],
      correctIndex: 2,
      explanationAr: '« La famille » تعني العائلة أو الأسرة.'
    },
    {
      id: 'fr-e-6',
      questionAr: 'كيف تقول « من فضلك » بصيغة مهذبة بالفرنسية؟',
      options: ["S'il vous plaît", 'Bonne nuit', 'Bonjour', 'À gauche'],
      correctIndex: 0,
      explanationAr: "« S'il vous plaît » هي صيغة التأدب لقول « من فضلك »."
    },
    {
      id: 'fr-e-7',
      questionAr: 'ما معنى كلمة « Demain »؟',
      promptTarget: 'À demain !',
      audioText: 'Demain',
      options: ['البارحة', 'اليوم', 'غداً', 'الآن'],
      correctIndex: 2,
      explanationAr: '« Demain » تعني غداً، بينما « Hier » تعني البارحة و« Aujourd’hui » تعني اليوم.'
    },
    {
      id: 'fr-e-8',
      questionAr: 'استمع واختر معنى الكلمة:',
      audioText: 'Le cahier',
      options: ['الدفتر', 'القلم', 'المكتبة', 'المحطة'],
      correctIndex: 0,
      explanationAr: '« Le cahier » تعني الدفتر.'
    },
    {
      id: 'fr-e-9',
      questionAr: 'ما معنى كلمة « Le frère »؟',
      promptTarget: 'Mon frère est gentil.',
      options: ['الأب', 'الأخ', 'الأخت', 'الجار'],
      correctIndex: 1,
      explanationAr: '« Le frère » تعني الأخ، و« La sœur » تعني الأخت.'
    },
    {
      id: 'fr-e-10',
      questionAr: 'ما الكلمة الفرنسية التي تعني « الخبز »؟',
      audioText: 'Le pain',
      options: ['Le pain', 'Le train', 'Le matin', 'Le jardin'],
      correctIndex: 0,
      explanationAr: '« Le pain » تعني الخبز.'
    },
    {
      id: 'fr-e-11',
      questionAr: 'ماذا يرد الشخص بأدب على « Merci »؟',
      promptTarget: 'Merci ! — ___ .',
      options: ['Bonsoir', 'De rien', 'Demain', 'Difficile'],
      correctIndex: 1,
      explanationAr: '« De rien » تعني عفواً أو لا شكر على واجب.'
    },
    {
      id: 'fr-e-12',
      questionAr: 'ما معنى صفة « Facile »؟',
      promptTarget: 'Cet exercice est facile.',
      audioText: 'Facile',
      options: ['صعب', 'سريع', 'سهل', 'بعيد'],
      correctIndex: 2,
      explanationAr: '« Facile » تعني سهل، وعكسها « Difficile » (صعب).'
    },
    {
      id: 'fr-e-13',
      questionAr: 'استمع واختر الكلمة المناسبة للترجمة « الصديق »:',
      audioText: "L'ami",
      options: ['Le voisin', "L'ami", 'Le professeur', 'Le repas'],
      correctIndex: 1,
      explanationAr: "« L'ami » تعني الصديق و« L'amie » تعني الصديقة."
    },
    {
      id: 'fr-e-14',
      questionAr: 'ما معنى « Le matin »؟',
      options: ['المساء', 'الليل', 'الصباح', 'الأسبوع'],
      correctIndex: 2,
      explanationAr: '« Le matin » تعني الصباح.'
    },
    {
      id: 'fr-e-15',
      questionAr: 'كيف تعرّف بنفسك وتقول « اسمي آدم »؟',
      promptTarget: 'Bonjour, ___ Adam.',
      options: ['je suis nom', "je m'appelle", "j'ai âge", 'je vais'],
      correctIndex: 1,
      explanationAr: "لتقديم الاسم بالفرنسية نقول « Je m'appelle + الاسم »."
    },
    {
      id: 'fr-e-16',
      questionAr: 'ما معنى « La ville »؟',
      audioText: 'La ville',
      options: ['القرية', 'المدينة', 'الشارع', 'المطار'],
      correctIndex: 1,
      explanationAr: '« La ville » تعني المدينة.'
    },
    {
      id: 'fr-e-17',
      questionAr: 'أي كلمة تعني « السؤال »؟',
      options: ['La réponse', 'La question', 'La leçon', 'La réussite'],
      correctIndex: 1,
      explanationAr: '« La question » تعني السؤال و« La réponse » تعني الجواب.'
    },
    {
      id: 'fr-e-18',
      questionAr: 'ما معنى عبارة « Comment ça va ? »؟',
      promptTarget: 'Salut, comment ça va ?',
      audioText: 'Comment ça va ?',
      options: ['أين تسكن؟', 'كم عمرك؟', 'كيف حالك؟', 'متى نذهب؟'],
      correctIndex: 2,
      explanationAr: '« Comment ça va ? » سؤال شائع يعني: كيف حالك / كيف تسير الأمور؟'
    },
    {
      id: 'fr-e-19',
      questionAr: 'ما معنى الفعل « Écrire »؟',
      options: ['يقرأ', 'يكتب', 'يسمع', 'يذهب'],
      correctIndex: 1,
      explanationAr: '« Écrire » يعني كتب/يكتب.'
    },
    {
      id: 'fr-e-20',
      questionAr: 'استمع واختر معنى الكلمة « Heureux »:',
      audioText: 'Je suis très heureux',
      options: ['حزين', 'غاضب', 'سعيد', 'متعب'],
      correctIndex: 2,
      explanationAr: '« Heureux » (للمذكر) و« Heureuse » (للمؤنث) تعني سعيد.'
    }
  ],
  medium: [
    {
      id: 'fr-m-1',
      questionAr: 'استمع إلى العبارة واختر معناها الصحيح:',
      audioText: "L'addition, s'il vous plaît.",
      options: ['قائمة الطعام من فضلك', 'الحساب / الفاتورة من فضلك', 'كأس ماء من فضلك', 'طاولة لشخصين من فضلك'],
      correctIndex: 1,
      explanationAr: "« L'addition » تعني فاتورة الحساب في المطعم أو المقهى."
    },
    {
      id: 'fr-m-2',
      questionAr: 'ما معنى الاتجاه « Tournez à gauche »؟',
      promptTarget: 'Allez tout droit puis tournez à gauche.',
      audioText: 'Tournez à gauche',
      options: ['انعطف يميناً', 'ارجع للخلف', 'انعطف يساراً', 'عبر الممر'],
      correctIndex: 2,
      explanationAr: '« à gauche » تعني يساراً و« à droite » تعني يميناً.'
    },
    {
      id: 'fr-m-3',
      questionAr: 'أي عبارة تُقال عندما تتعرف على شخص لأول مرة؟',
      options: ['Bonne chance !', 'Enchanté(e) !', 'À bientôt !', 'Pas du tout !'],
      correctIndex: 1,
      explanationAr: '« Enchanté(e) » تعني تشرفت بمعرفتك عند اللقاء الأول.'
    },
    {
      id: 'fr-m-4',
      questionAr: 'ما معنى كلمة « La bibliothèque »؟',
      audioText: 'La bibliothèque',
      options: ['المختبر', 'المكتبة', 'الإدارة', 'القاعة'],
      correctIndex: 1,
      explanationAr: '« La bibliothèque » هي المكتبة المخصصة للقراءة والمطالعة.'
    },
    {
      id: 'fr-m-5',
      questionAr: 'أكمل العبارة لطلب تذكرة قطار بأدب:',
      promptTarget: '___ un billet pour Rabat, s’il vous plaît.',
      options: ['Je voudrais', 'Je comprends', "J'écoute", 'Je cherche'],
      correctIndex: 0,
      explanationAr: 'صيغة « Je voudrais » (أودّ) هي الأسلوب المهذب للطلب.'
    },
    {
      id: 'fr-m-6',
      questionAr: 'ما معنى كلمة « Comprendre »؟',
      audioText: 'Comprendre',
      options: ['ينسى', 'يفهم', 'يشرح', 'يختار'],
      correctIndex: 1,
      explanationAr: '« Comprendre » فعل مهم يعني فَهِمَ / يفهم.'
    },
    {
      id: 'fr-m-7',
      questionAr: 'استمع للجملة واختر موقفها المناسب:',
      audioText: 'Pourriez-vous répéter plus lentement ?',
      options: ['طلب تكرار الكلام ببطء', 'السؤال عن ثمن التذكرة', 'الاعتذار عن التأخير', 'توديع الأصدقاء'],
      correctIndex: 0,
      explanationAr: '« Pourriez-vous répéter plus lentement ? » تعني: هل يمكنك الإعادة ببطء أكثر؟'
    },
    {
      id: 'fr-m-8',
      questionAr: 'ما معنى « Tout droit » عند وصف الطريق؟',
      options: ['مقابل الحديقة', 'مباشرة للأمام', 'في الزاوية اليمنى', 'قريب من المطار'],
      correctIndex: 1,
      explanationAr: '« Tout droit » تعني السير مباشرة للأمام دون انعطاف.'
    },
    {
      id: 'fr-m-9',
      questionAr: 'أي كلمة تعني « الجار » بالفرنسية؟',
      audioText: 'Le voisin',
      options: ['Le cousin', 'Le voisin', 'Le copain', 'Le médecin'],
      correctIndex: 1,
      explanationAr: '« Le voisin » تعني الجار و« La voisine » تعني الجارة.'
    },
    {
      id: 'fr-m-10',
      questionAr: 'ما الفرق الصحيح بين « Hier » و « Maintenant »؟',
      options: ['غداً / لاحقاً', 'البارحة / الآن', 'صباحاً / مساءً', 'دائماً / أحياناً'],
      correctIndex: 1,
      explanationAr: '« Hier » تعني البارحة و« Maintenant » تعني الآن.'
    },
    {
      id: 'fr-m-11',
      questionAr: 'كيف تسأل بالفرنسية « كم الساعة الآن؟ »',
      audioText: 'Quelle heure est-il ?',
      options: ['Quel jour sommes-nous ?', 'Quelle heure est-il ?', 'Où allez-vous ?', 'Combien ça coûte ?'],
      correctIndex: 1,
      explanationAr: '« Quelle heure est-il ? » هي الصيغة القياسية للسؤال عن الوقت.'
    },
    {
      id: 'fr-m-12',
      questionAr: 'ما معنى كلمة « La gare »؟',
      promptTarget: 'Le train part de la gare.',
      options: ['الميناء', 'محطة القطار', 'ساحة المدينة', 'الجسر'],
      correctIndex: 1,
      explanationAr: '« La gare » تعني محطة القطار.'
    },
    {
      id: 'fr-m-13',
      questionAr: 'اختر العكس الصحيح لكلمة « Difficile »:',
      options: ['Rapide', 'Facile', 'Important', 'Magnifique'],
      correctIndex: 1,
      explanationAr: 'عكس « Difficile » (صعب) هو « Facile » (سهل).'
    },
    {
      id: 'fr-m-14',
      questionAr: 'استمع واختر الترجمة الدقيقة:',
      audioText: 'Aider mes camarades',
      options: ['البحث عن زملائي', 'مساعدة زملائي', 'انتظار زملائي', 'مراسلة زملائي'],
      correctIndex: 1,
      explanationAr: 'الفعل « Aider » يعني ساعَدَ / يساعد.'
    },
    {
      id: 'fr-m-15',
      questionAr: 'ما معنى كلمة « Le dictionnaire »؟',
      options: ['المجلة', 'القاموس', 'السبورة', 'المقلمة'],
      correctIndex: 1,
      explanationAr: '« Le dictionnaire » هو القاموس للبحث عن معاني الكلمات.'
    },
    {
      id: 'fr-m-16',
      questionAr: 'أكمل الجملة بالفعل المناسب: « Il faut ___ attentivement le dialogue. »',
      options: ['écouter', 'manger', 'voyager', 'dormir'],
      correctIndex: 0,
      explanationAr: '« Écouter » يعني الاستماع بانتباه إلى الحوار.'
    },
    {
      id: 'fr-m-17',
      questionAr: 'ما معنى عبارة « En face du parc »؟',
      promptTarget: "La poste est juste en face du parc.",
      audioText: 'Juste en face du parc',
      options: ['خلف الحديقة', 'مباشرة مقابل الحديقة', 'داخل الحديقة', 'بعيداً عن الحديقة'],
      correctIndex: 1,
      explanationAr: '« En face de » تعني مقابل أو في مواجهة المكان المذكور.'
    },
    {
      id: 'fr-m-18',
      questionAr: 'كيف تعبّر عن عمرك « عمري 15 سنة » بالفرنسية؟',
      options: ['Je suis quinze ans', "J'ai quinze ans", 'Je fais quinze ans', 'Je suis âgé quinze'],
      correctIndex: 1,
      explanationAr: 'في الفرنسية نستخدم فعل الملكية Avoir للتعبير عن العمر: « J’ai quinze ans ».'
    },
    {
      id: 'fr-m-19',
      questionAr: 'ما معنى « La réussite »؟',
      audioText: 'La réussite scolaire',
      options: ['الغياب', 'النجاح', 'البداية', 'العطلة'],
      correctIndex: 1,
      explanationAr: '« La réussite » تعني النجاح أو التفوق.'
    },
    {
      id: 'fr-m-20',
      questionAr: 'استمع واختر الكلمة التي تعني « المطار »:',
      audioText: "L'aéroport",
      options: ["L'hôtel", "L'aéroport", 'La boulangerie', "L'hôpital"],
      correctIndex: 1,
      explanationAr: "« L'aéroport » تعني المطار."
    }
  ],
  hard: [
    {
      id: 'fr-h-1',
      questionAr: 'اختر الجملة المنفية الصحيحة نحوياً من الجملة: « J’ai du temps libre. »',
      promptTarget: 'J’ai du temps libre ➡️ Négation',
      options: [
        "Je n'ai pas du temps libre.",
        "Je n'ai pas de temps libre.",
        "Je ne pas ai de temps libre.",
        "Je n'ai rien temps libre."
      ],
      correctIndex: 1,
      explanationAr: 'في النفي المطلق (ne ... pas) تتحول أداة التجزئة du إلى de: « Je n’ai pas de temps libre ».'
    },
    {
      id: 'fr-h-2',
      questionAr: 'استمع إلى الطلب واختر مستوى اللغة المستخدم فيه:',
      audioText: "Auriez-vous l'obligeance de m'indiquer le chemin de la gare ?",
      options: ['المستوى المألوف (Familier)', 'المستوى العادي (Courant)', 'المستوى الرفيع / الرسمي (Soutenu)', 'لغة عامية مختصرة'],
      correctIndex: 2,
      explanationAr: "استعمال الشرط « Auriez-vous » مع عبارة « l'obligeance de » وقلب الفاعل يدل على المستوى الرفيع (Soutenu)."
    },
    {
      id: 'fr-h-3',
      questionAr: 'ما الكلمة المناسبة لإكمال طلب إذن رسمي؟ « J’ai l’honneur de ___ votre autorisation. »',
      options: ['solliciter', 'commander', 'obliger', 'refuser'],
      correctIndex: 0,
      explanationAr: 'الفعل « solliciter » يعني التماس وطلب شيء باحترام وتأدب في الرسائل الرسمية.'
    },
    {
      id: 'fr-h-4',
      questionAr: 'اختر الرابط المنطقي الصحيح للسبب الإيجابي: « Il a réussi ___ ses efforts constants. »',
      promptTarget: 'Il a réussi ___ ses efforts constants.',
      options: ['à cause de', 'grâce à', 'malgré', 'pour que'],
      correctIndex: 1,
      explanationAr: 'نستخدم « grâce à » (بفضل) عندما تكون النتيجة إيجابية، و« à cause de » للنتيجة السلبية.'
    },
    {
      id: 'fr-h-5',
      questionAr: 'أي جملة صحيحة للتعبير عن الامتياز (La concession)؟',
      options: [
        "Bien qu'il est fatigué, il continue.",
        "Bien qu'il soit fatigué, il continue.",
        "Malgré qu'il soit fatigué, il continue.",
        'Bien que sa fatigue, il continue.'
      ],
      correctIndex: 1,
      explanationAr: 'الأداة « Bien que » تتبع دائماً بصيغة السبجونكتيف (soit)، بينما « Malgré » يتبعها اسم فقط.'
    },
    {
      id: 'fr-h-6',
      questionAr: 'استمع للجملة واختر معناها الدقيق بالعربية:',
      audioText: "C'est à cinq minutes d'ici à pied, juste en face de la mairie.",
      options: [
        'تستغرق خمس دقائق بالسيارة خلف المحطة',
        'تبعد خمس دقائق مشياً على الأقدام، مباشرة مقابل البلدية',
        'تفتح لمدة خمس ساعات بجانب المدرسة',
        'الحافلة تتأخر خمس دقائق عن الموعد'
      ],
      correctIndex: 1,
      explanationAr: '« à pied » تعني مشياً على الأقدام، و« juste en face de la mairie » تعني مباشرة مقابل مقر البلدية.'
    },
    {
      id: 'fr-h-7',
      questionAr: 'أكمل جملة الشرط وفق توافق الأزمنة: « Si j’avais plus de temps, je ___ tous ces romans. »',
      options: ['lis', 'lirai', 'lirais', 'ai lu'],
      correctIndex: 2,
      explanationAr: 'بعد « Si + Imparfait » (avais) يجب تصريف جواب الشرط في Conditionnel présent: « je lirais ».'
    },
    {
      id: 'fr-h-8',
      questionAr: 'ما الجواب المنطقي عندما يعتذر شخص قائلاً: « Veuillez m’excuser pour ce retard involontaire »؟',
      options: [
        'Ce n’est rien, je vous en prie.',
        'L’addition, s’il vous plaît.',
        'Tournez à droite au rond-point.',
        'Quel âge avez-vous ?'
      ],
      correctIndex: 0,
      explanationAr: '« Ce n’est rien, je vous en prie » تعني: لا عليك / لم يحدث شيء، تفضل.'
    },
    {
      id: 'fr-h-9',
      questionAr: 'أي صيغة تعبّر عن الهدف (Le but) عند اختلاف الفاعلين؟ « Le professeur parle lentement ___ tous les élèves comprennent. »',
      options: ['afin de', 'pour', 'pour que', 'grâce à'],
      correctIndex: 2,
      explanationAr: 'وجود فاعلين مختلفين (Le professeur ≠ tous les élèves) يفرض استعمال « pour que + subjonctif ».'
    },
    {
      id: 'fr-h-10',
      questionAr: 'ما معنى الصفة « Serviable » في سياق وصف شخص؟',
      promptTarget: 'Notre voisin est très serviable.',
      audioText: 'Notre voisin est très serviable.',
      options: ['أناني وغير متعاون', 'خدوم ومحب للمساعدة', 'متسرع وغاضب', 'خجول ومنطوٍ'],
      correctIndex: 1,
      explanationAr: '« Serviable » تعني شخص خدوم ومستعد دائماً لتقديم المساعدة.'
    },
    {
      id: 'fr-h-11',
      questionAr: 'اختر العبارة الأنسب لاختتام رسالة رسمية موجهة لمديرة مؤسسة:',
      options: [
        'À plus tard, madame !',
        "Je vous prie d'agréer, Madame la Directrice, l'expression de mes salutations distinguées.",
        'Grosses bises de ta collègue.',
        'Merci et bonne journée à toi.'
      ],
      correctIndex: 1,
      explanationAr: 'عبارة الختام الرسمية (Formule de politesse) تعيد ذكر صفة المرسل إليه (Madame la Directrice) بصيغة محترمة.'
    },
    {
      id: 'fr-h-12',
      questionAr: 'استمع للجملة وحدد الزمن المستعمل وقيمته:',
      audioText: 'La pluie tombait doucement quand un éclair illumina le ciel.',
      options: [
        'حدث مستمر (Imparfait) قطعه حدث مفاجئ قصير (Passé simple)',
        'حدثان متزامنان في المستقبل البسيط',
        'فعل أمر متبوع بنفي مطلق',
        'حدث أسبق في الماضي المركب'
      ],
      correctIndex: 0,
      explanationAr: '« tombait » في الماضي الناقص للوصف المستمر، و« illumina » في الماضي البسيط للحدث المفاجئ.'
    },
    {
      id: 'fr-h-13',
      questionAr: 'ما المقصود بـ « Un billet aller-retour »؟',
      promptTarget: "J'ai réservé un billet aller-retour.",
      options: ['تذكرة ذهاب فقط', 'تذكرة ذهاب وإياب', 'حجز فندقي لليلة واحدة', 'بطاقة تخفيض للطلبة'],
      correctIndex: 1,
      explanationAr: '« Aller » تعني الذهاب و« Retour » تعني العودة/الإياب.'
    },
    {
      id: 'fr-h-14',
      questionAr: 'أكمل العبارة للتعبير عن الرأي الشخصي بمستوى متقدم:',
      options: [
        'À mon avis, la lecture développe l’esprit critique.',
        'À mon temps, la lecture est grande.',
        'Pour mon côté, lire est un billet.',
        'Selon mon cahier, je pense vite.'
      ],
      correctIndex: 0,
      explanationAr: '« À mon avis » تعني « في رأيي » وهي صيغة أساسية لتقديم وجهة النظر.'
    },
    {
      id: 'fr-h-15',
      questionAr: 'ما معنى الفعل « Améliorer »؟',
      audioText: 'Améliorer son niveau en français',
      options: ['تأجيل أو إلغاء', 'تحسين وتطوير', 'نسيان أو إهمال', 'ترجمة حرفية'],
      correctIndex: 1,
      explanationAr: '« Améliorer » يعني حسّنَ أو طوّرَ.'
    },
    {
      id: 'fr-h-16',
      questionAr: 'اختر الجملة السليمة بعد « Malgré »:',
      options: [
        'Malgré il pleut, je sors.',
        'Malgré la pluie, je sors.',
        'Malgré que la pluie tombe, je sors.',
        'Malgré pleuvoir, je sors.'
      ],
      correctIndex: 1,
      explanationAr: 'حرف الجر « Malgré » يتبعه دائماً اسم مباشر دون « que ».'
    },
    {
      id: 'fr-h-17',
      questionAr: 'استمع واختر معنى عبارة « Parler couramment »:',
      audioText: 'Elle parle français couramment.',
      options: ['تتحدث الفرنسية بصعوبة بالغة', 'تتحدث الفرنسية بطلاقة', 'تكتب الفرنسية ببطء', 'تدرس الفرنسية في المساء'],
      correctIndex: 1,
      explanationAr: 'الظرف « couramment » مع اللغات يعني بطلاقة وسلاسة.'
    },
    {
      id: 'fr-h-18',
      questionAr: 'ما الجملة الصحيحة لتقديم نصيحة بأدب لشخص يريد إتقان اللغة؟',
      options: [
        'Tu devrais pratiquer un peu chaque jour.',
        'Tu dois jamais écouter les dialogues.',
        'Tu fais pas attention aux mots.',
        'Tu peux oublier tout demain.'
      ],
      correctIndex: 0,
      explanationAr: '« Tu devrais + infinitif » (ينبغي عليك أن...) صيغة مهذبة ومثالية لتقديم النصيحة.'
    },
    {
      id: 'fr-h-19',
      questionAr: 'أي أداة زمنية تتطلب صيغة « Subjonctif » بعدها؟',
      options: ['Pendant que', 'Après que', 'Avant que', 'Dès que'],
      correctIndex: 2,
      explanationAr: '« Avant que » (قبل أن) و« Jusqu’à ce que » (إلى أن) تتبعان دائماً بصيغة السبجونكتيف.'
    },
    {
      id: 'fr-h-20',
      questionAr: 'ما الترجمة الدقيقة لعبارة « Le travail régulier mène à la réussite »؟',
      audioText: 'Le travail régulier mène à la réussite.',
      options: [
        'العمل العشوائي يضيع الوقت',
        'العمل المنتظم يؤدي إلى النجاح',
        'النجاح لا يحتاج إلى تحضير',
        'الراحة أهم من المراجعة'
      ],
      correctIndex: 1,
      explanationAr: '« régulier » تعني منتظم و« mène à » تعني يؤدي إلى، و« la réussite » هي النجاح.'
    }
  ]
};
