import React from 'react';
import LogoWordmark from './LogoWordmark';
import { CONTATO } from '../data/produtos';

export default function Footer() {
  return (
    <footer className="bg-graphite border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <LogoWordmark className="h-8" variant="dark" />
        <p className="text-sm text-slate-400 text-center sm:text-right font-medium">
          © 2026 {CONTATO.distribuidor} — Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
