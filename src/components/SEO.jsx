import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site";

export default function SEO({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} | ${SITE.brand}` : `${SITE.brand} | Diseño Web Mendoza`;
  const desc = description || SITE.tagline;
  const canonical = SITE.domain ? `https://${SITE.domain}${path}` : undefined;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
<meta name="keywords" content="diseño web mendoza, agencias de software mendoza, crear pagina web argentina, sistemas a medida mendoza, programadores mendoza, posicionamiento seo mendoza, mye software, mi pagina en mendoza, quiero mi pagina, quiero mi web" />
      
      {/* Redes Sociales - WhatsApp / Instagram Preview */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="/og-image.jpg" /> {/* Asegurate de tener esta imagen en /public */}
      
      {canonical ? <link rel="canonical" href={canonical} /> : null}
      <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MyE Software",
    "image": "https://myesoftware.com.ar/og-image.jpg",
    "url": "https://myesoftware.com.ar",
    "telephone": "+5492612133276", 
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mendoza",
      "addressCountry": "AR"
    },
    "serviceType": ["Diseño Web", "Desarrollo de Sistemas", "E-commerce"],
    "areaServed": "Mendoza, Argentina"
  })}
</script>
    </Helmet>
  );
}