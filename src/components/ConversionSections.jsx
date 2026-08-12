import React from "react";
import { ArrowRight, BadgeCheck, Code2, Server, Smartphone, MonitorSmartphone, Layers, Cpu } from "lucide-react";
import { SITE, waLink } from "../config/site";

export function TrustStrip() {
  return (
    <section className="border-y border-white/5 bg-black/20">
      <div className="container-safe grid gap-4 py-6 md:grid-cols-3 md:gap-6">
        {SITE.metrics.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
            <div className="text-3xl font-black tracking-tight text-white">{item.value}</div>
            <div className="mt-1 text-xs font-black uppercase tracking-[0.28em] text-slate-500">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Code2,
      title: "Stack Moderno",
      desc: "Desarrollamos con React, Next.js y Node.js para garantizar alta velocidad y mantenibilidad a largo plazo.",
    },
    {
      icon: Server,
      title: "Infraestructura Cloud",
      desc: "Despliegues en AWS y Vercel con arquitecturas serverless preparadas para alta concurrencia.",
    },
    {
      icon: Layers,
      title: "Diseño Escalable",
      desc: "Interfaces modulares y sistemas basados en componentes que crecen al ritmo de tu empresa.",
    },
    {
      icon: Cpu,
      title: "Optimización Continua",
      desc: "Auditorías de rendimiento, SEO técnico y prácticas CI/CD para iteraciones seguras.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container-safe">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">Por qué elegirnos</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-5xl">
            Ingeniería de alto rendimiento.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Construimos con las mismas tecnologías y estándares de calidad que eligen las empresas líderes del sector tecnológico.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="card premium-panel p-6 hover:bg-white/[0.04]">
                <div className="flex items-center justify-between mb-6">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-black text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{feature.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function PremiumCTA() {
  return (
    <section className="pb-24">
      <div className="container-safe">
        <div className="card premium-panel relative overflow-hidden p-8 md:p-12">
          <div className="absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center relative z-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-fuchsia-300">
                <BadgeCheck size={16} /> Socios Tecnológicos
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-5xl">
                Tecnología que respalda el crecimiento de tu empresa.
              </h2>
              <p className="mt-4 text-slate-400 max-w-xl">
                Agenda una consultoría técnica para evaluar la viabilidad de tu proyecto y descubrir cómo podemos escalar tu negocio.
              </p>
            </div>
            <div className="space-y-4">
              <a className="btn btn-primary w-full justify-center px-8" href={waLink("Hola! Me gustaría agendar una consultoría técnica para mi empresa.")} target="_blank" rel="noreferrer">
                Agendar consultoría <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
