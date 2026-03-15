/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Home, 
  BookOpen, 
  Settings, 
  ChevronRight, 
  ArrowLeft,
  X,
  CheckCircle2,
  XCircle,
  Info,
  AlertCircle,
  Sparkles,
  MapPin,
  Languages,
  Globe
} from 'lucide-react';
import { ETIQUETTE_DATA, EtiquetteItem } from './data';
import { Language, LANGUAGES, UI_TRANSLATIONS } from './i18n';

type Screen = 'home' | 'browse' | 'settings' | 'detail' | 'search' | 'regional' | 'emergency' | 'about' | 'basics' | 'paywall';
type Filter = 'All' | 'Essential' | 'Culture';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [selectedItem, setSelectedItem] = useState<EtiquetteItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [isPremiumUnlocked, setIsPremiumUnlocked] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  // Load state from local storage
  useEffect(() => {
    const savedPremium = localStorage.getItem('japan_etiquette_premium');
    if (savedPremium) setIsPremiumUnlocked(JSON.parse(savedPremium));

    const savedLang = localStorage.getItem('japan_etiquette_language');
    if (savedLang) {
      setLanguage(savedLang as Language);
    } else {
      // Suggest language based on browser
      const browserLang = navigator.language.split('-')[0];
      const supportedLang = LANGUAGES.find(l => l.code === browserLang);
      if (supportedLang) {
        setLanguage(supportedLang.code);
      }
    }

    const savedOnboarding = localStorage.getItem('japan_etiquette_onboarding');
    if (savedOnboarding) {
      setHasCompletedOnboarding(JSON.parse(savedOnboarding));
    } else {
      setCurrentScreen('onboarding');
    }
  }, []);

  // Save premium status to local storage
  useEffect(() => {
    localStorage.setItem('japan_etiquette_premium', JSON.stringify(isPremiumUnlocked));
  }, [isPremiumUnlocked]);

  // Save language to local storage
  useEffect(() => {
    localStorage.setItem('japan_etiquette_language', language);
  }, [language]);

  // Save onboarding status to local storage
  useEffect(() => {
    localStorage.setItem('japan_etiquette_onboarding', JSON.stringify(hasCompletedOnboarding));
  }, [hasCompletedOnboarding]);

  const t = (key: string) => {
    return UI_TRANSLATIONS[language][key] || UI_TRANSLATIONS['en'][key] || key;
  };

  const getLocalizedItem = (item: EtiquetteItem): EtiquetteItem => {
    if (language === 'en' || !item.translations || !item.translations[language]) {
      return item;
    }
    return { ...item, ...item.translations[language] };
  };

  const localizedItems = useMemo(() => ETIQUETTE_DATA.map(getLocalizedItem), [language]);

  const filteredItems = useMemo(() => {
    let items = localizedItems;
    
    if (activeFilter === 'Essential') {
      items = items.filter(item => item.tags.includes('Essential'));
    } else if (activeFilter === 'Culture') {
      items = items.filter(item => item.tags.includes('Culture'));
    }

    if (searchQuery) {
      items = items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.quickView.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return items;
  }, [searchQuery, activeFilter, language]);

  const openDetail = (item: EtiquetteItem) => {
    if (item.isPremium && !isPremiumUnlocked) {
      setSelectedItem(item);
      setCurrentScreen('paywall');
    } else {
      setSelectedItem(item);
      setCurrentScreen('detail');
    }
  };

  const unlockPremium = () => {
    setIsPremiumUnlocked(true);
    if (selectedItem) {
      setCurrentScreen('detail');
    } else {
      setCurrentScreen('home');
    }
  };

  const goBack = () => {
    if (currentScreen === 'detail') {
      setCurrentScreen('browse');
    } else if (currentScreen === 'search') {
      setCurrentScreen('home');
      setSearchQuery('');
    } else if (currentScreen === 'regional' || currentScreen === 'emergency' || currentScreen === 'about' || currentScreen === 'basics' || currentScreen === 'paywall') {
      setCurrentScreen('settings');
    } else {
      setCurrentScreen('home');
    }
  };

  const renderHeader = () => {
    if (currentScreen === 'regional' || currentScreen === 'emergency' || currentScreen === 'about' || currentScreen === 'basics' || currentScreen === 'paywall') {
      return (
        <header className="sticky top-0 z-30 bg-paper/80 backdrop-blur-md px-6 py-4 flex items-center gap-4">
          <button onClick={goBack} className="p-2 -ml-2 text-indigo-japan bg-white rounded-full shadow-sm">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-serif italic font-bold text-indigo-japan">
            {currentScreen === 'regional' ? t('regional') : 
             currentScreen === 'emergency' ? t('emergency') :
             currentScreen === 'about' ? t('about') : 
             currentScreen === 'paywall' ? t('premiumUnlock') : t('japanTravelBasics')}
          </h1>
        </header>
      );
    }

    if (currentScreen === 'detail' && selectedItem) {
      return (
        <header className="sticky top-0 z-30 bg-paper/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
          <button onClick={goBack} className="p-2 -ml-2 text-indigo-japan bg-white rounded-full shadow-sm">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-serif italic font-bold text-indigo-japan">{selectedItem.title}</h1>
          <div className="w-8" />
        </header>
      );
    }

    if (currentScreen === 'home') {
      return (
        <header className="px-6 pt-12 pb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-vermilion mb-1">{t('welcome')}</p>
              <h1 className="text-3xl font-serif italic font-bold tracking-tight text-indigo-japan">
                {t('mannersAndRules')}
              </h1>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-indigo-japan flex items-center justify-center text-paper shadow-lg shadow-indigo-japan/20">
              <span className="font-serif font-bold text-xl">和</span>
            </div>
          </div>
          <div 
            onClick={() => setCurrentScreen('search')}
            className="relative group cursor-pointer"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-japan/30 group-hover:text-indigo-japan transition-colors" size={20} />
            <div className="w-full bg-white border border-indigo-japan/5 rounded-2xl py-4 pl-12 pr-4 text-indigo-japan/40 text-sm font-medium shadow-sm group-hover:shadow-md transition-all">
              {t('search')}
            </div>
          </div>
        </header>
      );
    }

    return (
      <header className="px-6 pt-12 pb-4 flex items-center justify-between">
        <h1 className="text-2xl font-serif italic font-bold text-indigo-japan capitalize">
          {t(currentScreen)}
        </h1>
        {currentScreen === 'browse' && (
          <button onClick={() => setCurrentScreen('search')} className="p-2 text-indigo-japan/40">
            <Search size={20} />
          </button>
        )}
      </header>
    );
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'onboarding':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 bg-paper flex flex-col p-8"
          >
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
              <div className="w-24 h-24 bg-indigo-japan rounded-[2.5rem] flex items-center justify-center text-paper shadow-2xl shadow-indigo-japan/20 mb-4">
                <span className="font-serif font-bold text-4xl">和</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-serif italic font-bold text-indigo-japan">{t('welcome')}</h2>
                <p className="text-sm text-indigo-japan/60 leading-relaxed max-w-[280px] mx-auto">
                  {t('onboardingSubtitle')}
                </p>
              </div>

              <div className="w-full space-y-4 pt-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-japan/30">{t('selectLanguage')}</p>
                <div className="grid grid-cols-3 gap-3">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`py-4 px-2 rounded-2xl text-xs font-bold transition-all border flex flex-col items-center gap-2 ${
                        language === lang.code 
                          ? 'bg-indigo-japan text-paper border-indigo-japan shadow-xl scale-105' 
                          : 'bg-white text-indigo-japan/40 border-indigo-japan/5'
                      }`}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-[10px]">{lang.nativeLabel}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={() => {
                setHasCompletedOnboarding(true);
                setCurrentScreen('home');
              }}
              className="w-full py-5 bg-indigo-japan text-paper rounded-3xl font-bold text-sm shadow-lg shadow-indigo-japan/20 active:scale-[0.98] transition-all"
            >
              {t('getStarted')}
            </button>
          </motion.div>
        );

      case 'home':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-6 pb-24 space-y-10"
          >
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-japan/30">{t('quickAccess')}</h2>
                <button onClick={() => setCurrentScreen('browse')} className="text-[10px] font-bold uppercase tracking-widest text-vermilion">
                  {t('viewAll')}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {localizedItems.slice(0, 4).map((item) => (
                  <CategoryCard key={item.id} item={item} onClick={() => openDetail(item)} />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-japan/30">{t('commonSituations')}</h2>
              </div>
              <div className="space-y-3">
                {localizedItems.slice(4, 7).map((item) => (
                  <ListItem key={item.id} item={item} onClick={() => openDetail(item)} />
                ))}
              </div>
            </section>

            <section className="bg-indigo-japan text-paper rounded-[2rem] p-8 relative overflow-hidden shadow-xl shadow-indigo-japan/20">
              <div className="relative z-10">
                <div className="w-10 h-10 bg-vermilion rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-vermilion/20">
                  <Sparkles size={20} className="text-white" />
                </div>
                <h3 className="font-serif italic text-2xl mb-3">{t('omotenashiTitle')}</h3>
                <p className="text-sm text-paper/70 leading-relaxed mb-6 font-medium">
                  {t('omotenashiDesc')}
                </p>
                <button 
                  onClick={() => {
                    setActiveFilter('Culture');
                    setCurrentScreen('browse');
                  }}
                  className="bg-white text-indigo-japan px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-paper transition-colors"
                >
                  {t('exploreCulture')}
                </button>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-5 transform rotate-12">
                <BookOpen size={240} />
              </div>
            </section>
          </motion.div>
        );

      case 'browse':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 pb-24"
          >
            <div className="flex gap-2 mb-8 mt-2 overflow-x-auto pb-2 no-scrollbar">
              {(['All', 'Essential', 'Culture'] as Filter[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeFilter === filter 
                    ? 'bg-indigo-japan text-paper shadow-md shadow-indigo-japan/20' 
                    : 'bg-white text-indigo-japan/40 border border-indigo-japan/5'
                  }`}
                >
                  {t(filter.toLowerCase())}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredItems.map((item) => (
                <ListItem key={item.id} item={item} onClick={() => openDetail(item)} />
              ))}
              {filteredItems.length === 0 && (
                <div className="py-20 text-center">
                  <p className="text-indigo-japan/30 text-sm">No guides found in this category.</p>
                </div>
              )}
            </div>
          </motion.div>
        );

      case 'search':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 pb-24"
          >
            <div className="relative mb-8 mt-4">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-japan/40" size={20} />
              <input 
                autoFocus
                type="text"
                placeholder="Search situations, places, or rules..."
                className="w-full bg-white border border-indigo-japan/5 rounded-2xl py-4 pl-12 pr-4 text-indigo-japan placeholder:text-indigo-japan/30 shadow-sm focus:shadow-md transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-indigo-japan/40 p-1"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {searchQuery ? (
              <div className="space-y-4">
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-japan/30">Search Results</h2>
                {filteredItems.map((item) => (
                  <ListItem key={item.id} item={item} onClick={() => openDetail(item)} />
                ))}
                {filteredItems.length === 0 && (
                  <div className="py-12 text-center">
                    <p className="text-indigo-japan/30 text-sm">No results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-8">
                <section>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-japan/30 mb-4">Suggested Topics</h2>
                  <div className="flex flex-wrap gap-2">
                    {['Chopsticks', 'Tipping', 'Bowing', 'Subway', 'Temples', 'Tattoos'].map((topic) => (
                      <button 
                        key={topic}
                        onClick={() => setSearchQuery(topic)}
                        className="px-4 py-2 bg-white border border-indigo-japan/5 rounded-xl text-xs font-medium text-indigo-japan/60 hover:text-indigo-japan transition-colors"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </section>
                <section>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-japan/30 mb-4">Recent Searches</h2>
                  <div className="space-y-2">
                    {['Onsen rules', 'Train manners'].map((recent) => (
                      <button 
                        key={recent}
                        onClick={() => setSearchQuery(recent)}
                        className="w-full flex items-center gap-3 py-2 text-sm text-indigo-japan/40 hover:text-indigo-japan transition-colors"
                      >
                        <Search size={14} />
                        {recent}
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </motion.div>
        );

      case 'settings':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 pb-24"
          >
            <div className="bg-white rounded-[2rem] overflow-hidden border border-indigo-japan/5 shadow-sm mt-4">
              {!isPremiumUnlocked && (
                <SettingsItem 
                  icon={<Sparkles size={20} className="text-vermilion" />} 
                  label={t('unlockPremium')} 
                  onClick={() => setCurrentScreen('paywall')}
                  value={t('oneTimePurchase')}
                />
              )}
              <SettingsItem 
                icon={<Info size={20} />} 
                label={t('about')} 
                onClick={() => setCurrentScreen('about')}
              />
              <SettingsItem 
                icon={<BookOpen size={20} />} 
                label={t('basics')} 
                onClick={() => setCurrentScreen('basics')}
              />
              <SettingsItem 
                icon={<MapPin size={20} />} 
                label={t('regional')} 
                onClick={() => setCurrentScreen('regional')}
              />
              <div className="px-6 py-4 border-b border-indigo-japan/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-indigo-japan/5 rounded-xl flex items-center justify-center text-indigo-japan">
                      <Languages size={20} />
                    </div>
                    <span className="text-sm font-bold text-indigo-japan">{t('language')}</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`py-2 px-1 rounded-xl text-[10px] font-bold transition-all border ${
                        language === lang.code 
                          ? 'bg-indigo-japan text-paper border-indigo-japan shadow-md' 
                          : 'bg-paper text-indigo-japan/40 border-indigo-japan/5'
                      }`}
                    >
                      <div className="text-lg mb-0.5">{lang.flag}</div>
                      <div>{lang.nativeLabel}</div>
                    </button>
                  ))}
                </div>
              </div>
              <SettingsItem 
                icon={<AlertCircle size={20} />} 
                label={t('emergency')} 
                onClick={() => setCurrentScreen('emergency')}
              />
            </div>
            <div className="mt-12 text-center">
              <div className="w-10 h-10 bg-indigo-japan/5 rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-japan/20">
                <span className="font-serif font-bold">和</span>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-japan/20">{t('version')} 1.2.0 • Crafted for Japan</p>
            </div>
          </motion.div>
        );

      case 'regional':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-6 pb-24 space-y-8 mt-4"
          >
            <section className="bg-white rounded-[2rem] p-8 border border-indigo-japan/5 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-vermilion mb-4">Tokyo vs. Osaka</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif italic font-bold text-indigo-japan mb-2">Escalators</h4>
                  <p className="text-sm text-indigo-japan/60 leading-relaxed">
                    In <span className="text-indigo-japan font-bold">Tokyo</span>, stand on the <span className="text-vermilion font-bold">left</span>. In <span className="text-indigo-japan font-bold">Osaka</span>, stand on the <span className="text-vermilion font-bold">right</span>.
                  </p>
                </div>
                <div className="pt-4 border-t border-indigo-japan/5">
                  <h4 className="font-serif italic font-bold text-indigo-japan mb-2">Vibe</h4>
                  <p className="text-sm text-indigo-japan/60 leading-relaxed">
                    Tokyo is generally more reserved and orderly. Osaka is known for being more outgoing, friendly, and having a "louder" food culture.
                  </p>
                </div>
              </div>
            </section>
            <div className="p-6 bg-indigo-japan/5 rounded-2xl">
              <p className="text-xs text-indigo-japan/40 italic leading-relaxed">
                "When in doubt, just observe the locals. They are your best guide to regional nuances."
              </p>
            </div>
          </motion.div>
        );

      case 'emergency':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-6 pb-24 space-y-6 mt-4"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-3xl p-6 border border-indigo-japan/5 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-japan/30 mb-1">{t('police')}</p>
                  <h3 className="text-3xl font-serif font-bold text-indigo-japan">110</h3>
                </div>
                <div className="w-12 h-12 bg-indigo-japan/5 rounded-2xl flex items-center justify-center text-indigo-japan">
                  <AlertCircle size={24} />
                </div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-indigo-japan/5 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-japan/30 mb-1">{t('fireAmbulance')}</p>
                  <h3 className="text-3xl font-serif font-bold text-indigo-japan">119</h3>
                </div>
                <div className="w-12 h-12 bg-vermilion/5 rounded-2xl flex items-center justify-center text-vermilion">
                  <AlertCircle size={24} />
                </div>
              </div>
            </div>
            
            <section className="bg-white rounded-[2rem] p-8 border border-indigo-japan/5 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-vermilion mb-4">{t('helpfulPhrases')}</h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-indigo-japan/5">
                  <p className="text-xs text-indigo-japan/40 mb-1">{t('phraseHelp')}</p>
                  <p className="font-serif italic text-indigo-japan">Tasukete kudasai</p>
                </div>
                <div className="pb-4 border-b border-indigo-japan/5">
                  <p className="text-xs text-indigo-japan/40 mb-1">{t('phraseLost')}</p>
                  <p className="font-serif italic text-indigo-japan">Michi ni mayoimashita</p>
                </div>
                <div>
                  <p className="text-xs text-indigo-japan/40 mb-1">{t('phraseHospital')}</p>
                  <p className="font-serif italic text-indigo-japan">Byouin wa doko desu ka?</p>
                </div>
              </div>
            </section>
          </motion.div>
        );

      case 'about':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-6 pb-24 space-y-8 mt-4"
          >
            <section className="bg-white rounded-[2rem] p-8 border border-indigo-japan/5 shadow-sm">
              <h3 className="font-serif italic text-2xl text-indigo-japan mb-4">{t('aboutTitle')}</h3>
              <p className="text-sm text-indigo-japan/60 leading-relaxed mb-6">
                {t('aboutDesc1')}
              </p>
              <p className="text-sm text-indigo-japan/60 leading-relaxed">
                {t('aboutDesc2')}
              </p>
            </section>
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-japan/20">© 2026 Japan Etiquette Guide</p>
            </div>
          </motion.div>
        );

      case 'basics':
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="px-6 pb-24 space-y-6 mt-4"
          >
            <section className="bg-white rounded-[2rem] p-8 border border-indigo-japan/5 shadow-sm">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-vermilion mb-6">{t('essentialTips')}</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-japan/5 flex items-center justify-center shrink-0 text-indigo-japan">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-japan text-sm mb-1">{t('tipCashTitle')}</h4>
                    <p className="text-xs text-indigo-japan/60 leading-relaxed">{t('tipCashDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-japan/5 flex items-center justify-center shrink-0 text-indigo-japan">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-japan text-sm mb-1">{t('tipQuietTitle')}</h4>
                    <p className="text-xs text-indigo-japan/60 leading-relaxed">{t('tipQuietDesc')}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-indigo-japan/5 flex items-center justify-center shrink-0 text-indigo-japan">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-indigo-japan text-sm mb-1">{t('tipTippingTitle')}</h4>
                    <p className="text-xs text-indigo-japan/60 leading-relaxed">{t('tipTippingDesc')}</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        );

      case 'paywall':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-6 pb-24 space-y-8 mt-4"
          >
            {selectedItem && (
              <div className="relative h-48 w-full rounded-[2rem] overflow-hidden mb-8">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title}
                  className="w-full h-full object-cover blur-[2px] opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-vermilion mb-1">{t('premiumContentPreview')}</p>
                  <h3 className="text-2xl font-serif italic font-bold text-indigo-japan mb-2">{selectedItem.title}</h3>
                  <p className="text-xs text-indigo-japan/60 line-clamp-2 italic">
                    "{selectedItem.quickView}"
                  </p>
                </div>
              </div>
            )}

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-vermilion/5 rounded-full flex items-center justify-center mx-auto text-vermilion">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-serif italic font-bold text-indigo-japan">{t('unlockPremium')}</h3>
              <p className="text-sm text-indigo-japan/60 leading-relaxed max-w-[280px] mx-auto">
                Gain deep cultural insights and master the nuances of Japanese etiquette with our premium guides.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <PremiumBenefit label={t('premiumBenefit1')} />
              <PremiumBenefit label={t('premiumBenefit2')} />
              <PremiumBenefit label={t('premiumBenefit3')} />
              <PremiumBenefit label={t('premiumBenefit4')} />
            </div>

            <div className="space-y-4 pt-4">
              <button 
                onClick={unlockPremium}
                className="w-full py-5 bg-indigo-japan text-paper rounded-3xl font-bold text-sm shadow-lg shadow-indigo-japan/20 active:scale-[0.98] transition-all"
              >
                {t('unlockPremium')} — $4.99
              </button>
              <p className="text-[10px] text-center text-indigo-japan/30 font-bold uppercase tracking-widest">
                {t('oneTimePurchase')}. No subscriptions.
              </p>
              <button className="w-full py-2 text-[10px] font-bold uppercase tracking-widest text-indigo-japan/40 hover:text-indigo-japan/60 transition-colors">
                {t('restorePurchases')}
              </button>
            </div>
          </motion.div>
        );

      case 'detail':
        if (!selectedItem) return null;
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pb-32"
          >
            <div className="relative h-[40vh] w-full overflow-hidden">
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-2 mb-3">
                  {selectedItem.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-indigo-japan text-paper text-[8px] font-bold uppercase tracking-widest rounded-full">
                      {tag}
                    </span>
                  ))}
                  <span className={`px-3 py-1 text-[8px] font-bold uppercase tracking-widest rounded-full ${
                    selectedItem.riskLevel === 'High' ? 'bg-vermilion text-white' : 'bg-white text-indigo-japan border border-indigo-japan/5'
                  }`}>
                    {selectedItem.riskLevel} Risk
                  </span>
                </div>
                <h2 className="text-4xl font-serif italic font-bold text-indigo-japan">{selectedItem.title}</h2>
              </div>
            </div>

            <div className="px-6 space-y-12 mt-8">
              <section className="bg-white rounded-[2rem] p-8 border border-indigo-japan/5 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <selectedItem.icon size={80} />
                </div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-vermilion mb-4">{t('quickView')}</h3>
                <p className="text-lg font-serif italic leading-relaxed text-indigo-japan">
                  "{selectedItem.quickView}"
                </p>
              </section>

              <div className="grid grid-cols-1 gap-10">
                <section>
                  <h3 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 mb-6">
                    <CheckCircle2 size={16} /> {t('whatToDo')}
                  </h3>
                  <ul className="space-y-4">
                    {selectedItem.whatToDo.map((text, i) => (
                      <li key={i} className="flex gap-4 text-sm leading-relaxed text-indigo-japan/80">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        </div>
                        {text}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-vermilion mb-6">
                    <XCircle size={16} /> {t('whatNotToDo')}
                  </h3>
                  <ul className="space-y-4">
                    {selectedItem.whatNotToDo.map((text, i) => (
                      <li key={i} className="flex gap-4 text-sm leading-relaxed text-indigo-japan/80">
                        <div className="w-5 h-5 rounded-full bg-vermilion-muted/30 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-vermilion" />
                        </div>
                        {text}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="border-t border-indigo-japan/5 pt-10">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-japan/30 mb-4">{t('whyItMatters')}</h3>
                <p className="text-sm leading-relaxed font-medium text-indigo-japan/70">
                  {selectedItem.whyItMatters}
                </p>
              </section>

              <section>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-japan/30 mb-6">{t('commonMistakes')}</h3>
                <div className="space-y-4">
                  {selectedItem.commonMistakes.map((text, i) => (
                    <div key={i} className="bg-white rounded-2xl p-5 text-sm text-indigo-japan/80 flex gap-4 border border-indigo-japan/5">
                      <AlertCircle size={20} className="shrink-0 text-vermilion/40" />
                      {text}
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-indigo-japan/5 rounded-[2rem] p-8">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-japan/30 mb-4">{t('deepDive')}</h3>
                <p className="text-sm leading-relaxed text-indigo-japan/60 italic">
                  {selectedItem.readMore}
                </p>
              </section>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col relative bg-paper selection:bg-vermilion-muted selection:text-vermilion">
      {renderHeader()}
      
      <main className="flex-1 overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          {renderScreen()}
        </AnimatePresence>
      </main>

      {currentScreen !== 'detail' && currentScreen !== 'search' && (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-paper/80 backdrop-blur-xl border-t border-indigo-japan/5 px-8 py-6 flex justify-around items-center z-40">
          <NavButton active={currentScreen === 'home'} onClick={() => setCurrentScreen('home')} icon={<Home size={22} />} label={t('home')} />
          <NavButton active={currentScreen === 'browse'} onClick={() => setCurrentScreen('browse')} icon={<BookOpen size={22} />} label={t('browse')} />
          <NavButton active={currentScreen === 'settings'} onClick={() => setCurrentScreen('settings')} icon={<Settings size={22} />} label={t('more')} />
        </nav>
      )}
    </div>
  );
}

interface CategoryCardProps {
  key?: React.Key;
  item: EtiquetteItem;
  onClick: () => void;
}

function CategoryCard({ item, onClick }: CategoryCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="bg-white rounded-[2rem] p-6 text-left border border-indigo-japan/5 shadow-sm hover:shadow-md transition-all group relative cursor-pointer"
    >
      <div className="w-12 h-12 rounded-2xl bg-indigo-japan/5 flex items-center justify-center text-indigo-japan mb-6 group-hover:bg-indigo-japan group-hover:text-paper transition-all duration-500">
        <item.icon size={24} />
      </div>
      <div className="flex items-center gap-2 mb-1">
        <h3 className="font-serif italic font-bold text-xl text-indigo-japan">{item.title}</h3>
        {item.isPremium && (
          <div className="flex items-center gap-1 text-vermilion">
            <Sparkles size={12} />
            <span className="text-[8px] font-bold uppercase tracking-widest">Premium</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-1.5">
        <div className={`w-1.5 h-1.5 rounded-full ${item.riskLevel === 'High' ? 'bg-vermilion' : 'bg-indigo-japan/20'}`} />
        <p className="text-[8px] text-indigo-japan/30 font-bold uppercase tracking-widest">{item.riskLevel} Risk</p>
      </div>
    </div>
  );
}

interface ListItemProps {
  key?: React.Key;
  item: EtiquetteItem;
  onClick: () => void;
}

function ListItem({ item, onClick }: ListItemProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div 
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="w-full bg-white rounded-3xl p-5 flex items-center gap-5 border border-indigo-japan/5 text-left hover:bg-indigo-japan/5 transition-all group cursor-pointer shadow-sm hover:shadow-md"
    >
      <div className="w-14 h-14 rounded-2xl bg-indigo-japan/5 flex items-center justify-center text-indigo-japan shrink-0 group-hover:bg-white transition-all duration-500">
        <item.icon size={28} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-serif italic font-bold text-xl leading-tight text-indigo-japan">{item.title}</h3>
          {item.isPremium && (
            <div className="flex items-center gap-1 text-vermilion">
              <Sparkles size={12} />
              <span className="text-[8px] font-bold uppercase tracking-widest">Premium</span>
            </div>
          )}
          {item.riskLevel === 'High' && !item.isPremium && (
            <span className="w-1.5 h-1.5 rounded-full bg-vermilion" />
          )}
        </div>
        <p className="text-xs text-indigo-japan/40 truncate font-medium">{item.quickView}</p>
      </div>
      <div className="flex items-center gap-2">
        <ChevronRight size={20} className="text-indigo-japan/10 group-hover:text-indigo-japan/30 transition-colors" />
      </div>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1.5 transition-all ${active ? 'text-indigo-japan' : 'text-indigo-japan/20'}`}
    >
      <div className={`p-1 transition-all ${active ? 'scale-110' : ''}`}>
        {icon}
      </div>
      <span className="text-[8px] font-bold uppercase tracking-[0.2em]">{label}</span>
      {active && (
        <motion.div 
          layoutId="nav-dot"
          className="w-1 h-1 rounded-full bg-vermilion mt-0.5"
        />
      )}
    </button>
  );
}

function PremiumBenefit({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 bg-white p-5 rounded-3xl border border-indigo-japan/5">
      <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
        <CheckCircle2 size={14} className="text-emerald-500" />
      </div>
      <span className="text-sm font-semibold text-indigo-japan/80">{label}</span>
    </div>
  );
}

function SettingsItem({ icon, label, value, onClick }: { icon: React.ReactNode, label: string, value?: string, onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="w-full px-8 py-5 flex items-center justify-between border-b border-indigo-japan/5 last:border-0 hover:bg-indigo-japan/5 transition-colors"
    >
      <div className="flex items-center gap-5">
        <div className="text-indigo-japan/30">{icon}</div>
        <span className="text-sm font-semibold text-indigo-japan/80">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        {value && <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-japan/30">{value}</span>}
        <ChevronRight size={18} className="text-indigo-japan/10" />
      </div>
    </button>
  );
}
