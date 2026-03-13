import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SITE } from "../config/site";
import { Terminal, Menu, X, Instagram, Linkedin } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    ["Home", "/"],
    ["Servicios", "/servicios"],
    ["Nosotros", "/nosotros"],
    ["Contacto", "/contacto"],
  ];

  return (
    <>
      <header className="sticky top-0 z-[50] border-b border-white/5 bg-[#050505]/90 backdrop-blur-xl h-20">
        <div className="container-safe h-full flex items-center justify-between">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500 text-slate-950">
              <Terminal size={22} strokeWidth={3} />
            </div>
            <div className="flex flex-col text-left leading-none">
              <span className="text-lg font-black tracking-tighter text-white uppercase">{SITE.brand}</span>
              <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.2em] mt-1">Software Studio</span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-2xl border border-white/5">
            {navLinks.map(([label, to]) => (
              <NavLink key={to} to={to} end={to === "/"}
                className={({ isActive }) => `rounded-lg px-4 py-2 text-sm font-bold transition-all ${isActive ? "bg-emerald-500 text-slate-950" : "text-slate-400 hover:text-white"}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Botón Hamburguesa (Solo abre) */}
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setIsOpen(true)} className="p-2 text-slate-100">
              <Menu size={35} />
            </button>
          </div>

          <NavLink to="/contacto" className="hidden md:flex btn btn-primary px-6">Empezar Proyecto</NavLink>
        </div>
      </header>

      {/* MENÚ MÓVIL CON LA X ADENTRO */}
      <div className={`menu-mobile-overlay ${isOpen ? "menu-visible" : "menu-hidden"}`}>
        {/* BOTÓN CERRAR INTERNO */}
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-5 right-5 p-4 text-emerald-500 z-[1001]"
        >
          <X size={40} strokeWidth={3} />
        </button>

        <nav className="flex flex-col h-full pt-32 px-10 gap-8 overflow-y-auto">
          <div className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500/40">Navegación</div>
          
          <div className="flex flex-col gap-6 text-left">
            {navLinks.map(([label, to]) => (
              <NavLink 
                key={to} 
                to={to} 
                className={({ isActive }) => `text-5xl font-black tracking-tighter ${isActive ? "text-emerald-500" : "text-white"}`}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <div className="h-px bg-white/10 w-full my-4" />

          <div className="space-y-6">
            <NavLink to="/contacto" className="btn btn-primary w-full py-5 text-lg font-black uppercase">
              Empezar Proyecto
            </NavLink>
            
            <div className="flex justify-center gap-10 text-slate-500 pb-10">
               <a href={SITE.social.instagram} target="_blank" rel="noreferrer"><Instagram size={28} /></a>
               <a href={SITE.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={28} /></a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}