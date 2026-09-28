import React, { useState } from 'react';

// Usa a logo oficial (fundo já removido). Se o arquivo não existir, cai
// num lockup de texto equivalente, sem quebrar o layout.
// variant="dark" usa a versão em branco, para fundos escuros (footer/CTA).
export default function LogoWordmark({ className = 'h-9', textClassName = '', variant = 'light' }) {
  const [failed, setFailed] = useState(false);
  const src = variant === 'dark' ? '/logo-bluecharge-white.png' : '/logo-bluecharge.png';

  if (failed) {
    const textColor = variant === 'dark' ? 'text-white' : 'text-slate-900';
    return (
      <span className={`inline-flex items-center gap-2 font-tech font-black leading-none ${textColor} ${textClassName}`}>
        <svg className="w-[0.75em] h-[0.75em] text-spark flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        BlueCharge
      </span>
    );
  }

  return (
    <img
      key={src}
      src={src}
      alt="BlueCharge"
      className={`${className} w-auto object-contain`}
      onError={() => setFailed(true)}
    />
  );
}
