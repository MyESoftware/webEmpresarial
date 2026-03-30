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
                  src="/images/footer-mye-network.png"
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
                <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-300">
                  Páginas web y sistemas que convierten visitas en clientes.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.32em] text-slate-400">
                  Navegación
                </h4>
                <ul className="mt-6 space-y-4 text-[1.15rem] font-medium text-slate-300">
                  <li>Servicios</li>
                  <li>Contacto</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.32em] text-slate-400">
                  Qué resolvemos
                </h4>
                <ul className="mt-6 space-y-4 text-[1.15rem] font-medium text-slate-300">
                  <li>Landing pages</li>
                  <li>Sitios web comerciales</li>
                  <li>Tiendas y catálogos</li>
                  <li>Sistemas a medida</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-black uppercase tracking-[0.32em] text-slate-400">
                  Contacto rápido
                </h4>
                <div className="mt-6 space-y-4 text-[1.15rem] font-medium text-slate-300">
                  <p>Mendoza, Argentina</p>
                  <p>softwaremye@gmail.com</p>
                  <p className="font-black text-fuchsia-300">Soporte vía WhatsApp</p>
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 px-2 pb-2 pt-6 text-sm text-slate-400 md:px-4">
              © {new Date().getFullYear()} MyE Software
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
