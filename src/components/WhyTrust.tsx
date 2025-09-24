import React from "react";
import { motion } from "framer-motion";

export default function WhyTrust() {
  return (
    <section id="why" className="py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <motion.img
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          src="/images/team-1.jpg"
          alt="Equipe da clínica"
          className="w-80 rounded-full object-cover shadow"
        />
        <div>
          <h3 className="text-2xl font-serif">Por que escolher a Essenza?</h3>
          <p className="mt-4 text-slate-600">
            Nossa equipe une experiência, tecnologia e dedicação para oferecer
            resultados seguros, naturais e duradouros.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Profissionais especializados e certificados</li>
            <li>• Protocolos personalizados</li>
            <li>• Produtos aprovados e de alta qualidade</li>
            <li>• Atendimento acolhedor e humanizado</li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <div className="text-sm bg-[var(--rose)] text-primary px-3 py-2 rounded">
              📞 (11) 91234-5678
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
