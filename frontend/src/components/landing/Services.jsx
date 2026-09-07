import React from "react";
import { Briefcase, Scale, ArrowUpRight, Check } from "lucide-react";

const subjects = [
  "Daños y perjuicios",
  "Incumplimientos contractuales",
  "Conflictos patrimoniales",
  "Locaciones",
  "Propiedad horizontal",
  "Responsabilidad civil",
  "Cobro de sumas de dinero",
  "Conflictos societarios",
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
          <span className="eyebrow text-gold-light">Servicios</span>
        </div>
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
          <h2 className="md:col-span-6 font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight text-ivory">
            Servicios de <em className="font-light text-ivory/75">mediación</em>.
          </h2>
          <div className="md:col-span-6 space-y-4 font-sans text-[14.5px] md:text-[15px] leading-relaxed text-ivory/85 self-end">
            <p>
              Servicio de mediación prejudicial dirigido exclusivamente a abogados que requieran iniciar mediaciones en el ámbito de <strong className="text-ivory">CABA</strong>, en conflictos de naturaleza <strong className="text-ivory">civil y comercial</strong> comprendidos dentro del régimen aplicable.
            </p>
            <p>
              La gestión comprende la organización y conducción del procedimiento de mediación, desde su inicio hasta su conclusión, procurando un trámite ágil, ordenado y una comunicación directa con los profesionales intervinientes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
          {/* Card 1 — Servicio */}
          <div
            data-testid="service-card-0"
            className="group relative bg-white/[0.03] border border-white/15 rounded-2xl p-7 md:p-9 backdrop-blur-sm hover:bg-white/[0.06] hover:border-gold/40 hover:-translate-y-1 transition-all duration-500 flex flex-col"
          >
            <div className="flex items-start justify-between mb-5">
              <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gold/15 border border-gold/30 text-gold-light group-hover:bg-gold-dark group-hover:text-white group-hover:border-gold-dark transition-colors duration-500">
                <Briefcase className="w-6 h-6" strokeWidth={1.5} />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-light bg-gold/10 border border-gold/25 rounded-full px-3 py-1">
                Para abogados
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-[1.85rem] leading-tight mb-4 text-ivory">Servicio</h3>
            <div className="space-y-3 font-sans text-[13.5px] md:text-[14.5px] leading-relaxed text-ivory/85 mb-6 max-w-[62ch] flex-1">
              <p>
                Gestiono y conduzco mediaciones prejudiciales por designación privada, en los supuestos que correspondan conforme al régimen vigente.
              </p>
              <p>
                Trabajo con profesionales que necesiten gestionar una mediación en esta jurisdicción, ofreciendo organización del procedimiento, audiencias presenciales o a distancia y disponibilidad ágil de fechas.
              </p>
            </div>
            <a
              href="#contacto"
              onClick={go}
              data-testid="service-cta-0"
              className="inline-flex items-center justify-center gap-2 self-start bg-gold-dark text-white px-6 py-3 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md hover:bg-white hover:text-navy transition-all duration-300"
            >
              Consultar disponibilidad
              <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
            </a>
          </div>

          {/* Card 2 — Ámbito de actuación */}
          <div
            data-testid="service-card-1"
            className="group relative bg-white/[0.03] border border-white/15 rounded-2xl p-7 md:p-9 backdrop-blur-sm hover:bg-white/[0.06] hover:border-gold/40 hover:-translate-y-1 transition-all duration-500 flex flex-col"
          >
            <div className="flex items-start justify-between mb-5">
              <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gold/15 border border-gold/30 text-gold-light group-hover:bg-gold-dark group-hover:text-white group-hover:border-gold-dark transition-colors duration-500">
                <Scale className="w-6 h-6" strokeWidth={1.5} />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-light bg-gold/10 border border-gold/25 rounded-full px-3 py-1">
                Materias
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-[1.85rem] leading-tight mb-1 text-ivory">Ámbito de actuación</h3>
            <p className="font-sans text-[13px] uppercase tracking-[0.15em] font-semibold text-gold-light mb-4">
              Mediaciones en asuntos civiles y comerciales
            </p>
            <p className="font-sans text-[13.5px] md:text-[14.5px] leading-relaxed text-ivory/85 mb-5 max-w-[62ch]">
              Intervengo como mediadora prejudicial en controversias de naturaleza civil y comercial comprendidas en el régimen aplicable, facilitando el diálogo entre las partes y trabajando junto con sus abogados en la búsqueda de alternativas que permitan alcanzar una solución consensuada.
            </p>
            <ul data-testid="service-subjects" className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-4 border-t border-white/10 flex-1">
              {subjects.map((s) => (
                <li key={s} className="flex items-start gap-2 font-sans text-[12.5px] md:text-[13px] text-ivory/90 leading-snug">
                  <Check className="w-3.5 h-3.5 mt-0.5 text-gold-light flex-shrink-0" strokeWidth={2.25} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
