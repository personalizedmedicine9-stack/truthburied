// ============================================================
// Weird Facts Data - ALL non-ASCII chars use \u escapes
// ============================================================

export interface WeirdFact {
  id: number;
  text: { ar: string; en: string };
  category: 'science' | 'space' | 'nature' | 'history' | 'human' | 'mystery' | 'technology' | 'animals';
  source?: string;
}

export const weirdFacts: WeirdFact[] = [
  {
    id: 1,
    text: {
      ar: '\u0627\u0644\u062F\u0645\u0627\u063A \u0627\u0644\u0628\u0634\u0631\u064A \u064A\u0633\u062A\u0647\u0644\u0643 20% \u0645\u0646 \u0637\u0627\u0642\u0629 \u0627\u0644\u062C\u0633\u0645 \u0631\u063A\u0645 \u0623\u0646\u0647 \u064A\u0645\u062B\u0644 2% \u0641\u0642\u0637 \u0645\u0646 \u0648\u0632\u0646\u0647',
      en: 'The human brain consumes 20% of the body\'s energy despite being only 2% of its weight',
    },
    category: 'science',
  },
  {
    id: 2,
    text: {
      ar: '\u0647\u0646\u0627\u0643 \u0623\u0643\u062B\u0631 \u0645\u0646 \u0645\u0644\u064A\u0627\u0631 \u0646\u062C\u0645 \u0641\u064A \u0627\u0644\u0645\u062C\u0631\u0629 \u0627\u0644\u062F\u0631\u0628\u064A \u0648\u062D\u062F\u0647\u0627 \u0645\u0646 \u062D\u0628\u0648\u0628 \u0627\u0644\u0631\u0645\u0644 \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u0636',
      en: 'There are more stars in the Milky Way than grains of sand on Earth',
    },
    category: 'space',
  },
  {
    id: 3,
    text: {
      ar: '\u0627\u0644\u0623\u062E\u0637\u0628\u0648\u0637 \u0644\u062F\u064A\u0647 \u062B\u0644\u0627\u062B\u0629 \u0642\u0644\u0648\u0628: \u0642\u0644\u0628\u0627\u0646 \u064A\u0636\u062E\u0627\u0646 \u0627\u0644\u062F\u0645 \u0625\u0644\u0649 \u0627\u0644\u062E\u064A\u0627\u0634\u064A\u0645 \u0648\u0642\u0644\u0628 \u0648\u0627\u062D\u062F \u064A\u0636\u062E \u0627\u0644\u062F\u0645 \u0625\u0644\u0649 \u0628\u0642\u064A\u0629 \u0627\u0644\u062C\u0633\u0645',
      en: 'Octopuses have three hearts: two pump blood to the gills and one pumps blood to the rest of the body',
    },
    category: 'animals',
  },
  {
    id: 4,
    text: {
      ar: '\u0641\u064A \u0627\u0644\u0642\u0631\u0646 \u0627\u0644\u0639\u0634\u0631\u064A\u0646\u060C \u0643\u0627\u0646 \u0627\u0644\u0623\u0637\u0628\u0627\u0621 \u064A\u0646\u0635\u062D\u0648\u0646 \u0628\u0627\u0644\u062A\u062F\u062E\u064A\u0646 \u0644\u0644\u0627\u0631\u062A\u064A\u0627\u062D \u0645\u0646 \u0627\u0644\u062A\u0648\u062A\u0631',
      en: 'In the 20th century, doctors actually recommended smoking for stress relief',
    },
    category: 'history',
  },
  {
    id: 5,
    text: {
      ar: '\u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u064A\u0641\u0642\u062F \u062D\u0648\u0627\u0644\u064A 60 \u0634\u0639\u0631\u0629 \u0641\u064A \u0627\u0644\u064A\u0648\u0645 \u0645\u0646 \u0631\u0623\u0633\u0647 \u0641\u0642\u0637',
      en: 'A human loses about 60 hairs per day from their head alone',
    },
    category: 'human',
  },
  {
    id: 6,
    text: {
      ar: '\u0625\u0630\u0627 \u0643\u0646\u062A \u062A\u0633\u062A\u0637\u064A\u0639 \u0637\u064A \u0648\u0631\u0642\u0629 42 \u0645\u0631\u0629\u060C \u0633\u062A\u0635\u0644 \u0625\u0644\u0649 \u0627\u0644\u0642\u0645\u0631',
      en: 'If you could fold a piece of paper 42 times, it would reach the moon',
    },
    category: 'mystery',
  },
  {
    id: 7,
    text: {
      ar: '\u0627\u0644\u0646\u062D\u0644 \u064A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0632\u064A\u0627\u0631\u0629 \u062D\u0648\u0627\u0644\u064A 2 \u0645\u0644\u064A\u0648\u0646 \u0632\u0647\u0631\u0629 \u0644\u0635\u0646\u0639 \u0631\u0637\u0644 \u0648\u0627\u062D\u062F \u0645\u0646 \u0627\u0644\u0639\u0633\u0644',
      en: 'Bees need to visit about 2 million flowers to make one pound of honey',
    },
    category: 'nature',
  },
  {
    id: 8,
    text: {
      ar: '\u0647\u0646\u0627\u0643 \u0645\u062F\u064A\u0646\u0629 \u0645\u0627\u0626\u064A\u0629 \u0645\u062F\u0641\u0648\u0646\u0629 \u062A\u062D\u062A \u0628\u062D\u064A\u0631\u0629 \u0641\u064A \u0627\u0644\u0635\u064A\u0646 \u0627\u0633\u0645\u0647\u0627 \u0634\u064A \u0686\u064A\u0646\u063A',
      en: 'There is a sunken city buried under a lake in China called Shi Cheng',
    },
    category: 'mystery',
  },
  {
    id: 9,
    text: {
      ar: '\u0627\u0644\u0636\u0648\u0621 \u064A\u0633\u0627\u0641\u0631 \u0628\u0633\u0631\u0639\u0629 299,792 \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u062B\u0627\u0646\u064A\u0629\u060C \u0644\u0643\u0646 \u0636\u0648\u0621 \u0627\u0644\u0634\u0645\u0633 \u064A\u0633\u062A\u063A\u0631\u0642 8 \u062F\u0642\u0627\u0626\u0642 \u0644\u064A\u0635\u0644 \u0625\u0644\u064A\u0646\u0627',
      en: 'Light travels at 299,792 km/s, but sunlight takes 8 minutes to reach us',
    },
    category: 'space',
  },
  {
    id: 10,
    text: {
      ar: '\u0627\u0644\u0623\u0632\u0647\u0627\u0631 \u0627\u0644\u0642\u062F\u064A\u0645\u0629 \u0627\u0644\u062A\u064A \u0648\u062C\u062F\u062A \u0641\u064A \u0642\u0628\u0648\u0631 \u0627\u0644\u0641\u0631\u0627\u0639\u0646\u0629 \u0644\u0627 \u062A\u0632\u0627\u0644 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u0625\u0646\u0628\u0627\u062A \u0628\u0639\u062F \u0622\u0644\u0627\u0641 \u0627\u0644\u0633\u0646\u064A\u0646',
      en: 'Ancient seeds found in pharaoh tombs can still grow after thousands of years',
    },
    category: 'history',
  },
  {
    id: 11,
    text: {
      ar: '\u062C\u0633\u0645\u0643 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0643\u0631\u064A\u0627\u062A \u0630\u0647\u0628\u064A\u0629 \u0643\u0627\u0641\u064A\u0629 \u0644\u0635\u0646\u0639 \u0645\u0633\u0643\u0629 \u0635\u063A\u064A\u0631\u0629',
      en: 'Your body contains enough gold atoms to make a small charm',
    },
    category: 'human',
  },
  {
    id: 12,
    text: {
      ar: '\u0627\u0644\u0623\u0631\u0636 \u062A\u062F\u0648\u0631 \u062D\u0648\u0644 \u0646\u0641\u0633\u0647\u0627 \u0628\u0633\u0631\u0639\u0629 1,600 \u0643\u064A\u0644\u0648\u0645\u062A\u0631 \u0641\u064A \u0627\u0644\u0633\u0627\u0639\u0629 \u0648\u0644\u0643\u0646\u0646\u0627 \u0644\u0627 \u0646\u0634\u0639\u0631 \u0628\u0630\u0644\u0643',
      en: 'Earth rotates at 1,600 km/hour but we do not feel it',
    },
    category: 'science',
  },
  {
    id: 13,
    text: {
      ar: '\u0642\u0646\u062F\u064A\u0644 \u0627\u0644\u0628\u062D\u0631 \u064A\u0645\u0643\u0646\u0647 \u0627\u0644\u0639\u0648\u062F\u0629 \u0625\u0644\u0649 \u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0634\u0628\u0627\u0628 \u0628\u0639\u062F \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u0643\u0628\u0631!',
      en: 'The immortal jellyfish can revert to its youth after reaching maturity!',
    },
    category: 'animals',
  },
  {
    id: 14,
    text: {
      ar: '\u0647\u0646\u0627\u0643 \u0646\u0647\u0631 \u062A\u062D\u062A \u0627\u0644\u0623\u0631\u0636 \u0641\u064A \u0627\u0644\u0623\u0645\u0627\u0632\u0648\u0646 \u064A\u062A\u062F\u0641\u0642 \u0628\u0633\u0631\u0639\u0629 \u0643\u0628\u064A\u0631\u0629',
      en: 'There is an underground river in the Amazon flowing at great speed',
    },
    category: 'nature',
  },
  {
    id: 15,
    text: {
      ar: '\u0641\u064A \u0627\u0644\u0641\u0636\u0627\u0621 \u0627\u0644\u062E\u0627\u0631\u062C\u064A\u060C \u0644\u0627 \u064A\u0648\u062C\u062F \u0635\u0648\u062A \u0644\u0623\u0646 \u0627\u0644\u0635\u0648\u062A \u064A\u062D\u062A\u0627\u062C \u0625\u0644\u0649 \u0648\u0633\u064A\u0637 \u0644\u0644\u0627\u0646\u062A\u0634\u0627\u0631',
      en: 'In outer space, there is no sound because sound needs a medium to travel',
    },
    category: 'space',
  },
  {
    id: 16,
    text: {
      ar: '\u0627\u0644\u0645\u0644\u0643\u0629 \u0643\u0644\u064A\u0648\u0628\u0627\u062A\u0631\u0627 \u0639\u0627\u0634\u062A \u0623\u0642\u0631\u0628 \u0632\u0645\u0646\u064A\u064B\u0627 \u0625\u0644\u0649 \u0647\u0628\u0648\u0637 \u0627\u0644\u0642\u0645\u0631 \u0645\u0646\u0647 \u0625\u0644\u0649 \u0628\u0646\u0627\u0621 \u0627\u0644\u0647\u0631\u0645 \u0627\u0644\u0623\u0643\u0628\u0631',
      en: 'Cleopatra lived closer in time to the Moon landing than to the building of the Great Pyramid',
    },
    category: 'history',
  },
  {
    id: 17,
    text: {
      ar: '\u0639\u0646\u062F\u0645\u0627 \u062A\u0639\u0637\u0633\u060C \u064A\u062A\u0645 \u0625\u063A\u0644\u0627\u0642 \u062C\u0645\u064A\u0639 \u0648\u0638\u0627\u0626\u0641 \u062C\u0633\u0645\u0643 \u0628\u0645\u0627 \u0641\u064A\u0647\u0627 \u0642\u0644\u0628\u0643 \u0644\u0644\u062D\u0638\u0629 \u0648\u0627\u062D\u062F\u0629',
      en: 'When you sneeze, all your body functions including your heart stop for a moment',
    },
    category: 'human',
  },
  {
    id: 18,
    text: {
      ar: '\u0647\u0646\u0627\u0643 \u0628\u062D\u064A\u0631\u0629 \u0641\u064A \u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0623\u0634\u062C\u0627\u0631 \u0645\u062A\u062D\u062C\u0631\u0629 \u0639\u0645\u0631\u0647\u0627 60 \u0645\u0644\u064A\u0648\u0646 \u0639\u0627\u0645',
      en: 'There is a lake in Argentina with petrified trees that are 60 million years old',
    },
    category: 'nature',
  },
  {
    id: 19,
    text: {
      ar: '\u0627\u0644\u062F\u0644\u0641\u064A\u0646 \u064A\u0646\u0627\u0645 \u0628\u0639\u064A\u0646 \u0648\u0627\u062D\u062F\u0629 \u0641\u0642\u0637 \u0644\u0643\u064A \u0644\u0627 \u064A\u063A\u0631\u0642',
      en: 'Dolphins sleep with one eye open so they do not drown',
    },
    category: 'animals',
  },
  {
    id: 20,
    text: {
      ar: '\u0647\u0646\u0627\u0643 \u0643\u0647\u0641 \u0641\u064A \u0641\u064A\u062A\u0646\u0627\u0645 \u064A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u063A\u0627\u0628\u0629 \u062F\u0627\u062E\u0644\u064A\u0629 \u0643\u0627\u0645\u0644\u0629 \u062A\u062D\u062A \u0627\u0644\u0623\u0631\u0636',
      en: 'There is a cave in Vietnam containing an entire underground forest',
    },
    category: 'mystery',
  },
  {
    id: 21,
    text: {
      ar: '\u0639\u062F\u062F \u0627\u0644\u0646\u062C\u0648\u0645 \u0641\u064A \u0627\u0644\u0643\u0648\u0646 \u0627\u0644\u0645\u0631\u0626\u064A \u0623\u0643\u062B\u0631 \u0645\u0646 \u0639\u062F\u062F \u062D\u0628\u0627\u062A \u0627\u0644\u0631\u0645\u0644 \u0639\u0644\u0649 \u0643\u0644 \u0634\u0627\u0637\u0626 \u0641\u064A \u0627\u0644\u0639\u0627\u0644\u0645',
      en: 'The number of stars in the visible universe exceeds the grains of sand on every beach on Earth',
    },
    category: 'space',
  },
  {
    id: 22,
    text: {
      ar: '\u0641\u064A \u0627\u0644\u0642\u0631\u0646 \u0627\u0644\u062B\u0627\u0645\u0646 \u0639\u0634\u0631\u060C \u0643\u0627\u0646 \u0627\u0644\u0646\u0627\u0633 \u064A\u0633\u062A\u062E\u062F\u0645\u0648\u0646 \u0627\u0644\u0632\u0626\u0628\u0642 \u0643\u062F\u0648\u0627\u0621 \u0644\u0644\u0635\u062F\u0627\u0639',
      en: 'In the 18th century, people used mercury as medicine for headaches',
    },
    category: 'history',
  },
  {
    id: 23,
    text: {
      ar: '\u062C\u0633\u0645\u0643 \u064A\u0646\u062A\u062C \u062E\u0644\u0627\u064A\u0627 \u062C\u062F\u064A\u062F\u0629 \u0628\u0634\u0643\u0644 \u0645\u0633\u062A\u0645\u0631\u060C \u0648\u062E\u0644\u0627\u0644 7 \u0633\u0646\u0648\u0627\u062A \u064A\u0643\u0648\u0646 \u0644\u062F\u064A\u0643 \u062C\u0633\u0645 \u062C\u062F\u064A\u062F \u062A\u0645\u0627\u0645\u064B\u0627',
      en: 'Your body constantly produces new cells, and within 7 years you have a completely new body',
    },
    category: 'human',
  },
  {
    id: 24,
    text: {
      ar: '\u0647\u0646\u0627\u0643 \u0643\u0648\u0627\u0643\u0628 \u064A\u0645\u0637\u0631 \u0639\u0644\u064A\u0647\u0627 \u0627\u0644\u0645\u0627\u0633 \u0641\u0639\u0644\u064A\u064B\u0627! \u0643\u0648\u0643\u0628 \u0632\u0646\u0628\u0642\u0629 \u0648\u0645\u0634\u062A\u0631\u064A',
      en: 'There are planets where it literally rains diamonds! Neptune and Jupiter',
    },
    category: 'space',
  },
  {
    id: 25,
    text: {
      ar: '\u0627\u0644\u0628\u0643\u062A\u064A\u0631\u064A\u0627 \u0639\u0644\u0649 \u062C\u0633\u0645\u0643 \u062A\u0639\u062F\u0644 \u0639\u062F\u062F \u062E\u0644\u0627\u064A\u0627 \u062C\u0633\u0645\u0643 \u0627\u0644\u0628\u0634\u0631\u064A\u0629',
      en: 'The bacteria on your body equal the number of your human cells',
    },
    category: 'science',
  },
];

export function getRandomFact(): WeirdFact {
  return weirdFacts[Math.floor(Math.random() * weirdFacts.length)];
}

export function getFactsByCategory(category: string): WeirdFact[] {
  return weirdFacts.filter((f) => f.category === category);
}

export function getFactById(id: number): WeirdFact | undefined {
  return weirdFacts.find((f) => f.id === id);
}
