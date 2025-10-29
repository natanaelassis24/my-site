import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4" style={{ height: '96px' }}>
        {/* Logo */}
        <div className="flex items-center gap-3 h-full">
          <div className="h-full flex items-center">
            <img
              src="/images/logo.png"
              alt="Logo Ricardo Pinturas"
              className="h-full w-auto object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Ricardo Pinturas</h1>
            <p className="text-xs text-gray-500">Melhores pintores e materiais</p>
          </div>
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-6 h-full">
          <Link href="/" className="text-sm text-gray-700 hover:text-black transition-colors">
            Início
          </Link>
          <Link href="/servicos" className="text-sm text-gray-700 hover:text-black transition-colors">
            Serviços
          </Link>
          <Link href="/sobre" className="text-sm text-gray-700 hover:text-black transition-colors">
            Sobre
          </Link>
          <Link href="/contato" className="text-sm text-gray-700 hover:text-black transition-colors">
            Contato
          </Link>
          <button className="ml-3 bg-blue-400 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition-colors">
            Peça um Orçamento
          </button>
        </nav>
      </div>
    </header>
  );
}
