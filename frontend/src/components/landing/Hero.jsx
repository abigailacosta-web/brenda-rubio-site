import React from "react";
import { ArrowDownRight, Award, Scale, Car, Video } from "lucide-react";

const stats = [
  { k: "Matrícula", v: "5050/2020", icon: Award },
  { k: "Marco legal", v: "Ley 26.589", icon: Scale },
  { k: "Especialidad", v: "Accidentes de tránsito", icon: Car },
  { k: "Modalidad", v: "Virtual · Zoom", icon: Video },
];

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="top" data-testid="hero-section" className="relative pt-32 pb-24 md:pt-44 md:pb-40">
      <div className="container-narrow">
        {/* Overline */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <span className="block w-10 h-px bg-anthracite/60" />
          <span className="overline">Mediación Prejudicial Oficial · CABA & Nación</span>
        </div>

        {/* H1 — Serif, balanced */}
        <h1
          data-testid="hero-title"
          className="font-serif font-medium tracking-tight leading-[0.95] text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[6.25rem] max-w-6xl animate-fade-up"
        >
          Mediación Prejudicial <span className="italic font-light text-anthracite-soft">100% virtual</span> en CABA y Nación.
        </h1>

        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
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
              className="group inline-flex items-center gap-3 bg-anthracite text-cream px-8 py-4 text-xs uppercase tracking-[0.22em] rounded-md shadow-[0_8px_24px_-12px_rgba(26,26,26,0.5)] hover:shadow-[0_14px_30px_-12px_rgba(26,26,26,0.6)] hover:bg-anthracite-light hover:-translate-y-0.5 transition-all duration-300"
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

        {/* Premium stat cards */}
        <div className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {stats.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={it.k}
                data-testid={`hero-stat-${idx}`}
                className="group relative bg-cream-50 border border-anthracite/10 rounded-2xl p-6 md:p-7 shadow-[0_2px_10px_-4px_rgba(26,26,26,0.08)] hover:shadow-[0_18px_40px_-20px_rgba(26,26,26,0.35)] hover:-translate-y-0.5 hover:border-anthracite/25 transition-all duration-500"
                style={{ animationDelay: `${360 + idx * 80}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-cream-200 border border-anthracite/10 text-anthracite">
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <span className="overline text-[9px]">0{idx + 1}</span>
                </div>
                <p className="overline text-[10px] mb-2">{it.k}</p>
                <p className="font-serif text-xl md:text-2xl leading-tight">{it.v}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
