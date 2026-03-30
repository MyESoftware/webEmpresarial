import React from "react";
import { ArrowRight } from "lucide-react";
import { Check } from "./icons";
import { waLink } from "../config/site";

const plans = [
  {
    name: "Landing premium",
    subtitle: "Ideal para captar consultas rápido",
    price: "Desde ARS 180k",
    items: [
      "3 secciones de información",
      "Boton directo a WhatsApp",
      "Diseño mobile",
      "SEO + velocidad",
    ],
    highlight: false,
  },
  {
    name: "Sitio web comercial",
    subtitle: "Para negocios que quieren verse grandes y vender mejor",
    price: "Desde ARS 350k",
    items: [
      "Arquitectura personalizada",
      "Secciones estratégicas",
      "Catalogos",
      "Tu vidriera",
    ],
    highlight: true,
  },
  {
    name: "Sistema / tienda online",
    subtitle: "Automatización y operación digital",
    price: "A medida",
    items: [
      "Panel administrador",
      "Reservas, catálogo o ventas",
      "Automatizaciones externas",
      "Escalabilidad técnica",
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
            p.highlight ? "border-emerald-400/30 bg-fuchsia-500/[0.08]" : ""
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xl font-black tracking-tight text-white">{p.name}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-400">{p.subtitle}</div>
            </div>
            {p.highlight ? <span className="badge">Más elegido</span> : null}
          </div>

          <div className="mt-6 text-3xl font-black tracking-tight text-white">{p.price}</div>

          <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300/90">
            {p.items.map((it) => (
              <li key={it} className="flex gap-3">
                <span className="mt-0.5 text-fuchsia-300">
                  <Check />
                </span>
                <span>{it}</span>
              </li>
            ))}
          </ul>

          <a
            className={`mt-7 btn ${p.highlight ? "btn-primary" : "btn-outline"} w-full justify-center`}
            href={waLink(`Hola! Quiero consultar por el plan ${p.name}. ¿Me pasan opciones?`)}
            target="_blank"
            rel="noreferrer"
          >
            Consultar plan <ArrowRight size={18} />
          </a>
        </div>
      ))}
    </div>
  );
}
