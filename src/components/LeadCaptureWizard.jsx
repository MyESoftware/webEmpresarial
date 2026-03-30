import React, { useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Calculator, ShieldCheck } from "lucide-react";
import { buildBudgetMessage, waLink } from "../config/site";
import { calculateEstimate, persistLead } from "../utils/leads";

const PROJECT_TYPES = [
  "Landing page",
  "Sitio web corporativo",
  "Tienda online",
  "Sistema a medida",
];

const PAGE_OPTIONS = ["1 a 3 secciones", "4 a 7 secciones", "8+ secciones"];
const TIMELINE_OPTIONS = ["Urgente (7 a 15 días)", "Este mes", "Sin apuro"];
const FEATURE_OPTIONS = [
  "Formulario inteligente",
  "Automatización con Bot en Whatsapp",
  "Catálogo o carrito",
  "Panel administrador",
  "Reservas / turnos",
  "Analítica + conversiones",
];

function StepChip({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3 text-left text-sm transition-all ${
        active
          ? "border-fuchsia-400/60 bg-fuchsia-500/15 text-white shadow-[0_0_30px_rgba(16,185,129,0.12)]"
          : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.05]"
      }`}
    >
      {children}
    </button>
  );
}

export default function LeadCaptureWizard({ compact = false, title, subtitle }) {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[1]);
  const [pages, setPages] = useState(PAGE_OPTIONS[1]);
  const [timeline, setTimeline] = useState(TIMELINE_OPTIONS[1]);
  const [features, setFeatures] = useState(["Formulario inteligente", "Automatización con Bot en Whatsapp"]);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  const estimate = useMemo(
    () => calculateEstimate({ projectType, pages, features, timeline }),
    [projectType, pages, features, timeline]
  );

  const whatsappHref = useMemo(() => {
    const msg = buildBudgetMessage({
      name,
      business,
      phone,
      projectType,
      pages,
      features,
      timeline,
      notes,
      estimatedRange: estimate.label,
    });
    return waLink(msg);
  }, [name, business, phone, projectType, pages, features, timeline, notes, estimate.label]);

  async function handleSaveLead() {
    await persistLead({
      name,
      business,
      phone,
      projectType,
      pages,
      features,
      timeline,
      notes,
      estimatedRange: estimate.label,
    });
    setSaved(true);
  }

  function toggleFeature(feature) {
    setFeatures((prev) =>
      prev.includes(feature) ? prev.filter((item) => item !== feature) : [...prev, feature]
    );
  }

  return (
    <section className={`card premium-panel overflow-hidden ${compact ? "p-6 md:p-8" : "p-8 md:p-10"}`}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent" />
      <div className="flex flex-wrap items-center gap-3">
        <span className="badge">
          <Calculator size={14} /> Presupuesto inteligente
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
          Respuesta en menos de 24h
        </span>
      </div>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
            {title || "Calculá el costo de tu proyecto y dejá tus datos en un solo paso"}
          </h2>
          <div className="mt-8 grid gap-5">
            <div>
              <div className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                1. Tipo de proyecto
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {PROJECT_TYPES.map((option) => (
                  <StepChip key={option} active={projectType === option} onClick={() => setProjectType(option)}>
                    {option}
                  </StepChip>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                2. Alcance
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {PAGE_OPTIONS.map((option) => (
                  <StepChip key={option} active={pages === option} onClick={() => setPages(option)}>
                    {option}
                  </StepChip>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                3. Funciones clave
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {FEATURE_OPTIONS.map((option) => (
                  <StepChip
                    key={option}
                    active={features.includes(option)}
                    onClick={() => toggleFeature(option)}
                  >
                    {option}
                  </StepChip>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-slate-500">
                4. Urgencia
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {TIMELINE_OPTIONS.map((option) => (
                  <StepChip key={option} active={timeline === option} onClick={() => setTimeline(option)}>
                    {option}
                  </StepChip>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-6 backdrop-blur-sm">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-fuchsia-300">
            Resultado estimado
          </div>
          <div className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">{estimate.label}</div>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Valor orientativo según alcance y funciones. El presupuesto final se ajusta a la necesidad de cada cliente.
          </p>

          <div className="mt-6 space-y-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
            <div>
              <label className="label">Nombre</label>
              <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej: Eduardo" />
            </div>
            <div>
              <label className="label">Negocio</label>
              <input className="input" value={business} onChange={(e) => setBusiness(e.target.value)} placeholder="Ej: Pepsi" />
            </div>
            <div>
              <label className="label">WhatsApp</label>
              <input className="input" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Ej:0542615555555" />
              <p className="mt-2 text-xs text-slate-500">Usá formato internacional sin +, espacios ni guiones.</p>
            </div>
            <div>
              <label className="label">Objetivo principal</label>
              <textarea
                className="input min-h-[120px] resize-none"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Quiero vender más, captar consultas, mostrar mis servicios, automatizar reservas..."
              />
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-outline w-full justify-center">
              Enviar por WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
