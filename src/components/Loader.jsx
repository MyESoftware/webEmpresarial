import React from "react";

export default function Loader() {
  return (
    <div className="site-loader" aria-label="Cargando MyE Software">
      <div className="site-loader__glow" />
      <div className="site-loader__logo-wrap">
        <img
          src="/images/logo-mye.jpeg"
          alt="MyE Software"
          className="site-loader__logo"
        />
      </div>
      <div className="site-loader__brand">MyE Software</div>
      <div className="site-loader__caption">Preparando experiencia digital premium…</div>
    </div>
  );
}
