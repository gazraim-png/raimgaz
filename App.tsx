
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { UNIVERSITIES, PROFESSIONS, LOGO_URL } from './constants';
import { TRANSLATIONS } from './translations';
import { University, Profession, ViewState, Language, UserProfile, StudentProfile as IStudentProfile } from './types';
import { UniversityDetail } from './components/UniversityDetail';
import { ProfessionDetail } from './components/ProfessionDetail';
import { ComparisonView } from './components/ComparisonView';
import { GuidanceView } from './components/GuidanceView';
import { StudentProfile } from './components/StudentProfile';
import { AIChat, AIChatRef } from './components/AIChat';
import { QuizModal } from './components/QuizModal';
import { LandingPage } from './components/LandingPage';
import { Search, GraduationCap, ArrowRight, LayoutGrid, PlusCircle, CheckCircle, MapPin, ChevronLeft, ChevronRight, Globe, Filter, X, Sparkles, LogOut, User, Megaphone, Phone, Briefcase, Wallet, Heart } from 'lucide-react';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<'guest' | 'google' | 'email' | null>(null);

  const [view, setView] = useState<ViewState>('home');
  const [lang, setLang] = useState<Language>('ru');
  
  // Selection States
  const [selectedUni, setSelectedUni] = useState<University | null>(null);
  const [selectedProfession, setSelectedProfession] = useState<Profession | null>(null);
  
  const [comparisonList, setComparisonList] = useState<string[]>([]);
  const [savedList, setSavedList] = useState<string[]>([]); // Favorites State
  
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  
  // New: Extended Student Profile (Persistent state simulation)
  const [studentProfileData, setStudentProfileData] = useState<Partial<IStudentProfile>>({});

  // Ref for AI Chat
  const aiChatRef = useRef<AIChatRef>(null);
  
  // Filters state
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLangFilter, setSelectedLangFilter] = useState('All');
  const [selectedProfCategory, setSelectedProfCategory] = useState('All'); // For professions
  
  // View mode for Saved items (internal switch)
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const itemsPerPage = 7;
  const t = TRANSLATIONS[lang];

  // Scroll to top whenever view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  // Auth Handler
  const handleLogin = (method: 'google' | 'guest' | 'email', data?: { name: string; email: string }) => {
    setUserType(method);
    setIsAuthenticated(true);
    
    // Determine display name based on login method
    let displayName = 'Гость';
    if (method === 'google') displayName = 'Алихан';
    if (method === 'email' && data?.name) displayName = data.name;

    // Initialize profile with name upon login
    setStudentProfileData(prev => ({
      ...prev,
      name: displayName,
    }));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    setView('home');
    setUserProfile(null);
    setStudentProfileData({});
  };

  // --- Filtering Logic ---
  const cities = useMemo(() => ['All', ...Array.from(new Set(UNIVERSITIES.map(u => u.location))).sort()], []);
  const categories = useMemo(() => ['All', 'National', 'State', 'Private', 'Medical'], []);
  const profCategories = useMemo(() => ['All', ...Array.from(new Set(PROFESSIONS.map(p => p.category))).sort()], []);

  const suggestions = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];
    const term = searchTerm.toLowerCase();
    
    // Universities & Programs
    const uniMatches = UNIVERSITIES
      .filter(u => u.name.toLowerCase().includes(term) || u.shortName.toLowerCase().includes(term))
      .map(u => ({ type: 'university', text: u.name, subtext: u.location }));
    
    const progMatches = new Set<string>();
    UNIVERSITIES.forEach(u => {
      u.programs.forEach(p => {
        if (p.name.toLowerCase().includes(term)) progMatches.add(p.name);
      });
    });
    
    // Professions
    const profMatches = PROFESSIONS
      .filter(p => p.title.toLowerCase().includes(term))
      .map(p => ({ type: 'profession', text: p.title, subtext: t.nav_professions }));

    const progMatchesArray = Array.from(progMatches).map(p => ({ 
      type: 'program', text: p, subtext: t.nav_programs
    }));
    
    return [...uniMatches, ...profMatches, ...progMatchesArray].slice(0, 6);
  }, [searchTerm, t]);

  // Filtered Lists
  const filteredUniversities = useMemo(() => {
     return UNIVERSITIES.filter(u => {
        // If showing saved only
        if (showSavedOnly && !savedList.includes(u.id)) return false;

        const term = searchTerm.toLowerCase();
        const matchesName = u.name.toLowerCase().includes(term) || u.shortName.toLowerCase().includes(term);
        const matchesProgram = u.programs.some(p => p.name.toLowerCase().includes(term));
        const isSearchMatch = term === '' || matchesName || matchesProgram;
        const matchesCity = selectedCity === 'All' || u.location === selectedCity;
        const matchesCategory = selectedCategory === 'All' || 
                                (selectedCategory === 'Medical' && u.category === 'Medical') ||
                                (selectedCategory === 'National' && u.category === 'National') ||
                                (selectedCategory === 'State' && u.category === 'State') ||
                                (selectedCategory === 'Private' && u.category === 'Private');
        const matchesLangFilter = selectedLangFilter === 'All' || u.programs.some(p => {
           const l = p.language.toLowerCase();
           if (selectedLangFilter === 'en') return l.includes('english') || l.includes('en');
           if (selectedLangFilter === 'ru') return l.includes('ru') || l.includes('рус');
           if (selectedLangFilter === 'kz') return l.includes('kz') || l.includes('каз');
           return false;
        });
        return isSearchMatch && matchesCity && matchesCategory && matchesLangFilter;
      });
  }, [searchTerm, selectedCity, selectedCategory, selectedLangFilter, showSavedOnly, savedList]);

  const filteredProfessions = useMemo(() => {
      return PROFESSIONS.filter(p => {
          const term = searchTerm.toLowerCase();
          const matchesTitle = p.title.toLowerCase().includes(term);
          const matchesCategory = selectedProfCategory === 'All' || p.category === selectedProfCategory;
          return (term === '' || matchesTitle) && matchesCategory;
      });
  }, [searchTerm, selectedProfCategory]);

  // Pagination Logic depends on view
  const activeList = view === 'professions' ? filteredProfessions : filteredUniversities;
  const totalPages = Math.ceil(activeList.length / itemsPerPage);
  
  // Slicing
  const currentItems = activeList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const comparisonUniversities = UNIVERSITIES.filter(u => comparisonList.includes(u.id));

  // Handlers
  const handleUniversityClick = (uni: University) => { setSelectedUni(uni); setView('details'); };
  const handleProfessionClick = (prof: Profession) => { setSelectedProfession(prof); setView('profession-details'); };
  
  const toggleComparison = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setComparisonList(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const toggleSaved = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setSavedList(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  const handleBack = () => { 
      if (view === 'profession-details') setView('professions');
      else {
        setView('home'); 
        setShowSavedOnly(false);
      }
      setSelectedUni(null);
      setSelectedProfession(null); 
  };
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { setSearchTerm(e.target.value); setCurrentPage(1); setShowSuggestions(true); };
  
  const handleSuggestionClick = (text: string, type: string) => { 
      setSearchTerm(text); 
      setShowSuggestions(false); 
      setCurrentPage(1); 
      if (type === 'profession') setView('professions');
      else setView('home');
  };
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) catalogElement.scrollIntoView({ behavior: 'smooth' });
  };
  const handleQuizSubmit = (profile: UserProfile) => { 
      setUserProfile(profile); 
      // Save quiz results to the persistent student profile
      setStudentProfileData(prev => ({
          ...prev,
          score: profile.score,
          subjectPair: profile.subjectPair,
          interests: profile.interests,
          city: profile.city
      }));
      setView('guidance'); 
  };

  const formatMoney = (amount: number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'KZT', maximumSignificantDigits: 3 }).format(amount);

  // Fallback image URL
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800";

  // --- RENDER ---

  if (!isAuthenticated) {
    return <LandingPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20 font-sans animate-fade-in">
      {/* Navbar - Full Width */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setView('home'); setShowSavedOnly(false); }}>
            <img 
               src={LOGO_URL} 
               alt="Logo" 
               className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-gray-900 hidden sm:inline">
              DataHub <span className="text-brand-600 font-normal">{t.title}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center bg-gray-100 rounded-lg p-1 text-xs font-medium">
                {(['ru', 'kz', 'en'] as Language[]).map(l => (
                   <button 
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1 rounded-md transition-all ${lang === l ? 'bg-white shadow text-brand-700' : 'text-gray-500 hover:text-gray-900'}`}
                   >
                     {l.toUpperCase()}
                   </button>
                ))}
              </div>

             {/* Saved Toggle Button */}
             <button 
                onClick={() => {
                   if (showSavedOnly) {
                      setShowSavedOnly(false);
                      setView('home');
                   } else {
                      setShowSavedOnly(true);
                      setView('home');
                   }
                }}
                className={`text-sm px-3 py-2 rounded-full font-medium flex items-center gap-2 transition-colors ${
                  showSavedOnly 
                    ? 'bg-red-50 text-red-600 border border-red-100' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="Избранное"
             >
                <Heart className={`w-4 h-4 ${showSavedOnly || savedList.length > 0 ? 'fill-current' : ''}`} />
                <span className="hidden sm:inline">{t.favorites}</span>
                {savedList.length > 0 && (
                   <span className="bg-white/50 px-1.5 rounded-full text-xs ml-0.5">{savedList.length}</span>
                )}
             </button>

             {comparisonList.length > 0 && (
               <button 
                onClick={() => setView('compare')}
                className="text-sm bg-brand-50 text-brand-700 px-3 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-brand-100 transition-colors"
               >
                 <PlusCircle className="w-4 h-4" />
                 <span className="hidden sm:inline">{t.compare_btn}</span>
                 <span className="bg-brand-200 px-1.5 rounded-full text-xs">{comparisonList.length}</span>
               </button>
             )}

             <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block"></div>
             
             {/* User Profile / Logout */}
             <div className="flex items-center gap-2 sm:gap-3">
                <div className="hidden md:flex flex-col items-end cursor-pointer" onClick={() => setView('profile')}>
                    <span className="text-sm font-bold text-gray-800 leading-none">
                        {studentProfileData.name || (userType === 'google' ? 'Алихан' : 'Гость')}
                    </span>
                    <span className="text-xs text-brand-600 hover:underline">
                        Профиль
                    </span>
                </div>
                <button 
                    onClick={() => setView('profile')}
                    className="w-9 h-9 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 hover:bg-brand-200 transition-colors"
                >
                    <User className="w-5 h-5" />
                </button>
                <button 
                    onClick={handleLogout}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Выйти"
                >
                    <LogOut className="w-5 h-5" />
                </button>
             </div>
          </div>
        </div>
      </nav>

      {/* Main Container - Full Width Layout */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT SIDEBAR (ADVERTISEMENT) - Fixed Width */}
          <aside className="hidden lg:block w-72 flex-shrink-0 sticky top-24 h-fit space-y-6">
             {/* Tab Navigation (Sidebar for Desktop) */}
             <div className="bg-white rounded-xl border border-gray-200 p-2 shadow-sm space-y-1">
                 <button 
                   onClick={() => { setView('home'); setShowSavedOnly(false); setCurrentPage(1); }}
                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-colors ${!showSavedOnly && (view === 'home' || view === 'details') ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-50'}`}
                 >
                    <GraduationCap className="w-5 h-5" />
                    {t.nav_unis}
                 </button>
                 <button 
                   onClick={() => { setView('professions'); setShowSavedOnly(false); setCurrentPage(1); }}
                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-colors ${view === 'professions' || view === 'profession-details' ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-50'}`}
                 >
                    <Briefcase className="w-5 h-5" />
                    {t.nav_professions}
                 </button>
                 <button 
                   onClick={() => { setView('profile'); }}
                   className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 font-medium transition-colors ${view === 'profile' ? 'bg-brand-50 text-brand-700' : 'text-gray-600 hover:bg-gray-50'}`}
                 >
                    <User className="w-5 h-5" />
                    {t.nav_profile}
                 </button>
             </div>

             <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-2 right-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-1.5 rounded bg-white">
                    {t.ad_title}
                </div>
                <div className="bg-white p-4 rounded-full mb-3 shadow-sm group-hover:scale-110 transition-transform text-brand-600">
                    <Megaphone className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{t.ad_placeholder}</h4>
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">{t.ad_desc}</p>
                <button className="text-sm font-medium bg-white text-brand-600 border border-brand-200 px-4 py-2 rounded-lg hover:bg-brand-50 transition-colors shadow-sm">
                    {t.ad_btn}
                </button>
             </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="flex-1 min-w-0 max-w-[1600px]">
            {(view === 'home' || view === 'professions') && (
              <>
                {/* Hero & Search Section */}
                <div className="text-center mb-10 animate-fade-in-down">
                  {showSavedOnly ? (
                      <>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                           <Heart className="w-8 h-8 text-red-500 fill-current" /> {t.favorites_title}
                        </h1>
                        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">{t.favorites_desc}</p>
                      </>
                  ) : (
                      <>
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {t.hero_title}
                        </h1>
                        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
                            {t.hero_desc}
                        </p>
                         {/* Quiz Button */}
                        <div className="mb-8">
                            <button 
                                onClick={() => setIsQuizOpen(true)}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-green-500/30 hover:-translate-y-0.5 hover:shadow-green-500/40 transition-all"
                            >
                                <Sparkles className="w-5 h-5 text-yellow-200" />
                                {t.btn_quiz_take}
                            </button>
                        </div>
                      </>
                  )}

                  
                  <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 relative z-20">
                    {/* Search */}
                    <div className="flex-grow-[2] relative">
                        <input 
                        type="text" 
                        placeholder={t.search_placeholder} 
                        className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        value={searchTerm}
                        onChange={handleSearch}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        
                        {searchTerm && (
                            <button 
                                onClick={() => { setSearchTerm(''); setCurrentPage(1); }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}

                        {/* Suggestions Dropdown */}
                        {showSuggestions && suggestions.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden text-left animate-fade-in z-50">
                            {suggestions.map((s, idx) => (
                            <div 
                                key={idx}
                                onClick={() => handleSuggestionClick(s.text, s.type)}
                                className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-3 transition-colors border-b border-gray-50 last:border-0"
                            >
                                <div className="bg-gray-100 p-2 rounded-lg text-gray-500">
                                {s.type === 'university' ? <LayoutGrid className="w-4 h-4" /> : 
                                 s.type === 'profession' ? <Briefcase className="w-4 h-4" /> : 
                                 <GraduationCap className="w-4 h-4" />}
                                </div>
                                <div>
                                <div className="text-gray-900 font-medium text-sm">{s.text}</div>
                                <div className="text-xs text-gray-500">{s.subtext}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                        )}
                    </div>

                    {/* Filters: DYNAMIC based on view */}
                    {view === 'home' && !showSavedOnly ? (
                      <div className="flex flex-col sm:flex-row gap-2 flex-grow-[1]">
                          <select 
                              value={selectedCity}
                              onChange={(e) => { setSelectedCity(e.target.value); setCurrentPage(1); }}
                              className="px-3 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-brand-500 outline-none cursor-pointer text-sm w-full"
                          >
                              <option value="All">{t.filter_all_cities}</option>
                              {cities.filter(c => c !== 'All').map(c => (
                                  <option key={c} value={c}>{c}</option>
                              ))}
                          </select>
                          
                          <select 
                              value={selectedCategory}
                              onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                              className="px-3 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-brand-500 outline-none cursor-pointer text-sm w-full"
                          >
                              <option value="All">{t.filter_all_categories}</option>
                              {categories.filter(c => c !== 'All').map(c => (
                                  <option key={c} value={c}>{t[`cat_${c}` as keyof typeof t]}</option>
                              ))}
                          </select>

                          <select 
                              value={selectedLangFilter}
                              onChange={(e) => { setSelectedLangFilter(e.target.value); setCurrentPage(1); }}
                              className="px-3 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-brand-500 outline-none cursor-pointer text-sm w-full"
                          >
                              <option value="All">{t.filter_all_languages}</option>
                              <option value="kz">{t.filter_lang_kz}</option>
                              <option value="ru">{t.filter_lang_ru}</option>
                              <option value="en">{t.filter_lang_en}</option>
                          </select>
                      </div>
                    ) : (view === 'professions' ? (
                      /* Professions Filters */
                       <div className="flex flex-col sm:flex-row gap-2 flex-grow-[0.5]">
                          <select 
                              value={selectedProfCategory}
                              onChange={(e) => { setSelectedProfCategory(e.target.value); setCurrentPage(1); }}
                              className="px-3 py-3 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-brand-500 outline-none cursor-pointer text-sm w-full"
                          >
                              <option value="All">{t.filter_all_categories}</option>
                              {profCategories.filter(c => c !== 'All').map(c => (
                                  <option key={c} value={c}>{c}</option>
                              ))}
                          </select>
                       </div>
                    ) : null)}
                  </div>
                </div>

                {/* --- CATALOG LIST --- */}
                <div id="catalog" className="mb-8">
                  {activeList.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-xl border border-gray-100">
                      <div className="text-gray-400 mb-2">
                        {showSavedOnly ? <Heart className="w-12 h-12 mx-auto opacity-20" /> : <Search className="w-12 h-12 mx-auto opacity-20" />}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">{showSavedOnly ? t.favorites_empty : t.not_found}</h3>
                      {showSavedOnly && (
                         <button onClick={() => setShowSavedOnly(false)} className="mt-4 text-brand-600 font-medium hover:underline">
                            {t.back_to_list}
                         </button>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {/* UNIVERSITIES LIST */}
                      {view === 'home' && currentItems.map(item => {
                        const uni = item as University;
                        const isSaved = savedList.includes(uni.id);
                        
                        return (
                          <div 
                            key={uni.id} 
                            onClick={() => handleUniversityClick(uni)}
                            className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all cursor-pointer group flex flex-col md:flex-row gap-6 relative"
                          >
                            {/* Favorite Button (Absolute) */}
                            <button 
                                onClick={(e) => toggleSaved(e, uni.id)}
                                className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-all ${isSaved ? 'bg-red-50 text-red-500' : 'bg-white/80 text-gray-400 hover:text-red-400'} shadow-sm`}
                            >
                                <Heart className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
                            </button>

                            {/* University Image */}
                            <div className="w-full md:w-48 h-48 md:h-auto shrink-0 relative rounded-xl overflow-hidden bg-gray-100 border border-gray-100">
                              <img 
                                src={uni.image} 
                                alt={uni.name}
                                onError={(e) => {
                                  e.currentTarget.src = FALLBACK_IMAGE;
                                }}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <div className="flex-1 py-1">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2 pr-10">
                                <h3 className="font-bold text-xl text-gray-900 group-hover:text-brand-600 transition-colors">{uni.name}</h3>
                                <div className="flex gap-2">
                                  <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded text-gray-600">{t.ranking}: #{uni.ranking}</span>
                                  {uni.category && (
                                      <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2 py-1 rounded">
                                          {t[`cat_${uni.category}` as keyof typeof t]}
                                      </span>
                                  )}
                                </div>
                              </div>
                              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{uni.description}</p>
                              
                              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
                                <span className="flex items-center gap-1.5">
                                  <MapPin className="w-4 h-4 text-gray-400" /> {uni.location}
                                </span>
                                <span className="flex items-center gap-1.5">
                                  <GraduationCap className="w-4 h-4 text-gray-400" /> {uni.programs.length} {t.programs_count}
                                </span>
                                <span className="text-green-600 font-medium">
                                  {uni.tuitionAvg}
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex md:flex-col items-center justify-between md:justify-center gap-3 w-full md:w-auto border-t md:border-t-0 border-gray-100 pt-4 md:pt-0 pl-0 md:pl-6 md:border-l md:border-gray-100">
                              <button 
                                  onClick={(e) => toggleComparison(e, uni.id)}
                                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm w-full md:w-32 transition-all border ${
                                      comparisonList.includes(uni.id) 
                                      ? 'bg-brand-50 border-brand-200 text-brand-700 font-medium' 
                                      : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50 hover:border-gray-300'
                                  }`}
                                >
                                  {comparisonList.includes(uni.id) ? (
                                      <>
                                          <CheckCircle className="w-4 h-4" /> 
                                          <span>{t.add_to_compare}</span>
                                      </>
                                  ) : (
                                      <>
                                          <PlusCircle className="w-4 h-4" />
                                          <span>{t.compare_btn}</span>
                                      </>
                                  )}
                              </button>
                              
                              <button className="flex items-center justify-center gap-1 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 w-full md:w-32 py-2 rounded-lg transition-colors">
                                  {t.details} <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}

                      {/* PROFESSIONS LIST */}
                      {view === 'professions' && currentItems.map(item => {
                         const prof = item as Profession;
                         return (
                            <div 
                              key={prof.id} 
                              onClick={() => handleProfessionClick(prof)}
                              className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all cursor-pointer group flex flex-col md:flex-row gap-6 items-start"
                            >
                               <div className="flex-1">
                                  <div className="flex items-center gap-3 mb-2">
                                     <h3 className="font-bold text-xl text-gray-900 group-hover:text-brand-600 transition-colors">{prof.title}</h3>
                                     <span className="text-xs font-semibold bg-purple-50 text-purple-700 px-2 py-1 rounded">
                                        {prof.category}
                                     </span>
                                  </div>
                                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{prof.description}</p>
                                  
                                  <div className="flex flex-wrap items-center gap-6 text-sm">
                                      <div className="flex items-center gap-2 text-emerald-700 font-medium bg-emerald-50 px-3 py-1 rounded-lg">
                                         <Wallet className="w-4 h-4" /> {formatMoney(prof.salary.avg)}
                                      </div>
                                      <div className="flex items-center gap-2 text-gray-500">
                                         <Briefcase className="w-4 h-4" /> {t.prof_demand}: {t[`prof_${prof.demand.toLowerCase()}` as keyof typeof t]}
                                      </div>
                                  </div>
                               </div>

                               <div className="flex md:flex-col items-center justify-center w-full md:w-auto mt-auto md:mt-0">
                                   <button className="flex items-center justify-center gap-1 text-sm font-medium text-brand-600 bg-brand-50 hover:bg-brand-100 border border-brand-200 w-full md:w-32 py-2.5 rounded-lg transition-colors">
                                      {t.details} <ChevronRight className="w-4 h-4" />
                                   </button>
                               </div>
                            </div>
                         );
                      })}

                    </div>
                  )}

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-8">
                      <button 
                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-gray-600"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`w-10 h-10 rounded-lg border font-medium transition-colors ${
                            currentPage === page
                              ? 'bg-brand-600 border-brand-600 text-white shadow-sm'
                              : 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          {page}
                        </button>
                      ))}

                      <button 
                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                        className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed bg-white text-gray-600"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* DETAILS VIEWS */}
            {view === 'details' && selectedUni && (
              <UniversityDetail 
                university={selectedUni} 
                onBack={handleBack} 
                isSaved={savedList.includes(selectedUni.id)}
                onToggleSave={() => {
                   const id = selectedUni.id;
                   setSavedList(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
                }}
              />
            )}
            
            {view === 'profession-details' && selectedProfession && (
              <ProfessionDetail 
                profession={selectedProfession} 
                onBack={handleBack} 
                onUniClick={handleUniversityClick}
                lang={lang}
              />
            )}

            {view === 'compare' && (
              <ComparisonView universities={comparisonUniversities} onBack={() => setView('home')} lang={lang} />
            )}

            {view === 'guidance' && userProfile && (
              <GuidanceView 
                profile={userProfile} 
                onBack={() => setView('home')} 
                onUniClick={handleUniversityClick}
                lang={lang}
              />
            )}

            {/* NEW: Student Profile View */}
            {view === 'profile' && (
              <StudentProfile
                 initialProfile={studentProfileData}
                 onBack={handleBack}
                 lang={lang}
              />
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 DataHub {t.title}.</p>
        </div>
      </footer>

      {/* Quiz Modal */}
      <QuizModal 
        isOpen={isQuizOpen} 
        onClose={() => setIsQuizOpen(false)} 
        onSubmit={handleQuizSubmit} 
        lang={lang}
      />

      {/* AI Assistant - Only show on home, details, compare */}
      {view !== 'guidance' && view !== 'profile' && <AIChat ref={aiChatRef} />}
    </div>
  );
}
