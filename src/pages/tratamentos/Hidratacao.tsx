import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

export default function Hidratacao() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="min-h-[80vh] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-12 py-12">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              Terapia de Hidratação Profunda
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Restaure a umidade natural da sua pele com técnicas avançadas e
              produtos de alto desempenho, que proporcionam frescor e
              luminosidade duradoura.
            </p>
            <div className="mt-8">
              <a
                href="/spa#contact"
                className="rounded px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent)]/80 text-white shadow"
              >
                Agende sua sessão
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="flex justify-center"
          >
            <img
              src="/images/hidratacao-hero.jpg"
              alt="Terapia de Hidratação"
              className="w-full h-[70vh] max-w-xl rounded-2xl object-cover shadow-lg"
            />
          </motion.div>
        </section>

        {/* O que é */}
        <section className="py-16 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">O que é?</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            A terapia de hidratação profunda devolve a elasticidade e maciez da
            pele, combatendo o ressecamento e promovendo um aspecto saudável e
            iluminado. Ideal para todos os tipos de pele.
          </p>
        </section>

        {/* Benefícios */}
        <section className="py-16 bg-white px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Benefícios
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 shadow rounded bg-[#fff9f7]">
              <div className="mt-4 font-semibold mb-4">Hidratação intensa</div>
              <p>Recompõe a barreira natural da pele.</p>
            </div>
            <div className="p-6 shadow rounded bg-[#fff9f7]">
              <div className="mt-4 font-semibold mb-4">
                Maciez e elasticidade
              </div>
              <p>Proporciona toque suave e aparência jovial.</p>
            </div>
            <div className="p-6 shadow rounded bg-[#fff9f7]">
              <div className="mt-4 font-semibold mb-4">
                Proteção contra o ressecamento
              </div>
              <p>Defende a pele das agressões externas.</p>
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
                <li>Beba bastante água para potencializar os efeitos.</li>
                <li>Evite exposição solar prolongada.</li>
              </ul>
            </div>
            <div>
              <div className="mt-4 font-semibold mb-4">
                Depois do tratamento
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Mantenha uma rotina de hidratação em casa.</li>
                <li>Use protetor solar diariamente.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Depoimento */}
        <section className="py-16 bg-[#fff9f7] text-center">
          <blockquote className="italic text-lg text-gray-700 max-w-2xl mx-auto">
            "Minha pele ficou incrivelmente macia e viçosa após o tratamento.
            Nunca senti tanto conforto!"
          </blockquote>
          <p className="mt-4 font-bold">– Juliana S.</p>
        </section>

        <Footer />
      </main>
    </>
  );
}
