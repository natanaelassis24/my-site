import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const whatsappNumber = "5512992164758"; // Coloque seu número com DDI + DDD
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de pedir um orçamento.");

  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Ícones de redes sociais */}
        <div className="flex justify-center gap-6 text-gray-700 text-2xl">
          <a
            href="https://www.facebook.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/seuperfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="mailto:contato@seudominio.com"
            className="hover:text-red-600 transition-colors"
            aria-label="E-mail"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-200 mt-8 mb-4"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ricardo Pinturas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
