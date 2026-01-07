
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { ArrowRight, Search, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ProductsProps {
  onProductClick: (productId: string) => void;
}

const Products: React.FC<ProductsProps> = ({ onProductClick }) => {
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
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Produtos Padronizados</h2>
            <p className="text-zinc-600">Cercamentos modulares de alta eficiência, projetados para montagem rápida e resistência superior.</p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className={`w-5 h-5 transition-colors ${searchTerm ? 'text-blue-500' : 'text-zinc-400 group-focus-within:text-blue-500'}`} />
            </div>
            <input
              type="text"
              placeholder="Buscar por nome ou característica..."
              className="block w-full pl-10 pr-10 py-3 border border-zinc-200 rounded-lg bg-zinc-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-12">
            {filteredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 150}>
                <div className="group relative overflow-hidden bg-zinc-50 rounded-lg flex flex-col h-full border border-zinc-100 hover:border-zinc-300 transition-all shadow-sm hover:shadow-xl">
                  <button 
                    onClick={() => onProductClick(product.id)}
                    className="w-full aspect-video overflow-hidden"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">{product.name}</h3>
                    <p className="text-zinc-600 mb-6 flex-grow line-clamp-3">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-zinc-200 text-zinc-700 text-xs font-semibold rounded uppercase tracking-wider">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button 
                      onClick={() => onProductClick(product.id)}
                      className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase text-sm tracking-widest text-left"
                    >
                      Ver {product.name} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-zinc-50 rounded-xl border-2 border-dashed border-zinc-200">
            <Search className="w-12 h-12 text-zinc-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Nenhum produto encontrado</h3>
            <p className="text-zinc-500">Tente buscar por termos como "Gradil", "Portão" ou "3D".</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-6 text-blue-600 font-bold uppercase text-xs tracking-widest"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
