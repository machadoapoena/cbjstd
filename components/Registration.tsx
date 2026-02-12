
import React, { useState } from 'react';
import { PROMO_PRICE, REGULAR_PRICE, PROMO_DEADLINE, REGISTRATION_EXTERNAL_URL, PIX_KEY } from '../constants';
import { Calendar, CreditCard, ExternalLink, Timer, QrCode, Copy, Check } from 'lucide-react';

const Registration: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyPixKey = () => {
    navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="registration" className="py-24 bg-neutral-900 text-white px-4 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-400/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">
            Garanta sua <span className="text-lime-400">Inscrição</span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Não fique de fora do maior torneio juvenil de Brasília. Escolha o melhor momento para se inscrever e economize.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Promo Card */}
          <div className="relative group p-8 rounded-2xl bg-white/5 border border-lime-400/30 hover:border-lime-400 transition-all duration-500 flex flex-col min-h-[400px]">
            <div className="absolute top-4 right-4 px-3 py-1 bg-lime-400 text-black text-[10px] font-black uppercase rounded-full animate-pulse z-20">
              Mais Vantajoso
            </div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-lime-400/20 flex items-center justify-center text-lime-400">
                <Timer size={24} />
              </div>
              <div>
                <h3 className="font-oswald text-xl font-bold uppercase">Lote Promocional</h3>
                <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Até {PROMO_DEADLINE}</p>
              </div>
            </div>

            <div className="mb-8 relative z-10">
              <span className="text-5xl font-oswald font-bold text-white leading-none">{PROMO_PRICE}</span>
              <p className="text-neutral-400 mt-2 text-sm">Valor exclusivo para inscrições antecipadas.</p>
            </div>

            <ul className="space-y-3 mb-8 text-sm text-neutral-300 relative z-10">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
                Válido para todas as categorias
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-lime-400"></div>
                Pagamento exclusivo via PIX
              </li>
            </ul>

            <div className="mt-auto relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Chave PIX (CPF/CNPJ)</p>
              <div className="flex items-center gap-2 bg-black/40 p-3 rounded-lg border border-white/10 w-fit">
                <span className="font-mono text-lime-400 font-bold">{PIX_KEY}</span>
                <button 
                  onClick={copyPixKey}
                  className="p-1 hover:text-lime-400 transition-colors text-neutral-500"
                  title="Copiar Chave"
                >
                  {copied ? <Check size={16} className="text-lime-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* QR Code in bottom right */}
            <div className="absolute bottom-6 right-6 group/qr">
              <div className="relative">
                <div className="absolute inset-0 bg-lime-400 blur-lg opacity-0 group-hover/qr:opacity-20 transition-opacity"></div>
                <div className="bg-white p-2 rounded-lg shadow-2xl relative z-10 transform group-hover/qr:scale-110 transition-transform duration-300 cursor-zoom-in">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${PIX_KEY}`} 
                    alt="QR Code PIX" 
                    className="w-20 h-20 md:w-24 md:h-24"
                  />
                </div>
                <div className="absolute -top-6 right-0 text-[8px] font-black text-lime-400 uppercase tracking-widest opacity-0 group-hover/qr:opacity-100 transition-opacity whitespace-nowrap">
                  Escanear para pagar
                </div>
              </div>
            </div>
          </div>

          {/* Regular Card */}
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

            <div className="mb-8">
              <span className="text-5xl font-oswald font-bold text-white/50 leading-none">{REGULAR_PRICE}</span>
              <p className="text-neutral-500 mt-2 text-sm">Valor padrão para inscrições de última hora.</p>
            </div>

            <ul className="space-y-3 mb-8 text-sm text-neutral-500">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
                Sujeito a disponibilidade de vagas
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-700"></div>
                Inscrições encerram no dia do evento
              </li>
            </ul>

            <div className="mt-auto pt-4 border-t border-white/5">
              <p className="text-[10px] font-bold text-neutral-600 uppercase italic">Inscrições sujeitas a lotação máxima da Biblioteca Nacional.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <a 
            href={REGISTRATION_EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-lime-400 text-black font-black uppercase tracking-tighter text-lg rounded-full hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(163,230,53,0.3)]"
          >
            Acessar Formulário de Inscrição
            <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          
          <div className="mt-8 flex items-center gap-6 text-neutral-500 text-xs font-bold uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <QrCode size={14} className="text-lime-400" />
              <span>Pagamento Exclusivo via PIX</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-neutral-700"></div>
            <span>Vagas Limitadas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
