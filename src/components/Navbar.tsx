import React from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <RouterLink to="/spa" className="text-2xl font-serif text-primary">
          Essenza
        </RouterLink>
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer text-sm"
          >
            Home
          </Link>
          <Link
            to="services"
            smooth
            duration={500}
            className="cursor-pointer text-sm"
          >
            Tratamentos
          </Link>
          <Link
            to="why"
            smooth
            duration={500}
            className="cursor-pointer text-sm"
          >
            Por que escolher
          </Link>
          <Link
            to="testimonials"
            smooth
            duration={500}
            className="cursor-pointer text-sm"
          >
            Depoimentos
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="cursor-pointer text-sm"
          >
            Contato
          </Link>
          <RouterLink
            to="/interiores"
            className="ml-4 px-3 py-2 rounded bg-[var(--accent)] text-white text-sm"
          >
            Interiores
          </RouterLink>
        </nav>
        <div className="md:hidden">
          <RouterLink
            to="/spa#contact"
            className="px-3 py-2 rounded bg-[var(--accent)] text-white text-sm"
          >
            Contato
          </RouterLink>
        </div>
      </div>
    </header>
  );
}
