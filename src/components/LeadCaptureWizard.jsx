import React, { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { waLink } from "../config/site";

const PROJECT_TYPES = [
  "Landing page",
  "Sitio web corporativo",
  "Tienda online",
  "Sistema a medida",
  "Otro (consultar)",
];

export default function LeadCaptureWizard({ compact = false, title, subtitle }) {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone || !notes) {
      setError("Por favor, completá los campos obligatorios (Nombre, Teléfono y Objetivo).");
      return;
    }
    setError("");

    const msgLines = [
      `Hola MyE Software. Mi nombre es ${name} y quiero consultar por un proyecto de ${projectType}.`,
      "",
      `Empresa: ${business || "No especificada"}`,
      `Contacto: ${phone} ${email ? `/ ${email}` : ""}`,
      "",
      `Necesito: ${notes}`,
      "",
      "Me gustaría conocer la viabilidad y recibir un presupuesto personalizado.",
    ];

    const finalMessage = msgLines.join("\n");
    window.open(waLink(finalMessage), "_blank");
  };

  return (
    <section className={`card premium-panel overflow-hidden ${compact ? "p-6 md:p-8" : "p-8 md:p-10"}`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent" />
      <div className="flex flex-wrap items-center gap-3">
        <span className="badge">
          <MessageCircle size={14} /> Contacto directo
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
          Respuesta en menos de 24h
        </span>
      </div>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            {title || "Contanos qué necesitás"}
          </h2>
          {subtitle && <p className="mt-4 text-slate-400 leading-relaxed">{subtitle}</p>}
          
          <div className="mt-8 space-y-6">
            <p className="text-lg text-slate-300">
              Completá el formulario para contarnos sobre tu empresa y tus objetivos.
            </p>
            <p className="text-slate-400">
              Te derivaremos a nuestro WhatsApp para iniciar una conversación directa y analizar la viabilidad de tu proyecto.
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-6 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-5 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <div>
              <label htmlFor="projectType" className="label">Tipo de proyecto</label>
              <select
                id="projectType"
                className="input cursor-pointer"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
              >
                {PROJECT_TYPES.map((pt) => (
                  <option key={pt} value={pt} className="bg-slate-900 text-white">
                    {pt}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="label">Nombre *</label>
                <input id="name" required className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej: Eduardo" />
              </div>
              <div>
                <label htmlFor="business" className="label">Empresa</label>
                <input id="business" className="input" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Opcional" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="label">WhatsApp *</label>
                <input id="phone" required type="tel" className="input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Ej: 2615555555" />
              </div>
              <div>
                <label htmlFor="email" className="label">Email</label>
                <input id="email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Opcional" />
              </div>
            </div>
            <div>
              <label htmlFor="notes" className="label">Descripción / Necesidad *</label>
              <textarea
                id="notes"
                required
                className="input min-h-[100px] resize-none"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Quiero captar consultas, vender online, un sistema de gestión..."
              />
            </div>

            {error && <p className="text-red-400 text-sm font-semibold">{error}</p>}

            <button type="submit" className="btn btn-primary w-full justify-center mt-2">
              Enviar consulta <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
