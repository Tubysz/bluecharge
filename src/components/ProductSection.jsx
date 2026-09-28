import React, { useState } from 'react';
import ProductImage from './ProductImage';
import { formatBRL, linkWhatsapp } from '../data/produtos';

export default function ProductSection({ produto, id, reverse = false, tint = false, featured = false, topo = true }) {
  const [fotoAtiva, setFotoAtiva] = useState(0);
  const temGaleria = produto.imagens.length > 1;

  const imagem = (
    <div>
      <div className="aspect-square lg:aspect-[4/5] rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-lg shadow-slate-200/40">
        <ProductImage src={produto.imagens[fotoAtiva]} alt={produto.nome} label="Foto em breve" className="w-full h-full" />
      </div>
      {temGaleria && (
        <div className="flex gap-3 mt-4">
          {produto.imagens.map((src, i) => (
            <button
              key={src}
              onClick={() => setFotoAtiva(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors flex-shrink-0 ${i === fotoAtiva ? 'border-brand' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <ProductImage src={src} alt={`${produto.nome} - foto ${i + 1}`} label={`${i + 1}`} className="w-full h-full rounded-none" />
            </button>
          ))}
        </div>
      )}
    </div>
  );

  const info = (
    <div>
      {produto.badge && (
        <span className={`inline-block text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-5 ${featured ? 'bg-spark/10 text-spark' : 'bg-brand/10 text-brand'}`}>
          {produto.badge}
        </span>
      )}
      <h2 className="font-tech text-5xl lg:text-6xl font-bold text-slate-900 mb-3">{produto.id}</h2>
      <p className="text-slate-600 text-base font-semibold mb-9">{produto.nome}</p>

      <div className="grid grid-cols-2 gap-4 mb-6 max-w-md">
        <a
          href={produto.mercadoLivre.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border-2 border-slate-200 p-5 hover:border-brand transition-colors"
        >
          <p className="text-xs font-bold tracking-widest uppercase text-slate-500 mb-1.5">Quer parcelar?</p>
          <p className="text-xl font-bold text-slate-900 group-hover:text-brand transition-colors">Até {produto.mercadoLivre.parcelas}x sem juros</p>
          <p className="text-sm text-slate-500 mt-1 inline-flex items-center gap-1">
            Compre no Mercado Livre
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </p>
        </a>
        <div className="rounded-xl bg-brand p-5 shadow-lg shadow-brand/20">
          <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-1.5">À vista no PIX</p>
          <p className="text-xl font-bold text-white">{formatBRL(produto.precoPix.valor)}</p>
          <p className="text-sm text-white/90 mt-1 font-semibold">economize {formatBRL(produto.precoPix.economia)}</p>
        </div>
      </div>

      <p className="text-sm font-bold tracking-wide uppercase text-slate-500 mb-9">{produto.status}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 max-w-lg">
        {produto.specs.map((s) => (
          <div key={s.label} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
            <dt className="text-[11px] font-bold tracking-widest uppercase text-slate-500 mb-1">{s.label}</dt>
            <dd className="text-base font-bold text-slate-900">{s.value}</dd>
          </div>
        ))}
      </div>

      {produto.destaque && (
        <div className="border-l-4 border-brand pl-5 mb-9 max-w-lg">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-2">Destaque Técnico</p>
          <p className="text-slate-700 text-base leading-relaxed">{produto.destaque}</p>
        </div>
      )}

      {produto.especificacoes && (
        <div className="mb-9 max-w-lg">
          <p className="text-xs font-bold tracking-widest uppercase text-brand mb-3">Especificações Completas</p>
          <div className="divide-y divide-slate-200 border-2 border-slate-200 rounded-xl overflow-hidden">
            {produto.especificacoes.map((e, i) => (
              <div key={e.label} className={`flex justify-between gap-4 px-5 py-3.5 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <span className="text-slate-600 text-sm font-semibold flex-shrink-0">{e.label}</span>
                <span className="text-slate-900 text-sm font-bold text-right">{e.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {produto.destaques && (
        <ul className="space-y-3 mb-9 max-w-lg">
          {produto.destaques.map((d) => (
            <li key={d} className="flex items-center gap-3 text-slate-700 text-base font-medium">
              <svg className="w-5 h-5 text-white bg-brand rounded-full p-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              {d}
            </li>
          ))}
        </ul>
      )}

      {produto.extra && (
        <p className="text-slate-600 text-sm font-semibold mb-9 flex items-center gap-2.5">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          {produto.extra}
        </p>
      )}

      <div className="flex flex-wrap gap-4">
        <a
          href={linkWhatsapp(produto)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand text-white text-base font-bold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors shadow-sm"
        >
          Comprar via WhatsApp
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </a>
        <a
          href={produto.mercadoLivre.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#FFE600] text-[#2D3277] text-base font-bold px-8 py-4 rounded-lg hover:bg-[#FFD500] transition-colors shadow-sm"
        >
          <img src="/mercado-livre-logo.png" alt="" className="w-6 h-6 flex-shrink-0" />
          Parcele no Mercado Livre
        </a>
      </div>
    </div>
  );

  return (
    <section id={id} className={`${tint ? 'bg-slate-50' : 'bg-white'} ${topo ? 'border-t border-slate-200' : ''}`}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
          {reverse ? (
            <>
              <div className="lg:order-2">{imagem}</div>
              <div className="lg:order-1">{info}</div>
            </>
          ) : (
            <>
              {imagem}
              {info}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
