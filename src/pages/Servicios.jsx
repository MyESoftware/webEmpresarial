import React from "react";
import SEO from "../components/SEO";
import Pricing from "../components/Pricing";
import Section from "../components/Section";
import { waLink } from "../config/site";
import { Cpu, Layout, Zap, Search, Settings, ArrowRight } from "lucide-react"; 

const pasosProceso = [
  { id: 1, t: "Brief (15 min)", d: "Definimos objetivo, público, oferta y material base.", icon: <Layout size={20} /> },
  { id: 2, t: "Propuesta", d: "Estructura lógica, copy persuasivo y diseño base.", icon: <Zap size={20} /> },
  { id: 3, t: "Construcción", d: "Desarrollo robusto con optimización de carga y performance.", icon: <Cpu size={20} /> },
  { id: 4, t: "Publicación", d: "Deploy, configuración de dominio y checklist.", icon: <Search size={20} /> },
  { id: 5, t: "Mantenimiento", d: "Soporte preventivo, actualizaciones y mejoras constantes.", icon: <Settings size={20} /> },
];

export default function Servicios() {
  return (
    <main className="main-content">
      <SEO 
        title="Servicios | Agencia de Software" 
        description="Landing pages, sitios web y sistemas a medida. Calidad técnica desde Mendoza." 
        path="/servicios" 
      />

      {/* Hero de la página con Glow */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
        <div className="container-safe relative z-10">
          <div className="max-w-4xl">
            <span className="badge mb-6">Nuestra Oferta Técnica</span>
            <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-[1.1]">
              Software de alta gama para <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                negocios reales.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
                Reallizamos el sistema que necesites, a tu medida y a precios bajos.
            </p>
          </div>
        </div>
        
        {/* Luz de fondo decorativa */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] -z-10 rounded-full" />
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
      <Section kicker="Metodología" title="Cómo trabajamos">
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pasosProceso.map(({ id, t, d, icon }) => (
            <div key={id} className="card group p-8 hover:border-emerald-500/30">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-500 shadow-[inset_0_0_15px_rgba(16,185,129,0.1)]">
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