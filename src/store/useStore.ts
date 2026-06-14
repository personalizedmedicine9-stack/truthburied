// ============================================================
// Buried Truth - Global State Store (Zustand)
// ============================================================

import { create } from 'zustand';
import { type Lang, type Theme, type PageView, type BoxLevel } from '@/lib/constants';

export interface BoxData {
  id: string;
  level: BoxLevel;
  content: string;
  createdAt: string;
  opened: boolean;
  views: number;
  likes: number;
}

export interface SecretData {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  likes: number;
  videoUrl?: string;
  videoType?: string;
  revealed?: boolean; // whether the secret has been revealed by user vote
  votesToReveal?: number; // number of votes needed to reveal
  revealVotes?: number; // current votes to reveal
}

interface VoteRecord {
  questionId: number;
  voted: 'believe' | 'dontBelieve';
}

interface BuriedTruthState {
  // Navigation
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;

  // Theme & Language
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;

  // Boxes
  boxes: BoxData[];
  addBox: (level: BoxLevel) => string;
  openBox: (id: string) => void;
  likeBox: (id: string) => void;

  // Secrets
  secrets: SecretData[];
  addSecret: (title: string, content: string, category: string, videoUrl?: string, videoType?: string) => void;
  likeSecret: (id: string) => void;
  voteRevealSecret: (id: string) => void; // vote to reveal a secret
  revealSecret: (id: string) => void; // force reveal a secret

  // Believe or Not votes
  votes: VoteRecord[];
  vote: (questionId: number, choice: 'believe' | 'dontBelieve') => void;
  hasVoted: (questionId: number) => VoteRecord | undefined;

  // Secret of the Day reveal
  secretOfDayRevealed: boolean;
  setSecretOfDayRevealed: (revealed: boolean) => void;

  // Modals
  showCreateBox: boolean;
  setShowCreateBox: (show: boolean) => void;
  createdBoxId: string | null;
  setCreatedBoxId: (id: string | null) => void;
  showAddSecret: boolean;
  setShowAddSecret: (show: boolean) => void;

  // Initialize from localStorage
  initFromStorage: () => void;
}

export const useBuriedTruthStore = create<BuriedTruthState>((set, get) => ({
  // Navigation
  currentPage: 'home',
  setCurrentPage: (page) => set({ currentPage: page }),

  // Theme & Language
  theme: 'night',
  setTheme: (theme) => {
    set({ theme });
    if (typeof window !== 'undefined') {
      localStorage.setItem('bt-theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  },
  toggleTheme: () => {
    const newTheme = get().theme === 'night' ? 'day' : 'night';
    get().setTheme(newTheme);
  },
  lang: 'ar',
  setLang: (lang) => {
    set({ lang });
    if (typeof window !== 'undefined') {
      localStorage.setItem('bt-lang', lang);
    }
  },
  toggleLang: () => {
    const newLang = get().lang === 'ar' ? 'en' : 'ar';
    get().setLang(newLang);
  },

  // Boxes
  boxes: [],
  addBox: (level) => {
    const id = Math.random().toString(36).substring(2, 10);
    const newBox: BoxData = {
      id,
      level,
      content: '',
      createdAt: new Date().toISOString(),
      opened: false,
      views: Math.floor(Math.random() * 500) + 10,
      likes: Math.floor(Math.random() * 100),
    };
    set((state) => {
      const boxes = [newBox, ...state.boxes];
      if (typeof window !== 'undefined') {
        localStorage.setItem('bt-boxes', JSON.stringify(boxes));
      }
      return { boxes, createdBoxId: id, showCreateBox: false };
    });
    // Auto-close modal after 3 seconds
    setTimeout(() => set({ createdBoxId: null }), 3000);
    return id;
  },
  openBox: (id) => {
    set((state) => {
      const boxes = state.boxes.map((b) =>
        b.id === id ? { ...b, opened: true } : b
      );
      if (typeof window !== 'undefined') {
        localStorage.setItem('bt-boxes', JSON.stringify(boxes));
      }
      return { boxes };
    });
  },
  likeBox: (id) => {
    set((state) => {
      const boxes = state.boxes.map((b) =>
        b.id === id ? { ...b, likes: b.likes + 1 } : b
      );
      if (typeof window !== 'undefined') {
        localStorage.setItem('bt-boxes', JSON.stringify(boxes));
      }
      return { boxes };
    });
  },

  // Secrets
  secrets: [],
  addSecret: (title, content, category, videoUrl, videoType) => {
    const newSecret: SecretData = {
      id: Math.random().toString(36).substring(2, 10),
      title,
      content,
      category,
      createdAt: new Date().toISOString(),
      likes: 0,
      revealed: false,
      votesToReveal: 3, // needs 3 votes to reveal
      revealVotes: 0,
      ...(videoUrl ? { videoUrl, videoType } : {}),
    };
    set((state) => {
      const secrets = [newSecret, ...state.secrets];
      if (typeof window !== 'undefined') {
        localStorage.setItem('bt-secrets', JSON.stringify(secrets));
      }
      return { secrets, showAddSecret: false };
    });
  },
  likeSecret: (id) => {
    set((state) => {
      const secrets = state.secrets.map((s) =>
        s.id === id ? { ...s, likes: s.likes + 1 } : s
      );
      if (typeof window !== 'undefined') {
        localStorage.setItem('bt-secrets', JSON.stringify(secrets));
      }
      return { secrets };
    });
  },
  voteRevealSecret: (id) => {
    set((state) => {
      const secrets = state.secrets.map((s) => {
        if (s.id !== id) return s;
        const newVotes = (s.revealVotes || 0) + 1;
        const needed = s.votesToReveal || 3;
        // If votes reached threshold, reveal the secret
        if (newVotes >= needed) {
          return { ...s, revealVotes: newVotes, revealed: true };
        }
        return { ...s, revealVotes: newVotes };
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('bt-secrets', JSON.stringify(secrets));
      }
      return { secrets };
    });
  },
  revealSecret: (id) => {
    set((state) => {
      const secrets = state.secrets.map((s) =>
        s.id === id ? { ...s, revealed: true } : s
      );
      if (typeof window !== 'undefined') {
        localStorage.setItem('bt-secrets', JSON.stringify(secrets));
      }
      return { secrets };
    });
  },

  // Believe or Not votes
  votes: [],
  vote: (questionId, choice) => {
    set((state) => {
      const votes = [...state.votes.filter((v) => v.questionId !== questionId), { questionId, voted: choice }];
      if (typeof window !== 'undefined') {
        localStorage.setItem('bt-votes', JSON.stringify(votes));
      }
      return { votes };
    });
  },
  hasVoted: (questionId) => {
    return get().votes.find((v) => v.questionId === questionId);
  },

  // Secret of the Day
  secretOfDayRevealed: false,
  setSecretOfDayRevealed: (revealed) => set({ secretOfDayRevealed: revealed }),

  // Modals
  showCreateBox: false,
  setShowCreateBox: (show) => set({ showCreateBox: show }),
  createdBoxId: null,
  setCreatedBoxId: (id) => set({ createdBoxId: id }),
  showAddSecret: false,
  setShowAddSecret: (show) => set({ showAddSecret: show }),

  // Initialize from localStorage
  initFromStorage: () => {
    if (typeof window === 'undefined') return;
    try {
      const savedTheme = localStorage.getItem('bt-theme') as Theme | null;
      if (savedTheme) {
        set({ theme: savedTheme });
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
      const savedLang = localStorage.getItem('bt-lang') as Lang | null;
      if (savedLang) set({ lang: savedLang });

      const savedBoxes = localStorage.getItem('bt-boxes');
      if (savedBoxes) set({ boxes: JSON.parse(savedBoxes) });

      const savedSecrets = localStorage.getItem('bt-secrets');
      if (savedSecrets) set({ secrets: JSON.parse(savedSecrets) });

      const savedVotes = localStorage.getItem('bt-votes');
      if (savedVotes) set({ votes: JSON.parse(savedVotes) });
    } catch {
      // Use defaults
    }
  },
}));
