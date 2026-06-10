import React from "react";

export default function About() {
  return (
    <section id="sobre-mi" data-testid="about-section" className="py-24 md:py-40">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-12 h-px bg-anthracite" />
              <span className="overline">Sobre mí</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              Dra.<br />Brenda M.<br /><em className="font-light">Rubio</em>.
            </h2>
            <p className="overline mt-6 text-[10px]">Mat. M.J. y D.H. N° 5050/2020</p>
          </div>

          <div className="md:col-span-8 space-y-6 font-sans text-base md:text-lg leading-relaxed text-anthracite-soft">
            <p className="text-anthracite">
              <span className="font-serif float-left text-7xl md:text-8xl leading-[0.8] mr-3 mt-1">M</span>
              ediadora Prejudicial Oficial habilitada por el Ministerio de Justicia y Derechos Humanos de la Nación, con ejercicio independiente y un enfoque dinámico orientado a resultados concretos. Mi práctica está dedicada de manera exclusiva a la mediación en <em className="text-anthracite">accidentes de tránsito</em> en el ámbito de CABA y procesos de Nación.
            </p>
            <p>
              Mi trayectoria previa como apoderada de compañías de seguros me dio una comprensión profunda de los criterios económicos, los tiempos internos y la lógica de las aseguradoras. Esa experiencia hoy se traduce en negociaciones más ágiles, ofertas realistas y acuerdos que destraban casos que llevaban meses estancados.
            </p>
            <p>
              Trabajo bajo el marco estricto de la <em>Ley 26.589</em>, con rigurosidad legal, firma digital habilitada y plataforma Zoom para cada audiencia. El objetivo es claro: que el colega que confía un expediente reciba un servicio impecable, formal, veloz y completamente operado en formato digital.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-anthracite/15 mt-10">
              <div>
                <p className="overline text-[10px] mb-2">Jurisdicción</p>
                <p className="font-serif text-2xl text-anthracite">CABA & Nación</p>
              </div>
              <div>
                <p className="overline text-[10px] mb-2">Marco legal</p>
                <p className="font-serif text-2xl text-anthracite">Ley 26.589</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
