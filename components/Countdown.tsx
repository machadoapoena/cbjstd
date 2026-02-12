
import React, { useState, useEffect } from 'react';
import { TOURNAMENT_START_DATE } from '../constants';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const target = new Date(TOURNAMENT_START_DATE).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-20 md:w-28 h-20 md:h-28 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-2 relative overflow-hidden group">
        <div className="absolute inset-0 bg-lime-400 opacity-0 group-hover:opacity-5 transition-opacity"></div>
        <span className="font-oswald text-4xl md:text-6xl font-black text-lime-400">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">{label}</span>
    </div>
  );

  return (
    <section className="bg-neutral-900 py-16 relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-lime-400 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <p className="text-lime-400 font-black uppercase text-xs tracking-[0.3em] mb-2">A Batalha Começa Em</p>
          <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-tighter">Contagem Regressiva</h3>
        </div>

        <div className="flex justify-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Dias" />
          <TimeUnit value={timeLeft.hours} label="Horas" />
          <TimeUnit value={timeLeft.minutes} label="Minutos" />
          <TimeUnit value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
