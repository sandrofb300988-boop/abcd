import React from 'react';

const testimonials = [
  {
    name: "Ana Clara",
    location: "São Paulo, SP",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Eu gastava cerca de R$ 150 todo mês no salão. Agora faço tudo em casa, no meu tempo, assistindo série. A economia no final do ano paga uma viagem!"
  },
  {
    name: "Fernanda Lima",
    location: "Rio de Janeiro, RJ",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "Tenho a pele extremamente sensível e a cera comum sempre me deixava vermelha por dias. O Gel Flex foi a salvação. Sai o pelo, fica a pele intacta."
  },
  {
    name: "Juliana Mendes",
    location: "Belo Horizonte, MG",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    quote: "No começo achei que ia fazer sujeira na cozinha, mas é impressionante como sai tudo com água! O passo a passo é muito didático."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF8F0] relative overflow-hidden" id="testimonials">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-2 block">Quem usa, ama</span>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-dark">Histórias Reais</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-brand-gold/10 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold/20"
                />
                <div>
                  <h4 className="font-serif text-lg text-brand-dark font-bold">{t.name}</h4>
                  <span className="text-xs text-stone-400 uppercase tracking-wide">{t.location}</span>
                </div>
              </div>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-brand-gold/20 font-serif leading-none">“</span>
                <p className="text-stone-600 italic relative z-10 leading-relaxed">
                  {t.quote}
                </p>
              </div>
              <div className="mt-6 flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;