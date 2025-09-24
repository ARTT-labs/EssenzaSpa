import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // 1. Importe o Link do react-router-dom

const items = [
  {
    title: "Tratamentos Faciais",
    subtitle: "Protocolos exclusivos para rejuvenescimento e cuidado da pele.",
    img: "/images/treatment-1.jpg",
    URL: "/tratamentos/facial",
  },
  {
    title: "Terapias de Hidratação",
    subtitle: "Restaure o equilíbrio e a vitalidade da sua pele.",
    img: "/images/treatment-2.jpg",
    URL: "/tratamentos/hidratacao",
  },
  {
    title: "Soluções Antiacne",
    subtitle: "Tratamentos modernos para acne e marcas.",
    img: "/images/treatment-3.jpg",
    URL: "/tratamentos/antiacne",
  },
];

export default function Treatments() {
  return (
    <section id="services" className="bg-[var(--primary)] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-center mb-8">
          Nossos Tratamentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            // 2. Envolva todo o card com o componente Link
            <Link to={it.URL} key={it.title}>
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.15 }}
                // 3. Adicione classes para dar feedback visual de que é clicável
                className="bg-white/10 rounded-xl p-4 h-full cursor-pointer transition-transform duration-300 hover:scale-105 hover:bg-white/20"
              >
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="mt-4 font-semibold">{it.title}</div>
                <p className="text-sm mt-2 text-white/90">{it.subtitle}</p>
              </motion.div>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/80 text-center">
          Cada tratamento é personalizado para as necessidades únicas da sua
          pele.
        </p>
      </div>
    </section>
  );
}
