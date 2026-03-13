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
      <meta name="keywords" content="diseño web mendoza, crear mi pagina web, programador sistemas mendoza, quiero una web, paginas web baratas, sistemas para negocios" />
      
      {/* Redes Sociales - WhatsApp / Instagram Preview */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="/og-image.jpg" /> {/* Asegurate de tener esta imagen en /public */}
      
      {canonical ? <link rel="canonical" href={canonical} /> : null}
    </Helmet>
  );
}