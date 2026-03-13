export const SITE = {
  brand: "MyE Software",
  // Tagline optimizado para búsqueda básica y local
  tagline: "Diseño de Páginas Web en Mendoza | Tu negocio en Google hoy",
  description: "Hacemos que tu negocio venda por internet. Creamos tu página web, sistemas de ventas y landings rápidas. ¡Pedí tu presupuesto fácil por WhatsApp!",
  domain: "myesoftware.com.ar", // Cambiá por tu dominio real
  email: "hola@myesoftware.com.ar",
  whatsappNumber: "5492610000000", // Reemplazá por tu número real

  social: {
    instagram: "https://instagram.com/tuusuario",
    linkedin: "https://linkedin.com/in/tuusuario",
    github: "https://github.com/tuusuario",
  },

  location: "Mendoza, Argentina",
};

export function waLink(message = "¡Hola! Vi su web y quiero consultar para tener mi propia página o sistema. ¿Me asesoran?") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}