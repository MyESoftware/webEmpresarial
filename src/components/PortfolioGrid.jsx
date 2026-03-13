import React from "react";

const projects = [
  { title: "Landing — Estudio jurídico", desc: "Enfoque en confianza, CTA por WhatsApp y performance.", tags: ["Landing","UX","SEO"] },
  { title: "Web institucional — PyME", desc: "Secciones claras, portfolio, formulario y redes.", tags: ["Institucional","Branding","Responsive"] },
  { title: "Sitio a medida — Catálogo", desc: "Estructura escalable y optimización de carga.", tags: ["Custom","Vite","Tailwind"] },
  { title: "Mantenimiento mensual", desc: "Mejoras continuas: velocidad, SEO on-page y contenidos.", tags: ["Mantenimiento","SEO","Performance"] },
];

export default function PortfolioGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p) => (
        <article key={p.title} className="card p-6">
          <h3 className="text-lg font-black">{p.title}</h3>
          <p className="muted mt-2 text-sm leading-relaxed">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => <span key={t} className="badge">{t}</span>)}
          </div>
        </article>
      ))}
    </div>
  );
}
