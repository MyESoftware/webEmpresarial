import { SITE, buildBudgetMessage } from "../config/site";

const STORAGE_KEY = "mye_leads";

export function calculateEstimate({ projectType, pages, features = [], timeline }) {
  let min = 0;
  let max = 0;

  const base = {
    "Landing page": [160000, 300000],
    "Sitio web corporativo": [275000, 450000],
    "Tienda online": [450000, 900000],
    "Sistema a medida": [900000, 1500000],
  };

  [min, max] = base[projectType] || [250000, 500000];

  const pagesExtra = {
    "1 a 3 secciones": [0, 0],
    "4 a 7 secciones": [95000, 160000],
    "8+ secciones": [160000, 380000],
  };

  const [pagesMin, pagesMax] = pagesExtra[pages] || [0, 0];
  min += pagesMin;
  max += pagesMax;

  const featureValue = features.length * 85000;
  min += featureValue;
  max += featureValue * 1.6;

  if (timeline === "Urgente (7 a 15 días)") {
    min += 100000;
    max += 200000;
  }

  const format = new Intl.NumberFormat("es-AR");
  return {
    min,
    max,
    label: `$${format.format(min)} - $${format.format(max)} ARS`,
  };
}

export async function persistLead(payload) {
  const enriched = {
    ...payload,
    createdAt: new Date().toISOString(),
    source: "web-agencia",
  };

  try {
    const previous = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    localStorage.setItem(STORAGE_KEY, JSON.stringify([enriched, ...previous].slice(0, 100)));
  } catch {
    // ignore local storage failures
  }

  if (SITE.integrations.leadWebhookUrl) {
    const normalizedPhone = String(enriched.phone || "")
      .replace(/\D/g, "")
      .replace(/^0+/, "")
      .trim();

    const webhookPayload = {
      ...enriched,
      nombre: enriched.name || "",
      telefono: normalizedPhone,
      rubro: enriched.business || "",
      proyecto: enriched.projectType || "",
      extras: enriched.features || [],
      urgencia: enriched.timeline || "",
      presupuesto: enriched.estimatedRange || "",
      consulta: enriched.notes || "",
      fuente: "web",
      deseaSeguimiento: true,
      whatsappMessage: buildBudgetMessage({ ...enriched, phone: normalizedPhone }),
    };

    try {
      const response = await fetch(SITE.integrations.leadWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(SITE.integrations.leadWebhookToken
            ? {
                Authorization: `Bearer ${SITE.integrations.leadWebhookToken}`,
                "x-webhook-token": SITE.integrations.leadWebhookToken,
              }
            : {}),
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!response.ok) {
        throw new Error(`Webhook error ${response.status}`);
      }
    } catch (error) {
      console.error("No se pudo enviar el lead al bot:", error);
    }
  }

  return enriched;
}
