
import React from 'react';
import { SCHEDULE } from '../constants';
import { Clock, CalendarDays } from 'lucide-react';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight text-neutral-900">
            Programação <span className="text-lime-600">Oficial</span>
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">
            Acompanhe o cronograma detalhado e não perca nenhuma rodada da competição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SCHEDULE.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-neutral-50 border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-lime-200"
            >
              {/* Header do Dia */}
              <div className="bg-neutral-900 p-6 flex justify-between items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400 opacity-5 -mr-16 -mt-16 rounded-full"></div>
                
                <div className="relative z-10">
                  <span className="text-lime-400 font-black text-2xl md:text-3xl block leading-none font-oswald uppercase tracking-tighter">
                    {item.day}
                  </span>
                  <span className="text-neutral-400 font-bold uppercase text-xs tracking-[0.2em] mt-1 block">
                    {item.date}
                  </span>
                </div>
                
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-lime-400 relative z-10">
                  <CalendarDays size={24} />
                </div>
              </div>

              {/* Lista de Eventos */}
              <div className="p-6 md:p-8 space-y-4">
                {item.events.map((event, eIdx) => (
                  <div 
                    key={eIdx} 
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-100 transition-all duration-300 hover:translate-x-1 group/item"
                  >
                    <div className="w-10 h-10 rounded-lg bg-lime-50 flex items-center justify-center text-lime-600 shrink-0 group-hover/item:bg-lime-400 group-hover/item:text-black transition-colors">
                      <Clock size={18} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-lime-600 font-black text-sm uppercase tracking-wider">{event.time}</span>
                      </div>
                      <p className="text-neutral-900 font-bold text-base leading-tight">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorativo de Fundo */}
              <div className="absolute bottom-4 right-4 text-neutral-200/20 font-oswald text-8xl font-black pointer-events-none group-hover:text-lime-400/10 transition-colors">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Informação Adicional */}
        <div className="mt-12 p-6 bg-lime-50 border border-lime-100 rounded-xl text-center">
          <p className="text-lime-800 font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-600 animate-pulse"></span>
            Os horários podem sofrer pequenos ajustes conforme o andamento das rodadas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
