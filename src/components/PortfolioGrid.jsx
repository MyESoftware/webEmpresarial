import React from "react";
import { ArrowUpRight, BadgeCheck, TrendingUp, Code2 } from "lucide-react";
import { waLink } from "../config/site";

const projects = [
  {
    title: "Plataforma de Reservas y Gestión B2B",
    niche: "Sistema a Medida",
    problem: "Procesos manuales propensos a errores y falta de control centralizado para la gestión de turnos y pagos.",
    solution: "Desarrollo integral de un panel administrador y portal de clientes automatizado.",
    tech: "React, Node.js, PostgreSQL",
    result: "Reducción del 40% en tiempo de administración y escalabilidad operativa.",
    tags: ["Automatización", "SaaS", "Dashboard"],
  },
  {
    title: "Sitio Corporativo y Captación de Leads",
    niche: "Web Corporativa",
    problem: "Baja tasa de conversión y una imagen digital obsoleta que no reflejaba la calidad del servicio.",
    solution: "Rediseño completo de interfaz, optimización SEO y funnel de conversión de alta velocidad.",
    tech: "React, Vite, Tailwind CSS",
    result: "Aumento del 65% en generación de consultas orgánicas.",
    tags: ["CRO", "Performance", "Branding"],
  },
  {
    title: "E-Commerce Headless de Alta Demanda",
    niche: "Comercio Electrónico",
    problem: "Plataforma anterior lenta que colapsaba en picos de tráfico y eventos de descuentos.",
    solution: "Arquitectura headless robusta con carga ultrarrápida y catálogo dinámico sin interrupciones.",
    tech: "Next.js, Tailwind, API REST",
    result: "Tiempos de carga bajo 1 segundo y soporte para alto volumen transaccional.",
    tags: ["Escalabilidad", "E-commerce", "Performance"],
  },
  {
    title: "Portal de Integración API",
    niche: "Arquitectura y Optimización",
    problem: "Sistemas desconectados que requerían doble carga de datos y generaban inconsistencias.",
    solution: "Desarrollo de middleware e interfaces fluidas para sincronizar inventario y facturación.",
    tech: "Node.js, Express, React",
    result: "Sincronización en tiempo real y eliminación completa de la carga manual.",
    tags: ["Integración", "API", "Optimización"],
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
          </div>

          <div className="mt-6 grid gap-4 text-sm leading-relaxed text-slate-300">
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
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-slate-500">
                <Code2 size={15} className="text-emerald-400" /> Stack Tecnológico
              </div>
              <p className="font-medium text-slate-100">{p.tech}</p>
            </div>
            <div className="mt-2 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-white">
              <strong className="font-black text-fuchsia-300">Impacto:</strong> {p.result}
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
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-fuchsia-300">Construimos confianza</div>
          <h3 className="mt-3 text-3xl font-black tracking-tight text-white">Ingeniería enfocada en el crecimiento de tu negocio.</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Cada proyecto es desarrollado bajo estrictos estándares de rendimiento, escalabilidad y experiencia de usuario. Resolvemos problemas complejos con tecnología robusta.
          </p>
        </div>
        <a
          href={waLink("Hola! Me gustaría conocer más sobre sus desarrollos o agendar una asesoría técnica.")}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary mt-6 w-full justify-center lg:mt-0 lg:w-auto"
        >
          Agendar asesoría <ArrowUpRight size={18} />
        </a>
      </article>
    </div>
  );
}
