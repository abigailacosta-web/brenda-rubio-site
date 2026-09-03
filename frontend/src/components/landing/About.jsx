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
              <span className="block mt-2 italic font-light text-gold-dark">Criterio y dedicación para conducir cada mediación.</span>
            </h2>

            <div data-testid="about-credentials" className="mt-10 space-y-4">
              <div className="flex items-start gap-4 pb-5 border-b border-navy/10">
                <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/[0.04] border border-navy/10 text-navy flex-shrink-0">
                  <Award className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <p className="eyebrow-sm text-slate-700 mb-1">Formación & habilitación</p>
                  <p className="font-serif text-lg md:text-xl leading-snug text-navy">
                    Universidad de Buenos Aires (UBA)
                    <span className="text-slate-700 font-sans text-sm block mt-0.5">Mat. MJyDH N° 5050/2020</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-5 border-b border-navy/10">
                <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/[0.04] border border-navy/10 text-navy flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <p className="eyebrow-sm text-slate-700 mb-1">Especialidad</p>
                  <p className="font-serif text-lg md:text-xl leading-snug text-navy">
                    Mediación en accidentes de tránsito
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
                    Audiencias 100% virtuales por Zoom
                    <span className="text-slate-700 font-sans text-sm block mt-0.5">Firma digital conforme a normativa vigente</span>
                  </p>
                </div>
              </div>
            </div>
          </aside>

          <div className="md:col-span-7 space-y-5 font-sans text-[15px] md:text-base leading-relaxed text-slate-700 max-w-[68ch]">
            <p className="text-navy">
              Soy <em className="not-italic font-semibold">Brenda Mayra Rubio</em>, abogada graduada de la Universidad de Buenos Aires y mediadora prejudicial matriculada en el Registro Nacional de Mediación. Me especializo exclusivamente en la gestión de conflictos derivados de accidentes de tránsito, brindando un servicio basado en el rigor legal, la agilidad operativa, la imparcialidad y la confidencialidad.
            </p>
            <p>
              Mi práctica se concentra en mediaciones prejudiciales por siniestros viales en la Ciudad Autónoma de Buenos Aires: reclamos por lesiones, daños materiales y demás perjuicios civiles o comerciales derivados del hecho. Trabajo con abogados y estudios jurídicos de CABA y del interior del país que necesitan gestionar mediaciones en esta jurisdicción. Todas las audiencias se celebran de manera virtual por Zoom, con los recaudos y firmas exigidos por la normativa vigente.
            </p>

            {/* Diferencial destacado */}
            <div
              data-testid="differential-callout"
              className="relative bg-navy text-ivory rounded-2xl p-6 md:p-8 my-2 shadow-[0_20px_50px_-25px_rgba(15,42,71,0.5)] overflow-hidden"
            >
              <div aria-hidden="true" className="absolute -top-16 -right-8 font-serif text-[12rem] leading-none text-gold/10 select-none pointer-events-none">★</div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gold-dark text-white">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2L3 7l9 5 9-5-9-5z" />
                      <path d="M3 12l9 5 9-5" />
                      <path d="M3 17l9 5 9-5" />
                    </svg>
                  </span>
                  <p className="eyebrow-sm text-gold-light">Diferencial competitivo</p>
                </div>
                <h3 className="font-serif text-2xl md:text-[1.65rem] leading-[1.25] mb-3 text-ivory">
                  Experiencia previa en <em className="font-light text-gold-light">compañías aseguradoras</em>.
                </h3>
                <p className="font-sans text-[13px] md:text-[14px] leading-relaxed text-ivory/90">
                  Mi trayectoria previa como apoderada de compañías aseguradoras me permite comprender sus circuitos de decisión, criterios económicos y tiempos internos. Aplico ese conocimiento para <strong className="text-ivory">facilitar</strong> negociaciones realistas, <strong className="text-ivory">ordenar</strong> el intercambio entre las partes y <strong className="text-ivory">agilizar</strong> el procedimiento, preservando siempre la imparcialidad, la confidencialidad y la buena fe propias de la función mediadora.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-2 border-t border-navy/10 grid grid-cols-3 gap-4">
              <div>
                <p className="font-serif text-3xl md:text-[2.5rem] text-gold-dark leading-none">15+</p>
                <p className="font-sans text-xs text-slate-700 mt-2 leading-snug">Años de ejercicio profesional</p>
              </div>
              <div>
                <p className="font-serif text-lg md:text-[1.3rem] text-gold-dark leading-tight">Dedicación exclusiva</p>
                <p className="font-sans text-xs text-slate-700 mt-2 leading-snug">A siniestros viales</p>
              </div>
              <div>
                <p className="font-serif text-2xl md:text-[1.75rem] text-gold-dark leading-none">1 día hábil</p>
                <p className="font-sans text-xs text-slate-700 mt-2 leading-snug">Plazo habitual de respuesta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
