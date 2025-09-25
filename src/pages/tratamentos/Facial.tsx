import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function Facial() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="px-6 sm:px-8 md:pl-12 lg:pl-24 md:pr-8"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              Tratamentos Faciais Personalizados
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Protocolos exclusivos para rejuvenescimento, limpeza profunda e
              revitalização da pele, respeitando as características únicas do
              seu rosto.
            </p>
            <div className="mt-8">
              <a
                href="/spa#contact"
                className="rounded px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent)]/80 text-white shadow"
              >
                Agende sua avaliação gratuita
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="h-full justify-end hidden md:flex"
          >
            <img
              src="/images/facial-hero.jpg"
              alt="Tratamento Facial"
              className="w-full h-[70vh] max-w-xl rounded-2xl object-cover shadow-lg"
            />
          </motion.div>
        </section>

        {/* O que é */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">O que é?</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            Os tratamentos faciais combinam técnicas avançadas e dermocosméticos
            para melhorar a textura, uniformidade e luminosidade da pele. São
            indicados para quem busca rejuvenescimento, prevenção do
            envelhecimento precoce e uma pele mais saudável no dia a dia.
          </p>
        </section>

        {/* Benefícios */}
        <section className="py-16 bg-white px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Benefícios
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 shadow rounded bg-[#fff9f7]">
              <div className="mt-4 font-semibold mb-4">
                Rejuvenescimento visível
              </div>
              <p>Suaviza linhas de expressão e melhora a firmeza.</p>
            </div>
            <div className="p-6 shadow rounded bg-[#fff9f7]">
              <div className="mt-4 font-semibold mb-4">
                Luminosidade natural
              </div>
              <p>Devolve o viço e a vitalidade da pele.</p>
            </div>
            <div className="p-6 shadow rounded bg-[#fff9f7]">
              <div className="mt-4 font-semibold mb-4">
                Relaxamento profundo
              </div>
              <p>Proporciona bem-estar físico e mental.</p>
            </div>
          </div>
        </section>

        {/* Pré e Pós */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Antes e Depois
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mt-4 font-semibold mb-4">Antes do tratamento</div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Evite exposição solar intensa.</li>
                <li>Suspenda uso de ácidos na semana do procedimento.</li>
              </ul>
            </div>
            <div>
              <div className="mt-4 font-semibold mb-4">
                Depois do tratamento
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Utilize protetor solar diariamente.</li>
                <li>Hidrate a pele regularmente.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Depoimento */}
        <section className="py-16 bg-[#fff9f7] text-center">
          <blockquote className="italic text-lg text-gray-700 max-w-2xl mx-auto">
            "Senti minha pele muito mais firme e radiante logo após as primeiras
            sessões. Recomendo a todas!"
          </blockquote>
          <p className="mt-4 font-bold">– Camila F.</p>
        </section>

        <Footer />
      </main>
    </>
  );
}
