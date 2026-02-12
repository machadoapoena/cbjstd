
import React from 'react';
import { 
  TOURNAMENT_NAME, 
  TOURNAMENT_EDITION, 
  VENUE, 
  VENUE_DETAILS,
  DATE_RANGE, 
  TOTAL_PRIZE, 
  CHESS_RESULTS_URL,
  DEFAULT_PARTICIPANTS_COUNT,
  DEFAULT_CATEGORY_COUNTS,
  RULES_PDF_URL
} from '../constants';
import { ChevronDown, MapPin, Users, Trophy, ExternalLink, FileText } from 'lucide-react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 bg-chess-pattern bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-neutral-100/20 to-neutral-50 pointer-events-none"></div>
      
      <div className="relative z-10 text-center mb-12">
        <div className="flex flex-col items-center justify-center mb-6">
          <Logo size={120} className="text-neutral-900 mb-4 drop-shadow-lg" />
          <span className="font-oswald text-xl tracking-widest text-neutral-500 font-bold uppercase">Federação Brasiliense de Xadrez</span>
        </div>
        
        <h1 className="font-oswald text-5xl md:text-7xl font-bold italic tracking-tighter text-neutral-900 leading-none">
          {TOURNAMENT_NAME}
          <div className="text-lime-600 block mt-2">{TOURNAMENT_EDITION}</div>
        </h1>
        
        <h2 className="font-oswald text-3xl md:text-5xl font-bold tracking-tight text-neutral-800 mt-4">
          {VENUE}
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-5xl bg-neutral-900 p-1 mb-4 rounded-sm shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white rounded-sm overflow-hidden">
          {/* Total Participants */}
          <div className="flex flex-col items-center justify-center py-8 px-6 border-b md:border-b-0 md:border-r border-neutral-100">
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">Total de Inscritos</span>
            <div className="flex items-center gap-3">
              <Users className="text-lime-600" size={24} />
              <span className="text-5xl font-oswald font-bold text-neutral-900">{DEFAULT_PARTICIPANTS_COUNT}</span>
            </div>
          </div>
          
          {/* Categories Breakdown */}
          <div className="flex flex-col items-center justify-center py-6 px-6 border-b md:border-b-0 md:border-r border-neutral-100 bg-neutral-50/50">
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-4">Inscritos por Categoria</span>
            <div className="flex justify-around w-full">
              {DEFAULT_CATEGORY_COUNTS.map((cat) => (
                <div key={cat.label} className="text-center group">
                  <p className="text-xs font-black text-lime-600 mb-1 group-hover:scale-110 transition-transform">{cat.label}</p>
                  <p className="text-2xl font-oswald font-bold text-neutral-900 leading-none">{cat.count}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Prize Pool */}
          <div className="flex flex-col items-center justify-center py-8 px-6">
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2">Premiação</span>
            <div className="flex items-center gap-3">
              <Trophy className="text-lime-600" size={24} />
              <span className="text-3xl font-oswald font-bold text-neutral-900 uppercase">{TOTAL_PRIZE}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mb-8 flex items-center gap-4">
        <a 
          href={CHESS_RESULTS_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-lime-600 transition-colors"
        >
          <ExternalLink size={10} />
          Ver Lista Completa no Chess-Results.com
        </a>
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl gap-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-lime-600 font-bold tracking-wider mb-1">
              <MapPin size={18} />
              <span className="uppercase text-sm">{VENUE_DETAILS}</span>
            </div>
            <span className="text-neutral-500 font-bold text-sm uppercase">Brasília, DF</span>
          </div>

          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="flex items-center gap-2 text-lime-600 font-bold tracking-wider mb-1">
              <span className="uppercase text-sm">{DATE_RANGE}</span>
            </div>
            <span className="text-neutral-500 font-bold text-sm uppercase tracking-tighter">Primeira Rodada: 22 Fev</span>
          </div>
        </div>

        {/* Highlighted Rules Button */}
        <div className="pt-4">
          <a 
            href={RULES_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-lime-500 hover:text-black transition-all duration-300 shadow-xl hover:shadow-lime-400/20 active:scale-95 border-2 border-neutral-900 hover:border-lime-500"
          >
            <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center text-black group-hover:bg-black group-hover:text-lime-400 transition-colors">
              <FileText size={20} />
            </div>
            <span className="font-oswald text-lg font-bold uppercase tracking-widest">
              Baixar Regulamento <span className="text-xs opacity-50 ml-1">PDF</span>
            </span>
          </a>
        </div>
      </div>

      <div className="mt-16 animate-bounce">
        <ChevronDown className="text-lime-600" size={32} />
      </div>
    </section>
  );
};

export default Hero;
