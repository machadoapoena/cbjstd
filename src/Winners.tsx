
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { WINNERS } from './constants';

const Winners: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.offsetWidth * 0.8;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="winners" className="py-24 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl font-bold uppercase mb-4 tracking-tight text-neutral-900">
            Galeria de <span className="text-lime-600">Campeões</span>
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Os heróis que conquistaram o topo em edições anteriores.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-[60%] -translate-y-1/2 left-0 z-20 -ml-2 md:-ml-6">
          <button 
            onClick={() => scroll('left')}
            className="p-3 bg-white border border-neutral-200 rounded-full shadow-xl hover:bg-lime-400 hover:border-lime-400 transition-all text-neutral-900 cursor-pointer active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute top-[60%] -translate-y-1/2 right-0 z-20 -mr-2 md:-mr-6">
          <button 
            onClick={() => scroll('right')}
            className="p-3 bg-white border border-neutral-200 rounded-full shadow-xl hover:bg-lime-400 hover:border-lime-400 transition-all text-neutral-900 cursor-pointer active:scale-95"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {WINNERS.map((winner, idx) => (
            <div 
              key={idx} 
              className="flex-none w-[280px] md:w-[350px] snap-center group relative overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200 aspect-square shadow-sm"
            >
              <img 
                src={winner.image} 
                alt={winner.name} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-lime-400 text-black font-black text-xs mb-3 rounded-full">
                  {winner.year}
                </span>
                <h3 className="font-oswald text-2xl font-bold text-white uppercase">{winner.title} {winner.name}</h3>
                <p className="text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {winner.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Winners;
