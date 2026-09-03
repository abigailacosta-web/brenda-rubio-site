import React from "react";

export default function About() {
  return (
    <section id="sobre-mi" data-testid="about-section" className="py-24 md:py-40 bg-ivory">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="divider-gold" />
              <span className="overline">Sobre mí</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-navy">
              Rigor legal, <em className="font-light text-gold-dark">agilidad operativa</em>.
            </h2>
            <p className="overline mt-8 text-[10px] text-slate-500">Mat. MJyDH N° 5050/2020 · DNI 25.283.770</p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-cloud rounded-xl p-5 border border-navy/5">
                <p className="overline text-[9px] mb-2">Formación</p>
                <p className="font-serif text-lg text-navy leading-tight">Universidad de Buenos Aires</p>
              </div>
              <div className="bg-cloud rounded-xl p-5 border border-navy/5">
                <p className="overline text-[9px] mb-2">Acreditación</p>
                <p className="font-serif text-lg text-navy leading-tight">Ministerio de Justicia y DH</p>
              </div>
              <div className="bg-cloud rounded-xl p-5 border border-navy/5">
                <p className="overline text-[9px] mb-2">Marco legal</p>
                <p className="font-serif text-lg text-navy leading-tight">Ley Nacional N° 26.589</p>
              </div>
              <div className="bg-cloud rounded-xl p-5 border border-navy/5">
                <p className="overline text-[9px] mb-2">Especialidad</p>
                <p className="font-serif text-lg text-navy leading-tight">Accidentes de tránsito</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 font-sans text-base md:text-lg leading-relaxed text-slate-700">
            <p className="text-navy">
              <span className="font-serif float-left text-7xl md:text-8xl leading-[0.8] mr-3 mt-1 text-gold-dark">S</span>
              oy <em className="text-navy">Brenda Mayra Rubio</em>, abogada graduada de la Universidad de Buenos Aires (UBA) y Mediadora Judicial habilitada bajo la Ley Nº 26.589. Me especializo en la gestión y resolución de conflictos derivados de accidentes de tránsito, brindando un servicio caracterizado por el rigor legal, la celeridad operativa y la confidencialidad absoluta.
            </p>
            <p>
              Mi práctica se dedica de manera exclusiva a la mediación prejudicial y privada en <em className="text-navy">reclamos por siniestros viales</em> en la Ciudad Autónoma de Buenos Aires: lesiones, daños materiales y perjuicios civiles y comerciales derivados del hecho. Trabajo con estudios jurídicos y colegas litigantes de todo el país que necesitan fijar o sortear mediaciones en la jurisdicción CABA.
            </p>
            <p>
              Mi trayectoria previa como apoderada de compañías de seguros me otorgó una comprensión profunda de la lógica aseguradora, los criterios económicos y los tiempos internos de las compañías. Esa experiencia hoy la traslado a cada audiencia: propongo negociaciones realistas, acelero los acuerdos y destrabo expedientes que llevan meses sin avanzar.
            </p>

            <div className="pt-8 mt-8 border-t border-navy/10 grid grid-cols-3 gap-6">
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
