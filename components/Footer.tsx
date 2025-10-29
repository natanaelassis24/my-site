import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "5512992164758";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de pedir um orçamento.");

  return (
    <footer className="bg-gray-100 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-10 text-center">

        {/* Linha superior: Ícones + Logo Yggdrasil */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-6">

          {/* Ícones sociais */}
          <div className="flex justify-center gap-6 text-gray-700 text-2xl">
            <a href="https://www.facebook.com/seuperfil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/seuperfil" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
              <FaInstagram />
            </a>
            <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
              <FaWhatsapp />
            </a>
            <a href="mailto:contato@seudominio.com" className="hover:text-red-600 transition-colors">
              <FaEnvelope />
            </a>
          </div>

          {/* Logo Yggdrasil */}
          <a
            href="https://my-next-site-steel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
              <Image
                src="/images/yggdrasil.png" // 🖼️ sua logo
                alt="Logo Yggdrasil"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Copyright centralizado */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ricardo Pinturas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
