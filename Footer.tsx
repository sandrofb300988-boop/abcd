import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-beige py-12 border-t border-brand-primary/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
            <h3 className="font-serif text-2xl font-bold">FlexDepil</h3>
            <p className="text-sm opacity-60">Beleza Natural ao seu alcance.</p>
        </div>
        <div className="flex gap-8 text-sm opacity-80">
            <a href="#" className="hover:text-brand-gold transition">Termos de Uso</a>
            <a href="#" className="hover:text-brand-gold transition">Privacidade</a>
            <a href="#" className="hover:text-brand-gold transition">Contato</a>
        </div>
        <div className="text-xs opacity-40">
            © {new Date().getFullYear()} FlexDepil. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;