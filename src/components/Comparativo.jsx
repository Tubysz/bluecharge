import React from 'react';
import { PRODUTO_3_5, PRODUTO_7_4, formatBRL } from '../data/produtos';

const specOf = (produto, label) => produto.specs.find((s) => s.label === label)?.value ?? '—';

const LINHAS = [
  { label: 'Preço à vista (PIX)', get: (p) => formatBRL(p.precoPix.valor) },
  { label: 'Parcelado', get: (p) => `Até ${p.mercadoLivre.parcelas}x sem juros no Mercado Livre` },
  { label: 'Potência', get: (p) => (specOf(p, 'Potência') !== '—' ? specOf(p, 'Potência') : specOf(p, 'Potência Máx')) },
  { label: 'Corrente', get: (p) => specOf(p, 'Corrente') },
  { label: 'Conector', get: (p) => specOf(p, 'Conector') },
  { label: 'Cabo', get: (p) => specOf(p, 'Cabo') },
  { label: 'Proteção', get: (p) => (specOf(p, 'Proteção') !== '—' ? specOf(p, 'Proteção') : 'IP65') },
  { label: 'Garantia', get: (p) => p.destaques?.find((d) => d.toLowerCase().includes('garantia')) ?? '12 meses' },
];

export default function Comparativo() {
  return (
    <section id="comparativo" className="bg-white border-t border-slate-200">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <h2 className="font-tech text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Comparativo</h2>
        <p className="text-slate-600 text-lg mb-12 max-w-2xl">
          Ambos operam exclusivamente em rede 220V monofásica. Não requer instalação trifásica — ideal para garagens e condomínios.
        </p>

        <div className="max-w-4xl overflow-x-auto rounded-2xl border-2 border-slate-200">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="text-left p-6 w-1/3 bg-slate-50"></th>
                <th className="p-6 text-left border-l-2 border-slate-200 w-1/3 bg-slate-50">
                  <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">Entrada · Compacto</span>
                  <p className="font-tech font-bold text-3xl text-slate-900 mt-1">3.5kW</p>
                </th>
                <th className="p-6 text-left border-l-2 border-spark/20 w-1/3 bg-spark/5">
                  <span className="text-spark text-xs font-bold tracking-widest uppercase">★ Mais Vendido</span>
                  <p className="font-tech font-bold text-3xl text-slate-900 mt-1">7.4kW</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {LINHAS.map((linha, i) => (
                <tr key={linha.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'}>
                  <td className="p-5 text-slate-500 text-sm font-bold tracking-wide uppercase align-top">{linha.label}</td>
                  <td className="p-5 text-slate-900 text-base font-semibold border-l-2 border-slate-200 align-top">{linha.get(PRODUTO_3_5)}</td>
                  <td className="p-5 text-slate-900 text-base font-semibold border-l-2 border-spark/20 bg-spark/[0.03] align-top">{linha.get(PRODUTO_7_4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
          <div className="border-2 border-slate-200 rounded-xl p-5">
            <p className="text-brand text-xs font-bold tracking-widest uppercase mb-1.5">Rede</p>
            <p className="text-slate-800 text-base font-semibold">220V Monofásico</p>
          </div>
          <div className="border-2 border-slate-200 rounded-xl p-5">
            <p className="text-brand text-xs font-bold tracking-widest uppercase mb-1.5">Tomada</p>
            <p className="text-slate-800 text-base font-semibold">Industrial</p>
          </div>
        </div>
      </div>
    </section>
  );
}
