import React from 'react';

const STATS = [
  {
    valor: '4 anos',
    label: 'De mercado',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    valor: '1000+',
    label: 'Carregadores vendidos',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
  },
  {
    valor: '100%',
    label: 'Produção própria · sem white label',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
];

export default function Sobrenos() {
  return (
    <section id="sobrenos" className="relative">
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="bg-white/50 backdrop-blur-2xl backdrop-saturate-150 border border-slate-400/80 rounded-3xl p-10 lg:p-14 shadow-xl shadow-blue-100/70">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 lg:items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-brand mb-5">
                Sobre Nós
              </span>
              <h2 className="font-tech text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Quem é a BlueCharge do Brasil
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Há 4 anos no mercado, já vendemos mais de mil carregadores portáteis pelo Mercado Livre e canais próprios. Diferente da maioria, não somos white label: nossos produtos vêm de produção própria e importação direta, sem intermediários.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm ${i === 2 ? 'col-span-2' : ''}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={s.icon} />
                    </svg>
                  </div>
                  <p className="font-tech text-2xl lg:text-3xl font-bold text-slate-900">{s.valor}</p>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mt-1.5 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
