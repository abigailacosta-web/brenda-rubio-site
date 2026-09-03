import React from "react";
import { Briefcase, Scale, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    tag: "Servicio principal",
    title: "Para abogados y estudios jurídicos",
    description:
      "Gestiono integralmente mediaciones prejudiciales derivadas de accidentes de tránsito en jurisdicción CABA, tanto por sorteo público como por designación privada. Trabajo con colegas de CABA y del interior del país, ofreciendo audiencias virtuales, organización documental y disponibilidad ágil de fechas.",
    bullets: [
      "Audiencias 100% virtuales por Zoom",
      "Sorteo público o designación privada",
      "Gestión remota de la documentación",
      "Disponibilidad ágil de fechas",
      "Comunicación directa durante el procedimiento",
    ],
    ctaLabel: "Consultar disponibilidad",
  },
  {
    icon: Scale,
    tag: "Atención a particulares",
    title: "Mediación en accidentes de tránsito",
    description:
      "Intervengo como mediadora neutral en reclamos por lesiones, daños materiales y demás consecuencias civiles o comerciales derivadas de accidentes de tránsito ocurridos en la jurisdicción correspondiente. La participación en el procedimiento se realiza con la asistencia letrada exigida por la normativa aplicable.",
    bullets: [
      "Procedimiento prejudicial formal",
      "Audiencias virtuales",
      "Imparcialidad y confidencialidad",
      "Actas gestionadas conforme a la normativa vigente",
    ],
    ctaLabel: "Consultar una mediación",
  },
];

export default function Services() {
  const go = (e) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="servicios" data-testid="services-section" className="relative bg-navy text-ivory py-20 md:py-28 overflow-hidden">
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
          <span className="w-12 h-[2px] bg-gold-light" />
          <span className="eyebrow text-gold-light">Servicios & especialidad</span>
        </div>
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
          <h2 className="md:col-span-7 font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight text-ivory">
            Una especialidad, <em className="font-light text-ivory/70">dos modalidades de atención</em>.
          </h2>
          <p className="md:col-span-5 md:col-start-8 font-sans text-[15px] md:text-base leading-relaxed text-ivory/80 self-end">
            Mi práctica está organizada por destinatario: el servicio principal está dirigido a abogados y estudios jurídicos; también atiendo a particulares con asistencia letrada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                data-testid={`service-card-${idx}`}
                className="group relative bg-white/[0.03] border border-white/15 rounded-2xl p-7 md:p-9 backdrop-blur-sm hover:bg-white/[0.06] hover:border-gold/40 hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gold/15 border border-gold/30 text-gold-light group-hover:bg-gold-dark group-hover:text-white group-hover:border-gold-dark transition-colors duration-500">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-light bg-gold/10 border border-gold/25 rounded-full px-3 py-1">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-serif text-2xl md:text-[1.85rem] leading-tight mb-4 text-ivory">
                  {s.title}
                </h3>
                <p className="font-sans text-[13.5px] md:text-[14.5px] leading-relaxed text-ivory/85 mb-5 max-w-[65ch]">
                  {s.description}
                </p>
                <ul className="space-y-2 pt-4 mb-6 border-t border-white/10 flex-1">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 font-sans text-[13px] md:text-sm text-ivory/90">
                      <ArrowUpRight className="w-3.5 h-3.5 mt-1 text-gold-light flex-shrink-0" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  onClick={go}
                  data-testid={`service-cta-${idx}`}
                  className="inline-flex items-center justify-center gap-2 self-start bg-gold-dark text-white px-6 py-3 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md hover:bg-white hover:text-navy transition-all duration-300"
                >
                  {s.ctaLabel}
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
