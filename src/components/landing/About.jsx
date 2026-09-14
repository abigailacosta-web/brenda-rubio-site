import React from "react";
import { Award, ShieldCheck, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-mi" data-testid="about-section" className="py-20 md:py-28 bg-ivory">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-20 items-start">
          <aside className="md:col-span-5 md:sticky md:top-28">
            <div className="flex items-center gap-4 mb-8">
              <span className="divider-gold" />
              <span className="eyebrow text-navy">Sobre mí</span>
            </div>
            <h2
              data-testid="about-title"
              className="font-serif font-medium text-[2rem] sm:text-[2.4rem] md:text-[2.5rem] lg:text-[2.75rem] leading-[1.15] tracking-tight text-navy"
            >
              <span className="block">Experiencia para comprender cada conflicto.</span>
              <span className="block mt-2 italic font-light text-gold-dark">Escucha, diálogo y criterio para construir soluciones.</span>
            </h2>

            <div data-testid="about-credentials" className="mt-10 space-y-4">
              <div className="flex items-start gap-4 pb-5 border-b border-navy/10">
                <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/[0.04] border border-navy/10 text-navy flex-shrink-0">
                  <Award className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <p className="eyebrow-sm text-slate-700 mb-1">Formación y habilitación</p>
                  <p className="font-serif text-lg md:text-xl leading-snug text-navy">
                    Universidad de Buenos Aires (UBA)
                    <span className="text-slate-700 font-sans text-sm block mt-0.5">Matrícula MJyDH N° 5050/2020</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-5 border-b border-navy/10">
                <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/[0.04] border border-navy/10 text-navy flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <p className="eyebrow-sm text-slate-700 mb-1">Ámbito de actuación</p>
                  <p className="font-serif text-lg md:text-xl leading-snug text-navy">
                    Mediaciones prejudiciales en asuntos civiles y comerciales
                    <span className="text-slate-700 font-sans text-sm block mt-0.5">Ley N° 26.589 · Registro Nacional de Mediación</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/[0.04] border border-navy/10 text-navy flex-shrink-0">
                  <Layers className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <p className="eyebrow-sm text-slate-700 mb-1">Modalidad</p>
                  <p className="font-serif text-lg md:text-xl leading-snug text-navy">
                    Audiencias presenciales y a distancia
                    <span className="text-slate-700 font-sans text-sm block mt-0.5">Conforme a la normativa vigente</span>
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-7 space-y-5 font-sans text-[15px] md:text-base leading-relaxed text-slate-700 max-w-[68ch]">
            <p className="text-navy">
              Soy <span data-testid="about-name" className="font-serif font-semibold text-[1.2em] tracking-[0.03em] text-gold-dark">Brenda Mayra Rubio</span>, abogada graduada de la Universidad de Buenos Aires y mediadora prejudicial matriculada en el Registro Nacional de Mediación.
            </p>
            <p>
              Concibo la mediación como un espacio profesional de diálogo en el que las personas, asistidas por sus abogados, pueden abordar sus diferencias y explorar alternativas de solución antes de recurrir —o continuar— por la vía judicial.
            </p>
            <p>
              Mi función como mediadora es conducir ese proceso con imparcialidad, confidencialidad y respeto por la autonomía de las partes, facilitando la comunicación y generando las condiciones necesarias para la construcción de posibles acuerdos.
            </p>
            <p>
              Cada conflicto es diferente. Por eso, cada mediación requiere <em className="text-navy">escucha, criterio, preparación</em> y una conducción adecuada a las particularidades del caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
