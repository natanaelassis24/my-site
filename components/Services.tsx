import Image from "next/image";

const services = [
  { title: "Pintura Interna", img: "/images/Pintura Interna.png" },
  { title: "Pintura Externa", img: "/images/Pintura Externa.png" },
  { title: "Restauração e Pintura Piscinas", img: "/images/Restauração e Pintura.png" },
  { title: "Restauração e Pintura Quadra", img: "/images/Restauração e Pintura Quadra.png" },
];

export default function Services() {
  return (
    <section className="py-16">
      <h3 className="text-center text-gray-500 uppercase tracking-wider">Nossos Melhores</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">Serviços</h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map(({ title, img }, i) => (
          <div key={i} className="relative h-48 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <Image
              src={img}
              alt={`Serviço de ${title}`}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4 rounded-2xl">
              <h4 className="text-white font-semibold">{title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
