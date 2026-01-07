
import React from 'react';
import { APPLICATIONS } from '../constants';

const Applications: React.FC = () => {
  return (
    <section id="aplicações" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">Onde Aplicar</h2>
            <p className="text-zinc-600">Sistemas versáteis projetados para atender as demandas mais exigentes de diferentes setores.</p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-1 bg-blue-600"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPLICATIONS.map((app) => (
            <div key={app.id} className="group relative h-80 overflow-hidden rounded-lg">
              <img 
                src={app.imageUrl} 
                alt={app.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="bg-blue-600 p-2 w-fit rounded-md mb-4 text-white">
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">{app.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
