import React from "react";
import { motion } from "framer-motion";

export default function HeroSpa() {
  return (
    <section id="home" className="pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-12">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
            Realce sua beleza com cuidado, bem-estar e tecnologia.
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Na <strong>Essenza</strong>, oferecemos tratamentos estéticos
            faciais e corporais feitos sob medida para você, unindo tecnologia
            de ponta e uma equipe altamente qualificada.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="rounded px-6 py-3 bg-[var(--accent)] text-white shadow"
            >
              Agende sua avaliação gratuita
            </a>
            <a
              href="#services"
              className="rounded px-6 py-3 border border-primary text-primary"
            >
              Conheça nossos tratamentos
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
            src="/images/spa-hero.jpg"
            alt="Clínica de estética Essenza"
            className="w-full max-w-xl rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
