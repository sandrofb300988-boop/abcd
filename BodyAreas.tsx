
import React from 'react';

const areas = [
  {
    title: "Rosto & Buço",
    desc: "Precisão delicada para a pele fina. Remove sem agredir.",
  },
  {
    title: "Axilas",
    desc: "Adeus às manchas escuras. Clareamento natural progressivo.",
  },
  {
    title: "Virilha",
    desc: "Segurança total para áreas íntimas com conforto absoluto.",
  },
  {
    title: "Pernas Inteiras",
    desc: "Alto rendimento. Pele lisa e macia por até 30 dias.",
  }
];

const BodyAreas: React.FC = () => {
  return (
    <section className="py-20 bg-[#FFF8F0]" id="body-areas">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-2 block">Versatilidade Total</span>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-4">Um Método, Todo o Corpo</h2>
            <p className="text-stone-500 text-base font-light max-w-2xl mx-auto">
                Seguro para áreas sensíveis, potente para pelos resistentes.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {areas.map((area, idx) => (
                <div key={idx} className="group bg-white p-8 rounded-2xl border border-brand-gold/20 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center relative overflow-hidden">
                    {/* Decorative hover background */}
                    <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="w-8 h-1 bg-brand-gold rounded-full mb-6 group-hover:w-16 transition-all duration-300"></div>
                    
                    <h3 className="font-serif text-xl text-brand-dark mb-3 relative z-10">{area.title}</h3>
                    <p className="text-stone-600 text-sm leading-relaxed relative z-10">
                        {area.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BodyAreas;
