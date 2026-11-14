// Passerelle Français 3AC — Semestre 1 (La Correspondance) — Séquences 1 à 4
// Every French sentence is paired with its exact Arabic translation (Français + العربية).

import type { FrenchLessonSummaryItem } from './frenchTypes3AC';

export const FRENCH_CYCLE1_SUMMARIES: FrenchLessonSummaryItem[] = [
  // ================= SÉQUENCE 1 =================
  {
    id: 'sum-fr-1',
    lessonNumber: 1,
    sequence: 'Séquence 1',
    title: '1 - الرسالة الرسمية والرسالة الشخصية: البنية والمقارنة',
    frenchTitle: 'La lettre conventionnelle et la lettre personnelle',
    unit: 'الدورة الأولى (Passerelle - Semestre 1): المراسلات',
    cycle: 'الدورة الأولى',
    category: 'Lecture',
    introduction: 'دراسة البنية الشكلية للرسالة الرسمية ومقارنتها بالرسالة الشخصية وفق الوحدة الأولى من مقرر Passerelle.',
    introductionBilingual: {
      fr: "Dans la première séquence du manuel Passerelle, nous apprenons à identifier la silhouette et les composantes de la lettre conventionnelle et à la distinguer de la lettre personnelle.",
      ar: 'في الوحدة الأولى من مقرر Passerelle، نتعلم التعرف على الشكل الخارجي وعناصر الرسالة الرسمية والتمييز بينها وبين الرسالة الشخصية.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Les huit éléments obligatoires de la lettre conventionnelle',
        headingAr: '1. العناصر الثمانية الإلزامية للرسالة الرسمية (الإدارية)',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "Le lieu et la date s'écrivent toujours en haut à droite (ex. : Rabat, le 12 novembre 2025).",
            ar: 'يُكتب المكان والتاريخ دائماً أعلى اليمين (مثال: الرباط، في 12 نونبر 2025).'
          },
          {
            fr: "Les coordonnées de l'émetteur (expéditeur) se placent en haut à gauche avec sa qualité.",
            ar: 'توضع بيانات المرسِل أعلى اليسار مرفقة بصفته ومؤسسته.'
          },
          {
            fr: "Le destinataire (récepteur) figure à droite sous la date, précédé de la préposition « À Monsieur / Madame... ».",
            ar: 'يُكتب المرسَل إليه جهة اليمين تحت التاريخ مسبوقاً بحرف الجر « إلى السيد / السيدة... ».'
          },
          {
            fr: "L'objet est une phrase nominale brève qui précise le motif exact de la correspondance.",
            ar: 'الموضوع (Objet) جملة اسمية موجزة تحدد السبب الدقيق للمراسلة.'
          },
          {
            fr: "La formule d'appel nomme la fonction du destinataire suivie d'une virgule (ex. : Monsieur le Directeur,).",
            ar: 'عبارة النداء تذكر منصب المرسل إليه متبوعة بفاصلة (مثال: سيدي المدير،).'
          },
          {
            fr: "Le corps de la lettre comprend trois paragraphes : l'exposition du sujet, l'argumentation et l'engagement.",
            ar: 'يتكون نص الرسالة من ثلاث فقرات: طرح الموضوع، الحجج والأهداف، ثم الالتزام.'
          },
          {
            fr: "La formule de politesse clôt la lettre avec respect et reprend la formule d'appel.",
            ar: 'عبارة الختام تنهي الرسالة باحترام وتعيد ذكر صفة المنادى.'
          },
          {
            fr: "La signature de l'expéditeur se place tout en bas à droite.",
            ar: 'يوضع توقيع المرسِل أسفل الصفحة جهة اليمين.'
          }
        ]
      },
      {
        headingFr: '2. Différences entre lettre conventionnelle et lettre personnelle',
        headingAr: '2. الفروق الجوهرية بين الرسالة الرسمية والرسالة الشخصية',
        colorClass: 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-100',
        items: [
          {
            fr: "La lettre conventionnelle s'adresse à une autorité ou une administration, alors que la lettre personnelle s'adresse à un ami ou un proche.",
            ar: 'الرسالة الرسمية تُوجه لمسؤول أو إدارة، بينما الرسالة الشخصية تُوجه لصديق أو قريب.'
          },
          {
            fr: "On emploie le pronom de politesse « vous » dans la lettre officielle et « tu » dans la lettre amicale.",
            ar: 'نستعمل ضمير الاحترام « vous » في الرسالة الرسمية وضمير المخاطب « tu » في الرسالة الودية.'
          },
          {
            fr: "La lettre personnelle ne contient ni « objet », ni coordonnées administratives du destinataire.",
            ar: 'لا تتضمن الرسالة الشخصية خانة الموضوع (objet) ولا البيانات الإدارية للمرسَل إليه.'
          },
          {
            fr: "Le registre de langue est soutenu ou courant dans la lettre conventionnelle, et courant ou familier dans la lettre personnelle.",
            ar: 'يكون مستوى اللغة رفيعاً أو عادياً في الرسالة الرسمية، وعادياً أو مألوفاً في الرسالة الشخصية.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Objet : Demande d'autorisation pour créer un club de lecture.",
        ar: 'الموضوع: طلب إذن لتأسيس نادٍ للقراءة.'
      },
      {
        fr: "Je vous prie d'agréer, Monsieur le Directeur, l'expression de mon profond respect.",
        ar: 'تفضلوا بقبول أسمى عبارات احترامي وتقديري، سيدي المدير.'
      },
      {
        fr: "Mon cher ami Karim, je t'écris pour te donner de mes nouvelles.",
        ar: 'صديقي العزيز كريم، أكتب لك لأطمئنك عن أخباري.'
      }
    ],
    examTipBilingual: {
      fr: "À l'examen local, on demande souvent de relever les 8 éléments de la lettre dans un tableau ou de justifier le type de lettre.",
      ar: 'في الامتحان المحلي، يُطلب غالباً استخراج عناصر الرسالة الثمانية في جدول أو تعليل نوع الرسالة.'
    },
    keyTakeawaysBilingual: [
      { fr: '8 éléments obligatoires dans la lettre conventionnelle', ar: '8 عناصر إلزامية في الرسالة الرسمية' },
      { fr: 'Emploi de « Vous » (officielle) vs « Tu » (amicale)', ar: 'استعمال Vous للرسمية مقابل Tu للودية' },
      { fr: 'Absence de « Objet » dans la lettre personnelle', ar: 'غياب خانة الموضوع في الرسالة الشخصية' }
    ],
    miniExerciseBilingual: {
      questionFr: "Relevez l'intrus parmi les éléments d'une lettre personnelle : Lieu et date – Formule d'appel – Objet – Signature.",
      questionAr: 'استخرج العنصر الدخيل الذي لا ينتمي للرسالة الشخصية: المكان والتاريخ – عبارة النداء – الموضوع – التوقيع.',
      answerFr: "L'intrus est « Objet », car il caractérise uniquement la lettre conventionnelle ou administrative.",
      answerAr: 'العنصر الدخيل هو « Objet » (الموضوع)، لأنه يميز الرسالة الرسمية أو الإدارية فقط.'
    },
    conclusion: 'ضبط هيكل الرسالتين يمهد لإتقان كل دروس المراسلة في الدورة الأولى.',
    conclusionBilingual: {
      fr: "La maîtrise de cette structure garantit la réussite de toutes les activités de lecture et de production écrite du premier semestre.",
      ar: 'إتقان هذه البنية يضمن النجاح في جميع أنشطة القراءة والإنتاج الكتابي للدورة الأولى.'
    }
  },
  {
    id: 'sum-fr-2',
    lessonNumber: 2,
    sequence: 'Séquence 1',
    title: '2 - طلب الإذن وقبوله ورفضه (أفعال الكلام والتأدب)',
    frenchTitle: 'Demander, accepter et refuser une autorisation',
    unit: 'الدورة الأولى (Passerelle - Semestre 1): المراسلات',
    cycle: 'الدورة الأولى',
    category: 'Langue & Communication',
    introduction: 'تعلّم صياغة طلب الإذن والقبول والرفض بأسلوب مهذب ومتدرج حسب درجة الرسمية.',
    introductionBilingual: {
      fr: "Cette leçon de Passerelle permet d'exprimer poliment une demande d'autorisation, d'accorder une permission ou de la refuser avec justification.",
      ar: 'يمكّن هذا الدرس من مقرر Passerelle من التعبير بأدب عن طلب الإذن، أو منحه، أو رفضه مع التعليل.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Demander une autorisation (طلب الإذن أو الترخيص)',
        headingAr: '1. صيغ طلب الإذن (حسب مستوى اللغة)',
        colorClass: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100',
        items: [
          {
            fr: "Au registre soutenu : « J'ai l'honneur de solliciter votre haute bienveillance afin de m'autoriser à... »",
            ar: 'في الأسلوب الرفيع: « يشرفني أن ألتمس من سيادتكم الكريمة الإذن لي بـ... »'
          },
          {
            fr: "Avec le conditionnel de politesse : « Auriez-vous l'amabilité de nous permettre d'utiliser la salle ? »",
            ar: 'باستعمال الشرط للتأدب: « هل تتكرمون بالسماح لنا باستعمال القاعة؟ »'
          },
          {
            fr: "Au registre courant : « Est-ce que je peux organiser une exposition ? » / « Pourriez-vous m'autoriser à sortir ? »",
            ar: 'في الأسلوب العادي: « هل يمكنني تنظيم معرض؟ » / « هل بإمكانكم الإذن لي بالخروج؟ »'
          }
        ]
      },
      {
        headingFr: '2. Accepter ou refuser une autorisation (قبول أو رفض الإذن)',
        headingAr: '2. صيغ قبول الإذن أو رفضه بلباقة',
        colorClass: 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/30 text-rose-950 dark:text-rose-100',
        items: [
          {
            fr: "Pour accepter : « J'ai le plaisir de vous accorder cette autorisation, à condition de respecter le règlement. »",
            ar: 'للقبول: « يسعدني أن أمنحكم هذا الإذن، شريطة احترام القانون الداخلي. »'
          },
          {
            fr: "Pour refuser poliment : « Je regrette vivement de ne pouvoir répondre favorablement à votre demande, car la salle est occupée. »",
            ar: 'للرفض المؤدب: « يؤسفني بشدة ألا أستطيع الاستجابة لطلبكم، لأن القاعة مشغولة. »'
          },
          {
            fr: "Règle d'or : Un refus officiel doit toujours être atténué par des excuses et accompagné d'une justification.",
            ar: 'قاعدة ذهبية: يجب دائماً تلطيف الرفض الرسمي باعتذار وإرفاقه بتبرير واضح.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Monsieur le Directeur, nous sollicitons votre autorisation pour planter des arbres dans la cour.",
        ar: 'سيدي المدير، نلتمس إذنكم لغرس أشجار في ساحة المؤسسة.'
      },
      {
        fr: "C'est avec grand plaisir que j'accepte votre proposition.",
        ar: 'بكل سرور أقبل اقتراحكم.'
      }
    ],
    examTipBilingual: {
      fr: "Employez toujours le conditionnel présent (pourriez-vous, auriez-vous, souhaiterais) pour adoucir une demande adressée à un supérieur.",
      ar: 'استعمل دائماً صيغة Conditionnel présent (مثل pourriez-vous، auriez-vous) لتلطيف الطلب الموجه لمسؤول.'
    },
    keyTakeawaysBilingual: [
      { fr: 'Conditionnel de politesse : Pourriez-vous / Auriez-vous', ar: 'صيغة الشرط للتأدب في الطلب الرسمي' },
      { fr: 'Accepter sous condition : à condition de + infinitif', ar: 'القبول المشروط باستعمال à condition de' },
      { fr: 'Refus poli = excuse + justification logique', ar: 'الرفض المهذب = اعتذار + تعليل منطقي' }
    ],
    miniExerciseBilingual: {
      questionFr: "Transformez cette phrase familière en une demande soutenue adressée au directeur : « Tu me laisses partir tôt aujourd'hui ? »",
      questionAr: 'حول الجملة المألوفة التالية إلى طلب رسمي موجه لمدير المؤسسة: « Tu me laisses partir tôt aujourd\'hui ? »',
      answerFr: "Monsieur le Directeur, auriez-vous l'obligeance de m'autoriser à quitter l'établissement plus tôt aujourd'hui ?",
      answerAr: 'سيدي المدير، هل تتفضلون بالإذن لي بمغادرة المؤسسة باكراً اليوم؟'
    },
    conclusion: 'إتقان أساليب الإذن يؤهل التلميذ لحل وضعيات التواصل وتحرير الطلبات الإدارية.',
    conclusionBilingual: {
      fr: "Savoir moduler sa demande selon le destinataire est essentiel pour réussir les épreuves de communication.",
      ar: 'معرفة تكييف الطلب حسب المرسَل إليه أساسية للنجاح في اختبارات التواصل.'
    }
  },
  {
    id: 'sum-fr-3',
    lessonNumber: 3,
    sequence: 'Séquence 1',
    title: '3 - مستويات اللغة الثلاثة وتحليل وضعية التواصل',
    frenchTitle: 'Les registres de langue et la situation de communication',
    unit: 'الدورة الأولى (Passerelle - Semestre 1): المراسلات',
    cycle: 'الدورة الأولى',
    category: 'Langue & Communication',
    introduction: 'التمييز بين اللغة المألوفة والعادية والرفيعة وكيفية تحليل أي وضعية تواصلية بدقة.',
    introductionBilingual: {
      fr: "Ce cours étudie les trois niveaux de langue en français et la méthode exacte pour analyser toute situation de communication.",
      ar: 'يدرس هذا الدرس مستويات اللغة الثلاثة في الفرنسية والمنهجية الدقيقة لتحليل أي وضعية تواصلية.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Les trois registres de langue (مستويات اللغة الثلاثة)',
        headingAr: '1. تصنيف مستويات اللغة في الفرنسية',
        colorClass: 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-100',
        items: [
          {
            fr: "Le registre familier s'utilise entre amis ou en famille ; il supprime parfois « ne » dans la négation (ex. : J'ai pas mon bouquin).",
            ar: 'يُستعمل المستوى المألوف (Familier) بين الأصدقاء والعائلة؛ وقد يحذف « ne » في النفي (مثال: ليس معي كتابي).'
          },
          {
            fr: "Le registre courant respecte les règles de grammaire simples et s'emploie à l'école ou dans les médias (ex. : Je n'ai pas mon livre).",
            ar: 'يحترم المستوى العادي (Courant) قواعد النحو البسيطة ويُستعمل في المدرسة والإعلام (مثال: لم أحضر كتابي).'
          },
          {
            fr: "Le registre soutenu utilise un vocabulaire recherché, des phrases complexes et l'inversion du sujet (ex. : Auriez-vous cet ouvrage ?).",
            ar: 'يوظف المستوى الرفيع (Soutenu) معجماً راقياً وتراكيب مركبة وقلب الفاعل في السؤال (مثال: هل لديكم هذا المؤلف؟).'
          }
        ]
      },
      {
        headingFr: '2. Analyser une situation de communication (تحليل وضعية التواصل)',
        headingAr: '2. قواعد الإجابة عن جدول وضعيات التواصل',
        colorClass: 'border-purple-500 bg-purple-50/70 dark:bg-purple-950/30 text-purple-950 dark:text-purple-100',
        items: [
          {
            fr: "Pour identifier la situation, il faut préciser quatre questions : Qui parle ? À qui ? De quoi ? Et dans quel but ?",
            ar: 'لتحديد الوضعية، يجب الإجابة عن أربعة أسئلة: من يتكلم؟ إلى من؟ عن ماذا؟ وبأي هدف؟'
          },
          {
            fr: "Pour produire un énoncé, on se met à la place du locuteur en adaptant les pronoms et le registre.",
            ar: 'لإنتاج قول (Énoncé)، نتقمص دور المتكلم مع ملاءمة الضمائر ومستوى اللغة.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Familier : Mon pote bosse vite. | Courant : Mon ami travaille vite. | Soutenu : Mon compagnon œuvre avec célérité.",
        ar: 'تدرج الجملة نفسها عبر المستويات: صديقي يعمل بسرعة (مألوف ⬅️ عادي ⬅️ رفيع).'
      },
      {
        fr: "Situation : Un élève s'adresse au proviseur pour demander la permission d'afficher un journal mural.",
        ar: 'وضعية تواصل: تلميذ يخاطب مدير المؤسسة لطلب الإذن بتعليق مجلة حائطية.'
      }
    ],
    examTipBilingual: {
      fr: "Ne répondez jamais par un pronom vague (« Il parle ») dans le tableau de communication ; nommez toujours les rôles exacts.",
      ar: 'لا تجب أبداً بضمير مبهم مثل « Il parle » في جدول التواصل؛ بل حدد دائماً صفة المتكلم والمخاطَب بدقة.'
    },
    keyTakeawaysBilingual: [
      { fr: 'Registre familier = amitié / syntaxe relâchée', ar: 'المستوى المألوف = الأصدقاء وصياغة مختصرة' },
      { fr: 'Registre soutenu = respect administratif / inversion', ar: 'المستوى الرفيع = الاحترام الإداري وقلب الفاعل' },
      { fr: 'Situation = Locuteur + Destinataire + Intention', ar: 'الوضعية = المتكلم + المخاطب + القصد التواصلي' }
    ],
    miniExerciseBilingual: {
      questionFr: "Identifiez le registre de cette phrase et réécrivez-la en registre courant : « T'as vu cette bagnole ? »",
      questionAr: 'حدد مستوى اللغة في هذه الجملة ثم أعد كتابتها بالمستوى العادي: « T\'as vu cette bagnole ? »',
      answerFr: "C'est le registre familier. En registre courant : « Est-ce que tu as vu cette voiture ? »",
      answerAr: 'إنه المستوى المألوف (Familier). وفي المستوى العادي نقول: « هل رأيت هذه السيارة؟ ».'
    },
    conclusion: 'التحكم في مستويات اللغة يمنح التلميذ مرونة تواصلية صحيحة في الكتابة والشفهي.',
    conclusionBilingual: {
      fr: "Adapter son registre de langue à son interlocuteur est une compétence clé évaluée à l'examen.",
      ar: 'ملاءمة مستوى اللغة مع المخاطَب كفاية أساسية يختبرها الامتحان.'
    }
  },
  {
    id: 'sum-fr-4',
    lessonNumber: 4,
    sequence: 'Séquence 2',
    title: '4 - رسالة الدعوة: توجيه الدعوة، قبولها، والاعتذار عنها',
    frenchTitle: "La lettre d'invitation : inviter, accepter et refuser",
    unit: 'الدورة الأولى (Passerelle - Semestre 1): المراسلات',
    cycle: 'الدورة الأولى',
    category: 'Lecture',
    introduction: 'الوحدة الثانية من Passerelle تركز على بنية رسالة الدعوة الرسمية والشخصية وصيغ الاستجابة لها.',
    introductionBilingual: {
      fr: "La deuxième séquence de Passerelle porte sur la lettre d'invitation, ainsi que les formules pour inviter, accepter ou décliner une invitation.",
      ar: 'تتناول الوحدة الثانية من مقرر Passerelle رسالة الدعوة، وصيغ توجيه الدعوة وقبولها أو الاعتذار عنها.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Les informations indispensables d\'une invitation (بيانات الدعوة)',
        headingAr: '1. المعطيات الضرورية في كل رسالة دعوة',
        colorClass: 'border-purple-500 bg-purple-50/70 dark:bg-purple-950/30 text-purple-950 dark:text-purple-100',
        items: [
          {
            fr: "L'invitation doit mentionner clairement l'événement ou l'occasion (ex. : la Journée mondiale de l'environnement).",
            ar: 'يجب أن تذكر الدعوة الحدث أو المناسبة بوضوح (مثال: اليوم العالمي للبيئة).'
          },
          {
            fr: "Elle précise obligatoirement le lieu exact, la date et l'heure de la rencontre.",
            ar: 'تحدد إلزامياً المكان الدقيق، والتاريخ، وساعة اللقاء.'
          },
          {
            fr: "On utilise des verbes d'invitation formels comme « convier », « inviter » ou « compter parmi nous ».",
            ar: 'تُستعمل أفعال دعوة رسمية مثل « convier » أو « inviter » أو « يشرفنا حضوركم معنا ».'
          }
        ]
      },
      {
        headingFr: '2. Répondre à une invitation : accepter ou décliner (الرد على الدعوة)',
        headingAr: '2. الرد على الدعوة بالقبول أو الرفض المهذب',
        colorClass: 'border-teal-500 bg-teal-50/70 dark:bg-teal-950/30 text-teal-950 dark:text-teal-100',
        items: [
          {
            fr: "Pour accepter : « C'est avec une immense joie que je réponds favorablement à votre aimable invitation. »",
            ar: 'للقبول: « ببالغ السعادة أستجيب بالإيجاب لدعوتكم الكريمة. »'
          },
          {
            fr: "Pour refuser avec tact : « Je vous remercie pour votre invitation ; malheureusement, un empêchement professionnel m'empêche d'y assister. »",
            ar: 'للرفض بلباقة: « أشكركم على دعوتكم؛ للأسف، مانع مهني يحول دون حضوري. »'
          },
          {
            fr: "L'emploi de l'impératif présent ou du conditionnel permet de formuler l'invitation selon la proximité avec l'invité.",
            ar: 'يسمح استعمال صيغة الأمر أو الشرط بصياغة الدعوة حسب درجة القرب من المدعو.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Nous serions très honorés de vous compter parmi nos invités le vendredi 16 mai à 15 heures.",
        ar: 'سيكون شرفاً كبيراً لنا أن نعدكم من بين ضيوفنا يوم الجمعة 16 ماي على الساعة الثالثة زوالاً.'
      },
      {
        fr: "Je viendrai avec grand plaisir assister à votre conférence.",
        ar: 'سآتي بكل سرور لحضور ندوتكم.'
      }
    ],
    examTipBilingual: {
      fr: "N'oubliez jamais d'indiquer la date, l'heure et le lieu dans le corps d'une lettre d'invitation, sinon la consigne est jugée incomplète.",
      ar: 'لا تنسَ أبداً ذكر التاريخ والساعة والمكان داخل نص رسالة الدعوة، وإلا اعتُبر الإنجاز ناقصاً.'
    },
    keyTakeawaysBilingual: [
      { fr: 'Mentionner : Occasion + Date + Heure + Lieu', ar: 'ذكر المناسبة + التاريخ + الساعة + المكان' },
      { fr: 'Verbe formel : Convier à / Honorer de sa présence', ar: 'أفعال رسمية: Convier à / يشرفنا حضوركم' },
      { fr: 'Refus = Remerciement + Regret + Motif', ar: 'الاعتذار = شكر + أسف + ذكر السبب' }
    ],
    miniExerciseBilingual: {
      questionFr: "Rédigez une phrase pour inviter un médecin à animer une conférence au collège le 10 mars à 10h.",
      questionAr: 'اكتب جملة تدعو فيها طبيباً لتنشيط ندوة في الإعدادية يوم 10 مارس على الساعة العاشرة صباحاً.',
      answerFr: "Monsieur le Docteur, nous avons l'honneur de vous convier à animer une conférence au collège le 10 mars à 10 heures.",
      answerAr: 'سيدي الطبيب، يشرفنا دعوتكم لتنشيط ندوة بالإعدادية يوم 10 مارس على الساعة العاشرة.'
    },
    conclusion: 'الدعوة والرد عليها من أكثر الرسائل تداولاً في فروض المرحلة الأولى.',
    conclusionBilingual: {
      fr: "La lettre d'invitation et sa réponse sont des exercices fréquents dans les contrôles continus du premier semestre.",
      ar: 'رسالة الدعوة والجواب عنها من التمارين المتكررة في فروض المراقبة المستمرة للدورة الأولى.'
    }
  },
  {
    id: 'sum-fr-5',
    lessonNumber: 5,
    sequence: 'Séquence 2',
    title: '5 - الإنتاج الكتابي: تحرير رسالة طلب إذن ورسالة دعوة',
    frenchTitle: "Production écrite : Rédiger une demande d'autorisation et une invitation",
    unit: 'الدورة الأولى (Passerelle - Semestre 1): المراسلات',
    cycle: 'الدورة الأولى',
    category: 'Production Écrite',
    introduction: 'منهجية كتابة نص الرسالة الإدارية خطوة بخطوة وتوزيع الفقرات الثلاث داخل الجسم.',
    introductionBilingual: {
      fr: "Cet atelier d'écriture montre comment structurer le corps d'une lettre officielle en trois paragraphes clairs et cohérents.",
      ar: 'توضح ورشة الكتابة هذه كيفية هيكلة نص الرسالة الرسمية في ثلاث فقرات واضحة ومترابطة.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Le plan en trois paragraphes du corps de la lettre',
        headingAr: '1. التصميم المنهجي لفقرات جسم الرسالة الثلاث',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "Paragraphe 1 (Introduction) : Préciser le contexte du projet et formuler clairement la demande ou l'invitation.",
            ar: 'الفقرة 1 (التمهيد): تحديد سياق المشروع وصياغة الطلب أو الدعوة بوضوح.'
          },
          {
            fr: "Paragraphe 2 (Développement) : Présenter les objectifs pédagogiques, la date, le lieu et les participants.",
            ar: 'الفقرة 2 (العرض): تقديم الأهداف التربوية، التاريخ، المكان، والمشاركين.'
          },
          {
            fr: "Paragraphe 3 (Engagement / Attente) : S'engager à respecter l'ordre ou exprimer l'espoir d'une réponse favorable.",
            ar: 'الفقرة 3 (الالتزام والانتظار): الالتزام باحترام النظام أو التعبير عن الأمل في رد إيجابي.'
          }
        ]
      },
      {
        headingFr: '2. Vérification finale avant de rendre sa copie',
        headingAr: '2. المراجعة النهائية قبل تسليم ورقة الامتحان',
        colorClass: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100',
        items: [
          {
            fr: "Vérifiez la disposition spatiale : émetteur à gauche, date et destinataire à droite, signature en bas à droite.",
            ar: 'تحقق من التموقع الفضائي: المرسِل يساراً، التاريخ والمرسَل إليه يميناً، والتوقيع أسفل اليمين.'
          },
          {
            fr: "Assurez-vous que la formule de politesse finale répète exactement la même fonction que la formule d'appel.",
            ar: 'تأكد من أن عبارة الختام تكرر نفس المنصب المذكور في عبارة النداء.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Paragraphe d'engagement : « Nous nous engageons formellement à laisser la salle propre après l'activité. »",
        ar: 'فقرة الالتزام: « نلتزم التزاماً صارماً بترك القاعة نظيفة بعد النشاط. »'
      }
    ],
    examTipBilingual: {
      fr: "Une bonne mise en page (alinéas, retours à la ligne, alignement gauche/droite) rapporte automatiquement la moitié de la note de forme.",
      ar: 'التنظيم الجيد للورقة (الفراغات في بداية الفقرات، المحاذاة يميناً ويساراً) يمنح تلقائياً نصف نقط الجانب الشكلي.'
    },
    keyTakeawaysBilingual: [
      { fr: '3 paragraphes cohérents : Demande / Détails / Engagement', ar: '3 فقرات مترابطة: الطلب / التفاصيل / الالتزام' },
      { fr: 'Respect strict du vouvoiement (Vous)', ar: 'الالتزام الصارم بضمير الاحترام (Vous)' }
    ],
    miniExerciseBilingual: {
      questionFr: "Citez l'ordre logique des trois paragraphes dans le corps d'une demande d'autorisation.",
      questionAr: 'اذكر الترتيب المنطقي للفقرات الثلاث داخل جسم رسالة طلب الإذن.',
      answerFr: "1. Formulation de la demande et contexte — 2. Objectifs, date et lieu de l'activité — 3. Engagement et attente d'une réponse favorable.",
      answerAr: '1. صياغة الطلب والسياق — 2. الأهداف والتاريخ والمكان — 3. الالتزام وانتظار الرد الإيجابي.'
    },
    conclusion: 'التدرب على نماذج الرسائل الثمانية في المساعد الذكي يجعل التحرير سهلاً يوم الامتحان.',
    conclusionBilingual: {
      fr: "S'exercer à partir des huit modèles de lettres de l'assistant facilite la rédaction le jour de l'examen.",
      ar: 'التدرب انطلاقاً من نماذج الرسائل الثمانية في المساعد يسهل التحرير يوم الامتحان.'
    }
  },
  {
    id: 'sum-fr-6',
    lessonNumber: 6,
    sequence: 'Séquence 3',
    title: '6 - الشكر المكثف وتقديم المتمنيات (Subjonctif & Intensité)',
    frenchTitle: 'Remercier avec intensité et exprimer des vœux',
    unit: 'الدورة الأولى (Passerelle - Semestre 1): المراسلات',
    cycle: 'الدورة الأولى',
    category: 'Langue & Communication',
    introduction: 'الوحدة الثالثة من Passerelle تدرب على التعبير عن الامتنان العميق وتوظيف صيغة Subjonctif للمتمنيات.',
    introductionBilingual: {
      fr: "Dans la séquence 3 de Passerelle, on apprend à renforcer l'expression du remerciement et à formuler des vœux sincères.",
      ar: 'في الوحدة الثالثة من مقرر Passerelle، نتعلم تقوية أسلوب الشكر وصياغة المتمنيات الصادقة.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Les moyens pour remercier avec intensité (وسائل تكثيف الشكر)',
        headingAr: '1. وسائل التعبير عن الشكر القوي والمكثف',
        colorClass: 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/30 text-amber-950 dark:text-amber-100',
        items: [
          {
            fr: "Utiliser un adverbe d'intensité : « Merci infiniment », « Je vous remercie chaleureusement / vivement / du fond du cœur. »",
            ar: 'استعمال ظرف شدة: « شكراً جزيلاً لا متناهياً »، « أشكركم بحرارة / بشدة / من أعماق القلب. »'
          },
          {
            fr: "Employer l'adjectif « reconnaissant(e) » renforcé : « Je vous suis extrêmement reconnaissant(e) pour votre aide. »",
            ar: 'توظيف صفة الامتنان مقواة: « أنا ممتن لكم للغاية على مساعدتكم. »'
          },
          {
            fr: "Utiliser des noms valorisants : « Veuillez accepter l'expression de ma profonde gratitude / mes vifs remerciements. »",
            ar: 'استعمال أسماء دالة على التقدير: « تفضلوا بقبول عبارات امتناني العميق / شكري الحار. »'
          }
        ]
      },
      {
        headingFr: '2. Formuler des vœux (صياغة المتمنيات والتهاني)',
        headingAr: '2. تراكيب المتمنيات واستعمال السبجونكتيف',
        colorClass: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100',
        items: [
          {
            fr: "Avec le verbe souhaiter : « Je vous souhaite plein succès, une excellente santé et beaucoup de bonheur. »",
            ar: 'باستعمال فعل التمني (souhaiter): « أتمنى لكم كامل النجاح، وصحة ممتازة، وسعادة كبيرة. »'
          },
          {
            fr: "Avec « Que + subjonctif » : « Que cette nouvelle année vous apporte la joie et la réussite ! »",
            ar: 'باستعمال (Que + السبجونكتيف): « لتجلب لكم هذه السنة الجديدة الفرح والنجاح! »'
          },
          {
            fr: "Pour féliciter : « Toutes mes félicitations pour cette brillante réussite qui honore notre collège ! »",
            ar: 'للتهنئة: « أحر التهاني على هذا النجاح الباهر الذي يشرف إعداديتنا! »'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Je ne sais comment vous remercier pour ce don précieux offert à notre bibliothèque.",
        ar: 'لا أدري كيف أشكركم على هذه الهبة القيمة المقدمة لمكتبتنا.'
      },
      {
        fr: "Que tous vos projets soient couronnés de succès !",
        ar: 'لتكن جميع مشاريعكم مكللة بالنجاح!'
      }
    ],
    examTipBilingual: {
      fr: "Si la consigne demande de « remercier avec intensité », un simple « Merci » est insuffisant ; ajoutez obligatoirement un adverbe ou un adjectif fort.",
      ar: 'إذا طلب السؤال « الشكر بقوة » (remercier avec intensité)، فلا يكفي قول « Merci »؛ بل يجب إضافة ظرف شدة أو صفة قوية.'
    },
    keyTakeawaysBilingual: [
      { fr: 'Adverbes d\'intensité : infiniment, vivement, extrêmement', ar: 'ظروف التكثيف: جداً، بشدة، بحرارة' },
      { fr: 'Vœux au subjonctif : Que + sujet + verbe au subjonctif', ar: 'المتمنيات بصيغة السبجونكتيف بعد Que' }
    ],
    miniExerciseBilingual: {
      questionFr: "Complétez ce vœu en conjuguant le verbe au subjonctif présent : « Que tu (réussir) à tous tes examens ! »",
      questionAr: 'أكمل هذه الأمنية بتصريف الفعل في Subjonctif présent: « Que tu (réussir) à tous tes examens ! »',
      answerFr: "Que tu réussisses à tous tes examens !",
      answerAr: 'لتنجح في جميع امتحاناتك!'
    },
    conclusion: 'صيغ الشكر والمتمنيات تعكس الذوق التواصلي الراقي في المراسلات الفرنسية.',
    conclusionBilingual: {
      fr: "Ces formules enrichissent les lettres sociales et valorisent le style de l'élève.",
      ar: 'تغني هذه الصيغ الرسائل الاجتماعية وترفع من جودة أسلوب التلميذ.'
    }
  },
  {
    id: 'sum-fr-7',
    lessonNumber: 7,
    sequence: 'Séquence 3',
    title: '7 - رسالة الشكر، رسالة التهنئة، وبطاقة المتمنيات',
    frenchTitle: 'La lettre de remerciements, de félicitations et la carte de vœux',
    unit: 'الدورة الأولى (Passerelle - Semestre 1): المراسلات',
    cycle: 'الدورة الأولى',
    category: 'Production Écrite',
    introduction: 'توظيف المعجم التقييمي الإيجابي (Lexique mélioratif) لصياغة رسائل الشكر والتهنئة وبطاقات المتمنيات.',
    introductionBilingual: {
      fr: "Ce module apprend à rédiger des lettres de remerciements ou de félicitations et des cartes de vœux en employant un lexique mélioratif.",
      ar: 'يعلم هذا المحور تحرير رسائل الشكر والتهنئة وبطاقات المتمنيات بتوظيف معجم إيجابي وتقديري.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Structure de la lettre de remerciements (هيكل رسالة الشكر)',
        headingAr: '1. خطوات كتابة رسالة الشكر أو التهنئة',
        colorClass: 'border-teal-500 bg-teal-50/70 dark:bg-teal-950/30 text-teal-950 dark:text-teal-100',
        items: [
          {
            fr: "Rappeler d'abord le geste généreux, l'aide reçue ou le succès remporté.",
            ar: 'التذكير أولاً بالمبادرة الكريمة، أو المساعدة المقدمة، أو الإنجاز المحقق.'
          },
          {
            fr: "Montrer les retombées positives de ce geste sur les élèves ou l'établissement.",
            ar: 'إبراز الأثر الإيجابي لتلك المبادرة على التلاميذ أو على المؤسسة.'
          },
          {
            fr: "Renouveler sa gratitude ou son admiration avant la formule de politesse.",
            ar: 'تجديد عبارات الامتنان أو الإعجاب قبل عبارة الختام الرسمية.'
          }
        ]
      },
      {
        headingFr: '2. Spécificités de la carte de vœux (خصائص بطاقة المتمنيات)',
        headingAr: '2. مميزات بطاقة المتمنيات مقارنة بالرسالة',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "La carte de vœux est plus courte et s'envoie lors des fêtes religieuses, nationales ou du Nouvel An.",
            ar: 'بطاقة المتمنيات أقصر حجماً وتُبعث في الأعياد الدينية والوطنية ورأس السنة.'
          },
          {
            fr: "Elle associe une image ou un souhait visuel à un message bref, sincère et chaleureux.",
            ar: 'تجمع بين تصميم بصري ورسالة قصيرة وصادقة ودافئة.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Votre généreux soutien nous permet de préparer nos examens dans d'excellentes conditions.",
        ar: 'إن دعمكم السخي يتيح لنا الاستعداد لامتحاناتنا في ظروف ممتازة.'
      },
      {
        fr: "Meilleurs vœux de santé, de paix et de prospérité à l'occasion de la nouvelle année.",
        ar: 'أطيب المتمنيات بالصحة والسلام والازدهار بمناسبة السنة الجديدة.'
      }
    ],
    examTipBilingual: {
      fr: "Dans une lettre de remerciements, utilisez au moins trois termes appréciatifs : généreux, précieux, remarquable, dévouement.",
      ar: 'في رسالة الشكر، وظف على الأقل ثلاث كلمات تقديرية: سخي (généreux)، ثمين (précieux)، متميز (remarquable)، تفانٍ (dévouement).'
    },
    keyTakeawaysBilingual: [
      { fr: '3 étapes : Rappel du fait + Bienfaits + Gratitude renouvelée', ar: '3 مراحل: التذكير بالفعل + فوائده + تجديد الامتنان' },
      { fr: 'Lexique mélioratif obligatoire', ar: 'توظيف المعجم التقديري الإيجابي' }
    ],
    miniExerciseBilingual: {
      questionFr: "Citez deux adjectifs mélioratifs pour qualifier le don d'un bienfaiteur.",
      questionAr: 'اذكر صفتين إيجابيتين لوصف هبة شخص محسن.',
      answerFr: "On peut utiliser « généreux » et « précieux » (ou « considérable », « admirable »).",
      answerAr: 'يمكن استعمال « سخي » (généreux) و« ثمين / قيّم » (précieux).'
    },
    conclusion: 'إتقان هذا الصنف من الرسائل يرسخ قيم الاعتراف بالجميل والتواصل الإيجابي.',
    conclusionBilingual: {
      fr: "Maîtriser ces écrits développe le sens de la reconnaissance et le lexique positif en français.",
      ar: 'إتقان هذه الكتابات ينمي قيمة الاعتراف بالجميل ويغني المعجم الإيجابي بالفرنسية.'
    }
  },
  {
    id: 'sum-fr-8',
    lessonNumber: 8,
    sequence: 'Séquence 4',
    title: '8 - الرسالة الشخصية الودية والبريد الإلكتروني (Courriel)',
    frenchTitle: 'La lettre personnelle et le courriel (e-mail)',
    unit: 'الدورة الأولى (Passerelle - Semestre 1): المراسلات',
    cycle: 'الدورة الأولى',
    category: 'Lecture',
    introduction: 'الانتقال من الرسالة الإدارية إلى الرسالة الشخصية الدافئة والتواصل الرقمي عبر البريد الإلكتروني.',
    introductionBilingual: {
      fr: "La séquence 4 aborde la lettre personnelle adressée à un proche ainsi que les codes du courrier électronique moderne (courriel).",
      ar: 'تتناول الوحدة الرابعة الرسالة الشخصية الموجهة لقريب أو صديق، وقواعد البريد الإلكتروني الحديث.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Caractéristiques de la lettre personnelle (خصائص الرسالة الشخصية)',
        headingAr: '1. مقومات الرسالة الشخصية / الودية',
        colorClass: 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100',
        items: [
          {
            fr: "Elle exprime des sentiments personnels (affection, joie, nostalgie) en employant le tutoiement (« tu »).",
            ar: 'تعبر عن مشاعر شخصية (محبة، فرح، شوق) باستعمال ضمير المخاطب المفرد (« tu »).'
          },
          {
            fr: "Elle comporte le lieu et la date, une formule d'appel affectueuse, le corps libre, une formule de congé amicale et le prénom.",
            ar: 'تتضمن المكان والتاريخ، نداءً ودياً، نصاً حراً، ختاماً حميمياً، والاسم الشخصي للمرسِل.'
          }
        ]
      },
      {
        headingFr: '2. Structure du courriel / e-mail (مكونات البريد الإلكتروني)',
        headingAr: '2. الحقول التقنية للبريد الإلكتروني',
        colorClass: 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/30 text-blue-950 dark:text-blue-100',
        items: [
          {
            fr: "L'interface comprend : De (expéditeur), À (destinataire), Objet (sujet), et éventuellement Cc (copie) et Pièce jointe.",
            ar: 'تشمل الواجهة: من (De)، إلى (À)، الموضوع (Objet)، وعند الحاجة نسخة (Cc) ومرفقاً (Pièce jointe).'
          },
          {
            fr: "Le courriel est instantané et plus concis, mais il conserve les règles de politesse selon le destinataire.",
            ar: 'البريد الإلكتروني فوري وأكثر اختصاراً، لكنه يحافظ على قواعد اللباقة حسب المخاطَب.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Objet du courriel : Photos de notre excursion scolaire — Pièce jointe : album_photos.zip.",
        ar: 'موضوع البريد الإلكتروني: صور رحلتنا المدرسية — المرفق: ألبوم الصور.'
      },
      {
        fr: "Je t'embrasse très fort. Ton ami fidèle, Mehdi.",
        ar: 'أعانقك بحرارة. صديقك الوفي، مهدي.'
      }
    ],
    examTipBilingual: {
      fr: "Dans une lettre amicale, ne mettez jamais « Objet : » ni « Je vous prie d'agréer... », car ce sont des marques administratives.",
      ar: 'في الرسالة الودية، لا تضع أبداً « Objet » ولا عبارة « Je vous prie d\'agréer » لأنها علامات إدارية رسمية.'
    },
    keyTakeawaysBilingual: [
      { fr: 'Lettre personnelle = Tu + affection + sans Objet', ar: 'الرسالة الشخصية = Tu + عاطفة + بدون موضوع' },
      { fr: 'Courriel = De / À / Objet / Pièce jointe', ar: 'البريد الإلكتروني = مرسل / مستقبل / موضوع / مرفق' }
    ],
    miniExerciseBilingual: {
      questionFr: "À quoi sert la mention « Pièce jointe » dans un courriel ?",
      questionAr: 'ما وظيفة خانة « Pièce jointe » في البريد الإلكتروني؟',
      answerFr: "Elle sert à joindre un fichier (document PDF, photo ou vidéo) au message électronique envoyé.",
      answerAr: 'تُستعمل لإرفاق ملف (وثيقة PDF أو صورة أو فيديو) بالرسالة الإلكترونية المرسَلة.'
    },
    conclusion: 'فهم المراسلة الورقية والرقمية يعزز قدرة التلميذ على التعبير في مختلف السياقات.',
    conclusionBilingual: {
      fr: "Connaître la correspondance papier et numérique prépare l'élève à communiquer efficacement dans toutes les situations.",
      ar: 'معرفة المراسلة الورقية والرقمية تؤهل التلميذ للتواصل بفعالية في كل الوضعيات.'
    }
  },
  {
    id: 'sum-fr-9',
    lessonNumber: 9,
    sequence: 'Séquence 4',
    title: '9 - إبداء الرأي والموافقة والمعارضة وأزمنة الرسالة',
    frenchTitle: 'Exprimer son opinion, son accord/désaccord et les temps de la lettre',
    unit: 'الدورة الأولى (Passerelle - Semestre 1): المراسلات',
    cycle: 'الدورة الأولى',
    category: 'Langue & Communication',
    introduction: 'تعلّم أساليب الدفاع عن وجهة النظر وتوظيف الأزمنة الفعلية بدقة داخل مختلف أنواع الرسائل.',
    introductionBilingual: {
      fr: "Cette leçon présente les outils linguistiques pour donner son avis, approuver ou contester une idée, ainsi que l'emploi correct des temps dans la lettre.",
      ar: 'يعرض هذا الدرس الأدوات اللغوية لإبداء الرأي، والموافقة أو المعارضة، بالإضافة إلى التوظيف السليم للأزمنة داخل الرسالة.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. Donner son opinion et exprimer accord / désaccord (الرأي والموافقة والرفض)',
        headingAr: '1. صيغ إبداء الرأي والموافقة أو الاختلاف المهذب',
        colorClass: 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-100',
        items: [
          {
            fr: "Pour donner son avis : « À mon avis, ... » / « Je pense que... » / « Personnellement, j'estime que... »",
            ar: 'لإبداء الرأي: « في رأيي، ... » / « أظن أن... » / « شخصياً، أعتبر أن... »'
          },
          {
            fr: "Pour approuver : « Je suis tout à fait d'accord avec vous » / « Vous avez entièrement raison de proposer cela. »",
            ar: 'للموافقة: « أتفق معكم تماماً » / « معكم كل الحق في اقتراح ذلك. »'
          },
          {
            fr: "Pour exprimer un désaccord poli : « Je respecte votre point de vue, mais je ne le partage pas car... »",
            ar: 'للمعارضة المهذبة: « أحترم وجهة نظركم، لكنني لا أشاطركم الرأي لأن... »'
          }
        ]
      },
      {
        headingFr: '2. Les temps verbaux dans la correspondance (الأزمنة في الرسالة)',
        headingAr: '2. القيم الزمنية المستعملة في كتابة الرسالة',
        colorClass: 'border-purple-500 bg-purple-50/70 dark:bg-purple-950/30 text-purple-950 dark:text-purple-100',
        items: [
          {
            fr: "Le présent d'énonciation indique le moment où l'on écrit (ex. : Je vous écris aujourd'hui pour vous informer).",
            ar: 'يدل الحاضر (Présent) على لحظة كتابة الرسالة (مثال: أكتب لكم اليوم لإخباركم).'
          },
          {
            fr: "Le passé composé rapporte un fait accompli avant l'écriture (ex. : Nous avons déjà visité le musée).",
            ar: 'ينقل الماضي المركب (Passé composé) حدثاً وقع قبل كتابة الرسالة (مثال: لقد زرنا المتحف سابقاً).'
          },
          {
            fr: "Le futur simple annonce un projet à venir (ex. : L'exposition aura lieu le mois prochain).",
            ar: 'يعلن المستقبل البسيط (Futur simple) عن مشروع قادم (مثال: سيقام المعرض الشهر المقبل).'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Personnellement, je trouve cette initiative très utile pour les élèves en difficulté.",
        ar: 'شخصياً، أجد هذه المبادرة مفيدة جداً للتلاميذ المتعثرين.'
      },
      {
        fr: "Je vous écris (présent) car nous avons lancé (passé composé) un projet qui débutera (futur) lundi.",
        ar: 'أكتب لكم (حاضر) لأننا أطلقنا (ماضٍ مركب) مشروعاً سينطلق (مستقبل) يوم الاثنين.'
      }
    ],
    examTipBilingual: {
      fr: "Justifiez toujours votre opinion ou votre désaccord par une cause (car, parce que) pour obtenir la note complète.",
      ar: 'علّل دائماً رأيك أو معارضتك بذكر السبب (car، parce que) لنيل النقطة الكاملة.'
    },
    keyTakeawaysBilingual: [
      { fr: 'Opinion : À mon avis / Je pense que + indicatif', ar: 'الرأي: في رأيي / أعتقد أن + صيغة الدلالة' },
      { fr: 'Passé composé / Présent / Futur structurent la lettre', ar: 'الماضي المركب والحاضر والمستقبل تنظم زمن الرسالة' }
    ],
    miniExerciseBilingual: {
      questionFr: "Exprimez poliment votre désaccord avec un camarade qui veut annuler la sortie scolaire.",
      questionAr: 'عبّر بأدب عن عدم موافقتك مع زميل يريد إلغاء الخرجة المدرسية.',
      answerFr: "Je comprends ton hésitation, mais je ne suis pas d'accord pour annuler cette sortie car elle est très enrichissante.",
      answerAr: 'أتفهم ترددك، لكنني لا أوافق على إلغاء هذه الخرجة لأنها غنية ومفيدة جداً.'
    },
    conclusion: 'تنويع الأزمنة وتبرير الآراء يقويان النص الحجاجي داخل الرسالة.',
    conclusionBilingual: {
      fr: "Savoir justifier son point de vue rend la correspondance plus convaincante et plus nuancée.",
      ar: 'القدرة على تبرير الرأي تجعل المراسلة أكثر إقناعاً ورصانة.'
    }
  },
  {
    id: 'sum-fr-10',
    lessonNumber: 10,
    sequence: 'Séquence 4',
    title: '10 - رسالة الشكاية الإدارية والرسالة المفتوحة للتوعية',
    frenchTitle: 'La lettre de réclamation et la lettre ouverte de sensibilisation',
    unit: 'الدورة الأولى (Passerelle - Semestre 1): المراسلات',
    cycle: 'الدورة الأولى',
    category: 'Production Écrite',
    introduction: 'إتقان صياغة الشكاية المهذبة لرفع ضرر، والرسالة المفتوحة لتحسيس العموم بقضية مجتمعية أو بيئية.',
    introductionBilingual: {
      fr: "Cette dernière leçon du premier semestre enseigne comment formuler une réclamation administrative ferme mais polie, et comment rédiger une lettre ouverte.",
      ar: 'يعلم هذا الدرس الأخير من الدورة الأولى كيفية صياغة شكاية إدارية حازمة ومهذبة، وكيفية كتابة رسالة مفتوحة.'
    },
    sections: [],
    bilingualSections: [
      {
        headingFr: '1. La lettre de réclamation (رسالة الشكاية الرسمية)',
        headingAr: '1. عناصر رسالة الشكاية الإدارية المهذبة',
        colorClass: 'border-rose-500 bg-rose-50/70 dark:bg-rose-950/30 text-rose-950 dark:text-rose-100',
        items: [
          {
            fr: "On décrit d'abord les faits ou la panne de manière objective et précise (lieu, durée).",
            ar: 'نصف أولاً الوقائع أو العطب بشكل موضوعي ودقيق (المكان، المدة).'
          },
          {
            fr: "On explique ensuite les conséquences négatives sur la sécurité, la santé ou les études.",
            ar: 'نوضح بعد ذلك النتائج السلبية على السلامة أو الصحة أو الدراسة.'
          },
          {
            fr: "On termine en demandant poliment une intervention rapide sans jamais employer d'insultes.",
            ar: 'نختم بطلب تدخل سريع بأسلوب مهذب دون استعمال أي عبارات جارحة.'
          }
        ]
      },
      {
        headingFr: '2. La lettre ouverte (الرسالة المفتوحة للرأي العام)',
        headingAr: '2. خصائص الرسالة المفتوحة للتوعية والتحسيس',
        colorClass: 'border-teal-500 bg-teal-50/70 dark:bg-teal-950/30 text-teal-950 dark:text-teal-100',
        items: [
          {
            fr: "La lettre ouverte s'adresse à un large public (citoyens, jeunes, parents) et défend une grande cause (eau, environnement, sécurité routière).",
            ar: 'الرسالة المفتوحة موجهة لجمهور واسع (المواطنين، الشباب، الآباء) وتدافع عن قضية كبرى (الماء، البيئة، السلامة الطرقية).'
          },
          {
            fr: "Elle emploie l'impératif d'exhortation (« Agissons ! », « Protégeons ! ») et des arguments convaincants.",
            ar: 'تستعمل صيغة الأمر الجماعي للحث (« لنتحرك! »، « لنحمِ! ») وحججاً مقنعة.'
          }
        ]
      }
    ],
    examplesFr: [
      {
        fr: "Nous avons le regret d'attirer votre attention sur l'absence d'éclairage devant notre collège.",
        ar: 'يؤسفنا أن نلفت انتباهكم إلى غياب الإنارة أمام إعداديتنا.'
      },
      {
        fr: "Chers concitoyens, préserver l'eau aujourd'hui, c'est sauver la vie de demain.",
        ar: 'أيها المواطنون الأعزاء، الحفاظ على الماء اليوم هو إنقاذ لحياة الغد.'
      }
    ],
    examTipBilingual: {
      fr: "Dans une réclamation, gardez toujours un ton respectueux même si le problème est grave : « Je me permets d'attirer votre bienveillante attention... ».",
      ar: 'في رسالة الشكاية، حافظ دائماً على نبرة محترمة حتى لو كان المشكل خطيراً: « أسمح لنفسي بلفت انتباهكم الكريم... ».'
    },
    keyTakeawaysBilingual: [
      { fr: 'Réclamation = Constat + Conséquences + Demande de solution', ar: 'الشكاية = معاينة الخلل + الأضرار + طلب الحل' },
      { fr: 'Lettre ouverte = Appel collectif + Impératif + Arguments', ar: 'الرسالة المفتوحة = نداء جماعي + أمر حثي + حجج' }
    ],
    miniExerciseBilingual: {
      questionFr: "Transformez cette phrase agressive en phrase officielle polie : « Réparez tout de suite les fenêtres cassées, c'est honteux ! »",
      questionAr: 'حوّل هذه العبارة الحادة إلى صيغة إدارية مهذبة: « Réparez tout de suite les fenêtres cassées, c\'est honteux ! »',
      answerFr: "Nous sollicitons respectueusement votre intervention afin de réparer les fenêtres endommagées dans les meilleurs délais.",
      answerAr: 'نلتمس باحترام تدخلكم من أجل إصلاح النوافذ المتضررة في أقرب الآجال.'
    },
    conclusion: 'نختم بذلك دروس الدورة الأولى من Passerelle وننطلق للدورة الثانية (القصة القصيرة والإطار المرجعي الجهوي).',
    conclusionBilingual: {
      fr: "Cette leçon achève le programme de la correspondance (Semestre 1) et prépare au récit littéraire du Semestre 2.",
      ar: 'يختم هذا الدرس برنامج المراسلات (الدورة الأولى) ويمهد للسرد الأدبي في الدورة الثانية.'
    }
  }
];
