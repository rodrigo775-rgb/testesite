
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { 
  ClipboardCheck, 
  Cpu, 
  ShieldCheck, 
  Search, 
  Zap, 
  Maximize, 
  CheckCircle,
  BarChart3,
  Waves
} from 'lucide-react';

const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Manifesto */}
      <section className="bg-zinc-900 py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="right">
            <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block">
              O Conceito Gradilcolor
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1]">
              Não vendemos produtos. <br/>
              <span className="text-blue-600">Resolvemos problemas.</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed">
              Soluções representa uma mudança de posicionamento: entregamos respostas completas para desafios reais de cada projeto, 
              evitando que você precise adaptar sua obra ao que o mercado oferece.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* O que é Soluções para nós */}
      <section className="py-24 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold text-zinc-900 mb-8">
                O que significa "Soluções" no contexto Gradilcolor?
              </h2>
              <div className="space-y-6">
                {[
                  { 
                    title: "Análise do Cenário", 
                    desc: "Estudamos o terreno, desníveis, requisitos de segurança, estética e o uso final do espaço antes de qualquer proposta." 
                  },
                  { 
                    title: "Combinação Inteligente", 
                    desc: "Integramos gradis, portões técnicos, totens e fixações de forma sistêmica, onde cada peça potencializa a outra." 
                  },
                  { 
                    title: "Fim da Gambiarra", 
                    desc: "Nossos sistemas eliminam improvisos de obra. O produto é fabricado para se adequar milimetricamente ao seu projeto." 
                  },
                  { 
                    title: "Visão de Longo Prazo", 
                    desc: "Entregamos durabilidade e eficiência funcional. Soluções que não geram dor de cabeça com manutenção ou falhas de segurança." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-zinc-900 text-lg">{item.title}</h4>
                      <p className="text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" className="bg-zinc-50 p-12 rounded-3xl border border-zinc-200">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-black text-zinc-900 mb-4 uppercase tracking-tighter italic">O Mantra:</h3>
                <blockquote className="text-2xl font-medium text-zinc-700 leading-snug">
                  "O cliente não adapta o projeto ao produto — o produto é que se adapta ao projeto."
                </blockquote>
                <div className="w-16 h-1 bg-blue-600 mx-auto mt-8"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Multi-nicho: A mesma lógica aplicada */}
      <section className="py-24 bg-zinc-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6">Verticalidade & Expertise</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              Esta lógica de entender a necessidade para projetar a resposta certa se estende naturalmente a todos os nossos nichos de atuação.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Indústria */}
            <ScrollReveal direction="right" className="bg-white p-12 rounded-3xl shadow-sm border border-zinc-200 group hover:border-blue-600 transition-colors">
              <Cpu className="w-12 h-12 text-blue-600 mb-8" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Perímetros & Indústria</h3>
              <p className="text-zinc-600 mb-8">
                Resolvemos a segurança e o fechamento de grandes áreas com sistemas de gradil que consideram ventilação, visibilidade e resistência a invasão.
              </p>
              <ul className="space-y-3 text-sm font-bold text-zinc-500 uppercase tracking-widest">
                <li className="flex items-center gap-2"><Maximize className="w-4 h-4 text-blue-600" /> Cercamento de Galpões</li>
                <li className="flex items-center gap-2"><Maximize className="w-4 h-4 text-blue-600" /> Divisórias Técnicas</li>
                <li className="flex items-center gap-2"><Maximize className="w-4 h-4 text-blue-600" /> Portões Técnicos Sob Medida</li>
              </ul>
            </ScrollReveal>

            {/* Performance */}
            <ScrollReveal direction="left" className="bg-white p-12 rounded-3xl shadow-sm border border-zinc-200 group hover:border-blue-600 transition-colors">
              <Waves className="w-12 h-12 text-blue-600 mb-8" />
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Esporte & Bem-Estar</h3>
              <p className="text-zinc-600 mb-8">
                Aplicamos o DNA do aço industrial para resolver o desafio da performance fora d'água. Simuladores que entregam equilíbrio real.
              </p>
              <ul className="space-y-3 text-sm font-bold text-zinc-500 uppercase tracking-widest">
                <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-blue-600" /> Simuladores de Surf (Alsurf)</li>
                <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-blue-600" /> Equipamentos de Estabilidade</li>
                <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-blue-600" /> Estruturas para Treino Funcional</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-6">Qual problema sua obra ou rotina enfrenta hoje?</h2>
            <p className="text-zinc-500 mb-10 text-xl">Deixe nossa engenharia projetar a solução ideal para você.</p>
            <button className="px-12 py-5 bg-blue-600 text-white font-black rounded-full hover:bg-blue-700 transition-all shadow-2xl">
              DESAFIAR NOSSA ENGENHARIA
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;
