import Image from "next/image";

const services = [
  { title: "Interior Painting", img: "/images/hero.jpg" },
  { title: "Exterior Painting", img: "/images/hero.jpg" },
  { title: "Fiber Cement Trim & Siding", img: "/images/hero.jpg" },
  { title: "Board and Batten Siding", img: "/images/hero.jpg" },
];

export default function Services() {
  return (
    <section className="py-16">
      <h3 className="text-center text-gray-500 uppercase tracking-wider">Our Best</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">Services</h2>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map(({ title, img }, i) => (
          <div key={i} className="relative h-48 rounded-2xl overflow-hidden">
            <Image
              src={img}
              alt={`${title} service`}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <h4 className="text-white font-semibold">{title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
