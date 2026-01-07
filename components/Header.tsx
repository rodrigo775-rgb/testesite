
import React, { useState, useEffect } from 'react';
import { PageId } from '../App';

interface HeaderProps {
  current: PageId;
  onNavigate: (page: PageId) => void;
}

const Header: React.FC<HeaderProps> = ({ current, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: PageId }[] = [
    { label: 'Início', id: 'home' },
    { label: 'Indústria', id: 'produtos' },
    { label: 'Esporte/Surf', id: 'esporte' },
    { label: 'Soluções', id: 'solucoes' },
    { label: 'Sobre', id: 'sobre' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || current !== 'home' ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-zinc-900 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className={`font-bold text-2xl tracking-tighter ${(isScrolled || current !== 'home') ? 'text-zinc-900' : 'text-zinc-900 md:text-white'}`}>
            GRADILCOLOR
          </span>
        </button>
        
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`${(isScrolled || current !== 'home') ? 'text-zinc-600' : 'text-white'} hover:text-blue-600 transition-colors ${current === item.id ? 'text-blue-500' : ''}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contato')}
            className="bg-zinc-900 text-white px-5 py-2.5 rounded hover:bg-zinc-800 transition-all shadow-lg"
          >
            Orçamento
          </button>
        </nav>

        <button className="md:hidden p-2 text-zinc-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
