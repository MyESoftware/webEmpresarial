import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

// Lazy loading de las páginas para habilitar Code Splitting
import Home from "./pages/Home";
const Servicios = lazy(() => import("./pages/Servicios"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Contacto = lazy(() => import("./pages/Contacto"));
const Propuestas = lazy(() => import("./pages/Propuestas"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/propuestas" element={<Propuestas />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
