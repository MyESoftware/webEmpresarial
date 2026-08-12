import React from "react";
import SEO from "../components/SEO";
import Pricing from "../components/Pricing";
import Section from "../components/Section";
import { Layout, Zap, Search, Settings, Code2 } from "lucide-react"; 

const pasosProceso = [
  { id: 1, t: "Descubrimiento", d: "Auditoría de necesidades, definición de objetivos B2B y requerimientos técnicos.", icon: <Search size={20} /> },
  { id: 2, t: "Arquitectura", d: "Diseño de sistemas escalables, elección del stack y planificación de infraestructura.", icon: <Layout size={20} /> },
  { id: 3, t: "Desarrollo", d: "Ingeniería de software robusta, código limpio y pruebas de rendimiento continuas.", icon: <Code2 size={20} /> },
  { id: 4, t: "Entrega", d: "Despliegue seguro en producción, configuración de CI/CD y checklist de QA.", icon: <Zap size={20} /> },
  { id: 5, t: "Evolución", d: "Monitoreo constante, soporte técnico preventivo y escalabilidad a demanda.", icon: <Settings size={20} /> },
];

export default function Servicios() {
  return (
    <main className="main-content">
      <SEO 
        title="Servicios y Soluciones" 
        description="Ingeniería de software, plataformas a medida y sistemas de alta conversión." 
        path="/servicios" 
      />

      {/* Hero de la página con Glow */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
        <div className="container-safe relative z-10">
          <div className="max-w-4xl">
            <span className="badge mb-6">Nuestra Oferta Técnica</span>
            <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-[1.1]">
              Ingeniería de software para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                negocios escalables.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
                Diseñamos y desarrollamos soluciones tecnológicas robustas que impulsan el crecimiento y optimizan los procesos de tu empresa.
            </p>
          </div>
        </div>
        
        {/* Luz de fondo decorativa */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 blur-[120px] -z-10 rounded-full" />
      </section>

      {/* Planes de Precios - Envoltorio Limpio */}
      <section className="py-12">
        <div className="container-safe">
          <div className="bg-white/[0.02] rounded-[3rem] p-2 md:p-8 border border-white/5 shadow-2xl">
            <Pricing />
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <Section kicker="Metodología de Ingeniería" title="Cómo trabajamos">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pasosProceso.map(({ id, t, d, icon }) => (
            <div key={id} className="card group p-8 hover:border-fuchsia-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-slate-950 transition-all duration-500 shadow-[inset_0_0_15px_rgba(16,185,129,0.1)]">
                  {icon}
                </div>
                <div className="h-px flex-1 bg-white/5" />
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">0{id}</span>
              </div>
              <h3 className="text-xl font-black text-white mb-3 tracking-tighter uppercase">{t}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

      </Section>

    </main>
  );
}