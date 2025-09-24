import { useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Função que lida com o clique nos links de navegação
  const handleNavClick = (targetId: string) => {
    // Se já estamos na página principal ('/spa')
    if (location.pathname === "/spa") {
      // Apenas role suavemente para a seção
      scroller.scrollTo(targetId, {
        smooth: true,
        duration: 500,
        offset: -60, // Ajuste seu offset aqui
      });
    } else {
      // Se estamos em outra página, navegue para a página principal
      // e passe o ID da seção como "state"
      navigate("/spa", { state: { targetId } });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 w-full flex items-center justify-between px-8 h-16 bg-white/80 backdrop-blur z-50 shadow-md"
      onMouseLeave={() => setOpen(false)}
    >
      <RouterLink
        to="/spa"
        className="text-2xl font-serif text-primary flex-shrink-0"
      >
        Essenza
      </RouterLink>
      <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
        <div className="gap-8 flex">
          {/* 🔽 Links atualizados para usar a função handleNavClick */}
          <button
            onClick={() => handleNavClick("home")}
            className="cursor-pointer text-lg"
          >
            Home
          </button>

          {/* Dropdown Tratamentos */}
          <div className="relative">
            <button
              onMouseOver={() => setOpen(!open)}
              onClick={() => handleNavClick("services")}
              className="cursor-pointer text-lg flex items-center gap-1"
            >
              Tratamentos
            </button>
            {open && (
              <div className="absolute left-0 mt-2 bg-white shadow rounded w-56">
                <RouterLink
                  to="/tratamentos/facial"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Tratamentos Faciais
                </RouterLink>
                <RouterLink
                  to="/tratamentos/hidratacao"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Terapia de Hidratação
                </RouterLink>
                <RouterLink
                  to="/tratamentos/antiacne"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Soluções Antiacne
                </RouterLink>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick("why")}
            className="cursor-pointer text-lg"
          >
            Por que escolher
          </button>
          <button
            onClick={() => handleNavClick("testimonials")}
            className="cursor-pointer text-lg"
          >
            Depoimentos
          </button>
        </div>
      </nav>
      <div>
        <button
          onClick={() => handleNavClick("contact")}
          className="cursor-pointer px-3 py-2 rounded bg-[var(--accent)] text-white text-lg hover:bg-[var(--accent)]/80"
        >
          Contato
        </button>
      </div>
    </header>
  );
}
