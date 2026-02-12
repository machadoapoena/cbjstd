
import React from 'react';
import { WINNERS } from '../constants';

const Winners: React.FC = () => {
  return (
    <section id="winners" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl font-bold uppercase mb-4 tracking-tight text-neutral-900">
            Galeria de <span className="text-lime-600">Campeões</span>
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Os heróis que conquistaram o topo em edições anteriores do Checkmate Masters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WINNERS.map((winner, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-xl bg-neutral-100 border border-neutral-200 aspect-square shadow-sm">
              <img 
                src={winner.image} 
                alt={winner.name} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="inline-block px-3 py-1 bg-lime-400 text-black font-black text-xs mb-3 rounded-full">
                  {winner.year}
                </span>
                <h3 className="font-oswald text-2xl font-bold text-white uppercase">{winner.title} {winner.name}</h3>
                <p className="text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Vencedor Invicto
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
