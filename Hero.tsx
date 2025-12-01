import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized mouse position (-1 to 1)
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;

      // Move blobs with different intensities for parallax effect
      // We apply the transform to a wrapper div so we don't conflict with the CSS 'animate-blob' on the child
      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${x * -25}px, ${y * 25}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${x * 30}px, ${y * -30}px)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FFF8F0]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Wrapper divs handle the mouse interaction offset */}
        <div ref={blob1Ref} className="absolute top-0 right-0 transition-transform duration-1000 ease-out will-change-transform">
            <div className="w-[500px] h-[500px] bg-brand-gold rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
        </div>

        <div ref={blob2Ref} className="absolute bottom-0 left-0 transition-transform duration-1000 ease-out will-change-transform">
             <div className="w-[500px] h-[500px] bg-brand-primary rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        {/* Added a third subtle blob for depth */}
         <div ref={blob3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 ease-out will-change-transform">
             <div className="w-[600px] h-[600px] bg-brand-beige rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-2000"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content - Attention */}
        <div className="lg:col-span-6 text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-dark/5 border border-brand-dark/10 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                <span className="text-brand-dark font-sans text-xs font-bold tracking-[0.2em] uppercase">Método Exclusivo Home Spa</span>
            </div>
          
          <h1 className="font-serif text-5xl md:text-7xl text-brand-dark leading-[1.1]">
            A Elite da <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-primary italic pr-2">Depilação Natural</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed border-l-2 border-brand-gold pl-6">
            Descubra o segredo da <strong>Depilação Termo-Adesiva Flex</strong>. Uma experiência de luxo, feita por você, no conforto da sua casa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-6">
            <a href="https://lastlink.com/p/C22B0616A/checkout-payment/" className="group relative px-8 py-4 bg-brand-dark text-white rounded-none font-medium shadow-2xl overflow-hidden hover:shadow-brand-gold/50 transition-all duration-500">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-gold to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 font-serif italic text-lg tracking-wide">Quero Transformar Minha Pele</span>
            </a>
            <a href="#how-it-works" className="px-8 py-4 border-b border-brand-dark text-brand-dark font-medium hover:text-brand-gold hover:border-brand-gold transition-all duration-300 text-center">
              Entenda a Ciência
            </a>
          </div>
        </div>
        
        {/* Visual - Desire */}
        <div className="lg:col-span-6 relative group">
            <div className="relative z-10 rounded-t-[10rem] rounded-b-none overflow-hidden shadow-2xl border-4 border-white transition-transform duration-700 group-hover:-translate-y-2">
                <img 
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Aplicação manual do produto na perna, demonstrando suavidade e contato direto com a pele" 
                    className="w-full h-[600px] object-cover"
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-80"></div>
                 <div className="absolute bottom-10 left-0 right-0 text-center px-4">
                    <span className="block text-brand-gold font-sans text-sm font-bold tracking-[0.2em] uppercase mb-2">Tecnologia Gel Flex</span>
                    <p className="text-white font-serif italic text-2xl md:text-3xl leading-tight">"Gruda no pelo,<br/>não na pele."</p>
                 </div>
            </div>
             {/* Decorative Frame */}
            <div className="absolute top-6 -right-6 w-full h-full border border-brand-gold/50 rounded-t-[10rem] -z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;