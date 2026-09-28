import React from 'react';
import LogoWordmark from './LogoWordmark';
import ProductImage from './ProductImage';
import { PRODUTO_3_5, PRODUTO_7_4, formatBRL } from '../data/produtos';

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative max-w-[1600px] mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-20 lg:pb-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <LogoWordmark className="h-16 md:h-20 lg:h-24 mb-8" />

          <h1 className="font-tech text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.1] mb-7 max-w-xl">
            Carregadores portáteis para veículos elétricos, feitos para o padrão brasileiro.
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-lg">
            Dois modelos exclusivos — 3.5kW e 7.4kW — com garantia oficial, pronta entrega e suporte técnico direto com a distribuidora oficial no Brasil.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#7-4kw" className="inline-flex items-center gap-2 bg-brand text-white text-base font-bold px-7 py-4 rounded-lg hover:bg-brand-dark transition-colors shadow-sm">
              Ver os modelos
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
            <a href="#contato" className="inline-flex items-center gap-2 border-2 border-slate-300 text-slate-800 text-base font-bold px-7 py-4 rounded-lg hover:border-brand hover:text-brand transition-colors">
              Falar com um consultor
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-14 pt-10 border-t-2 border-slate-100 max-w-lg">
            <div>
              <p className="text-3xl font-bold text-brand">2</p>
              <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide mt-1">Modelos exclusivos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand">12 meses</p>
              <p className="text-sm text-slate-600 font-semibold uppercase tracking-wide mt-1">Garantia oficial</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/50">
            <ProductImage
              src={PRODUTO_7_4.imagens[0]}
              alt="Carregador Portátil BlueCharge 7.4kW"
              label="Foto do produto em breve"
              className="w-full h-full"
            />
          </div>

          <div className="absolute -bottom-7 left-6 sm:-left-7 bg-white border-2 border-brand/15 rounded-xl shadow-xl px-6 py-5">
            <p className="text-[11px] uppercase tracking-widest text-slate-500 font-bold mb-1">A partir de</p>
            <p className="text-2xl font-bold text-slate-900">
              {formatBRL(PRODUTO_3_5.precoPix.valor)} <span className="text-base font-semibold text-brand">no PIX</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
