import React from "react";
import { Scale, ShoppingBag, Car, Briefcase, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Scale,
    tag: "Prejudicial · CABA",
    title: "Mediación Prejudicial Obligatoria",
    description:
      "Tramitación e inicio de mediaciones prejudiciales — privadas o por sorteo — según la Ley N° 26.589. Fijación de audiencias, notificación por Carta Documento y librado de actas oficiales con firma digital habilitada.",
    bullets: ["Sorteo público o designación directa", "Carta Documento a nuestro cargo", "Acta oficial homologable"],
  },
  {
    icon: ShoppingBag,
    tag: "Ley 26.993",
    title: "Conciliación en Relaciones de Consumo",
    description:
      "Conciliadora certificada en el Registro Nacional de Conciliadores en Relaciones de Consumo. Intervención rápida en reclamos de usuarios, servicios financieros, tarjetas, e-commerce, telecomunicaciones y garantías.",
    bullets: ["Servicio financiero y bancario", "E-commerce y telecomunicaciones", "COPREC · Defensa del Consumidor"],
  },
  {
    icon: Car,
    tag: "Civil / Comercial",
    title: "Accidentes de Tránsito y Daños",
    description:
      "Gestión eficiente de reclamos por accidentes viales, daños materiales, lesiones y perjuicios comerciales. Experiencia previa como apoderada de aseguradoras para negociar acuerdos económicos realistas.",
    bullets: ["Interpretación de criterios aseguradores", "Reclamos por lesiones y daño material", "Negociación económica ágil"],
  },
  {
    icon: Briefcase,
    tag: "Colegas del interior",
    title: "Servicio para Abogados del País",
    description:
      "Asistencia integral a estudios jurídicos del interior que necesitan fijar, sortear o representar mediaciones en la jurisdicción CABA. Audiencias virtuales por Zoom, gestión remota y coordinación de firma digital.",
    bullets: ["Audiencias virtuales por Zoom", "Coordinación 100% remota", "Rendición documental online"],
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
          <span className="overline text-gold">Servicios & especialidades</span>
        </div>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <h2 className="md:col-span-7 font-serif text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-tight text-ivory">
            Cuatro áreas de práctica, <em className="font-light text-ivory/70">un mismo estándar profesional</em>.
          </h2>
          <p className="md:col-span-5 md:col-start-8 font-sans text-base md:text-lg leading-relaxed text-ivory/70 self-end">
            Trabajo con abogados litigantes, particulares y empresas. Cada expediente se aborda con el marco legal correspondiente y una gestión operativa que prioriza la celeridad y la certeza documental.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                data-testid={`service-card-${idx}`}
                className="group relative bg-white/[0.03] border border-white/15 rounded-2xl p-8 md:p-10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-gold/40 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gold/15 border border-gold/30 text-gold group-hover:bg-gold group-hover:text-navy transition-colors duration-500">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-gold/80 bg-gold/10 border border-gold/20 rounded-full px-3 py-1">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-[1.9rem] leading-tight mb-4 text-ivory">{s.title}</h3>
                <p className="font-sans text-sm md:text-[0.95rem] leading-relaxed text-ivory/70 mb-6">
                  {s.description}
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/10">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 font-sans text-[13px] text-ivory/85">
                      <ArrowUpRight className="w-3.5 h-3.5 mt-0.5 text-gold flex-shrink-0" strokeWidth={2} />
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
