import React from "react";
import SEO from "../components/SEO";
import { waLink } from "../config/site";
import { ExternalLink, Code2, Rocket } from "lucide-react";

const proyectos = [
  {
    title: "Noche Mendocina",
    tag: "Proyecto Propio / SaaS",
    description: "Plataforma integral para el sector nocturno de Mendoza. Gestión de eventos, reservas y perfiles en tiempo real.",
    stack: ["Java Spring Boot", "MySQL", "React"],
    result: "Arquitectura escalable para alta concurrencia.",
    isLive: true,
  },
  {
    title: "Ruedas Compartidas",
    tag: "Sistema de Gestión / Logística",
    description: "Software de gestión para alquiler y logística de vehículos. Automatización de contratos y control de flota.",
    stack: ["Java", "Angular", "PostgreSQL"],
    result: "Reducción del 40% en tiempos de gestión manual.",
    isLive: false,
  },
  {
    title: "Landing Page Inmobiliaria",
    tag: "Marketing / Conversión",
    description: "Sitio enfocado en captación de leads para desarrollos inmobiliarios con optimización de SEO local.",
    stack: ["Next.js", "Tailwind CSS"],
    result: "Carga menor a 1s y alta tasa de conversión.",
    isLive: true,
  }
];

export default function Portfolio() {
  return (
    <main className="main-content">
      <SEO 
        title="Proyectos y Soluciones | Software Factory" 
        description="Explorá nuestros casos de éxito: sistemas a medida, plataformas SaaS y landing pages de alto impacto." 
        path="/portfolio" 
      />

      <section className="container-safe py-12 md:py-20">
        <div className="max-w-4xl mb-16">
          <span className="badge mb-4">Casos de Éxito</span>
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-none">
            Soluciones que hablan por <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300">nosotros.</span>
          </h1>
          <p className="mt-8 text-lg text-slate-400 leading-relaxed">
            Desde aplicaciones empresariales robustas en Java hasta sitios web ultra veloces. 
            Aquí te mostramos cómo resolvemos desafíos reales con tecnología de punta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {proyectos.map((p, i) => (
            <div key={i} className="card group overflow-hidden border-white/5 hover:border-fuchsia-500/30 transition-all duration-500">
              <div className="aspect-video bg-gradient-to-br from-slate-900 to-black flex items-center justify-center p-6 border-b border-white/5">
                 <div className="text-center group-hover:scale-105 transition-transform duration-500">
                    <Code2 className="mx-auto mb-4 text-fuchsia-400/40" size={48} />
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">{p.stack.join(" • ")}</span>
                 </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black text-fuchsia-400 uppercase tracking-widest">{p.tag}</span>
                    <h3 className="text-2xl font-black text-white mt-1 tracking-tighter">{p.title}</h3>
                  </div>
                  {p.isLive && (
                    <div className="p-2 rounded-xl bg-white/5 text-slate-400 group-hover:text-fuchsia-400 transition-colors">
                      <ExternalLink size={20} />
                    </div>
                  )}
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  {p.description}
                </p>

                <div className="flex items-center gap-3 py-3 px-4 bg-fuchsia-500/5 border border-emerald-500/10 rounded-xl">
                  <Rocket size={18} className="text-fuchsia-400" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-tighter">
                    <span className="text-fuchsia-400">Resultado:</span> {p.result}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 card p-10 md:p-16 relative overflow-hidden text-center md:text-left">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter italic">¿Tu proyecto es el siguiente?</h2>
              <p className="text-slate-400 mt-4 text-lg">Diseñamos soluciones técnicas que se adaptan a tu presupuesto y escala.</p>
            </div>
            <a 
              className="btn btn-primary px-10 py-5 text-lg" 
              href={waLink("Hola! Vi tu portfolio y me gustaría consultar por un proyecto.")} 
              target="_blank" 
              rel="noreferrer"
            >
              Empezar ahora
            </a>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-[100px] -mr-40 -mt-40" />
        </div>
      </section>
    </main>
  );
}