import React from "react";
import { CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";

const proposals = [
  {
    level: "Nivel 01",
    name: "Landing Page Express",
    price: "$195.000",
    features: ["One-Page optimizada", "Botón WhatsApp", "Carga <1s", "SEO Base"],
  },
  {
    level: "Nivel 02",
    name: "Web Corporativa + Catálogo",
    price: "$390.000",
    features: ["Hasta 5 secciones", "Catálogo estático", "Formulario de contacto", "Diseño de marca"],
  },
  {
    level: "Nivel 03",
    name: "App Web + Panel CMS",
    price: "$780.000",
    features: ["Base de datos", "Panel administrativo para el cliente", "Contenido autogestionable"],
  },
  {
    level: "Nivel 04",
    name: "E-commerce Full Express",
    price: "$1.560.000",
    features: ["Carrito de compras", "Login/Register", "Gestión de Stock", "Integración Mercado Pago"],
  },
  {
    level: "Nivel 05",
    name: "Sistema a Medida / SaaS",
    price: "Consultar",
    features: ["Desarrollo en Java Spring Boot", "Escalabilidad total", "Integraciones API", "Seguridad bancaria"],
  },
];

export default function Propuestas() {
  return (
    <main className="main-content">
      <SEO
        title="Propuestas y Planes | MyE Software Studio"
        description="Elegí el nivel de desarrollo que tu negocio necesita. Desde Landings veloces hasta sistemas a medida en Java y React."
        path="/propuestas"
      />

      <section className="py-14 md:py-20 border-b border-white/5">
        <div className="container-safe">
          <span className="badge mb-6">Planes de desarrollo</span>
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-[1.1]">
            Soluciones escalables para <span className="text-emerald-500">objetivos reales.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-400 leading-relaxed">
            Elegí la propuesta que mejor se adapta a tu etapa actual y escalá con una base técnica sólida.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-safe">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {proposals.map((proposal) => (
              <article key={proposal.level} className="card group p-8 transition-all hover:border-emerald-500/30">
                <span className="badge">{proposal.level}</span>
                <h2 className="mt-5 text-2xl font-black tracking-tighter text-white">{proposal.name}</h2>
                <p className="mt-2 text-3xl font-bold text-emerald-500">{proposal.price}</p>

                <ul className="mt-6 space-y-3 text-slate-300">
                  {proposal.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
