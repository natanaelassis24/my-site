"use client";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Image from "next/image";
import { Trash2 } from "lucide-react"; // 👈 Novo ícone moderno de lixeira

// Tipo do depoimento
type Testimonial = {
  id: string;
  name: string;
  message: string;
  images: string[];
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // 🔥 Busca os depoimentos em tempo real
  useEffect(() => {
    const q = query(collection(db, "depoimentos"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => {
        const d = doc.data() as any;
        return {
          id: doc.id,
          name: d.name,
          message: d.message,
          images: d.images || [],
        };
      });
      setTestimonials(data);
    });
    return () => unsubscribe();
  }, []);

  // 🗑️ Função para excluir um depoimento
  const handleDelete = async (id: string) => {
    if (confirm("Tem certeza que deseja excluir este depoimento?")) {
      await deleteDoc(doc(db, "depoimentos", id));
      alert("🗑️ Depoimento excluído com sucesso!");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-center text-gray-500 uppercase tracking-wider">
          O que dizem nossos clientes
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-2">
          Depoimentos
        </h2>

        {testimonials.length === 0 ? (
          <p className="mt-10 text-center text-gray-400">
            Nenhum depoimento ainda.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ id, name, message, images }) => (
              <div
                key={id}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {images.length > 0 ? (
                    <Carousel images={images} />
                  ) : (
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg text-gray-400 mb-4">
                      <span>Sem imagens</span>
                    </div>
                  )}

                  <h4 className="font-semibold text-lg text-gray-800 mt-4">{name}</h4>
                  <p className="mt-3 text-gray-600 leading-relaxed">{message}</p>
                </div>

                {/* 🔻 Botão de excluir reposicionado */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => handleDelete(id)}
                    className="flex items-center gap-2 text-red-500 hover:text-red-700 text-sm font-medium transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// 🔁 Carrossel com botões e indicadores
function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // autoplay a cada 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
      <Image
        src={images[index]}
        alt={`Imagem ${index + 1}`}
        fill
        unoptimized
        style={{ objectFit: "cover" }}
      />

      {/* 🔘 Indicadores */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-gray-400/70"
            }`}
          />
        ))}
      </div>

      {/* ⬅️➡️ Botões */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/60"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}
