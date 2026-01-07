
import React from 'react';
import { SOLUTIONS } from '../constants';
import { MessageSquareText, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Solutions: React.FC = () => {
  return (
    <section id="soluções" className="py-24 bg-zinc-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="down" className="text-center mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
            Nossa Metodologia
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Gradilcolor Soluções</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Menos sobre "o que vendemos" e mais sobre o problema que resolvemos. 
            Entregamos respostas completas através de diagnóstico técnico e integração industrial.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {SOLUTIONS.map((solution, index) => (
            <ScrollReveal key={solution.id} delay={index * 150} direction="up" distance={40}>
              <div className="p-10 h-full bg-zinc-800/50 border border-zinc-700 rounded-3xl hover:bg-zinc-800 transition-all group hover:border-blue-500 shadow-xl">
                <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{solution.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500} direction="up" className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#contato" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95 uppercase tracking-widest text-xs"
            >
              <MessageSquareText className="w-5 h-5" />
              Solicitar Diagnóstico Técnico
            </a>
            <button className="flex items-center gap-2 text-zinc-400 font-bold hover:text-white transition-colors uppercase tracking-widest text-xs">
              Conhecer Manifesto Soluções <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Solutions;
