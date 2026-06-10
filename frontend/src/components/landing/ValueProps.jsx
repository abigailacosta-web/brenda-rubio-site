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
    <section id="valor" data-testid="value-props" className="bg-cream-200/70 py-20 md:py-32 border-y border-anthracite/15">
      <div className="container-narrow">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-12 h-px bg-anthracite" />
          <span className="overline">Propuesta de valor</span>
        </div>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <h2 className="md:col-span-7 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            Cuatro razones por las que los <em className="font-light">estudios jurídicos</em> eligen nuestra mediación.
          </h2>
          <p className="md:col-span-5 md:col-start-8 font-sans text-base md:text-lg leading-relaxed text-anthracite-soft self-end">
            Construida para abogados litigantes que valoran la celeridad, la rigurosidad legal y la comodidad operativa. Cada bloque del servicio fue diseñado para que usted dedique menos tiempo a la burocracia y más al caso.
          </p>
        </div>

        {/* Editorial 2x2 grid with shared borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-anthracite/15 bg-cream">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                data-testid={`value-prop-${idx}`}
                className={`group p-8 md:p-12 lg:p-14 transition-colors duration-500 hover:bg-cream-200 ${
                  idx % 2 === 0 ? "md:border-r border-anthracite/15" : ""
                } ${idx < 2 ? "border-b border-anthracite/15" : ""}`}
              >
                <div className="flex items-start justify-between mb-8">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-anthracite" strokeWidth={1.25} />
                  <span className="font-serif italic text-anthracite-soft text-xl">0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">{it.title}</h3>
                <p className="font-sans text-sm md:text-base leading-relaxed text-anthracite-soft max-w-md">
                  {it.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
