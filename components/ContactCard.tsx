export default function ContactCard() {
  return (
    <section className="py-12 flex flex-col md:flex-row justify-between gap-8 items-start">
      {/* Informações de contato */}
      <div className="w-full md:w-1/2">
        <h4 className="text-sm text-gray-400 uppercase">Fique à vontade para</h4>
        <h3 className="text-2xl font-bold mt-1">Nos contatar</h3>
        <p className="mt-4 text-gray-600">
          Endereço: Rua Exemplo, 123, São Paulo, SP<br />
          E-mail: contato@ricardopinturas.com.br<br />
          Telefone: +55 11 98765-4321
        </p>
      </div>

      {/* Formulário de contato */}
      <div className="w-full md:w-1/2">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h4 className="text-lg font-semibold">Entre em contato</h4>
          <form className="mt-4 space-y-3">
            <input
              type="text"
              aria-label="Nome completo"
              className="w-full rounded-full border px-4 py-2 text-sm"
              placeholder="Nome completo"
            />
            <input
              type="email"
              aria-label="E-mail"
              className="w-full rounded-full border px-4 py-2 text-sm"
              placeholder="E-mail"
            />
            <textarea
              aria-label="Sua mensagem"
              className="w-full rounded-2xl border px-4 py-3 text-sm"
              placeholder="Sua mensagem"
            />
            <div className="text-right">
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-full"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
