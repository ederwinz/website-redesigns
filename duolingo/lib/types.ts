export interface NavLink {
  label: string;
  href: string;
}

export interface Course {
  id: string;
  name: string;
  emblem: string;
  learnerLabel: string;
  cefrLabel: string;
}

export interface Tenet {
  id: string;
  greekLetter: string;
  title: string;
  maxim: string;
  body: string;
}

export interface PatronTier {
  id: string;
  name: string;
  priceMonthly: number | null;
  priceNote: string;
  recommended: boolean;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  attribution: string;
  source: string;
  ironic?: boolean;
}

export interface ExerciseQuestion {
  id: string;
  prompt: string;
  sourceLanguage: string;
  choices: string[];
  correctIndex: number;
  correctFeedback: string;
  incorrectFeedback: string;
}

export interface RankingEntry {
  id: string;
  name: string;
  discipline: string;
  standing: string;
}

export interface AppStoreBadge {
  id: string;
  label: string;
  href: string;
}
