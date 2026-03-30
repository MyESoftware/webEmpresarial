import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Pricing from "../components/Pricing";
import PortfolioGrid from "../components/PortfolioGrid";
import LeadCaptureWizard from "../components/LeadCaptureWizard";
import { FunnelSection, PremiumCTA, TrustStrip } from "../components/ConversionSections";
import { waLink, SITE } from "../config/site";
import { ArrowRight, ShieldCheck, Star, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="main-content">
      <SEO
        title="Diseño en Mendoza | MyE Software"
        description="Creamos páginas web, tiendas online y sistemas que hacen ver mejor a tu negocio y convierten visitas en clientes."
        path="/"
      />

      <section className="py-8 pt-28 md:py-10 md:pt-32">
        <div className="container-safe">
          <div className="hero-card relative overflow-hidden rounded-[2.4rem] border border-white/10 min-h-[620px] md:min-h-[720px]">
            <div className="absolute inset-0">
              <img
                src="/images/hero-mye-tech.jpg"
                alt="MyE Software tecnología"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="hero-card-overlay absolute inset-0" />
            <div className="hero-card-glow absolute inset-0" />

            <div className="relative z-10 flex min-h-[620px] md:min-h-[720px] items-center p-6 md:p-10 lg:p-14 xl:p-16">
              <div className="hero-copy max-w-4xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="badge">Estudio digital tecnológico</span>
                  <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 backdrop-blur-sm">
                    Mendoza · Argentina
                  </span>
                </div>

                <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-[-0.05em] text-white md:text-7xl xl:text-[5.4rem] xl:leading-[0.92]">
                  Construimos una presencia digital
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-200">
                    que hace que tu negocio
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200">
                    se vea premium, tecnológico y listo para vender.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-[1.16rem]">
                  En <strong>{SITE.brand}</strong> combinamos diseño de alto impacto, estructura comercial, velocidad y automatización para que tu web inspire confianza, ordene consultas y convierta visitas en oportunidades reales.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    className="btn btn-primary px-8"
                    href={waLink("Hola! Quiero una web premium para vender más. ¿Vemos mi proyecto?")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pedir propuesta <ArrowRight size={20} />
                  </a>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-3">
                  {[
                    [ShieldCheck, "Diseño de autoridad", "Una estética que hace que tu marca parezca más seria y valiosa."],
                    [Star, "Experiencia premium", "Jerarquía visual, contraste y claridad para vender mejor."]
                  ].map(([Icon, title, desc]) => (
                    <div key={title} className="rounded-[1.6rem] border border-white/10 bg-black/25 p-5 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
                      <Icon size={20} className="text-fuchsia-300" />
                      <div className="mt-4 text-sm font-black uppercase tracking-[0.15em] text-white">{title}</div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="py-24">
        <div className="container-safe">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="badge">Oferta comercial</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-white md:text-6xl">Servicios diseñados para vender, no solo para “estar en internet”.</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Reordenamos tu presencia digital para que la propuesta se entienda rápido, el diseño transmita valor y el visitante tenga un siguiente paso claro.
            </p>
          </div>
          <Pricing />
        </div>
      </section>


      <section className="py-24">
        <div className="container-safe">
          <LeadCaptureWizard />
        </div>
      </section>

      <FunnelSection />
      <PremiumCTA />

     
    </main>
  );
}
