
import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Solutions from '../components/Solutions';
import Applications from '../components/Applications';
import TechnicalDetails from '../components/TechnicalDetails';
import Contact from '../components/Contact';
import ScrollReveal from '../components/ScrollReveal';
import { PageId } from '../App';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onProductClick: (productId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onProductClick }) => {
  return (
    <>
      <Hero />
      
      <section className="py-24 bg-white overflow-hidden border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="right" distance={50}>
            <div className="max-w-5xl border-l-8 border-blue-600 pl-10">
              <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-4 block">Foco no Problema</span>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 leading-[1.15] mb-6">
                A <span className="text-blue-600">Gradilcolor Soluções</span> não entrega apenas cercas. Entregamos respostas.
              </h2>
              <p className="text-zinc-500 text-xl max-w-4xl leading-relaxed">
                Nossa vertical estratégica foca em engenharia aplicada para resolver desafios complexos de topografia, segurança e estética. 
                Aqui, o seu projeto é que manda — nossos sistemas industriais são o meio para que ele se torne realidade, sem improvisos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Products onProductClick={onProductClick} />
      <Solutions />
      <Applications />
      <TechnicalDetails />
      
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <ScrollReveal direction="right" className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=800&auto=format&fit=crop" 
                  className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                  alt="Instalação Real Gradilcolor"
                />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full flex items-center justify-center text-white text-center p-4 shadow-2xl hidden lg:flex">
                  <span className="font-black text-xs uppercase tracking-widest leading-tight">Solução 100% Brasileira</span>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" className="md:w-1/2">
              <span className="text-blue-600 font-black uppercase tracking-widest text-xs">Engenharia Consultiva</span>
              <h2 className="text-4xl font-black text-zinc-900 mt-4 mb-8">Parceira Técnica de Ponta a Ponta</h2>
              <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
                Trabalhamos ao lado de construtoras, arquitetos e atletas para garantir que a solução final seja eficiente, segura e durável. Do desnível acentuado de um terreno industrial à estabilidade core necessária para o simulador de surf, aplicamos o mesmo rigor.
              </p>
              <button 
                onClick={() => onNavigate('solucoes')}
                className="inline-flex items-center gap-4 px-10 py-5 bg-zinc-900 text-white font-black rounded-full hover:bg-zinc-800 transition-all shadow-xl uppercase tracking-widest text-xs"
              >
                Conhecer Manifesto Soluções <span>&rarr;</span>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default HomePage;
