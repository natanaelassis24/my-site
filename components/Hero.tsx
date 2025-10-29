import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-8">
        
        {/* Banner / Imagem da esquerda */}
        <div className="w-full md:w-1/2 relative rounded-[48px] overflow-hidden shadow-lg h-64 sm:h-72 md:h-80 lg:h-96">
          <Image
            src="/images/banner.png" // Banner
            alt="Promoção Ricardo Pinturas"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <p className="text-sm text-gray-500 uppercase tracking-wider">Serviços de pintura</p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
            Ricardo Pinturas <br /> Profissionais de Qualidade
          </h2>
          <p className="mt-6 text-gray-600">
            Serviços profissionais de pintura para interiores e exteriores, com materiais de alta qualidade.
          </p>
          <button className="mt-8 px-6 py-3 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition-colors">
            Saiba Mais
          </button>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div className="absolute -right-8 -top-8 w-28 h-28 bg-blue-400 rounded-full opacity-30"></div>
    </section>
  );
}
