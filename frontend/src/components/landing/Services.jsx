import React from "react";
import { Car, Briefcase, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Car,
    tag: "Especialidad principal",
    title: "Mediación en Accidentes de Tránsito y Siniestros Viales",
    description:
      "Ofrezco un servicio especializado en la resolución prejudicial de reclamos por lesiones, daños materiales y perjuicios derivados de accidentes de tránsito en la Ciudad de Buenos Aires. Negocio con conocimiento directo de los criterios aseguradores y trabajo con firma digital habilitada.",
    bullets: [
      "Reclamos por lesiones y daño material",
      "Negociación con criterios aseguradores",
      "Firma digital de actas y acuerdos",
    ],
  },
  {
    icon: Briefcase,
    tag: "Colegas del interior y CABA",
    title: "Servicio para Abogados y Estudios del Interior / CABA",
    description:
      "Gestiono de manera integral mediaciones prejudiciales viales — públicas (por sorteo) o privadas por designación directa — en jurisdicción CABA. Ofrezco audiencias 100% virtuales por Zoom, gestión remota de la documentación y agilidad en la fijación de fechas para colegas de todo el país.",
    bullets: [
      "Audiencias virtuales por Zoom",
      "Sorteo público o designación directa",
      "Gestión remota de documentación",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" data-testid="services-section" className="relative bg-navy text-ivory py-24 md:py-40 overflow-hidden">
      {/* Subtle pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #C8A464 0px, transparent 1px), radial-gradient(circle at 85% 60%, #FBFBF9 0px, transparent 1px)",
          backgroundSize: "48px 48px, 72px 72px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A464 0%, transparent 65%)" }}
      />

      <div className="relative container-narrow">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-px bg-gold" />
          <span className="eyebrow text-gold">Servicios & especialidad</span>
        </div>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <h2 className="md:col-span-7 font-serif text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-tight text-ivory">
            Una especialidad, <em className="font-light text-ivory/70">dos vertientes de servicio</em>.
          </h2>
          <p className="md:col-span-5 md:col-start-8 font-sans text-base md:text-lg leading-relaxed text-ivory/70 self-end">
            Trabajo exclusivamente en mediaciones vinculadas a accidentes de tránsito y sus daños derivados. Puedo intervenir como mediadora en su caso particular o asistir a colegas del interior que necesitan operar en la jurisdicción CABA.
          </p>
        </div>

        {/* Service cards — 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                data-testid={`service-card-${idx}`}
                className="group relative bg-white/[0.03] border border-white/15 rounded-2xl p-8 md:p-10 lg:p-12 backdrop-blur-sm hover:bg-white/[0.06] hover:border-gold/40 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gold/15 border border-gold/30 text-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-500">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-gold/80 bg-gold/10 border border-gold/20 rounded-full px-3 py-1">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-[2rem] lg:text-[2.25rem] leading-tight mb-5 text-ivory">
                  {s.title}
                </h3>
                <p className="font-sans text-sm md:text-[0.95rem] leading-relaxed text-ivory/70 mb-6">
                  {s.description}
                </p>
                <ul className="space-y-2.5 pt-5 border-t border-white/10">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 font-sans text-[13px] md:text-sm text-ivory/85">
                      <ArrowUpRight className="w-3.5 h-3.5 mt-1 text-gold flex-shrink-0" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
