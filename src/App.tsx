import { Routes, Route, Navigate } from "react-router-dom";
import SpaLanding from "./pages/SpaLanding";
import Hidratacao from "./pages/tratamentos/Hidratacao";
import Facial from "./pages/tratamentos/Facial";
import Antiacne from "./pages/tratamentos/Antiacne";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/spa" replace />} />
        <Route path="/spa" element={<SpaLanding />} />
        <Route path="/tratamentos/hidratacao" element={<Hidratacao />} />
        <Route path="/tratamentos/facial" element={<Facial />} />
        <Route path="/tratamentos/antiacne" element={<Antiacne />} />
      </Routes>
    </>
  );
}
