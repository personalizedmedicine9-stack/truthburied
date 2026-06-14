'use client';

import { useState, useEffect, useTransition } from 'react';
import { useBuriedTruthStore } from '@/store/useStore';
import {
  boxLevels,
  themeDays,
  secretCategories,
  factCategories,
  navItems,
  t,
  getTodayThemeDay,
  type BoxLevel,
  type Lang,
} from '@/lib/constants';
import { getRandomFact, getFactsByCategory, type WeirdFact } from '@/lib/facts';
import { getRandomQuestion, type BelieveQuestion } from '@/lib/believeOrNot';

// ============================================================
// MAIN HOME PAGE COMPONENT
// ============================================================
export default function HomePage() {
  const store = useBuriedTruthStore();
  const [currentFact, setCurrentFact] = useState<WeirdFact | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<BelieveQuestion | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<BoxLevel>('sandook');
  const [selectedFactCategory, setSelectedFactCategory] = useState<string>('all');
  const [selectedSecretCategory, setSelectedSecretCategory] = useState<string>('all');
  const [trendingTab, setTrendingTab] = useState<string>('viewed');
  const [secretTitle, setSecretTitle] = useState('');
  const [secretContent, setSecretContent] = useState('');
  const [secretCategory, setSecretCategory] = useState('confessions');
  const [selectedBoxLevel, setSelectedBoxLevel] = useState<BoxLevel>('all');
  const [secretVideoUrl, setSecretVideoUrl] = useState<string | null>(null);
  const [secretVideoType, setSecretVideoType] = useState<string>('');
  const [uploadingVideo, setUploadingVideo] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>('');
  const [showPromoVideo, setShowPromoVideo] = useState(false);
  const [promoStep, setPromoStep] = useState<1 | 2 | 3>(1);

  const lang = store.lang;
  const theme = store.theme;
  const isDay = theme === 'day';
  const [isPending, startTransition] = useTransition();
  const isRtl = lang === 'ar';

  // Initialize
  useEffect(() => {
    store.initFromStorage();
    startTransition(() => {
      setCurrentFact(getRandomFact());
      setCurrentQuestion(getRandomQuestion());
    });
  }, []);

  // Show promo video on every page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Remove the seen flag so promo plays every time
      localStorage.removeItem('bt-seen-promo');
      // Small delay to ensure page is fully rendered
      const timer = setTimeout(() => {
        setShowPromoVideo(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Helper: check if URL is YouTube embed
  const isYouTubeUrl = (url: string) => url.includes('youtube.com/embed') || url.includes('youtu.be');

  // Render video (YouTube iframe or native video player)
  const renderVideo = (url: string, className?: string) => {
    if (isYouTubeUrl(url)) {
      return (
        <iframe
          src={url}
          className={`w-full rounded-xl ${className || ''}`}
          style={{ aspectRatio: '16/9' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
        />
      );
    }
    return (
      <video
        src={url}
        controls
        playsInline
        preload="metadata"
        className={`w-full rounded-xl ${className || ''}`}
        style={{ maxHeight: '300px' }}
      />
    );
  };

  // Video upload handler
  const handleVideoUpload = async (file: File) => {
    if (!file) return;
    setUploadingVideo(true);
    setUploadProgress(lang === 'ar' ? 'جاري الرفع...' : 'Uploading...');
    try {
      const formData = new FormData();
      formData.append('video', file);
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.url) {
        setSecretVideoUrl(data.url);
        setSecretVideoType(data.type || 'video/mp4');
        setUploadProgress(lang === 'ar' ? 'تم الرفع بنجاح!' : 'Upload complete!');
      } else {
        setUploadProgress(lang === 'ar' ? 'فشل الرفع' : 'Upload failed');
      }
    } catch {
      setUploadProgress(lang === 'ar' ? 'فشل الرفع' : 'Upload failed');
    }
    setUploadingVideo(false);
    setTimeout(() => setUploadProgress(''), 3000);
  };

  // Text color classes based on theme
  const tc = {
    primary: isDay ? 'text-[#1a1a3e]' : 'text-white',          // كحلي غامق
    secondary: isDay ? 'text-[#2d2d5e]' : 'text-gray-400',      // كحلي متوسط
    muted: isDay ? 'text-[#4a4a6a]' : 'text-gray-500',          // كحلي فاتح
    accent: isDay ? 'text-[#8B0000]' : 'text-yellow-400',       // أحمر دموي نهاري / أصفر ليلي
  };

  const cardBg = isDay
    ? 'bg-white border-[#e0e0e0]'
    : 'bg-gray-900/50 border-gray-800';
  const cardBgSolid = isDay
    ? 'bg-white border-[#d0d0d0]'
    : 'bg-gray-900 border-gray-700';

  // Simulated global stats
  const globalStats = {
    boxes: 12542,
    secrets: 3110,
    facts: 8421,
    explorers: 5873,
  };

  // Sample trending boxes
  const trendingBoxes = [
    { id: '1', level: 'haqiqa' as BoxLevel, titleAr: '\u0627\u0644\u062D\u0642\u064A\u0642\u0629 \u0627\u0644\u0645\u062E\u0641\u064A\u0629', titleEn: 'The Hidden Truth', views: 1245, likes: 230 },
    { id: '2', level: 'kanz' as BoxLevel, titleAr: '\u0643\u0646\u0632 \u0627\u0644\u0641\u0631\u0627\u0639\u0646\u0629', titleEn: 'Pharaoh Treasure', views: 987, likes: 189 },
    { id: '3', level: 'sirr' as BoxLevel, titleAr: '\u0633\u0631 \u0627\u0644\u0628\u0631\u0645\u064A\u0644\u0629', titleEn: 'The Bermuda Secret', views: 856, likes: 167 },
  ];

  // Secret of the day
  const secretOfDay = {
    ar: '\u0641\u064A \u0639\u0627\u0645 1947\u060C \u0623\u0637\u0644\u0642 \u0631\u062C\u0644 \u0645\u0646 \u0648\u0644\u0627\u064A\u0629 \u0646\u064A\u0648\u0645\u064A\u0643\u0633\u064A\u0643\u0648 \u0625\u0634\u0627\u0631\u0629 \u0627\u0633\u062A\u063A\u0627\u062B\u0629 \u0625\u0644\u0649 \u0627\u0644\u0641\u0636\u0627\u0621 \u0628\u0627\u0644\u062E\u0637\u0623... \u0641\u0623\u0635\u0628\u062D\u062A \u0625\u0634\u0627\u0631\u062A\u0647 \u0631\u0633\u0627\u0644\u0629 \u0625\u0644\u0649 \u0627\u0644\u062D\u0636\u0627\u0631\u0627\u062A \u0627\u0644\u0623\u062E\u0631\u0649',
    en: 'In 1947, a man from New Mexico accidentally sent a distress signal to space... his signal became a message to other civilizations',
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isDay ? 'bg-white' : 'bg-black'} ${tc.primary}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* ===== HEADER ===== */}
      <header className={`sticky top-0 z-40 backdrop-blur-md ${isDay ? 'bg-amber-50/90 border-amber-200' : 'bg-black/90 border-gray-800'} border-b`}>
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/app-icon.png" alt="Buried Truth" className="w-8 h-8 rounded-lg object-contain" />
            <div>
              <h1 className="text-lg font-bold text-yellow-400">{t('appName', lang)}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPromoVideo(true)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isDay ? 'bg-red-100 text-red-800 hover:bg-red-200' : 'bg-red-900/30 text-red-400 hover:bg-red-900/50'
              }`}
              title={lang === 'ar' ? 'شاهد الفيديو الترويجي' : 'Watch promo video'}
            >
              {'\uD83C\uDFAC'}
            </button>
            <button
              onClick={() => store.toggleLang()}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isDay ? 'bg-amber-200 text-amber-900 hover:bg-amber-300' : 'bg-yellow-900/30 text-yellow-400 hover:bg-yellow-900/50'
              }`}
            >
              {lang === 'ar' ? 'EN' : '\u0639\u0631\u0628\u064A'}
            </button>
            <button
              onClick={() => store.toggleTheme()}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isDay ? 'bg-amber-200 text-amber-900 hover:bg-amber-300' : 'bg-yellow-900/30 text-yellow-400 hover:bg-yellow-900/50'
              }`}
            >
              {isDay ? '\uD83C\uDF19' : '\u2600\uFE0F'}
            </button>
          </div>
        </div>
        {/* Navigation */}
        <div className="max-w-4xl mx-auto px-4 pb-2">
          <nav className="flex gap-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => store.setCurrentPage(item.id)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  store.currentPage === item.id
                    ? 'bg-yellow-500 text-black'
                    : isDay
                    ? 'text-amber-900 hover:bg-amber-100'
                    : 'text-gray-400 hover:bg-gray-800'
                }`}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.name[lang]}</span>
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* ===== HOME PAGE ===== */}
        {store.currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <section className="text-center py-8">
              <img src="/app-icon.png" alt="Buried Truth" className="w-24 h-24 mx-auto mb-4 rounded-2xl object-contain animate-bounce-slow" />
              <h2 className="text-3xl font-bold text-yellow-400 mb-2">{t('appName', lang)}</h2>
              <div className={`max-w-md mx-auto mb-6 ${tc.secondary}`}>
                <p className="text-base leading-relaxed mb-2">
                  {lang === 'ar'
                    ? '\u0627\u0643\u062A\u0628 \u0633\u0631\u0651\u064B\u0627. \u0627\u0644\u062C\u0645\u0647\u0648\u0631 \u064A\u0642\u0631\u0631 \u0645\u0635\u064A\u0631\u0647.'
                    : 'Write a secret. The crowd decides if it sees the light.'}
                </p>
                <p className="text-sm leading-relaxed mb-2">
                  {lang === 'ar'
                    ? '\u0628\u0639\u0636 \u0627\u0644\u0623\u0633\u0631\u0627\u0631 \u062A\u0633\u062A\u062D\u0642 \u0623\u0646 \u062A\u064F\u0643\u0634\u0641. \u0648\u0627\u0644\u0628\u0639\u0636 \u0627\u0644\u0622\u062E\u0631 \u064A\u0633\u062A\u062D\u0642 \u0623\u0646 \u064A\u064F\u062F\u0641\u0646.'
                    : 'Some secrets deserve to be revealed. Others deserve to be buried.'}
                </p>
                <p className="text-sm leading-relaxed">
                  {lang === 'ar'
                    ? '\u0627\u0639\u062A\u0631\u0627\u0641\u0627\u062A \u0645\u062C\u0647\u0648\u0644\u0629\u060C \u0642\u0635\u0635 \u062E\u0641\u064A\u0629\u060C \u0648\u062D\u0642\u0627\u0626\u0642 \u0645\u062F\u0641\u0648\u0646\u0629 \u062A\u0646\u062A\u0638\u0631 \u0623\u0646 \u062A\u064F\u0643\u062A\u0634\u0641. \u0623\u0646\u0634\u0626 \u0635\u0646\u062F\u0648\u0642 \u0627\u0644\u063A\u0645\u0648\u0636 \u0648\u062F\u0639 \u0627\u0644\u0641\u0636\u0648\u0644 \u064A\u0642\u0631\u0631 \u0645\u0635\u064A\u0631\u0647.'
                    : 'Anonymous confessions, hidden stories, and buried truths waiting to be uncovered. Create a Mystery Box and let curiosity decide its fate.'}
                </p>
              </div>
              <p className={`text-sm ${tc.muted} mb-6`}>{t('tagline', lang)}</p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => store.setShowAddSecret(true)}
                  className="px-5 py-3 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors"
                >
                  {'\uD83D\uDD10'} {t('burySecret', lang)}
                </button>
                <button
                  onClick={() => store.setShowCreateBox(true)}
                  className="px-5 py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
                >
                  {'\uD83D\uDCE6'} {t('openBox', lang)}
                </button>
                <button
                  onClick={() => {
                    const fact = getRandomFact();
                    setCurrentFact(fact);
                  }}
                  className="px-5 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-500 transition-colors"
                >
                  {'\uD83C\uDFB2'} {t('randomBox', lang)}
                </button>
              </div>
            </section>

            {/* Stats Bar */}
            <section className={`rounded-xl p-4 ${cardBg} border`}>
              <div className="grid grid-cols-4 gap-2 text-center">
                {[
                  { icon: '\uD83D\uDCE6', count: globalStats.boxes, label: t('totalBoxes', lang) },
                  { icon: '\uD83D\uDD10', count: globalStats.secrets, label: t('totalSecrets', lang) },
                  { icon: '\u269B\uFE0F', count: globalStats.facts, label: t('totalFacts', lang) },
                  { icon: '\uD83D\uDC65', count: globalStats.explorers, label: t('totalExplorers', lang) },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <span className="text-xl">{stat.icon}</span>
                    <span className="text-lg font-bold text-yellow-400">{stat.count.toLocaleString()}</span>
                    <span className={`text-xs ${tc.muted}`}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Theme of the Day */}
            <section className={`rounded-xl p-4 ${cardBg} border`}>
              <h3 className={`font-bold mb-3 ${tc.secondary}`}>{t('themeOfDay', lang)}</h3>
              <div
                className="rounded-xl p-4 text-center"
                style={{ background: `${getTodayThemeDay().color}20`, borderColor: getTodayThemeDay().color + '40' }}
              >
                <div className="text-4xl mb-2">{getTodayThemeDay().emoji}</div>
                <div className="text-lg font-bold" style={{ color: getTodayThemeDay().color }}>
                  {getTodayThemeDay().name[lang]}
                </div>
              </div>
            </section>

            {/* Secret of the Day */}
            <section className={`rounded-xl p-4 ${cardBg} border`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-bold ${tc.secondary}`}>{t('secretOfDay', lang)}</h3>
                {!store.secretOfDayRevealed && (
                  <button
                    onClick={() => store.setSecretOfDayRevealed(true)}
                    className="px-4 py-2 rounded-lg bg-purple-600 text-white text-sm font-bold hover:bg-purple-500 transition-colors"
                  >
                    {'\uD83D\uDD10'} {t('reveal', lang)}
                  </button>
                )}
              </div>
              {store.secretOfDayRevealed ? (
                <div className="rounded-lg p-4 bg-purple-900/20 border border-purple-500/30">
                  <p className="text-sm leading-relaxed">{secretOfDay[lang]}</p>
                </div>
              ) : (
                <div className="rounded-lg p-4 bg-purple-900/10 border border-purple-500/20 text-center">
                  <div className="text-4xl mb-2">{'\uD83D\uDD10'}</div>
                  <p className={`text-sm ${tc.muted}`}>
                    {lang === 'ar' ? '\u0627\u0636\u063A\u0637 \u0643\u0634\u0641 \u0644\u0644\u0645\u0639\u0631\u0641\u0629' : 'Click reveal to discover'}
                  </p>
                </div>
              )}
            </section>

            {/* Fact of the Day */}
            <section className={`rounded-xl p-4 ${cardBg} border`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-bold ${tc.secondary}`}>{t('factOfDay', lang)}</h3>
                <button
                  onClick={() => setCurrentFact(getRandomFact())}
                  className="text-yellow-400 text-sm hover:underline"
                >
                  {lang === 'ar' ? '\u062D\u0642\u064A\u0642\u0629 \u0623\u062E\u0631\u0649' : 'Another Fact'}
                </button>
              </div>
              {currentFact ? (
                <div className="rounded-lg p-4 bg-yellow-500/10 border border-yellow-500/20">
                  <p className="text-sm leading-relaxed">{currentFact.text[lang]}</p>
                  <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded-full ${
                    isDay ? 'bg-amber-200 text-amber-900' : 'bg-gray-800 text-gray-400'
                  }`}>
                    {currentFact.category}
                  </span>
                </div>
              ) : (
                <div className={`text-center py-4 ${tc.muted}`}>...</div>
              )}
            </section>

            {/* Believe or Not */}
            <section className={`rounded-xl p-4 ${cardBg} border`}>
              <h3 className={`font-bold mb-3 ${tc.secondary}`}>
                {'\uD83E\uDD14'} {t('believe', lang)}
              </h3>
              {currentQuestion && (
                <div>
                  <p className="text-lg font-bold mb-4">{currentQuestion.question[lang]}</p>
                  {currentQuestion.videoUrl && (
                    <div className="mb-4 rounded-xl overflow-hidden">
                      {renderVideo(currentQuestion.videoUrl)}
                    </div>
                  )}
                  {store.hasVoted(currentQuestion.id) ? (
                    <div>
                      <div className={`rounded-lg p-4 mb-3 ${
                        currentQuestion.isTrue ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'
                      }`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{currentQuestion.isTrue ? '\u2705' : '\u274C'}</span>
                          <span className="font-bold">{t('theTruth', lang)}</span>
                        </div>
                        <p className="text-sm">{currentQuestion.explanation[lang]}</p>
                      </div>
                      <div className={`text-center text-sm ${tc.muted}`}>
                        {currentQuestion.believePercentage}% {t('percentageBelieved', lang)}
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-3">
                      <button
                        onClick={() => store.vote(currentQuestion.id, 'believe')}
                        className="flex-1 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-500 transition-colors"
                      >
                        {'\u2705'} {t('believeIt', lang)}
                      </button>
                      <button
                        onClick={() => store.vote(currentQuestion.id, 'dontBelieve')}
                        className="flex-1 py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-500 transition-colors"
                      >
                        {'\u274C'} {t('dontBelieve', lang)}
                      </button>
                    </div>
                  )}
                  <button
                    onClick={() => setCurrentQuestion(getRandomQuestion())}
                    className={`mt-3 w-full py-2 rounded-lg text-sm ${isDay ? 'bg-amber-100 text-amber-900' : 'bg-gray-800 text-gray-400'}`}
                  >
                    {lang === 'ar' ? '\u0633\u0624\u0627\u0644 \u0622\u062E\u0631' : 'Next Question'}
                  </button>
                </div>
              )}
            </section>

            {/* Trending */}
            <section className={`rounded-xl p-4 ${cardBg} border`}>
              <h3 className={`font-bold mb-3 ${tc.secondary}`}>{t('trending', lang)}</h3>
              <div className="flex gap-2 mb-3">
                {['viewed', 'liked', 'week'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setTrendingTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      trendingTab === tab
                        ? 'bg-yellow-500 text-black'
                        : isDay
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {tab === 'viewed' ? t('mostViewed', lang) : tab === 'liked' ? t('mostLiked', lang) : t('thisWeek', lang)}
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                {trendingBoxes.map((box, i) => {
                  const level = boxLevels[box.level];
                  return (
                    <div key={i} className={`rounded-lg p-3 ${isDay ? 'bg-amber-100/50' : 'bg-gray-800/50'} flex items-center gap-3`}>
                      <span className="text-2xl">{level.icon}</span>
                      <div className="flex-1">
                        <div className="font-bold" style={{ color: level.color }}>
                          {lang === 'ar' ? box.titleAr : box.titleEn}
                        </div>
                        <div className={`flex gap-3 text-xs ${tc.muted}`}>
                          <span>{'\uD83D\uDC41\uFE0F'} {box.views} {t('views', lang)}</span>
                          <span>{'\u2764\uFE0F'} {box.likes} {t('likes', lang)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Theme Days Carousel */}
            <section className={`rounded-xl p-4 ${cardBg} border`}>
              <h3 className={`font-bold mb-3 ${tc.secondary}`}>
                {lang === 'ar' ? '\u0623\u064A\u0627\u0645 \u0627\u0644\u0633\u0645\u0627\u062A' : 'Theme Days'}
              </h3>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {themeDays.map((day) => (
                  <div
                    key={day.id}
                    className={`flex-shrink-0 rounded-xl p-3 border text-center min-w-[100px] ${cardBg}`}
                    style={{ borderColor: day.color + '40' }}
                  >
                    <div className="text-2xl mb-1">{day.emoji}</div>
                    <div className="text-xs font-bold" style={{ color: day.color }}>
                      {day.name[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ===== BOXES PAGE ===== */}
        {store.currentPage === 'boxes' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-yellow-400">{'\uD83D\uDCE6'} {t('yourBoxes', lang)}</h2>
              <button
                onClick={() => store.setShowCreateBox(true)}
                className="px-4 py-2 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 text-sm"
              >
                {'+'} {t('createBox', lang)}
              </button>
            </div>

            {/* Box Level Filter */}
            <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
              {[{ id: 'all', name: { ar: '\u0627\u0644\u0643\u0644', en: 'All' } }, ...Object.entries(boxLevels).map(([id, l]) => ({ id, name: l.name }))].map(
                (filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedBoxLevel(filter.id as BoxLevel | 'all')}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedBoxLevel === filter.id
                        ? 'bg-yellow-500 text-black'
                        : isDay
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {filter.name[lang]}
                  </button>
                )
              )}
            </div>

            {/* Boxes List */}
            {store.boxes.filter((b) => selectedBoxLevel === 'all' || b.level === selectedBoxLevel).length === 0 ? (
              <div className={`text-center py-12 ${tc.muted}`}>
                <div className="text-4xl mb-3">{'\uD83D\uDCE6'}</div>
                <p>{t('noBoxes', lang)}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {store.boxes
                  .filter((b) => selectedBoxLevel === 'all' || b.level === selectedBoxLevel)
                  .map((box) => {
                    const level = boxLevels[box.level];
                    return (
                      <div
                        key={box.id}
                        className={`rounded-xl p-4 border ${cardBg} transition-colors hover:border-yellow-500/50`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{level.icon}</span>
                          <div className="flex-1">
                            <div className="font-bold" style={{ color: level.color }}>
                              {level.name[lang]} #{box.id.substring(0, 4)}
                            </div>
                            <div className={`text-sm ${tc.muted}`}>{level.description[lang]}</div>
                            <div className={`flex gap-3 text-xs mt-1 ${tc.muted}`}>
                              <span>{'\uD83D\uDC41\uFE0F'} {box.views}</span>
                              <span>{'\u2764\uFE0F'} {box.likes}</span>
                              <span>{box.opened ? '\u2705' : '\uD83D\uDD12'}</span>
                            </div>
                          </div>
                          {!box.opened && (
                            <button
                              onClick={() => store.openBox(box.id)}
                              className="px-3 py-2 rounded-lg bg-yellow-500 text-black text-sm font-bold hover:bg-yellow-400"
                            >
                              {t('openBox', lang)}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </>
        )}

        {/* ===== SECRETS PAGE ===== */}
        {store.currentPage === 'secrets' && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-yellow-400">{'\uD83D\uDD10'} {t('yourSecrets', lang)}</h2>
              <button
                onClick={() => store.setShowAddSecret(true)}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 text-sm"
              >
                {'+'} {t('addSecret', lang)}
              </button>
            </div>

            {/* Secret Category Filter */}
            <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
              {[{ id: 'all', name: { ar: '\u0627\u0644\u0643\u0644', en: 'All' }, icon: '\uD83D\uDD10' }, ...secretCategories].map(
                (cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedSecretCategory(cat.id)}
                    className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedSecretCategory === cat.id
                        ? 'bg-purple-600 text-white'
                        : isDay
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    <span>{'icon' in cat ? cat.icon : '\uD83D\uDD10'}</span>
                    <span>{cat.name[lang]}</span>
                  </button>
                )
              )}
            </div>

            {/* Secrets List */}
            {store.secrets.filter((s) => selectedSecretCategory === 'all' || s.category === selectedSecretCategory).length === 0 ? (
              <div className={`text-center py-12 ${tc.muted}`}>
                <div className="text-4xl mb-3">{'\uD83D\uDD10'}</div>
                <p>{lang === 'ar' ? '\u0644\u0627 \u062A\u0648\u062C\u062F \u0623\u0633\u0631\u0627\u0631 \u0628\u0639\u062F' : 'No secrets yet'}</p>
              </div>
            ) : (
              <div className="space-y-3">
                {store.secrets
                  .filter((s) => selectedSecretCategory === 'all' || s.category === selectedSecretCategory)
                  .map((secret) => {
                    const cat = secretCategories.find((c) => c.id === secret.category);
                    const isRevealed = secret.revealed !== false; // default to true for old secrets
                    const revealVotes = secret.revealVotes || 0;
                    const votesNeeded = secret.votesToReveal || 3;
                    const voteProgress = Math.min((revealVotes / votesNeeded) * 100, 100);
                    return (
                      <div key={secret.id} className={`rounded-xl p-4 border ${cardBg} transition-all duration-500 ${isRevealed ? '' : 'ring-1 ring-yellow-500/30'}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">{cat?.icon || '\uD83D\uDD10'}</span>
                          <span className="font-bold">{secret.title}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${isDay ? 'bg-amber-200 text-amber-900' : 'bg-gray-800 text-gray-400'}`}>
                            {cat?.name[lang]}
                          </span>
                          {!isRevealed && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 animate-pulse">
                              {'\uD83D\uDD12'} {t('secretHidden', lang)}
                            </span>
                          )}
                          {isRevealed && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                              {'\uD83D\uDD13'} {t('revealed', lang)}
                            </span>
                          )}
                        </div>

                        {/* Hidden content with blur effect */}
                        {isRevealed ? (
                          <>
                            <p className={`text-sm ${tc.secondary}`}>{secret.content}</p>
                            {secret.videoUrl && (
                              <div className="mt-3 rounded-xl overflow-hidden">
                                {renderVideo(secret.videoUrl)}
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="relative">
                            {/* Blurred fake content */}
                            <p className={`text-sm blur-lg select-none ${tc.secondary}`} aria-hidden="true">
                              {'\u2588'.repeat(40)}
                            </p>
                            {/* Vote to reveal overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                              <div className={`text-center rounded-xl p-3 ${isDay ? 'bg-white/90' : 'bg-gray-900/90'}`}>
                                <div className="text-2xl mb-1">{'\uD83D\uDD10'}</div>
                                <p className={`text-sm font-bold ${isDay ? 'text-gray-800' : 'text-white'}`}>
                                  {t('secretHidden', lang)}
                                </p>
                                {/* Vote progress bar */}
                                <div className={`w-40 h-2 rounded-full mt-2 ${isDay ? 'bg-gray-200' : 'bg-gray-700'}`}>
                                  <div
                                    className="h-full rounded-full bg-yellow-400 transition-all duration-300"
                                    style={{ width: `${voteProgress}%` }}
                                  />
                                </div>
                                <p className={`text-xs mt-1 ${isDay ? 'text-gray-500' : 'text-gray-400'}`}>
                                  {revealVotes} / {votesNeeded} {t('votesNeeded', lang)}
                                </p>
                                <button
                                  onClick={() => store.voteRevealSecret(secret.id)}
                                  className="mt-2 px-4 py-1.5 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-sm transition-colors"
                                >
                                  {'\uD83D\uDD0A'} {t('voteToReveal', lang)}
                                </button>
                                <button
                                  onClick={() => store.revealSecret(secret.id)}
                                  className={`mt-1 ml-2 px-3 py-1 rounded-lg text-xs font-bold transition-colors ${isDay ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                                >
                                  {t('revealNow', lang)}
                                </button>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between mt-2">
                          <span className={`text-xs ${tc.muted}`}>{t('anonymous', lang)}</span>
                          <button
                            onClick={() => store.likeSecret(secret.id)}
                            className="text-sm text-red-400 hover:text-red-300"
                          >
                            {'\u2764\uFE0F'} {secret.likes}
                          </button>
                        </div>
                      </div>
                    );
                  })}
              </div>
            )}
          </>
        )}

        {/* ===== FACTS PAGE ===== */}
        {store.currentPage === 'facts' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">{'\u269B\uFE0F'} {t('facts', lang)}</h2>

            {/* Fact Category Filter */}
            <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-hide">
              {[{ id: 'all', name: { ar: '\u0627\u0644\u0643\u0644', en: 'All' }, icon: '\u269B\uFE0F' }, ...factCategories].map(
                (cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedFactCategory(cat.id)}
                    className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedFactCategory === cat.id
                        ? 'bg-yellow-500 text-black'
                        : isDay
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    <span>{'icon' in cat ? cat.icon : '\u269B\uFE0F'}</span>
                    <span>{cat.name[lang]}</span>
                  </button>
                )
              )}
            </div>

            {/* Facts List */}
            <div className="space-y-3">
              {(selectedFactCategory === 'all'
                ? [currentFact, ...getFactsByCategory('science').slice(0, 2), ...getFactsByCategory('space').slice(0, 2)]
                : getFactsByCategory(selectedFactCategory)
              )
                .filter(Boolean)
                .map((fact, i) => (
                  <div key={fact!.id + '-' + i} className={`rounded-xl p-4 border ${cardBg}`}>
                    <p className="text-sm leading-relaxed mb-2">{fact!.text[lang]}</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${isDay ? 'bg-amber-200 text-amber-900' : 'bg-gray-800 text-gray-400'}`}>
                        {fact!.category}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}

        {/* ===== BELIEVE OR NOT PAGE ===== */}
        {store.currentPage === 'believe' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">
              {'\uD83E\uDD14'} {t('believe', lang)}
            </h2>
            {currentQuestion && (
              <div className={`rounded-xl p-6 border ${cardBgSolid}`}>
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{'\uD83E\uDD14'}</div>
                  <p className="text-xl font-bold">{currentQuestion.question[lang]}</p>
                </div>
                {currentQuestion.videoUrl && (
                  <div className="mb-6 rounded-xl overflow-hidden">
                    {renderVideo(currentQuestion.videoUrl)}
                  </div>
                )}
                {store.hasVoted(currentQuestion.id) ? (
                  <div>
                    <div className={`rounded-xl p-4 mb-4 ${
                      currentQuestion.isTrue ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-3xl">{currentQuestion.isTrue ? '\u2705' : '\u274C'}</span>
                        <span className="font-bold text-lg">{t('theTruth', lang)}</span>
                      </div>
                      <p className="leading-relaxed">{currentQuestion.explanation[lang]}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">{currentQuestion.believePercentage}%</div>
                      <div className={`text-sm ${tc.muted}`}>{t('percentageBelieved', lang)}</div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => store.vote(currentQuestion.id, 'believe')}
                      className="py-4 rounded-xl bg-green-600 text-white font-bold text-lg hover:bg-green-500 transition-colors"
                    >
                      {'\u2705'} {t('believeIt', lang)}
                    </button>
                    <button
                      onClick={() => store.vote(currentQuestion.id, 'dontBelieve')}
                      className="py-4 rounded-xl bg-red-600 text-white font-bold text-lg hover:bg-red-500 transition-colors"
                    >
                      {'\u274C'} {t('dontBelieve', lang)}
                    </button>
                  </div>
                )}
                <button
                  onClick={() => setCurrentQuestion(getRandomQuestion())}
                  className={`mt-4 w-full py-3 rounded-xl text-sm font-medium ${isDay ? 'bg-amber-100 text-amber-900 hover:bg-amber-200' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
                >
                  {lang === 'ar' ? '\u0633\u0624\u0627\u0644 \u0622\u062E\u0631' : 'Next Question'}
                </button>
              </div>
            )}
          </>
        )}

        {/* ===== STATS PAGE ===== */}
        {store.currentPage === 'stats' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">{'\uD83D\uDCCA'} {t('stats', lang)}</h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { label: t('totalBoxes', lang), value: store.boxes.length, icon: '\uD83D\uDCE6', color: '#DAA520' },
                { label: t('totalSecrets', lang), value: store.secrets.length, icon: '\uD83D\uDD10', color: '#9B59B6' },
                { label: lang === 'ar' ? '\u0627\u0644\u0645\u0641\u062A\u0648\u062D\u0629' : 'Opened', value: store.boxes.filter((b) => b.opened).length, icon: '\u2705', color: '#2ECC71' },
                { label: lang === 'ar' ? '\u0627\u0644\u062A\u0635\u0648\u064A\u062A\u0627\u062A' : 'Votes', value: store.votes.length, icon: '\uD83E\uDD14', color: '#E74C3C' },
              ].map((stat, i) => (
                <div key={i} className={`rounded-xl p-4 border ${cardBg} text-center`}>
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${tc.muted}`}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Per-level breakdown */}
            <div className={`rounded-xl p-4 ${cardBg} border`}>
              <h3 className={`font-bold mb-3 ${tc.secondary}`}>
                {lang === 'ar' ? '\u062D\u0633\u0628 \u0627\u0644\u0645\u0633\u062A\u0648\u0649' : 'By Level'}
              </h3>
              {(Object.entries(boxLevels) as [BoxLevel, typeof boxLevels.sandook][]).map(([key, level]) => {
                const count = store.boxes.filter((b) => b.level === key).length;
                return (
                  <div key={key} className="flex items-center gap-3 py-2">
                    <span className="text-xl">{level.icon}</span>
                    <span className="flex-1 font-medium" style={{ color: level.color }}>
                      {level.name[lang]}
                    </span>
                    <span className={`font-bold ${tc.primary}`}>{count}</span>
                  </div>
                );
              })}
            </div>

            {/* Achievements Preview */}
            <div className={`rounded-xl p-4 ${cardBg} border mt-4`}>
              <h3 className={`font-bold mb-3 ${tc.secondary}`}>{t('achievements', lang)}</h3>
              <div className="grid grid-cols-5 gap-2 text-center">
                {[
                  { icon: '\uD83D\uDD75\uFE0F', name: { ar: '\u0627\u0644\u0628\u0627\u062D\u062B', en: 'Researcher' } },
                  { icon: '\uD83D\uDD0D', name: { ar: '\u0627\u0644\u0645\u0643\u062A\u0634\u0641', en: 'Discoverer' } },
                  { icon: '\uD83D\uDC51', name: { ar: '\u0635\u0627\u0626\u062F \u0627\u0644\u0643\u0646\u0648\u0632', en: 'Treasure Hunter' } },
                  { icon: '\u269B\uFE0F', name: { ar: '\u062D\u0627\u0631\u0633 \u0627\u0644\u062D\u0642\u064A\u0642\u0629', en: 'Truth Guardian' } },
                  { icon: '\uD83D\uDD10', name: { ar: '\u0633\u064A\u062F \u0627\u0644\u0623\u0633\u0631\u0627\u0631', en: 'Secret Master' } },
                ].map((ach, i) => (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div className={`text-2xl ${store.boxes.length > i * 2 ? 'opacity-100' : 'opacity-30'}`}>
                      {ach.icon}
                    </div>
                    <div className="text-xs" style={{ color: store.boxes.length > i * 2 ? '#DAA520' : undefined }}>
                      {ach.name[lang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ===== SETTINGS PAGE ===== */}
        {store.currentPage === 'settings' && (
          <>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">{t('settings', lang)}</h2>

            <div className="space-y-4">
              {/* Language */}
              <div className={`rounded-xl p-4 ${cardBg} border`}>
                <h3 className={`font-bold mb-3 ${tc.secondary}`}>{t('language', lang)}</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => store.setLang('ar')}
                    className={`py-3 rounded-xl font-bold text-center transition-colors ${
                      lang === 'ar' ? 'bg-yellow-500 text-black' : isDay ? 'bg-amber-100 text-amber-900' : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {'\uD83C\uDDF8\uD83C\uDDE6'} \u0639\u0631\u0628\u064A
                  </button>
                  <button
                    onClick={() => store.setLang('en')}
                    className={`py-3 rounded-xl font-bold text-center transition-colors ${
                      lang === 'en' ? 'bg-yellow-500 text-black' : isDay ? 'bg-amber-100 text-amber-900' : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {'\uD83C\uDDFA\uD83C\uDDF8'} English
                  </button>
                </div>
              </div>

              {/* Theme */}
              <div className={`rounded-xl p-4 ${cardBg} border`}>
                <h3 className={`font-bold mb-3 ${tc.secondary}`}>{t('theme', lang)}</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => store.setTheme('night')}
                    className={`py-3 rounded-xl font-bold text-center transition-colors ${
                      theme === 'night' ? 'bg-yellow-500 text-black' : isDay ? 'bg-amber-100 text-amber-900' : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {'\uD83C\uDF19'} {t('nightMode', lang)}
                  </button>
                  <button
                    onClick={() => store.setTheme('day')}
                    className={`py-3 rounded-xl font-bold text-center transition-colors ${
                      theme === 'day' ? 'bg-yellow-500 text-black' : isDay ? 'bg-amber-100 text-amber-900' : 'bg-gray-800 text-gray-400'
                    }`}
                  >
                    {'\u2600\uFE0F'} {t('dayMode', lang)}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* ===== FOOTER ===== */}
      <footer className={`border-t ${isDay ? 'border-amber-200 bg-amber-50' : 'border-gray-800 bg-black'} py-6 mt-8`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className={`text-sm ${tc.muted}`}>
            <img src="/app-icon.png" alt="" className="w-4 h-4 inline-block rounded object-contain align-middle" /> {t('appName', lang)} &mdash; {t('tagline', lang)}
          </p>
        </div>
      </footer>

      {/* ===== CREATE BOX MODAL ===== */}
      {store.showCreateBox && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => store.setShowCreateBox(false)}
        >
          <div
            className={`rounded-2xl p-6 w-full max-w-sm border animate-slideUp ${cardBgSolid}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-yellow-400 mb-4">{t('createBox', lang)}</h2>
            <div className="mb-4">
              <label className={`block text-sm mb-2 ${tc.secondary}`}>{t('chooseLevel', lang)}</label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(boxLevels) as BoxLevel[]).map((levelKey) => {
                  const level = boxLevels[levelKey];
                  return (
                    <button
                      key={levelKey}
                      onClick={() => setSelectedLevel(levelKey)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedLevel === levelKey
                          ? 'border-yellow-400 scale-105'
                          : isDay
                          ? 'border-amber-300'
                          : 'border-gray-700'
                      }`}
                      style={{
                        background: selectedLevel === levelKey ? level.bgColor : isDay ? 'rgba(255,251,235,0.5)' : 'rgba(17,24,39,0.5)',
                      }}
                    >
                      <div className="text-2xl mb-1">{level.icon}</div>
                      <div className="text-sm font-bold" style={{ color: level.color }}>
                        {level.name[lang]}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => store.setShowCreateBox(false)}
                className={`flex-1 py-3 rounded-xl border transition-colors ${
                  isDay ? 'border-amber-300 text-amber-900 hover:bg-amber-100' : 'border-gray-700 text-gray-400 hover:bg-gray-800'
                }`}
              >
                {t('close', lang)}
              </button>
              <button
                onClick={() => store.addBox(selectedLevel)}
                className="flex-1 py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
              >
                {t('createBox', lang)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== BOX CREATED MODAL ===== */}
      {store.createdBoxId && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => store.setCreatedBoxId(null)}
        >
          <div
            className={`rounded-2xl p-8 w-full max-w-sm border text-center animate-slideUp ${cardBgSolid}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-6xl mb-4">{'\u2705'}</div>
            <h2 className="text-xl font-bold text-yellow-400 mb-2">{t('boxCreated', lang)}</h2>
            <p className={`text-sm ${tc.muted}`}>
              {lang === 'ar' ? '\u064A\u0645\u0643\u0646\u0643 \u0645\u0634\u0627\u0647\u062F\u062A\u0647 \u0641\u064A \u0642\u0633\u0645 \u0627\u0644\u0635\u0646\u0627\u062F\u064A\u0642' : 'You can find it in the Boxes section'}
            </p>
          </div>
        </div>
      )}

      {/* ===== ADD SECRET MODAL ===== */}
      {store.showAddSecret && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => store.setShowAddSecret(false)}
        >
          <div
            className={`rounded-2xl p-6 w-full max-w-sm border animate-slideUp ${cardBgSolid}`}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-yellow-400 mb-4">{'\uD83D\uDD10'} {t('addSecret', lang)}</h2>
            <div className="space-y-3 mb-4">
              <div>
                <label className={`block text-sm mb-1 ${tc.secondary}`}>{t('title', lang)}</label>
                <input
                  type="text"
                  value={secretTitle}
                  onChange={(e) => setSecretTitle(e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDay ? 'bg-white border-amber-300 text-black' : 'bg-gray-800 border-gray-600 text-white'
                  }`}
                  placeholder={lang === 'ar' ? '\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0633\u0631' : 'Secret title'}
                />
              </div>
              <div>
                <label className={`block text-sm mb-1 ${tc.secondary}`}>{t('yourSecret', lang)}</label>
                <textarea
                  value={secretContent}
                  onChange={(e) => setSecretContent(e.target.value)}
                  rows={3}
                  className={`w-full px-3 py-2 rounded-lg border resize-none ${
                    isDay ? 'bg-white border-amber-300 text-black' : 'bg-gray-800 border-gray-600 text-white'
                  }`}
                  placeholder={lang === 'ar' ? '\u0627\u0643\u062A\u0628 \u0633\u0631\u0643 \u0647\u0646\u0627...' : 'Write your secret here...'}
                />
              </div>
              <div>
                <label className={`block text-sm mb-1 ${tc.secondary}`}>{t('chooseCategory', lang)}</label>
                <div className="flex flex-wrap gap-2">
                  {secretCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSecretCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        secretCategory === cat.id
                          ? 'bg-purple-600 text-white'
                          : isDay
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      {cat.icon} {cat.name[lang]}
                    </button>
                  ))}
                </div>
              </div>
              <p className={`text-xs ${tc.muted}`}>
                {'\uD83D\uDD10'} {lang === 'ar' ? '\u0645\u062C\u0647\u0648\u0644 \u062A\u0645\u0627\u0645\u064B\u0627 - \u0644\u0627 \u064A\u0645\u0643\u0646 \u062A\u062A\u0628\u0639 \u0647\u0648\u064A\u062A\u0643' : 'Completely anonymous - your identity cannot be traced'}
              </p>
              {/* Video Upload */}
              <div>
                <label className={`block text-sm mb-1 ${tc.secondary}`}>
                  {'\uD83C\uDFAC'} {lang === 'ar' ? '\u0631\u0641\u0639 \u0641\u064A\u062F\u064A\u0648' : 'Upload Video'}
                </label>
                {!secretVideoUrl ? (
                  <label
                    className={`flex flex-col items-center justify-center w-full h-28 rounded-xl border-2 border-dashed cursor-pointer transition-colors ${
                      uploadingVideo
                        ? 'border-yellow-400 bg-yellow-400/10'
                        : isDay
                        ? 'border-gray-300 bg-gray-50 hover:border-purple-400 hover:bg-purple-50'
                        : 'border-gray-600 bg-gray-800/50 hover:border-purple-500 hover:bg-purple-900/20'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center py-3">
                      {uploadingVideo ? (
                        <>
                          <div className="w-8 h-8 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin mb-2" />
                          <p className="text-sm text-yellow-400">{uploadProgress || (lang === 'ar' ? '\u062C\u0627\u0631\u064A \u0627\u0644\u0631\u0641\u0639...' : 'Uploading...')}</p>
                        </>
                      ) : (
                        <>
                          <span className="text-3xl mb-1">{'\uD83C\uDFAC'}</span>
                          <p className={`text-sm ${tc.muted}`}>
                            {lang === 'ar' ? '\u0627\u0636\u063A\u0637 \u0644\u0631\u0641\u0639 \u0641\u064A\u062F\u064A\u0648' : 'Click to upload video'}
                          </p>
                          <p className={`text-xs ${tc.muted}`}>
                            MP4, WebM, MOV - {lang === 'ar' ? '\u062D\u062C\u0645 \u0623\u0642\u0635\u0649 100MB' : 'Max 100MB'}
                          </p>
                        </>
                      )}
                    </div>
                    <input
                      type="file"
                      accept="video/mp4,video/webm,video/ogg,video/quicktime,video/x-msvideo,video/x-matroska"
                      className="hidden"
                      disabled={uploadingVideo}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleVideoUpload(file);
                      }}
                    />
                  </label>
                ) : (
                  <div className={`relative rounded-xl overflow-hidden ${isDay ? 'bg-gray-100' : 'bg-gray-800'}`}>
                    <video
                      src={secretVideoUrl}
                      className="w-full h-32 object-cover rounded-xl"
                      muted
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1 flex items-center justify-between">
                      <span className="text-xs text-green-400">{'\u2705'} {lang === 'ar' ? '\u062A\u0645 \u0627\u0644\u0631\u0641\u0639' : 'Uploaded'}</span>
                      <button
                        onClick={() => {
                          setSecretVideoUrl(null);
                          setSecretVideoType('');
                        }}
                        className="text-xs text-red-400 hover:text-red-300"
                      >
                        {'\u274C'} {lang === 'ar' ? '\u062D\u0630\u0641' : 'Remove'}
                      </button>
                    </div>
                  </div>
                )}
                {uploadProgress && !secretVideoUrl && (
                  <p className={`text-xs mt-1 ${uploadProgress.includes('\u0641\u0634\u0644') || uploadProgress.includes('failed') ? 'text-red-400' : 'text-yellow-400'}`}>
                    {uploadProgress}
                  </p>
                )}
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => store.setShowAddSecret(false)}
                className={`flex-1 py-3 rounded-xl border transition-colors ${
                  isDay ? 'border-amber-300 text-amber-900 hover:bg-amber-100' : 'border-gray-700 text-gray-400 hover:bg-gray-800'
                }`}
              >
                {t('close', lang)}
              </button>
              <button
                onClick={() => {
                  if (secretTitle.trim() && secretContent.trim()) {
                    store.addSecret(secretTitle, secretContent, secretCategory, secretVideoUrl || undefined, secretVideoType || undefined);
                    setSecretTitle('');
                    setSecretContent('');
                    setSecretVideoUrl(null);
                    setSecretVideoType('');
                  }
                }}
                className="flex-1 py-3 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-500 transition-colors"
              >
                {t('submit', lang)}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== PROMO VIDEO MODAL (first visit + header button) ===== */}
      {showPromoVideo && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
          onClick={() => {
            setShowPromoVideo(false);
            setPromoStep(1);
            if (typeof window !== 'undefined') {
              localStorage.setItem('bt-seen-promo', '1');
            }
          }}
        >
          <div
            className={`rounded-2xl p-5 w-full max-w-lg border animate-slideUp ${isDay ? 'bg-white border-gray-200' : 'bg-gray-900 border-gray-700'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-yellow-400">
                {'\uD83C\uDFAC'} {lang === 'ar' ? 'الحقيقة المدفونة' : 'Buried Truth'}
              </h2>
              <div className="flex items-center gap-2">
                {/* Step indicator */}
                <div className="flex gap-1">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        promoStep === step ? 'bg-yellow-400' : promoStep > step ? 'bg-green-400' : isDay ? 'bg-gray-300' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => {
                    setShowPromoVideo(false);
                    setPromoStep(1);
                    if (typeof window !== 'undefined') {
                      localStorage.setItem('bt-seen-promo', '1');
                    }
                  }}
                  className={`p-1.5 rounded-lg transition-colors ${
                    isDay ? 'hover:bg-gray-100 text-gray-600' : 'hover:bg-gray-800 text-gray-400'
                  }`}
                >
                  {'\u2715'}
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="rounded-xl overflow-hidden mb-3 bg-black relative">
              <video
                key={promoStep}
                id="promo-video"
                src={`/uploads/promo${promoStep}.mp4`}
                autoPlay
                muted
                playsInline
                controls
                className="w-full"
                style={{ aspectRatio: '9/16', maxHeight: '60vh' }}
                onEnded={() => {
                  if (promoStep < 3) {
                    setPromoStep((promoStep + 1) as 1 | 2 | 3);
                  }
                }}
              />
              {/* Unmute floating button */}
              <button
                id="promo-unmute-btn"
                onClick={() => {
                  const vid = document.getElementById('promo-video') as HTMLVideoElement;
                  if (vid) {
                    vid.muted = false;
                    const btn = document.getElementById('promo-unmute-btn');
                    if (btn) btn.style.display = 'none';
                  }
                }}
                className="absolute bottom-16 right-3 bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all"
                title={lang === 'ar' ? 'تشغيل الصوت' : 'Unmute'}
              >
                {'\uD83D\uDD0A'}
              </button>
            </div>

            {/* Video title */}
            <p className={`text-sm font-bold mb-2 text-center ${tc.primary}`}>
              {promoStep === 1
                ? lang === 'ar' ? 'ادفن الخوف.. اكشف الحقيقة' : 'Bury the Fear, Reveal the Truth'
                : promoStep === 2
                ? lang === 'ar' ? 'اكشف سرك' : 'Reveal Your Secret'
                : lang === 'ar' ? 'الحقيقة المدفونة بداخلك' : 'The Truth Buried Within'}
            </p>
            <p className={`text-xs ${tc.muted} mb-3 text-center`}>
              {promoStep < 3
                ? lang === 'ar' ? `الفيديو ${promoStep} من 3 - سيتم تشغيل التالي تلقائيًا` : `Video ${promoStep} of 3 - Next plays automatically`
                : lang === 'ar' ? 'الفيديو الأخير - ابدأ رحلتك الآن!' : 'Final video - Start your journey now!'}
            </p>

            {/* Navigation buttons */}
            <div className="flex gap-2">
              {promoStep > 1 && (
                <button
                  onClick={() => setPromoStep((promoStep - 1) as 1 | 2 | 3)}
                  className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
                    isDay ? 'bg-gray-200 text-gray-800 hover:bg-gray-300' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {'\u2190'} {lang === 'ar' ? 'السابق' : 'Previous'}
                </button>
              )}
              {promoStep < 3 ? (
                <button
                  onClick={() => setPromoStep((promoStep + 1) as 1 | 2 | 3)}
                  className="flex-1 py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
                >
                  {lang === 'ar' ? 'التالي' : 'Next'} {'\u2192'}
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowPromoVideo(false);
                    setPromoStep(1);
                    if (typeof window !== 'undefined') {
                      localStorage.setItem('bt-seen-promo', '1');
                    }
                  }}
                  className="flex-1 py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors"
                >
                  {lang === 'ar' ? 'ابدأ الاستكشاف' : 'Start Exploring'} {'\uD83C\uDFAC'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
