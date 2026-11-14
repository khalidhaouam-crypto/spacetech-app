// Shared Bilingual Types for Passerelle Français 3AC
import type { LessonSummaryItem } from './hgLessonSummaries3AC';

export interface BilingualLine {
  fr: string;
  ar: string;
}

export interface BilingualSection {
  headingFr: string;
  headingAr: string;
  colorClass: string;
  items: BilingualLine[];
}

export interface FrenchLessonSummaryItem extends LessonSummaryItem {
  sequence: string;
  frenchTitle: string;
  category: 'Lecture' | 'Langue & Communication' | 'Production Écrite';
  introductionBilingual: BilingualLine;
  bilingualSections: BilingualSection[];
  examplesFr: BilingualLine[];
  examTipBilingual: BilingualLine;
  keyTakeawaysBilingual: BilingualLine[];
  miniExerciseBilingual: {
    questionFr: string;
    questionAr: string;
    answerFr: string;
    answerAr: string;
  };
  conclusionBilingual: BilingualLine;
}
