export default function Footer() {
  return (
    <footer className="bg-transparent pb-20 pt-6 text-white md:pt-10">
      <div className="container-safe">
        <div className="footer-shell relative overflow-hidden rounded-[2.4rem] border border-white/10">
          <div className="footer-backdrop absolute inset-0" />
          <div className="footer-shell-glow absolute inset-0" />

          <div className="relative z-10 p-4 md:p-6">
            <div className="footer-image-frame">
              <div className="relative h-24 overflow-hidden rounded-[1.7rem] md:h-36 xl:h-40">
                <img
                  src="/images/footer-mye-network.jpg"
                  alt="Infraestructura digital MyE Software"
                  className="h-full w-full object-cover object-center scale-[1.03]"
                />
                <div className="footer-image-overlay absolute inset-0" />
              </div>
            </div>

            <div className="mt-8 grid gap-10 px-2 pb-3 pt-2 md:mt-10 md:grid-cols-[1.25fr_0.8fr_1fr_1fr] md:px-4">
              <div>
                <h3 className="text-[2.2rem] font-black tracking-[-0.04em] text-white md:text-[2.6rem]">
                  MyE Software
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                  Ingeniería de software, plataformas a medida y sistemas corporativos. Transformamos tu modelo de negocio en infraestructura digital escalable.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://www.instagram.com/myesoftware/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-fuchsia-500/20 hover:text-fuchsia-400 transition-colors"
                    aria-label="Instagram de MyE Software"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.32em] text-slate-500">
                  Navegación
                </h4>
                <ul className="mt-6 space-y-4 text-sm font-medium text-slate-300">
                  <li><a href="/" className="hover:text-fuchsia-400 transition-colors">Inicio</a></li>
                  <li><a href="/nosotros" className="hover:text-fuchsia-400 transition-colors">Quiénes Somos</a></li>
                  <li><a href="/contacto" className="hover:text-fuchsia-400 transition-colors">Contacto</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.32em] text-slate-500">
                  Soluciones Técnicas
                </h4>
                <ul className="mt-6 space-y-4 text-sm font-medium text-slate-300">
                  <li>Web Corporativa</li>
                  <li>E-Commerce Headless</li>
                  <li>Desarrollo a Medida / SaaS</li>
                  <li>Consultoría de Arquitectura</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-black uppercase tracking-[0.32em] text-slate-500">
                  Corporativo
                </h4>
                <div className="mt-6 space-y-4 text-sm font-medium text-slate-300">
                  <p className="flex items-center gap-2">Mendoza, Argentina</p>
                  <p className="flex items-center gap-2">softwaremye@gmail.com</p>
                  <a href="https://wa.me/5492612133276" target="_blank" rel="noreferrer" className="inline-block mt-2 font-black text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                    Soporte Técnico WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-between border-t border-white/10 px-2 pb-2 pt-6 text-xs text-slate-500 md:px-4">
              <p>© {new Date().getFullYear()} MyE Software. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
