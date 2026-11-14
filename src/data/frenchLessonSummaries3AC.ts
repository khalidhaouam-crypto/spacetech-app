// Unified Passerelle Français 3AC Lesson Summaries (24 Lessons: Semestre 1 & Semestre 2)
// Bilingual (Français + العربية sentence-by-sentence) aligned with Passerelle & Official Reference Framework

export {
  type BilingualLine,
  type BilingualSection,
  type FrenchLessonSummaryItem,
} from './frenchTypes3AC';

import type { FrenchLessonSummaryItem } from './frenchTypes3AC';
import { FRENCH_CYCLE1_SUMMARIES } from './frenchCycle1Summaries3AC';
import { FRENCH_CYCLE2_SUMMARIES } from './frenchCycle2Summaries3AC';

export const FRENCH_SUMMARIES: FrenchLessonSummaryItem[] = [
  ...FRENCH_CYCLE1_SUMMARIES,
  ...FRENCH_CYCLE2_SUMMARIES,
];
