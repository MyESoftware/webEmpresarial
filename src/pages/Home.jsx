import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Pricing from "../components/Pricing";
import { waLink, SITE } from "../config/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="main-content">
      <SEO
        title="MyE Software | Home "
        description="¿Buscás crear tu sitio web o un sistema para tu negocio? En MyE lo hacemos realidad. ¡Asesoramiento hoy!"
        path="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/5">
        {/* Glow de fondo dinámico */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="container-safe py-16 md:py-28">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <div className="badge mb-6">
                Soluciones Digitales en Mendoza
              </div>
              <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-[1.1]">
                Potencia tu negocio <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(52,211,153,0.3)]">
                   hoy.
                </span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-slate-400 max-w-lg">
                ¿Necesitás una página para vender o un sistema para organizar tu local? 
                En <strong>{SITE.brand}</strong> creamos software que escala y que Google ama.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a className="btn btn-primary px-8" href={waLink()} target="_blank" rel="noreferrer">
                  Presupuesto gratis <ArrowRight size={20} />
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
                {["Aparecé en Google", "Fácil de usar", "Soporte 1-a-1"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
                    <CheckCircle2 size={18} className="text-emerald-500" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Card de Proceso */}
            <div className="card p-8 md:p-10 relative">
              <h2 className="text-2xl font-black text-white mb-8 tracking-tighter">¿Cómo trabajamos?</h2>
              <div className="space-y-4">
                {[
                  ["Charla inicial", "Definimos objetivos claros para tu negocio."],
                  ["Plan a medida", "Elegimos la tecnología (React/Angular) ideal."],
                  ["Desarrollo", "Construimos tu sitio con código limpio y rápido."],
                  ["Lanzamiento", "Tu negocio online funcionando al 100%."],
                ].map(([t, d], i) => (
                  <div key={t} className="flex gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/30 transition-all group">
                    <div className="text-emerald-500 font-black text-2xl opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                    <div>
                      <div className="text-sm font-black text-white uppercase tracking-wider">{t}</div>
                      <div className="text-sm text-slate-500 mt-1">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contacto" className="btn btn-outline w-full mt-10">Hacer una consulta</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-24 bg-[#080808]">
        <div className="container-safe">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black md:text-6xl text-white tracking-tighter italic">¿Qué estás buscando?</h2>
            <p className="mt-4 text-slate-400 text-lg">Elegí el plan que mejor se adapte al tamaño de tu proyecto.</p>
          </div>
          <Pricing />
        </div>
      </section>

      {/* FAQ Sección Técnica */}
      <section className="py-24 border-t border-white/5">
        <div className="container-safe max-w-4xl">
          <h2 className="text-3xl font-black text-white text-center mb-16 tracking-tighter">Preguntas frecuentes</h2>
          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-bold text-white uppercase text-xs tracking-widest text-emerald-500 mb-3">Tiempos</h3>
                <p className="text-slate-300 text-sm leading-relaxed">Una landing simple puede estar lista en 7 días. Sistemas complejos dependen de los requerimientos técnicos.</p>
              </div>
              <div className="card p-6">
                <h3 className="font-bold text-white uppercase text-xs tracking-widest text-emerald-500 mb-3">SEO</h3>
                <p className="text-slate-300 text-sm leading-relaxed">Configuramos la arquitectura del sitio para que Google te indexe correctamente desde el primer día.</p>
              </div>
            </div>

            {/* El diferencial técnico */}
            <div className="card p-8 border-emerald-500/20 bg-emerald-500/[0.02]">
              <h3 className="text-2xl font-black text-white flex items-center gap-3 tracking-tighter">
                ¿Por qué React/Angular y no WordPress?
              </h3>
              <p className="text-slate-400 text-sm mt-4 leading-relaxed">
                A diferencia de las plantillas lentas y vulnerables de WordPress, desarrollamos software con tecnologías de alto rendimiento.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  ["Velocidad extrema", "Google premia los sitios rápidos."],
                  ["Seguridad Total", "Sin plugins de terceros vulnerables."],
                  ["Escalabilidad", "Tu sitio puede crecer sin límites."],
                ].map(([t, d]) => (
                  <div key={t}>
                    <div className="text-emerald-500 font-bold text-sm mb-1 uppercase tracking-tighter">{t}</div>
                    <div className="text-xs text-slate-500 leading-relaxed">{d}</div>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 text-[10px] mt-8 uppercase font-bold tracking-[0.2em]">
                * Tu web es técnicamente superior, por eso Google te elige primero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}