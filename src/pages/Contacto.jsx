import React, { useMemo, useState } from "react";
import SEO from "../components/SEO";
import { SITE, waLink } from "../config/site";
import { Mail, MapPin, Share2, MessageSquareText, Send, Video } from "lucide-react"; // Video es ideal para TikTok

export default function Contacto() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [servicio, setServicio] = useState("Landing page");

  const msg = useMemo(() => {
    const lines = ["¡Hola! Me gustaría solicitar un presupuesto:"];
    if (nombre.trim()) lines.push(`👤 Nombre: ${nombre.trim()}`);
    if (empresa.trim()) lines.push(`🏢 Marca/Negocio: ${empresa.trim()}`);
    if (servicio.trim()) lines.push(`💻 Servicio: ${servicio.trim()}`);
    if (objetivo.trim()) lines.push(`🎯 Objetivo: ${objetivo.trim()}`);
    return lines.length > 1 ? lines.join("\n") : "Hola! Quiero un presupuesto para una web.";
  }, [nombre, empresa, servicio, objetivo]);

  return (
    <main className="main-content">
      <SEO 
        title="Contacto | Pedí tu Presupuesto" 
        description="¿Tenés un proyecto en mente? Hablemos por WhatsApp. Respuesta inmediata para PyMEs y emprendedores." 
        path="/contacto" 
      />

      <section className="container-safe py-12 md:py-20">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          <div className="space-y-10">
            <div>
              <span className="badge mb-6">Canales de Contacto</span>
              <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-none">
                Llevá tu idea al <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">siguiente nivel.</span>
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-slate-400">
                Estamos en <strong>Mendoza</strong>, pero trabajamos para todo el mundo. Escribinos y te asesoramos técnicamente sin compromiso.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-5 card p-6 bg-white/[0.02]">
                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-1">Email</div>
                  <div className="text-slate-200 font-bold">{SITE.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-5 card p-6 bg-white/[0.02]">
                <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-1">Ubicación</div>
                  <div className="text-slate-200 font-bold">{SITE.location}</div>
                </div>
              </div>

              <div className="card p-8 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                  <Share2 size={16} /> Redes Sociales
                </div>
                <div className="flex flex-wrap gap-4">
                  <a className="btn btn-outline text-xs px-5" href={SITE.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
                  <a className="btn btn-outline text-xs px-5 flex items-center gap-2" href="https://www.tiktok.com/@myesoftware" target="_blank" rel="noreferrer">
                    <Video size={14} /> TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-8 md:p-12 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-10">
               <div className="p-3 bg-emerald-500 text-slate-950 rounded-xl">
                 <MessageSquareText size={24} strokeWidth={3} />
               </div>
               <h2 className="text-3xl font-black text-white tracking-tighter uppercase">Presupuestador</h2>
            </div>
            
            <div className="grid gap-8">
              <div className="space-y-3">
                <label className="label" htmlFor="nombre">Tu Nombre</label>
                <input id="nombre" className="input" placeholder="Ej: Maximiliano" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>

              <div className="space-y-3">
                <label className="label" htmlFor="empresa">Nombre de tu Marca</label>
                <input id="empresa" className="input" placeholder="Ej: Mi Empresa S.A." value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
              </div>

              <div className="space-y-3">
                <label className="label" htmlFor="servicio">¿Qué necesitás?</label>
                <select id="servicio" className="input appearance-none cursor-pointer" value={servicio} onChange={(e) => setServicio(e.target.value)}>
                  <option>Landing page</option>
                  <option>Sitio Web a medida</option>
                  <option>Sistema / App Web</option>
                  <option>Mantenimiento mensual</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="label" htmlFor="objetivo">Contanos tu idea</label>
                <textarea id="objetivo" className="input min-h-[120px] resize-none" placeholder="Contanos brevemente qué buscás lograr..." value={objetivo} onChange={(e) => setObjetivo(e.target.value)} />
              </div>

              <a className="btn btn-primary w-full py-5 text-lg" href={waLink(msg)} target="_blank" rel="noreferrer">
                <Send size={22} strokeWidth={3} /> Enviar a WhatsApp
              </a>

              <p className="text-center text-[10px] font-black text-slate-700 uppercase tracking-widest mt-4">
                Sin formularios lentos. Respuesta técnica garantizada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}