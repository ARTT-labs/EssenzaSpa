import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<null | "success" | "error" | "sending">(
    null
  );

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      // SUBSTITUA AQUI com os seus dados do EmailJS
      const SERVICE_ID = "YOUR_SERVICE_ID";
      const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
      const USER_ID = "YOUR_USER_ID";

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID);
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 bg-[var(--soft)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/images/treatment-1.jpg"
              alt="contact"
              className="rounded-2xl object-cover w-full shadow"
            />
          </div>
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-3xl font-serif">Entre em contato</h3>
            <p className="mt-2 text-base text-slate-700">
              Preencha o formulário abaixo e nossa equipe retornará o mais breve
              possível.
            </p>
            <form ref={formRef} onSubmit={sendEmail} className="mt-6 space-y-4">
              <input
                name="name"
                required
                className="w-full border p-3 rounded"
                placeholder="Nome completo"
              />
              <input
                name="email"
                type="email"
                required
                className="w-full border p-3 rounded"
                placeholder="Email"
              />
              <input
                name="phone"
                className="w-full border p-3 rounded"
                placeholder="Número de telefone"
              />
              <textarea
                name="message"
                required
                rows={4}
                className="w-full border p-3 rounded"
                placeholder="Mensagem"
              ></textarea>
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-5 py-3 bg-[var(--accent)] text-white rounded cursor-pointer hover:bg-[var(--accent)]/80"
                >
                  Enviar mensagem
                </button>
                {status === "sending" && (
                  <span className="text-sm">Enviando...</span>
                )}
                {status === "success" && (
                  <span className="text-sm text-green-600">
                    Enviado! Entraremos em contato em breve.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-sm text-red-600">
                    Erro ao enviar. Tente novamente.
                  </span>
                )}
              </div>
            </form>
            <p className="mt-4 text-xs text-slate-500">
              Ou via WhatsApp: <strong>+55 (11) 91234-5678</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
