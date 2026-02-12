
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  return (
    <section className="py-24 bg-white px-4 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Realização */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-neutral-200"></div>
              <h3 className="font-oswald text-xl font-bold uppercase tracking-widest text-neutral-400">Realização</h3>
              <div className="h-px flex-1 bg-neutral-200"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 items-center">
              {PARTNERS.realization.map((p, i) => (
                <div key={i} className="group relative grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
                  <img src={p.logo} alt={p.name} className="h-16 md:h-20 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Apoio */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-neutral-200"></div>
              <h3 className="font-oswald text-xl font-bold uppercase tracking-widest text-neutral-400">Apoio</h3>
              <div className="h-px flex-1 bg-neutral-200"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center">
              {PARTNERS.support.map((p, i) => (
                <div key={i} className="group relative grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110">
                  <img src={p.logo} alt={p.name} className="h-12 md:h-16 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;
