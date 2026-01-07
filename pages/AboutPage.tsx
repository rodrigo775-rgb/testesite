
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Factory, ShieldCheck, Award, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="right">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">A Nossa Indústria</span>
              <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mt-2 mb-8">Precisão Industrial, <br/>Compromisso Técnico.</h1>
              <p className="text-zinc-600 text-lg leading-relaxed mb-6">
                Fundada com a missão de elevar o padrão dos cercamentos metálicos no Brasil, a Gradilcolor uniu a robustez da metalurgia tradicional à tecnologia de ponta do corte a laser e automação industrial.
              </p>
              <p className="text-zinc-600 text-lg leading-relaxed">
                Hoje, somos referência em Soluções Perimetrais para grandes obras, indústrias e projetos que não aceitam o comum. Nossa fábrica opera com processos padronizados que garantem que cada metro de gradil entregue possua a mesma qualidade e resistência.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-zinc-200 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] bg-zinc-200 rounded-lg mt-12 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-zinc-50 rounded-xl">
              <Factory className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-zinc-900">100% Próprio</h3>
              <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest">Fabricação Nacional</p>
            </div>
            <div className="text-center p-8 bg-zinc-50 rounded-xl">
              <ShieldCheck className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-zinc-900">Normativa</h3>
              <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest">Padrões Rígidos</p>
            </div>
            <div className="text-center p-8 bg-zinc-50 rounded-xl">
              <Award className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-zinc-900">Qualidade</h3>
              <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest">Pintura Poliéster</p>
            </div>
            <div className="text-center p-8 bg-zinc-50 rounded-xl">
              <Globe className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-zinc-900">Logística</h3>
              <p className="text-xs text-zinc-500 mt-2 uppercase tracking-widest">Atendimento Nacional</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-zinc-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Nossa Missão & Visão</h2>
          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            <div>
              <h4 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Missão</h4>
              <p className="text-zinc-400">Prover sistemas de segurança perimetral com engenharia de ponta, garantindo proteção e estética superior para infraestruturas de todos os portes.</p>
            </div>
            <div>
              <h4 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Visão</h4>
              <p className="text-zinc-400">Ser o parceiro técnico número um de engenheiros e arquitetos brasileiros quando o assunto é cercamento metálico técnico.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
