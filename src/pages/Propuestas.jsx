import React from "react";
import { CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import { waLink } from "../config/site";

const propuestas = [
  {
    level: "Nivel 01",
    name: "Landing Page Express",
    price: "$180.000",
    details: ["One-Page", "Botón WhatsApp", "Carga <1s", "SEO Base"],
  },
  {
    level: "Nivel 02",
    name: "Web Corporativa + Catálogo",
    price: "$310.000",
    details: ["Hasta 5 secciones", "Catálogo estático", "Formulario de contacto"],
  },
  {
    level: "Nivel 03",
    name: "App Web + Panel CMS",
    price: "$650.000",
    details: ["Base de datos", "Panel administrativo", "Contenido autogestionable"],
  },
  {
    level: "Nivel 04",
    name: "E-commerce Full Express",
    price: "$1.200.000",
    details: ["Carrito", "Login/Register", "Gestión Stock", "Integración Mercado Pago"],
  },
  {
    level: "Nivel 05",
    name: "Sistema a Medida / SaaS",
    price: "Consultar",
    details: ["Backend en Java Spring Boot", "Escalabilidad", "Integraciones API"],
  },
];

const faqItems = [
  {
    q: "¿Cuánto tardan los proyectos?",
    a: "La demora depende de la complejidad: Nivel 01 (7 días), Nivel 02 (15-20 días), Niveles 03 y 04 (30-45 días).",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Somos una empresa con base en Mendoza, Argentina, brindando soluciones locales con estándares globales.",
  },
  {
    q: "¿La web es mía?",
    a: "Sí, el código es de tu propiedad y entregamos el acceso total una vez finalizado el pago.",
  },
];

export default function Propuestas() {
  return (
    <main className="main-content">
      <SEO
        title="Propuestas y Planes"
        description="Elegí el nivel de desarrollo que tu negocio necesita. Desde landings veloces hasta sistemas a medida."
        path="/propuestas"
      />

      <section className="py-14 md:py-20 border-b border-white/5">
        <div className="container-safe">
          <span className="badge mb-6">Propuestas MyE Software</span>
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-[1.1]">
            Propuestas de Software <span className="text-emerald-500">Transparentes.</span>
          </h1>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-safe space-y-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {propuestas.map((plan) => (
              <article key={plan.level} className="card group p-8 transition-all hover:border-emerald-500/30">
                <span className="badge">{plan.level}</span>
                <h2 className="mt-4 text-2xl font-black tracking-tighter text-white">{plan.name}</h2>
                <p className="mt-2 text-3xl font-bold text-emerald-500">{plan.price}</p>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {plan.details.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="card p-8 bg-emerald-500/5 border-emerald-500/20">
            <h3 className="text-2xl font-black tracking-tighter text-white">Condiciones de servicio</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li><span className="font-bold text-white">Metodología de Pago:</span> Se abona el 50% al inicio del proyecto y el 50% restante previo al deploy final.</li>
              <li><span className="font-bold text-white">Proceso de Revisión:</span> Realizamos una instancia de revisión técnica con el cliente antes del lanzamiento oficial.</li>
              <li><span className="font-bold text-white">Gastos Externos:</span> Los costos de Dominio (.com / .com.ar) y Hosting corren por cuenta del cliente (brindamos asesoramiento gratuito para la compra).</li>
            </ul>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {faqItems.map((item) => (
              <article key={item.q} className="card p-6">
                <h4 className="text-lg font-black tracking-tighter text-white">{item.q}</h4>
                <p className="mt-3 text-slate-400 leading-relaxed">{item.a}</p>
              </article>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <a className="btn btn-primary px-8" href={waLink()} target="_blank" rel="noreferrer">
              Iniciar consulta por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
