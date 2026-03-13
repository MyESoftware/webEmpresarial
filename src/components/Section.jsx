import React from "react";

export default function Section({ kicker, title, children, right }) {
  return (
    <section className="py-12 md:py-16">
      <div className="container-safe">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            {kicker ? <div className="badge mb-4">{kicker}</div> : null}
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">{title}</h2>
            <div className="mt-4 text-base leading-relaxed text-slate-300/90">{children}</div>
          </div>
          {right ? <div className="w-full md:max-w-md">{right}</div> : null}
        </div>
      </div>
    </section>
  );
}
