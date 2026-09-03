import React from "react";
import { FileSearch, Users, Gavel, CheckCircle2 } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: FileSearch,
    title: "Recepción y análisis",
    text: "Recibo los datos del reclamo o del expediente. Confirmo si el caso corresponde a mediación prejudicial obligatoria por accidente de tránsito en CABA o a una mediación privada, y evalúo la vía más eficiente para avanzar.",
  },
  {
    n: "02",
    icon: Users,
    title: "Designación del mediador",
    text: "Existen dos opciones legales de designación: por sorteo público mediante el Ministerio de Justicia y DH, o por elección directa entre las partes desde la lista oficial de mediadores habilitados. Trabajo bajo cualquiera de las dos modalidades.",
  },
  {
    n: "03",
    icon: Gavel,
    title: "Audiencia y negociación",
    text: "Notifico por Carta Documento y celebro la audiencia de forma 100% virtual por Zoom, con firma digital habilitada. Actúo como facilitadora profesional, manteniendo la confidencialidad y la buena fe procesal en todo momento.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    title: "Acuerdo o acta oficial",
    text: "Si hay acuerdo, se instrumenta con firma digital y adquiere efecto de cosa juzgada, habilitando ejecución directa. Si no lo hay, libro un acta oficial de inmediato para que el colega inicie la vía judicial correspondiente.",
  },
];

export default function Process() {
  return (
    <section id="proceso" data-testid="process-section" className="py-24 md:py-40 bg-ivory relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A464 0%, transparent 65%)" }}
      />

      <div className="relative container-narrow">
        <div className="flex items-center gap-4 mb-6">
          <span className="divider-gold" />
          <span className="overline">Marco legal · Buenos Aires</span>
        </div>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20">
          <h2 className="md:col-span-8 font-serif text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.02] tracking-tight text-navy">
            ¿Cómo trabajo la <em className="font-light text-gold-dark">mediación</em> vial en la Ciudad de Buenos Aires?
          </h2>
          <p className="md:col-span-4 md:col-start-9 font-sans text-base leading-relaxed text-slate-700 self-end">
            La mediación es una etapa previa <strong className="text-navy">obligatoria</strong> al juicio en la jurisdicción de CABA. Un acuerdo mediado tiene <strong className="text-navy">efecto de cosa juzgada</strong> y es directamente ejecutable.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                data-testid={`process-step-${idx}`}
                className="group relative bg-white border border-navy/10 rounded-2xl p-6 md:p-7 shadow-[0_4px_20px_-12px_rgba(15,42,71,0.15)] hover:shadow-[0_20px_40px_-20px_rgba(15,42,71,0.35)] hover:-translate-y-1 hover:border-gold/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold transition-colors duration-500">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-serif text-5xl md:text-6xl leading-none text-gold-dark/25 group-hover:text-gold-dark/60 transition-colors duration-500">
                    {s.n}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl leading-tight mb-3 text-navy">{s.title}</h3>
                <p className="font-sans text-[13px] md:text-sm leading-relaxed text-slate-700">
                  {s.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-16 md:mt-20 bg-navy text-ivory rounded-2xl p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <p className="overline text-gold mb-3">Aviso institucional</p>
            <p className="font-serif text-2xl md:text-3xl leading-tight text-ivory">
              Un acuerdo mediado, firmado con las formalidades legales, es <em className="font-light text-gold">título ejecutivo</em> y evita años de proceso judicial.
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="process-cta"
              className="inline-flex items-center gap-3 bg-gold text-navy px-6 py-3.5 text-xs uppercase font-semibold tracking-[0.22em] rounded-md shadow-[0_10px_28px_-14px_rgba(200,164,100,0.9)] hover:bg-gold-dark hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Consultar mi caso
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
