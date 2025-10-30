"use client";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import UploadImagem from "@/components/UploadImagem"; // componente de upload

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrls, setImageUrls] = useState([]); // várias imagens
  const [loading, setLoading] = useState(false);

  // adiciona cada nova imagem enviada
  const handleUploadComplete = (url) => {
    if (imageUrls.length < 3) {
      setImageUrls((prev) => [...prev, url]);
    } else {
      alert("Você pode enviar no máximo 3 imagens.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "depoimentos"), {
        name,
        message,
        images: imageUrls, // salva todas as imagens
        createdAt: Timestamp.now(),
      });

      setName("");
      setMessage("");
      setImageUrls([]);
      alert("✅ Depoimento enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar depoimento:", error);
      alert("❌ Erro ao enviar o depoimento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white rounded-[32px] shadow-md max-w-3xl mx-auto mt-12 px-6 sm:px-10">
      <h3 className="text-center text-gray-500 uppercase tracking-wider text-sm">
        Deixe seu depoimento
      </h3>
      <h2 className="text-3xl font-bold text-center text-gray-900 mt-2">
        Compartilhe sua experiência
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          placeholder="Seu depoimento"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* 👇 Upload de várias imagens */}
        <UploadImagem onUploadComplete={handleUploadComplete} />

        {/* 👇 Pré-visualização */}
        {imageUrls.length > 0 && (
          <div className="flex gap-3 justify-center mt-4">
            {imageUrls.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`preview-${idx}`}
                className="w-24 h-24 object-cover rounded-lg border"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !name || !message}
          className="bg-blue-400 text-white px-6 py-3 rounded-full mt-4 hover:bg-blue-500 transition-colors disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar Depoimento"}
        </button>
      </form>
    </section>
  );
}