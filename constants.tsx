
import React from 'react';
import { 
  Building2, 
  Factory, 
  MapPin, 
  Layers, 
  Settings2, 
  Construction,
  Users,
  ShieldAlert,
  Ruler,
  Zap,
  Box,
  Waves,
  Activity,
  Target,
  ClipboardCheck,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import { Product, SurfProduct, Solution, ApplicationArea, TechnicalDifferential } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'gradil-3d',
    name: 'Sistema Gradil 3D',
    description: 'A base modular para cercamentos inteligentes. Adaptável em altura e resistência conforme a necessidade de segurança do local.',
    image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=800&auto=format&fit=crop',
    features: ['Alturas Variáveis', 'Proteção UV Industrial', 'Núcleo de Aço Certificado']
  },
  {
    id: 'postes-fixacao',
    name: 'Sistemas de Postes de Fixação',
    description: 'Estruturas de suporte projetadas para integração total com a linha Gradil. Opções de fixação versáteis para qualquer tipo de solo ou fundação.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop',
    features: ['Modelo Para Chumbar', 'Modelo Com Sapata', 'Tratamento Anticorrosivo']
  },
  {
    id: 'totens-desnivel',
    name: 'Totens de Desnível',
    description: 'A resposta definitiva para topografias complexas. Engenharia aplicada para manter o nível estético em terrenos com aclive.',
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800&auto=format&fit=crop',
    features: ['Compensação de Ângulo', 'Zero Degraus Estéticos', 'Estabilidade Estrutural']
  },
  {
    id: 'portoes-tecnicos',
    name: 'Sistemas de Portões Sob Medida',
    description: 'Fabricação personalizada de acessos técnicos. De modelos autoportantes a pivotantes, projetados milimetricamente para o seu vão.',
    image: 'https://images.unsplash.com/photo-1590059345203-9d41b65e6d0a?q=80&w=800&auto=format&fit=crop',
    features: ['Vãos Customizados', 'Automação Compatível', 'Engenharia de Abertura']
  }
];

export const SURF_PRODUCTS: SurfProduct[] = [
  {
    id: 'surfeasy',
    name: 'Surfeasy (Crosssurf)',
    description: 'Solução de condicionamento que traduz a fluidez do mar para a precisão do aço industrial. Foco total em core e estabilidade.',
    image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop',
    features: ['Estrutura High-Duty', 'Prancha de Compensado Naval', 'Simulação de Grab'],
    benefits: ['Equilíbrio Dinâmico', 'Mobilidade Articular', 'Treino sem Impacto'],
    target: 'Atletas de Alta Performance'
  },
  {
    id: 'snapboard',
    name: 'Snapboard (Alsurf)',
    description: 'Equipamento compacto para resolver a falta de tempo de treino. Portabilidade sem abrir mão da robustez Gradilcolor.',
    image: 'https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?q=80&w=800&auto=format&fit=crop',
    features: ['Compacto e Leve', 'Superfície de Alta Aderência', 'Base em Aço Carbono'],
    benefits: ['Explosão Muscular', 'Agilidade Lateral', 'Prevenção de Lesões'],
    target: 'Surfistas Urbanos'
  }
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'analise-cenario',
    title: 'Análise de Cenário',
    description: 'Não entregamos produto sem entender o desnível, a segurança e o uso do espaço.',
    icon: <ClipboardCheck className="w-8 h-8" />
  },
  {
    id: 'adequacao-tecnica',
    title: 'Adequacao Técnica',
    description: 'O produto se adapta ao seu projeto, eliminando improvisos e "gambiarras" de obra.',
    icon: <Cpu className="w-8 h-8" />
  },
  {
    id: 'resultado-duravel',
    title: 'Foco no Resultado',
    description: 'Sistemas pensados para durabilidade extrema e baixo custo de manutenção a longo prazo.',
    icon: <ShieldCheck className="w-8 h-8" />
  }
];

export const APPLICATIONS: ApplicationArea[] = [
  { id: 'ind', name: 'Indústrias', icon: <Factory className="w-6 h-6" />, imageUrl: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=800&auto=format&fit=crop' },
  { id: 'esp', name: 'Esporte e Bem-estar', icon: <Zap className="w-6 h-6" />, imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop' },
  { id: 'corp', name: 'Ambientes Corporativos', icon: <Building2 className="w-6 h-6" />, imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop' }
];

export const DIFFERENTIALS: TechnicalDifferential[] = [
  { title: 'Problema Resolvido', description: 'Nossa engenharia foca no desafio do cliente, não apenas na venda do material.' },
  { title: 'Adaptabilidade Total', description: 'De perímetros industriais a simuladores de surf: a lógica da solução é a mesma.' },
  { title: 'Sem Improvisos', description: 'Peças e acessórios desenhados para encaixes precisos e performance máxima.' }
];
