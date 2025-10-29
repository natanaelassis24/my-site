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
    <footer className="bg-gray-100 mt-12 border-t border-gray-200 relative">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">

        {/* Ícones de redes sociais */}
        <div className="flex justify-center gap-6 text-gray-700 text-2xl mb-6">
          <a href="https://www.facebook.com/seuperfil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/seuperfil" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
            <FaInstagram />
          </a>
          <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-600">
            <FaWhatsapp />
          </a>
          <a href="mailto:contato@seudominio.com" className="hover:text-red-600">
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright centralizado */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ricardo Pinturas. Todos os direitos reservados.
        </div>

        {/* Assinatura Yggdrasil no canto direito */}
        <div className="absolute right-6 bottom-6 flex flex-col items-center text-xs text-gray-400">
          <span className="mb-1 text-gray-500">Desenvolvido por</span>
          <a
            href="https://www.yggdrasil.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/yggdrasil.png" // 🖼️ sua logo aqui
              alt="Logo Yggdrasil"
              width={60}   // 👈 logo menor
              height={22}  // 👈 logo menor
            />
            <span className="mt-1 font-semibold text-gray-600">Yggdrasil</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
