// Passerelle Français 3AC — Bilingual Terms (FR + AR), Grammar Mindmaps, and Regional Exam Methodology
// Aligned strictly with Passerelle 3AC & Moroccan Official Reference Framework (الإطار المرجعي)

import type { TermDefinition, EssayMethodology } from './assistant3ACCompleteData';

// ==========================================
// 1. المفاهيم والقواعد والمصطلحات الرسمية (شرح مزدوج فرنسي + عربي)
// ==========================================

export const FRENCH_TERMS: TermDefinition[] = [
  // الدورة الأولى: Passerelle Semestre 1 (La Correspondance)
  {
    id: 'fr-t-1',
    term: 'La lettre conventionnelle | الرسالة الرسمية',
    lessonName: 'Passerelle S1 - Séquence 1 : الرسالة الرسمية',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est une lettre administrative adressée à un responsable en employant « vous », un registre soutenu et huit éléments obligatoires.\nAR : رسالة إدارية تُوجه إلى مسؤول باستعمال ضمير الاحترام « vous » وأسلوب رفيع وثمانية عناصر شكلية إلزامية."
  },
  {
    id: 'fr-t-2',
    term: 'La lettre personnelle / amicale | الرسالة الشخصية',
    lessonName: 'Passerelle S1 - Séquence 4 : الرسالة الشخصية',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est une lettre intime destinée à un ami ou à un proche, rédigée avec « tu » et sans rubrique « objet ».\nAR : رسالة ودية موجهة لصديق أو قريب، تُكتب بضمير المخاطب « tu » وبدون خانة الموضوع « objet »."
  },
  {
    id: 'fr-t-3',
    term: "L'émetteur / Expéditeur | المرسِل",
    lessonName: 'Passerelle S1 - Séquence 1 : الرسالة الرسمية',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est la personne qui rédige et envoie la lettre ; ses coordonnées figurent en haut à gauche.\nAR : الشخص أو الجهة التي تكتب الرسالة وتبعثها؛ وتوضع بياناته أعلى اليسار."
  },
  {
    id: 'fr-t-4',
    term: 'Le destinataire / Récepteur | المرسَل إليه',
    lessonName: 'Passerelle S1 - Séquence 1 : الرسالة الرسمية',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est la personne qui reçoit la lettre ; son titre s'écrit à droite sous la date précédé de « À ».\nAR : الشخص الذي يتلقى الرسالة؛ وتُكتب صفته جهة اليمين تحت التاريخ مسبوقة بـ « À »."
  },
  {
    id: 'fr-t-5',
    term: "L'objet | موضوع الرسالة",
    lessonName: 'Passerelle S1 - Séquence 1 : الرسالة الرسمية',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est une phrase nominale concise qui annonce le motif précis de la lettre conventionnelle.\nAR : جملة اسمية موجزة تعلن السبب الدقيق للرسالة الرسمية."
  },
  {
    id: 'fr-t-6',
    term: "La formule d'appel | عبارة النداء",
    lessonName: 'Passerelle S1 - Séquence 1 : الرسالة الرسمية',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est l'interpellation initiale adressée au destinataire suivie d'une virgule (ex. : Monsieur le Directeur,).\nAR : صيغة النداء الافتتاحية الموجهة للمرسَل إليه متبوعة بفاصلة (مثال: سيدي المدير،)."
  },
  {
    id: 'fr-t-7',
    term: 'La formule de politesse | عبارة الختام الرسمية',
    lessonName: 'Passerelle S1 - Séquence 1 : الرسالة الرسمية',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est la phrase finale respectueuse qui clôt la lettre en reprenant la formule d'appel.\nAR : الجملة الختامية المحترمة التي تنهي الرسالة مع إعادة ذكر صفة المرسل إليه."
  },
  {
    id: 'fr-t-8',
    term: 'Demander une autorisation | طلب الإذن',
    lessonName: 'Passerelle S1 - Séquence 1 : طلب الإذن',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est solliciter poliment la permission d'accomplir une action en utilisant le conditionnel ou « j'ai l'honneur de solliciter ».\nAR : التماس الترخيص بأدب للقيام بنشاط باستعمال صيغة الشرط أو « يشرفني أن ألتمس »."
  },
  {
    id: 'fr-t-9',
    term: "La lettre d'invitation | رسالة الدعوة",
    lessonName: 'Passerelle S1 - Séquence 2 : الدعوة والرد عليها',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est une correspondance qui convie un destinataire à un événement en précisant la date, l'heure et le lieu.\nAR : مراسلة تدعو مخاطباً لحضور نشاط مع تحديد التاريخ والساعة والمكان بدقة."
  },
  {
    id: 'fr-t-10',
    term: 'Remercier avec intensité | الشكر المكثف',
    lessonName: 'Passerelle S1 - Séquence 3 : الشكر والمتمنيات',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est exprimer sa gratitude avec force grâce à des adverbes d'intensité (infiniment, vivement) ou des noms valorisants.\nAR : التعبير عن الامتنان بقوة باستعمال ظروف التكثيف (جداً، بشدة) أو أسماء التقدير."
  },
  {
    id: 'fr-t-11',
    term: 'La lettre de réclamation | رسالة الشكاية',
    lessonName: 'Passerelle S1 - Séquence 4 : الشكاية والرسالة المفتوحة',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est une lettre officielle ferme mais polie qui signale un problème et demande une solution rapide.\nAR : رسالة رسمية حازمة ومهذبة تبلغ عن خلل معين وتلتمس حلاً سريعاً له."
  },
  {
    id: 'fr-t-12',
    term: 'La lettre ouverte | الرسالة المفتوحة',
    lessonName: 'Passerelle S1 - Séquence 4 : الشكاية والرسالة المفتوحة',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est une lettre publiée pour sensibiliser l'opinion publique à une cause sociale ou environnementale.\nAR : رسالة منشورة للعموم تهدف إلى توعية الرأي العام بقضية مجتمعية أو بيئية."
  },
  {
    id: 'fr-t-13',
    term: 'Les registres de langue | مستويات اللغة',
    lessonName: 'Passerelle S1 - Séquence 1 : مستويات اللغة',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : Ce sont les trois niveaux d'expression adaptés au contexte : familier (entre amis), courant (quotidien) et soutenu (administratif).\nAR : هي مستويات التعبير الثلاثة حسب المقام: مألوف (بين الأصدقاء)، عادي (يومي)، ورفيع (إداري وأدبي)."
  },
  {
    id: 'fr-t-14',
    term: 'Le conditionnel de politesse | شرط التأدب',
    lessonName: 'Passerelle S1 - Séquence 1 : طلب الإذن',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est l'emploi du conditionnel présent (pourriez-vous, je souhaiterais) pour formuler une demande ou un refus avec tact.\nAR : توظيف صيغة الشرط في الحاضر لصياغة الطلب أو الاعتذار بلباقة واحترام."
  },
  {
    id: 'fr-t-15',
    term: 'La situation de communication | وضعية التواصل',
    lessonName: 'Passerelle S1 - Séquence 1 : مستويات اللغة',
    unit: 'الدورة الأولى: المراسلات (La Correspondance)',
    definition: "FR : C'est l'ensemble des paramètres d'un message : qui parle, à qui, de quoi et dans quelle intention.\nAR : مجموع عناصر الخطاب التواصلي: من يتكلم، إلى من، عن ماذا، وبأي قصد."
  },

  // الدورة الثانية: Passerelle Semestre 2 (La Nouvelle & الإطار المرجعي)
  {
    id: 'fr-t-16',
    term: 'La nouvelle | القصة القصيرة',
    lessonName: 'Passerelle S2 - Séquence 1 : الخطاطة السردية',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : C'est un récit bref et réaliste centré sur une intrigue unique, peu de personnages et une fin souvent surprenante.\nAR : نص سردي قصير وواقعي يركز على عقدة واحدة وعدد قليل من الشخصيات ونهاية مفاجئة غالباً."
  },
  {
    id: 'fr-t-17',
    term: 'La situation initiale | الوضعية الأولية',
    lessonName: 'Passerelle S2 - Séquence 1 : الخطاطة السردية',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : C'est le début calme de l'histoire où sont présentés les personnages, le lieu et le temps à l'imparfait.\nAR : بداية القصة الهادئة التي تُقدم فيها الشخصيات والمكان والزمان غالباً بالماضي الناقص."
  },
  {
    id: 'fr-t-18',
    term: "L'élément perturbateur | الحدث الطارئ",
    lessonName: 'Passerelle S2 - Séquence 1 : الخطاطة السردية',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : C'est l'événement imprévu qui brise l'équilibre initial et déclenche les aventures au passé simple.\nAR : الحدث المفاجئ الذي يكسر الهدوء الأولي ويطلق مجرى الأحداث بالماضي البسيط."
  },
  {
    id: 'fr-t-19',
    term: 'Les péripéties | الأحداث والعقدة',
    lessonName: 'Passerelle S2 - Séquence 1 : الخطاطة السردية',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Ce sont les actions successives et les obstacles que le héros affronte pour résoudre le problème.\nAR : سلسلة الأفعال والعقبات المتتابعة التي يواجهها البطل لحل المشكل."
  },
  {
    id: 'fr-t-20',
    term: 'Le dénouement et la chute | الحل والنهاية المفاجئة',
    lessonName: 'Passerelle S2 - Séquence 4 : الحل والنهاية',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Le dénouement résout l'intrigue et la chute désigne une dernière phrase courte qui surprend le lecteur.\nAR : الحل ينهي العقدة، أما « La chute » فهي الخاتمة القصيرة المباغتة التي تفاجئ القارئ."
  },
  {
    id: 'fr-t-21',
    term: 'Le schéma actantiel | الخطاطة العاملية',
    lessonName: 'Passerelle S2 - Séquence 1 : الخطاطة السردية',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Il organise les six rôles du récit : sujet, objet, destinateur, destinataire, adjuvants et opposants.\nAR : نموذج يوزع أدوار القوى الست في القصة: الفاعل، الموضوع، المرسل، المستفيد، المساعدون، والمعرقلون."
  },
  {
    id: 'fr-t-22',
    term: 'La focalisation (point de vue) | وجهة النظر السردية',
    lessonName: 'Passerelle S2 - Séquence 2 : الوصف ووجهة النظر',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Elle distingue le narrateur omniscient (zéro), le point de vue d'un personnage (interne) et l'observateur extérieur (externe).\nAR : تميز بين الراوي العليم (zéro)، ونظر الشخصية المشاركة (interne)، والملاحظ الخارجي (externe)."
  },
  {
    id: 'fr-t-23',
    term: 'Le portrait physique et moral | الوصف الجسدي والمعنوي',
    lessonName: 'Passerelle S2 - Séquence 2 : الوصف ووجهة النظر',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Le portrait physique décrit l'aspect extérieur visible, tandis que le portrait moral révèle le caractère et les sentiments.\nAR : الوصف الجسدي يصف المظهر الخارجي المرئي، بينما يكشف الوصف المعنوي الطباع والمشاعر الداخلية."
  },
  {
    id: 'fr-t-24',
    term: 'La caractérisation | التوصيف النحوي',
    lessonName: 'Passerelle S2 - Séquence 2 : التوصيف والمقارنة',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : C'est l'enrichissement d'un nom par un adjectif qualificatif, un complément du nom ou une subordonnée relative.\nAR : إغناء الاسم وتحديده باستعمال النعت، أو المتمم الاسمي بحرف جر، أو جملة الصلة الموصولة."
  },
  {
    id: 'fr-t-25',
    term: "L'imparfait et le passé simple | أزمنة السرد",
    lessonName: 'Passerelle S2 - Séquence 1 : أزمنة السرد',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : L'imparfait sert à décrire et à exprimer la durée, tandis que le passé simple exprime les actions brèves et successives.\nAR : يُستعمل الماضي الناقص للوصف والاستمرار، بينما يعبر الماضي البسيط عن الأحداث القصيرة المتعاقبة."
  },
  {
    id: 'fr-t-26',
    term: 'Le plus-que-parfait | الماضي الأسبق',
    lessonName: 'Passerelle S2 - Séquence 1 : أزمنة السرد',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : C'est un temps composé (avait / était + participe passé) qui marque une action passée antérieure à une autre.\nAR : زمن مركب يدل على حدث وقع في الماضي قبل حدث ماضٍ آخر."
  },
  {
    id: 'fr-t-27',
    term: 'Les verbes introducteurs | أفعال التقديم في الحوار',
    lessonName: 'Passerelle S2 - Séquence 3 : الحوار في السرد',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Ce sont les verbes qui accompagnent le dialogue (demander, murmurer, s'exclamer, répliquer) pour indiquer le ton.\nAR : الأفعال المصاحبة للحوار لبيان نبرة المتكلم وحالته النفسية (سأل، همس، صاح، ردّ)."
  },
  {
    id: 'fr-t-28',
    term: 'La subordonnée de temps | الجملة الظرفية للزمن',
    lessonName: 'Passerelle S2 - Séquence 2 : الزمن',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Elle exprime l'antériorité (avant que + subjonctif), la simultanéité (pendant que + indicatif) ou la postériorité (après que + indicatif).\nAR : تعبر عن الأسبقية (avant que + سبجونكتيف)، أو التزامن (pendant que)، أو البعدية (après que + دلالة)."
  },
  {
    id: 'fr-t-29',
    term: 'La subordonnée de cause | جملة السبب',
    lessonName: 'Passerelle S2 - Séquence 2 : السبب والنتيجة',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Elle donne la raison d'un fait via parce que, car, comme (en début de phrase), grâce à (+) ou à cause de (-).\nAR : تبين علة الفعل عبر parce que، أو car، أو comme (أول الجملة)، أو grâce à (+)، أو à cause de (-)."
  },
  {
    id: 'fr-t-30',
    term: 'La subordonnée de conséquence | جملة النتيجة',
    lessonName: 'Passerelle S2 - Séquence 2 : السبب والنتيجة',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Elle exprime l'effet d'une action avec donc, si bien que, si + adjectif + que ou tant de + nom + que.\nAR : تبرز أثر الفعل باستعمال donc، أو si bien que، أو si + صفة + que، أو tant de + اسم + que."
  },
  {
    id: 'fr-t-31',
    term: 'La subordonnée de but | جملة الهدف',
    lessonName: 'Passerelle S2 - Séquence 3 : الهدف والسبجونكتيف',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Elle emploie « pour / afin de + infinitif » avec un seul sujet, et « pour que / afin que + subjonctif » avec deux sujets.\nAR : تستعمل « pour / afin de + مصدر » مع فاعل واحد، و« pour que / afin que + سبجونكتيف » عند اختلاف الفاعلين."
  },
  {
    id: 'fr-t-32',
    term: 'Le mode subjonctif | صيغة السبجونكتيف',
    lessonName: 'Passerelle S2 - Séquence 3 : الهدف والسبجونكتيف',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Mode verbal obligatoire après pour que, afin que, avant que, bien que, quoique et à condition que.\nAR : صيغة فعلية إلزامية بعد أدوات الهدف والأسبقية والامتياز والشرط المقيد."
  },
  {
    id: 'fr-t-33',
    term: "La concession et l'opposition | الامتياز والتعارض",
    lessonName: 'Passerelle S2 - Séquence 3 : التعارض والامتياز',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : On emploie bien que / quoique (+ subjonctif), malgré (+ nom) et même si / mais (+ indicatif).\nAR : نستعمل bien que / quoique (+ سبجونكتيف)، وmalgré (+ اسم فقط)، وmême si / mais (+ دلالة)."
  },
  {
    id: 'fr-t-34',
    term: 'La condition et l\'hypothèse | الشرط والفرضية',
    lessonName: 'Passerelle S2 - Séquence 3 : الشرط والفرضية',
    unit: 'الدورة الثانية: القصة القصيرة (La Nouvelle)',
    definition: "FR : Concordance avec « si » : Présent -> Futur | Imparfait -> Conditionnel présent | Plus-que-parfait -> Conditionnel passé.\nAR : توافق الأزمنة مع « si »: الحاضر ⬅️ المستقبل | الناقص ⬅️ الشرط الحاضر | الأسبق ⬅️ الشرط الماضي."
  }
];

// ==========================================
// 2. منهجية الامتحان الجهوي (مزدوجة اللغة فرنسية + عربية)
// ==========================================

export const FRENCH_EXAM_METHODOLOGY: EssayMethodology = {
  title: 'منهجية الامتحان الجهوي للفرنسية (20/20) | Méthodologie de l\'Examen Régional',
  steps: [
    {
      stepName: "1. Compréhension de l'écrit (6 pts) | منهجية فهم المقروء (6 نقاط)",
      description: "FR : Sécuriser les 6 points grâce à une lecture méthodique et au repérage précis.\nAR : ضمان نقط الفهم الست عبر القراءة المنظمة والاستخراج الدقيق من النص.",
      details: [
        "FR : Lisez le texte 3 fois du titre jusqu'à la source en bas de page. | AR : اقرأ النص 3 مرات من العنوان حتى المصدر أسفل الصفحة.",
        "FR : Justifiez toujours « Vrai ou Faux » en recopiant la phrase du texte entre guillemets (« ... »). | AR : علّل دائماً « صحيح أو خطأ » بنقل الجملة الشاهدة من النص بين مزدوجتين.",
        "FR : Ne laissez jamais la question de réaction personnelle vide ; donnez votre avis avec « À mon avis, ... car ... ». | AR : لا تترك سؤال الرأي الشخصي فارغاً؛ عبّر عن رأيك معللاً بـ « car » أو « parce que »."
      ]
    },
    {
      stepName: '2. Langue et communication (6 pts) | منهجية اللغة والتواصل (6 نقاط)',
      description: "FR : Maîtriser les rapports logiques, les modes verbaux et l'analyse des actes de parole.\nAR : ضبط الروابط المنطقية والصيغ الفعلية وتحليل وضعيات التواصل.",
      details: [
        "FR : Vérifiez si la phrase impose le subjonctif (pour que, avant que, bien que) ou un nom (malgré, à cause de). | AR : تحقق مما إذا كانت الأداة تفرض السبجونكتيف أم اسماً.",
        "FR : Contrôlez la concordance des temps avec « Si » avant de conjuguer le verbe. | AR : راقب قاعدة توافق الأزمنة مع « Si » قبل التصريف.",
        "FR : Dans le tableau de communication, précisez : Qui parle ? À qui ? Dans quel but ? | AR : في جدول التواصل حدد: المتكلم، المخاطَب، والقصد التواصلي."
      ]
    },
    {
      stepName: '3. Production écrite (8 pts) | منهجية الإنتاج الكتابي السردي (8 نقاط)',
      description: "FR : Rédiger un récit cohérent (début, suite ou fin de nouvelle) avec description et dialogue.\nAR : تحرير نص سردي متماسك (بداية، تتمة، أو نهاية قصة) مع وصف موجز وحوار.",
      details: [
        "FR : Gardez exactement les personnages et les temps du texte (imparfait + passé simple). | AR : حافظ بدقة على شخصيات النص وأزمنته (الناقص + الماضي البسيط).",
        "FR : Structurez votre copie : péripéties, bref dialogue bien ponctué, dénouement et morale finale. | AR : نظم تحريرك: الأحداث، حوار قصير مرقم، الحل، والمغزى النهائي.",
        "FR : Relisez pendant 10 minutes pour corriger l'orthographe et les accords. | AR : خصص 10 دقائق لمراجعة الإملاء والتطابق في الجنس والعدد."
      ]
    }
  ],
  fullExample: {
    subjectTitle: 'نموذج جهوي محلول | Sujet Régional Corrigé (FR + AR)',
    subjectContext: "« Un soir d'hiver, Nadia rentrait chez elle sous une pluie battante. Soudain, elle entendit un faible miaulement près d'un conteneur. C'était un petit chaton blessé à la patte. Bien qu'elle fût pressée, la collégienne décida de le sauver. »\n(في أمسية شتوية، كانت نادية عائدة إلى منزلها تحت مطر غزير. فجأة، سمعت مواءً خافتاً قرب حاوية. كان قطيطاً صغيراً مصاباً في رجله. ورغم أنها كانت مستعجلة، قررت التلميذة إنقاذه.)",
    instructions: [
      "1. Compréhension : Reliez le texte à son genre et relevez l'élément perturbateur. | الفهم: حدد نوع النص واستخرج الحدث الطارئ.",
      "2. Langue : Remplacez « Bien qu'elle fût pressée » par « Malgré + nom ». | اللغة: عوض الجملة بـ « Malgré + اسم ».",
      "3. Production : Rédigez la suite et la fin en 5 lignes. | الإنشاء: حرر التتمة والنهاية في 5 أسطر."
    ],
    analysis: [
      "FR : Temps employés : imparfait + passé simple. | AR : الأزمنة المستعملة: الماضي الناقص والماضي البسيط.",
      "FR : Rupture marquée par « Soudain ». | AR : التحول يبدأ بكلمة « Soudain »."
    ],
    sampleIntro: "FR : Type : Texte narratif (extrait d'une nouvelle). Élément perturbateur : « Soudain, elle entendit un faible miaulement près d'un conteneur. »\nAR : نوع النص: سردي (مقتطف من قصة قصيرة). الحدث الطارئ: « فجأة، سمعت مواءً خافتاً قرب حاوية. »",
    sampleBody: [
      "FR (Langue) : Malgré sa précipitation, la collégienne décida de le sauver.\nAR (اللغة) : رغم استعجالها (Malgré + اسم)، قررت التلميذة إنقاذه.",
      "FR (Suite) : Nadia enveloppa doucement le petit animal dans son écharpe chaude et courut chez le vétérinaire du quartier. Le médecin soigna la patte blessée et appliqua un bandage. « Ne t'inquiète pas, dit-il avec un sourire, il marchera bientôt ! »\nAR (التتمة) : لفّت نادية الحيوان الصغير برفق في وشاحها الدافئ وركضت نحو بيطري الحي. عالج الطبيب الرجل المصابة ووضع ضمادة قائلاً بابتسامة: « لا تقلقي، سيمشي قريباً! »"
    ],
    sampleConclusion: "FR (Fin) : Soulagée, Nadia ramena le chaton chez elle ; depuis ce jour, il devint son fidèle compagnon.\nAR (النهاية) : مطمئنةً، أعادت نادية القطيط إلى بيتها؛ ومنذ ذلك اليوم، صار رفيقها الوفي."
  },
  practiceExercise: {
    title: 'تمرين تطبيقي مزدوج | Exercice d\'entraînement (FR + AR)',
    subjectText: "FR : Reliez ces deux phrases par la cause (Comme), par le but (pour que) et transformez avec (Bien que) :\n« 1. Le vent souffle fort. Les bateaux restent au port. | 2. Le père explique calmement. Son fils comprend la leçon. | 3. Malgré son jeune âge, ce joueur est très adroit. »\nAR : 1) اربط بالسبب باستعمال Comme 2) اربط بالهدف باستعمال pour que 3) حوّل إلى Bien que.",
    task: "FR : Rédigez vos réponses avant de vérifier la correction détaillée. | AR : أجب في مسودتك ثم قارن مع التصحيح المفصل."
  },
  modelCorrection: {
    plan: "FR : Cause (Comme en tête) ⬅️ But (pour que + subj.) ⬅️ Concession (Bien que + subj.). | AR : السبب (Comme في البداية) ⬅️ الهدف (pour que + سبجونكتيف) ⬅️ الامتياز (Bien que + سبجونكتيف).",
    detailedResponse:
      "1. FR : Comme le vent souffle fort, les bateaux restent au port. | AR : بما أن الريح تهب بقوة، تبقى السفن في الميناء.\n2. FR : Le père explique calmement pour que son fils comprenne la leçon. | AR : يشرح الأب بهدوء لكي يفهم ابنه الدرس (comprendre ⬅️ comprenne في السبجونكتيف).\n3. FR : Bien qu'il soit jeune, ce joueur est très adroit. | AR : رغم أنه صغير السن، فإن هذا اللاعب ماهر جداً.",
    reasoning: "FR : Respect de la place de « Comme », du subjonctif après « pour que » (2 sujets) et après « Bien que ». | AR : احترام موقع « Comme » في الصدارة وصيغة السبجونكتيف بعد « pour que » و« Bien que »."
  }
};
