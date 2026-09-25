import React from "react";
import { Hammer, Store, Zap, ArrowRight, Activity, Users } from "lucide-react";
import SEO from "../components/SEO";
import { waLink } from "../config/site";

const productos = [
  {
    id: "red-laboral",
    name: "Red Laboral",
    badge: "Producto MyE Software",
    status: "En desarrollo",
    icon: <Users size={32} className="text-cyan-400" />,
    description: "Sistema integral que conecta profesionales independientes con trabajos y tareas disponibles a lo largo de todo Mendoza.",
    valueConcept: "Un sistema pensado para facilitar el encuentro entre demanda y oferta de servicios, fomentar la competencia y generar nuevas oportunidades de trabajo.",
    howItWorks: "Cada persona puede ingresar un problema, necesidad o trabajo que necesita resolver. Los profesionales registrados pueden presentar sus propuestas y el cliente selecciona la alternativa que considera más conveniente.",
    features: [
      "Publicación de tareas y necesidades",
      "Perfiles de profesionales y reputación",
      "Sistema de propuestas y cotizaciones",
      "Geolocalización en Mendoza"
    ],
    cta: "Próximamente"
  },
  {
    id: "open-comercial",
    name: "Open Comercial",
    badge: "Producto MyE Software",
    status: "Próximamente",
    icon: <Store size={32} className="text-fuchsia-400" />,
    description: "Sistema integral para comercios, diseñado para centralizar en un solo lugar las herramientas que necesita un comerciante.",
    valueConcept: "Una solución pensada para que el comerciante pueda gestionar su operación desde un único sistema, sin depender de múltiples plataformas desconectadas.",
    howItWorks: "Reemplazá planillas y sistemas obsoletos con una plataforma en la nube que integra ventas, inventario y exhibición de productos en tiempo real.",
    features: [
      "Sistema de cobros",
      "Control de stock e inventario",
      "Catálogo digital para clientes",
      "Gestión centralizada del comercio"
    ],
    cta: "Próximamente"
  }
];

export default function Productos() {
  return (
    <main className="main-content">
      <SEO
        title="Productos Tecnológicos | MyE Software"
        description="Estamos desarrollando soluciones digitales propias para resolver necesidades reales de empresas y personas en Mendoza."
        path="/productos"
      />

      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="container-safe relative z-10 text-center">
          <span className="badge mb-6">Software Studio</span>
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-[1.1] max-w-4xl mx-auto">
            Productos <span className="text-cyan-400">tecnológicos.</span>
          </h1>
          <p className="mt-8 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Estamos desarrollando soluciones digitales propias para resolver necesidades reales de empresas y personas en Mendoza.
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[150px] -z-10 rounded-full" />
      </section>

      <section className="py-16 md:py-24">
        <div className="container-safe space-y-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {productos.map((prod) => (
              <article key={prod.id} className="card group p-8 md:p-12 transition-all hover:border-cyan-500/30 flex flex-col relative overflow-hidden bg-slate-800/80 border border-white/10 shadow-xl rounded-3xl">
                
                <div className="absolute top-0 right-0 bg-white/5 text-slate-300 font-bold text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-bl-xl border-l border-b border-white/10 flex items-center gap-2">
                  <Activity size={12} className="text-cyan-400" /> {prod.status}
                </div>
                
                <div className="flex-1">
                    <span className="badge bg-white/5 text-slate-300 mb-6 border-white/10">{prod.badge}</span>
                    
                    <div className="flex items-center gap-4 mb-6 mt-2">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-inner">
                        {prod.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white">{prod.name}</h2>
                    </div>
                    
                    <p className="text-lg text-slate-300 leading-relaxed font-medium mb-4">
                      {prod.description}
                    </p>

                    <p className="text-sm text-slate-400 leading-relaxed mb-8">
                      {prod.valueConcept} {prod.howItWorks}
                    </p>
                    
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Capacidades principales</h3>
                    <ul className="space-y-3 text-slate-300">
                      {prod.features.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
                          <Zap className="h-4 w-4 shrink-0 text-cyan-400 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                </div>
                
                <button className="btn btn-outline w-full mt-10 py-4 opacity-50 cursor-not-allowed border-white/10 text-slate-400" disabled>
                    {prod.cta}
                </button>
              </article>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}