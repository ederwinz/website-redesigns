import type {
  AppStoreBadge,
  Course,
  ExerciseQuestion,
  NavLink,
  PatronTier,
  RankingEntry,
  Tenet,
  Testimonial,
} from "@/lib/types";

export const siteConfig = {
  name: "The Athenaeum",
  tagline: "A society of learners, open to all.",
  learnerCount: "137.8 million",
  learnerCountNote:
    "scholars in residence, per Duolingo's Q1 2026 shareholder letter",
  copyrightYear: 2026,
};

export const navLinks: NavLink[] = [
  { label: "The Curriculum", href: "#curriculum" },
  { label: "The Tenets", href: "#tenets" },
  { label: "The Discipline", href: "#discipline" },
  { label: "Patronage", href: "#patronage" },
];

// Real course roster. The nine marked "Instruction through B2" reflect
// Duolingo's own 2026 announcement that those courses now teach through
// CEFR B2 (Duolingo Score 129); the rest remain foundational courses.
export const courses: Course[] = [
  { id: "es", name: "Spanish", emblem: "🇪🇸", learnerLabel: "The Iberian Track", cefrLabel: "Instruction through B2" },
  { id: "fr", name: "French", emblem: "🇫🇷", learnerLabel: "The Gallic Track", cefrLabel: "Instruction through B2" },
  { id: "de", name: "German", emblem: "🇩🇪", learnerLabel: "The Germanic Track", cefrLabel: "Instruction through B2" },
  { id: "it", name: "Italian", emblem: "🇮🇹", learnerLabel: "The Roman Vernacular", cefrLabel: "Instruction through B2" },
  { id: "pt", name: "Portuguese", emblem: "🇵🇹", learnerLabel: "The Lusophone Track", cefrLabel: "Instruction through B2" },
  { id: "ja", name: "Japanese", emblem: "🇯🇵", learnerLabel: "The Eastern Track", cefrLabel: "Instruction through B2" },
  { id: "ko", name: "Korean", emblem: "🇰🇷", learnerLabel: "The Peninsular Track", cefrLabel: "Instruction through B2" },
  { id: "zh", name: "Mandarin Chinese", emblem: "🇨🇳", learnerLabel: "The Continental Track", cefrLabel: "Instruction through B2" },
  { id: "la", name: "Latin", emblem: "🏛️", learnerLabel: "The Classical Track", cefrLabel: "Foundational Studies" },
  { id: "eo", name: "Esperanto", emblem: "🌍", learnerLabel: "The Universal Tongue", cefrLabel: "Foundational Studies" },
];

// The three pillars Duolingo states in its own live meta description
// ("100% free, fun, and scientifically proven to work"), translated
// into the Academy's register.
export const tenets: Tenet[] = [
  {
    id: "alpha",
    greekLetter: "Α",
    title: "Open to All",
    maxim: "Ouden aneu logou.",
    body: "Admission requires no fee and no pedigree. The Curriculum is offered freely, as knowledge ought to be.",
  },
  {
    id: "beta",
    greekLetter: "Β",
    title: "Joy in Inquiry",
    maxim: "Gnothi sauton, chairon.",
    body: "The examined tongue is a delighted one. Study here is treated as a pleasure of the mind, not a chore of memorization.",
  },
  {
    id: "gamma",
    greekLetter: "Γ",
    title: "The Empirical Method",
    maxim: "Peira didaskei.",
    body: "Every lesson is tested, measured, and refined by evidence — instruction built on science, not superstition.",
  },
];

export const patronTiers: PatronTier[] = [
  {
    id: "auditor",
    name: "Auditor",
    priceMonthly: 0,
    priceNote: "no fee, in perpetuity",
    recommended: false,
    benefits: [
      "Full access to the Curriculum",
      "The Discipline's daily practice ledger",
      "Standing in the Academy Rankings",
    ],
  },
  {
    id: "fellow",
    name: "Fellow",
    priceMonthly: 12.99,
    priceNote: "or $83.99 annually, the Fellowship rate",
    recommended: true,
    benefits: [
      "Unlimited standing to err, without penalty",
      "Personal review, drawn from your record of study",
      "Offline study, for the itinerant scholar",
      "No interruption of instruction by advertisement",
    ],
  },
];

// Real, attributable quotes — genuine press praise for the app itself,
// deliberately paired with a real quote about Duolingo's actual chaotic
// marketing strategy, presented in the same deadpan citation format.
export const testimonials: Testimonial[] = [
  {
    id: "wsj",
    quote: "Far and away the best language-learning app.",
    attribution: "The Wall Street Journal",
    source: "Staff review",
  },
  {
    id: "time",
    quote: "Duolingo may hold the secret to the future of education.",
    attribution: "TIME",
    source: "Staff review",
  },
  {
    id: "haberman",
    quote: "Unhinged marketing has helped put Duolingo on the map.",
    attribution: "Lia Haberman, Social Media Marketing Consultant, UCLA Extension",
    source: "The Daily Bruin",
    ironic: true,
  },
];

export const exerciseQuestions: ExerciseQuestion[] = [
  {
    id: "cogito",
    prompt: "Cogito, ergo sum.",
    sourceLanguage: "Latin",
    choices: [
      "I think, therefore I am.",
      "I came, I saw, I conquered.",
      "Knowledge itself is power.",
      "Seize the day.",
    ],
    correctIndex: 0,
    correctFeedback: "Well reasoned.",
    incorrectFeedback: "Reconsider your premise.",
  },
  {
    id: "labor",
    prompt: "Labor omnia vincit.",
    sourceLanguage: "Latin",
    choices: [
      "Work conquers all things.",
      "Time flies.",
      "Truth conquers all things.",
      "Fortune favors the bold.",
    ],
    correctIndex: 0,
    correctFeedback: "A sound translation.",
    incorrectFeedback: "The premise does not follow.",
  },
];

// Ranking is inherently personal/dynamic in the real product (each user's
// leaderboard is unique to their cohort), so — like House of Feelings' mock
// like counts — this is presented as illustrative standing, not sourced data.
export const rankingEntries: RankingEntry[] = [
  { id: "1", name: "A. Papadakis", discipline: "The Classical Track", standing: "First Chair" },
  { id: "2", name: "M. Odutola", discipline: "The Iberian Track", standing: "Second Chair" },
  { id: "3", name: "S. Laurent", discipline: "The Gallic Track", standing: "Third Chair" },
  { id: "4", name: "R. Kimura", discipline: "The Eastern Track", standing: "Fourth Chair" },
  { id: "5", name: "You", discipline: "The Universal Tongue", standing: "In Session" },
];

export const appStoreBadges: AppStoreBadge[] = [
  { id: "apple", label: "Download on the App Store", href: "https://apps.apple.com/us/app/duolingo-language-lessons/id570060128" },
  { id: "google", label: "Get it on Google Play", href: "https://play.google.com/store/apps/details?id=com.duolingo" },
];

export const footerLinks: NavLink[] = [
  { label: "The Curriculum", href: "#curriculum" },
  { label: "The Tenets", href: "#tenets" },
  { label: "Patronage", href: "#patronage" },
  { label: "Testimonia", href: "#testimonia" },
];
