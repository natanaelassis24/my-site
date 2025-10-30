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
                className="relative bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                {/* 🔁 Carrossel de imagens */}
                {images.length > 0 ? (
                  <Carousel images={images} />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg text-gray-400 mb-4">
                    <span>Sem imagens</span>
                  </div>
                )}

                <h4 className="font-semibold text-lg text-gray-800 mt-4">{name}</h4>
                <p className="mt-3 text-gray-600 leading-relaxed">{message}</p>

                {/* 🗑️ Botão de exclusão */}
                <button
                  onClick={() => handleDelete(id)}
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// 🔁 Carrossel simples e automático
function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // muda a cada 4 segundos
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="w-full h-48 relative rounded-lg overflow-hidden mb-4">
      <Image
        src={images[index]}
        alt={`Imagem ${index + 1}`}
        fill
        unoptimized
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
