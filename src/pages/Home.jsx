import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Pricing from "../components/Pricing";
import LeadCaptureWizard from "../components/LeadCaptureWizard";
import { WhyChooseUsSection, PremiumCTA, TrustStrip } from "../components/ConversionSections";
import { waLink } from "../config/site";
import { ShieldCheck, Code, Smartphone, Zap, Store, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="main-content">
      <SEO
        title="Agencia de Desarrollo Web Premium & SaaS a Medida"
        description="Transformamos negocios con páginas web, tiendas online y sistemas a medida. Diseño premium, tecnología avanzada y estrategias para convertir visitas en clientes."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
        {/* Glow muy sutil para evitar una interfaz completamente plana */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-fuchsia-500/10 blur-[120px] pointer-events-none" />

        <div className="container-safe">
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                <Code size={12} className="text-fuchsia-400" /> Software Studio
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem] lg:leading-[1.1] mb-8">
              Desarrollamos software para empresas y construimos productos tecnológicos propios.
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl mb-12">
              Diseñamos soluciones a medida para clientes e impulsamos el ecosistema digital mendocino con nuestros propios productos tecnológicos en desarrollo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
              <Link
                to="/servicios"
                className="btn w-full sm:w-auto px-8 py-4 text-base bg-white text-black hover:bg-slate-200 font-bold transition-colors"
              >
                Ver servicios
              </Link>
              <Link
                to="/productos"
                className="btn w-full sm:w-auto px-8 py-4 text-base bg-transparent text-white border border-white/20 hover:bg-white/5 font-bold transition-colors"
              >
                Ver productos
              </Link>
            </div>

            {/* Differentiators */}
            <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-center md:gap-8 text-sm font-semibold text-slate-500">
              <div className="flex items-center justify-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
                Desarrollo a medida
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Tecnología moderna
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Arquitectura escalable
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                Soporte personalizado
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Value Proposition Grid */}
      <section className="py-20 border-y border-white/5">
        <div className="container-safe">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Diseño y Experiencia (UX/UI)",
                desc: "Interfaces limpias y profesionales que transmiten seriedad y garantizan una navegación intuitiva para tus usuarios.",
                color: "text-purple-400"
              },
              {
                icon: Zap,
                title: "Rendimiento y Escalabilidad",
                desc: "Arquitectura moderna orientada a la velocidad y estabilidad. Tu plataforma soportará el crecimiento sin caídas.",
                color: "text-cyan-400"
              },
              {
                icon: Smartphone,
                title: "Foco Comercial",
                desc: "Cada desarrollo está optimizado para generar conversiones y adaptarse de forma nativa a dispositivos móviles.",
                color: "text-blue-400"
              }
            ].map(({ icon: Icon, title, desc, color }, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-3xl border border-white/5 bg-slate-900 p-8 transition-all hover:bg-slate-800 hover:border-white/10"
              >
                <div className={`mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 ${color}`}>
                  <Icon size={28} />
                </div>
                <h3 className="mb-4 text-xl font-bold text-white tracking-tight">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Pricing */}
      <section className="py-24">
        <div className="container-safe">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="badge mb-4">Nuestras Soluciones</span>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
              Servicios diseñados para escalar.
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Desde landing pages de alta conversión hasta sistemas robustos a medida y bots de WhatsApp integrados.
            </p>
          </div>
          <Pricing />
        </div>
      </section>

      {/* Own Products Preview */}
      <section className="py-24 bg-slate-900/40 border-t border-white/5">
        <div className="container-safe">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="badge mb-4">Software Studio</span>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
              Nuestros productos.
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              Soluciones tecnológicas propias en desarrollo para resolver problemas reales del ecosistema comercial y laboral.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="card p-8 border border-white/5 bg-slate-800/80 hover:border-cyan-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5 text-cyan-400">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Red Laboral</h3>
              </div>
              <p className="text-slate-400 mb-6 text-sm">
                Conectando profesionales independientes con oportunidades y trabajos en Mendoza.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400/80 bg-cyan-400/10 px-3 py-1 rounded-full">En desarrollo</span>
              </div>
            </div>

            <div className="card p-8 border border-white/5 bg-slate-800/80 hover:border-fuchsia-500/30 transition-all group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-xl bg-white/5 text-fuchsia-400">
                  <Store size={24} />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Open Comercial</h3>
              </div>
              <p className="text-slate-400 mb-6 text-sm">
                Sistema centralizado para que comerciantes gestionen stock, ventas y catálogo.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-fuchsia-400/80 bg-fuchsia-400/10 px-3 py-1 rounded-full">Próximamente</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/productos" className="btn btn-outline px-8 py-4 text-sm font-bold bg-white/5 hover:bg-white/10 transition-colors">
              Conocer más sobre nuestros productos
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Wizard */}
      <section className="py-24 bg-dark-surface/50 border-t border-white/5">
        <div className="container-safe">
          <LeadCaptureWizard />
        </div>
      </section>

      <WhyChooseUsSection />
      
      {/* Floating/Highlighted Final CTA */}
      <PremiumCTA />
      
    </main>
  );
}

