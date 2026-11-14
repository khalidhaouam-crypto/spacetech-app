// Passerelle Français 3AC — Semestre 2 (La Nouvelle & Examen Régional) — Séquences 1 à 4
// Every French sentence is paired with its exact Arabic translation (Français + العربية).

import type { FrenchLessonSummaryItem } from './frenchTypes3AC';

export const FRENCH_CYCLE2_SUMMARIES: FrenchLessonSummaryItem[] = [
  // ================= SÉQUENCE 1 (Semestre 2) =================
  {
    id: 'sum-fr-11',
    lessonNumber: 11,
    sequence: 'Séquence 1',
    title: '11 - القصة القصيرة: الخطاطة السردية والخطاطة العاملية',
    frenchTitle: 'La nouvelle : le schéma narratif et le schéma actantiel',
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Lecture',
    introduction: 'مدخل الدورة الثانية من مقرر Passerelle: دراسة بنية القصة القصيرة بمراحلها الخمس وعواملها الستة.',
    introductionBilingual: {
      fr: "Au second semestre de Passerelle, nous étudions la nouvelle : un récit court structuré en cinq étapes narratives et organisé autour de six forces actantielles.",
      ar: 'في الدورة الثانية من مقرر Passerelle، ندرس القصة القصيرة (La nouvelle): وهي نص سردي قصير مبني على خمس مراحل سردية وستة عوامل فاعلة.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Les cinq étapes du schéma narratif (مراحل الخطاطة السردية الخمس)',
        headingAr: '1. المراحل الخمس للخطاطة السردية',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "1. La situation initiale présente les personnages, le lieu et le temps dans un état de calme et d'équilibre (souvent à l'imparfait).",
            ar: '1. الوضعية الأولية (Situation initiale) تقدم الشخصيات والمكان والزمان في حالة هدوء وتوازن (غالباً بزمن الماضي الناقص Imparfait).'
          },
          {
            fr: "2. L'élément perturbateur (modificateur) est un fait soudain qui rompt l'équilibre et déclenche l'action (introduit par : soudain, tout à coup, un jour).",
            ar: '2. الحدث الطارئ (Élément perturbateur) هو واقعة مفاجئة تكسر التوازن وتطلق الأحداث (يُقدم بـ: فجأة، ذات يوم).'
          },
          {
            fr: "3. Les péripéties regroupent les actions, les obstacles et les réactions du héros pour résoudre le problème.",
            ar: '3. الأحداث والعقدة (Péripéties) تضم أفعال البطل والعقبات وردود أفعاله لحل المشكل.'
          },
          {
            fr: "4. Le dénouement marque le moment décisif où l'obstacle est surmonté ou la crise se résout.",
            ar: '4. الحل (Dénouement) يمثل اللحظة الحاسمة التي يُتجاوز فيها العائق وتنتهي الأزمة.'
          },
          {
            fr: "5. La situation finale rétablit un nouvel équilibre (heureux ou malheureux) et clôt le récit.",
            ar: '5. الوضعية النهائية (Situation finale) تعيد توازناً جديداً (سعيداً أو حزيناً) وتغلق القصة.'
          }
        ]
      },
      {
        headingFr: '2. Les six rôles du schéma actantiel (الخطاطة العاملية)',
        headingAr: '2. الأدوار الستة في الخطاطة العاملية',
        colorClass: 'border-purple-500 bg-purple-50/70 dark:bg-purple-950/30 text-purple-950 dark:text-purple-100',
        items: [
          {
            fr: "Le sujet est le héros qui agit pour atteindre un objectif précis, appelé l'objet.",
            ar: 'الفاعل (Sujet) هو البطل الذي يتحرك لبلوغ هدف محدد يُسمى الموضوع (Objet).'
          },
          {
            fr: "Le destinateur pousse le sujet à agir, et le destinataire profite du résultat final.",
            ar: 'المرسِل (Destinateur) يدفع البطل للفعل، والمستفيد (Destinataire) يجني ثمرة النتيجة النهائية.'
          },
          {
            fr: "Les adjuvants aident le héros dans sa quête, tandis que les opposants freinent son action.",
            ar: 'المساعدون (Adjuvants) يعينون البطل في مسعاه، بينما المعرقلون (Opposants) يعيقون فعله.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Un matin calme, Salim marchait vers l'école. Tout à coup, un cri retentit derrière le mur.",
        ar: 'في صباح هادئ، كان سليم يسير نحو المدرسة (وضعية أولية). فجأة، دوى صراخ خلف الجدار (حدث طارئ).'
      },
      {
        fr: "Dans ce récit, le courage et le chien fidèle sont des adjuvants du héros.",
        ar: 'في هذه القصة، تُعد الشجاعة والكلب الوفي من العوامل المساعدة للبطل.'
      }
    ],
    examTipBilingual: {
      fr: "À l'examen régional, repérez les adverbes comme « Soudain » ou le passage de l'imparfait au passé simple pour délimiter l'élément perturbateur.",
      ar: 'في الامتحان الجهوي، ركز على كلمات مثل « Soudain » أو الانتقال من Imparfait إلى Passé simple لتحديد بداية الحدث الطارئ.'
    },
    keyTakeawaysBilingual: [
      { fr: '5 étapes : Situation initiale ⬅️ Perturbateur ⬅️ Péripéties ⬅️ Dénouement ⬅️ Finale', ar: '5 مراحل سردية متسلسلة من التوازن الأول إلى النهائي' },
      { fr: 'Adjuvant (aide) ≠ Opposant (obstacle)', ar: 'المساعد (يعين البطل) ≠ المعرقل (يمنع البطل)' }
    ],
    miniExerciseBilingual: {
      questionFr: "À quelle étape du schéma narratif appartient cette phrase : « Soudain, une tempête violente s'abattit sur le village » ?",
      questionAr: 'إلى أي مرحلة من الخطاطة السردية تنتمي الجملة التالية: « فجأة، هبت عاصفة عنيفة على القرية »؟',
      answerFr: "Elle appartient à l'élément perturbateur, annoncé par « Soudain » et le verbe au passé simple « s'abattit ».",
      answerAr: 'تنتمي إلى الحدث الطارئ (Élément perturbateur)، لوجود كلمة « Soudain » والفعل في الماضي البسيط « s\'abattit ».'
    },
    conclusion: 'فهم البنية السردية والعاملية أساس قراءة وتحرير كل قصص الدورة الثانية.',
    conclusionBilingual: {
      fr: "Le schéma narratif constitue la charpente indispensable pour analyser et rédiger toute nouvelle au brevet.",
      ar: 'تشكل الخطاطة السردية العمود الفقري اللازم لتحليل وكتابة أي قصة في الامتحان الجهوي.'
    }
  },
  {
    id: 'sum-fr-12',
    lessonNumber: 12,
    sequence: 'Séquence 1',
    title: '12 - المؤشرات الزمانية والمكانية وتحديد الإطار السردي',
    frenchTitle: 'Les indicateurs spatio-temporels et la localisation',
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Langue & Communication',
    introduction: 'توظيف مؤشرات الزمان والمكان لتثبيت أحداث القصة وتنظيم الوصف الفضائي في السرد.',
    introductionBilingual: {
      fr: "Dans Passerelle, les indicateurs de temps et de lieu servent à situer précisément l'histoire et à orienter le lecteur dans l'espace du récit.",
      ar: 'في مقرر Passerelle، تُمكّن المؤشرات الزمانية والمكانية من تحديد إطار القصة بدقة وتوجيه القارئ داخل فضاء السرد.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Les indicateurs temporels (المؤشرات الزمانية)',
        headingAr: '1. مؤشرات تحديد الزمان وترتيب الأحداث',
        colorClass: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100',
        items: [
          {
            fr: "Pour situer le moment initial : autrefois, jadis, un matin d'automne, il y a longtemps, par une nuit d'hiver.",
            ar: 'لتحديد لحظة البداية: قديماً، في قديم الزمان، في صباح خريفي، منذ زمن بعيد، في ليلة شتوية.'
          },
          {
            fr: "Pour marquer l'enchaînement des événements : d'abord, ensuite, puis, aussitôt, peu après, enfin, dès lors.",
            ar: 'لإبراز تسلسل الأحداث: أولاً، بعد ذلك، ثم، فوراً، بعد قليل، أخيراً، منذ تلك اللحظة.'
          }
        ]
      },
      {
        headingFr: '2. Les localisateurs spatiaux (المؤشرات المكانية)',
        headingAr: '2. مؤشرات تنظيم المكان ووصفه',
        colorClass: 'border-teal-500 bg-teal-50/70 dark:bg-teal-950/30 text-teal-950 dark:text-teal-100',
        items: [
          {
            fr: "Les prépositions et adverbes de lieu organisent la description : au premier plan, à l'arrière-plan, au centre, à droite, au-dessus de.",
            ar: 'حروف وظروف المكان تنظم الوصف: في الواجهة الأمامية، في الخلفية، في الوسط، على اليمين، فوق.'
          },
          {
            fr: "On utilise aussi des verbes de localisation comme : se trouver, s'étendre, se dresser, surplomber.",
            ar: 'نستعمل أيضاً أفعال التموقع مثل: يوجد، يمتد، ينتصب، يطل على.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Au loin, derrière les collines embrumées, se dressait une vieille tour abandonnée.",
        ar: 'من بعيد، خلف التلال الضبابية، كان ينتصب برج قديم مهجور.'
      },
      {
        fr: "D'abord il frappa à la porte, puis il attendit quelques instants devant le seuil.",
        ar: 'أولاً طرق الباب، ثم انتظر لبضع لحظات أمام العتبة.'
      }
    ],
    examTipBilingual: {
      fr: "Quand une question demande « Où et quand se passe la scène ? », relevez exactement les compléments circonstanciels de lieu et de temps du premier paragraphe.",
      ar: 'عند سؤال « أين ومتى تقع الأحداث؟ »، استخرج بدقة المفاعيل الظرفية للمكان والزمان من الفقرة الأولى.'
    },
    keyTakeawaysBilingual: [
      { fr: 'Indicateurs de temps = chronologie du récit', ar: 'مؤشرات الزمان = التسلسل الزمني للقصة' },
      { fr: 'Localisateurs spatiaux = organisation du décor', ar: 'مؤشرات المكان = تنظيم الفضاء والمشهد' }
    ],
    miniExerciseBilingual: {
      questionFr: "Relevez deux indicateurs spatiaux et un indicateur temporel : « Hier soir, au fond du jardin, une lampe brillait sous le vieux chêne. »",
      questionAr: 'استخرج مؤشرين للمكان ومؤشراً للزمان من الجملة: « Hier soir, au fond du jardin, une lampe brillait sous le vieux chêne. »',
      answerFr: "Temps : « Hier soir » | Lieu : « au fond du jardin » et « sous le vieux chêne ».",
      answerAr: 'الزمان: « Hier soir » (مساء أمس) | المكان: « au fond du jardin » (في عمق الحديقة) و« sous le vieux chêne » (تحت شجرة البلوط العجوز).'
    },
    conclusion: 'تنظيم الزمان والمكان يجعل السرد واضحاً وقابلاً للتخيل لدى القارئ.',
    conclusionBilingual: {
      fr: "Les repères spatio-temporels donnent de la cohérence et du réalisme à la nouvelle.",
      ar: 'تمنح المعالم الزمانية والمكانية التماسك والواقعية للقصة القصيرة.'
    }
  },
  {
    id: 'sum-fr-13',
    lessonNumber: 13,
    sequence: 'Séquence 1',
    title: '13 - أزمنة السرد: الماضي الناقص، الماضي البسيط، والماضي الأسبق',
    frenchTitle: 'Les temps du récit : Imparfait, Passé simple et Plus-que-parfait',
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Langue & Communication',
    introduction: 'قاعدة أساسية في مقرر Passerelle والامتحان الجهوي: كيفية التمييز والتصريف في أزمنة السرد الأدبية الثلاثة.',
    introductionBilingual: {
      fr: "Les temps du récit permettent de distinguer le décor (imparfait), les actions principales (passé simple) et les faits antérieurs (plus-que-parfait).",
      ar: 'تمكّن أزمنة السرد من التمييز بين الخلفية الوصفية (Imparfait)، والأحداث الرئيسية (Passé simple)، والأحداث الأسبق (Plus-que-parfait).'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. L\'imparfait et le passé simple (الماضي الناقص مقابل الماضي البسيط)',
        headingAr: '1. المقارنة الوظيفية والصرفية بين Imparfait و Passé simple',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "L'imparfait (-ais, -ais, -ait, -ions, -iez, -aient) exprime la description, l'habitude passée ou une action qui dure en arrière-plan.",
            ar: 'يعبر الماضي الناقص (Imparfait) عن الوصف، أو العادة في الماضي، أو حدث مستمر في الخلفية.'
          },
          {
            fr: "Le passé simple (-a / -èrent ; -it / -irent ; -ut / -urent) exprime une action brève, soudaine ou des actions successives de premier plan.",
            ar: 'يعبر الماضي البسيط (Passé simple) عن حدث قصير أو مفاجئ أو أفعال متتالية في صدارة القصة.'
          },
          {
            fr: "Verbes irréguliers fréquents au passé simple (il / ils) : être (fut/furent), avoir (eut/eurent), faire (fit/firent), voir (vit/virent), venir (vint/vinrent), prendre (prit/prirent).",
            ar: 'أفعال شاذة متكررة في الماضي البسيط (هو / هم): كان (fut)، ملك (eut)، فعل (fit)، رأى (vit)، جاء (vint)، أخذ (prit).'
          }
        ]
      },
      {
        headingFr: '2. Le plus-que-parfait (الماضي الأسبق)',
        headingAr: '2. تركيب ووظيفة الماضي الأسبق (Plus-que-parfait)',
        colorClass: 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-100',
        items: [
          {
            fr: "Le plus-que-parfait se forme avec l'auxiliaire « être » ou « avoir » à l'imparfait suivi du participe passé (ex. : Il avait perdu / Elle était partie).",
            ar: 'يتكون الماضي الأسبق من المساعد (être أو avoir) في Imparfait متبوعاً باسم المفعول (مثال: كان قد ضيّع / كانت قد غادرت).'
          },
          {
            fr: "Il exprime l'antériorité : une action passée qui s'est produite avant une autre action déjà passée.",
            ar: 'يعبر عن الأسبقية (Antériorité): أي حدث وقع قبل حدث آخر في الماضي.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Il dormait profondément (imparfait) quand le réveil sonna (passé simple).",
        ar: 'كان نائماً بعمق (حدث مستمر) عندما رنّ المنبه (حدث قاطع مفاجئ).'
      },
      {
        fr: "Il chercha les clés qu'il avait posées (plus-que-parfait) sur la table la veille.",
        ar: 'بحث عن المفاتيح التي كان قد وضعها (حدث أسبق) على الطاولة في الليلة السابقة.'
      }
    ],
    examTipBilingual: {
      fr: "Mémorisez les troisièmes personnes du singulier et du pluriel au passé simple, car la majorité des nouvelles sont racontées à la 3e personne (il / elle).",
      ar: 'احفظ تصريف الضمير الغائب المفرد والجمع في الماضي البسيط، لأن أغلب القصص تُروى بضمير الغائب (il / elle).'
    },
    keyTakeawaysBilingual: [
      { fr: 'Imparfait = Description / Habitude / Durée', ar: 'Imparfait = وصف / عادة / استمرارية' },
      { fr: 'Passé simple = Action brève / Soudaine / Successive', ar: 'Passé simple = حدث قصير / مفاجئ / متتابع' },
      { fr: 'Plus-que-parfait = Action antérieure dans le passé', ar: 'Plus-que-parfait = حدث وقع قبل آخر في الماضي' }
    ],
    miniExerciseBilingual: {
      questionFr: "Conjuguez au temps convenable (imparfait ou passé simple) : « Le vent (souffler) fort lorsque l'arbre (tomber) brusquement. »",
      questionAr: 'صرف الفعلين في الزمن المناسب (Imparfait أو Passé simple): « Le vent (souffler) fort lorsque l\'arbre (tomber) brusquement. »',
      answerFr: "Le vent soufflait (imparfait - action continue) fort lorsque l'arbre tomba (passé simple - action soudaine) brusquement.",
      answerAr: 'كانت الريح تهب بقوة (Imparfait: استمرارية) عندما سقطت الشجرة فجأة (Passé simple: حدث مفاجئ).'
    },
    conclusion: 'الإتقان الدقيق لتعاقب أزمنة السرد يمنحك تفوقاً واضحاً في اللغة والإنشاء.',
    conclusionBilingual: {
      fr: "Savoir alterner imparfait et passé simple garantit la cohérence temporelle de votre production écrite.",
      ar: 'إتقان المزاوجة بين الماضي الناقص والماضي البسيط يضمن السلامة الزمنية لإنتاجك الكتابي.'
    }
  },
  {
    id: 'sum-fr-14',
    lessonNumber: 14,
    sequence: 'Séquence 1',
    title: '14 - الإنتاج الكتابي: كتابة بداية القصة (الوضعية الأولية + الحدث الطارئ)',
    frenchTitle: "Production écrite : Rédiger l'incipit (situation initiale et élément perturbateur)",
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Production Écrite',
    introduction: 'ورشة كتابة مستهل القصة القصيرة (L\'incipit) في Passerelle بالجمع بين الهدوء الأولي والحدث المفاجئ.',
    introductionBilingual: {
      fr: "Cette activité de production écrite forme l'élève à rédiger le début d'une nouvelle en enchaînant harmonieusement la situation initiale et l'élément perturbateur.",
      ar: 'يدرب هذا النشاط الكتابي التلميذ على تحرير بداية قصة قصيرة مع الربط السلس بين الوضعية الأولية والحدث الطارئ.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Réussir la situation initiale (إنجاح الوضعية الأولية)',
        headingAr: '1. شروط كتابة وضعية أولية متكاملة',
        colorClass: 'border-teal-500 bg-teal-50/70 dark:bg-teal-950/30 text-teal-950 dark:text-teal-100',
        items: [
          {
            fr: "Présenter le personnage principal (nom, âge ou métier, caractère) dans son milieu habituel.",
            ar: 'تقديم الشخصية الرئيسية (الاسم، السن أو المهنة، الطبع) داخل وسطها المعتاد.'
          },
          {
            fr: "Préciser le temps et le lieu à l'aide d'indicateurs spatio-temporels et conjuguer les verbes à l'imparfait.",
            ar: 'تحديد الزمان والمكان بمؤشرات مناسبة وتصريف الأفعال في الماضي الناقص (Imparfait).'
          }
        ]
      },
      {
        headingFr: '2. Introduire l\'élément perturbateur (إدراج الحدث الطارئ)',
        headingAr: '2. الانتقال إلى الحدث المحرك والمفاجئ',
        colorClass: 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/30 text-amber-950 dark:text-amber-100',
        items: [
          {
            fr: "Créer une rupture nette avec un connecteur temporel : « Un soir », « Tout à coup », « Soudain », « Brusquement ».",
            ar: 'إحداث قطيعة واضحة باستعمال رابط زمني: « ذات مساء »، « فجأة »، « على حين غرة ».'
          },
          {
            fr: "Passer immédiatement au passé simple pour exprimer l'événement inattendu qui modifie le destin du héros.",
            ar: 'الانتقال فوراً إلى الماضي البسيط (Passé simple) للتعبير عن الواقعة غير المتوقعة التي تقلب وضع البطل.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Il était une fois un vieux menuisier qui vivait paisiblement à Fès. Un soir d'hiver, quelqu'un frappa violemment à sa porte.",
        ar: 'كان يا ما كان نجار عجوز يعيش بسلام في فاس (وضعية أولية). في ليلة شتوية، طرق أحدهم بابه بعنف (حدث طارئ).'
      }
    ],
    examTipBilingual: {
      fr: "Si l'examen donne la suite d'une histoire et demande d'en imaginer le début, vérifiez bien les noms des personnages et le lieu pour rester logique.",
      ar: 'إذا قدم الامتحان بقية قصة وطلب منك تخيل بدايتها، تحقق جيداً من أسماء الشخصيات والمكان لضمان التناسق.'
    },
    keyTakeawaysBilingual: [
      { fr: 'Situation initiale = Qui + Où + Quand + Imparfait', ar: 'الوضعية الأولية = الشخصية + المكان + الزمان + Imparfait' },
      { fr: 'Rupture = Soudain / Tout à coup + Passé simple', ar: 'التحول = مؤشر مفاجأة + Passé simple' }
    ],
    miniExerciseBilingual: {
      questionFr: "Ajoutez un élément perturbateur à cette situation initiale : « Chaque matin, Youssef traversait le pont de bois pour rejoindre son collège. »",
      questionAr: 'أضف حدثاً طارئاً مناسباً لهذه الوضعية الأولية: « كل صباح، كان يوسف يعبر الجسر الخشبي للالتحاق بإعداديته. »',
      answerFr: "Un matin pluvieux, alors qu'il avançait sur le pont, une planche céda soudain sous ses pieds et il aperçut un objet brillant dans la rivière.",
      answerAr: 'في صباح ممطر، وبينما كان يتقدم فوق الجسر، تكسرت لوحة خشبية فجأة تحت قدميه ولمح شيئاً لامعاً في النهر.'
    },
    conclusion: 'البداية المشوقة تمهد لأحداث القصة وتجذب القارئ منذ السطور الأولى.',
    conclusionBilingual: {
      fr: "Un incipit réussi capte l'attention du lecteur et annonce clairement l'intrigue de la nouvelle.",
      ar: 'البداية الناجحة تجذب انتباه القارئ وتمهد بوضوح لعقدة القصة.'
    }
  },

  // ================= SÉQUENCE 2 (Semestre 2) =================
  {
    id: 'sum-fr-15',
    lessonNumber: 15,
    sequence: 'Séquence 2',
    title: '15 - الوصف في السرد: وصف الشخصيات والأمكنة ووجهة النظر',
    frenchTitle: 'La description (portrait physique/moral, lieu) et la focalisation',
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Lecture',
    introduction: 'الوحدة الثانية من الدورة الثانية في Passerelle تتعمق في فن الوصف (Portrait et Lieu) وأنواع الرؤية السردية.',
    introductionBilingual: {
      fr: "La deuxième séquence de la nouvelle analyse l'art de décrire un personnage ou un cadre spatial et identifie le point de vue du narrateur.",
      ar: 'تُحلل الوحدة الثانية من القصة فن وصف الشخصية أو الفضاء المكاني، وتحدد زاوية نظر الراوي.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Le portrait physique et moral (الوصف الجسدي والمعنوي)',
        headingAr: '1. التمييز بين الوصف الخارجي والنفسي والإيجابي/السلبي',
        colorClass: 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/30 text-amber-950 dark:text-amber-100',
        items: [
          {
            fr: "Le portrait physique décrit l'apparence extérieure visible : la taille, le visage, le regard, les vêtements et la démarche.",
            ar: 'الوصف الجسدي (Physique) يصف المظهر الخارجي المرئي: القامة، الوجه، النظرة، اللباس، والمشية.'
          },
          {
            fr: "Le portrait moral révèle le caractère, les qualités, les défauts et les sentiments (généreux, timide, rusé, courageux).",
            ar: 'الوصف المعنوي (Moral) يكشف الطباع والخصال والعيوب والمشاعر (كريم، خجول، ماكر، شجاع).'
          },
          {
            fr: "La description peut être valorisante (méliorative) pour susciter la sympathie, ou dévalorisante (péjorative) pour inspirer la crainte ou le rejet.",
            ar: 'قد يكون الوصف مدحياً إيجابياً (Valorisant) لجلب التعاطف، أو قدحياً سلبياً (Péjoratif) لإثارة الخوف أو النفور.'
          }
        ]
      },
      {
        headingFr: '2. Les trois focalisations (وجهات النظر السردية الثلاث)',
        headingAr: '2. زوايا الرؤية السردية في النص',
        colorClass: 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-100',
        items: [
          {
            fr: "Focalisation zéro (narrateur omniscient) : le narrateur sait tout sur les personnages, leur passé et leurs pensées secrètes.",
            ar: 'الرؤية من الخلف (Focalisation zéro): الراوي عليم يعرف كل شيء عن الشخصيات وماضيها وأفكارها الخفية.'
          },
          {
            fr: "Focalisation interne : l'histoire est racontée à travers les yeux et les sensations d'un seul personnage.",
            ar: 'الرؤية المصاحبة (Interne): تُحكى القصة عبر نظرة ومشاعر شخصية واحدة فقط.'
          },
          {
            fr: "Focalisation externe : le narrateur observe de l'extérieur comme une caméra sans connaître les pensées des personnages.",
            ar: 'الرؤية من الخارج (Externe): يراقب الراوي من الخارج كآلة تصوير دون معرفة أفكار الشخصيات.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "C'était un garçon grand aux yeux étincelants, mais d'une timidité extrême.",
        ar: 'كان فتى طويل القامة ذا عينين لامعتين (وصف جسدي)، لكنه شديد الخجل (وصف معنوي).'
      },
      {
        fr: "Le vieil avare inspirait la pitié avec son manteau usé et son air soupçonneux.",
        ar: 'كان البخيل العجوز يثير الشفقة بمعطفه البالي وهيئته المريبة (وصف قدحي).'
      }
    ],
    examTipBilingual: {
      fr: "Pour distinguer physique et moral dans un tableau d'examen, demandez-vous : peut-on le voir sur une photo (physique) ou dans le comportement (moral) ?",
      ar: 'للتمييز بين الجسدي والمعنوي في جدول الامتحان، اسأل نفسك: هل يُرى في صورة (جسدي) أم يُفهم من السلوك (معنوي)؟'
    },
    keyTakeawaysBilingual: [
      { fr: 'Portrait physique (extérieur) + moral (intérieur)', ar: 'الوصف الجسدي (خارجي) + المعنوي (داخلي)' },
      { fr: 'Mélioratif (positif) ≠ Péjoratif (négatif)', ar: 'وصف إيجابي مدحي ≠ وصف سلبي قدحي' },
      { fr: 'Focalisation : Zéro / Interne / Externe', ar: 'وجهة النظر: عليم / مصاحب / خارجي' }
    ],
    miniExerciseBilingual: {
      questionFr: "Classez ces adjectifs en portrait physique et portrait moral : « loyal – mince – barbu – ambitieux ».",
      questionAr: 'صنف هذه الصفات إلى جسدية (Physique) ومعنوية (Moral): « loyal – mince – barbu – ambitieux ».',
      answerFr: "Physique : mince (نحيف), barbu (ملتحٍ) | Moral : loyal (مخلص), ambitieux (طموح).",
      answerAr: 'جسدي: نحيف، ملتحٍ | معنوي: مخلص، طموح.'
    },
    conclusion: 'الوصف المتنوع يمنح الشخصيات عمقاً نفسياً ويساعد في فهم دوافعها.',
    conclusionBilingual: {
      fr: "La description enrichit le récit en donnant vie aux personnages et aux décors.",
      ar: 'يُثري الوصف السرد عبر إضفاء الحياة على الشخصيات والأمكنة.'
    }
  },
  {
    id: 'sum-fr-16',
    lessonNumber: 16,
    sequence: 'Séquence 2',
    title: '16 - التوصيف النحوي والمقارنة والتشبيه',
    frenchTitle: 'La caractérisation et l\'expression de la comparaison',
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Langue & Communication',
    introduction: 'أدوات نعت الموصوف في الفرنسية (النعت، المضاف إليه، جملة الصلة) وصيغ المقارنة والتشبيه.',
    introductionBilingual: {
      fr: "Cette leçon présente les outils grammaticaux permettant de caractériser un être ou un objet et d'établir des comparaisons précises.",
      ar: 'يعرض هذا الدرس الأدوات النحوية لتوصيف كائن أو شيء، وعقد مقارنات وتشبيهات دقيقة.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Les outils de la caractérisation (أدوات التوصيف / النعت)',
        headingAr: '1. وسائل نعت الاسم وتحديده في الوصف',
        colorClass: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100',
        items: [
          {
            fr: "L'adjectif qualificatif s'accorde en genre et en nombre avec le nom qu'il caractérise (ex. : une maison blanche).",
            ar: 'النعت (Adjectif) يتبع المنعوت في الجنس والعدد (مثال: منزل أبيض / بيت بيضاء).'
          },
          {
            fr: "Le complément du nom s'introduit par « de, à, en, sans » (ex. : un sac en cuir, une fille aux yeux noirs).",
            ar: 'المتمم الاسمي يرتبط بالاسم عبر حروف الجر « de, à, en, sans » (مثال: حقيبة من جلد، فتاة ذات عيون سوداء).'
          },
          {
            fr: "La proposition subordonnée relative commence par un pronom relatif (qui, que, dont, où) : « L'homme qui portait un chapeau... ».",
            ar: 'جملة الصلة (Subordonnée relative) تبدأ باسم موصول (qui, que, dont, où): « الرجل الذي كان يرتدي قبعة... ».'
          }
        ]
      },
      {
        headingFr: '2. L\'expression de la comparaison (المقارنة والتشبيه)',
        headingAr: '2. درجات المقارنة والتشبيه في الجملة',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "Supériorité : plus + adjectif + que | Égalité : aussi + adjectif + que (ou autant de + nom + que) | Infériorité : moins + adjectif + que.",
            ar: 'التفوق (plus... que) | التساوي (aussi + صفة + que أو autant de + اسم + que) | النقصان (moins... que).'
          },
          {
            fr: "Formes irrégulières obligatoires : le comparatif de « bon » est « meilleur » (jamais *plus bon*) et celui de « bien » est « mieux ».",
            ar: 'حالتان شاذتان إلزاميتان: صيغة التفضيل من « bon » هي « meilleur » ومن « bien » هي « mieux ».'
          },
          {
            fr: "La similitude s'exprime avec : comme, tel que, semblable à, ressembler à, pareil à.",
            ar: 'يُعبر عن التشبيه باستعمال: مثل (comme)، شبيه بـ (semblable à)، يشبه (ressembler à).'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Ce roman est meilleur que le précédent, mais il est aussi captivant qu'un film.",
        ar: 'هذه الرواية أفضل من السابقة، وهي مشوقة بقدر فيلم سينمائي.'
      },
      {
        fr: "Il avait autant de courage que son frère aîné.",
        ar: 'كان لديه من الشجاعة بقدر ما لدى أخيه الأكبر.'
      }
    ],
    examTipBilingual: {
      fr: "Attention au piège fréquent : employez « aussi + adjectif + que » et « autant de + nom + que ». Ne dites jamais *plus bon*.",
      ar: 'انتبه للفخ المتكرر: استعمل « aussi » مع الصفة و« autant de » مع الاسم. ولا تقل أبداً « plus bon » بل « meilleur ».'
    },
    keyTakeawaysBilingual: [
      { fr: '3 caractérisants : Adjectif + Complément du nom + Relative', ar: '3 أدوات توصيف: النعت + المتمم بحرف جر + جملة الصلة' },
      { fr: 'Bon ⬅️ meilleur | Bien ⬅️ mieux', ar: 'مقارنة الصفات الشاذة: bon -> meilleur | bien -> mieux' }
    ],
    miniExerciseBilingual: {
      questionFr: "Corrigez la faute dans chaque phrase : « 1. Mon devoir est plus bon que le tien. / 2. Il a aussi d'expérience que toi. »",
      questionAr: 'صحح الخطأ في كل جملة: « 1. Mon devoir est plus bon que le tien. / 2. Il a aussi d\'expérience que toi. »',
      answerFr: "1. Mon devoir est meilleur que le tien. / 2. Il a autant d'expérience que toi.",
      answerAr: '1. واجبي أفضل (meilleur) من واجبك. / 2. لديه من الخبرة بقدر ما لديك (autant d\'expérience).'
    },
    conclusion: 'أدوات التوصيف والمقارنة تمنح الوصف دقة جمالية عالية وتمنع الأخطاء التركيبية.',
    conclusionBilingual: {
      fr: "Maîtriser la caractérisation et la comparaison affine l'expression descriptive écrite et orale.",
      ar: 'إتقان التوصيف والمقارنة يصقل التعبير الوصفي كتابةً ومشافهة.'
    }
  },
  {
    id: 'sum-fr-17',
    lessonNumber: 17,
    sequence: 'Séquence 2',
    title: '17 - الجملة الظرفية للزمن (الأسبقية، التزامن، البعدية)',
    frenchTitle: "La subordonnée circonstancielle de temps",
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Langue & Communication',
    introduction: 'درس نحوي رئيسي في الإطار المرجعي: الربط الزمني بين جملتين واختيار الصيغة الصحيحة (Subjonctif أو Indicatif).',
    introductionBilingual: {
      fr: "La subordonnée de temps précise si l'action principale se déroule avant, pendant ou après l'action subordonnée.",
      ar: 'تحدد الجملة الظرفية الزمنية ما إذا كان الفعل الرئيسي يقع قبل، أو أثناء، أو بعد الفعل الثانوي.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Les trois rapports temporels (العلاقات الزمنية الثلاث)',
        headingAr: '1. حالات الزمن الثلاث وأدواتها وصيغ أفعالها',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "Antériorité (action principale avant) : avant que, jusqu'à ce que, en attendant que + SUBJONCTIF (ou avant de + infinitif si même sujet).",
            ar: 'الأسبقية (الحدث الأول يقع قبل الثاني): avant que، jusqu\'à ce que + صيغة السبجونكتيف (أو avant de + مصدر عند اتحاد الفاعل).'
          },
          {
            fr: "Simultanéité (en même temps) : quand, lorsque, pendant que, tandis que, au moment où + INDICATIF.",
            ar: 'التزامن (في الوقت نفسه): quand، lorsque، pendant que، tandis que + صيغة الدلالة (Indicatif).'
          },
          {
            fr: "Postériorité (action principale après) : après que, dès que, aussitôt que, depuis que + INDICATIF (ou après + infinitif passé).",
            ar: 'البعدية (الحدث الرئيسي يقع بعد الثاني): après que، dès que، aussitôt que + صيغة الدلالة (Indicatif).'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Rentre chez toi avant qu'il ne fasse nuit. (Subjonctif après avant que)",
        ar: 'ادخل إلى منزلك قبل أن يحل الظلام (صيغة السبجونكتيف بعد avant que).'
      },
      {
        fr: "Dès que le train s'arrêta, les voyageurs descendirent sur le quai. (Indicatif)",
        ar: 'بمجرد أن توقف القطار، نزل المسافرون إلى الرصيف (صيغة الدلالة).'
      },
      {
        fr: "Avant de sortir, vérifie tes affaires. (Même sujet -> Infinitif)",
        ar: 'قبل الخروج، تفقد أغراضك (نفس الفاعل ⬅️ مصدر).'
      }
    ],
    examTipBilingual: {
      fr: "Piège classique du régional : « avant que » exige le subjonctif, tandis que « après que » demande l'indicatif !",
      ar: 'فخ كلاسيكي في الجهوي: « avant que » تستوجب السبجونكتيف، بينما « après que » تستوجب الدلالة (Indicatif)!'
    },
    keyTakeawaysBilingual: [
      { fr: 'Avant que / Jusqu\'à ce que + Subjonctif', ar: 'قبل أن / إلى أن + Subjonctif' },
      { fr: 'Pendant que / Après que / Dès que + Indicatif', ar: 'بينما / بعد أن / حالما + Indicatif' },
      { fr: 'Même sujet : avant de + infinitif', ar: 'نفس الفاعل: avant de + مصدر' }
    ],
    miniExerciseBilingual: {
      questionFr: "Mettez le verbe entre parenthèses au mode et au temps qui conviennent : « Attends ici jusqu'à ce que ton frère (revenir). »",
      questionAr: 'صرف الفعل بين قوسين في الصيغة والزمن المناسبين: « Attends ici jusqu\'à ce que ton frère (revenir). »',
      answerFr: "Attends ici jusqu'à ce que ton frère revienne (Subjonctif présent).",
      answerAr: 'انتظر هنا إلى أن يعود أخوك (revienne في Subjonctif présent).'
    },
    conclusion: 'معرفة الصيغة الفعلية بعد كل رابط زمني تحمي التلميذ من فقدان نقط اللغة.',
    conclusionBilingual: {
      fr: "Associer chaque locution temporelle au bon mode verbal évite les erreurs de conjugaison à l'examen.",
      ar: 'ربط كل أداة زمنية بصيغة الفعل الصحيحة يجنّب أخطاء التصريف في الامتحان.'
    }
  },
  {
    id: 'sum-fr-18',
    lessonNumber: 18,
    sequence: 'Séquence 2',
    title: '18 - التعبير عن السبب والنتيجة (La Cause et la Conséquence)',
    frenchTitle: "L'expression de la cause et de la conséquence",
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Langue & Communication',
    introduction: 'إتقان الربط المنطقي بين العلة والأثر في الجمل المركبة والبسيطة حسب الإطار المرجعي الجهوي.',
    introductionBilingual: {
      fr: "Ce cours regroupe deux notions complémentaires essentielles : la cause (qui explique le fait) et la conséquence (qui montre son résultat).",
      ar: 'يجمع هذا الدرس مفهومين متكاملين أساسيين: السبب (الذي يفسر الواقعة) والنتيجة (التي تبرز أثرها).'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Exprimer la cause (التعبير عن السبب)',
        headingAr: '1. أدوات السبب ومواضعها في الجملة',
        colorClass: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100',
        items: [
          {
            fr: "Dans la phrase complexe : « parce que » et « car » (au milieu), « puisque » (cause évidente), et « comme » toujours en début de phrase.",
            ar: 'في الجملة المركبة: « parce que » و« car » (في الوسط)، « puisque » (سبب معروف)، و« comme » دائماً في بداية الجملة.'
          },
          {
            fr: "Avec un groupe nominal : « grâce à » (cause positive favorable), « à cause de » (cause négative), « faute de » (manque) et « en raison de ».",
            ar: 'مع المجموعة الاسمية: « grâce à » (بفضل - سبب إيجابي)، « à cause de » (بسبب - سبب سلبي)، « faute de » (لنقص) و« en raison de ».'
          }
        ]
      },
      {
        headingFr: '2. Exprimer la conséquence (التعبير عن النتيجة)',
        headingAr: '2. أدوات النتيجة وتراكيب الشدة والكثرة',
        colorClass: 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-100',
        items: [
          {
            fr: "Connecteurs logiques directs : donc, alors, par conséquent, c'est pourquoi, si bien que, de sorte que (+ indicatif).",
            ar: 'الروابط المنطقية المباشرة: إذن (donc)، وبالتالي (par conséquent)، ولهذا (c\'est pourquoi)، بحيث (si bien que).'
          },
          {
            fr: "Structures d'intensité : « si / tellement + adjectif + que », « tellement de / tant de + nom + que » et « trop... pour + infinitif / pour que + subjonctif ».",
            ar: 'تراكيب الشدة: « si / tellement + صفة + que »، و« tellement de / tant de + اسم + que »، و« trop... pour ».'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Comme la route était glissante, le conducteur a ralenti. (Comme en tête de phrase)",
        ar: 'بما أن الطريق كانت زلقة، خفف السائق سرعته (Comme في الصدارة).'
      },
      {
        fr: "Il a remporté le tournoi grâce à son entraînement quotidien.",
        ar: 'فاز بالبطولة بفضل تدريبه اليومي (سبب إيجابي).'
      },
      {
        fr: "L'orage était si violent que toutes les rues ont été inondées.",
        ar: 'كانت العاصفة عنيفة جداً لدرجة أن جميع الشوارع غمرتها المياه (نتيجة مع الشدة).'
      }
    ],
    examTipBilingual: {
      fr: "Ne placez jamais « comme » au milieu de la phrase pour exprimer la cause, et distinguez « grâce à » (positif) de « à cause de » (négatif).",
      ar: 'لا تضع « comme » أبداً في وسط الجملة للتعبير عن السبب، وميز دائماً بين « grâce à » (إيجابي) و« à cause de » (سلبي).'
    },
    keyTakeawaysBilingual: [
      { fr: 'Comme = toujours en début de phrase', ar: 'Comme = في أول الجملة فقط' },
      { fr: 'Grâce à (+) ≠ À cause de (-) + Nom', ar: 'بفضل (إيجابي) ≠ بسبب (سلبي) + اسم' },
      { fr: 'Si + adjectif + que ≠ Tant de + nom + que', ar: 'Si مع الصفة ≠ Tant de مع الاسم' }
    ],
    miniExerciseBilingual: {
      questionFr: "Reliez ces deux propositions par la cause (avec « comme ») puis par la conséquence (avec « si... que ») : « Ce roman est long. Je ne peux pas le lire en un jour. »",
      questionAr: 'اربط الجملتين بالسبب باستعمال « Comme » ثم بالنتيجة باستعمال « si... que »: « Ce roman est long. Je ne peux pas le lire en un jour. »',
      answerFr: "Cause : Comme ce roman est long, je ne peux pas le lire en un jour. | Conséquence : Ce roman est si long que je ne peux pas le lire en un jour.",
      answerAr: 'السبب: بما أن هذه الرواية طويلة، لا يمكنني قراءتها في يوم واحد. | النتيجة: هذه الرواية طويلة جداً لدرجة أنني لا أستطيع قراءتها في يوم واحد.'
    },
    conclusion: 'فهم العلاقة العكسية بين السبب والنتيجة يسهل تحويل الجمل في سؤال اللغة.',
    conclusionBilingual: {
      fr: "Passer aisément de la cause à la conséquence permet de réussir toutes les transformations syntaxiques du brevet.",
      ar: 'الانتقال بسلاسة من السبب إلى النتيجة يمكّن من حل جميع أسئلة التحويل التركيبي في الامتحان.'
    }
  },

  // ================= SÉQUENCE 3 (Semestre 2) =================
  {
    id: 'sum-fr-19',
    lessonNumber: 19,
    sequence: 'Séquence 3',
    title: '19 - الحوار داخل السرد: علامات الترقيم وأفعال التقديم',
    frenchTitle: 'Le dialogue dans le récit : ponctuation et verbes introducteurs',
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Lecture',
    introduction: 'الوحدة الثالثة من الدورة الثانية في Passerelle تدرس إدماج الحوار داخل السرد بعلاماته وأفعال القول الدالة.',
    introductionBilingual: {
      fr: "La troisième séquence montre comment insérer un dialogue vivant dans une nouvelle en respectant sa ponctuation et en variant les verbes introducteurs.",
      ar: 'تبين الوحدة الثالثة كيفية إدراج حوار حي داخل القصة القصيرة مع احترام علامات ترقيمه وتنويع أفعال القول.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. La ponctuation obligatoire du dialogue (علامات ترقيم الحوار)',
        headingAr: '1. قواعد ترقيم الحوار المباشر في السرد',
        colorClass: 'border-teal-500 bg-teal-50/70 dark:bg-teal-950/30 text-teal-950 dark:text-teal-100',
        items: [
          {
            fr: "Les deux-points (:) annoncent le début des paroles rapportées.",
            ar: 'النقطتان الرأسيتان (:) تسبقان بداية الكلام المنقول.'
          },
          {
            fr: "Les guillemets (« ... ») encadrent l'ensemble du dialogue du début jusqu'à la fin.",
            ar: 'المزدوجتان (« ... ») تحيطان بمجموع كلام الحوار من البداية إلى النهاية.'
          },
          {
            fr: "Le tiret (—) se place au début de chaque réplique pour signaler un changement d'interlocuteur.",
            ar: 'العارضة (—) توضع في بداية كل سطر للإشارة إلى تغير الشخص المتكلم.'
          }
        ]
      },
      {
        headingFr: '2. Varier les verbes introducteurs de parole (تنويع أفعال القول)',
        headingAr: '2. دلالات أفعال القول والحالة النفسية للشخصية',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "Pour informer ou répondre : déclarer, affirmer, expliquer, répondre, répliquer, rétorquer.",
            ar: 'للإخبار أو الرد: صرح (déclarer)، أكد (affirmer)، شرح (expliquer)، ردّ (répliquer).'
          },
          {
            fr: "Pour questionner : demander, interroger, questionner | Pour prier : supplier, implorer.",
            ar: 'للسؤال: استفسر (interroger) | وللتوسل: توسل (supplier)، تضرع (implorer).'
          },
          {
            fr: "Pour traduire l'émotion : murmurer, chuchoter (peur/secret) ; s'exclamer, crier, hurler (colère/surprise).",
            ar: 'للتعبير عن الانفعال: همس (murmurer)، وشوش (chuchoter)؛ أو صرخ (crier)، صاح متعجباً (s\'exclamer).'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Le détective demanda d'une voix calme : « Où étiez-vous hier soir ? »",
        ar: 'سأل المحقق بصوت هادئ: « أين كنتم مساء أمس؟ »'
      },
      {
        fr: "— Je n'ai rien vu ! murmura le témoin apeuré.",
        ar: '— لم أرَ شيئاً! همس الشاهد الخائف (مع قلب الفاعل في جملة القول المعترضة).'
      }
    ],
    examTipBilingual: {
      fr: "Quand le verbe introducteur est placé au milieu ou après la réplique (proposition incise), l'inversion du sujet est obligatoire : « dit-il », « répondit l'enfant ».",
      ar: 'عندما يأتي فعل القول في الوسط أو النهاية (جملة معترضة)، يصبح قلب الفاعل إلزامياً: « dit-il » أو « répondit l\'enfant ».'
    },
    keyTakeawaysBilingual: [
      { fr: 'Ponctuation : (:) puis « ... » et (—) à chaque changement de locuteur', ar: 'الترقيم: النقطتان + المزدوجتان + العارضة عند كل متكلم' },
      { fr: 'Inversion obligatoire dans la proposition incise', ar: 'قلب الفاعل إلزامي في الجملة المعترضة' }
    ],
    miniExerciseBilingual: {
      questionFr: "Remplacez « dit » par un verbe plus expressif : « Sors d'ici immédiatement ! dit le gardien furieux. »",
      questionAr: 'عوّض فعل القول المحايد « dit » بفعل معبّر عن الغضب: « اخرج من هنا فوراً! قال الحارس الغاضب. »',
      answerFr: "« Sors d'ici immédiatement ! » hurla (ou cria / rugit) le gardien furieux.",
      answerAr: '« اخرج من هنا فوراً! » صرخ (أو زأر) الحارس الغاضب.'
    },
    conclusion: 'إدراج حوار متقن يضفي حيوية على الأحداث ويبرز مشاعر الشخصيات.',
    conclusionBilingual: {
      fr: "Un dialogue bien ponctué dynamise le récit et révèle la psychologie des personnages.",
      ar: 'يُنشّط الحوار السليم مجرى السرد ويكشف نفسية الشخصيات.'
    }
  },
  {
    id: 'sum-fr-20',
    lessonNumber: 20,
    sequence: 'Séquence 3',
    title: '20 - التعبير عن الهدف وصيغة السبجونكتيف (Le But & Le Subjonctif)',
    frenchTitle: "L'expression du but et l'emploi du subjonctif présent",
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Langue & Communication',
    introduction: 'تحديد الغاية من الفعل والقاعدة الفاصلة بين المصدر والسبجونكتيف حسب اتحاد الفاعل أو اختلافه.',
    introductionBilingual: {
      fr: "L'expression du but indique l'intention poursuivie par le sujet ; son mode verbal dépend directement du nombre de sujets dans la phrase.",
      ar: 'يعبّر أسلوب الهدف عن الغاية التي يسعى إليها الفاعل؛ وتعتمد صيغة الفعل فيه مباشرة على عدد الفاعلين في الجملة.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Même sujet ou deux sujets différents ? (نفس الفاعل أم فاعلان؟)',
        headingAr: '1. القاعدة الذهبية لاختيار Infinitif أو Subjonctif',
        colorClass: 'border-teal-500 bg-teal-50/70 dark:bg-teal-950/30 text-teal-950 dark:text-teal-100',
        items: [
          {
            fr: "Si les deux verbes ont le même sujet, on utilise : pour, afin de, dans le but de, de peur de + INFINITIF.",
            ar: 'إذا كان للفعليْن نفس الفاعل، نستعمل: pour، afin de، dans le but de، de peur de + المصدر (Infinitif).'
          },
          {
            fr: "Si les deux verbes ont deux sujets différents, on utilise : pour que, afin que, de peur que (+ ne) + SUBJONCTIF.",
            ar: 'إذا اختلف الفاعلان، نستعمل: pour que، afin que، de peur que + صيغة السبجونكتيف (Subjonctif).'
          }
        ]
      },
      {
        headingFr: '2. Formation du subjonctif présent (تكوين الحاضر السبجونكتيف)',
        headingAr: '2. قاعدة التصريف وأهم الأفعال الشاذة في الامتحان',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "Règle générale : radical de la 3e personne du pluriel au présent + -e, -es, -e, -ions, -iez, -ent (ex. : qu'il finisse).",
            ar: 'القاعدة العامة: جذر الضمير (Ils) في الحاضر + النهايات (-e, -es, -e, -ions, -iez, -ent)، مثال: qu\'il finisse.'
          },
          {
            fr: "Verbes irréguliers indispensables : être (qu'il soit), avoir (qu'il ait), faire (qu'il fasse), aller (qu'il aille), pouvoir (qu'il puisse), savoir (qu'il sache).",
            ar: 'أفعال شاذة لا غنى عنها: يكون (soit)، يملك (ait)، يفعل (fasse)، يذهب (aille)، يستطيع (puisse)، يعلم (sache).'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Il court vite pour attraper le train. (Même sujet -> infinitif)",
        ar: 'يجري بسرعة لكي يلحق بالقطار (نفس الفاعل ⬅️ مصدر).'
      },
      {
        fr: "Le guide parle fort afin que tous les touristes l'entendent. (Deux sujets -> subjonctif)",
        ar: 'يتكلم المرشد بصوت عالٍ لكي يسمعه جميع السياح (فاعلان مختلفان ⬅️ سبجونكتيف).'
      }
    ],
    examTipBilingual: {
      fr: "Vérifiez toujours qui fait l'action dans les deux propositions : deux sujets différents après « pour que » imposent obligatoirement le subjonctif.",
      ar: 'تحقق دائماً من فاعل الجملتين: وجود فاعلين مختلفين بعد « pour que » يفرض صيغة السبجونكتيف دون استثناء.'
    },
    keyTakeawaysBilingual: [
      { fr: '1 sujet ⬅️ pour / afin de / de peur de + Infinitif', ar: 'فاعل واحد ⬅️ مصدر بعد pour / afin de' },
      { fr: '2 sujets ⬅️ pour que / afin que + Subjonctif', ar: 'فاعلان ⬅️ سبجونكتيف بعد pour que / afin que' }
    ],
    miniExerciseBilingual: {
      questionFr: "Reliez ces deux phrases en exprimant le but : « L'entraîneur donne des conseils. L'équipe gagne le match. »",
      questionAr: 'اربط الجملتين للتعبير عن الهدف: « المدرب يقدم نصائح. الفريق يفوز بالمباراة. »',
      answerFr: "L'entraîneur donne des conseils pour que (ou afin que) l'équipe gagne le match.",
      answerAr: 'يقدم المدرب نصائح لكي يفوز الفريق بالمباراة (فاعلان مختلفان ⬅️ pour que + Subjonctif).'
    },
    conclusion: 'الربط بين الهدف والسبجونكتيف من الركائز الثابتة في امتحانات الثالثة إعدادي.',
    conclusionBilingual: {
      fr: "Maîtriser le choix entre infinitif et subjonctif garantit les points de conjugaison et de grammaire.",
      ar: 'إتقان الاختيار بين المصدر والسبجونكتيف يضمن نقط الصرف والتركيب.'
    }
  },
  {
    id: 'sum-fr-21',
    lessonNumber: 21,
    sequence: 'Séquence 3',
    title: '21 - التعبير عن التعارض والامتياز / الاستدراك (Opposition & Concession)',
    frenchTitle: "L'expression de l'opposition et de la concession",
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Langue & Communication',
    introduction: 'المقارنة بين فكرتين متناقضتين (Opposition) والتعبير عن نتيجة غير متوقعة رغم العائق (Concession).',
    introductionBilingual: {
      fr: "La concession exprime un fait contraire à ce que l'on attendait, tandis que l'opposition confronte deux réalités différentes sans contradiction logique.",
      ar: 'يعبّر الامتياز/الاستدراك (Concession) عن نتيجة تخالف المتوقع، بينما تقارن المعارضة (Opposition) بين واقعين مختلفين.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Les outils et leur mode ou classe grammaticale (الأدوات وقواعدها)',
        headingAr: '1. تصنيف أدوات التعارض والاستدراك حسب ما يتبعها',
        colorClass: 'border-purple-500 bg-purple-50/70 dark:bg-purple-950/30 text-purple-950 dark:text-purple-100',
        items: [
          {
            fr: "Suivis obligatoirement du SUBJONCTIF : bien que, quoique, encore que (ex. : Bien qu'il soit malade, il travaille).",
            ar: 'متبوعة وجوباً بالسبجونكتيف: bien que، quoique (مثال: رغم أنه مريض، فإنه يعمل).'
          },
          {
            fr: "Suivis obligatoirement d'un NOM ou pronom : malgré, en dépit de (Ne jamais écrire *malgré que* !).",
            ar: 'متبوعة وجوباً باسم أو ضمير: malgré، en dépit de (ممنوع تماماً كتابة *malgré que*!).'
          },
          {
            fr: "Suivis de l'INDICATIF : même si, alors que, tandis que, ainsi que les coordonnants mais, pourtant, cependant, néanmoins.",
            ar: 'متبوعة بصيغة الدلالة (Indicatif): même si، alors que، بينما (tandis que)، وأدوات العطف لكن/مع ذلك (mais, pourtant, cependant).'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Bien qu'il pleuve très fort, les bénévoles poursuivent leur mission. (Subjonctif)",
        ar: 'رغم أن المطر يهطل بغزارة، يواصل المتطوعون مهمتهم (سبجونكتيف بعد Bien que).'
      },
      {
        fr: "Malgré la forte pluie, les bénévoles poursuivent leur mission. (Nom)",
        ar: 'رغم المطر الغزير، يواصل المتطوعون مهمتهم (اسم بعد Malgré).'
      },
      {
        fr: "Même s'il fait froid, nous sortirons faire du sport. (Indicatif)",
        ar: 'حتى لو كان الجو بارداً، سنخرج لممارسة الرياضة (دلالة بعد Même si).'
      }
    ],
    examTipBilingual: {
      fr: "Exercice roi du brevet : passer de « Bien que + verbe » à « Malgré + groupe nominal » en transformant le verbe ou l'adjectif en nom.",
      ar: 'التمرين الأكثر شيوعاً في الجهوي: التحويل من « Bien que + فعل » إلى « Malgré + اسم » عبر تحويل الفعل أو الصفة إلى اسم.'
    },
    keyTakeawaysBilingual: [
      { fr: 'Bien que / Quoique + Subjonctif', ar: 'Bien que / Quoique + سبجونكتيف' },
      { fr: 'Malgré / En dépit de + Nom uniquement', ar: 'Malgré / En dépit de + اسم فقط' },
      { fr: 'Même si / Alors que / Mais + Indicatif', ar: 'Même si / Alors que + صيغة الدلالة' }
    ],
    miniExerciseBilingual: {
      questionFr: "Remplacez « Malgré » par « Bien que » : « Malgré son courage, le voyageur eut peur dans la forêt. »",
      questionAr: 'عوّض « Malgré » بـ « Bien que » في الجملة: « رغم شجاعته، شعر المسافر بالخوف في الغابة. »',
      answerFr: "Bien qu'il fût courageux (ou Bien qu'il soit courageux), le voyageur eut peur dans la forêt.",
      answerAr: 'رغم أنه كان شجاعاً، شعر المسافر بالخوف في الغابة (تصريف être في السبجونكتيف).'
    },
    conclusion: 'ضبط الفوارق الصارمة بين أدوات الاستدراك يحقق نسبة نجاح عالية في أسئلة اللغة.',
    conclusionBilingual: {
      fr: "Distinguer les constructions avec nom, indicatif ou subjonctif sécurise les points de langue.",
      ar: 'التمييز بين التراكيب التي تتطلب اسماً أو دلالة أو سبجونكتيف يؤمن نقط مكون اللغة.'
    }
  },
  {
    id: 'sum-fr-22',
    lessonNumber: 22,
    sequence: 'Séquence 3',
    title: '22 - التعبير عن الشرط والفرضية: حالات « Si » الثلاث',
    frenchTitle: "L'expression de la condition et de l'hypothèse",
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Langue & Communication',
    introduction: 'قواعد تناظر الأزمنة مع أداة الشرط « Si » وأدوات الشرط الأخرى حسب الإطار المرجعي.',
    introductionBilingual: {
      fr: "La subordonnée de condition présente un fait indispensable pour qu'une action se réalise ; la concordance des temps avec « si » obéit à trois règles fixes.",
      ar: 'تعرض الجملة الشرطية شرطاً لازماً لتحقق الفعل الرئيسي؛ ويخضع تناظر الأزمنة مع أداة « Si » لثلاث قواعد ثابتة.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. La concordance des temps avec « Si » (توافق الأزمنة الثلاثي مع Si)',
        headingAr: '1. القواعد الثلاث الذهبية للشرط بـ « Si »',
        colorClass: 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/30 text-rose-950 dark:text-rose-100',
        items: [
          {
            fr: "Cas 1 (Condition réalisable) : Si + Présent de l'indicatif ⬅️ Futur simple (ex. : Si tu révises, tu réussiras).",
            ar: 'الحالة 1 (شرط قابل للتحقق): Si + الحاضر ⬅️ المستقبل البسيط (مثال: إذا راجعتَ، فستنجح).'
          },
          {
            fr: "Cas 2 (Hypothèse irréelle au présent) : Si + Imparfait ⬅️ Conditionnel présent (ex. : Si tu révisais, tu réussirais).",
            ar: 'الحالة 2 (فرضية خيالية في الحاضر): Si + الماضي الناقص ⬅️ الشرط الحاضر (مثال: لو راجعتَ، لنجحتَ).'
          },
          {
            fr: "Cas 3 (Regret ou irréel du passé) : Si + Plus-que-parfait ⬅️ Conditionnel passé (ex. : Si tu avais révisé, tu aurais réussi).",
            ar: 'الحالة 3 (ندم أو فرضية في الماضي): Si + الماضي الأسبق ⬅️ الشرط الماضي (مثال: لو كنت قد راجعتَ، لكنتَ قد نجحتَ).'
          }
        ]
      },
      {
        headingFr: '2. Les autres subordonnants de condition (أدوات شرط أخرى)',
        headingAr: '2. أدوات الشرط وصيغ أفعالها',
        colorClass: 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-100',
        items: [
          {
            fr: "Avec le SUBJONCTIF : à condition que, pourvu que, à moins que (شريطة أن / ما لم).",
            ar: 'مع السبجونكتيف: à condition que، pourvu que (شريطة أن)، à moins que (ما لم).'
          },
          {
            fr: "Avec le CONDITIONNEL : au cas où, dans l'hypothèse où (في حال ما إذا).",
            ar: 'مع الشرط (Conditionnel): au cas où، dans l\'hypothèse où (في حالة إذا).'
          },
          {
            fr: "Avec l'INFINITIF ou un NOM : à condition de + infinitif ; en cas de / sans + nom.",
            ar: 'مع المصدر أو الاسم: à condition de + مصدر؛ en cas de / sans + اسم.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Si nous protégeons les forêts, la biodiversité survivra. (Présent -> Futur)",
        ar: 'إذا حمينا الغابات، فسيستمر التنوع البيولوجي.'
      },
      {
        fr: "Si j'étais oiseau, je survolerais les montagnes de l'Atlas. (Imparfait -> Conditionnel présent)",
        ar: 'لو كنتُ طائراً، لحلقت فوق جبال الأطلس.'
      },
      {
        fr: "Tu peux emprunter ce livre à condition que tu en prennes soin. (Subjonctif)",
        ar: 'يمكنك استعارة هذا الكتاب شريطة أن تعتني به.'
      }
    ],
    examTipBilingual: {
      fr: "Règle absolue : la proposition introduite par « si » conditionnel ne se met JAMAIS au futur ni au conditionnel !",
      ar: 'قاعدة مطلقة: الجملة التابعة لـ « si » الشرطية لا يأتي فعلها أبداً لا في المستقبل (Futur) ولا في الشرط (Conditionnel)!'
    },
    keyTakeawaysBilingual: [
      { fr: 'Si + Présent -> Futur | Si + Imparfait -> Cond. présent', ar: 'توافق: الحاضر ⬅️ المستقبل | الناقص ⬅️ الشرط الحاضر' },
      { fr: 'À condition que / Pourvu que + Subjonctif', ar: 'à condition que + صيغة السبجونكتيف' }
    ],
    miniExerciseBilingual: {
      questionFr: "Conjuguez le verbe entre parenthèses : « Si vous étiez arrivés à l'heure, vous (voir) le début du spectacle. »",
      questionAr: 'صرف الفعل بين قوسين: « لو كنتم قد وصلتم في الوقت المحدد، لرأيتم بداية العرض. »',
      answerFr: "vous auriez vu (Conditionnel passé car le verbe après Si est au plus-que-parfait).",
      answerAr: 'vous auriez vu (صيغة الشرط الماضي Conditionnel passé لأن الفعل بعد Si في الماضي الأسبق).'
    },
    conclusion: 'حفظ الجدول الثلاثي لتوافق « Si » يحسم إحدى أكثر القواعد وروداً في الامتحان الجهوي.',
    conclusionBilingual: {
      fr: "La maîtrise des trois systèmes hypothétiques assure la réussite aux exercices de concordance des temps.",
      ar: 'إتقان الحالات الشرطية الثلاث يضمن النجاح في تمارين توافق الأزمنة.'
    }
  },

  // ================= SÉQUENCE 4 (Semestre 2 - Finalisation & Brevet) =================
  {
    id: 'sum-fr-23',
    lessonNumber: 23,
    sequence: 'Séquence 4',
    title: '23 - الحل والنهاية المفاجئة ووضعيات التواصل للامتحان الجهوي',
    frenchTitle: 'Le dénouement, la chute et les situations de communication du brevet',
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Lecture',
    introduction: 'الوحدة الرابعة من Passerelle تركز على نهاية القصة القصيرة (Dénouement / Chute) ومهارات التواصل المرتبطة بالروابط المنطقية.',
    introductionBilingual: {
      fr: "La dernière séquence de Passerelle examine la résolution et la chute de la nouvelle, tout en réinvestissant les actes de parole du second semestre.",
      ar: 'تتناول الوحدة الأخيرة من Passerelle مرحلة الحل والنهاية المفاجئة في القصة القصيرة، مع استثمار أفعال الكلام للدورة الثانية.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Le dénouement et la chute (الحل والنهاية المفاجئة)',
        headingAr: '1. كيف تنتهي القصة القصيرة؟',
        colorClass: 'border-purple-500 bg-purple-50/70 dark:bg-purple-950/30 text-purple-950 dark:text-purple-100',
        items: [
          {
            fr: "Le dénouement apporte une réponse à l'intrigue, suivi d'une situation finale calme (heureuse, triste ou morale).",
            ar: 'يقدم الحل (Dénouement) جواباً لعقدة القصة، متبوعاً بوضعية نهائية هادئة (سعيدة، حزينة، أو حاملة لعبرة).'
          },
          {
            fr: "La chute est une fin brève et totalement inattendue qui surprend le lecteur aux dernières lignes de la nouvelle.",
            ar: 'النهاية المفاجئة (Chute) هي خاتمة موجزة وغير متوقعة بتاتاً تفاجئ القارئ في السطور الأخيرة.'
          }
        ]
      },
      {
        headingFr: '2. Situations de communication du 2e semestre (وضعيات التواصل الجهوية)',
        headingAr: '2. استثمار العلاقات المنطقية في جدول التواصل',
        colorClass: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100',
        items: [
          {
            fr: "Justifier un acte par la cause : « Un élève explique à son professeur qu'il est en retard à cause d'une panne de bus. »",
            ar: 'تبرير تصرف بالسبب: « تلميذ يشرح لأستاذه تأخره بسبب عطب في الحافلة. »'
          },
          {
            fr: "Conseiller en exprimant un but ou une hypothèse : « Fais du sport pour garder la forme » / « Si tu révises, tu réussiras ! »",
            ar: 'النصح عبر الهدف أو الشرط: « مارس الرياضة لتحافظ على صحتك » / « إذا راجعت، ستنجح! »'
          },
          {
            fr: "Concéder poliment : « Certes ce livre est difficile, mais il est passionnant. »",
            ar: 'الاستدراك المهذب: « صحيح أن هذا الكتاب صعب، لكنه مشوق جداً. »'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Depuis cette mésaventure, Karim comprit que la prudence vaut mieux que la précipitation.",
        ar: 'منذ هذه المغامرة، أدرك كريم أن الحذر خير من التسرع (مغزى الوضعية النهائية).'
      },
      {
        fr: "Énoncé : « Si j'avais su, je ne serais jamais parti seul ! » ⬅️ Situation : Un jeune exprime son regret en utilisant une hypothèse irréelle du passé.",
        ar: 'قول: « لو كنت أعلم، لما غادرت وحدي أبداً! » ⬅️ الوضعية: شاب يعبر عن ندمه مستعملاً فرضية في الماضي.'
      }
    ],
    examTipBilingual: {
      fr: "Dans la question de communication du régional, précisez toujours l'acte de langage exact : « justifie par une cause », « met en garde avec une condition », « fait une concession ».",
      ar: 'في سؤال التواصل بالامتحان الجهوي، اذكر دائماً الفعل الكلامي الدقيق: يبرر بالسبب، يحذر بالشرط، أو يستدرك.'
    },
    keyTakeawaysBilingual: [
      { fr: 'La chute = fin courte, brutale et surprenante', ar: 'La chute = نهاية قصيرة ومفاجئة تقلب التوقع' },
      { fr: 'Communication = Locuteur + Destinataire + Outil logique', ar: 'التواصل = المتكلم + المخاطب + الأداة المنطقية' }
    ],
    miniExerciseBilingual: {
      questionFr: "Identifiez la situation de communication de cet énoncé : « Bien que la route soit longue, continuons à marcher pour arriver avant le coucher du soleil ! »",
      questionAr: 'حدد وضعية التواصل لهذا القول: « رغم أن الطريق طويل، لنواصل المشي لنصل قبل غروب الشمس! »',
      answerFr: "Un randonneur encourage ses compagnons à poursuivre leur marche en exprimant à la fois une concession (bien que) et un but (pour arriver).",
      answerAr: 'متجول يشجع رفاقه على مواصلة السير معبراً عن الاستدراك/الامتياز (bien que) وعن الهدف (pour arriver).'
    },
    conclusion: 'ربط الفهم الأدبي بالتواصل المنطقي يكمل استعدادك الكامل للامتحان الجهوي.',
    conclusionBilingual: {
      fr: "Maîtriser la fin du récit et les situations de communication complète la préparation au brevet.",
      ar: 'إتقان خاتمة القصة ووضعيات التواصل يتمم استعدادك للامتحان الجهوي.'
    }
  },
  {
    id: 'sum-fr-24',
    lessonNumber: 24,
    sequence: 'Séquence 4',
    title: '24 - كتابة تتمة/نهاية قصة ومنهجية فهم المقروء للإطار المرجعي',
    frenchTitle: "Rédiger la suite et la fin d'une nouvelle & Méthodologie de lecture",
    unit: 'الدورة الثانية (Passerelle - Semestre 2): القصة القصيرة',
    cycle: 'الدورة الثانية',
    category: 'Production Écrite',
    introduction: 'الدرس الختامي الجامع لمنهجية فهم نص الامتحان الجهوي (6 نقط) ومنهجية تحرير تتمة ونهاية قصة متماسكة (8 نقط).',
    introductionBilingual: {
      fr: "Cette leçon finale synthétise la méthode pour répondre aux questions de compréhension (6 pts) et rédiger la suite et la fin d'une nouvelle (8 pts).",
      ar: 'يلخص هذا الدرس الختامي منهجية الإجابة عن أسئلة فهم المقروء (6 نقط) وتحرير بقية ونهاية قصة قصيرة (8 نقط).'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Méthodologie de la compréhension de l\'écrit (6 points)',
        headingAr: '1. منهجية الإجابة عن أسئلة القراءة والفهم (6 نقط)',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "Question 1 : Identifier le titre, l'auteur, la source (en bas du texte) et le type du texte (narratif / extrait de nouvelle).",
            ar: 'السؤال 1: تحديد العنوان، الكاتب، المصدر (أسفل النص)، ونوع النص (سردي / مقتطف من قصة قصيرة).'
          },
          {
            fr: "Questions 2 à 5 : Relever les personnages, le lieu, le temps et répondre à « Vrai ou Faux » en citant une phrase du texte entre guillemets.",
            ar: 'الأسئلة 2 إلى 5: استخراج الشخصيات والمكان والزمان، والإجابة عن « صحيح أم خطأ » مع نقل الجملة الشاهدة بين مزدوجتين.'
          },
          {
            fr: "Question 6 (Réaction personnelle) : Donner son avis motivé (« À mon avis, ... car ... ») sans jamais laisser la question vide.",
            ar: 'السؤال 6 (الرأي الشخصي): إبداء الرأي المعلل (« في رأيي، ... لأن ... ») دون تركه فارغاً أبداً.'
          }
        ]
      },
      {
        headingFr: '2. Rédiger la suite et la fin d\'une nouvelle (8 points)',
        headingAr: '2. قواعد تحرير تتمة ونهاية القصة في الإنتاج الكتابي (8 نقط)',
        colorClass: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100',
        items: [
          {
            fr: "Respecter les personnages, les noms, le lieu et les temps du récit de départ (Imparfait + Passé simple).",
            ar: 'احترام الشخصيات والأسماء والمكان وأزمنة السرد الموجودة في نص الانطلاق (Imparfait + Passé simple).'
          },
          {
            fr: "Enchaîner 2 ou 3 péripéties logiques, insérer un court portrait ou un bref dialogue, puis conclure par le dénouement et la morale finale.",
            ar: 'تسلسل حدثين أو ثلاثة منطقياً، وإدراج وصف موجز أو حوار قصير، ثم الختم بالحل والمغزى النهائي.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Justification : « Faux. Justification : « Le vieillard tremblait de peur devant la porte. » »",
        ar: 'نموذج التعليل: « خطأ. التعليل: « كان العجوز يرتعد خوفاً أمام الباب. » »'
      },
      {
        fr: "Réaction : « À mon avis, le héros a fait preuve d'un grand courage parce qu'il a secouru l'inconnu malgré le danger. »",
        ar: 'نموذج الرأي: « في رأيي، أبان البطل عن شجاعة كبيرة لأنه أنقذ الغريب رغم الخطر. »'
      }
    ],
    examTipBilingual: {
      fr: "Consacrez 45 minutes à la production écrite, faites un brouillon rapide, et vérifiez les accords (féminin/pluriel) ainsi que les terminaisons du passé simple.",
      ar: 'خصص 45 دقيقة للإنتاج الكتابي، أنجز مسودة سريعة، وراجع التطابق (تأنيث/جمع) ونهايات أفعال الماضي البسيط.'
    },
    keyTakeawaysBilingual: [
      { fr: '6 pts Lecture + 6 pts Langue + 8 pts Production écrite = 20/20', ar: '6 نقط للفهم + 6 نقط للغة + 8 نقط للإنشاء = 20/20' },
      { fr: 'Réaction personnelle = avis + car/parce que', ar: 'سؤال الرأي = موقف واضح + تعليل' }
    ],
    miniExerciseBilingual: {
      questionFr: "Quelles sont les trois règles d'or pour réussir la rédaction de la suite d'un texte à l'examen régional ?",
      questionAr: 'ما القواعد الذهبية الثلاث للنجاح في كتابة تتمة نص سردي بالامتحان الجهوي؟',
      answerFr: "1. Garder les mêmes personnages et temps verbaux (imparfait/passé simple) — 2. Respecter le schéma narratif (péripéties ⬅️ dénouement ⬅️ fin) — 3. Soigner la langue et insérer un court dialogue.",
      answerAr: '1. الحفاظ على نفس الشخصيات والأزمنة (Imparfait / Passé simple) — 2. احترام الخطاطة السردية (الأحداث ⬅️ الحل ⬅️ النهاية) — 3. سلامة اللغة وإدراج حوار قصير.'
    },
    conclusion: 'بهذا يكون مقرر Passerelle للثالثة إعدادي كاملاً ومترجماً جملة بجملة في متناول يدك للتفوق.',
    conclusionBilingual: {
      fr: "Vous disposez désormais de l'intégralité du programme Passerelle 3AC expliqué et traduit phrase par phrase pour réussir brillamment.",
      ar: 'تتوفر الآن على كامل برنامج Passerelle للثالثة إعدادي مشروحاً ومترجماً جملة بجملة لتتفوق باقتدار.'
    }
  }
];
