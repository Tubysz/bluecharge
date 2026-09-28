import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import Comparativo from './components/Comparativo';
import ContatoCTA from './components/ContatoCTA';
import Footer from './components/Footer';
import { PRODUTO_3_5, PRODUTO_7_4 } from './data/produtos';
import Sobrenos from './components/Sobrenos';
import Compatibilidade from './components/Compatibilidade';
import PortfolioIntro from './components/PortfolioIntro';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans antialiased">
      <Header />
      <main>
        <div
          className="relative"
          style={{
            background: `
              radial-gradient(900px 600px at 0% 0%, rgba(191,219,254,0.7), transparent),
              radial-gradient(900px 600px at 100% 0%, rgba(191,219,254,0.6), transparent),
              radial-gradient(1000px 700px at 0% 100%, rgba(219,234,254,0.7), transparent),
              radial-gradient(1000px 700px at 100% 100%, rgba(191,219,254,0.7), transparent),
              #ffffff
            `,
          }}
        >
          <Hero />
          <Sobrenos />
        </div>
        <Compatibilidade />
        <PortfolioIntro />
        <ProductSection produto={PRODUTO_3_5} id="3-5kw" reverse={false} tint={false} topo={false} />
        <ProductSection produto={PRODUTO_7_4} id="7-4kw" reverse={true} tint={false} featured />
        <Comparativo />
        <ContatoCTA />
      </main>
      <Footer />
    </div>
  );
}
