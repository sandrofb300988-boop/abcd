import React from 'react';
import { CheckIcon, SparklesIcon } from './Icons';

const Pricing: React.FC = () => {
  return (
    <section className="py-32 bg-[#1a120e] relative overflow-hidden text-white" id="pricing">
        {/* Luxury Background Effects */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary opacity-10 blur-[120px] rounded-full pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            
            {/* Copy - Urgency & Value */}
            <div className="space-y-8 order-2 md:order-1">
                <h2 className="font-serif text-4xl md:text-6xl leading-tight">
                    Sua Liberdade <br />
                    <span className="text-brand-gold italic">Custa Menos</span> que uma Pizza.
                </h2>
                <p className="text-brand-beige/60 text-lg font-light leading-relaxed">
                    Você está a um passo de dominar a técnica que vai economizar milhares de reais da sua vida. O investimento é simbólico, o resultado é eterno.
                </p>
                
                <div className="space-y-6 pt-6 border-t border-white/10">
                    <div className="flex items-start gap-4">
                        <div className="p-2 bg-brand-gold/20 rounded-lg text-brand-gold">
                             <SparklesIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-serif text-xl mb-1">Acesso Vitalício</h4>
                            <p className="text-sm text-stone-400">Assista quando e onde quiser. O curso é seu para sempre.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="p-2 bg-brand-gold/20 rounded-lg text-brand-gold">
                             <CheckIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="font-serif text-xl mb-1">Garantia Blindada</h4>
                            <p className="text-sm text-stone-400">7 dias para testar. Se não amar, devolvemos 100% do valor.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Card - Action */}
            <div className="order-1 md:order-2 perspective-1000">
                <div className="bg-gradient-to-br from-stone-900 to-[#2c1e1a] rounded-[2rem] p-1 shadow-2xl border border-white/10 relative group transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-[0_30px_60px_-10px_rgba(212,163,115,0.25)] hover:border-brand-gold/30">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-gold text-brand-dark font-bold px-6 py-1 rounded-full text-xs uppercase tracking-[0.2em] shadow-lg z-20">
                        Oferta Especial
                    </div>
                    
                    <div className="bg-[#1a120e] rounded-[1.8rem] p-10 text-center relative overflow-hidden h-full transition-colors duration-500 group-hover:bg-[#221815]">
                         {/* Glow Effect */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-gold/20 blur-3xl rounded-full transition-all duration-700 group-hover:scale-150 group-hover:bg-brand-gold/25"></div>

                        <h3 className="font-serif text-3xl mb-2">Protocolo Flex Completo</h3>
                        <p className="text-stone-500 text-sm mb-8">Videoaulas + E-book + Bônus</p>
                        
                        <div className="flex flex-col items-center justify-center gap-1 mb-8">
                            <span className="text-stone-500 line-through text-lg">de R$ 97,90</span>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl text-brand-gold">R$</span>
                                <span className="text-7xl font-serif font-bold text-white tracking-tighter">37</span>
                                <span className="text-2xl text-brand-gold">,00</span>
                            </div>
                            <span className="text-xs text-green-500 font-medium bg-green-500/10 px-2 py-1 rounded mt-2">Pagamento Único</span>
                        </div>
                        
                        <a 
                          href="https://lastlink.com/p/C22B0616A/checkout-payment/"
                          className="block w-full py-5 bg-gradient-to-r from-brand-gold to-[#b08d55] hover:from-[#e5b774] hover:to-[#c6a36b] text-brand-dark rounded-xl font-bold text-lg shadow-lg shadow-brand-gold/20 transition-all duration-300 transform active:scale-95 mb-4 group-hover:shadow-brand-gold/40 text-center"
                        >
                            Sim! Quero Minha Pele de Volta
                        </a>
                        
                        <div className="flex justify-center items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                             {/* Mock Payment Icons */}
                             <div className="h-6 w-10 bg-white/20 rounded"></div>
                             <div className="h-6 w-10 bg-white/20 rounded"></div>
                             <div className="h-6 w-10 bg-white/20 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;