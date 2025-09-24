import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SpaLanding from "./pages/SpaLanding";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/spa" replace />} />
      <Route path="/spa" element={<SpaLanding />} />
    </Routes>
  );
}
