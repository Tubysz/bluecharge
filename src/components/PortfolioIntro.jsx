import React from 'react';

export default function PortfolioIntro() {
  return (
    <div className="bg-white border-t border-slate-200 pt-16 lg:pt-20 pb-2">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10 text-center">
        <h2 className="inline-flex items-center gap-3 font-tech text-xl lg:text-2xl font-bold text-slate-900 px-8 py-4 rounded-full border-2 border-brand/20 bg-brand/5 shadow-sm">
          <svg className="w-6 h-6 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Conheça nosso portfólio
        </h2>
      </div>
    </div>
  );
}
