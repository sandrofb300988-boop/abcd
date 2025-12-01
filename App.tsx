
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Ingredients from './components/Ingredients';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import BodyAreas from './components/BodyAreas';

function App() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      // Allow specific handlers (like the FAQ chat link) to take precedence
      if (e.defaultPrevented) return;

      const link = (e.target as HTMLElement).closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      // Only handle internal anchor links that point to a valid ID
      if (href && href.startsWith('#') && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          e.preventDefault();
          
          // Slight delay for a smoother transition feel
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 200);
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <main className="w-full min-h-screen relative selection:bg-brand-gold/30 selection:text-brand-dark">
      <nav className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-brand-dark tracking-tighter">FlexDepil<span className="text-brand-gold">.</span></div>
        <a href="#pricing" className="hidden sm:block px-6 py-2 bg-white/50 backdrop-blur-sm border border-brand-dark text-brand-dark rounded-none text-xs font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all duration-300">
            Acessar Curso
        </a>
      </nav>

      <Hero />
      
      <section id="how-it-works" className="py-24 bg-brand-light relative">
        <div className="container mx-auto px-6 text-center">
             <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-2 block">O Ritual</span>
            <h2 className="font-serif text-3xl md:text-5xl text-brand-dark mb-16">Simples como deve ser</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                    { title: "Mistura", desc: "A alquimia perfeita em 3 minutos." },
                    { title: "Ponto", desc: "Aqueça até atingir a textura mel." },
                    { title: "Aplicação", desc: "Desliza suavemente na pele." },
                    { title: "Remoção", desc: "Puxe e veja a mágica acontecer." }
                ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center group cursor-default">
                        <div className="w-16 h-16 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-dark font-serif text-2xl mb-6 bg-white shadow-sm group-hover:border-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                            {i + 1}
                        </div>
                        <h3 className="font-serif text-xl mb-2 text-brand-dark">{step.title}</h3>
                        <p className="text-stone-500 text-sm font-light px-4">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <Ingredients />
      <BodyAreas />
      <Comparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      
      {/* Floating AI Assistant */}
      <GeminiChat />
    </main>
  );
}

export default App;
