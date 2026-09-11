import React from "react";
import { FileText, Settings, Users, FileSignature } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: FileText,
    title: "Solicitud de mediación",
    text: "El abogado requirente inicia la solicitud a través del Portal de Mediación o envía a la mediadora los datos necesarios y la autorización correspondiente para realizar la precarga del trámite.",
  },
  {
    n: "02",
    icon: Settings,
    title: "Gestión de la mediación",
    text: "La mediadora recibe y gestiona la solicitud mediante el sistema vigente. Coordina con el profesional interviniente las cuestiones necesarias para la audiencia, las notificaciones, sus gastos y el pago del bono MEPRE.",
  },
  {
    n: "03",
    icon: Users,
    title: "Audiencia de mediación",
    text: "La audiencia se desarrolla con la intervención de las partes y sus abogados, bajo la conducción de la mediadora. Según las características y necesidades del caso, podrá realizarse a distancia mediante Zoom u otra herramienta adecuada, o de manera presencial en el estudio.",
  },
  {
    n: "04",
    icon: FileSignature,
    title: "Acta y firma en SIGIM",
    text: "Finalizada la audiencia, el acta correspondiente se gestiona a través del Portal de Mediación. Cuando corresponda por la modalidad de la audiencia, la mediadora firma digitalmente y las partes, los abogados y demás intervinientes completan la firma electrónica mediante el sistema.",
  },
];

export default function Process() {
  const go = (e) => {
    e.preventDefault();
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="proceso" data-testid="process-section" className="py-20 md:py-28 bg-ivory relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A464 0%, transparent 65%)" }}
      />

      <div className="relative container-narrow">
        <div className="flex items-center gap-4 mb-6">
          <span className="divider-gold" />
          <span className="eyebrow text-navy">Procedimiento</span>
        </div>
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 mb-12 md:mb-16">
          <h2 className="md:col-span-8 font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.02] tracking-tight text-navy">
            Cómo gestiono una <em className="font-light text-gold-dark">mediación prejudicial</em>.
          </h2>
          <p className="md:col-span-4 md:col-start-9 font-sans text-[14px] md:text-[15px] leading-relaxed text-slate-700 self-end max-w-[65ch]">
            Un procedimiento profesional organizado en etapas claras, desde la solicitud hasta el cierre, conforme al régimen aplicable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                data-testid={`process-step-${idx}`}
                className="group relative bg-white border border-navy/10 rounded-2xl p-6 shadow-[0_4px_20px_-12px_rgba(15,42,71,0.15)] hover:shadow-[0_20px_40px_-20px_rgba(15,42,71,0.35)] hover:-translate-y-1 hover:border-gold/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold-light transition-colors duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-5xl leading-none text-gold-dark/30 group-hover:text-gold-dark/70 transition-colors duration-500">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-[1.35rem] leading-tight mb-3 text-navy">{s.title}</h3>
                <p className="font-sans text-[13px] leading-relaxed text-slate-700">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Botón acceso a SIGIM */}
        <div className="mt-10 md:mt-12 flex justify-center">
          <a
            href="#sigim"
            data-testid="process-sigim-link"
            onClick={(e) => { e.preventDefault(); document.getElementById("sigim")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
            className="inline-flex items-center gap-2.5 bg-navy text-ivory px-7 py-3.5 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md shadow-[0_14px_30px_-14px_rgba(15,42,71,0.6)] hover:bg-navy-mid hover:-translate-y-0.5 transition-all duration-300"
          >
            Conocer el nuevo sistema SIGIM
          </a>
        </div>

        {/* Acuerdo o cierre */}
        <div data-testid="process-closing" className="mt-10 md:mt-12 bg-cloud border border-navy/10 rounded-2xl p-7 md:p-9">
          <h3 className="font-serif text-2xl md:text-[1.75rem] leading-tight text-navy mb-3">
            Acuerdo o <em className="font-light text-gold-dark">cierre</em>
          </h3>
          <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-slate-700 max-w-[80ch]">
            Si las partes arriban a un acuerdo, este se instrumenta con los recaudos y las firmas correspondientes. Si no existe acuerdo, se emite el acta de cierre de instancia.
          </p>
        </div>

        {/* Recuadro azul — Resolución del conflicto */}
        <div className="mt-6 md:mt-8 bg-navy text-ivory rounded-2xl p-7 md:p-9 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <h3 className="font-serif text-2xl md:text-[1.75rem] leading-tight text-ivory mb-3">
              Resolución del <em className="font-light text-gold-light">conflicto</em>
            </h3>
            <p className="font-sans text-[14px] md:text-[15px] leading-relaxed text-ivory/85 max-w-[70ch]">
              El acuerdo alcanzado en mediación, instrumentado en acta MEPRE, es ejecutable mediante el procedimiento de ejecución de sentencia (art. 30 de la Ley 26.589).
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <a
              href="#contacto"
              onClick={go}
              data-testid="process-cta"
              className="inline-flex items-center gap-2.5 bg-gold-dark text-white px-6 py-3.5 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md shadow-[0_10px_28px_-14px_rgba(168,136,73,0.9)] hover:bg-white hover:text-navy transition-all duration-300"
            >
              Consultar una mediación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
