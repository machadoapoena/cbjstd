
import React from 'react';
import { PRIZES } from '../constants';
import { Trophy, Medal } from 'lucide-react';

const PrizeTable: React.FC = () => {
  return (
    <section id="prizes" className="py-24 bg-neutral-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neutral-300"></div>
          <h2 className="font-oswald text-4xl font-bold text-center uppercase tracking-tight text-neutral-900">
            Tabela de <span className="text-lime-600">Premiação</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-neutral-300"></div>
        </div>
        
        <p className="text-center text-neutral-500 font-bold uppercase text-xs tracking-widest mb-12">
          Válida para todas as categorias (U14, U16 e U18)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRIZES.map((prize, idx) => (
            <div 
              key={idx}
              className="relative group bg-white border border-neutral-200 p-8 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-sm"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 ${prize.color} opacity-20 rotate-45`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {idx === 0 ? (
                  <Trophy className={`mb-4 w-16 h-16 ${prize.color.replace('bg-', 'text-')}`} />
                ) : (
                  <Medal className={`mb-4 w-16 h-16 ${prize.color.replace('bg-', 'text-')}`} />
                )}
                <h3 className="text-neutral-500 font-bold uppercase tracking-widest text-sm mb-2">{prize.position}</h3>
                <p className="text-4xl font-oswald font-bold text-neutral-900">{prize.amount}</p>
              </div>

              <div className={`absolute bottom-0 left-0 h-1.5 transition-all duration-300 group-hover:w-full w-0 ${prize.color}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizeTable;
