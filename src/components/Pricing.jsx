import React from "react";
import { Check } from "./icons";

const plans = [
  { name: "Landing Page", price: "Ideal para campañas", items: ["Diseño orientado a conversión","Secciones + CTA","WhatsApp + formularios","Performance y SEO básico"], highlight: true },
  { name: "Sitio a medida", price: "Para marcas en crecimiento", items: ["Arquitectura + UI personalizada","Múltiples páginas","Integraciones (forms, analytics)","SEO on-page + velocidad"] },
  { name: "Mantenimiento", price: "Siempre al día", items: ["Actualizaciones y mejoras","Optimización continua","Soporte mensual","Backups / cambios menores"] },
];

export default function Pricing() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {plans.map((p) => (
        <div key={p.name} className={`card p-6 ${p.highlight ? "border-emerald-500/30 bg-emerald-500/10" : ""}`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-base font-black">{p.name}</div>
              <div className="muted mt-1 text-sm">{p.price}</div>
            </div>
            {p.highlight ? <span className="badge">Más vendido</span> : null}
          </div>
          <ul className="mt-5 space-y-2 text-sm text-slate-300/90">
            {p.items.map((it) => (
              <li key={it} className="flex gap-2">
                <span className="mt-0.5 text-emerald-400"><Check /></span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
