import React from "react";
import { FolderInput, CalendarClock, FileSignature, ArrowUpRight, ShieldCheck, MonitorSmartphone, Lock, CheckCircle2 } from "lucide-react";

const cards = [
  {
    icon: FolderInput,
    title: "Carga en SIGIM",
    text: "Recibo la información necesaria y gestiono su incorporación al sistema oficial conforme a los requisitos vigentes y con la documentación ordenada.",
  },
  {
    icon: CalendarClock,
    title: "Coordinación de audiencia",
    text: "Coordino la fecha de audiencia según la disponibilidad correspondiente y comunico los datos necesarios para la participación virtual.",
  },
  {
    icon: FileSignature,
    title: "Actas conforme al sistema",
    text: "Gestiono las actas de acuerdo o cierre mediante las herramientas oficiales y con las firmas exigidas por la normativa aplicable.",
  },
  {
    icon: ArrowUpRight,
    title: "Seguimiento del procedimiento",
    text: "Mantengo una comunicación ordenada sobre el estado del trámite para que los profesionales intervinientes conozcan el avance de cada etapa.",
  },
];

export default function DigitalSystem() {
  return (
    <section
      id="sistema-digital"
      data-testid="digital-section"
      className="relative py-20 md:py-28 bg-cloud overflow-hidden border-y border-navy/5"
    >
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
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center mb-12 md:mb-16">
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="divider-gold" />
              <span className="eyebrow text-navy">Sistema digital</span>
            </div>
            <h2
              data-testid="digital-title"
              className="font-serif font-medium text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight text-navy"
            >
              Gestión <em className="font-light text-gold-dark">digital</em> de la mediación prejudicial.
            </h2>
            <p className="mt-5 font-sans text-[15px] leading-relaxed text-slate-700 max-w-[65ch]">
              Trabajo con el <strong className="text-navy">Sistema Informatizado de Gestión Integral de la Mediación Prejudicial Obligatoria (SIGIM)</strong>, plataforma oficial que integra el sistema MEPRE. La gestión digital permite organizar la carga, las notificaciones, las audiencias y las actas con mayor trazabilidad, claridad y seguridad.
            </p>
            <p className="mt-3 font-sans text-[15px] leading-relaxed text-slate-700 max-w-[65ch]">
              Contar con una mediadora actualizada permite gestionar cada etapa del procedimiento de manera ordenada, desde la carga inicial hasta el cierre, conforme a las herramientas y requisitos vigentes.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { icon: ShieldCheck, label: "SIGIM / MEPRE" },
                { icon: MonitorSmartphone, label: "Audiencias virtuales" },
                { icon: Lock, label: "Firma digital habilitada" },
                { icon: CheckCircle2, label: "Trazabilidad del procedimiento" },
              ].map((chip) => {
                const Icon = chip.icon;
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 bg-white border border-navy/10 rounded-full px-3 py-1.5 text-[11.5px] font-sans font-medium text-navy shadow-[0_2px_10px_-6px_rgba(15,42,71,0.15)]"
                  >
                    <Icon className="w-3.5 h-3.5 text-gold-dark" strokeWidth={1.75} />
                    {chip.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Illustrative mock — labeled explicitly */}
          <div className="md:col-span-6">
            <div className="relative">
              <div aria-hidden="true" className="absolute -top-8 -right-6 w-40 h-40 rounded-full bg-gold/20 blur-2xl" />
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] font-semibold text-slate-700">
                Representación ilustrativa · Infografía conceptual
              </p>
              <div
                data-testid="digital-mock"
                className="relative bg-navy rounded-2xl shadow-[0_40px_80px_-30px_rgba(15,42,71,0.55)] overflow-hidden border border-navy/20"
                role="img"
                aria-label="Infografía conceptual del flujo de gestión digital de una mediación prejudicial"
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-navy-deep">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-ivory/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-ivory/30" />
                  <div className="flex-1 mx-4 h-6 rounded-md bg-white/[0.08] flex items-center px-3">
                    <span className="text-[10px] font-mono text-ivory/50 tracking-wider">gestion-mediacion / demo</span>
                  </div>
                </div>
                <div className="p-5 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold-dark text-white">
                      <FileSignature className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold-light">SIGIM · MEPRE (demo)</p>
                      <p className="font-serif text-base text-ivory leading-tight">Expediente demostrativo N° 0000000</p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Carga inicial", state: "Completa", pct: 100 },
                      { label: "Notificaciones", state: "En curso", pct: 68 },
                      { label: "Audiencia · Zoom", state: "Programada", pct: 40 },
                      { label: "Firma digital de acta", state: "Pendiente", pct: 12 },
                    ].map((row) => (
                      <div key={row.label} className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-sans text-[11.5px] text-ivory/90">{row.label}</span>
                          <span className="font-sans text-[10px] uppercase tracking-wider text-gold-light">{row.state}</span>
                        </div>
                        <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-gold-dark to-gold-light" style={{ width: `${row.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <p className="font-sans text-[11px] text-ivory/70">Firma digital habilitada</p>
                    <span className="inline-flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-wider text-gold-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                      Trazable
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                data-testid={`digital-card-${idx}`}
                className="group bg-white border border-navy/10 rounded-2xl p-6 shadow-[0_4px_20px_-12px_rgba(15,42,71,0.15)] hover:shadow-[0_20px_40px_-20px_rgba(15,42,71,0.35)] hover:-translate-y-1 hover:border-gold/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gold/10 border border-gold/25 text-gold-dark group-hover:bg-gold-dark group-hover:text-white transition-colors duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-2xl text-gold-dark/40 group-hover:text-gold-dark/80 transition-colors duration-500">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl leading-tight mb-3 text-navy">{c.title}</h3>
                <p className="font-sans text-[13px] leading-relaxed text-slate-700">
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
