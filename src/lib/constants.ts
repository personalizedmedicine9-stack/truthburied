// ============================================================
// Buried Truth - Constants & Translations
// ALL non-ASCII chars use \u escapes for corruption safety
// ============================================================

export type BoxLevel = 'sandook' | 'kanz' | 'sirr' | 'haqiqa';
export type Lang = 'ar' | 'en';
export type Theme = 'night' | 'day';
export type PageView = 'home' | 'boxes' | 'secrets' | 'facts' | 'believe' | 'stats' | 'settings';

export interface BoxLevelConfig {
  name: { ar: string; en: string };
  description: { ar: string; en: string };
  color: string;
  icon: string;
  bgColor: string;
}

export const boxLevels: Record<BoxLevel, BoxLevelConfig> = {
  sandook: {
    name: { ar: '\u0635\u0646\u062F\u0648\u0642', en: 'Box' },
    description: {
      ar: '\u0635\u0646\u062F\u0648\u0642 \u0639\u0627\u062F\u064A \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0645\u0641\u0627\u062C\u0622\u062A \u0635\u063A\u064A\u0631\u0629',
      en: 'A regular box containing small surprises',
    },
    color: '#8B7355',
    icon: '\uD83D\uDCE6',
    bgColor: '#1a1408',
  },
  kanz: {
    name: { ar: '\u0643\u0646\u0632', en: 'Treasure' },
    description: {
      ar: '\u0643\u0646\u0632 \u0645\u062E\u0641\u064A \u064A\u0643\u0634\u0641 \u0623\u0633\u0631\u0627\u0631\u0627\u064B \u0645\u062F\u0641\u0648\u0646\u0629',
      en: 'A hidden treasure revealing buried secrets',
    },
    color: '#DAA520',
    icon: '\uD83D\uDC51',
    bgColor: '#1a1505',
  },
  sirr: {
    name: { ar: '\u0633\u0631', en: 'Secret' },
    description: {
      ar: '\u0633\u0631 \u0639\u0645\u064A\u0642 \u064A\u0643\u0634\u0641 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u062E\u0641\u064A\u0629',
      en: 'A deep secret revealing the hidden truth',
    },
    color: '#9B59B6',
    icon: '\uD83D\uDD10',
    bgColor: '#0f0520',
  },
  haqiqa: {
    name: { ar: '\u062D\u0642\u064A\u0642\u0629', en: 'Truth' },
    description: {
      ar: '\u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u0645\u062F\u0641\u0648\u0646\u0629 \u0627\u0644\u062A\u064A \u0643\u0627\u0646\u062A \u0645\u062E\u0641\u064A\u0629',
      en: 'The buried truth that was hidden',
    },
    color: '#E74C3C',
    icon: '\u269B\uFE0F',
    bgColor: '#1a0505',
  },
};

// ============================================================
// Theme Days
// ============================================================
export interface ThemeDay {
  id: string;
  name: { ar: string; en: string };
  emoji: string;
  color: string;
}

export const themeDays: ThemeDay[] = [
  {
    id: 'mystery-monday',
    name: { ar: '\u0627\u062B\u0646\u064A\u0646 \u0627\u0644\u063A\u0645\u0648\u0636', en: 'Mystery Monday' },
    emoji: '\uD83D\uDD00',
    color: '#9B59B6',
  },
  {
    id: 'treasure-tuesday',
    name: { ar: '\u062B\u0644\u0627\u062B\u0627\u0621 \u0627\u0644\u0643\u0646\u0648\u0632', en: 'Treasure Tuesday' },
    emoji: '\uD83D\uDC8E',
    color: '#DAA520',
  },
  {
    id: 'wisdom-wednesday',
    name: { ar: '\u0623\u0631\u0628\u0639\u0627\u0621 \u0627\u0644\u062D\u0643\u0645\u0629', en: 'Wisdom Wednesday' },
    emoji: '\uD83D\uDCDC',
    color: '#3498DB',
  },
  {
    id: 'thriller-thursday',
    name: { ar: '\u062E\u0645\u064A\u0633 \u0627\u0644\u0625\u062B\u0627\u0631\u0629', en: 'Thriller Thursday' },
    emoji: '\uD83D\uDC80',
    color: '#E74C3C',
  },
  {
    id: 'fact-friday',
    name: { ar: '\u062C\u0645\u0639\u0629 \u0627\u0644\u062D\u0642\u0627\u0626\u0642', en: 'Fact Friday' },
    emoji: '\uD83C\uDF93',
    color: '#2ECC71',
  },
  {
    id: 'secret-saturday',
    name: { ar: '\u0633\u0628\u062A \u0627\u0644\u0623\u0633\u0631\u0627\u0631', en: 'Secret Saturday' },
    emoji: '\uD83D\uDD11',
    color: '#F39C12',
  },
  {
    id: 'surprise-sunday',
    name: { ar: '\u0623\u062D\u062F \u0627\u0644\u0645\u0641\u0627\u062C\u0622\u062A', en: 'Surprise Sunday' },
    emoji: '\uD83C\uDF89',
    color: '#E91E63',
  },
];

// ============================================================
// Secret Categories
// ============================================================
export interface SecretCategory {
  id: string;
  name: { ar: string; en: string };
  icon: string;
}

export const secretCategories: SecretCategory[] = [
  { id: 'confessions', name: { ar: '\u0627\u0639\u062A\u0631\u0627\u0641\u0627\u062A', en: 'Confessions' }, icon: '\uD83D\uDE4B' },
  { id: 'relationships', name: { ar: '\u0639\u0644\u0627\u0642\u0627\u062A', en: 'Relationships' }, icon: '\u2764\uFE0F' },
  { id: 'study', name: { ar: '\u062F\u0631\u0627\u0633\u0629', en: 'Study' }, icon: '\uD83D\uDCDA' },
  { id: 'work', name: { ar: '\u0639\u0645\u0644', en: 'Work' }, icon: '\uD83D\uDCBC' },
  { id: 'funny', name: { ar: '\u0623\u0633\u0631\u0627\u0631 \u0645\u0636\u062D\u0643\u0629', en: 'Funny Secrets' }, icon: '\uD83D\uDE02' },
  { id: 'shocking', name: { ar: '\u0623\u0633\u0631\u0627\u0631 \u0635\u0627\u062F\u0645\u0629', en: 'Shocking Secrets' }, icon: '\uD83D\uDE31' },
];

// ============================================================
// Fact Categories
// ============================================================
export interface FactCategory {
  id: string;
  name: { ar: string; en: string };
  icon: string;
}

export const factCategories: FactCategory[] = [
  { id: 'science', name: { ar: '\u0639\u0644\u0648\u0645', en: 'Science' }, icon: '\uD83D\uDD2C' },
  { id: 'space', name: { ar: '\u0641\u0636\u0627\u0621', en: 'Space' }, icon: '\uD83D\uDE80' },
  { id: 'animals', name: { ar: '\u062D\u064A\u0648\u0627\u0646\u0627\u062A', en: 'Animals' }, icon: '\uD83D\uDC3E' },
  { id: 'history', name: { ar: '\u062A\u0627\u0631\u064A\u062E', en: 'History' }, icon: '\uD83C\uDFDB\uFE0F' },
  { id: 'human', name: { ar: '\u062C\u0633\u0645 \u0627\u0644\u0625\u0646\u0633\u0627\u0646', en: 'Human Body' }, icon: '\uD83E\uDE78' },
  { id: 'technology', name: { ar: '\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627', en: 'Technology' }, icon: '\uD83D\uDCBB' },
];

// ============================================================
// Navigation
// ============================================================
export interface NavItem {
  id: PageView;
  name: { ar: string; en: string };
  icon: string;
}

export const navItems: NavItem[] = [
  { id: 'home', name: { ar: '\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629', en: 'Home' }, icon: '\uD83C\uDFE0' },
  { id: 'boxes', name: { ar: '\u0627\u0644\u0635\u0646\u0627\u062F\u064A\u0642', en: 'Boxes' }, icon: '\uD83D\uDCE6' },
  { id: 'secrets', name: { ar: '\u0627\u0644\u0623\u0633\u0631\u0627\u0631', en: 'Secrets' }, icon: '\uD83D\uDD10' },
  { id: 'facts', name: { ar: '\u0627\u0644\u062D\u0642\u0627\u0626\u0642', en: 'Facts' }, icon: '\u269B\uFE0F' },
  { id: 'believe', name: { ar: '\u0635\u062F\u0642 \u0623\u0648 \u0644\u0627 \u062A\u0635\u062F\u0642', en: 'Believe or Not' }, icon: '\uD83E\uDD14' },
  { id: 'stats', name: { ar: '\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A', en: 'Statistics' }, icon: '\uD83D\uDCCA' },
];

// ============================================================
// Translations
// ============================================================
export const translations: Record<string, { ar: string; en: string }> = {
  appName: {
    ar: '\u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u0645\u062F\u0641\u0648\u0646\u0629',
    en: 'Buried Truth',
  },
  tagline: {
    ar: '\u0627\u0643\u062A\u0634\u0641 \u0645\u0627 \u0628\u064A\u0646 \u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0648\u0627\u0644\u0633\u0631 \u0648\u0627\u0644\u0623\u0633\u0637\u0648\u0631\u0629',
    en: 'Discover What Lies Beneath',
  },
  burySecret: {
    ar: '\u0627\u062F\u0641\u0646 \u0633\u0631\u0651\u0643',
    en: 'Bury Your Secret',
  },
  openBox: {
    ar: '\u0627\u0643\u0634\u0641 \u0635\u0646\u062F\u0648\u0642\u064B\u0627',
    en: 'Open a Box',
  },
  randomBox: {
    ar: '\u0635\u0646\u062F\u0648\u0642 \u0639\u0634\u0648\u0627\u0626\u064A',
    en: 'Random Box',
  },
  secretOfDay: {
    ar: '\u0633\u0631 \u0627\u0644\u064A\u0648\u0645',
    en: 'Secret of the Day',
  },
  factOfDay: {
    ar: '\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u064A\u0648\u0645',
    en: 'Fact of the Day',
  },
  reveal: {
    ar: '\u0627\u0643\u0634\u0641',
    en: 'Reveal',
  },
  believeIt: {
    ar: '\u0623\u0635\u062F\u0642',
    en: 'Believe It',
  },
  dontBelieve: {
    ar: '\u0644\u0627 \u0623\u0635\u062F\u0642',
    en: "Don't Believe",
  },
  believe: {
    ar: '\u0635\u062F\u0642 \u0623\u0648 \u0644\u0627 \u062A\u0635\u062F\u0642',
    en: 'Believe or Not',
  },
  stats: {
    ar: '\u0627\u0644\u0625\u062D\u0635\u0627\u0626\u064A\u0627\u062A',
    en: 'Statistics',
  },
  facts: {
    ar: '\u0627\u0644\u062D\u0642\u0627\u0626\u0642',
    en: 'Facts',
  },
  createBox: {
    ar: '\u0623\u0646\u0634\u0626 \u0635\u0646\u062F\u0648\u0642',
    en: 'Create Box',
  },
  boxCreated: {
    ar: '\u062A\u0645 \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0635\u0646\u062F\u0648\u0642 \u0628\u0646\u062C\u0627\u062D!',
    en: 'Box created successfully!',
  },
  addSecret: {
    ar: '\u0623\u0636\u0641 \u0633\u0631',
    en: 'Add Secret',
  },
  chooseLevel: {
    ar: '\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0633\u062A\u0648\u0649',
    en: 'Choose Level',
  },
  chooseCategory: {
    ar: '\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641',
    en: 'Choose Category',
  },
  close: {
    ar: '\u0625\u063A\u0644\u0627\u0642',
    en: 'Close',
  },
  copyLink: {
    ar: '\u0627\u0646\u0633\u062E \u0627\u0644\u0631\u0627\u0628\u0637',
    en: 'Copy Link',
  },
  noBoxes: {
    ar: '\u0644\u0627 \u062A\u0648\u062C\u062F \u0635\u0646\u0627\u062F\u064A\u0642 \u0628\u0639\u062F',
    en: 'No boxes yet',
  },
  totalBoxes: {
    ar: '\u0635\u0646\u062F\u0648\u0642',
    en: 'Boxes',
  },
  totalSecrets: {
    ar: '\u0633\u0631',
    en: 'Secrets',
  },
  totalFacts: {
    ar: '\u062D\u0642\u064A\u0642\u0629',
    en: 'Facts',
  },
  totalExplorers: {
    ar: '\u0645\u0633\u062A\u0643\u0634\u0641',
    en: 'Explorers',
  },
  trending: {
    ar: '\u0627\u0644\u0623\u0643\u062B\u0631 \u062A\u062F\u0627\u0648\u0644\u0627\u064B',
    en: 'Trending',
  },
  mostViewed: {
    ar: '\u0627\u0644\u0623\u0643\u062B\u0631 \u0645\u0634\u0627\u0647\u062F\u0629',
    en: 'Most Viewed',
  },
  mostLiked: {
    ar: '\u0627\u0644\u0623\u0643\u062B\u0631 \u0625\u0639\u062C\u0627\u0628\u064B\u0627',
    en: 'Most Liked',
  },
  thisWeek: {
    ar: '\u0647\u0630\u0627 \u0627\u0644\u0623\u0633\u0628\u0648\u0639',
    en: 'This Week',
  },
  themeOfDay: {
    ar: '\u0645\u0648\u0636\u0648\u0639 \u0627\u0644\u064A\u0648\u0645',
    en: 'Theme of the Day',
  },
  views: {
    ar: '\u0645\u0634\u0627\u0647\u062F\u0629',
    en: 'views',
  },
  likes: {
    ar: '\u0625\u0639\u062C\u0627\u0628',
    en: 'likes',
  },
  anonymous: {
    ar: '\u0645\u062C\u0647\u0648\u0644',
    en: 'Anonymous',
  },
  title: {
    ar: '\u0627\u0644\u0639\u0646\u0648\u0627\u0646',
    en: 'Title',
  },
  yourSecret: {
    ar: '\u0633\u0631\u0643',
    en: 'Your Secret',
  },
  source: {
    ar: '\u0627\u0644\u0645\u0635\u062F\u0631',
    en: 'Source',
  },
  settings: {
    ar: '\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A',
    en: 'Settings',
  },
  language: {
    ar: '\u0627\u0644\u0644\u063A\u0629',
    en: 'Language',
  },
  theme: {
    ar: '\u0627\u0644\u0645\u0638\u0647\u0631',
    en: 'Theme',
  },
  dayMode: {
    ar: '\u0648\u0636\u0639 \u0627\u0644\u0646\u0647\u0627\u0631',
    en: 'Day Mode',
  },
  nightMode: {
    ar: '\u0648\u0636\u0639 \u0627\u0644\u0644\u064A\u0644',
    en: 'Night Mode',
  },
  theTruth: {
    ar: '\u0627\u0644\u062D\u0642\u064A\u0642\u0629',
    en: 'The Truth',
  },
  percentageBelieved: {
    ar: '\u0635\u062F\u0642\u0648\u0627',
    en: 'believed',
  },
  achievements: {
    ar: '\u0627\u0644\u0625\u0646\u062C\u0627\u0632\u0627\u062A',
    en: 'Achievements',
  },
  yourSecrets: {
    ar: '\u0623\u0633\u0631\u0627\u0631\u0643',
    en: 'Your Secrets',
  },
  yourBoxes: {
    ar: '\u0635\u0646\u0627\u062F\u064A\u0642\u0643',
    en: 'Your Boxes',
  },
  submit: {
    ar: '\u0625\u0631\u0633\u0627\u0644',
    en: 'Submit',
  },
  exploreMore: {
    ar: '\u0627\u0633\u062A\u0643\u0634\u0641 \u0627\u0644\u0645\u0632\u064A\u062F',
    en: 'Explore More',
  },
  uploadVideo: {
    ar: '\u0631\u0641\u0639 \u0641\u064A\u062F\u064A\u0648',
    en: 'Upload Video',
  },
  clickToUpload: {
    ar: '\u0627\u0636\u063A\u0637 \u0644\u0631\u0641\u0639 \u0641\u064A\u062F\u064A\u0648',
    en: 'Click to upload video',
  },
  uploading: {
    ar: '\u062C\u0627\u0631\u064A \u0627\u0644\u0631\u0641\u0639...',
    en: 'Uploading...',
  },
  uploadComplete: {
    ar: '\u062A\u0645 \u0627\u0644\u0631\u0641\u0639 \u0628\u0646\u062C\u0627\u062D!',
    en: 'Upload complete!',
  },
  uploadFailed: {
    ar: '\u0641\u0634\u0644 \u0627\u0644\u0631\u0641\u0639',
    en: 'Upload failed',
  },
  remove: {
    ar: '\u062D\u0630\u0641',
    en: 'Remove',
  },
  maxFileSize: {
    ar: '\u062D\u062C\u0645 \u0623\u0642\u0635\u0649 100MB',
    en: 'Max 100MB',
  },
  voteToReveal: {
    ar: '\u0635\u0648\u062A \u0644\u0644\u0643\u0634\u0641',
    en: 'Vote to Reveal',
  },
  votesNeeded: {
    ar: '\u0623\u0635\u0648\u0627\u062A \u0644\u0644\u0643\u0634\u0641',
    en: 'votes to reveal',
  },
  secretHidden: {
    ar: '\u0627\u0644\u0633\u0631 \u0645\u062E\u0641\u064A - \u0635\u0648\u062A \u0644\u0644\u0643\u0634\u0641!',
    en: 'Secret hidden - Vote to reveal!',
  },
  revealed: {
    ar: '\u0645\u0643\u0634\u0648\u0641',
    en: 'Revealed',
  },
  revealNow: {
    ar: '\u0627\u0643\u0634\u0641 \u0627\u0644\u0622\u0646',
    en: 'Reveal Now',
  },
};

// Translation helper
export function t(key: string, lang: Lang = 'ar'): string {
  const entry = translations[key];
  if (!entry) return key;
  return entry[lang] || entry.en || key;
}

// Get today's theme day
export function getTodayThemeDay(): ThemeDay {
  const dayIndex = new Date().getDay(); // 0=Sun, 1=Mon, ...
  // Map: 0=Sun->6, 1=Mon->0, 2=Tue->1, 3=Wed->2, 4=Thu->3, 5=Fri->4, 6=Sat->5
  const mapping = [6, 0, 1, 2, 3, 4, 5];
  return themeDays[mapping[dayIndex]];
}
