import React from "react";
import { MonitorSmartphone, Mail, FileSignature, Briefcase } from "lucide-react";

const items = [
  {
    icon: MonitorSmartphone,
    title: "Proceso 100% Digital",
    description:
      "Audiencias remotas por Zoom y firma electrónica de actas. Cero presencialidad en tribunales. Resolvemos sin que usted ni su cliente se muevan del despacho.",
  },
  {
    icon: Mail,
    title: "Notificaciones a Nuestro Cargo",
    description:
      "Usted facilita los datos del caso y nosotros nos encargamos de la confección y envío formal de las Cartas Documento bajo nuestra firma.",
  },
  {
    icon: FileSignature,
    title: "Aptitud para Iniciar Juicio",
    description:
      "Si no se alcanza un acuerdo, libramos de forma inmediata el acta oficial con firma digital, lista para presentar e iniciar la demanda en Tribunales de Nación.",
  },
  {
    icon: Briefcase,
    title: "Visión Estratégica en Seguros",
    description:
      "Trayectoria previa como apoderada de compañías de seguros: entendemos la lógica aseguradora y aceleramos negociaciones económicas eficientes.",
  },
];

export default function ValueProps() {
  return (
    <section
      id="valor"
      data-testid="value-props"
      className="relative bg-anthracite text-cream py-24 md:py-40 overflow-hidden"
    >
      {/* Subtle radial accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #FAF9F6 0px, transparent 1px), radial-gradient(circle at 80% 60%, #FAF9F6 0px, transparent 1px)",
          backgroundSize: "40px 40px, 60px 60px",
        }}
      />

      <div className="relative container-narrow">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-10 h-px bg-cream/70" />
          <span className="overline text-cream/70">Propuesta de valor</span>
        </div>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
          <h2 className="md:col-span-7 font-serif text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-tight">
            Cuatro razones por las que los <em className="font-light text-cream/70">estudios jurídicos</em> eligen nuestra mediación.
          </h2>
          <p className="md:col-span-5 md:col-start-8 font-sans text-base md:text-lg leading-relaxed text-cream/70 self-end">
            Construida para abogados litigantes que valoran la celeridad, la rigurosidad legal y la comodidad operativa. Cada bloque del servicio fue diseñado para que usted dedique menos tiempo a la burocracia y más al caso.
          </p>
        </div>

        {/* Elegant cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                data-testid={`value-prop-${idx}`}
                className="group relative bg-cream/[0.04] border border-cream/15 rounded-2xl p-8 md:p-10 lg:p-12 backdrop-blur-sm hover:bg-cream/[0.07] hover:border-cream/30 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-cream/10 border border-cream/15 text-cream group-hover:bg-cream group-hover:text-anthracite transition-colors duration-500">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.25} />
                  </span>
                  <span className="font-serif italic text-cream/40 text-xl">0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-[2.1rem] leading-tight mb-4">{it.title}</h3>
                <p className="font-sans text-sm md:text-base leading-relaxed text-cream/70 max-w-md">
                  {it.description}
                </p>
                <span className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-cream/40 via-cream/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
