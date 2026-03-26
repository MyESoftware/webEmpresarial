import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Pricing from "../components/Pricing";
import { waLink, SITE } from "../config/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="main-content">
      <SEO
        title="MyE Software | Home"
        description="¿Buscás crear tu sitio web o un sistema para tu negocio? En MyE lo hacemos realidad. ¡Asesoramiento hoy!"
        path="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5 min-h-[80vh] flex items-center">

        {/* IMAGEN DE FONDO */}
        {/* --- CONTENEDOR DE FONDO CON DESENFOQUE --- */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src="/hero.jpg"
            alt="Background Code"
            className="w-full h-full object-cover object-center opacity-[1.90] blur-sm"
          />
        </div>

        <div className="container-safe py-16 md:py-28 relative z-10">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="badge mb-6">
                Soluciones Digitales en Mendoza
              </div>
              <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-[1.1]">
                Potencia tu negocio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                  hoy.
                </span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-slate-400 max-w-lg">
                ¿Necesitás una página para vender o un sistema para organizar tu local?
                En <strong>{SITE.brand}</strong> creamos software que escala y que Google ama.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a className="btn btn-primary px-8 py-4" href={waLink()} target="_blank" rel="noreferrer">
                  Presupuesto gratis <ArrowRight size={20} />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
                {["Aparecé en Google", "Fácil de usar", "Soporte 1-a-1"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
                    <CheckCircle2 size={18} className="text-emerald-500" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ... (Resto de las secciones se mantienen igual) */}
    </main>
  );
}