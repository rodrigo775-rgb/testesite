
import React from 'react';
import { PageId } from '../App';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-16 bg-zinc-900 text-zinc-400 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              <span className="font-bold text-xl tracking-tighter text-white">GRADILCOLOR</span>
            </div>
            <p className="text-sm leading-relaxed">
              Soluções técnicas em cercamento e engenharia perimetral para indústrias, condomínios e infraestruturas urbanas.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-500 transition-colors">Início</button></li>
              <li><button onClick={() => onNavigate('produtos')} className="hover:text-blue-500 transition-colors">Produtos</button></li>
              <li><button onClick={() => onNavigate('solucoes')} className="hover:text-blue-500 transition-colors">Soluções Técnicas</button></li>
              <li><button onClick={() => onNavigate('sobre')} className="hover:text-blue-500 transition-colors">Sobre a Indústria</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Links Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('contato')} className="hover:text-blue-500 transition-colors">Solicitar Orçamento</button></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Catálogo PDF</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>comercial@gradilcolor.com.br</li>
              <li>+55 (00) 0000-0000</li>
              <li>Parque Industrial, Paraná - Brasil</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>
            &copy; {new Date().getFullYear()} Gradilcolor Soluções Industriais. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
