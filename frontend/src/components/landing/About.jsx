import React from "react";

export default function About() {
  return (
    <section id="sobre-mi" data-testid="about-section" className="py-24 md:py-40 bg-ivory">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="divider-gold" />
              <span className="overline">Sobre la mediadora</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-navy">
              Rigurosidad legal, <em className="font-light text-gold-dark">agilidad operativa</em>.
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
                <p className="overline text-[9px] mb-2">Registro</p>
                <p className="font-serif text-lg text-navy leading-tight">Conciliadores Ley 26.993</p>
              </div>
              <div className="bg-cloud rounded-xl p-5 border border-navy/5">
                <p className="overline text-[9px] mb-2">Marco legal</p>
                <p className="font-serif text-lg text-navy leading-tight">Leyes 26.589 · 26.993</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 font-sans text-base md:text-lg leading-relaxed text-slate-700">
            <p className="text-navy">
              <span className="font-serif float-left text-7xl md:text-8xl leading-[0.8] mr-3 mt-1 text-gold-dark">B</span>
              renda Mayra Rubio es abogada graduada de la <em className="text-navy">Universidad de Buenos Aires (UBA)</em>, Mediadora Judicial habilitada por el Ministerio de Justicia y Derechos Humanos de la Nación, y Conciliadora certificada en el Registro Nacional de Conciliadores en Relaciones de Consumo bajo la Ley N° 26.993 (Ministerio de Economía / Secretaría de Comercio · Defensa del Consumidor).
            </p>
            <p>
              Su práctica se concentra en la mediación prejudicial obligatoria y privada, la conciliación en relaciones de consumo y la gestión de reclamos por accidentes de tránsito y daños y perjuicios civiles y comerciales. Trabaja con estudios jurídicos de todo el país que requieren fijar o sortear mediaciones en la jurisdicción de CABA, además de asistir a particulares y empresas.
            </p>
            <p>
              Cada expediente se gestiona bajo tres principios rectores:
              <strong className="text-navy"> ética profesional</strong>,
              <strong className="text-navy"> confidencialidad absoluta</strong> y
              <strong className="text-navy"> agilidad</strong> en la resolución de conflictos.
              Las audiencias pueden celebrarse de forma presencial o virtual por Zoom, con firma digital habilitada.
            </p>

            <div className="pt-8 mt-8 border-t border-navy/10 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold-dark leading-none">15+</p>
                <p className="font-sans text-xs text-slate-500 mt-2 leading-snug">Años de ejercicio profesional</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-gold-dark leading-none">100%</p>
                <p className="font-sans text-xs text-slate-500 mt-2 leading-snug">Trámites gestionados en CABA</p>
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
