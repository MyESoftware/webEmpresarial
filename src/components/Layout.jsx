import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import TechBackground from "./TechBackground";

export default function Layout({ children }) {
  return (
    <>
      <TechBackground />
      <div className="min-h-dvh bg-transparent text-slate-100 relative z-[1]">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </>
  );
}
