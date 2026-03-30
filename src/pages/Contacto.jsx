import React from "react";
import SEO from "../components/SEO";
import LeadCaptureWizard from "../components/LeadCaptureWizard";
import { SITE, waLink } from "../config/site";
import { Mail, MapPin, Share2, Video, MessageCircleMore, Bot } from "lucide-react";

export default function Contacto() {
  return (
    <main className="main-content">
      <SEO
        title="Contacto "
        description="Pedí presupuesto para tu web, tienda online o sistema. Capturá leads con un flujo rápido y profesional."
        path="/contacto"
      />

      <section className="container-safe py-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] items-start">
          <div className="space-y-8">
            <div>
              <span className="badge mb-6">Contacto comercial</span>
              <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-none">
                Hablemos de un sitio que se vea mejor y venda más.
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-slate-400">
                Podés escribir directo por WhatsApp o usar el simulador de presupuesto para enviar un lead más completo.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center gap-5 card premium-panel p-6 bg-white/[0.02]">
                <div className="p-4 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-1">Email</div>
                  <div className="text-slate-200 font-bold">{SITE.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-5 card premium-panel p-6 bg-white/[0.02]">
                <div className="p-4 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 mb-1">Ubicación</div>
                  <div className="text-slate-200 font-bold">{SITE.location}</div>
                </div>
              </div>

              <div className="card premium-panel p-8 bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                  <Share2 size={16} /> Redes y contacto rápido
                </div>
                <div className="flex flex-wrap gap-4">
                  <a className="btn btn-outline text-xs px-5" href={SITE.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
                  <a className="btn btn-outline text-xs px-5 flex items-center gap-2" href="https://www.tiktok.com/@myesoftware" target="_blank" rel="noreferrer">
                    <Video size={14} /> TikTok
                  </a>
                  <a className="btn btn-primary text-xs px-5" href={waLink()} target="_blank" rel="noreferrer">
                    <MessageCircleMore size={14} /> WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>

          <LeadCaptureWizard
            compact
            title="Simulá el presupuesto, capturá el lead y enviá todo a WhatsApp"
            subtitle="Este bloque ya quedó preparado para guardar leads en el navegador y también para conectarse por webhook a tu automatización externa."
          />
        </div>
      </section>
    </main>
  );
}
