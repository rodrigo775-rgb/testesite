
import React from 'react';
import Contact from '../components/Contact';
import ScrollReveal from '../components/ScrollReveal';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-zinc-900">Fale com a Gradilcolor</h1>
            <p className="text-zinc-600 text-xl max-w-2xl mx-auto">
              Estamos prontos para analisar seu projeto e fornecer a melhor solução técnica em cercamento.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 border-b border-zinc-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <Phone className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-zinc-900">Telefone Comercial</h4>
              <p className="text-zinc-500 text-sm mt-1">+55 (00) 0000-0000</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <Mail className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-zinc-900">E-mail Técnico</h4>
              <p className="text-zinc-500 text-sm mt-1">projetos@gradilcolor.com.br</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <MapPin className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-zinc-900">Escritório Central</h4>
              <p className="text-zinc-500 text-sm mt-1">Parque Industrial II, PR</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-4">
                <Clock className="text-blue-600 w-6 h-6" />
              </div>
              <h4 className="font-bold text-zinc-900">Horário</h4>
              <p className="text-zinc-500 text-sm mt-1">Seg - Sex, 08h às 18h</p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-24">
        <Contact />
      </div>

      <section className="h-96 bg-zinc-200 grayscale">
        {/* Placeholder para Mapa */}
        <div className="w-full h-full flex items-center justify-center bg-zinc-300 relative">
          <MapPin className="w-12 h-12 text-zinc-400 absolute" />
          <p className="text-zinc-500 font-bold uppercase tracking-widest">Mapa de Localização Industrial</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
