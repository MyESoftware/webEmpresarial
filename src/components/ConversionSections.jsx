import React from "react";
import { ArrowRight, BadgeCheck, BarChart3, Bot, BriefcaseBusiness, Clock3, MessageCircleMore, MousePointerClick } from "lucide-react";
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

export function FunnelSection() {
  const steps = [
    {
      icon: MousePointerClick,
      title: "Atracción",
      desc: "Hero con propuesta de valor clara, prueba social y CTA directo.",
    },
    {
      icon: BarChart3,
      title: "Calificación",
      desc: "Simulador de presupuesto que filtra al cliente y capta datos valiosos.",
    },
    {
      icon: MessageCircleMore,
      title: "Conversación",
      desc: "WhatsApp prearmado para seguir el contacto sin perder contexto.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container-safe">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge">Embudo comercial</span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-5xl">
            Una web que no solo se ve premium: también vende.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Reordenamos la experiencia para llevar al visitante desde el interés hasta la consulta real.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="card premium-panel p-6">
                <div className="flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-fuchsia-500/10 text-fuchsia-300">
                    <Icon size={24} />
                  </div>
                  <div className="text-xs font-black tracking-[0.35em] text-slate-600">0{index + 1}</div>
                </div>
                <h3 className="mt-6 text-xl font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.desc}</p>
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
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-fuchsia-300">
                <BadgeCheck size={16} /> Estética premium + estrategia comercial
              </div>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-5xl">
                Tu web tiene que sentirse como una agencia cara y trabajar como un vendedor senior.
              </h2>
          
            </div>
            <div className="space-y-3">
              <a className="btn btn-primary w-full justify-center px-8" href={waLink("Hola! Quiero avanzar con una web premium para vender más. ¿La vemos?")} target="_blank" rel="noreferrer">
                Quiero una web que venda <ArrowRight size={18} />
              </a>
              <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                <Clock3 size={15} /> Cupos limitados por mes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
