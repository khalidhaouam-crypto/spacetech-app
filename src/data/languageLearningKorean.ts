import type { TargetLanguageCourse } from './languageLearningTypes';
import { KOREAN_QUIZ_BY_LEVEL } from './languageQuizKorean';

export const KOREAN_COURSE: TargetLanguageCourse = {
  id: 'ko',
  nameAr: 'اللغة الكورية',
  nativeName: '한국어',
  flag: '🇰🇷',
  speechLang: 'ko-KR',
  accentColor: '#e11d48',
  taglineAr: 'تعلّم المفردات الأساسية، الحوارات اليومية، واختبر مستواك في 3 مستويات متدرجة',
  vocabulary: [
    // 1. Greetings
    { id: 'ko-v-1', category: 'greetings', categoryAr: 'التحيات والتعارف', word: '안녕하세요', reading: 'An-nyeong-ha-se-yo', approxAr: 'أنّيونغ-هاسيو', meaningAr: 'مرحباً / السلام عليكم (مهذبة)', example: '안녕하세요, 만나서 반갑습니다.', exampleMeaningAr: 'مرحباً، سررت بلقائك.' },
    { id: 'ko-v-2', category: 'greetings', categoryAr: 'التحيات والتعارف', word: '감사합니다', reading: 'Gam-sa-ham-ni-da', approxAr: 'غامسا-هامنيدا', meaningAr: 'شكراً جزيلاً (رسمية)', example: '도와주셔서 감사합니다.', exampleMeaningAr: 'شكراً جزيلاً لمساعدتي.' },
    { id: 'ko-v-3', category: 'greetings', categoryAr: 'التحيات والتعارف', word: '죄송합니다', reading: 'Joe-song-ham-ni-da', approxAr: 'تشوي-سونغ-هامنيدا', meaningAr: 'أنا آسف جداً (رسمية)', example: '늦어서 죄송합니다.', exampleMeaningAr: 'أعتذر عن التأخير.' },
    { id: 'ko-v-4', category: 'greetings', categoryAr: 'التحيات والتعارف', word: '네 / 아니요', reading: 'Ne / A-ni-yo', approxAr: 'نيه / أنيو', meaningAr: 'نعم / لا', example: '네, 알겠습니다.', exampleMeaningAr: 'نعم، فهمت ذلك.' },
    { id: 'ko-v-5', category: 'greetings', categoryAr: 'التحيات والتعارف', word: '반갑습니다', reading: 'Ban-gap-seum-ni-da', approxAr: 'بانغاب-سومنيدا', meaningAr: 'تشرفت بلقائك', example: '처음 뵙겠습니다, 반갑습니다.', exampleMeaningAr: 'أول لقاء لي معك، تشرفت بك.' },
    { id: 'ko-v-6', category: 'greetings', categoryAr: 'التحيات والتعارف', word: '안녕히 가세요', reading: 'An-nyeong-hi ga-se-yo', approxAr: 'أنّيونغ-هي غاسيو', meaningAr: 'مع السلامة (لمن يغادر)', example: '조심히 안녕히 가세요!', exampleMeaningAr: 'اذهب بأمان، مع السلامة!' },
    { id: 'ko-v-7', category: 'greetings', categoryAr: 'التحيات والتعارف', word: '잠시만요', reading: 'Jam-si-man-yo', approxAr: 'جامشي-مانيو', meaningAr: 'لحظة من فضلك / عفواً', example: '잠시만요, 지나갈게요.', exampleMeaningAr: 'عفواً لحظة، سأمر.' },
    { id: 'ko-v-8', category: 'greetings', categoryAr: 'التحيات والتعارف', word: '괜찮아요', reading: 'Gwaen-chan-a-yo', approxAr: 'غوين-تشانايو', meaningAr: 'لا بأس / أنا بخير', example: '괜찮아요, 걱정하지 마세요.', exampleMeaningAr: 'لا بأس، لا تقلق.' },

    // 2. Time & Numbers
    { id: 'ko-v-9', category: 'time', categoryAr: 'الأرقام والوقت', word: '오늘', reading: 'O-neul', approxAr: 'أونول', meaningAr: 'اليوم', example: '오늘 날씨가 아주 좋아요.', exampleMeaningAr: 'الطقس اليوم جميل جداً.' },
    { id: 'ko-v-10', category: 'time', categoryAr: 'الأرقام والوقت', word: '내일', reading: 'Nae-il', approxAr: 'نيه-إيل', meaningAr: 'غداً', example: '내일 학교에서 만나요.', exampleMeaningAr: 'نلتقي غداً في المدرسة.' },
    { id: 'ko-v-11', category: 'time', categoryAr: 'الأرقام والوقت', word: '어제', reading: 'Eo-je', approxAr: 'أو-جيه', meaningAr: 'أمس / البارحة', example: '어제 한국어를 공부했어요.', exampleMeaningAr: 'البارحة درست اللغة الكورية.' },
    { id: 'ko-v-12', category: 'time', categoryAr: 'الأرقام والوقت', word: '지금', reading: 'Ji-geum', approxAr: 'جي-غوم', meaningAr: 'الآن', example: '지금 몇 시예요?', exampleMeaningAr: 'كم الساعة الآن؟' },
    { id: 'ko-v-13', category: 'time', categoryAr: 'الأرقام والوقت', word: '하나, 둘, 셋', reading: 'Ha-na, dul, set', approxAr: 'هانا، دول، سيت', meaningAr: 'واحد، اثنان، ثلاثة (كوري أصيل)', example: '사과 하나 주세요.', exampleMeaningAr: 'أعطني تفاحة واحدة من فضلك.' },
    { id: 'ko-v-14', category: 'time', categoryAr: 'الأرقام والوقت', word: '일, 이, 삼', reading: 'Il, i, sam', approxAr: 'إيل، إي، سام', meaningAr: '1، 2، 3 (للساعات والتواريخ والمال)', example: '일 번을 선택하세요.', exampleMeaningAr: 'اختر الرقم واحد.' },

    // 3. Family & People
    { id: 'ko-v-15', category: 'family', categoryAr: 'العائلة والناس', word: '가족', reading: 'Ga-jok', approxAr: 'غاجوك', meaningAr: 'العائلة', example: '우리 가족은 다섯 명이에요.', exampleMeaningAr: 'عائلتنا مكونة من خمسة أفراد.' },
    { id: 'ko-v-16', category: 'family', categoryAr: 'العائلة والناس', word: '어머니 / 아버지', reading: 'Eo-meo-ni / A-beo-ji', approxAr: 'أوموني / أبوجي', meaningAr: 'الأم / الأب', example: '어머니 요리가 최고예요.', exampleMeaningAr: 'طبخ أمي هو الأفضل.' },
    { id: 'ko-v-17', category: 'family', categoryAr: 'العائلة والناس', word: '친구', reading: 'Chin-gu', approxAr: 'تشينغو', meaningAr: 'صديق', example: '제 친구는 아주 친절해요.', exampleMeaningAr: 'صديقي لطيف جداً.' },
    { id: 'ko-v-18', category: 'family', categoryAr: 'العائلة والناس', word: '선생님', reading: 'Seon-saeng-nim', approxAr: 'سون-سينغ-نيم', meaningAr: 'الأستاذ / المعلم', example: '선생님, 질문이 있어요.', exampleMeaningAr: 'أستاذي، لدي سؤال.' },
    { id: 'ko-v-19', category: 'family', categoryAr: 'العائلة والناس', word: '학생', reading: 'Hak-saeng', approxAr: 'هاك-سينغ', meaningAr: 'طالب / تلميذ', example: '저는 중학교 학생이에요.', exampleMeaningAr: 'أنا تلميذ في الإعدادية.' },
    { id: 'ko-v-20', category: 'family', categoryAr: 'العائلة والناس', word: '동생', reading: 'Dong-saeng', approxAr: 'دونغ-سينغ', meaningAr: 'أخ / أخت أصغر', example: '제 동생은 열 살이에요.', exampleMeaningAr: 'أخي الأصغر عمره عشر سنوات.' },

    // 4. School & Study
    { id: 'ko-v-21', category: 'school', categoryAr: 'المدرسة والدراسة', word: '학교', reading: 'Hak-gyo', approxAr: 'هاك-غيو', meaningAr: 'المدرسة', example: '아침 여덟 시에 학교에 가요.', exampleMeaningAr: 'أذهب إلى المدرسة في الثامنة صباحاً.' },
    { id: 'ko-v-22', category: 'school', categoryAr: 'المدرسة والدراسة', word: '공부', reading: 'Gong-bu', approxAr: 'غونغ-بو', meaningAr: 'الدراسة / المذاكرة', example: '매일 조금씩 공부해요.', exampleMeaningAr: 'أدرس قليلاً كل يوم.' },
    { id: 'ko-v-23', category: 'school', categoryAr: 'المدرسة والدراسة', word: '책 / 공책', reading: 'Chaek / Gong-chaek', approxAr: 'تشيك / غونغ-تشيك', meaningAr: 'كتاب / دفتر', example: '공책에 새 단어를 적어요.', exampleMeaningAr: 'أكتب الكلمات الجديدة في الدفتر.' },
    { id: 'ko-v-24', category: 'school', categoryAr: 'المدرسة والدراسة', word: '도서관', reading: 'Do-seo-gwan', approxAr: 'دو-سو-غوان', meaningAr: 'المكتبة', example: '도서관은 아주 조용해요.', exampleMeaningAr: 'المكتبة هادئة جداً.' },
    { id: 'ko-v-25', category: 'school', categoryAr: 'المدرسة والدراسة', word: '질문 / 대답', reading: 'Jil-mun / Dae-dap', approxAr: 'جيل-مون / ديه-داب', meaningAr: 'سؤال / جواب', example: '질문 있으면 손 드세요.', exampleMeaningAr: 'إذا كان هناك سؤال فارفع يدك.' },
    { id: 'ko-v-26', category: 'school', categoryAr: 'المدرسة والدراسة', word: '한국어', reading: 'Han-gu-geo', approxAr: 'هان-غو-غو', meaningAr: 'اللغة الكورية', example: '한국어 발음이 재미있어요.', exampleMeaningAr: 'النطق بالكورية ممتع.' },

    // 5. Food & Drinks
    { id: 'ko-v-27', category: 'food', categoryAr: 'الطعام والشراب', word: '물', reading: 'Mul', approxAr: 'مول', meaningAr: 'ماء', example: '물 한 잔 주세요.', exampleMeaningAr: 'أعطني كأس ماء من فضلك.' },
    { id: 'ko-v-28', category: 'food', categoryAr: 'الطعام والشراب', word: '밥', reading: 'Bap', approxAr: 'باب', meaningAr: 'أرز / وجبة طعام', example: '점심 밥 맛있게 먹었어요.', exampleMeaningAr: 'تناولت وجبة الغداء بشهية.' },
    { id: 'ko-v-29', category: 'food', categoryAr: 'الطعام والشراب', word: '차 / 커피', reading: 'Cha / Keo-pi', approxAr: 'تشا / كو-بي', meaningAr: 'شاي / قهوة', example: '민트 차를 좋아해요.', exampleMeaningAr: 'أحب الشاي بالنعناع.' },
    { id: 'ko-v-30', category: 'food', categoryAr: 'الطعام والشراب', word: '맛있어요', reading: 'Ma-si-sseo-yo', approxAr: 'ماشي-سويو', meaningAr: 'إنه لذيذ!', example: '이 음식이 정말 맛있어요!', exampleMeaningAr: 'هذا الطعام لذيذ حقاً!' },
    { id: 'ko-v-31', category: 'food', categoryAr: 'الطعام والشراب', word: '과일', reading: 'Gwa-il', approxAr: 'غوا-إيل', meaningAr: 'فواكه', example: '신선한 과일을 자주 먹어요.', exampleMeaningAr: 'أتناول الفواكه الطازجة كثيراً.' },

    // 6. Travel & Places
    { id: 'ko-v-32', category: 'travel', categoryAr: 'السفر والأماكن', word: '지하철역', reading: 'Ji-ha-cheol-yeok', approxAr: 'جيها-تشول-يوك', meaningAr: 'محطة المترو', example: '지하철역이 어디에 있어요?', exampleMeaningAr: 'أين توجد محطة المترو؟' },
    { id: 'ko-v-33', category: 'travel', categoryAr: 'السفر والأماكن', word: '오른쪽 / 왼쪽', reading: 'O-reun-jjok / Oen-jjok', approxAr: 'أورون-تشوك / وين-تشوك', meaningAr: 'يمين / يسار', example: '다음 모퉁이에서 오른쪽으로 가세요.', exampleMeaningAr: 'اتجه يميناً عند المنعطف التالي.' },
    { id: 'ko-v-34', category: 'travel', categoryAr: 'السفر والأماكن', word: '직진', reading: 'Jik-jin', approxAr: 'جيك-جين', meaningAr: 'السير مباشرة للأمام', example: '쭉 직진하면 공원이 나와요.', exampleMeaningAr: 'إذا سرت مباشرة ستظهر الحديقة.' },
    { id: 'ko-v-35', category: 'travel', categoryAr: 'السفر والأماكن', word: '공항', reading: 'Gong-hang', approxAr: 'غونغ-هانغ', meaningAr: 'المطار', example: '비행기가 공항에 도착했어요.', exampleMeaningAr: 'وصلت الطائرة إلى المطار.' },
    { id: 'ko-v-36', category: 'travel', categoryAr: 'السفر والأماكن', word: '모로코 / 한국', reading: 'Mo-ro-ko / Han-guk', approxAr: 'موروكو / هانغوك', meaningAr: 'المغرب / كوريا', example: '저는 모로코에서 왔어요.', exampleMeaningAr: 'أنا قادم من المغرب.' },

    // 7. Everyday Verbs
    { id: 'ko-v-37', category: 'verbs', categoryAr: 'الأفعال اليومية', word: '가다 / 오다', reading: 'Ga-da / O-da', approxAr: 'غادا / أودا', meaningAr: 'يذهب / يأتي', example: '집에 가요. / 친구가 와요.', exampleMeaningAr: 'أذهب للبيت. / صديقي يأتي.' },
    { id: 'ko-v-38', category: 'verbs', categoryAr: 'الأفعال اليومية', word: '배우다', reading: 'Bae-u-da', approxAr: 'بيه-أودا', meaningAr: 'يتعلم', example: '저는 한국어를 배워요.', exampleMeaningAr: 'أنا أتعلم اللغة الكورية.' },
    { id: 'ko-v-39', category: 'verbs', categoryAr: 'الأفعال اليومية', word: '이해하다', reading: 'I-hae-ha-da', approxAr: 'إي-هيه-هادا', meaningAr: 'يفهم', example: '이제 잘 이해했어요.', exampleMeaningAr: 'الآن فهمت جيداً.' },
    { id: 'ko-v-40', category: 'verbs', categoryAr: 'الأفعال اليومية', word: '말하다', reading: 'Mal-ha-da', approxAr: 'مال-هادا', meaningAr: 'يتكلم', example: '천천히 말해 주세요.', exampleMeaningAr: 'تحدث ببطء من فضلك.' },
    { id: 'ko-v-41', category: 'verbs', categoryAr: 'الأفعال اليومية', word: '읽다 / 쓰다', reading: 'Ik-da / Sseu-da', approxAr: 'إيكدا / سودا', meaningAr: 'يقرأ / يكتب', example: '한글을 읽고 쓸 수 있어요.', exampleMeaningAr: 'أستطيع قراءة وكتابة الهانغول.' },
    { id: 'ko-v-42', category: 'verbs', categoryAr: 'الأفعال اليومية', word: '좋아하다', reading: 'Jo-a-ha-da', approxAr: 'جوا-هادا', meaningAr: 'يحب / يعجب بـ', example: '새로운 언어를 좋아해요.', exampleMeaningAr: 'أحب اللغات الجديدة.' },

    // 8. Adjectives & Feelings
    { id: 'ko-v-43', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: '좋아요', reading: 'Jo-a-yo', approxAr: 'جوايو', meaningAr: 'جيد / يعجبني', example: '이 아이디어가 정말 좋아요!', exampleMeaningAr: 'هذه الفكرة جيدة حقاً!' },
    { id: 'ko-v-44', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: '재미있어요', reading: 'Jae-mi-i-sseo-yo', approxAr: 'جيمي-إيسويو', meaningAr: 'ممتع / شيق', example: '한글 공부가 재미있어요.', exampleMeaningAr: 'دراسة الهانغول ممتعة.' },
    { id: 'ko-v-45', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: '쉽다 / 어렵다', reading: 'Swip-da / Eo-ryeop-da', approxAr: 'شويبدا / أوريوبدا', meaningAr: 'سهل / صعب', example: '연습하면 쉬워져요.', exampleMeaningAr: 'مع التمرين يصبح سهلاً.' },
    { id: 'ko-v-46', category: 'adjectives', categoryAr: 'الصفات والمشاعر', word: '행복해요', reading: 'Haeng-bok-hae-yo', approxAr: 'هينغ-بوك-هيو', meaningAr: 'سعيد', example: '오늘 정말 행복해요.', exampleMeaningAr: 'أنا سعيد حقاً اليوم.' }
  ],
  dialogues: [
    {
      id: 'ko-d-1',
      titleAr: 'التعارف لأول مرة',
      titleTarget: '첫 인사 (Cheot in-sa)',
      level: 'مبتدئ',
      contextAr: 'تحية مهذبة والتعريف بالاسم والبلد باللغة الكورية بصيغة الاحترام اليومية (-아요/어요).',
      lines: [
        { speaker: '지민 (Jimin)', text: '안녕하세요! 이름이 뭐예요?', reading: 'An-nyeong-ha-se-yo! I-reu-mi mwo-ye-yo?', meaningAr: 'مرحباً! ما اسمك؟' },
        { speaker: '아담 (Adam)', text: '안녕하세요! 저는 아담이에요. 모로코에서 왔어요.', reading: 'An-nyeong-ha-se-yo! Jeo-neun A-dam-i-e-yo. Mo-ro-ko-e-seo wa-sseo-yo.', meaningAr: 'مرحباً! أنا آدم. أنا من المغرب.' },
        { speaker: '지민 (Jimin)', text: '반가워요, 아담 씨! 한국어를 잘하시네요.', reading: 'Ban-ga-wo-yo, A-dam ssi! Han-gu-geo-reul jal-ha-si-ne-yo.', meaningAr: 'تشرفت بك يا آدم! أنت تجيد الكورية بشكل جيد.' },
        { speaker: '아담 (Adam)', text: '아니에요, 아직 배우고 있어요. 감사합니다!', reading: 'A-ni-e-yo, a-jik bae-u-go i-sseo-yo. Gam-sa-ham-ni-da!', meaningAr: 'لا، ما زلت أتعلمها. شكراً جزيلاً!' }
      ],
      keyPhrases: [
        { phrase: '저는 ...이에요/예요', reading: 'Jeo-neun ...i-e-yo', meaningAr: 'أنا (اسمي)...' },
        { phrase: '...에서 왔어요', reading: '...e-seo wa-sseo-yo', meaningAr: 'أنا من (بلد)...' },
        { phrase: '만나서 반가워요', reading: 'Man-na-seo ban-ga-wo-yo', meaningAr: 'سعيد بلقائك' }
      ]
    },
    {
      id: 'ko-d-2',
      titleAr: 'في المقهى والطلب بأدب',
      titleTarget: '카페에서 주문하기',
      level: 'مبتدئ',
      contextAr: 'طلب مشروب في مقهى بكوريا واستخدام كلمة « 주세요 » (أعطني من فضلك).',
      lines: [
        { speaker: '직원 (Staff)', text: '어서 오세요! 무엇을 드릴까요?', reading: 'Eo-seo o-se-yo! Mu-eo-seul deu-ril-kka-yo?', meaningAr: 'أهلاً وسهلاً! ماذا أقدم لكم؟' },
        { speaker: '사라 (Sara)', text: '따뜻한 녹차 한 잔 주세요.', reading: 'Tta-tteu-tan nok-cha han jan ju-se-yo.', meaningAr: 'أعطني كوب شاي أخضر ساخناً من فضلك.' },
        { speaker: '직원 (Staff)', text: '여기서 드실 건가요?', reading: 'Yeo-gi-seo deu-sil geon-ga-yo?', meaningAr: 'هل ستتناولينه هنا؟' },
        { speaker: '사라 (Sara)', text: '네, 여기서 마실게요. 얼마예요?', reading: 'Ne, yeo-gi-seo ma-sil-ge-yo. Eol-ma-ye-yo?', meaningAr: 'نعم، سأشربه هنا. كم الثمن؟' }
      ],
      keyPhrases: [
        { phrase: '... 주세요', reading: '... ju-se-yo', meaningAr: 'أعطني ... من فضلك' },
        { phrase: '얼마예요?', reading: 'Eol-ma-ye-yo?', meaningAr: 'كم الثمن؟' },
        { phrase: '잘 먹겠습니다', reading: 'Jal meok-ge-sseum-ni-da', meaningAr: 'سأتناوله بشهية (قبل الأكل)' }
      ]
    },
    {
      id: 'ko-d-3',
      titleAr: 'في الفصل الدراسي',
      titleTarget: '교실에서',
      level: 'أساسي',
      contextAr: 'الاستفسار عن معنى كلمة وطلب الإعادة ببطء في حصة اللغة الكورية.',
      lines: [
        { speaker: '학생 (Student)', text: '선생님, 이 단어의 뜻이 뭐예요?', reading: 'Seon-saeng-nim, i da-neo-ui tteu-si mwo-ye-yo?', meaningAr: 'أستاذي، ما معنى هذه الكلمة؟' },
        { speaker: '선생님 (Teacher)', text: '이 단어는 "연습"이에요. 매일 훈련한다는 뜻이에요.', reading: 'I da-neo-neun "yeon-seup"-i-e-yo...', meaningAr: 'هذه الكلمة هي "تدريب"، وتعني التمرن يومياً.' },
        { speaker: '학생 (Student)', text: '천천히 다시 한 번 말해 주세요.', reading: 'Cheon-cheon-hi da-si han beon mal-hae ju-se-yo.', meaningAr: 'أعد قولها مرة أخرى ببطء من فضلك.' },
        { speaker: '선생님 (Teacher)', text: '좋아요! 다 같이 따라 읽으세요.', reading: 'Jo-a-yo! Da ga-chi tta-ra il-geu-se-yo.', meaningAr: 'حسناً! رددوا القراءة جميعاً معي.' }
      ],
      keyPhrases: [
        { phrase: '다시 한 번 말해 주세요', reading: 'Da-si han beon mal-hae ju-se-yo', meaningAr: 'أعدها مرة أخرى من فضلك' },
        { phrase: '천천히 말해 주세요', reading: 'Cheon-cheon-hi mal-hae ju-se-yo', meaningAr: 'تكلم ببطء من فضلك' },
        { phrase: '이해했어요', reading: 'I-hae-hae-sseo-yo', meaningAr: 'فهمت!' }
      ]
    },
    {
      id: 'ko-d-4',
      titleAr: 'السؤال عن الطريق',
      titleTarget: '길 묻기',
      level: 'متوسط',
      contextAr: 'السؤال عن موقع المكتبة أو محطة المترو في المدينة.',
      lines: [
        { speaker: '여행자 (Traveler)', text: '실례지만, 도서관이 어디에 있어요?', reading: 'Sil-lye-ji-man, do-seo-gwa-ni eo-di-e i-sseo-yo?', meaningAr: 'عذراً، أين توجد المكتبة؟' },
        { speaker: '행인 (Local)', text: '이 길로 쭉 직진하세요. 그리고 왼쪽으로 가세요.', reading: 'I gil-lo jjuk jik-jin-ha-se-yo. Geu-ri-go oen-jjo-geu-ro ga-se-yo.', meaningAr: 'سر مباشرة في هذا الطريق، ثم اتجه يساراً.' },
        { speaker: '여행자 (Traveler)', text: '여기서 멀어요?', reading: 'Yeo-gi-seo meo-reo-yo?', meaningAr: 'هل هي بعيدة عن هنا؟' },
        { speaker: '행인 (Local)', text: '아니요, 걸어서 오 분쯤 걸려요.', reading: 'A-ni-yo, geo-reo-seo o bun-jjeum geol-lyeo-yo.', meaningAr: 'لا، تستغرق حوالي خمس دقائق مشياً.' }
      ],
      keyPhrases: [
        { phrase: '실례지만...', reading: 'Sil-lye-ji-man...', meaningAr: 'عذراً / لو سمحت...' },
        { phrase: '...이/가 어디에 있어요?', reading: '...eo-di-e i-sseo-yo?', meaningAr: 'أين يوجد...؟' },
        { phrase: '쭉 직진하세요', reading: 'Jjuk jik-jin-ha-se-yo', meaningAr: 'سر مباشرة للأمام' }
      ]
    }
  ],
  quizByLevel: KOREAN_QUIZ_BY_LEVEL
};
