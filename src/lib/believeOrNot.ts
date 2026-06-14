// ============================================================
// Believe It or Not Data - ALL non-ASCII chars use \u escapes
// Videos: Free educational YouTube videos (Creative Commons / Public)
// ============================================================

export interface BelieveQuestion {
  id: number;
  question: { ar: string; en: string };
  isTrue: boolean;
  explanation: { ar: string; en: string };
  category: string;
  believePercentage: number; // simulated
  videoUrl?: string; // optional video for the question
}

export const believeQuestions: BelieveQuestion[] = [
  // ========== ANIMALS ==========
  {
    id: 1,
    question: {
      ar: '\u0647\u0644 \u064A\u0645\u0643\u0646 \u0644\u0642\u0646\u062F\u064A\u0644 \u0627\u0644\u0628\u062D\u0631 \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0634\u0628\u0627\u0628\u061F',
      en: 'Can the immortal jellyfish revert to its youth?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0642\u0646\u062F\u064A\u0644 \u0627\u0644\u0628\u062D\u0631 \u0627\u0644\u062E\u0627\u0644\u062F (Turritopsis dohrnii) \u064A\u0645\u0643\u0646\u0647 \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0628\u0648\u0644\u064A\u0628 \u0628\u0639\u062F \u0627\u0644\u0646\u0636\u062C\u060C \u0645\u0645\u0627 \u064A\u062C\u0639\u0644\u0647 \u0628\u0627\u0644\u0646\u0638\u0631\u064A \u062E\u0627\u0644\u062F\u064B\u0627',
      en: 'Yes! The immortal jellyfish (Turritopsis dohrnii) can revert to its polyp stage after maturity, making it theoretically immortal',
    },
    category: 'animals',
    believePercentage: 34,
    videoUrl: 'https://www.youtube.com/embed/Z7d5P0pDVUo',
  },
  {
    id: 2,
    question: {
      ar: '\u0647\u0644 \u064A\u0648\u062C\u062F \u0645\u0637\u0631 \u0645\u0646 \u0627\u0644\u0645\u0627\u0633 \u0639\u0644\u0649 \u0628\u0639\u0636 \u0627\u0644\u0643\u0648\u0627\u0643\u0628\u061F',
      en: 'Does it rain diamonds on some planets?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645\u060C \u062A\u0634\u064A\u0631 \u0627\u0644\u062F\u0631\u0627\u0633\u0627\u062A \u0625\u0644\u0649 \u0623\u0646 \u0627\u0644\u0636\u063A\u0637 \u0627\u0644\u0647\u0627\u0626\u0644 \u0639\u0644\u0649 \u0643\u0648\u0643\u0628\u064A \u0632\u0646\u0628\u0642\u0629 \u0648\u0645\u0634\u062A\u0631\u064A \u064A\u062D\u0648\u0644 \u0627\u0644\u0643\u0631\u0628\u0648\u0646 \u0625\u0644\u0649 \u0645\u0627\u0633',
      en: 'Yes, extreme pressure on Neptune and Jupiter may convert carbon into diamonds',
    },
    category: 'space',
    believePercentage: 27,
    videoUrl: 'https://www.youtube.com/embed/bX-NWhsjEtY',
  },
  {
    id: 3,
    question: {
      ar: '\u0647\u0644 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u064A\u0633\u062A\u062E\u062F\u0645 10% \u0641\u0642\u0637 \u0645\u0646 \u062F\u0645\u0627\u063A\u0647\u061F',
      en: 'Do humans use only 10% of their brain?',
    },
    isTrue: false,
    explanation: {
      ar: '\u0644\u0627! \u0647\u0630\u0647 \u062E\u0631\u0627\u0641\u0629 \u0634\u0627\u0626\u0639\u0629. \u0627\u0644\u0623\u0628\u062D\u0627\u062B \u0623\u062B\u0628\u062A\u062A \u0623\u0646\u0646\u0627 \u0646\u0633\u062A\u062E\u062F\u0645 \u0643\u0644 \u062C\u0632\u0621 \u0645\u0646 \u0627\u0644\u062F\u0645\u0627\u063A\u060C \u0648\u0625\u0646 \u0644\u0645 \u064A\u0643\u0646 \u0641\u064A \u0646\u0641\u0633 \u0627\u0644\u0648\u0642\u062A',
      en: 'No! This is a common myth. Research shows we use virtually every part of the brain, though not all at once',
    },
    category: 'science',
    believePercentage: 65,
    videoUrl: 'https://www.youtube.com/embed/VwrdPEdJv9g',
  },
  {
    id: 4,
    question: {
      ar: '\u0647\u0644 \u0627\u0644\u0623\u062E\u0637\u0628\u0648\u0637 \u0644\u062F\u064A\u0647 3 \u0642\u0644\u0648\u0628\u061F',
      en: 'Do octopuses have 3 hearts?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0642\u0644\u0628\u0627\u0646 \u064A\u0636\u062E\u0627\u0646 \u0627\u0644\u062F\u0645 \u0625\u0644\u0649 \u0627\u0644\u062E\u064A\u0627\u0634\u064A\u0645\u060C \u0648\u0642\u0644\u0628 \u0648\u0627\u062D\u062F \u064A\u0636\u062E \u0627\u0644\u062F\u0645 \u0625\u0644\u0649 \u0628\u0642\u064A\u0629 \u0627\u0644\u062C\u0633\u0645',
      en: 'Yes! Two hearts pump blood to the gills, and one pumps blood to the rest of the body',
    },
    category: 'animals',
    believePercentage: 41,
    videoUrl: 'https://www.youtube.com/embed/vckaanafytg',
  },
  {
    id: 5,
    question: {
      ar: '\u0647\u0644 \u064A\u0645\u0643\u0646\u0643 \u0637\u064A \u0648\u0631\u0642\u0629 42 \u0645\u0631\u0629 \u0644\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u0642\u0645\u0631\u061F',
      en: 'Can folding paper 42 times reach the moon?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645 \u0631\u064A\u0627\u0636\u064A\u064B\u0627! \u0637\u064A \u0648\u0631\u0642\u0629 42 \u0645\u0631\u0629 \u0633\u064A\u0635\u0644 \u0633\u0645\u0643\u0647\u0627 \u0625\u0644\u0649 \u0627\u0644\u0642\u0645\u0631\u060C \u0644\u0643\u0646 \u0637\u064A \u0623\u0643\u062B\u0631 \u0645\u0646 7 \u0645\u0631\u0627\u062A \u0645\u0633\u062A\u062D\u064A\u0644 \u0641\u064A \u0627\u0644\u0648\u0627\u0642\u0639',
      en: 'Mathematically yes! 42 folds would reach the moon, but folding more than 7 times is practically impossible',
    },
    category: 'science',
    believePercentage: 23,
    videoUrl: 'https://www.youtube.com/embed/6EQeh2aK81Q',
  },
  {
    id: 6,
    question: {
      ar: '\u0647\u0644 \u0627\u0644\u0636\u062D\u0643 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0639\u062F\u064A\u064B\u0627\u061F',
      en: 'Can laughter be contagious?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0627\u0644\u0636\u062D\u0643 \u064A\u0646\u0634\u0637 \u062E\u0644\u0627\u064A\u0627 \u0627\u0644\u0645\u0631\u0622\u0629 \u0627\u0644\u0639\u0635\u0628\u064A\u0629 \u0646\u0641\u0633\u0647\u0627 \u0627\u0644\u062A\u064A \u062A\u0646\u062A\u0639\u0634 \u0639\u0646\u062F \u0631\u0624\u064A\u0629 \u0634\u062E\u0635 \u064A\u0636\u062D\u0643',
      en: 'Yes! Laughter activates the same mirror neurons that fire when you see someone laugh',
    },
    category: 'human',
    believePercentage: 72,
    videoUrl: 'https://www.youtube.com/embed/7APU2LBvTXo',
  },
  {
    id: 7,
    question: {
      ar: '\u0647\u0644 \u0627\u0644\u0623\u0631\u0636 \u0643\u0627\u0646\u062A \u0643\u0648\u0643\u0628\u064B\u0627 \u0623\u0631\u062C\u0648\u0627\u0646\u064A\u064B\u0627 \u0642\u0628\u0644 2.3 \u0645\u0644\u064A\u0627\u0631 \u0633\u0646\u0629\u061F',
      en: 'Was Earth a purple planet 2.3 billion years ago?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0627\u0644\u0643\u0627\u0626\u0646\u0627\u062A \u0627\u0644\u0642\u062F\u064A\u0645\u0629 \u0627\u0633\u062A\u062E\u062F\u0645\u062A \u0627\u0644\u0631\u062A\u064A\u0646\u0627\u0644 \u0628\u062F\u0644\u0627\u064B \u0645\u0646 \u0627\u0644\u0643\u0644\u0648\u0631\u0648\u0641\u064A\u0644 \u0644\u0644\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0636\u0648\u0626\u064A\u060C \u0645\u0645\u0627 \u0623\u0639\u0637\u0649 \u0627\u0644\u0623\u0631\u0636 \u0644\u0648\u0646\u064B\u0627 \u0623\u0631\u062C\u0648\u0627\u0646\u064A\u064B\u0627',
      en: 'Yes! Ancient organisms used retinal instead of chlorophyll for photosynthesis, giving Earth a purple hue',
    },
    category: 'science',
    believePercentage: 18,
    videoUrl: 'https://www.youtube.com/embed/IIA-k_bBcL0',
  },
  {
    id: 8,
    question: {
      ar: '\u0647\u0644 \u0627\u0644\u0628\u0639\u0648\u0636 \u062A\u0641\u0636\u0644 \u0627\u0644\u062F\u0645 \u0627\u0644\u062D\u0644\u0648\u061F',
      en: 'Do mosquitoes prefer sweet blood?',
    },
    isTrue: false,
    explanation: {
      ar: '\u0644\u0627! \u0627\u0644\u0628\u0639\u0648\u0636 \u064A\u0646\u062C\u0630\u0628 \u0625\u0644\u0649 \u062B\u0627\u0646\u064A \u0623\u0643\u0633\u064A\u062F \u0627\u0644\u0643\u0631\u0628\u0648\u0646 \u0648\u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0648\u0627\u0644\u0639\u0631\u0642\u060C \u0644\u064A\u0633 \u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0633\u0643\u0631 \u0641\u064A \u0627\u0644\u062F\u0645',
      en: 'No! Mosquitoes are attracted to CO2, body heat, and sweat, not blood sugar levels',
    },
    category: 'science',
    believePercentage: 55,
    videoUrl: 'https://www.youtube.com/embed/38gVZgE39K8',
  },
  {
    id: 9,
    question: {
      ar: '\u0647\u0644 \u064A\u0645\u0643\u0646 \u0644\u0644\u0630\u0647\u0628 \u0627\u0644\u0623\u0628\u064A\u0636 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0630\u0647\u0628\u064B\u0627 \u062D\u0642\u064A\u0642\u064A\u064B\u0627\u061F',
      en: 'Can white gold be real gold?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0627\u0644\u0630\u0647\u0628 \u0627\u0644\u0623\u0628\u064A\u0636 \u0647\u0648 \u0633\u0628\u064A\u0643\u0629 \u0645\u0646 \u0627\u0644\u0630\u0647\u0628 \u0645\u0639 \u0645\u0639\u0627\u062F\u0646 \u0628\u064A\u0636\u0627\u0621 \u0645\u062B\u0644 \u0627\u0644\u0628\u0627\u0644\u0627\u062F\u064A\u0648\u0645 \u0623\u0648 \u0627\u0644\u0646\u064A\u0643\u0644',
      en: 'Yes! White gold is a gold alloy mixed with white metals like palladium or nickel',
    },
    category: 'science',
    believePercentage: 48,
    videoUrl: 'https://www.youtube.com/embed/8FFP0funToM',
  },
  {
    id: 10,
    question: {
      ar: '\u0647\u0644 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u064A\u062A\u0639\u0631\u0636 \u0644\u0625\u0634\u0639\u0627\u0639\u0627\u062A \u0645\u0636\u0631\u0629 \u0641\u064A \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u061F',
      en: 'Is a human exposed to harmful radiation in outer space?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0628\u062F\u0648\u0646 \u062F\u0631\u0639 \u0627\u0644\u063A\u0644\u0627\u0641 \u0627\u0644\u062C\u0648\u064A\u060C \u064A\u062A\u0639\u0631\u0636 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0644\u0625\u0634\u0639\u0627\u0639\u0627\u062A \u0643\u0648\u0646\u064A\u0629 \u0648\u0623\u0634\u0639\u0629 \u0634\u0645\u0633\u064A\u0629 \u0634\u062F\u064A\u062F\u0629',
      en: 'Yes! Without the atmospheric shield, humans are exposed to cosmic radiation and intense solar rays',
    },
    category: 'space',
    believePercentage: 61,
    videoUrl: 'https://www.youtube.com/embed/yC7lhscL9qY',
  },

  // ========== NEW SPACE QUESTIONS ==========
  {
    id: 11,
    question: {
      ar: '\u0647\u0644 \u0627\u0644\u062F\u0628\u0628 \u0627\u0644\u0645\u0627\u0626\u064A\u0629 (\u0627\u0644\u062A\u0627\u0631\u062F\u064A\u063A\u0631\u0627\u062F) \u064A\u0645\u0643\u0646\u0647\u0627 \u0627\u0644\u0628\u0642\u0627\u0621 \u062D\u064A\u0629 \u0641\u064A \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u061F',
      en: 'Can tardigrades (water bears) survive in outer space?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0627\u0644\u062A\u0627\u0631\u062F\u064A\u063A\u0631\u0627\u062F \u0647\u064A \u0643\u0627\u0626\u0646\u0627\u062A \u0624\u0643\u062F\u064A\u0629 \u062C\u062F\u064B\u0627 \u064A\u0645\u0643\u0646\u0647\u0627 \u0627\u0644\u0628\u0642\u0627\u0621 \u062D\u064A\u0629 \u0641\u064A \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u062F\u0648\u0646 \u062D\u0645\u0627\u064A\u0629\u060C \u062D\u064A\u062B \u062A\u062F\u062E\u0644 \u0641\u064A \u062D\u0627\u0644\u0629 \u062C\u0641\u0627\u0641 \u0645\u0639\u0644\u0642\u0629 \u062A\u062D\u0645\u064A\u0647\u0627 \u0645\u0646 \u0627\u0644\u0625\u0634\u0639\u0627\u0639\u0627\u062A \u0648\u0627\u0644\u0641\u0631\u0627\u063A',
      en: 'Yes! Tardigrades are incredibly resilient creatures that can survive in outer space without protection by entering a suspended animation state called cryptobiosis',
    },
    category: 'space',
    believePercentage: 22,
    videoUrl: 'https://www.youtube.com/embed/7W194GQ6fHI',
  },
  {
    id: 12,
    question: {
      ar: '\u0647\u0644 \u0627\u0644\u0632\u0647\u0631\u0629 \u0623\u062D\u0631 \u0645\u0646 \u0639\u0637\u0631\u062F \u0631\u063A\u0645 \u0623\u0646\u0647 \u0623\u0628\u0639\u062F \u0639\u0646 \u0627\u0644\u0634\u0645\u0633\u061F',
      en: 'Is Venus hotter than Mercury even though it is farther from the Sun?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0627\u0644\u0632\u0647\u0631\u0629 \u062D\u0631\u0627\u0631\u062A\u0647\u0627 \u062A\u0635\u0644 \u0625\u0644\u0649 465 \u062F\u0631\u062C\u0629 \u0645\u0626\u0648\u064A\u0629 \u0644\u0623\u0646 \u063A\u0644\u0627\u0641\u0647\u0627 \u0627\u0644\u0633\u0645\u064A\u0643 \u0645\u0646 \u062B\u0627\u0646\u064A \u0623\u0643\u0633\u064A\u062F \u0627\u0644\u0643\u0631\u0628\u0648\u0646 \u064A\u062D\u0628\u0633 \u0627\u0644\u062D\u0631\u0627\u0631\u0629\u060C \u0628\u064A\u0646\u0645\u0627 \u0639\u0637\u0631\u062F \u0644\u0627 \u064A\u0645\u0644\u0643 \u063A\u0644\u0627\u0641\u064B\u0627 \u062C\u0648\u064A\u064B\u0627 \u0644\u0644\u062D\u0641\u0627\u0638 \u0639\u0644\u0649 \u0627\u0644\u062D\u0631\u0627\u0631\u0629',
      en: 'Yes! Venus reaches 465\u00B0C because its thick CO2 atmosphere traps heat (extreme greenhouse effect), while Mercury has no atmosphere to retain heat',
    },
    category: 'space',
    believePercentage: 29,
    videoUrl: 'https://www.youtube.com/embed/5KKwxAq_ASk',
  },
  {
    id: 13,
    question: {
      ar: '\u0647\u0644 \u0645\u0644\u0639\u0642\u0629 \u0635\u063A\u064A\u0631\u0629 \u0645\u0646 \u0645\u0627\u062F\u0629 \u0627\u0644\u0646\u062C\u0645 \u0627\u0644\u0646\u064A\u0648\u062A\u0631\u0648\u0646\u064A \u062A\u0632\u0646 \u0645\u0644\u064A\u0627\u0631 \u0637\u0646\u061F',
      en: 'Does a teaspoon of neutron star matter weigh a billion tons?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0627\u0644\u0646\u062C\u0648\u0645 \u0627\u0644\u0646\u064A\u0648\u062A\u0631\u0648\u0646\u064A\u0629 \u0643\u062B\u0627\u0641\u062A\u0647\u0627 \u0647\u0627\u0626\u0644\u0629 \u062C\u062F\u064B\u0627\u060C \u0641\u0645\u0644\u0639\u0642\u0629 \u0635\u063A\u064A\u0631\u0629 \u0645\u0646 \u0645\u0627\u062F\u062A\u0647\u0627 \u062A\u0632\u0646 \u062D\u0648\u0627\u0644\u064A 6 \u0645\u0644\u064A\u0627\u0631\u0627\u062A \u0637\u0646\u060C \u0644\u0623\u0646 \u0627\u0644\u0628\u0631\u0648\u062A\u0648\u0646\u0627\u062A \u0648\u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u0627\u062A \u0645\u0636\u063A\u0648\u0637\u0629 \u0645\u0639\u064B\u0627',
      en: 'Yes! Neutron stars are incredibly dense - a teaspoon of their material weighs about 6 billion tons because protons and electrons are compressed together into neutrons',
    },
    category: 'space',
    believePercentage: 15,
    videoUrl: 'https://www.youtube.com/embed/tfxV4RV6hCQ',
  },
  {
    id: 14,
    question: {
      ar: '\u0647\u0644 \u0627\u0644\u0634\u0645\u0633 \u0644\u0648\u0646\u0647\u0627 \u0627\u0644\u062D\u0642\u064A\u0642\u064A \u0623\u0628\u064A\u0636 \u0648\u0644\u064A\u0633 \u0623\u0635\u0641\u0631\u061F',
      en: 'Is the Sun actually white, not yellow?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0627\u0644\u0634\u0645\u0633 \u062A\u0634\u0639 \u0636\u0648\u0621\u064B\u0627 \u0623\u0628\u064A\u0636 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u062C\u0645\u064A\u0639 \u0623\u0644\u0648\u0627\u0646 \u0627\u0644\u0637\u064A\u0641\u060C \u0644\u0643\u0646 \u0627\u0644\u063A\u0644\u0627\u0641 \u0627\u0644\u062C\u0648\u064A \u0644\u0644\u0623\u0631\u0636 \u064A\u0641\u0631\u0642 \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u0632\u0631\u0642 \u0641\u064A\u0628\u062F\u0648 \u0623\u0646\u0647\u0627 \u0635\u0641\u0631\u0627\u0621 \u0623\u0648 \u0628\u0631\u062A\u0642\u0627\u0644\u064A\u0629',
      en: 'Yes! The Sun emits white light containing all spectrum colors, but Earth\'s atmosphere scatters blue light making it appear yellow or orange',
    },
    category: 'space',
    believePercentage: 37,
    videoUrl: 'https://www.youtube.com/embed/LO1y4Ym8DAA',
  },
  {
    id: 15,
    question: {
      ar: '\u0647\u0644 \u0627\u0644\u064A\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0632\u0647\u0631\u0629 \u0623\u0637\u0648\u0644 \u0645\u0646 \u0633\u0646\u062A\u0647\u0627\u061F',
      en: 'Is a day on Venus longer than its year?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0627\u0644\u0632\u0647\u0631\u0629 \u062A\u062F\u0648\u0631 \u062D\u0648\u0644 \u0646\u0641\u0633\u0647\u0627 \u0628\u0628\u0637\u0621 \u0634\u062F\u064A\u062F (243 \u064A\u0648\u0645\u064B\u0627 \u0623\u0631\u0636\u064A\u064B\u0627) \u0648\u062A\u062F\u0648\u0631 \u062D\u0648\u0644 \u0627\u0644\u0634\u0645\u0633 \u0628\u0633\u0631\u0639\u0629 \u0623\u0643\u0628\u0631 (225 \u064A\u0648\u0645\u064B\u0627 \u0623\u0631\u0636\u064A\u064B\u0627)\u060C \u0641\u0627\u0644\u064A\u0648\u0645 \u0623\u0637\u0648\u0644 \u0645\u0646 \u0627\u0644\u0633\u0646\u0629!',
      en: 'Yes! Venus rotates extremely slowly (243 Earth days) but orbits the Sun faster (225 Earth days), so a day is longer than a year!',
    },
    category: 'space',
    believePercentage: 12,
    videoUrl: 'https://www.youtube.com/embed/sjPKbnYtgck',
  },
  {
    id: 16,
    question: {
      ar: '\u0647\u0644 \u064A\u0648\u062C\u062F \u0643\u0648\u0643\u0628 \u0645\u0635\u0646\u0648\u0639 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0646 \u0627\u0644\u0645\u0627\u0633\u061F',
      en: 'Is there a planet made entirely of diamonds?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0627\u0644\u0643\u0648\u0643\u0628 55 Cancri e \u064A\u064F\u0639\u062A\u0642\u062F \u0623\u0646 \u062B\u0644\u062B\u064A\u0647 \u0645\u0635\u0646\u0648\u0639 \u0645\u0646 \u0627\u0644\u0645\u0627\u0633 \u0628\u0633\u0628\u0628 \u0627\u0644\u062D\u0631\u0627\u0631\u0629 \u0648\u0627\u0644\u0636\u063A\u0637 \u0627\u0644\u0647\u0627\u0626\u0644\u064A\u0646 \u0627\u0644\u0630\u064A\u064A\u0646 \u064A\u062D\u0648\u0644\u0627\u0646 \u0627\u0644\u0643\u0631\u0628\u0648\u0646 \u0625\u0644\u0649 \u0645\u0627\u0633',
      en: 'Yes! Planet 55 Cancri e is believed to be one-third diamond due to extreme heat and pressure converting carbon into diamond',
    },
    category: 'space',
    believePercentage: 19,
    videoUrl: 'https://www.youtube.com/embed/e9aqbMcYhsA',
  },
  {
    id: 17,
    question: {
      ar: '\u0647\u0644 \u064A\u0645\u0643\u0646 \u0644\u0644\u062B\u0642\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0621 \u0627\u0628\u062A\u0644\u0627\u0639 \u0627\u0644\u0646\u062C\u0648\u0645\u061F',
      en: 'Can black holes swallow stars?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0639\u0646\u062F\u0645\u0627 \u064A\u0642\u062A\u0631\u0628 \u0646\u062C\u0645 \u062C\u062F\u064B\u0627 \u0645\u0646 \u062B\u0642\u0628 \u0623\u0633\u0648\u062F\u060C \u062A\u064F\u0645\u0632\u0642\u0647 \u0627\u0644\u062C\u0627\u0630\u0628\u064A\u0629 \u0627\u0644\u0647\u0627\u0626\u0644\u0629 \u0648\u064A\u064F\u0633\u062D\u0628 \u0625\u0644\u0649 \u0627\u0644\u062F\u0627\u062E\u0644\u060C \u0648\u064A\u064F\u0633\u0645\u0649 \u0647\u0630\u0627 \u0627\u0644\u062D\u062F\u062B \u0627\u0644\u062A\u0634\u0648\u0647 \u0627\u0644\u0645\u062F\u064A',
      en: 'Yes! When a star gets too close to a black hole, its immense gravity tears the star apart in an event called a tidal disruption event',
    },
    category: 'space',
    believePercentage: 44,
    videoUrl: 'https://www.youtube.com/embed/nLYQJWE4U_g',
  },
  {
    id: 18,
    question: {
      ar: '\u0647\u0644 \u0644\u0644\u0623\u0631\u0636 \u0642\u0645\u0631 \u062B\u0627\u0646\u064D \u0633\u0631\u064A \u0628\u062C\u0627\u0646\u0628 \u0627\u0644\u0642\u0645\u0631 \u0627\u0644\u0645\u0639\u0631\u0648\u0641\u061F',
      en: 'Does Earth have a secret second moon besides the known one?',
    },
    isTrue: false,
    explanation: {
      ar: '\u0644\u0627! \u0644\u0644\u0623\u0631\u0636 \u0642\u0645\u0631 \u0648\u0627\u062D\u062F \u0641\u0642\u0637. \u0647\u0646\u0627\u0643 \u0643\u0648\u064A\u0643\u0628\u0627\u062A \u0635\u063A\u064A\u0631\u0629 \u062A\u064F\u0633\u0645\u0649 \u0623\u0642\u0645\u0627\u0631\u064B\u0627 \u0634\u0628\u0647-\u0642\u0645\u0631\u064A\u0629 \u062A\u062A\u0628\u0639 \u0645\u0633\u0627\u0631\u064B\u0627 \u0645\u0634\u0627\u0628\u0647\u064B\u0627 \u0644\u0644\u0623\u0631\u0636\u060C \u0644\u0643\u0646\u0647\u0627 \u0644\u064A\u0633\u062A \u0623\u0642\u0645\u0627\u0631\u064B\u0627 \u062D\u0642\u064A\u0642\u064A\u0629 \u0644\u0623\u0646\u0647\u0627 \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0627\u0644\u0634\u0645\u0633 \u0648\u0644\u064A\u0633 \u0628\u0627\u0644\u0623\u0631\u0636',
      en: 'No! Earth has only one true moon. There are small asteroids called quasi-satellites that follow similar orbits, but they orbit the Sun, not Earth',
    },
    category: 'space',
    believePercentage: 52,
    videoUrl: 'https://www.youtube.com/embed/CNN-RrW7O2w',
  },
  {
    id: 19,
    question: {
      ar: '\u0647\u0644 \u064A\u0648\u062C\u062F \u0635\u0648\u062A \u0641\u064A \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0631\u063A\u0645 \u0623\u0646\u0646\u0627 \u0644\u0627 \u0646\u0633\u0645\u0639\u0647\u061F',
      en: 'Is there actually sound in space even though we cannot hear it?',
    },
    isTrue: true,
    explanation: {
      ar: '\u0646\u0639\u0645! \u0627\u0644\u0641\u0636\u0627\u0621 \u0644\u064A\u0633 \u0641\u0631\u0627\u063A\u064B\u0627 \u062A\u0627\u0645\u064B\u0627\u060C \u0641\u0647\u0646\u0627\u0643 \u063A\u0627\u0632\u0627\u062A \u062A\u0633\u0645\u062D \u0628\u0646\u0634\u0631 \u0627\u0644\u0635\u0648\u062A \u0644\u0643\u0646 \u0628\u062A\u0631\u062F\u062F\u0627\u062A \u0645\u0646\u062E\u0641\u0636\u0629 \u062C\u062F\u064B\u0627 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0644\u0644\u0623\u0630\u0646 \u0627\u0644\u0628\u0634\u0631\u064A\u0629 \u0633\u0645\u0627\u0639\u0647\u0627. \u0623\u062C\u0647\u0632\u0629 \u0646\u0627\u0633\u0627 \u0633\u062C\u0644\u062A \u0623\u0635\u0648\u0627\u062A\u064B\u0627 \u0645\u0646 \u0627\u0644\u062B\u0642\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0621 \u0648\u0627\u0644\u0646\u062C\u0648\u0645',
      en: 'Yes! Space is not completely empty - there are gases that allow sound propagation but at very low frequencies inaudible to human ears. NASA recorded sounds from black holes and stars',
    },
    category: 'space',
    believePercentage: 31,
    videoUrl: 'https://www.youtube.com/embed/lDzBe0_SLVo',
  },
  {
    id: 20,
    question: {
      ar: '\u0647\u0644 \u064A\u0645\u0643\u0646 \u0644\u0644\u0625\u0646\u0633\u0627\u0646 \u0633\u0645\u0627\u0639 \u0635\u0631\u0627\u062E \u0641\u064A \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u061F',
      en: 'Can you hear a scream in outer space?',
    },
    isTrue: false,
    explanation: {
      ar: '\u0644\u0627! \u0627\u0644\u0635\u0648\u062A \u064A\u062D\u062A\u0627\u062C \u0648\u0633\u064A\u0637 \u0644\u0644\u0627\u0646\u062A\u0634\u0627\u0631 \u0645\u062B\u0644 \u0627\u0644\u0647\u0648\u0627\u0621\u060C \u0648\u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A \u0642\u0631\u064A\u0628 \u062C\u062F\u064B\u0627 \u0645\u0646 \u0627\u0644\u0641\u0631\u0627\u063A \u0627\u0644\u062A\u0627\u0645\u060C \u0641\u0644\u0627 \u064A\u0645\u0643\u0646 \u0644\u0644\u0635\u0648\u062A \u0627\u0644\u0627\u0646\u062A\u0642\u0627\u0644 \u0644\u0623\u0630\u0646\u0643',
      en: 'No! Sound needs a medium like air to travel, and outer space is nearly a perfect vacuum, so sound cannot reach your ears',
    },
    category: 'space',
    believePercentage: 68,
    videoUrl: 'https://www.youtube.com/embed/BDPTwvuXTHs',
  },
];

export function getRandomQuestion(): BelieveQuestion {
  return believeQuestions[Math.floor(Math.random() * believeQuestions.length)];
}

export function getQuestionById(id: number): BelieveQuestion | undefined {
  return believeQuestions.find((q) => q.id === id);
}
