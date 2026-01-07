
import React, { useState, useEffect } from 'react';

const IMAGES = [
  "https://images.unsplash.com/photo-1518005020480-478a14ab75f4?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2000&auto=format&fit=crop"
];

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {IMAGES.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img 
              src={img} 
              className="w-full h-full object-cover grayscale"
              alt={`Industrial View ${index + 1}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-3 mb-6 border border-zinc-700 rounded-full text-zinc-400 text-xs font-semibold tracking-widest uppercase animate-pulse">
            Sistemas de Cercamento & Engenharia
          </span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight mb-8">
            Soluções completas em <br/>
            <span className="text-blue-500">segurança perimetral</span> técnica.
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            Do Gradil 3D padronizado aos Totens de Desnível sob medida. Engenharia aplicada para resolver desafios complexos de terreno e proteção.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contato" 
              className="px-8 py-4 bg-white text-zinc-900 font-bold rounded hover:bg-zinc-200 transition-all text-center flex items-center justify-center gap-2"
            >
              Consultoria Técnica
              <span className="text-xl">👉</span>
            </a>
            <a 
              href="#produtos" 
              className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-bold rounded hover:bg-zinc-800 transition-all text-center"
            >
              Conhecer Soluções
            </a>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-24 left-6 flex gap-2">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1 transition-all duration-300 ${index === currentImage ? 'w-8 bg-blue-500' : 'w-4 bg-zinc-700'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Visual indicator for scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-zinc-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
