
import React from 'react';
import { DIFFERENTIALS } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const TechnicalDetails: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y border-zinc-200">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8">Diferenciais Técnicos</h2>
            <div className="space-y-8">
              {DIFFERENTIALS.map((diff, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 mb-1 uppercase tracking-tight">{diff.title}</h3>
                    <p className="text-zinc-600">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-zinc-100 rounded-lg p-8 relative overflow-hidden flex items-center justify-center">
              {/* Mockup or Illustration of Technical Specs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-zinc-900/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 border-2 border-dashed border-zinc-300 p-8 rounded flex flex-col items-center">
                 <div className="grid grid-cols-5 gap-2 mb-8">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className={`h-12 w-1 ${i % 3 === 0 ? 'bg-zinc-800' : 'bg-zinc-400'} rounded-full`}></div>
                    ))}
                 </div>
                 <div className="text-center">
                    <span className="text-5xl font-black text-zinc-900">4.5mm</span>
                    <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mt-2">Bitola do Aço</p>
                 </div>
              </div>
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 md:right-0 bg-zinc-900 text-white p-8 rounded-lg shadow-2xl hidden md:block">
              <div className="text-4xl font-bold mb-1">10+</div>
              <div className="text-xs uppercase tracking-widest text-zinc-400">Anos de Durabilidade Estimada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalDetails;
