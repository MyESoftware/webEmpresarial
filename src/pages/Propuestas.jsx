import React from "react";
import { CheckCircle2, Zap } from "lucide-react";
import SEO from "../components/SEO";
import { waLink } from "../config/site";

const propuestas = [
  {
    level: "Nivel 01",
    name: "Landing Page Express",
    price: "$180.000",
    oldPrice: "$250.000",
    details: ["Hasta 3 secciones", "Botón a chat de WhatsApp Business", "Carga ultra veloz", "Vidriera virtual de alta conversión"],
  },
  {
    level: "Nivel 02",
    name: "Web Corporativa + Catálogo",
    price: "$290.000",
    oldPrice: "$375.000",
    details: ["Hasta 5 secciones independientes", "Catálogo estático (sin carrito)", "Formulario de contacto profesional", "Optimización SEO "],
  },
  {
    level: "Nivel 03",
    name: "App Web + Panel CMS",
    price: "$515.000",
    oldPrice: "$700.000",
    details: ["Base de datos incluida", "Panel administrativo intuitivo", "Catálogo autogestionable por el cliente", "Escalabilidad garantizada"],
  },
  {
    level: "Nivel 04",
    name: "E-commerce Full Express",
    price: "$1.050.000",
    oldPrice: "$1.350.000",
    details: ["Carrito de compras", "Login/Registro de usuarios", "Gestión de Stock", "Integración con Mercado Pago"],
  },
  {
    level: "Nivel 05",
    name: "Sistema a Medida / SaaS",
    price: "Consultar",
    oldPrice: null,
    details: ["Backend robusto en Java Spring Boot", "Escalabilidad ilimitada", "Integraciones API avanzadas", "Seguridad de nivel bancario"],
  },
];

const faqItems = [
  {
    q: "¿Cuánto tardan los proyectos?",
    a: "La demora depende de la complejidad técnica. Un desarrollo simple (Nivel 01) puede estar listo en 7 días, mientras que sistemas complejos requieren de 30 a 60 días.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Somos una empresa con base en Mendoza, Argentina, brindando soluciones tecnológicas locales con estándares de calidad globales.",
  },
  {
    q: "¿La web es mía?",
    a: "Sí, el código es de tu propiedad exclusiva y entregamos el acceso total a los repositorios y servidores una vez finalizado el pago.",
  },
  {
    q: "¿Por qué elegir nuestras tecnologías?",
    a: "A diferencia de las plataformas tradicionales como WordPress, que cargan cientos de archivos innecesarios en cada visita, nuestras webs desarrolladas en React o Angular funcionan como aplicaciones de alto rendimiento. El sitio se entrega optimizado y ligero, permitiendo una carga instantánea. Google premia esta velocidad (SEO Técnico), mejorando tu posicionamiento y evitando que los clientes se frustren por esperas largas.",
  },
  {
    q: "¿Es seguro el desarrollo?",
    a: "Sí. Al elegir un desarrollo a medida con hosting propio y tecnologías modernas, eliminás de raíz el 90% de las vulnerabilidades comunes. Las plataformas masivas son el blanco preferido de ataques porque dependen de plugins de terceros con fallos de seguridad. En MyE escribimos el código; no hay puertas traseras ni complementos desconocidos. Vos tenés el control total de tu información.",
  }
];

export default function Propuestas() {
  return (
    <main className="main-content">
      <SEO
        title="Propuestas y Planes de Desarrollo | MyE Software"
        description="Elegí el nivel de desarrollo que tu negocio necesita en Mendoza. Desde landings veloces hasta sistemas complejos a medida."
        path="/propuestas"
      />

      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="container-safe relative z-10 text-center">
          <span className="badge mb-6">Ingeniería de Software Mendocina</span>
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-[1.1] max-w-4xl mx-auto">
            Propuestas de Software <span className="text-fuchsia-400">Transparentes.</span>
          </h1>
          <p className="mt-8 text-lg text-slate-400 max-w-2xl mx-auto">
            Elegí el plan que mejor se adapte a la etapa actual de tu empresa. Sin costos ocultos y con tecnología de alto rendimiento.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 blur-[120px] -z-10 rounded-full" />
      </section>

      <section className="py-16 md:py-24">
        <div className="container-safe space-y-16">
          {/* Grid de Propuestas */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {propuestas.map((plan) => (
              <article key={plan.level} className="card group p-8 transition-all hover:border-fuchsia-500/30 flex flex-col relative overflow-hidden">
                {plan.oldPrice && (
                    <div className="absolute top-0 right-0 bg-fuchsia-500/10 text-fuchsia-300 font-black text-[9px] uppercase tracking-[0.2em] px-5 py-2 rounded-bl-xl border-l border-b border-fuchsia-500/20 flex items-center gap-1.5">
                        <Zap size={12}/> Descuento Lanzamiento
                    </div>
                )}
                
                <div className="flex-1">
                    <span className="badge bg-white/5 text-slate-400">{plan.level}</span>
                    <h2 className="mt-5 text-2xl font-black tracking-tighter text-white uppercase">{plan.name}</h2>
                    
                    <div className="mt-4 flex items-baseline gap-3">
                        <p className="text-4xl font-black text-fuchsia-400 tracking-tighter">{plan.price}</p>
                        {plan.oldPrice && (
                            <p className="text-sm font-medium text-slate-600 line-through tracking-tight">{plan.oldPrice}</p>
                        )}
                    </div>
                    
                    <ul className="mt-8 space-y-4 text-slate-300">
                      {plan.details.map((item) => (
                        <li key={item} className="flex items-start gap-3.5 text-sm">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-fuchsia-400 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                </div>
                
                <a className="btn btn-outline w-full mt-10 py-4 group-hover:bg-fuchsia-500 group-hover:text-slate-950 transition-colors" href={waLink(`Hola! Me interesa la propuesta ${plan.name} (${plan.level})`)} target="_blank" rel="noreferrer">
                    Consultar por este plan
                </a>
              </article>
            ))}
          </div>

          {/* Condiciones de Servicio */}
          <div className="card p-10 bg-fuchsia-500/[0.04] border-fuchsia-500/20 relative overflow-hidden">
            <h3 className="text-3xl font-black tracking-tighter text-white">Condiciones Técnicas y de Pago</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-10 text-sm">
                {[
                    ["Metodología de Pago", "Se abona el 50% al inicio del proyecto y el 50% restante previo al lanzamiento final."],
                    ["Proceso de Revisión", "Realizamos una instancia de revisión técnica con el cliente antes del deploy oficial."],
                    ["Gastos Externos", "Los costos de Dominio (.com / .com.ar) y Hosting corren por cuenta del cliente (brindamos asesoramiento técnico gratuito)."]
                ].map(([title, desc]) => (
                    <div key={title} className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                        <span className="font-black text-white uppercase text-xs tracking-widest text-fuchsia-400">{title}</span>
                        <p className="mt-3 text-slate-300 leading-relaxed">{desc}</p>
                    </div>
                ))}
            </div>
          </div>

          {/* FAQ Sección */}
          <div className="pt-10">
            <h3 className="text-3xl font-black tracking-tighter text-white text-center mb-16">Preguntas frecuentes</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {faqItems.map((item) => (
                <article key={item.q} className="card p-8 bg-slate-900/30">
                  <h4 className="text-lg font-black tracking-tighter text-white leading-snug">{item.q}</h4>
                  <p className="mt-4 text-slate-400 leading-relaxed text-sm">{item.a}</p>
                </article>
              ))}
            </div>
          </div>

          {/* CTA Final */}
          <div className="flex justify-center pt-10">
            <a className="btn btn-primary px-12 py-5 text-lg group" href={waLink("Hola! Vi tus propuestas y me gustaría hacer una consulta técnica.")} target="_blank" rel="noreferrer">
              Iniciar consulta por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}