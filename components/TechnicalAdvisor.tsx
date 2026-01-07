
import React, { useState } from 'react';
import { Bot, X, Send, Loader2, Sparkles } from 'lucide-react';
import { askTechnicalAdvisor } from '../services/geminiService';

const TechnicalAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    
    const userMsg = query;
    setQuery('');
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askTechnicalAdvisor(userMsg);
    
    setChatHistory(prev => [...prev, { role: 'bot', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-[90vw] md:w-96 overflow-hidden border border-zinc-200 flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-zinc-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-600 rounded">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Assistente Técnico AI</h3>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-zinc-800 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-zinc-50">
            {chatHistory.length === 0 && (
              <div className="text-center py-8">
                <Bot className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
                <p className="text-zinc-500 text-sm px-6">
                  Olá! Tenho conhecimento técnico sobre cercamentos. Como posso ajudar no seu projeto hoje?
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <button 
                    onClick={() => setQuery("O que é o Gradil 3D?")}
                    className="text-[10px] bg-white border border-zinc-200 px-2 py-1 rounded hover:bg-zinc-100"
                  >
                    O que é Gradil 3D?
                  </button>
                  <button 
                    onClick={() => setQuery("Cercamento para terreno irregular")}
                    className="text-[10px] bg-white border border-zinc-200 px-2 py-1 rounded hover:bg-zinc-100"
                  >
                    Terrenos Irregulares
                  </button>
                </div>
              </div>
            )}
            {chatHistory.map((chat, i) => (
              <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-sm ${
                  chat.role === 'user' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white border border-zinc-200 text-zinc-800 shadow-sm'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-200 p-3 rounded-lg">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="Dúvida técnica..."
                className="flex-grow text-sm border border-zinc-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button 
                onClick={handleAsk}
                disabled={isLoading}
                className="bg-zinc-900 text-white p-2 rounded-lg hover:bg-zinc-800 disabled:opacity-50 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
        >
          <div className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
          </div>
          <Sparkles className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default TechnicalAdvisor;
