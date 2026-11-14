export type TargetLangId = 'fr' | 'en' | 'ko';

export type QuizDifficulty = 'easy' | 'medium' | 'hard';

export interface VocabItem {
  id: string;
  category: string;
  categoryAr: string;
  word: string;
  reading: string; // IPA / Romanization
  approxAr: string; // Approximate Arabic pronunciation
  meaningAr: string;
  example: string;
  exampleMeaningAr: string;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  reading: string;
  meaningAr: string;
}

export interface DialogueScenario {
  id: string;
  titleAr: string;
  titleTarget: string;
  level: 'مبتدئ' | 'أساسي' | 'متوسط';
  contextAr: string;
  lines: DialogueLine[];
  keyPhrases: {
    phrase: string;
    reading: string;
    meaningAr: string;
  }[];
}

export interface LanguageQuizQuestion {
  id: string;
  questionAr: string;
  promptTarget?: string;
  audioText?: string;
  options: string[];
  correctIndex: number;
  explanationAr: string;
}

export interface TargetLanguageCourse {
  id: TargetLangId;
  nameAr: string;
  nativeName: string;
  flag: string;
  speechLang: string;
  accentColor: string;
  taglineAr: string;
  vocabulary: VocabItem[];
  dialogues: DialogueScenario[];
  quizByLevel: Record<QuizDifficulty, LanguageQuizQuestion[]>;
}
