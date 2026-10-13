import React from 'react';
import LogoWordmark from './LogoWordmark';
import { CONTATO } from '../data/produtos';

const NAV = [
  { href: '#3-5kw', label: '3.5kW' },
  { href: '#7-4kw', label: '7.4kW' },
  { href: '#compatibilidade', label: 'Qual Carregador?' },
  { href: '#comparativo', label: 'Comparativo' },
  { href: '#contato', label: 'Contato' },
  { href: '#sobrenos', label: 'Sobre Nós' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl backdrop-saturate-150 border-b border-white/24 shadow-[0_1px_20px_rgba(15,23,42,0.06)]">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-10 h-14 md:h-24 flex items-center justify-between gap-4 md:gap-6">
        <a href="#top" className="flex items-center gap-4 flex-shrink-0 min-w-0">
          <LogoWordmark className="h-7 md:h-10" />
          <span className="hidden sm:block text-xs font-bold tracking-widest text-slate-500 uppercase border-l-2 border-brand/20 pl-4 whitespace-nowrap">
            Distribuidor Oficial · Brasil
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-2">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[15px] font-bold text-slate-700 hover:text-brand hover:bg-brand/5 px-4 py-2.5 rounded-lg transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={CONTATO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-brand text-white text-xs md:text-[15px] font-bold px-3 py-2 md:px-6 md:py-3 rounded-lg hover:bg-brand-dark transition-colors shadow-sm"
        >
          Falar no WhatsApp
        </a>
      </div>

      <div className="md:hidden border-t border-slate-100 overflow-x-auto hide-scrollbar">
        <div className="flex gap-5 px-4 py-2 w-max">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-bold tracking-wide text-slate-700 whitespace-nowrap">
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
