// src/comercio/components/Header.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white text-gray-800 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Loja Online
        </Link>

        <nav className="flex items-center space-x-6">
          <Link href="/home" className={`hover:text-blue-500 transition-colors ${pathname === '/home' ? 'text-blue-500 font-bold' : ''}`}>
            Home
          </Link>
          <Link href="/" className={`hover:text-blue-500 transition-colors ${pathname === '/' ? 'text-blue-500 font-bold' : ''}`}>
            Produtos
          </Link>
          <Link href="/about" className={`hover:text-blue-500 transition-colors ${pathname === '/about' ? 'text-blue-500 font-bold' : ''}`}>
            Sobre
          </Link>
        </nav>

        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;