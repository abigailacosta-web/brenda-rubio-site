import React from "react";
import { ArrowUpRight, GraduationCap, ShieldCheck, Landmark, MessageSquare } from "lucide-react";
import { CONTACT } from "@/config/contact";

const trustPoints = [
  { icon: GraduationCap, label: "Abogada UBA" },
  { icon: ShieldCheck, label: "Registro Nacional de Mediación" },
  { icon: Landmark, label: "Ley N° 26.589" },
  { icon: MessageSquare, label: "Presencial · A distancia" },
];

export default function Hero() {
  const go = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-24 pb-10 md:pt-32 md:pb-14 overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory to-cloud/50" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,42,71,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,42,71,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A464 0%, transparent 65%)" }}
      />

      <div className="relative container-narrow grid md:grid-cols-12 gap-6 md:gap-x-12 md:gap-y-10 items-start">
        <div className="md:col-span-7 pt-2 md:pt-4">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-navy/10 rounded-full pl-2 pr-4 py-1.5 mb-6 shadow-[0_6px_20px_-14px_rgba(15,42,71,0.35)] animate-fade-in">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold-dark text-white text-[10px] font-bold">BR</span>
            <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-navy font-semibold">
              Dra. Brenda M. Rubio · Abogada UBA · Mediadora prejudicial matriculada
            </span>
          </div>

          <h1
            data-testid="hero-title"
            className="font-serif font-medium tracking-tight leading-[0.98] text-[2.25rem] sm:text-5xl md:text-[3.5rem] lg:text-[4.5rem] text-navy animate-fade-up"
          >
            <span className="italic font-light text-navy-mid">Mediación</span> <span className="text-gold-dark">prejudicial</span>.
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-6 font-serif text-xl md:text-2xl lg:text-[1.65rem] leading-[1.35] text-navy max-w-[52ch] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Un espacio de <em className="italic font-light text-gold-dark">diálogo</em> para encontrar soluciones antes de llegar a la instancia judicial.
          </p>

          <p
            data-testid="hero-small"
            className="mt-5 font-sans text-[13px] md:text-sm leading-relaxed text-slate-700 max-w-[60ch] animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Mediadora prejudicial matriculada · Ley 26.589 · Audiencias presenciales y a distancia conforme a la normativa vigente.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <a
              href="#contacto"
              onClick={go("contacto")}
              data-testid="hero-cta"
              className="group inline-flex items-center gap-2.5 bg-navy text-ivory px-7 py-3.5 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md shadow-[0_14px_30px_-14px_rgba(15,42,71,0.6)] hover:bg-navy-mid hover:-translate-y-0.5 transition-all duration-300"
            >
              Solicitar fecha de mediación
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </a>
            <a
              href="#los-si-mediacion"
              onClick={go("los-si-mediacion")}
              data-testid="hero-los-si"
              className="inline-flex items-center gap-2.5 border border-navy/30 text-navy px-6 py-3.5 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md bg-white/70 hover:bg-navy hover:text-ivory hover:border-navy transition-all duration-300"
            >
              Los sí de la mediación
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl">
            {trustPoints.map((t, i) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  data-testid={`hero-trust-${i}`}
                  className="flex items-center gap-2 bg-white/70 border border-navy/10 rounded-lg px-3 py-2 backdrop-blur-sm"
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-navy/5 text-navy">
                    <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </span>
                  <span className="font-sans text-[11px] font-semibold text-navy leading-tight">{t.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <figure
          data-testid="hero-portrait-slot"
          className="md:col-span-5 md:col-start-8 relative rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(15,42,71,0.55)] bg-navy animate-fade-up self-start"
          style={{ animationDelay: "300ms" }}
        >
          <img
            src={CONTACT.portraitImage}
            alt={CONTACT.portraitAlt}
            loading="eager"
            fetchPriority="high"
            className="portrait-slot w-full block"
            style={{ filter: CONTACT.portraitIsInstitutional ? "grayscale(20%) saturate(0.85) contrast(1.02) brightness(0.94)" : "none", objectPosition: "center 18%" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(15,42,71,0.10) 0%, rgba(15,42,71,0.30) 100%)" }}
          />
        </figure>

        <div data-testid="hero-profile-card" className="md:col-span-12 animate-fade-up" style={{ animationDelay: "360ms" }}>
          <div className="relative bg-navy text-ivory rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(15,42,71,0.6)]">
            <div aria-hidden="true" className="absolute -top-14 -right-8 font-serif text-[13rem] leading-none text-gold/10 select-none pointer-events-none">M</div>
            <div className="relative p-6 md:p-8 grid gap-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:items-center md:gap-x-10">
              <div>
                <p className="eyebrow-sm text-gold-light mb-3">Perfil profesional</p>
                <h3 className="font-serif text-2xl md:text-[1.75rem] leading-tight text-ivory">
                  Brenda Mayra <em className="font-light text-ivory/80">Rubio</em>
                </h3>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {[
                  "Abogada · Universidad de Buenos Aires",
                  "Mediadora prejudicial · Ley N° 26.589",
                  "Mediadora · Registro Nacional de Conciliadores en las Relaciones de Consumo (Ley 26.993)",
                  "Audiencias presenciales y a distancia",
                ].map((it) => (
                  <li key={it} className="flex items-start gap-3 font-sans text-[13px] text-ivory/90 leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-light flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative px-6 md:px-8 py-3 bg-gold-dark text-white flex items-center justify-between gap-3">
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold">Registro habilitante</span>
              <span className="font-sans text-sm font-semibold tabular-nums">Mat. MJyDH N° 5050/2020</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
