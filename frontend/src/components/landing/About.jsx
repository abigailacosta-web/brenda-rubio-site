import React from "react";
import { Award, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-mi" data-testid="about-section" className="py-24 md:py-40 bg-ivory">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 lg:gap-24 items-start">
          {/* Left column — Title + accreditation badges */}
          <aside className="md:col-span-5 md:sticky md:top-28">
            <div className="flex items-center gap-4 mb-10">
              <span className="block w-14 h-[2px] bg-gold" />
              <span className="font-sans uppercase text-xs md:text-[13px] tracking-[0.28em] text-navy font-semibold">
                Sobre mí
              </span>
            </div>
            <h2
              data-testid="about-title"
              className="font-serif font-medium text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-navy"
            >
              Rigor legal, agilidad <span className="italic font-light text-gold-dark">operativa</span>.
            </h2>

            {/* Accreditation badges — vertical minimalist list */}
            <div
              data-testid="about-credentials"
              className="mt-12 space-y-4"
            >
              <div className="flex items-start gap-4 pb-5 border-b border-navy/10">
                <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/[0.04] border border-navy/10 text-navy flex-shrink-0">
                  <Award className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <p className="eyebrow text-[9px] mb-1">Formación & habilitación</p>
                  <p className="font-serif text-lg md:text-xl leading-snug text-navy">
                    Universidad de Buenos Aires (UBA)
                    <span className="text-slate-500 font-sans text-sm md:text-base"> · Mat. MJyDH N° 5050/2020</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/[0.04] border border-navy/10 text-navy flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" strokeWidth={1.5} />
                </span>
                <div className="flex-1">
                  <p className="eyebrow text-[9px] mb-1">Especialidad</p>
                  <p className="font-serif text-lg md:text-xl leading-snug text-navy">
                    Mediación en Accidentes de Tránsito
                    <span className="text-slate-500 font-sans text-sm md:text-base"> · Ley N° 26.589</span>
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Right column — Narrative */}
          <div className="md:col-span-7 space-y-6 font-sans text-base md:text-lg leading-relaxed text-slate-700">
            <p className="font-serif text-2xl md:text-[1.6rem] leading-[1.4] text-navy italic font-light">
              "Soy <em className="not-italic font-medium">Brenda Mayra Rubio</em>, abogada graduada de la Universidad de Buenos Aires (UBA) y Mediadora Judicial habilitada bajo la Ley Nº 26.589. Me especializo en la gestión y resolución de conflictos derivados de accidentes de tránsito, brindando un servicio caracterizado por el rigor legal, la celeridad operativa y la confidencialidad absoluta."
            </p>
            <p>
              Mi práctica se dedica de manera exclusiva a la mediación prejudicial y privada en <em className="text-navy">reclamos por siniestros viales</em> en la Ciudad Autónoma de Buenos Aires: lesiones, daños materiales y perjuicios civiles y comerciales derivados del hecho. Trabajo con estudios jurídicos y colegas litigantes de todo el país que necesitan fijar o sortear mediaciones en la jurisdicción CABA. Todas las audiencias se celebran <strong className="text-navy">100% virtuales por Zoom</strong>, con firma digital habilitada.
            </p>

            {/* Diferencial destacado */}
            <div
              data-testid="differential-callout"
              className="relative bg-navy text-ivory rounded-2xl p-7 md:p-9 my-2 shadow-[0_20px_50px_-25px_rgba(15,42,71,0.5)] overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-8 font-serif text-[13rem] leading-none text-gold/10 select-none pointer-events-none"
              >
                ★
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gold text-navy">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2L3 7l9 5 9-5-9-5z" />
                      <path d="M3 12l9 5 9-5" />
                      <path d="M3 17l9 5 9-5" />
                    </svg>
                  </span>
                  <p className="eyebrow text-gold">Diferencial competitivo</p>
                </div>
                <p className="font-serif text-2xl md:text-[1.75rem] leading-[1.25] mb-4 text-ivory">
                  Ex apoderada de <em className="font-light text-gold">compañías aseguradoras</em>.
                </p>
                <p className="font-sans text-sm md:text-[15px] leading-relaxed text-ivory/85">
                  Mi trayectoria previa como apoderada de aseguradoras me otorgó una comprensión profunda de la <strong className="text-ivory">lógica aseguradora</strong>, los <strong className="text-ivory">criterios económicos</strong> y los <strong className="text-ivory">tiempos internos</strong> de las compañías. Esa experiencia hoy la traslado a cada audiencia: propongo negociaciones realistas, acelero los acuerdos y destrabo expedientes que llevan meses sin avanzar.
                </p>
              </div>
            </div>

            <div className="pt-8 mt-2 border-t border-navy/10 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold-dark leading-none">15+</p>
                <p className="font-sans text-xs text-slate-500 mt-2 leading-snug">Años de ejercicio profesional</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold-dark leading-none">100%</p>
                <p className="font-sans text-xs text-slate-500 mt-2 leading-snug">Especialización en siniestros viales</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold-dark leading-none">24h</p>
                <p className="font-sans text-xs text-slate-500 mt-2 leading-snug">Respuesta institucional promedio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
