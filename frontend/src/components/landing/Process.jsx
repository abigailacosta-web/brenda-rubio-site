import React from "react";
import { FileSearch, Users, Gavel, CheckCircle2 } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: FileSearch,
    title: "Recepción y verificación inicial",
    text: "Recibo la información necesaria y verifico el encuadre del trámite. Explico el procedimiento aplicable y los requisitos para iniciar la mediación, sin asumir el asesoramiento particular de ninguna de las partes.",
  },
  {
    n: "02",
    icon: Users,
    title: "Designación de la mediadora",
    text: "La designación puede producirse mediante sorteo público o por elección privada conforme a la Ley N° 26.589. Coordino con el profesional requirente la modalidad correspondiente y los datos necesarios para iniciar el procedimiento.",
  },
  {
    n: "03",
    icon: Gavel,
    title: "Notificación y audiencia",
    text: "Gestiono las notificaciones conforme a la normativa vigente y coordino la audiencia virtual. Actúo como facilitadora neutral, preservando la confidencialidad, la imparcialidad y la buena fe durante todo el procedimiento.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    title: "Acuerdo o cierre",
    text: "Si las partes arriban a un acuerdo, este se instrumenta con los recaudos y firmas correspondientes. Si no existe acuerdo, se emite el acta de cierre que habilita, cuando corresponda, la continuación de la vía judicial.",
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
            ¿Cómo gestiono una <em className="font-light text-gold-dark">mediación vial</em> en CABA?
          </h2>
          <p className="md:col-span-4 md:col-start-9 font-sans text-[14px] md:text-[15px] leading-relaxed text-slate-700 self-end max-w-[65ch]">
            En los casos alcanzados por la <strong className="text-navy">Ley N° 26.589</strong>, la mediación prejudicial constituye una instancia previa obligatoria. Cuando las partes arriban a un acuerdo, este se instrumenta con los recaudos legales correspondientes y resulta ejecutable mediante el procedimiento de ejecución de sentencia, con las excepciones previstas por la normativa.
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

        <div className="mt-14 md:mt-16 bg-navy text-ivory rounded-2xl p-7 md:p-9 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <p className="eyebrow-sm text-gold-light mb-3">Aviso institucional</p>
            <p className="font-serif text-xl md:text-2xl leading-tight text-ivory">
              Un acuerdo instrumentado con los recaudos legales es ejecutable mediante el procedimiento de <em className="font-light text-gold-light">ejecución de sentencia</em> y puede evitar un proceso judicial prolongado.
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
