import React from "react";
import SEO from "../components/SEO";
import { SITE, waLink } from "../config/site";
import { CheckCircle2, Terminal, Users2, Rocket } from "lucide-react";

const valores = [
  {
    t: "Enfoque en negocio",
    d: "No diseñamos 'páginas lindas', creamos herramientas de ventas.",
    icon: <Rocket className="text-fuchsia-400" size={24} />
  },
  {
    t: "Velocidad + SEO",
    d: "Webs optimizadas para Google y usuarios impacientes. Velocidad de carga extrema garantizada.",
    icon: <CheckCircle2 className="text-fuchsia-400" size={24} />
  },
  {
    t: "ADN Programador",
    d: "Dominamos el stack técnico profesional (Java, React, SQL). Nada de plantillas limitadas, dependientes o inseguras.Permitiendole a tu pagina crecer sin limites",
    icon: <Terminal className="text-fuchsia-400" size={24} />
  }
];

export default function Nosotros() {
  return (
    <main className="main-content">
      <SEO 
        title="Quiénes somos" 
        description="Especialistas en desarrollo web escalable y soluciones a medida en Mendoza." 
        path="/nosotros" 
      />

      <section className="container-safe py-12 md:py-20">
        <div className="max-w-4xl">
          <span className="badge mb-6 flex items-center gap-2 w-fit">
            <Users2 size={14} /> Sobre {SITE.brand}
          </span>
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-none">
            Pasión por el código, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300">foco en resultados.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            En {SITE.brand} trabajamos con un enfoque pragmático: entendemos tu modelo de negocio y construimos la infraestructura digital que necesitás para escalar sin límites técnicos.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {valores.map(({ t, d, icon }) => (
            <div key={t} className="card p-10 hover:border-fuchsia-500/30 transition-all group">
              <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] w-fit group-hover:scale-110 transition-transform shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]">
                {icon}
              </div>
              <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter">{t}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>

        <section className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-black text-white tracking-tighter">¿Por qué elegirnos?</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
     Manejamos stacks tecnológicos robustos como <strong>Java Spring Boot</strong> y <strong>React/Angular</strong>, lo que nos permite crear software de alta gama.
            </p>
            <ul className="space-y-5">
              {[
                "Comunicación directa con el equipo técnico",
                "Código limpio, mantenible y escalable",
                "Desarrollo local desde Mendoza para el mundo",
                "Asesoramiento técnico honesto y transparente"
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-sm font-bold text-slate-300 uppercase tracking-tight">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(168,85,247,0.55)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            <div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-transparent rounded-[3rem] border border-white/5 flex items-center justify-center p-12 overflow-hidden shadow-2xl">
              <div className="text-center group-hover:scale-110 transition-transform duration-700">
                  <div className="text-8xl mb-6">🚀</div>
                  <div className="text-[10px] font-black text-fuchsia-400/60 uppercase tracking-[0.5em]">Building for the future</div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] p-6 rounded-2xl border border-white/10 shadow-2xl hidden md:block">
                 <pre className="text-xs text-fuchsia-400/70 font-mono italic">
                   {`while(business.growing) {
  optimize(ux);
  scale(backend);
}`}
                 </pre>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-32 card p-10 md:p-16 bg-gradient-to-br from-[#0a0a0a] to-black border-white/5 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter max-w-2xl mx-auto italic">
            ¿Tenés una idea? <br /> Nosotros la bajamos a tierra.
          </h2>
          <p className="text-slate-500 mt-6 max-w-lg mx-auto text-lg leading-relaxed">
            Te daremos una visión técnica honesta y la mejor opción tecnológica para tu presupuesto actual.
          </p>
          <a 
            className="btn btn-primary px-12 py-5 mt-10" 
            href={waLink("¡Hola! Me gustaría hablar sobre una idea de software.")} 
            target="_blank" 
            rel="noreferrer"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}