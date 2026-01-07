// Fix: Added React import to fix "Cannot find namespace 'React'" error when using React.ReactNode
import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface SurfProduct extends Product {
  benefits: string[];
  target: string;
}

export interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ApplicationArea {
  id: string;
  name: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface TechnicalDifferential {
  title: string;
  description: string;
}