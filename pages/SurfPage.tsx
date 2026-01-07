
import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { SURF_PRODUCTS } from '../constants';
import { ArrowRight, Waves, Activity, Target, ShieldCheck } from 'lucide-react';

interface SurfPageProps {
  onProductClick: (productId: string) => void;
}

const SurfPage: React.FC<SurfPageProps> = ({ onProductClick }) => {
  return (
    <div className="bg-white">
      {/* Dynamic Hero Section */}
      <section className="relative py-32 bg-zinc-900 overflow-hidden text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1459749411177-042180ce6742?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover"
            alt="Surf Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal direction="right">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-xs font-black uppercase tracking-widest rounded mb-6">
              <Waves className="w-4 h-4" /> Alsurf & Crosssurf
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none">
              O Treino do Mar, <br/><span className="text-blue-500">em Terra Firme.</span>
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mb-10 leading-relaxed">
              Equipamentos de alta performance desenvolvidos com a precisão da engenharia industrial para simular o movimento real do surf.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <ScrollReveal delay={100}>
              <Activity className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Core & Equilíbrio</h3>
              <p className="text-zinc-500 text-sm">Desenvolva a estabilidade necessária para manobras críticas e drop perfeito.</p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Memória Muscular</h3>
              <p className="text-zinc-500 text-sm">Repita os movimentos do surf em casa e sinta a diferença na próxima sessão.</p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="font-bold text-xl mb-4">Estrutura Industrial</h3>
              <p className="text-zinc-500 text-sm">Bases fabricadas pela Gradilcolor com aço de alta carga para durabilidade extrema.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Products Display */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {SURF_PRODUCTS.map((product, idx) => (
              <div key={product.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <ScrollReveal direction={idx % 2 === 0 ? 'right' : 'left'} className="lg:w-1/2">
                  <div className="relative group">
                    <img 
                      src={product.image} 
                      className="rounded-3xl shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 w-full aspect-[4/3] object-cover" 
                      alt={product.name} 
                    />
                    <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl hidden md:block">
                      <div className="text-sm font-bold uppercase tracking-widest mb-1">Destaque</div>
                      <div className="text-2xl font-black">Performance</div>
                    </div>
                  </div>
                </ScrollReveal>
                
                <ScrollReveal direction={idx % 2 === 0 ? 'left' : 'right'} className="lg:w-1/2">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Simuladores de Performance</span>
                  <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mt-4 mb-6">{product.name}</h2>
                  <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-4 mb-10">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-bold text-zinc-800 text-sm uppercase tracking-wide">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => onProductClick(product.id)}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white font-bold rounded-lg hover:bg-zinc-800 transition-all shadow-xl"
                  >
                    Especificações Técnicas <ArrowRight className="w-5 h-5" />
                  </button>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-8">Pronto para elevar seu surf?</h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12">
            Nossos consultores podem ajudar você a escolher o simulador ideal para seu nível e espaço disponível.
          </p>
          <a 
            href="https://wa.me/55000000000" 
            target="_blank"
            className="inline-block px-12 py-5 bg-white text-blue-600 font-black rounded-full hover:bg-zinc-100 transition-all shadow-2xl"
          >
            FALAR COM ESPECIALISTA NO WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
};

export default SurfPage;
