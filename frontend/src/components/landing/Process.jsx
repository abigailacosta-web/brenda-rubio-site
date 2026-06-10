import React from "react";

const steps = [
  {
    n: "01",
    title: "Recepción de Datos",
    text: "El abogado requirente nos facilita online los datos del siniestro, las partes involucradas y la aseguradora demandada. Se inicia el expediente de forma inmediata.",
  },
  {
    n: "02",
    title: "Notificación y Audiencia",
    text: "Confeccionamos y enviamos las Cartas Documento a las partes bajo nuestra firma. Coordinamos y celebramos la mediación de forma virtual por Zoom.",
  },
  {
    n: "03",
    title: "Firma y Cierre",
    text: "Firma digital del acuerdo en el acto, o emisión inmediata del acta oficial habilitante para iniciar la demanda en los Tribunales de Nación correspondientes.",
  },
];

export default function Process() {
  return (
    <section id="proceso" data-testid="process-section" className="bg-anthracite text-cream py-24 md:py-40">
      <div className="container-narrow">
        <div className="flex items-center gap-4 mb-6">
          <span className="block w-12 h-px bg-cream" />
          <span className="overline text-cream/70">El proceso</span>
        </div>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
          <h2 className="md:col-span-8 font-serif text-4xl md:text-5xl lg:text-7xl leading-[0.95] tracking-tight">
            Tres pasos. <em className="font-light text-cream/70">Cero fricción.</em>
          </h2>
          <p className="md:col-span-4 md:col-start-9 font-sans text-base leading-relaxed text-cream/70 self-end">
            Un circuito digital diseñado para que el colega no se mueva del estudio. Desde el alta del caso hasta el acta oficial, todo se opera online.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-0 md:gap-0 border-t border-cream/20">
          {steps.map((s, idx) => (
            <div
              key={s.n}
              data-testid={`process-step-${idx}`}
              className={`relative py-10 md:py-14 pr-6 md:pr-10 ${
                idx < steps.length - 1 ? "md:border-r border-cream/20" : ""
              } ${idx > 0 ? "md:pl-10" : ""}`}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-serif text-7xl md:text-8xl lg:text-9xl leading-none text-cream/90">
                  {s.n}
                </span>
                <span className="overline text-cream/40 text-[10px]">Paso</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">{s.title}</h3>
              <p className="font-sans text-sm md:text-base leading-relaxed text-cream/70 max-w-sm">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
