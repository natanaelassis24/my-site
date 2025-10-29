"use client";
import { useState } from "react";

export default function ContactCard() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Envia direto para o WhatsApp
    const text = `Olá! Nova mensagem do site:%0A%0A👤 Nome: ${formData.name}%0A✉️ E-mail: ${formData.email}%0A💬 Mensagem: ${formData.message}`;
    const whatsappNumber = "5512992164758"; // número com DDI e DDD
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");

    alert("Mensagem aberta no WhatsApp com sucesso!");
    setFormData({ name: "", email: "", message: "" });
    setLoading(false);
  };

  return (
    <section className="py-12 flex flex-col md:flex-row justify-between gap-8 items-start">
      <div className="w-full md:w-1/2">
        <h4 className="text-sm text-gray-400 uppercase">Fique à vontade para</h4>
        <h3 className="text-2xl font-bold mt-1">Nos contatar</h3>
        <p className="mt-4 text-gray-600">
          Endereço: Rua Exemplo, 123, São Paulo, SP<br />
          E-mail: contato@ricardopinturas.com.br<br />
          Telefone: +55 11 98765-4321
        </p>
      </div>

      <div className="w-full md:w-1/2">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="text-lg font-semibold">Entre em contato</h4>
          <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nome completo"
              className="w-full rounded-full border px-4 py-2 text-sm"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="E-mail"
              className="w-full rounded-full border px-4 py-2 text-sm"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Sua mensagem"
              className="w-full rounded-2xl border px-4 py-3 text-sm"
            />
            <div className="text-right">
              <button
                type="submit"
                disabled={loading}
                className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 disabled:opacity-60"
              >
                {loading ? "Abrindo WhatsApp..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
