// src/comercio/app/about/page.tsx
import React from 'react';

export default function AboutPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sobre</h1>
      
      <p className="text-gray-700 mt-4">
        Agradeço muito a oportunidade dada pela VSolTech Dev.
      </p>
      <p className="text-gray-700 mt-4">
        Este projeto foi desenvolvido como um teste prático com desenvolvimento web com Next.js, TypeScript e Tailwind CSS.
      </p>

      {/* Texto de agradecimento */}
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <p className="text-gray-600 italic">
          Agradeço por dedicar seu tempo para analisar este projeto. Fico à disposição para qualquer dúvida e muito obrigado.
        </p>
      </div>
    </main>
  );
}