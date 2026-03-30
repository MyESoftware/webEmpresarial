import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import Loader from "./components/Loader";
import TechBackground from "./components/TechBackground";

import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Portfolio from "./pages/Portfolio";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import Propuestas from "./pages/Propuestas";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <TechBackground />
      {isLoading && <Loader />}
      <div className="min-h-dvh bg-transparent text-slate-100 relative z-[1]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/propuestas" element={<Propuestas />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </>
  );
}
