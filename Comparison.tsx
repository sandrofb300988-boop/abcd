import React from 'react';
import { ComparisonRow } from '../types';
import { CheckIcon, XIcon } from './Icons';

const rows: ComparisonRow[] = [
  { method: "Cera Quente", problem: "Dor intensa e flacidez", solution: "Calor controlado e conforto" },
  { method: "Lâmina", problem: "Corte, alergia e pelo grosso", solution: "Pele lisa por semanas" },
  { method: "Cera Fria", problem: "Quebra o pelo e irrita", solution: "Remove pela raiz sem agressão" },
  { method: "Laser", problem: "Custo altíssimo e dor", solution: "Resultado profissional a baixo custo" },
];

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50" id="comparison">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-brand-dark mb-6">Por que o <span className="italic text-brand-gold">Gel Flex</span> é Superior?</h2>
          <p className="max-w-2xl mx-auto text-stone-600 font-light text-lg">
            Não é apenas sobre remover pelos. É sobre tratar a sua pele com a dignidade que ela merece.
          </p>
        </div>

        <div className="rounded-3xl shadow-2xl bg-white max-w-5xl mx-auto overflow-hidden border border-stone-100">
          <div className="grid grid-cols-12 bg-brand-dark text-white text-center py-6 font-serif text-lg tracking-wide">
            <div className="col-span-4 p-2 font-bold">Método Antigo</div>
            <div className="col-span-4 p-2 opacity-70 italic">O Pesadelo</div>
            <div className="col-span-4 p-2 text-brand-gold font-bold bg-white/5 mx-4 rounded">A Solução Flex</div>
          </div>
          
          {rows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-12 items-stretch border-b border-stone-100 last:border-0 hover:bg-stone-50 transition-colors duration-200 group">
              <div className="col-span-4 p-6 font-bold text-stone-700 flex items-center justify-center border-r border-stone-100 bg-white">
                 {row.method}
              </div>
              <div className="col-span-4 p-6 text-stone-500 flex flex-col items-center justify-center gap-2 text-sm md:text-base border-r border-stone-100">
                 <span className="flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-red-400 opacity-60" />
                    {row.problem}
                 </span>
              </div>
              <div className="col-span-4 p-6 text-brand-dark font-medium flex flex-col items-center justify-center gap-2 text-sm md:text-base bg-brand-gold/5 relative overflow-hidden">
                 <div className="absolute inset-0 bg-brand-gold opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                 <span className="flex items-center gap-2 relative z-10">
                    <CheckIcon className="w-5 h-5 text-brand-green" />
                    {row.solution}
                 </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;