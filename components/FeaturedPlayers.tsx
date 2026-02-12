
import React from 'react';
import { FEATURED_PLAYERS } from '../constants';
import { User } from 'lucide-react';

const FeaturedPlayers: React.FC = () => {
  return (
    <section id="players" className="py-24 bg-white px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-oswald text-4xl font-bold uppercase mb-4 tracking-tight text-neutral-900">
              Jogadores <span className="text-lime-600">Destaque</span>
            </h2>
            <p className="text-neutral-500 max-w-xl">
              As mentes mais brilhantes do tabuleiro confirmadas para esta edição histórica.
            </p>
          </div>
          <button className="px-8 py-3 bg-transparent border-2 border-neutral-200 text-neutral-900 font-bold rounded-sm hover:bg-neutral-900 hover:text-white transition-all">
            VER TODOS INSCRITOS
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PLAYERS.map((player) => (
            <div key={player.id} className="group relative flex flex-col bg-neutral-50 border border-neutral-200 overflow-hidden rounded-lg hover:shadow-lg transition-all">
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={player.image} 
                  alt={player.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-lime-400 text-black font-black px-2 py-1 text-xs rounded-sm shadow-md">
                    {player.title}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/90 to-transparent"></div>
              </div>

              <div className="p-6 relative bg-white">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-oswald text-2xl font-bold text-neutral-900 uppercase leading-tight group-hover:text-lime-600 transition-colors">
                    {player.name}
                  </h3>
                </div>
                
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-neutral-400">
                  <div className="flex items-center gap-1">
                    <span className="text-neutral-800">Rating:</span>
                    <span className="text-lime-600">{player.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-neutral-800">Cat:</span>
                    <span>{player.category}</span>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden opacity-5">
                <User size={120} className="text-neutral-900 -mr-10 -mt-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlayers;
