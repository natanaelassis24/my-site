import Image from "next/image";

export default function About() {
  return (
    <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="w-full h-64 rounded-2xl overflow-hidden relative">
        <Image src="/images/hero.jpg" alt="About" fill className="object-cover" />
      </div>
      <div>
        <p className="text-sm text-gray-400 uppercase">Know More</p>
        <h3 className="text-2xl font-bold mt-2">About Us</h3>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. 
          Serviço de pintura profissional garantindo qualidade e acabamento impecável.
        </p>
        <button className="mt-6 px-5 py-3 bg-brandRed text-white rounded-full">Read More</button>
      </div>
    </section>
  );
}
