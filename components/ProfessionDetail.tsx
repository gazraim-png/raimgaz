
import React from 'react';
import { Profession, University } from '../types';
import { UNIVERSITIES } from '../constants';
import { ArrowLeft, Briefcase, TrendingUp, CheckCircle, GraduationCap, MapPin, ChevronRight, DollarSign, Wallet } from 'lucide-react';
import { TRANSLATIONS } from '../translations';

interface ProfessionDetailProps {
  profession: Profession;
  onBack: () => void;
  onUniClick: (uni: University) => void;
  lang?: 'ru' | 'kz' | 'en';
}

export const ProfessionDetail: React.FC<ProfessionDetailProps> = ({ profession, onBack, onUniClick, lang = 'ru' }) => {
  const t = TRANSLATIONS[lang];

  // Find universities that match the profession keywords
  const matchedUniversities = UNIVERSITIES.filter(uni => 
    uni.programs.some(prog => 
      profession.programKeywords.some(keyword => 
        prog.name.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  );

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'KZT', maximumSignificantDigits: 3 }).format(amount);
  };

  const demandColor = {
    High: 'text-green-600 bg-green-50 border-green-100',
    Medium: 'text-yellow-600 bg-yellow-50 border-yellow-100',
    Low: 'text-red-600 bg-red-50 border-red-100'
  };

  const demandText = {
    High: t.prof_high,
    Medium: t.prof_medium,
    Low: t.prof_low
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in pb-10">
       {/* Header */}
       <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 relative overflow-hidden">
          <button 
            onClick={onBack}
            className="absolute top-6 left-6 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-2 rounded-full transition-all z-20"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <div className="relative z-10 mt-6">
             <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm">
                {profession.category}
             </div>
             <h1 className="text-3xl md:text-4xl font-bold mb-4">{profession.title}</h1>
             <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">{profession.description}</p>
          </div>

          <Briefcase className="absolute right-[-20px] bottom-[-40px] w-64 h-64 text-white opacity-5" />
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
             {/* Key Stats Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl">
                   <div className="flex items-center gap-2 mb-2 text-emerald-800 font-semibold">
                      <Wallet className="w-5 h-5" /> {t.prof_salary_avg}
                   </div>
                   <div className="text-2xl font-bold text-gray-900">{formatMoney(profession.salary.avg)}</div>
                   <div className="text-sm text-gray-500 mt-1">
                      {formatMoney(profession.salary.min)} — {formatMoney(profession.salary.max)}
                   </div>
                </div>

                <div className={`p-5 rounded-2xl border ${demandColor[profession.demand]}`}>
                   <div className="flex items-center gap-2 mb-2 font-semibold opacity-80">
                      <TrendingUp className="w-5 h-5" /> {t.prof_demand}
                   </div>
                   <div className="text-2xl font-bold">{demandText[profession.demand]}</div>
                   <div className="text-sm opacity-70 mt-1">На рынке труда РК</div>
                </div>
             </div>

             {/* Skills & Tasks */}
             <div className="grid md:grid-cols-2 gap-8">
                <div>
                   <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-brand-600" /> {t.prof_tasks}
                   </h3>
                   <ul className="space-y-3">
                      {profession.tasks.map((task, idx) => (
                         <li key={idx} className="flex gap-3 text-gray-700 bg-gray-50 p-3 rounded-xl">
                            <span className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2 shrink-0" />
                            <span className="text-sm">{task}</span>
                         </li>
                      ))}
                   </ul>
                </div>
                <div>
                   <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-purple-600" /> {t.prof_skills}
                   </h3>
                   <div className="flex flex-wrap gap-2">
                      {profession.skills.map((skill, idx) => (
                         <span key={idx} className="px-3 py-1.5 bg-purple-50 text-purple-700 font-medium text-sm rounded-lg border border-purple-100">
                            {skill}
                         </span>
                      ))}
                   </div>
                </div>
             </div>
          </div>

          {/* Sidebar: Where to Study */}
          <div className="lg:col-span-1">
             <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 sticky top-24">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                   <GraduationCap className="w-5 h-5 text-brand-600" /> {t.prof_where_to_study}
                </h3>
                
                {matchedUniversities.length > 0 ? (
                   <div className="space-y-3">
                      {matchedUniversities.map(uni => (
                         <div 
                           key={uni.id} 
                           onClick={() => onUniClick(uni)}
                           className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-300 transition-all cursor-pointer group"
                         >
                            <div className="font-bold text-gray-800 text-sm group-hover:text-brand-600 transition-colors">
                               {uni.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                               <MapPin className="w-3 h-3" /> {uni.location}
                            </div>
                            <div className="mt-2 flex items-center gap-1 text-xs font-medium text-brand-600">
                               Подробнее <ChevronRight className="w-3 h-3" />
                            </div>
                         </div>
                      ))}
                   </div>
                ) : (
                   <div className="text-center py-8 text-gray-500 text-sm">
                      Вузы с подходящими программами не найдены в нашей базе.
                   </div>
                )}
             </div>
          </div>
       </div>
    </div>
  );
};
