import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE } from "../config/site";

export default function SEO({ title, description, path = "/" }) {
  const fullTitle = title ? `${title} | ${SITE.brand}` : `${SITE.brand} | Desarrollo de Software B2B`;
  const desc = description || SITE.description;
  const canonical = SITE.domain ? `https://${SITE.domain}${path}` : undefined;
  const image = `https://${SITE.domain}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      
      {/* Open Graph */}
      <meta property="og:site_name" content={SITE.brand} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="MyE Software - Ingeniería de Software B2B" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
      
      {canonical ? <link rel="canonical" href={canonical} /> : null}

      {/* JSON-LD Schema: Organization & WebSite */}
      <script type="application/ld+json">
        {JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": SITE.brand,
            "url": `https://${SITE.domain}`,
            "logo": `https://${SITE.domain}/logo.png`,
            "image": image,
            "description": SITE.description,
            "telephone": `+${SITE.whatsappNumber}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mendoza",
              "addressCountry": "AR"
            },
            "sameAs": [
              SITE.social.instagram
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": SITE.brand,
            "url": `https://${SITE.domain}`,
            "description": SITE.tagline
          }
        ])}
      </script>
    </Helmet>
  );
}