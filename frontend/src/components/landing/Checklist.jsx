import React from "react";
import { Check } from "lucide-react";

const docs = [
  {
    title: "Denuncia del siniestro",
    detail: "Copia de la denuncia policial o exposición civil del hecho.",
  },
  {
    title: "Constancias médicas / presupuestos",
    detail: "Documentación que acredite lesiones, tratamientos o daños materiales reclamados.",
  },
  {
    title: "Datos del requirente",
    detail: "Nombre completo, DNI, domicilio real y constituido del cliente reclamante.",
  },
  {
    title: "Datos de la aseguradora demandada",
    detail: "Compañía, número de póliza (si se cuenta) y datos del asegurado demandado.",
  },
];

export default function Checklist() {
  return (
    <section id="documentacion" data-testid="checklist-section" className="py-20 md:py-32">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-12 h-px bg-anthracite" />
              <span className="overline">Documentación requerida</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              Una checklist <em className="font-light">breve</em> para el colega.
            </h2>
            <p className="font-sans text-base leading-relaxed text-anthracite-soft mt-6 max-w-md">
              Con esta información iniciamos el expediente y avanzamos a la confección de las Cartas Documento. Nada de pedidos sucesivos: todo lo necesario, en un solo envío.
            </p>
          </div>

          <ul className="md:col-span-7 divide-y divide-anthracite/15 border-y border-anthracite/15">
            {docs.map((d, idx) => (
              <li key={d.title} data-testid={`checklist-item-${idx}`} className="flex items-start gap-6 py-6 md:py-8">
                <span className="flex-shrink-0 w-10 h-10 border border-anthracite flex items-center justify-center">
                  <Check className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h3 className="font-serif text-2xl md:text-3xl leading-tight">{d.title}</h3>
                    <span className="font-sans text-xs text-anthracite-soft tabular-nums">0{idx + 1}</span>
                  </div>
                  <p className="font-sans text-sm md:text-base leading-relaxed text-anthracite-soft">{d.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
