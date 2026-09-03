import React from "react";
import { ArrowUpRight, ShieldCheck, GraduationCap, Landmark, MessageSquare } from "lucide-react";

const trustPoints = [
  { icon: GraduationCap, label: "Abogada UBA" },
  { icon: ShieldCheck, label: "Accidentes de tránsito" },
  { icon: Landmark, label: "Ley N° 26.589" },
  { icon: MessageSquare, label: "Zoom · WhatsApp" },
];

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-28 pb-24 md:pt-36 md:pb-40 overflow-hidden"
    >
      {/* Background layer */}
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
      {/* Corner accent */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A464 0%, transparent 65%)" }}
      />

      <div className="relative container-narrow grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Left column */}
        <div className="md:col-span-7">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-navy/10 rounded-full pl-2 pr-4 py-2 mb-8 shadow-[0_6px_20px_-14px_rgba(15,42,71,0.35)] animate-fade-in">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold text-navy text-[10px] font-bold">BR</span>
            <span className="font-sans text-[11px] tracking-[0.16em] uppercase text-navy font-medium">
              Dra. Brenda M. Rubio · Abogada UBA · Especialista en Accidentes de Tránsito
            </span>
          </div>

          <h1
            data-testid="hero-title"
            className="font-serif font-medium tracking-tight leading-[0.98] text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[5.75rem] text-navy animate-fade-up"
          >
            Servicios de <span className="italic font-light text-navy-mid">Mediación Prejudicial</span> y Privada en <span className="text-gold-dark">CABA</span>.
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-8 font-sans text-base md:text-lg leading-relaxed text-slate-700 max-w-2xl animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Soy <span className="text-navy font-medium">abogada y mediadora judicial</span>, especialista en la resolución de conflictos derivados de <span className="text-navy font-medium">accidentes de tránsito y siniestros viales</span>. Trabajo con estudios y colegas de todo el país que necesitan fijar o sortear mediaciones en la Ciudad de Buenos Aires.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <a
              href="#contacto"
              onClick={scrollTo("contacto")}
              data-testid="hero-cta"
              className="group inline-flex items-center gap-3 bg-navy text-ivory px-8 py-4 text-xs uppercase font-semibold tracking-[0.22em] rounded-md shadow-[0_14px_30px_-14px_rgba(15,42,71,0.6)] hover:bg-navy-mid hover:-translate-y-0.5 transition-all duration-300"
            >
              Solicitar audiencia / Consulta directa
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
            </a>
            <a
              href="https://wa.me/5491156392309?text=Hola%20Dra.%20Rubio%2C%20quisiera%20consultar%20por%20una%20mediaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp"
              className="inline-flex items-center gap-3 border border-navy/20 text-navy px-6 py-4 text-xs uppercase font-semibold tracking-[0.22em] rounded-md bg-white/70 hover:bg-white hover:border-navy/40 transition-all duration-300"
            >
              WhatsApp directo
            </a>
          </div>

          {/* Trust chips */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {trustPoints.map((t, i) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  data-testid={`hero-trust-${i}`}
                  className="flex items-center gap-2.5 bg-white/70 border border-navy/10 rounded-lg px-3 py-2.5 backdrop-blur-sm"
                >
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-navy/5 text-navy">
                    <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </span>
                  <span className="font-sans text-[11px] font-medium text-navy leading-tight">{t.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column — Editorial card */}
        <div className="md:col-span-5">
          <div className="relative animate-fade-up" style={{ animationDelay: "300ms" }}>
            <div className="relative bg-navy text-ivory rounded-2xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(15,42,71,0.6)]">
              {/* Watermark */}
              <div className="absolute -top-16 -right-10 font-serif text-[16rem] leading-none text-gold/10 select-none pointer-events-none">
                M
              </div>
              <div className="relative p-8 md:p-10">
                <p className="overline text-gold mb-6">Perfil profesional</p>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-2 text-ivory">Brenda Mayra <em className="font-light text-ivory/80">Rubio</em></h3>
                <p className="font-sans text-xs text-ivory/60 mb-8 tracking-wide">DNI 25.283.770 · CUIT 27-25283770-7</p>

                <ul className="space-y-4 mb-8">
                  {[
                    "Abogada · Universidad de Buenos Aires",
                    "Mediadora Judicial · Ley N° 26.589",
                    "Especialista en accidentes de tránsito y daños",
                    "Domicilio constituido · Paraná 426, 15° K · CABA",
                  ].map((it) => (
                    <li key={it} className="flex items-start gap-3 font-sans text-sm text-ivory/85">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-ivory/15">
                  <div>
                    <p className="overline text-[9px] text-ivory/50 mb-1">Cobertura</p>
                    <p className="font-serif text-xl text-ivory">CABA · Nación</p>
                  </div>
                  <div>
                    <p className="overline text-[9px] text-ivory/50 mb-1">Consultas</p>
                    <p className="font-serif text-xl text-ivory">Todo el país</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating gold accent card */}
            <div className="absolute -bottom-6 -left-6 md:-left-8 bg-gold text-navy rounded-xl px-6 py-4 shadow-[0_20px_40px_-20px_rgba(200,164,100,0.9)] hidden md:block">
              <p className="overline text-[9px] mb-1">Registro</p>
              <p className="font-serif text-xl leading-tight">Mat. MJyDH N° 5050</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
