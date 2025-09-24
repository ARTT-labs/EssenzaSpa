import React from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Tratamentos Faciais",
    subtitle: "Protocolos exclusivos para rejuvenescimento e cuidado da pele.",
    img: "/images/treatment-1.jpg",
  },
  {
    title: "Terapias de Hidratação",
    subtitle: "Restaure o equilíbrio e a vitalidade da sua pele.",
    img: "/images/treatment-2.jpg",
  },
  {
    title: "Soluções Antiacne",
    subtitle: "Tratamentos modernos para acne e marcas.",
    img: "/images/treatment-3.jpg",
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
            <motion.div
              key={it.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.15 }}
              className="bg-white/10 rounded-xl p-4"
            >
              <img
                src={it.img}
                alt={it.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm mt-2 text-white/90">{it.subtitle}</p>
            </motion.div>
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
