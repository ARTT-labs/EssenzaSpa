import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Camila R.",
    text: "Me senti muito bem cuidada e os resultados superaram minhas expectativas.",
  },
  {
    name: "Renata S.",
    text: "Atendimento maravilhoso, ambiente acolhedor e equipe altamente profissional.",
  },
  {
    name: "Mariana L.",
    text: "Minha pele nunca esteve tão saudável e iluminada. Recomendo!",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-[var(--soft)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-serif">O que nossas clientes dizem</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <p className="text-sm text-slate-700">“{t.text}”</p>
              <div className="mt-4 font-semibold">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
