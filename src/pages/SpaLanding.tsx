import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Navbar from "../components/Navbar";
import HeroSpa from "../components/HeroSpa";
import Treatments from "../components/Treatments";
import WhyTrust from "../components/WhyTrust";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function SpaLanding() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se há um 'targetId' no estado da navegação
    const targetId = location.state?.targetId;

    if (targetId) {
      // Usa um pequeno delay para garantir que a página renderizou antes de rolar
      setTimeout(() => {
        scroller.scrollTo(targetId, {
          smooth: true,
          duration: 500,
          offset: -60,
        });

        // Limpa o estado para não rolar novamente em um refresh
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location, navigate]); // Roda o efeito quando a localização muda
  return (
    <>
      <Navbar />
      <main>
        <HeroSpa />
        <Treatments />
        <WhyTrust />
        <Testimonials />
        <CTASection />
        <Team />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
