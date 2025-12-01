import React from 'react';
import { CheckIcon, SparklesIcon, DropIcon } from './Icons';

const Ingredients: React.FC = () => {
  return (
    <section className="py-24 bg-white relative" id="benefits">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-2 block">O Poder do Método</span>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-dark mb-6">Por que Funciona?</h2>
            <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto">
                Uma técnica pensada para ser eficiente, econômica e limpa. Tudo o que os métodos tradicionais não são.
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Block 1: Economy */}
            <div className="bg-brand-light p-10 rounded-[3rem] border border-brand-gold/20 shadow-xl transition-all duration-500 ease-out group relative overflow-hidden hover:-translate-y-3 hover:shadow-[0_30px_60px_-12px_rgba(212,163,115,0.4)] hover:border-brand-gold/50">
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full -mr-20 -mt-20 transition-transform duration-500 group-hover:scale-150"></div>
                
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10">
                        <span className="font-serif text-3xl text-brand-dark">$</span>
                    </div>
                    <h3 className="font-serif text-3xl text-brand-dark mb-4 relative z-10">Rendimento Absurdo</h3>
                    <p className="text-stone-600 leading-relaxed text-lg relative z-10 mb-6">
                        Uma única receita custa centavos e depila o corpo inteiro. Diga adeus aos gastos recorrentes com lâminas descartáveis e potes de cera caros.
                    </p>
                </div>

                {/* Interactive Reveal Drawer */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-white/80 backdrop-blur-md border-t border-brand-gold/20 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-brand-gold/20 rounded-full text-brand-dark shrink-0">
                            <SparklesIcon className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="font-serif text-brand-dark font-bold text-sm uppercase tracking-wider mb-1">Insight Econômico</p>
                            <p className="text-stone-600 text-sm">Custo médio por sessão: <strong>menos de R$ 1,00</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Block 2: Cleanliness */}
            <div className="bg-brand-dark text-white p-10 rounded-[3rem] shadow-xl transition-all duration-500 ease-out relative overflow-hidden group hover:-translate-y-3 hover:shadow-[0_30px_60px_-12px_rgba(212,163,115,0.3)]">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20 transition-transform duration-500 group-hover:scale-150"></div>
                
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm relative z-10 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500">
                        <CheckIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-4 relative z-10">Zero Sujeira</h3>
                    <p className="text-white/80 leading-relaxed text-lg relative z-10 mb-6">
                        Diferente da cera tradicional que gruda em tudo, o Gel Flex é 100% hidrossolúvel. Caiu no chão ou na roupa? Um pouco de água resolve.
                    </p>
                </div>

                {/* Interactive Reveal Drawer */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-brand-primary/90 backdrop-blur-md border-t border-white/10 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-full text-white shrink-0">
                            <DropIcon className="w-5 h-5" />
                        </div>
                         <div>
                            <p className="font-serif text-white font-bold text-sm uppercase tracking-wider mb-1">Facilidade Real</p>
                            <p className="text-white/90 text-sm">Limpeza instantânea <strong>apenas com água</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         {/* CTA Mini Card */}
         <div className="mt-12 max-w-2xl mx-auto text-center">
            <div className="p-10 bg-brand-gold/10 border border-brand-gold/20 rounded-2xl relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative z-10">
                    <p className="font-serif text-2xl text-brand-dark italic mb-6">"O segredo não é o que você usa, é como você mistura."</p>
                    <a href="#pricing" className="inline-block px-10 py-4 bg-brand-dark text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-brand-primary transition-all shadow-lg hover:shadow-brand-primary/50">
                        Descobrir a Fórmula &rarr;
                    </a>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#D4A373 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Ingredients;