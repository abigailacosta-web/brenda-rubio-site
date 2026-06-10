import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="footer" className="bg-anthracite text-cream pt-20 md:pt-28 pb-10">
      <div className="container-narrow">
        {/* Massive name */}
        <h2 className="font-serif text-[2.75rem] sm:text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] tracking-tight">
          Dra. Brenda M. <em className="font-light text-cream/70">Rubio</em>.
        </h2>
        <p className="overline mt-4 text-cream/60">Mediadora Prejudicial Oficial · Mat. M.J. y D.H. N° 5050/2020</p>

        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-12 border-t border-cream/15 pt-12">
          <div className="md:col-span-4">
            <p className="overline text-[10px] mb-3 text-cream/60">Contacto</p>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="tel:+541156392309" data-testid="footer-phone" className="hover:opacity-70 transition-opacity">
                  +54 9 11 5639-2309
                </a>
              </li>
              <li>
                <a
                  href="mailto:brendamrubio@gmail.com"
                  data-testid="footer-email"
                  className="hover:opacity-70 transition-opacity"
                >
                  brendamrubio@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491156392309"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="hover:opacity-70 transition-opacity"
                >
                  WhatsApp · 11 5639-2309
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="overline text-[10px] mb-3 text-cream/60">Domicilio constituido · CABA</p>
            <ul className="space-y-3 font-sans text-sm">
              <li>Paraná 426, Piso 15° "K"</li>
              <li>Ciudad Autónoma de Buenos Aires</li>
              <li>
                <a href="tel:+541143746820" data-testid="footer-landline" className="hover:opacity-70 transition-opacity">
                  Tel. fijo: (011) 4374-6820
                </a>
              </li>
              <li className="text-cream/60 text-xs mt-3">Audiencias 100% virtuales por Zoom.</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="overline text-[10px] mb-3 text-cream/60">Marco jurídico</p>
            <ul className="space-y-3 font-sans text-sm">
              <li>Ley Nacional 26.589 de Mediación</li>
              <li>Jurisdicción: CABA y Nación</li>
              <li>Especialidad: Accidentes de tránsito</li>
              <li>Firma digital de actas oficiales</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans text-xs text-cream/60">
          <p>© {year} Dra. Brenda M. Rubio. Todos los derechos reservados.</p>
          <p className="md:text-right">
            Estudio independiente · Mediación prejudicial oficial · Servicio dirigido exclusivamente a abogados litigantes.
          </p>
        </div>
      </div>
    </footer>
  );
}
