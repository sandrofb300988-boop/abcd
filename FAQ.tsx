import React, { useState } from 'react';

const faqData = [
    {
        question: "Dói menos que cera tradicional?",
        answer: "Sim, muito menos. A nossa fórmula adere apenas ao pelo, e não à pele. Além disso, o calor suave dilata levemente os poros, facilitando a saída do pelo pela raiz sem a agressão traumática das ceras comuns."
    },
    {
        question: "Consigo fazer sozinha se nunca depilei antes?",
        answer: "Com certeza. O método foi desenhado para iniciantes. Nosso guia passo a passo ensina desde a consistência exata do gel até o movimento correto da puxada. É intuitivo e seguro."
    },
    {
        question: "Posso usar em áreas sensíveis (virilha/axila)?",
        answer: "Sim! Por ser 100% natural e livre de químicos agressivos, o Gel Flex é ideal para áreas delicadas. Ele reduz drasticamente a chance de alergias e irritações comuns nessas regiões."
    },
    {
        question: "Quanto tempo dura o efeito?",
        answer: "Como o pelo é removido pela raiz, o resultado dura entre 20 a 30 dias, dependendo do seu crescimento natural. Com o uso frequente, os pelos tendem a nascer mais finos e escassos."
    },
    {
        question: "Como recebo o acesso ao curso?",
        answer: "O acesso é imediato. Assim que o pagamento de R$ 37,00 for confirmado, você receberá um e-mail com seu login para a área de membros onde estão as videoaulas e o e-book."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-brand-gold text-sm font-bold tracking-[0.2em] uppercase">Tire suas Dúvidas</span>
                    <h2 className="font-serif text-4xl text-brand-dark mt-2">Perguntas Frequentes</h2>
                </div>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="border border-stone-100 rounded-xl overflow-hidden hover:border-brand-gold/30 transition-colors duration-300">
                            <button 
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-center p-6 bg-stone-50 hover:bg-white transition-colors text-left focus:outline-none"
                            >
                                <span className={`font-serif text-lg ${openIndex === index ? 'text-brand-dark font-semibold' : 'text-stone-600'}`}>
                                    {item.question}
                                </span>
                                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-gold' : 'text-stone-400'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </span>
                            </button>
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 bg-white text-stone-600 leading-relaxed text-sm md:text-base border-t border-stone-50">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <p className="text-stone-500 mb-4">Ainda tem dúvidas?</p>
                    <a href="#chat" onClick={(e) => { e.preventDefault(); (document.querySelector('button[aria-label="chat"]') as HTMLElement)?.click(); }} className="text-brand-primary font-bold border-b border-brand-primary hover:text-brand-dark transition-colors">
                        Fale com a Flora no chat
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;