import React from "react";
import { waLink } from "../config/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={waLink("Hola! Quiero un presupuesto. ¿Podemos hablar?")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-slate-950 shadow-soft transition hover:scale-[1.03] active:scale-[0.98]"
      aria-label="Chatear por WhatsApp"
      title="WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
