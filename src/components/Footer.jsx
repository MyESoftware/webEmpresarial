import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../config/site";
import { Terminal, Instagram, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
      <div className="container-safe">
        <div className="grid gap-12 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Columna Branding */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Terminal size={20} />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                {SITE.brand}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400 italic">
              "{SITE.tagline || 'Transformando ideas en software escalable y de alto impacto.'}"
            </p>
            <div className="mt-6 flex gap-4 text-slate-500">
               {/* Iconos de redes rápidos */}
               <a href={SITE.social.instagram} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Columna Navegación */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Navegación</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-400">
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna Especialidades */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Nos especializamos en:</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2 italic">Desarrollo de Software</li>
              <li className="flex items-center gap-2 italic">Consultoria</li>
              <li className="flex items-center gap-2 italic">Optimización</li>
              <li className="flex items-center gap-2 italic">Mantenimiento</li>
            </ul>
          </div>

          {/* Columna Contacto Rápido */}
          <div className="md:col-span-3 lg:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4">Ubicación</h4>
            <p className="text-sm text-slate-400 mb-4">{SITE.location}</p>
            <a 
              href={SITE.social.whatsapp || "#"} 
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline underline-offset-4"
            >
              <MessageCircle size={16} />
              Soporte vía WhatsApp
            </a>
          </div>
        </div>

        {/* Barra inferior de Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
            © {year} {SITE.brand} 
          </div>
          
        </div>
      </div>
    </footer>
  );
}