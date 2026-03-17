import React from "react";
import { CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import { waLink } from "../config/site";

const planes = [
  {
    level: "Nivel 01",
    title: "Tu Vidriera Online (Landing Page)",
    price: "$180.000",
    description:
      "Es una página de presentación rápida y efectiva. Ideal para que te encuentren en Google y vean quién sos.",
    includes: [
      "Un sitio de una sola pantalla con 3 secciones (quiénes somos, qué hacemos y contacto).",
      "Incluye un botón que lleva al cliente directo a tu WhatsApp para que te escriba con un solo clic.",
    ],
    idealFor: "Profesionales, técnicos y negocios que necesitan presencia inmediata.",
  },
  {
    level: "Nivel 02",
    title: "Web con Catálogo Digital",
    price: "$310.000",
    description:
      "Una web completa con varias pestañas para organizar mejor tu información.",
    includes: [
      "Hasta 5 páginas diferentes (ej: Inicio, Galería de fotos, Detalles de Servicios).",
      "Incluye un formulario de contacto profesional y una muestra de tus productos o trabajos realizados, pero sin sistema de venta online.",
    ],
    idealFor: "Pymes que quieren mostrar todo lo que ofrecen de forma profesional.",
  },
  {
    level: "Nivel 03",
    title: "Web Gestionable (Con Panel de Control)",
    price: "$650.000 + Mantenimiento Mensual",
    description:
      "Una aplicación inteligente que podés manejar vos mismo sin saber programar.",
    includes: [
      "Incluye un panel privado (servidor) donde vos podés subir tus propios productos, noticias o fotos.",
      "Los cambios que hagas se ven reflejados al instante en la web.",
    ],
    important:
      "Al usar un servidor privado para tus datos, requiere un abono de mantenimiento mensual para asegurar que siempre esté online y segura.",
    idealFor: "Inmobiliarias, concesionarias o negocios con stock que cambia seguido.",
  },
  {
    level: "Nivel 04",
    title: "Tienda Online Completa (E-commerce)",
    price: "$1.200.000 + Mantenimiento Mensual",
    description:
      "Tu negocio abierto las 24 horas para vender en todo el país.",
    includes: [
      "Registro de usuarios, carrito de compras y gestión de ventas.",
      "Permite que tus clientes te paguen con tarjeta a través de Mercado Pago.",
      "También tiene la opción de 'Modo Reserva' si preferís cobrar después.",
    ],
    important:
      "Requiere mantenimiento mensual por el uso de base de datos y la seguridad de las transacciones de pago.",
    idealFor:
      "Negocios de ropa, repuestos, comida o cualquier rubro que quiera cobrar online.",
  },
];

export default function Propuestas() {
  return (
    <main className="main-content">
      <SEO
        title="Propuestas y Planes"
        description="Conocé nuestros planes y elegí la opción ideal para hacer crecer tu negocio con una web profesional."
        path="/propuestas"
      />

      <section className="py-14 md:py-20 border-b border-white/5">
        <div className="container-safe">
          <span className="badge mb-6">Propuestas MyE Software</span>
          <h1 className="text-5xl font-black tracking-tighter md:text-7xl text-white leading-[1.1]">
            Propuestas de Software <span className="text-emerald-500">Transparentes.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-400">
            Te explicamos cada plan en lenguaje claro para que elijas con tranquilidad lo que más te conviene.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container-safe space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {planes.map((plan) => (
              <article key={plan.level} className="card group p-8 transition-all hover:border-emerald-500/30">
                <span className="badge">{plan.level}</span>
                <h2 className="mt-4 text-2xl font-black tracking-tighter text-white">{plan.title}</h2>
                <p className="mt-2 text-2xl font-bold text-emerald-500">{plan.price}</p>

                <p className="mt-5 text-slate-300 leading-relaxed">{plan.description}</p>

                <div className="mt-5">
                  <p className="text-sm font-bold uppercase tracking-wider text-white">Qué incluye</p>
                  <ul className="mt-3 space-y-3 text-slate-300">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.important ? (
                  <p className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-slate-200">
                    <span className="font-bold text-white">Importante:</span> {plan.important}
                  </p>
                ) : null}

                <p className="mt-5 text-sm text-slate-400">
                  <span className="font-bold text-white">Ideal para:</span> {plan.idealFor}
                </p>
              </article>
            ))}
          </div>

          <section className="card border-emerald-500/20 bg-emerald-500/5 p-8">
            <h3 className="text-2xl font-black tracking-tighter text-white">Información Importante</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>
                <span className="font-bold text-white">Mantenimiento Mensual:</span> Las opciones 03 y 04 incluyen el uso de servidores y bases de datos. Para cubrir los costos de alojamiento y el soporte técnico preventivo, se abona un canon mensual fijo.
              </li>
              <li>
                <span className="font-bold text-white">Forma de Pago:</span> 50% para congelar el precio y comenzar el trabajo. El 50% restante se abona una vez que la web está terminada y lista para salir al público.
              </li>
              <li>
                <span className="font-bold text-white">Revisión Final:</span> Antes de lanzar la web, nos sentamos con vos para revisar que todo esté perfecto y a tu gusto.
              </li>
              <li>
                <span className="font-bold text-white">Dominio y Hosting:</span> Te asesoramos en la compra del nombre de tu web (ej: .com.ar). Estos son gastos anuales ajenos a la programación.
              </li>
            </ul>
          </section>

          <p className="text-center text-sm md:text-base text-slate-400 font-semibold">
            Desarrollado con ingeniería mendocina. Soporte local y directo sin intermediarios.
          </p>

          <div className="flex justify-center">
            <a className="btn btn-primary px-8" href={waLink()} target="_blank" rel="noreferrer">
              ¿Dudas? Escribinos y te asesoramos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
