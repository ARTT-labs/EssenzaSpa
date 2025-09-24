import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 h-16 bg-white/80 backdrop-blur z-50 shadow-md">
      <RouterLink
        to="/spa"
        className="text-2xl font-serif text-primary flex-shrink-0"
      >
        Essenza
      </RouterLink>
      <nav className="absolute left-1/2 transform -translate-x-1/2">
        <div className="gap-8 flex">
          <Link
            to="home"
            smooth
            duration={500}
            offset={-60}
            className="cursor-pointer text-lg"
          >
            Home
          </Link>
          <Link
            to="services"
            smooth
            duration={500}
            offset={-60}
            className="cursor-pointer text-lg"
          >
            Tratamentos
          </Link>
          <Link
            to="why"
            smooth
            duration={500}
            offset={-60}
            className="cursor-pointer text-lg"
          >
            Por que escolher
          </Link>
          <Link
            to="testimonials"
            smooth
            duration={500}
            offset={-60}
            className="cursor-pointer text-lg"
          >
            Depoimentos
          </Link>
        </div>
      </nav>
      <div>
        <Link
          to="contact"
          smooth
          duration={500}
          offset={-60}
          className="cursor-pointer px-3 py-2 rounded bg-[var(--accent)] text-white text-lg "
        >
          Contato
        </Link>
      </div>
    </header>
  );
}
