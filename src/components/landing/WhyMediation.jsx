import React from "react";
import { MessageCircle, Lock, Scale, UserCheck, Handshake, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: MessageCircle,
    title: "Sí al diálogo",
    text: "Permite que las partes sean escuchadas y participen directamente en la búsqueda de una solución.",
  },
  {
    icon: Lock,
    title: "Sí a la confidencialidad",
    text: "La Ley 26.589 establece la confidencialidad como uno de los principios del procedimiento.",
  },
  {
    icon: Scale,
    title: "Sí a la imparcialidad",
    text: "La mediadora no representa ni decide por ninguna de las partes. Acompaña y conduce el diálogo desde una posición imparcial.",
  },
  {
    icon: UserCheck,
    title: "Sí a la autonomía",
    text: "Son las partes quienes deciden si existe una solución aceptable y cuáles serán sus términos.",
  },
  {
    icon: Handshake,
    title: "Sí a las soluciones consensuadas",
    text: "Permite explorar alternativas que muchas veces exceden lo que podría obtenerse mediante una sentencia.",
  },
  {
    icon: ShieldCheck,
    title: "Sí a evitar litigios innecesarios",
    text: "Cuando se alcanza un acuerdo, el conflicto puede resolverse sin transitar un proceso judicial prolongado.",
  },
];

export default function WhyMediation() {
  return (
    <section
      id="los-si-mediacion"
      data-testid="why-mediation-section"
      className="relative py-20 md:py-28 bg-cloud border-y border-navy/5 overflow-hidden"
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
        className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A464 0%, transparent 65%)" }}
      />

      <div className="relative container-narrow">
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-14 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="divider-gold" />
              <span className="eyebrow text-navy">Los sí de la mediación</span>
            </div>
            <h2
              data-testid="why-mediation-title"
              className="font-serif font-medium text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight text-navy"
            >
              ¿Por qué elegir la <em className="font-light text-gold-dark">mediación</em>?
            </h2>
          </div>
          <p className="md:col-span-5 font-sans text-[15px] leading-relaxed text-slate-700 max-w-[60ch]">
            Un procedimiento profesional para abordar diferencias con escucha, respeto y criterio jurídico, buscando acuerdos posibles antes de continuar por la vía judicial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                data-testid={`why-card-${idx}`}
                className="group bg-white border border-navy/10 rounded-2xl p-6 shadow-[0_4px_20px_-12px_rgba(15,42,71,0.15)] hover:shadow-[0_20px_40px_-20px_rgba(15,42,71,0.35)] hover:-translate-y-1 hover:border-gold/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gold/10 border border-gold/25 text-gold-dark group-hover:bg-gold-dark group-hover:text-white transition-colors duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-3xl text-gold-dark/40 group-hover:text-gold-dark/80 transition-colors duration-500">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-[1.35rem] leading-tight mb-3 text-navy">{it.title}</h3>
                <p className="font-sans text-[13.5px] leading-relaxed text-slate-700">{it.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
