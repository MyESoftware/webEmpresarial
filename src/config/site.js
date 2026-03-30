export const SITE = {
  brand: "MyE Software",
  tagline: "Páginas web y sistemas que convierten visitas en clientes",
  description:
    "Diseñamos webs premium, tiendas online y sistemas a medida para negocios que quieren vender más. Presupuesto rápido por WhatsApp y formulario inteligente.",
  domain: "myesoftware.com.ar",
  email: "softwaremye@gmail.com",
  whatsappNumber: "5492612133276",
  location: "Mendoza, Argentina",
  social: {
    instagram: "https://www.instagram.com/myesoftware/",
  },
  integrations: {
    leadWebhookUrl: import.meta.env.VITE_LEAD_WEBHOOK_URL || "",
    leadWebhookToken: import.meta.env.VITE_LEAD_WEBHOOK_TOKEN || "",
    calendarUrl: import.meta.env.VITE_CALENDAR_URL || "",
    portfolioPdfUrl: import.meta.env.VITE_PORTFOLIO_PDF_URL || "",
  },
  metrics: [
    { value: "+40", label: "negocios acompañados" },
    { value: "24h", label: "respuesta comercial" },
    { value: "100%", label: "sitios a medida" },
  ],
};

export function waLink(
  message = "¡Hola! Vi su web y quiero consultar para tener mi propia página o sistema. ¿Me asesoran?"
) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildBudgetMessage(payload = {}) {
  const lines = ["¡Hola! Quiero pedir un presupuesto para mi proyecto digital."];
  if (payload.name) lines.push(`👤 Nombre: ${payload.name}`);
  if (payload.business) lines.push(`🏢 Negocio: ${payload.business}`);
  if (payload.phone) lines.push(`📱 Teléfono: ${payload.phone}`);
  if (payload.projectType) lines.push(`💻 Tipo de proyecto: ${payload.projectType}`);
  if (payload.pages) lines.push(`📄 Alcance: ${payload.pages}`);
  if (payload.features?.length) lines.push(`⚙️ Funciones: ${payload.features.join(", ")}`);
  if (payload.timeline) lines.push(`⏱️ Urgencia: ${payload.timeline}`);
  if (payload.estimatedRange) lines.push(`💸 Rango estimado: ${payload.estimatedRange}`);
  if (payload.notes) lines.push(`📝 Objetivo: ${payload.notes}`);
  return lines.join("\n");
}
