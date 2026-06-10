import React from "react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" data-testid="hero-section" className="relative pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="container-narrow">
        {/* Overline */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <span className="block w-12 h-px bg-anthracite" />
          <span className="overline">Mediación Prejudicial Oficial · CABA & Nación</span>
        </div>

        {/* H1 — Massive Serif */}
        <h1
          data-testid="hero-title"
          className="font-serif font-medium tracking-tight leading-[0.95] text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[7.5rem] max-w-6xl animate-fade-up"
        >
          Mediación Prejudicial <span className="italic font-light text-anthracite-soft">100% virtual</span> en CABA y Nación.
        </h1>

        <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <p
            data-testid="hero-subtitle"
            className="md:col-span-7 font-sans text-base md:text-lg leading-relaxed text-anthracite-soft animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <span className="text-anthracite font-medium">Dra. Brenda M. Rubio.</span> Mediadora Prejudicial Oficial — Mat. M.J. y D.H. N° 5050/2020.
            Especialista en accidentes de tránsito. Soluciones ágiles por Zoom, gestión integral de notificaciones por Carta Documento y firma digital de actas según Ley 26.589.
          </p>

          <div
            className="md:col-span-5 flex flex-col items-start gap-6 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#contacto"
              onClick={scrollTo("contacto")}
              data-testid="hero-cta"
              className="group inline-flex items-center gap-3 bg-anthracite text-cream px-8 py-5 text-xs uppercase tracking-[0.25em] hover:bg-anthracite-light transition-all"
            >
              Solicitar Audiencia Virtual
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" strokeWidth={1.5} />
            </a>
            <div className="flex items-center gap-6 text-xs font-sans text-anthracite-soft">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-anthracite" /> Audiencias por Zoom</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-anthracite" /> Firma digital</span>
            </div>
          </div>
        </div>

        {/* Bottom data strip */}
        <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 border-t border-anthracite/15">
          {[
            { k: "Matrícula", v: "5050/2020" },
            { k: "Ley", v: "26.589" },
            { k: "Especialidad", v: "Accidentes de tránsito" },
            { k: "Modalidad", v: "Virtual · Zoom" },
          ].map((it) => (
            <div
              key={it.k}
              className="border-b border-r border-anthracite/15 last:border-r-0 py-6 md:py-8 px-4 md:px-6 [&:nth-child(2n)]:md:border-r-anthracite/15"
            >
              <p className="overline text-[10px] mb-2">{it.k}</p>
              <p className="font-serif text-2xl md:text-3xl leading-tight">{it.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
