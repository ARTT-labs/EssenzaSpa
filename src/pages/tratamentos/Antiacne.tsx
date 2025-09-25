import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function Antiacne() {
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
              Soluções Antiacne
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Tratamento eficaz para controle da oleosidade, redução da acne
              ativa e clareamento de manchas, promovendo mais confiança e
              bem-estar.
            </p>
            <div className="mt-8">
              <a
                href="/spa#contact"
                className="rounded px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent)]/80 text-white shadow"
              >
                Inicie seu tratamento
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
              src="/images/antiacne-hero.jpg"
              alt="Soluções Antiacne"
              className="w-full h-[70vh] max-w-xl rounded-2xl object-cover shadow-lg"
            />
          </motion.div>
        </section>

        {/* O que é */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">O que é?</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            As soluções antiacne unem protocolos de limpeza profunda, peeling e
            dermocosméticos para reduzir a acne, controlar a oleosidade e
            melhorar a textura da pele, proporcionando resultados duradouros.
          </p>
        </section>

        {/* Benefícios */}
        <section className="py-16 bg-white px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Benefícios
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 shadow rounded bg-[#fff9f7]">
              <div className="mt-4 font-semibold mb-4">Controle da acne</div>
              <p>Reduz inflamações e previne novos surtos.</p>
            </div>
            <div className="p-6 shadow rounded bg-[#fff9f7]">
              <div className="mt-4 font-semibold mb-4">Pele uniforme</div>
              <p>Clareia manchas e melhora a textura.</p>
            </div>
            <div className="p-6 shadow rounded bg-[#fff9f7]">
              <div className="mt-4 font-semibold mb-4">Autoconfiança</div>
              <p>Mais segurança com uma pele saudável.</p>
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
                <li>Evite manipular as lesões para não agravar o quadro.</li>
                <li>Comunique o uso de medicamentos à profissional.</li>
              </ul>
            </div>
            <div>
              <div className="mt-4 font-semibold mb-4">
                Depois do tratamento
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Siga a rotina indicada de cuidados domiciliares.</li>
                <li>Use protetor solar e evite exposição solar excessiva.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Depoimento */}
        <section className="py-16 bg-[#fff9f7] text-center">
          <blockquote className="italic text-lg text-gray-700 max-w-2xl mx-auto">
            "Minha pele melhorou incrivelmente, as espinhas diminuíram e as
            manchas estão desaparecendo."
          </blockquote>
          <p className="mt-4 font-bold">– Rafael T.</p>
        </section>

        <Footer />
      </main>
    </>
  );
}
