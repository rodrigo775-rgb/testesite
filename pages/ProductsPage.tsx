
import React, { useState, useMemo } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { Ruler, Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

interface ProductsPageProps {
  onProductClick: (productId: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onProductClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return PRODUCTS.filter(product => 
      product.name.toLowerCase().includes(term) || 
      product.description.toLowerCase().includes(term) ||
      product.features.some(f => f.toLowerCase().includes(term))
    );
  }, [searchTerm]);

  return (
    <div className="bg-white">
      {/* Header Page */}
      <section className="bg-zinc-900 py-24 text-white">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-black mb-6">Catálogo Técnico</h1>
            <p className="text-zinc-400 text-xl max-w-3xl">
              Sistemas modulares projetados sob rigorosos padrões industriais para máxima durabilidade e segurança.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured: Gradil 3D Section */}
      <section className="py-24 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="right">
              <button onClick={() => onProductClick('gradil-3d')} className="w-full text-left group">
                <div className="overflow-hidden rounded-xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1200&auto=format&fit=crop" 
                    alt="Detalhe Gradil 3D" 
                    className="w-full group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </button>
            </ScrollReveal>
            <ScrollReveal direction="left">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Carro-chefe</span>
              <h2 className="text-4xl font-bold text-zinc-900 mt-2 mb-6">Sistema Gradil 3D</h2>
              <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
                O Gradil 3D é composto por painéis de arame galvanizado eletrossoldado, com dobras em "V" que conferem rigidez estrutural superior. Seu acabamento em pintura eletrostática poliéster garante proteção UV e resistência à corrosão.
              </p>
              
              <div className="space-y-6">
                <div className="bg-zinc-50 p-6 rounded-lg border border-zinc-200">
                  <h4 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <Ruler className="text-blue-600 w-5 h-5" /> Especificações
                  </h4>
                  <ul className="grid grid-cols-2 gap-4 text-sm text-zinc-600">
                    <li><strong className="text-zinc-900">Largura:</strong> 2,50 m (Padrão)</li>
                    <li><strong className="text-zinc-900">Alturas:</strong> 1,03m | 1,53m | 1,73m | 2,03m | 2,43m</li>
                    <li><strong className="text-zinc-900">Malha:</strong> 50 x 200 mm</li>
                    <li><strong className="text-zinc-900">Bitolas:</strong> 4,30mm a 5,00mm</li>
                  </ul>
                </div>

                <button 
                  onClick={() => onProductClick('gradil-3d')}
                  className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded font-bold hover:bg-zinc-800 transition-all"
                >
                  Ver Detalhamento Técnico <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Searchable Products Grid */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-2">Linha Completa de Sistemas</h2>
              <p className="text-zinc-500">Explore nosso portfólio técnico por nome ou funcionalidade.</p>
            </div>

            {/* Search Input Container */}
            <div className="relative w-full md:w-96 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className={`w-5 h-5 transition-colors ${searchTerm ? 'text-blue-500' : 'text-zinc-400 group-focus-within:text-blue-500'}`} />
              </div>
              <input
                type="text"
                placeholder="Ex: Portão, 3D, Desnível..."
                className="block w-full pl-11 pr-11 py-4 border border-zinc-200 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-400 hover:text-zinc-600 transition-colors"
                  aria-label="Limpar busca"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 100} direction="up" distance={20}>
                  <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden hover:shadow-md transition-all h-full flex flex-col group">
                    <button onClick={() => onProductClick(product.id)} className="w-full overflow-hidden aspect-[16/10]">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </button>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                      <p className="text-zinc-600 text-sm mb-6 flex-grow line-clamp-2">{product.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-zinc-100 text-zinc-500 text-[10px] font-bold rounded uppercase tracking-tighter">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => onProductClick(product.id)}
                        className="text-blue-600 font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                      >
                        Detalhes Técnicos <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center bg-white rounded-2xl border-2 border-dashed border-zinc-200">
              <Search className="w-12 h-12 text-zinc-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Nenhum sistema encontrado</h3>
              <p className="text-zinc-500">Não encontramos resultados para "{searchTerm}". Tente termos como "Gradil", "Portão" ou "3D".</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-6 px-8 py-3 bg-zinc-900 text-white rounded-lg text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg active:scale-95"
              >
                Ver todos os sistemas (Limpar Filtros)
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
