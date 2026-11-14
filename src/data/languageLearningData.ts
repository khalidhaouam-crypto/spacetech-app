import { FRENCH_COURSE } from './languageLearningFrench';
import { ENGLISH_COURSE } from './languageLearningEnglish';
import { KOREAN_COURSE } from './languageLearningKorean';
import type { TargetLangId, TargetLanguageCourse } from './languageLearningTypes';

export * from './languageLearningTypes';

export const LANGUAGE_COURSES: Record<TargetLangId, TargetLanguageCourse> = {
  fr: FRENCH_COURSE,
  en: ENGLISH_COURSE,
  ko: KOREAN_COURSE
};

export const LANGUAGE_COURSE_LIST: TargetLanguageCourse[] = [
  FRENCH_COURSE,
  ENGLISH_COURSE,
  KOREAN_COURSE
];
