import React from "react";
import { ArrowRight } from "lucide-react";
import { Check } from "./icons";
import { waLink } from "../config/site";

const plans = [
  {
    name: "Web Corporativa",
    subtitle: "Presencia digital robusta para captar consultas B2B",
    price: "Desde ARS 160k",
    items: [
      "Diseño UI/UX exclusivo",
      "Alta velocidad de carga (Performance)",
      "Optimización SEO inicial",
      "Soporte y mantenimiento base",
    ],
    highlight: false,
  },
  {
    name: "E-Commerce / Catálogo",
    subtitle: "Escalabilidad para negocios con alto volumen de productos",
    price: "Desde ARS 275k",
    items: [
      "Arquitectura preparada para tráfico alto",
      "Integración con pasarelas de pago",
      "Panel autogestionable",
      "Soporte técnico preferencial",
    ],
    highlight: true,
  },
  {
    name: "Desarrollo a Medida / SaaS",
    subtitle: "Software complejo, automatizaciones e integraciones",
    price: "A medida",
    items: [
      "Consultoría de arquitectura de software",
      "Sistemas de gestión, reservas o dashboards",
      "Integración de APIs externas",
      "Mantenimiento evolutivo constante",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {plans.map((p) => (
        <div
          key={p.name}
          className={`card premium-panel flex h-full flex-col p-7 ${
            p.highlight ? "border-emerald-400/30 bg-emerald-500/[0.05]" : ""
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xl font-black tracking-tight text-white">{p.name}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-400">{p.subtitle}</div>
            </div>
            {p.highlight ? <span className="badge border-emerald-400/20 text-emerald-300">Más elegido</span> : null}
          </div>

          <div className="mt-6 text-3xl font-black tracking-tight text-white">{p.price}</div>
          <div className="mt-2 text-xs text-slate-500">Cotización final según requerimientos técnicos</div>

          <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300/90">
            {p.items.map((it) => (
              <li key={it} className="flex gap-3">
                <span className="mt-0.5 text-emerald-400">
                  <Check />
                </span>
                <span>{it}</span>
              </li>
            ))}
          </ul>

          <a
            className={`mt-7 btn ${p.highlight ? "btn-primary" : "btn-outline"} w-full justify-center`}
            href={waLink(`Hola! Quiero consultar por el desarrollo de un proyecto tipo: ${p.name}.`)}
            target="_blank"
            rel="noreferrer"
          >
            Consultar viabilidad <ArrowRight size={18} />
          </a>
        </div>
      ))}
    </div>
  );
}
