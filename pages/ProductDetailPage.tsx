
import React, { useState, useMemo } from 'react';
import { PRODUCTS, SURF_PRODUCTS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowLeft, CheckCircle2, Ruler, ShieldCheck, Factory, Send, Waves, Paintbrush, BoxSelect, Settings2, Maximize2, Anchor } from 'lucide-react';
import { PageId } from '../App';

interface ProductDetailPageProps {
  productId: string | null;
  onNavigate: (page: PageId) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onNavigate }) => {
  const allProducts = [...PRODUCTS, ...SURF_PRODUCTS];
  const product = allProducts.find(p => p.id === productId);
  const isSurf = SURF_PRODUCTS.some(p => p.id === productId);

  // Estados para o Configurador do Gradil 3D e Postes
  const [height, setHeight] = useState('1,03m');
  const [model3d, setModel3d] = useState('Slim');
  const [color, setColor] = useState('Verde');
  const [paintType, setPaintType] = useState('Simples');

  // Estado específico para Postes
  const [postBaseType, setPostBaseType] = useState('Com Sapata'); // Com Sapata / Para Chumbar

  // Estados para o Configurador de Portões
  const [gateType, setGateType] = useState('De correr');
  const [gateColor, setGateColor] = useState('Preto');
  const [gateHeight, setGateHeight] = useState('');
  const [gateLength, setGateLength] = useState('');

  const colors = [
    { name: 'Azul', hex: '#1e40af' },
    { name: 'Verde', hex: '#166534' },
    { name: 'Cinza', hex: '#52525b' },
    { name: 'Branco', hex: '#f8fafc', border: true },
    { name: 'Preto', hex: '#09090b' },
  ];

  const gateTypes = [
    'Autoportante',
    'De correr',
    'Pivotante',
    'Camarão',
    'Linha Tubular'
  ];

  const configSummary = useMemo(() => {
    if (productId === 'gradil-3d') {
      return `Gradil 3D ${model3d} (${model3d === 'Slim' ? '4mm' : '5mm'}), Altura ${height}, Cor ${color}, Pintura ${paintType}`;
    }
    if (productId === 'postes-fixacao') {
      return `Poste de Fixação ${postBaseType}, Altura ${height}, Cor ${color}`;
    }
    if (productId === 'portoes-tecnicos') {
      return `Portão ${gateType}, Cor ${gateColor}, Dimensões: ${gateHeight || '?'}m (Alt) x ${gateLength || '?'}m (Comp)`;
    }
    return null;
  }, [productId, model3d, height, color, paintType, gateType, gateColor, gateHeight, gateLength, postBaseType]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Produto não encontrado</h2>
        <button 
          onClick={() => onNavigate('produtos')}
          className="text-blue-600 font-bold flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao catálogo
        </button>
      </div>
    );
  }

  const isGradil3D = productId === 'gradil-3d';
  const isPortao = productId === 'portoes-tecnicos';
  const isPoste = productId === 'postes-fixacao';

  return (
    <div className="bg-white">
      {/* Hero / Back button */}
      <section className={`py-12 border-b border-zinc-200 ${isSurf ? 'bg-blue-50/50' : 'bg-zinc-50'}`}>
        <div className="container mx-auto px-6">
          <button 
            onClick={() => onNavigate(isSurf ? 'esporte' : 'produtos')}
            className="flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors mb-8 font-semibold text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar para {isSurf ? 'Esporte' : 'Indústria'}
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="right">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 block">
                {isSurf ? 'Performance & Surf' : 'Solução Industrial'}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6">{product.name}</h1>
              <p className="text-zinc-600 text-xl leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Configurador Interativo Gradil 3D / Postes (Campos Comuns) */}
              {(isGradil3D || isPoste) && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 space-y-8 mb-8">
                  <h3 className="font-bold text-zinc-900 flex items-center gap-2 uppercase tracking-widest text-xs">
                    <BoxSelect className="w-4 h-4 text-blue-600" /> Especificação Técnica
                  </h3>
                  
                  {/* Tipo de Fixação (Apenas para Postes) */}
                  {isPoste && (
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase">Tipo de Base</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setPostBaseType('Para Chumbar')}
                          className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${postBaseType === 'Para Chumbar' ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600/20' : 'border-zinc-200 bg-white'}`}
                        >
                          <Anchor className={`w-5 h-5 ${postBaseType === 'Para Chumbar' ? 'text-blue-600' : 'text-zinc-400'}`} />
                          <div>
                            <div className={`font-black text-sm ${postBaseType === 'Para Chumbar' ? 'text-blue-700' : 'text-zinc-900'}`}>PARA CHUMBAR</div>
                            <div className="text-[10px] text-zinc-500 font-medium">Instalação em concreto fresco</div>
                          </div>
                        </button>
                        <button
                          onClick={() => setPostBaseType('Com Sapata')}
                          className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${postBaseType === 'Com Sapata' ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600/20' : 'border-zinc-200 bg-white'}`}
                        >
                          <Settings2 className={`w-5 h-5 ${postBaseType === 'Com Sapata' ? 'text-blue-600' : 'text-zinc-400'}`} />
                          <div>
                            <div className={`font-black text-sm ${postBaseType === 'Com Sapata' ? 'text-blue-700' : 'text-zinc-900'}`}>COM SAPATA</div>
                            <div className="text-[10px] text-zinc-500 font-medium">Fixação mecânica / química</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-400 uppercase">Altura Compatível</label>
                    <div className="flex flex-wrap gap-2">
                      {['1,03m', '1,53m', '2,03m'].map((h) => (
                        <button
                          key={h}
                          onClick={() => setHeight(h)}
                          className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all ${height === h ? 'bg-blue-600 border-blue-600 text-white shadow-lg' : 'bg-white border-zinc-200 text-zinc-600 hover:border-blue-400'}`}
                        >
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>

                  {isGradil3D && (
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-zinc-400 uppercase">Modelo (Bitola)</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setModel3d('Slim')}
                          className={`p-3 rounded-xl border text-left transition-all ${model3d === 'Slim' ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600/20' : 'border-zinc-200 bg-white'}`}
                        >
                          <div className={`font-black ${model3d === 'Slim' ? 'text-blue-700' : 'text-zinc-900'}`}>SLIM</div>
                          <div className="text-xs text-zinc-500 font-medium">Espessura: 4,00 mm</div>
                        </button>
                        <button
                          onClick={() => setModel3d('Premium')}
                          className={`p-3 rounded-xl border text-left transition-all ${model3d === 'Premium' ? 'border-blue-600 bg-blue-50 ring-2 ring-blue-600/20' : 'border-zinc-200 bg-white'}`}
                        >
                          <div className={`font-black ${model3d === 'Premium' ? 'text-blue-700' : 'text-zinc-900'}`}>PREMIUM</div>
                          <div className="text-xs text-zinc-500 font-medium">Espessura: 5,00 mm</div>
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-400 uppercase">Cor do Acabamento</label>
                    <div className="flex flex-wrap gap-4">
                      {colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setColor(c.name)}
                          className="group flex flex-col items-center gap-1 focus:outline-none"
                        >
                          <div 
                            className={`w-10 h-10 rounded-full border-4 transition-all ${color === c.name ? 'border-blue-500 scale-110' : 'border-white'} ${c.border ? 'shadow-inner border-zinc-200' : ''}`}
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className={`text-[10px] font-bold uppercase ${color === c.name ? 'text-blue-600' : 'text-zinc-400'}`}>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Configurador Interativo Portões */}
              {isPortao && (
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200 space-y-8 mb-8">
                  <h3 className="font-bold text-zinc-900 flex items-center gap-2 uppercase tracking-widest text-xs">
                    <Settings2 className="w-4 h-4 text-blue-600" /> Especificação de Projeto
                  </h3>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-400 uppercase">Tipo de Abertura Desejada</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {gateTypes.map((t) => (
                        <button
                          key={t}
                          onClick={() => setGateType(t)}
                          className={`px-3 py-2 rounded-lg text-[11px] font-bold border transition-all text-center ${gateType === t ? 'bg-zinc-900 border-zinc-900 text-white shadow-md' : 'bg-white border-zinc-200 text-zinc-600 hover:border-blue-400'}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-400 uppercase flex items-center gap-2">
                      <Maximize2 className="w-3 h-3" /> Dimensões do Vão (Metros)
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[10px] text-zinc-400 font-bold uppercase">Altura (m)</span>
                        <input 
                          type="number" 
                          placeholder="Ex: 2.10" 
                          step="0.01"
                          value={gateHeight}
                          onChange={(e) => setGateHeight(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-zinc-400 font-bold uppercase">Comprimento (m)</span>
                        <input 
                          type="number" 
                          placeholder="Ex: 4.50" 
                          step="0.01"
                          value={gateLength}
                          onChange={(e) => setGateLength(e.target.value)}
                          className="w-full bg-zinc-50 border border-zinc-200 rounded-lg p-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-zinc-400 uppercase">Cor do Acabamento</label>
                    <div className="flex flex-wrap gap-4">
                      {colors.map((c) => (
                        <button
                          key={c.name}
                          onClick={() => setGateColor(c.name)}
                          className="group flex flex-col items-center gap-1 focus:outline-none"
                        >
                          <div 
                            className={`w-10 h-10 rounded-full border-4 transition-all ${gateColor === c.name ? 'border-blue-500 scale-110' : 'border-white'} ${c.border ? 'shadow-inner border-zinc-200' : ''}`}
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className={`text-[10px] font-bold uppercase ${gateColor === c.name ? 'text-blue-600' : 'text-zinc-400'}`}>{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <a 
                  href="#orcamento"
                  className="bg-zinc-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-lg"
                >
                  Confirmar e Solicitar Orçamento <Send className="w-4 h-4" />
                </a>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="left" className="relative lg:sticky lg:top-24">
              <img 
                src={product.image} 
                alt={product.name} 
                className="rounded-3xl shadow-2xl w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {(isGradil3D || isPortao || isPoste) && (
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 hidden md:block">
                  <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-2">Configuração do Projeto</div>
                  <div className="text-sm font-bold text-zinc-800 space-y-1">
                    {isGradil3D ? (
                      <>
                        <p>• {model3d} ({model3d === 'Slim' ? '4,0mm' : '5,0mm'})</p>
                        <p>• Altura: {height}</p>
                        <p>• Cor: {color}</p>
                      </>
                    ) : isPoste ? (
                      <>
                        <p>• Base: {postBaseType}</p>
                        <p>• Altura: {height}</p>
                        <p>• Cor: {color}</p>
                      </>
                    ) : (
                      <>
                        <p>• Modelo: {gateType}</p>
                        <p>• Cor: {gateColor}</p>
                        <p>• Vão: {gateHeight || '0'}m x {gateLength || '0'}m</p>
                      </>
                    )}
                  </div>
                </div>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-3 mb-8">
                  <Ruler className="text-blue-600" /> Detalhes Técnicos
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-zinc-50 rounded-xl border border-zinc-100">
                      <CheckCircle2 className="text-blue-600 w-5 h-5 flex-shrink-0 mt-1" />
                      <span className="text-zinc-700 font-bold text-sm uppercase tracking-wide">{feature}</span>
                    </div>
                  ))}
                  {(isPortao || isPoste) && (
                    <>
                      <div className="flex gap-4 p-5 bg-zinc-50 rounded-xl border border-zinc-100">
                        <CheckCircle2 className="text-blue-600 w-5 h-5 flex-shrink-0 mt-1" />
                        <span className="text-zinc-700 font-bold text-sm uppercase tracking-wide">Tratamento Anticorrosivo Pesado</span>
                      </div>
                      <div className="flex gap-4 p-5 bg-zinc-50 rounded-xl border border-zinc-100">
                        <CheckCircle2 className="text-blue-600 w-5 h-5 flex-shrink-0 mt-1" />
                        <span className="text-zinc-700 font-bold text-sm uppercase tracking-wide">Pintura Poliéster Eletrostática</span>
                      </div>
                    </>
                  )}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-3 mb-8">
                  <Factory className="text-blue-600" /> Manufatura de Precisão
                </h2>
                <div className="prose prose-zinc max-w-none text-zinc-600">
                  <p className="text-lg leading-relaxed">
                    {isPoste ? 
                      'Nossos sistemas de postes são fabricados com aço de alta qualidade e bitola adequada para suportar as tensões de fechamentos perimetrais. A opção "Para Chumbar" oferece maior resistência mecânica em instalações novas, enquanto o modelo "Com Sapata" permite flexibilidade em pisos já concretados.' :
                      isPortao ? 
                      'Nossos portões sob medida são projetados para durabilidade extrema em ciclos de abertura frequentes. Seja no modelo Autoportante, que não utiliza trilhos no solo, ou na versátil Linha Tubular, garantimos encaixes perfeitos e acabamento que resiste ao tempo.' : 
                      'A precisão da nossa linha industrial garante que cada sistema de cercamento seja entregue pronto para uma montagem eficiente e segura.'
                    }
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-1">
              <ScrollReveal direction="left" className="sticky top-24">
                <div id="orcamento" className="bg-zinc-900 rounded-2xl p-8 text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-blue-500">Orçamento de Projeto</h3>
                  <p className="text-zinc-400 text-sm mb-8">
                    {(isGradil3D || isPortao || isPoste) ? 'Sua especificação técnica foi anexada ao formulário.' : 'Fale com nossa engenharia sobre seu projeto.'}
                  </p>
                  <form className="space-y-4">
                    <input 
                      type="text" 
                      placeholder="Seu Nome" 
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                    <input 
                      type="email" 
                      placeholder="E-mail Profissional" 
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-sm focus:outline-none focus:border-blue-500"
                    />
                    {(isGradil3D || isPortao || isPoste) && (
                      <div className="p-3 bg-zinc-800/50 border border-zinc-700 rounded-lg">
                        <span className="text-[10px] font-black text-blue-500 uppercase">Resumo da Solicitação:</span>
                        <p className="text-xs text-zinc-300 mt-1">{configSummary}</p>
                      </div>
                    )}
                    <textarea 
                      placeholder="Conte sobre sua obra ou necessidade específica..." 
                      className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3 text-sm h-32 resize-none focus:outline-none focus:border-blue-500"
                    ></textarea>
                    <button className="w-full bg-blue-600 py-4 rounded-lg font-black hover:bg-blue-700 transition-all uppercase tracking-widest text-xs">
                      Solicitar Cotação Técnica
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
