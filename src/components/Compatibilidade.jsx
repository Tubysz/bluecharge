import React, { useMemo, useState } from 'react';
import { CARROS, recomendarCarregador } from '../data/carros';
import { PRODUTO_3_5, PRODUTO_7_4, formatBRL, CONTATO } from '../data/produtos';

const PRODUTOS_POR_ID = { '3.5kW': PRODUTO_3_5, '7.4kW': PRODUTO_7_4 };

function linkWhatsappCarro(carro, produto) {
  const msg = `Olá! Tenho um ${carro.marca} ${carro.modelo} e vi no site que o carregador recomendado é o ${produto.id}. Quero saber mais.`;
  return `${CONTATO.whatsappLink}?text=${encodeURIComponent(msg)}`;
}

export default function Compatibilidade() {
  const [query, setQuery] = useState('');
  const [selecionado, setSelecionado] = useState(null);

  const resultados = useMemo(() => {
    if (!query.trim() || selecionado) return [];
    const q = query.trim().toLowerCase();
    return CARROS.filter((c) => `${c.marca} ${c.modelo}`.toLowerCase().includes(q)).slice(0, 8);
  }, [query, selecionado]);

  const escolher = (carro) => {
    setSelecionado(carro);
    setQuery(`${carro.marca} ${carro.modelo}`);
  };

  const trocar = () => {
    setSelecionado(null);
    setQuery('');
  };

  const produtoId = selecionado ? recomendarCarregador(selecionado) : null;
  const produto = produtoId ? PRODUTOS_POR_ID[produtoId] : null;

  return (
    <section id="compatibilidade" className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-[1000px] mx-auto px-20 lg:px-20 py-20 lg:py-28">
      <div
        className="border border-slate-400 rounded-3xl shadow-xl p-10 lg:p-14"
        style={{
          background: `
            radial-gradient(700px 500px at 0% 0%, rgba(191,219,254,0.35), transparent),
            radial-gradient(700px 500px at 100% 0%, rgba(191,219,254,0.3), transparent),
            radial-gradient(800px 550px at 0% 100%, rgba(219,234,254,0.35), transparent),
            radial-gradient(800px 550px at 100% 100%, rgba(191,219,254,0.35), transparent),
            #ffffff
          `,
        }}
      >
        
        <h2 className="font-tech text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
          Qual carregador serve pro seu carro?
        </h2>
        <p className="text-slate-600 text-lg mb-10 max-w-2xl">
          Digite a marca e o modelo do seu carro elétrico ou híbrido plug-in que nosso sistema te fala qual carregador aproveita 100% da capacidade dele.
        </p>

        <div className="max-w-xl relative">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelecionado(null);
            }}
            placeholder="Ex: BYD Dolphin, Volvo EX30, Kwid E-Tech..."
            className="w-full text-lg px-6 py-4 rounded-xl border-2 border-slate-400 shadow-xl focus:border-brand focus:outline-none transition-colors bg-white"
          />

          {resultados.length > 0 && (
            <div className="absolute z-10 top-full left-0 right-0 mt-2 bg-white border-2 border-slate-400 rounded-xl shadow-xl overflow-hidden max-h-80 overflow-y-auto">
              {resultados.map((c) => (
                <button
                  key={`${c.marca}-${c.modelo}`}
                  onClick={() => escolher(c)}
                  className="w-full text-left px-6 py-3.5 hover:bg-brand/5 transition-colors flex items-center justify-between gap-3 border-b border-slate-100 last:border-0"
                >
                  <span className="font-semibold text-slate-800">{c.marca} {c.modelo}</span>
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-400 flex-shrink-0">{c.tipo}</span>
                </button>
              ))}
            </div>
          )}

          {query.trim() && !selecionado && resultados.length === 0 && (
            <div className="absolute z-10 top-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-xl shadow-xl px-6 py-4 text-slate-500 text-sm">
              Não achamos esse modelo na lista.{' '}
              <a href={CONTATO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">
                Chama no WhatsApp
              </a>{' '}
              que a gente confirma pra você.
            </div>
          )}
        </div>

        {selecionado && produto && (
          <div className="mt-8 max-w-2xl bg-white border-2 border-brand/20 rounded-2xl p-8 lg:p-10 shadow-lg">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">
                  {selecionado.tipo === 'BEV' ? 'Elétrico' : 'Híbrido Plug-in'}
                </p>
                <h3 className="font-tech text-2xl font-bold text-slate-900">{selecionado.marca} {selecionado.modelo}</h3>
              </div>
              <button onClick={trocar} className="text-sm font-semibold text-brand hover:text-brand-dark flex-shrink-0">
                Trocar carro
              </button>
            </div>

            <div className="bg-brand/5 border border-brand/20 rounded-xl p-6 mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-brand mb-2">Carregador recomendado</p>
              <p className="font-tech text-3xl font-bold text-slate-900 mb-2">{produto.id}</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Seu carro aceita até <strong>{selecionado.potenciaAC}kW</strong> em corrente alternada monofásica —{' '}
                {produtoId === '7.4kW'
                  ? 'o 7.4kW aproveita essa capacidade e carrega bem mais rápido que o 3.5kW.'
                  : 'o 3.5kW já entrega tudo que ele consegue puxar, sem você pagar a mais por potência que o carro não usa.'}
              </p>
            </div>

            {selecionado.obs && (
              <div className="bg-spark/5 border border-spark/20 rounded-xl p-5 mb-6 flex gap-3">
                <svg className="w-5 h-5 text-spark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-slate-700 text-sm leading-relaxed">{selecionado.obs}</p>
              </div>
            )}

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-2xl font-bold text-slate-900">
                {formatBRL(produto.precoPix.valor)} <span className="text-sm font-medium text-slate-400">no PIX</span>
              </p>
              <a
                href={linkWhatsappCarro(selecionado, produto)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand text-white text-sm font-bold px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors"
              >
                Comprar o {produto.id}
              </a>
            </div>
          </div>
        )}

        <p className="text-slate-400 text-xs mt-8 max-w-2xl leading-relaxed">
          * Potências de carregamento levantadas a partir de fichas técnicas oficiais e fontes do mercado brasileiro (set/2026). Pode variar por versão/ano do veículo — em caso de dúvida, confirme pelo manual do seu carro ou fale com a gente.
        </p>
      </div>
      </div>
    </section>
  );
}
