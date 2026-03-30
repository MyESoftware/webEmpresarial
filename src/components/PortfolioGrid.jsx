import React from "react";
import { ArrowUpRight, BadgeCheck, TrendingUp } from "lucide-react";
import { waLink } from "../config/site";

const projects = [
  {
    title: "Estudio jurídico premium",
    niche: "Servicios profesionales",
    problem: "Necesitaba transmitir confianza, captar consultas y ordenar los contactos por WhatsApp.",
    solution: "Landing con narrativa de autoridad, CTA visibles, formulario de calificación y SEO local.",
    result: "+consultas de calidad y mejor percepción de marca desde el primer vistazo.",
    tags: ["Confianza", "SEO local", "WhatsApp"],
  },
  {
    title: "PyME institucional con ventas",
    niche: "Empresa en crecimiento",
    problem: "Su presencia digital no mostraba servicios, diferenciales ni casos reales.",
    solution: "Sitio corporativo con estructura comercial, bloques de prueba social y funnel de contacto.",
    result: "Más claridad comercial y mejor tasa de contacto desde desktop y mobile.",
    tags: ["Branding", "Conversión", "Responsive"],
  },
  {
    title: "Catálogo a medida",
    niche: "Comercio / catálogo",
    problem: "El cliente ofrecía muchos productos, pero no tenía un canal elegante para mostrar y cerrar ventas.",
    solution: "Catálogo web escalable, filtros, fichas claras y contacto directo por WhatsApp.",
    result: "Proceso de venta más prolijo y consultas mejor calificadas.",
    tags: ["Catálogo", "UX", "Escalable"],
  },
  {
    title: "Optimización mensual",
    niche: "Soporte continuo",
    problem: "La web existía, pero no convertía ni mantenía velocidad estable.",
    solution: "Mejoras visuales, optimización técnica, SEO on-page y ajustes de copy con criterio de producto.",
    result: "Sitio más premium, rápido y listo para seguir creciendo.",
    tags: ["Performance", "Mantenimiento", "Growth"],
  },
];

export default function PortfolioGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {projects.map((p) => (
        <article key={p.title} className="card premium-panel p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.35em] text-fuchsia-300">{p.niche}</div>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-white">{p.title}</h3>
            </div>
            <div className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
              Caso orientado a ventas
            </div>
          </div>

          <div className="mt-6 grid gap-5 text-sm leading-relaxed text-slate-300">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                <TrendingUp size={15} className="text-fuchsia-300" /> Problema
              </div>
              <p>{p.problem}</p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                <BadgeCheck size={15} className="text-cyan-400" /> Solución
              </div>
              <p>{p.solution}</p>
            </div>
            <div className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 p-4 text-fuchsia-100">
              <strong className="font-black">Resultado:</strong> {p.result}
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}

      <article className="card premium-panel flex flex-col justify-between p-7 lg:col-span-2 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-fuchsia-300">Portfolio que cierra clientes</div>
          <h3 className="mt-3 text-3xl font-black tracking-tight text-white">No mostramos “sitios lindos”. Mostramos decisiones que ayudan a vender.</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Esta nueva estructura convierte el portfolio en una herramienta comercial real: presenta contexto, estrategia, solución y resultado.
          </p>
        </div>
        <a
          href={waLink("Hola! Quiero que me muestres más casos o una propuesta para mi negocio.")}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-6 w-full justify-center lg:mt-0 lg:w-auto"
        >
          Pedir propuesta <ArrowUpRight size={18} />
        </a>
      </article>
    </div>
  );
}
