
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pelo contato! Nossa equipe técnica retornará em breve.');
    setFormData({ nome: '', email: '', empresa: '', mensagem: '' });
  };

  return (
    <section id="contato" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-zinc-100">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-zinc-900 text-white p-12">
            <h2 className="text-3xl font-bold mb-8">Solicite um Orçamento Técnico</h2>
            <p className="text-zinc-400 mb-12">
              Precisa de um cercamento ou solução adequada ao seu projeto? 
              Nossa equipe está pronta para orientar sobre as melhores práticas e custos.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-500" />
                <div>
                  <h4 className="font-bold uppercase text-xs text-zinc-500 tracking-widest mb-1">Telefone</h4>
                  <p className="text-lg">+55 (00) 0000-0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-500" />
                <div>
                  <h4 className="font-bold uppercase text-xs text-zinc-500 tracking-widest mb-1">E-mail</h4>
                  <p className="text-lg">comercial@gradilcolor.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500" />
                <div>
                  <h4 className="font-bold uppercase text-xs text-zinc-500 tracking-widest mb-1">Localização</h4>
                  <p className="text-lg">Parque Industrial, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-700 uppercase mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-700 uppercase mb-2">E-mail Profissional</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                    placeholder="email@empresa.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 uppercase mb-2">Empresa / Obra</label>
                <input 
                  type="text" 
                  value={formData.empresa}
                  onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="Nome da sua empresa"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-700 uppercase mb-2">Mensagem (Descreva seu projeto)</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded p-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                  placeholder="Alturas, metragens ou desafios técnicos..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-zinc-900 text-white font-bold py-5 rounded hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 shadow-lg"
              >
                Enviar Solicitação de Orçamento
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
