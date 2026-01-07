
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TechnicalAdvisor from './components/TechnicalAdvisor';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SurfPage from './pages/SurfPage';

export type PageId = 'home' | 'produtos' | 'solucoes' | 'sobre' | 'contato' | 'detalhe-produto' | 'esporte';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProductId]);

  const handleNavigateToProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('detalhe-produto');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={setCurrentPage} onProductClick={handleNavigateToProduct} />;
      case 'produtos': return <ProductsPage onProductClick={handleNavigateToProduct} />;
      case 'solucoes': return <SolutionsPage />;
      case 'sobre': return <AboutPage />;
      case 'contato': return <ContactPage />;
      case 'esporte': return <SurfPage onProductClick={handleNavigateToProduct} />;
      case 'detalhe-produto': return <ProductDetailPage productId={selectedProductId} onNavigate={setCurrentPage} />;
      default: return <HomePage onNavigate={setCurrentPage} onProductClick={handleNavigateToProduct} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Header current={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow pt-16 md:pt-0">
        {renderPage()}
      </main>
      
      <Footer onNavigate={setCurrentPage} />
      
      <TechnicalAdvisor />
      <WhatsAppButton />
    </div>
  );
};

export default App;
