"use client";
import { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function TestimonialForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageUrl = "";

    try {
      // Faz upload da imagem se houver
      if (image) {
        const imageRef = ref(storage, `depoimentos/${Date.now()}_${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
      }

      // Envia dados para o Firestore
      await addDoc(collection(db, "depoimentos"), {
        name,
        message,
        image: imageUrl,
        createdAt: Timestamp.now(),
      });

      // Limpa o formulário
      setName("");
      setMessage("");
      setImage(null);

      alert("✅ Depoimento enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar depoimento:", error);
      alert("❌ Erro ao enviar o depoimento. Tente novamente.");
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

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="border border-gray-300 rounded-lg p-2"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-400 text-white px-6 py-3 rounded-full mt-2 hover:bg-blue-500 transition-colors disabled:opacity-50"
        >
          {loading ? "Enviando..." : "Enviar Depoimento"}
        </button>
      </form>
    </section>
  );
}
