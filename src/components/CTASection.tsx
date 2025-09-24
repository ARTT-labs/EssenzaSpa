import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function CTASection() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="bg-[var(--accent)] text-white rounded-3xl p-10 md:flex items-center justify-between gap-8"
        >
          <div>
            <h4 className="text-3xl font-serif">
              Pronta para transformar sua pele?
            </h4>
            <p className="mt-2 text-sm text-white/90">
              Comece hoje sua jornada para uma pele mais saudável, bonita e
              iluminada.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-60}
              className="cursor-pointer rounded px-6 py-3 bg-[var(--accent)] text-white hover:underline"
            >
              Agendar Consulta Gratuita
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
