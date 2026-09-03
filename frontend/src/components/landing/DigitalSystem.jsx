import React from "react";
import { FolderInput, CalendarClock, FileSignature, ArrowUpRight, ShieldCheck, Cloud, Lock, CheckCircle2 } from "lucide-react";

const cards = [
  {
    icon: FolderInput,
    title: "Carga en SIGIM",
    text: "Recibo su información y la cargo en el Sistema Integrado de Gestión de la Mediación (SIGIM) del Ministerio de Justicia, sin errores y con la documentación en orden.",
  },
  {
    icon: CalendarClock,
    title: "Agenda coordinada",
    text: "Coordino la audiencia según la disponibilidad de las partes, con modalidad 100% virtual por Zoom y confirmación por email.",
  },
  {
    icon: FileSignature,
    title: "Actas al instante",
    text: "Actas de acuerdo o de cierre disponibles de inmediato con firma digital, listas para ejecutar o para habilitar la vía judicial.",
  },
  {
    icon: ArrowUpRight,
    title: "Su expediente avanza",
    text: "Un flujo digital reduce demoras administrativas y libera el tiempo del colega para lo estratégico. Su caso se mueve.",
  },
];

export default function DigitalSystem() {
  return (
    <section
      id="sistema-digital"
      data-testid="digital-section"
      className="relative py-24 md:py-40 bg-cloud overflow-hidden border-y border-navy/5"
    >
      {/* Decorative accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,42,71,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,42,71,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A464 0%, transparent 65%)" }}
      />

      <div className="relative container-narrow">
        {/* Top block: Title + Illustration */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center mb-16 md:mb-24">
          {/* Left — Copy */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <span className="block w-14 h-[2px] bg-gold" />
              <span className="font-sans uppercase text-xs md:text-[13px] tracking-[0.28em] text-navy font-semibold">
                Sistema digital
              </span>
            </div>
            <h2
              data-testid="digital-title"
              className="font-serif font-medium text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-navy"
            >
              Gestión <span className="italic font-light text-gold-dark">100% digital</span> de la mediación prejudicial.
            </h2>
            <p className="mt-6 font-sans text-base md:text-lg leading-relaxed text-slate-700">
              Trabajo con la plataforma oficial <strong className="text-navy">SIGIM</strong> del Ministerio de Justicia y Derechos Humanos. La gestión digital reduce fricciones, evita demoras y garantiza trazabilidad completa del expediente.
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-slate-700">
              Contar con una mediadora actualizada permite avanzar cada etapa —carga, notificación, audiencia y acta— de manera <strong className="text-navy">eficiente, clara y segura</strong>.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                { icon: ShieldCheck, label: "SIGIM oficial" },
                { icon: Cloud, label: "Zoom · alta definición" },
                { icon: Lock, label: "Firma digital" },
                { icon: CheckCircle2, label: "Trazabilidad total" },
              ].map((chip) => {
                const Icon = chip.icon;
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 bg-white border border-navy/10 rounded-full px-3.5 py-2 text-[12px] font-sans font-medium text-navy shadow-[0_2px_10px_-6px_rgba(15,42,71,0.15)]"
                  >
                    <Icon className="w-3.5 h-3.5 text-gold-dark" strokeWidth={1.75} />
                    {chip.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right — Browser mock illustration */}
          <div className="md:col-span-6">
            <div className="relative">
              {/* Floating gold circle */}
              <div
                aria-hidden="true"
                className="absolute -top-8 -right-6 w-40 h-40 rounded-full bg-gold/20 blur-2xl"
              />
              {/* Browser window */}
              <div className="relative bg-navy rounded-2xl shadow-[0_40px_80px_-30px_rgba(15,42,71,0.55)] overflow-hidden border border-navy/20">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-navy-deep">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-ivory/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-ivory/30" />
                  <div className="flex-1 mx-4 h-6 rounded-md bg-white/[0.08] flex items-center px-3">
                    <span className="text-[10px] font-mono text-ivory/50 tracking-wider">sigim.jus.gob.ar / expediente</span>
                  </div>
                  <span className="text-[10px] font-sans text-gold uppercase tracking-widest">Live</span>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold text-navy">
                      <FileSignature className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold">Mediación · MEPRE</p>
                      <p className="font-serif text-lg text-ivory leading-tight">Expediente N° 1227708</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: "Carga inicial", state: "Completa", pct: 100 },
                      { label: "Notificación por CD", state: "En curso", pct: 68 },
                      { label: "Audiencia · Zoom", state: "Programada", pct: 40 },
                      { label: "Firma digital de acta", state: "Pendiente", pct: 12 },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-sans text-[11px] text-ivory/85">{row.label}</span>
                            <span className="font-sans text-[10px] uppercase tracking-wider text-gold">{row.state}</span>
                          </div>
                          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-gold to-gold-light"
                              style={{ width: `${row.pct}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <p className="font-sans text-[11px] text-ivory/60">Firma digital habilitada</p>
                    <span className="inline-flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-wider text-gold">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                      Trazable
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating document card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white border border-navy/10 rounded-xl px-5 py-4 shadow-[0_20px_40px_-20px_rgba(15,42,71,0.35)] hidden sm:block">
                <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-slate-500 mb-1">Acta MEPRE</p>
                <p className="font-serif text-navy text-lg leading-tight">Firma digital</p>
                <p className="font-sans text-[11px] text-gold-dark mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" strokeWidth={2} />
                  Verificada
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: 4 feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                data-testid={`digital-card-${idx}`}
                className="group bg-white border border-navy/10 rounded-2xl p-6 md:p-7 shadow-[0_4px_20px_-12px_rgba(15,42,71,0.15)] hover:shadow-[0_20px_40px_-20px_rgba(15,42,71,0.35)] hover:-translate-y-1 hover:border-gold/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gold/10 border border-gold/25 text-gold-dark group-hover:bg-gold group-hover:text-navy transition-colors duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-2xl text-gold-dark/30 group-hover:text-gold-dark/70 transition-colors duration-500">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl leading-tight mb-3 text-navy">{c.title}</h3>
                <p className="font-sans text-[13px] md:text-sm leading-relaxed text-slate-700">
                  {c.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
