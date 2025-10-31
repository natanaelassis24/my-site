"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = "5512992164758";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de pedir um orçamento.");

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-[999999]">
      <div className="flex items-center justify-between px-4 h-24 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Logo Ricardo Pinturas"
            className="h-16 w-auto object-contain"
          />
          <div>
            <h1 className="text-lg font-semibold">Ricardo Pinturas</h1>
            <p className="text-xs text-gray-500">Melhores pintores e materiais</p>
          </div>
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-gray-700 hover:text-black">Início</Link>
          <Link href="/servicos" className="text-sm text-gray-700 hover:text-black">Serviços</Link>
          <Link href="/sobre" className="text-sm text-gray-700 hover:text-black">Sobre</Link>
          <Link href="/contato" className="text-sm text-gray-700 hover:text-black">Contato</Link>
          <Link href="/depoimentos" className="text-sm text-gray-700 hover:text-black">Depoimentos</Link>
          <button
            onClick={openWhatsApp}
            className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors"
          >
            Peça um Orçamento
          </button>
        </nav>

        {/* Botão hamburger mobile */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-2 absolute top-24 left-0 w-full z-[999999]">
          <Link href="/" className="block text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Início</Link>
          <Link href="/servicos" className="block text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Serviços</Link>
          <Link href="/sobre" className="block text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Sobre</Link>
          <Link href="/contato" className="block text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Contato</Link>
          <Link href="/depoimentos" className="block text-gray-700 hover:text-black" onClick={() => setMenuOpen(false)}>Depoimentos</Link>
          <button
            onClick={openWhatsApp}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600 transition-colors"
          >
            Peça um Orçamento
          </button>
        </div>
      )}
    </header>
  );
}
