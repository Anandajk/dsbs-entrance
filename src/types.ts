export type PaperSetCode = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  set: PaperSetCode; // 'A' | 'B' | 'C' | 'D'
  section: string;
  question: string;
  options: [string, string, string, string];
  correctAnswer: number; // 0, 1, 2, or 3 (kept server-side during exam)
  explanation?: string;
  marks?: number;
}

export interface CandidateInfo {
  name: string;
  email: string;
  phone: string;
  rollNumber: string;
  assignedSet?: PaperSetCode;
}

export interface SubmissionRecord {
  id: string;
  candidate: CandidateInfo;
  paperSet: string; // 'Set A' | 'Set B' | 'Set C' | 'Set D'
  startedAt: string; // ISO date string
  submittedAt: string; // ISO date string
  timeTakenSeconds: number;
  totalQuestions: number;
  attemptedCount: number;
  correctCount: number;
  incorrectCount: number;
  unansweredCount: number;
  score: number;
  percentage: number;
  status: 'Pass' | 'Fail';
  tabSwitches: number;
  sectionScores: Record<string, { total: number; correct: number; attempted: number }>;
  answers: Record<number, number>; // questionId -> selectedOptionIndex (0-3)
}

export interface ExamSettings {
  examTitle: string;
  institutionName: string;
  durationSeconds: number; // e.g. 60 by default as user requested
  passingPercentage: number;
  enableNegativeMarking: boolean;
  negativeMarkPenalty: number; // e.g. 0.25
  allowReviewAfterSubmit: boolean;
  shuffleQuestions: boolean;
  proctoringStrictness: 'low' | 'medium' | 'high';
  paperSets: PaperSetCode[];
  questionsPerSet: number;
}

