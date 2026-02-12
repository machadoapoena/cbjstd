
import React from 'react';
import { Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import { TOURNAMENT_NAME } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16 px-4 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <Logo size={60} className="text-neutral-900" />
          <span className="font-oswald text-2xl font-bold italic tracking-tighter uppercase text-neutral-900 text-center">
            {TOURNAMENT_NAME} <span className="text-lime-600 block">STD JUVENIL</span>
          </span>
        </div>

        <div className="flex gap-6 mb-12">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-lime-400 hover:text-black transition-all">
            <Instagram size={20} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-lime-400 hover:text-black transition-all">
            <Twitter size={20} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-lime-400 hover:text-black transition-all">
            <Youtube size={20} />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-lime-400 hover:text-black transition-all">
            <Facebook size={20} />
          </a>
        </div>

        <div className="text-center">
          <p className="text-neutral-500 text-sm mb-2">© 2024 Federação Brasiliense de Xadrez (FBX). Todos os direitos reservados.</p>
          <p className="text-neutral-400 text-xs font-bold uppercase tracking-widest">Brasília - Distrito Federal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
