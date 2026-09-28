import React, { useState } from 'react';

// Mesma lógica de fallback do LogoWordmark: tenta a foto real em /public,
// e enquanto ela não chega mostra um placeholder de marca (sem parecer quebrado).
export default function ProductImage({ src, alt, label, className = '' }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-100 ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-contain p-4"
          onError={() => setFailed(true)}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400">
          <div className="w-16 h-16 rounded-full border border-brand/30 bg-brand/10 flex items-center justify-center">
            <svg className="w-7 h-7 text-brand" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase px-4 text-center">{label}</span>
        </div>
      )}
    </div>
  );
}
