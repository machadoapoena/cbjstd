
import React, { useState } from 'react';
import { PROMO_PRICES, REGULAR_PRICES, PROMO_DEADLINE, REGISTRATION_EXTERNAL_URL, PIX_KEY } from '../constants.tsx';
import { Calendar, ExternalLink, Timer, QrCode, Copy, Check, Users } from 'lucide-react';

const Registration: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyPixKey = () => {
    navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const PriceRow = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
    <div className={`flex justify-between items-center py-2 border-b border-white/5 last:border-0 ${highlight ? 'pt-4' : ''}`}>
      <span className={`text-[10px] uppercase tracking-widest font-bold ${highlight ? 'text-white' : 'text-neutral-500'}`}>{label}</span>
      <span className={`font-oswald font-bold ${highlight ? 'text-3xl text-white' : 'text-xl text-lime-400'}`}>{value}</span>
    </div>
  );

  return (
    <section id="registration" className="py-24 bg-neutral-900 text-white px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight text-white">
            Garanta sua <span className="text-lime-400">Inscrição</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Valores diferenciados por categoria. Escolha o lote e garanta seu lugar na Biblioteca Nacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Lote Antecipado */}
          <div className="relative group p-8 rounded-2xl bg-white/5 border border-lime-400/30 hover:border-lime-400 transition-all duration-500 flex flex-col min-h-[460px]">
            <div className="absolute top-4 right-4 px-3 py-1 bg-lime-400 text-black text-[10px] font-black uppercase rounded-full animate-pulse z-20">
              Promoção Ativa
            </div>
            
            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-lime-400/20 flex items-center justify-center text-lime-400">
                <Timer size={24} />
              </div>
              <div>
                <h3 className="font-oswald text-xl font-bold uppercase">Lote Antecipado</h3>
                <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Até {PROMO_DEADLINE}</p>
              </div>
            </div>

            <div className="space-y-1 mb-8 relative z-10">
              <PriceRow label="Menores de Idade" value={PROMO_PRICES.underage} />
              <PriceRow label="Idosos e Mulheres" value={PROMO_PRICES.senior_women} />
              <PriceRow label="Demais Inscritos" value={PROMO_PRICES.standard} highlight />
            </div>

            <div className="mt-auto relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Chave PIX (CPF/CNPJ)</p>
              <div className="flex items-center gap-2 bg-black/40 p-3 rounded-lg border border-white/10 w-fit">
                <span className="font-mono text-lime-400 font-bold">{PIX_KEY}</span>
                <button onClick={copyPixKey} className="p-1 hover:text-lime-400 transition-colors text-neutral-500">
                  {copied ? <Check size={16} className="text-lime-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 group/qr">
              <div className="bg-white p-2 rounded-lg shadow-2xl relative z-10 transform group-hover/qr:scale-110 transition-transform duration-300">
                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${PIX_KEY}`} alt="QR Code PIX" className="w-20 h-20 md:w-24 md:h-24" />
              </div>
            </div>
          </div>

          {/* Lote Regular */}
          <div className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col min-h-[460px]">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-oswald text-xl font-bold uppercase">Lote Regular</h3>
                <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Após {PROMO_DEADLINE}</p>
              </div>
            </div>

            <div className="space-y-1 mb-8">
              <PriceRow label="Menores de Idade" value={REGULAR_PRICES.underage} />
              <PriceRow label="Idosos e Mulheres" value={REGULAR_PRICES.senior_women} />
              <PriceRow label="Demais Inscritos" value={REGULAR_PRICES.standard} highlight />
            </div>

            <div className="mt-auto pt-6 border-t border-white/5">
              <div className="flex items-start gap-3 text-neutral-500">
                <Users size={16} className="shrink-0 mt-0.5" />
                <p className="text-xs font-bold uppercase tracking-wider">Vagas limitadas conforme capacidade do local.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <a href={REGISTRATION_EXTERNAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-lime-400 text-black font-black uppercase text-lg rounded-full hover:bg-white transition-all shadow-xl">
            Acessar Formulário de Inscrição
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registration;
