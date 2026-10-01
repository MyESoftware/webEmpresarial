import React from "react";
import SEO from "../components/SEO";
import { SITE, waLink } from "../config/site";
import { MapPin, Users2, Code2, Briefcase, Rocket, ArrowRight } from "lucide-react";

const timeline = [
  {
    step: "01",
    title: "Nacimiento de la idea",
    desc: "Dos desarrolladores de Mendoza deciden crear MyE Software."
  },
  {
    step: "02",
    title: "Primeras soluciones",
    desc: "Comenzamos desarrollando soluciones digitales para empresas y emprendimientos."
  },
  {
    step: "03",
    title: "Crecimiento",
    desc: "MyE Software evoluciona y comienza a formar un equipo más amplio."
  },
  {
    step: "04",
    title: "Productos propios",
    desc: "Además de desarrollar soluciones para terceros, comenzamos a construir nuestros propios productos tecnológicos."
  },
  {
    step: "05",
    title: "Próxima etapa",
    desc: "Red Laboral y Open Comercial. Productos propios actualmente en desarrollo y próximos a lanzamiento."
  }
];

export default function Nosotros() {
  return (
    <main className="main-content">
      <SEO 
        title="Quiénes somos | Evolución y Productos" 
        description="Empezamos como dos desarrolladores de software en Mendoza. Hoy somos un equipo creando soluciones para clientes y desarrollando nuestros propios productos tecnológicos." 
        path="/nosotros" 
      />

      <section className="container-safe py-12 md:py-20 overflow-hidden">
        {/* HERO */}
        <div className="max-w-4xl mb-24 relative z-10">
          <span className="badge mb-6 flex items-center gap-2 w-fit">
            <Users2 size={14} /> Sobre Nosotros
          </span>
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-tight">
            De una idea entre dos desarrolladores a un <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-fuchsia-300">estudio de software.</span>
          </h1>
        </div>

        {/* ORIGEN & FUNDADORES */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32 relative z-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-bold uppercase tracking-widest mb-2">
              <MapPin size={16} /> Mendoza, Argentina
            </div>
            <h2 className="text-4xl font-black text-white tracking-tighter">Todo comenzó en Mendoza.</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Somos dos desarrolladores de software de Mendoza que decidimos convertir una idea en una empresa.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Compartíamos la visión de crear una empresa tecnológica capaz de desarrollar soluciones reales para otras empresas y, con el tiempo, construir también nuestros propios productos.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card p-8 flex flex-col items-center text-center justify-center bg-white/[0.02] border-white/5 hover:border-cyan-500/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 flex items-center justify-center mb-6 border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]">
                <span className="text-2xl font-black text-white tracking-tighter">M</span>
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">Maximiliano</h3>
              <span className="text-cyan-400 text-sm font-bold mt-1">Fundador</span>
            </div>
            
            <div className="card p-8 flex flex-col items-center text-center justify-center bg-white/[0.02] border-white/5 hover:border-fuchsia-500/30 transition-colors">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 flex items-center justify-center mb-6 border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]">
                <span className="text-2xl font-black text-white tracking-tighter">E</span>
              </div>
              <h3 className="text-xl font-black text-white tracking-tight">Eduardo</h3>
              <span className="text-fuchsia-400 text-sm font-bold mt-1">Fundador</span>
            </div>
          </div>
        </div>

        {/* EVOLUCIÓN TIMELINE */}
        <div className="mb-32 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-16 text-center">Nuestra Evolución</h2>
          <div className="grid md:grid-cols-5 gap-8 md:gap-4 lg:gap-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group flex flex-col items-start text-left">
                <div className="text-6xl md:text-5xl lg:text-6xl font-black text-white/5 mb-4 group-hover:text-white/10 transition-colors">
                  {item.step}
                </div>
                <h4 className="text-lg md:text-base lg:text-lg font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
                {/* Arrow indicator for non-last items on desktop */}
                {idx < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 lg:-right-4 text-slate-800">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* PRODUCTOS PROPIOS */}
        <div className="mb-32 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-white tracking-tighter mb-6">Productos Propios</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Además de brindar servicios de desarrollo a medida, invertimos nuestro ADN técnico en construir herramientas tecnológicas propias que resuelven problemas reales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Red Laboral */}
            <div className="card p-8 md:p-10 bg-gradient-to-br from-slate-900 to-black border-white/5 relative overflow-hidden group hover:border-fuchsia-500/20 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Briefcase size={160} className="text-fuchsia-400" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-400 text-xs font-bold uppercase tracking-widest mb-6 border border-fuchsia-500/20">
                  En desarrollo
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-4">Red Laboral</h3>
                <p className="text-slate-300 font-medium mb-4">
                  Sistema integral que busca conectar profesionales independientes con trabajos y tareas disponibles en Mendoza.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Una plataforma donde una persona puede publicar una necesidad y distintos profesionales pueden presentar sus propuestas para que el usuario elija la alternativa que considere más conveniente.
                </p>
              </div>
            </div>

            {/* Open Comercial */}
            <div className="card p-8 md:p-10 bg-gradient-to-br from-slate-900 to-black border-white/5 relative overflow-hidden group hover:border-cyan-500/20 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Rocket size={160} className="text-cyan-400" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 border border-cyan-500/20">
                  Próximamente
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-4">Open Comercial</h3>
                <p className="text-slate-300 font-medium mb-4">
                  Sistema integral para comercios, pensado para centralizar herramientas de gestión y operación en un solo lugar.
                </p>
                <ul className="text-slate-400 text-sm leading-relaxed space-y-2 list-disc list-inside">
                  <li>Sistema de cobros</li>
                  <li>Control de stock</li>
                  <li>Catálogo para clientes</li>
                  <li>Gestión centralizada</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* VISIÓN & CTA */}
        <div className="card p-10 md:p-16 bg-gradient-to-br from-slate-900 to-black border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900/0 to-transparent"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter max-w-3xl mx-auto italic mb-8 leading-tight">
              "Empezamos como dos desarrolladores.<br className="hidden md:block" />
              Hoy somos un equipo.<br className="hidden md:block" />
              Y estamos construyendo nuestros propios productos."
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed mb-10">
              Construimos tecnología propia desde Mendoza, con la misma dedicación que aplicamos a las soluciones de nuestros clientes.
            </p>
            <a 
              className="btn btn-primary px-12 py-5 inline-flex items-center gap-2" 
              href={waLink("¡Hola! Me gustaría hablar sobre una idea de software.")} 
              target="_blank" 
              rel="noreferrer"
            >
              Hablemos de tu proyecto <Code2 size={18} />
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}