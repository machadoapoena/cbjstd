
import React, { useState } from 'react';
import { PROMO_PRICE, REGULAR_PRICE, PROMO_DEADLINE, REGISTRATION_EXTERNAL_URL, PIX_KEY } from '../constants.tsx';
import { Calendar, ExternalLink, Timer, Copy, Check, Users, Landmark } from 'lucide-react';

const Registration: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyPixKey = () => {
    navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="registration" className="py-24 bg-neutral-900 text-white px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight text-white">
            Garanta sua <span className="text-lime-400">Inscrição</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Escolha o lote ideal e realize o pagamento via PIX para garantir sua vaga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
          {/* Lote Antecipado */}
          <div className="relative group p-8 rounded-2xl bg-white/5 border border-lime-400/30 hover:border-lime-400 transition-all duration-500 flex flex-col">
            <div className="absolute top-4 right-4 px-3 py-1 bg-lime-400 text-black text-[10px] font-black uppercase rounded-full animate-pulse z-20">
              Promoção Ativa
            </div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-lime-400/20 flex items-center justify-center text-lime-400">
                <Timer size={24} />
              </div>
              <div>
                <h3 className="font-oswald text-xl font-bold uppercase">Lote Antecipado</h3>
                <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Até {PROMO_DEADLINE}</p>
              </div>
            </div>

            <div className="mb-4 relative z-10">
              <span className="text-xs text-neutral-500 uppercase font-black tracking-widest block mb-1">Valor único</span>
              <span className="text-6xl font-oswald font-bold text-white block">{PROMO_PRICE}</span>
            </div>

            <div className="mt-auto pt-6 border-t border-white/5">
              <p className="text-xs text-lime-400/70 font-bold uppercase tracking-wider">Desconto progressivo por antecipação.</p>
            </div>
          </div>

          {/* Lote Regular */}
          <div className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neutral-400">
                <Calendar size={24} />
              </div>
              <div>
                <h3 className="font-oswald text-xl font-bold uppercase">Lote Regular</h3>
                <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Após {PROMO_DEADLINE}</p>
              </div>
            </div>

            <div className="mb-4">
              <span className="text-xs text-neutral-500 uppercase font-black tracking-widest block mb-1">Valor único</span>
              <span className="text-6xl font-oswald font-bold text-white/50 block">{REGULAR_PRICE}</span>
            </div>

            <div className="mt-auto pt-6 border-t border-white/5">
              <div className="flex items-start gap-3 text-neutral-500">
                <Users size={16} className="shrink-0 mt-0.5" />
                <p className="text-xs font-bold uppercase tracking-wider">Sujeito a disponibilidade de vagas (BNB).</p>
              </div>
            </div>
          </div>

          {/* Pagamento PIX - Card Separado com QR Code atualizado */}
          <div className="relative group p-8 rounded-2xl bg-lime-400 text-black flex flex-col items-center text-center shadow-[0_0_50px_rgba(163,230,53,0.15)]">
            <div className="flex items-center gap-3 mb-6 self-start w-full">
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center text-black">
                <Landmark size={24} />
              </div>
              <div className="text-left">
                <h3 className="font-oswald text-xl font-bold uppercase leading-none">Pagamento PIX</h3>
                <p className="text-black/60 text-[10px] font-black uppercase tracking-widest">Liberação Imediata</p>
              </div>
            </div>

            <div className="bg-white p-2 rounded-xl shadow-xl mb-6">
              <img 
                src="https://cbc.xadrezbrasilia.com/images/qrcode.png" 
                alt="QR Code PIX FBX" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain" 
              />
            </div>

            <div className="w-full mt-auto">
              <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-2">Chave PIX (Copiar)</p>
              <button 
                onClick={copyPixKey} 
                className="w-full flex items-center justify-between gap-2 bg-black/10 hover:bg-black/20 p-3 rounded-lg border border-black/5 transition-all group/btn"
              >
                <span className="font-mono font-bold text-sm truncate">{PIX_KEY}</span>
                {copied ? <Check size={18} className="text-black shrink-0" /> : <Copy size={18} className="shrink-0 opacity-50 group-hover/btn:opacity-100" />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <a href={REGISTRATION_EXTERNAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-lime-400 text-black font-black uppercase text-lg rounded-full hover:bg-white transition-all shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:scale-105 active:scale-95">
            Preencher Formulário de Inscrição
            <ExternalLink size={20} />
          </a>
          <p className="mt-8 text-neutral-500 text-[10px] font-black uppercase tracking-[0.3em]">Obrigatório anexar o comprovante no formulário</p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
