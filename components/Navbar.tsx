
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { TOURNAMENT_NAME } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Inscrição', href: '#registration' },
    { name: 'Premiação', href: '#prizes' },
    { name: 'Ganhadores', href: '#winners' },
    { name: 'Cronograma', href: '#schedule' },
    { name: 'Jogadores', href: '#players' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 border-b border-neutral-200 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <Logo size={40} className="text-neutral-900" />
          <span className="font-oswald text-xl font-bold italic tracking-tighter uppercase text-neutral-900 leading-none">
            {TOURNAMENT_NAME.split(' ')[1]} <span className="text-lime-600">DE CATEGORIAS</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-neutral-600 hover:text-lime-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#registration" className="bg-lime-400 text-black font-black px-6 py-2 rounded-sm text-xs uppercase hover:bg-black hover:text-white transition-all inline-block">
            INSCREVA-SE
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-neutral-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-200 transition-all duration-300 ${isOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}`}>
        <div className="flex flex-col p-6 gap-6 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase tracking-widest text-neutral-700 hover:text-lime-600"
            >
              {link.name}
            </a>
          ))}
          <a href="#registration" onClick={() => setIsOpen(false)} className="bg-lime-400 text-black font-black w-full py-4 rounded-sm text-sm uppercase text-center">
            INSCREVA-SE AGORA
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
