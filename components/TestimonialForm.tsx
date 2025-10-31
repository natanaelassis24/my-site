"use client";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import UploadImagem from "@/components/UploadImagem";

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // 👇 adiciona cada nova imagem enviada
  const handleUploadComplete = (url: string) => {
    if (imageUrls.length < 3) {
      setImageUrls((prev) => [...prev, url]);
    } else {
      alert("⚠️ Você pode enviar no máximo 3 imagens.");
    }
  };

  // 👇 remove imagem antes de enviar
  const handleRemoveImage = (url: string) => {
    setImageUrls((prev) => prev.filter((img) => img !== url));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "depoimentos"), {
        name,
        message,
        images: imageUrls,
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

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 mt-8"
      >
        {/* Nome */}
        <input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Mensagem */}
        <textarea
          placeholder="Seu depoimento"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Upload */}
        <div className="flex flex-col items-center justify-center">
          <UploadImagem onUploadComplete={handleUploadComplete} />

          {imageUrls.length >= 3 && (
            <p className="text-sm text-red-500 mt-2">
              ⚠️ Limite máximo de 3 imagens atingido.
            </p>
          )}
        </div>

        {/* Pré-visualização */}
        {imageUrls.length > 0 && (
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {imageUrls.map((url, idx) => (
              <div key={idx} className="relative">
                <img
                  src={url}
                  alt={`preview-${idx}`}
                  className="w-24 h-24 object-cover rounded-lg border"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(url)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Botão enviar */}
        <button
          type="submit"
          disabled={loading || !name || !message}
          className="bg-blue-400 text-white px-6 py-3 rounded-full mt-6 hover:bg-blue-500 transition-colors disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar Depoimento"}
        </button>
      </form>
    </section>
  );
}
