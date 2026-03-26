import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import { Terminal, Instagram, MessageCircle, Video } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#050505] overflow-hidden">
      
<div className="absolute inset-0 pointer-events-none">
  <img 
    src="/footer.jpg" 
    alt=""
    className="w-full h-full object-cover object-center opacity-20 grayscale blur-sm"
  />
</div>

      {/* CAPA 2: El contenido (Con z-relative para quedar POR ENCIMA de la imagen) */}
      <div className="container-safe relative py-16 pb-8">
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Columna Branding */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                <Terminal size={20} />
              </div>
              <span className="text-xl font-black text-white tracking-tight uppercase">
                {SITE.brand}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400 italic">
              "{SITE.tagline || 'Transformando ideas en software escalable.'}"
            </p>
            <div className="mt-6 flex gap-4 text-slate-500">
               <a href={SITE.social.instagram} target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
                 <Instagram size={20} />
               </a>
               <a href="https://www.tiktok.com/@myesoftware" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
                 <Video size={20} />
               </a>
            </div>
          </div>

          {/* Columna Navegación */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-4">Navegación</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/propuestas" className="hover:text-white transition-colors">Propuestas</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna Especialidades */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Especialidades</h4>
            <ul className="space-y-3 text-sm text-slate-500 italic">
              <li>React / Java Expert</li>
              <li>Sistemas a medida</li>
              <li>E-commerce Pro</li>
            </ul>
          </div>

          {/* Columna Ubicación */}
          <div className="md:col-span-3 lg:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Ubicación</h4>
            <p className="text-sm text-slate-400 mb-4">{SITE.location}</p>
            <a 
              href={SITE.social.whatsapp || "#"} 
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-500 hover:underline"
            >
              <MessageCircle size={16} />
              WhatsApp Directo
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            © {year} {SITE.brand}
          </div>
        </div>
      </div>
    </footer>
  );
}