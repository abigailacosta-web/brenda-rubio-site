import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer data-testid="footer" className="bg-navy-deep text-ivory pt-20 md:pt-28 pb-10 relative overflow-hidden">
      {/* Subtle accent */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-20 w-[420px] h-[420px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A464 0%, transparent 65%)" }}
      />
      <div className="relative container-narrow">
        {/* Massive name */}
        <div className="flex items-start justify-between flex-wrap gap-6">
          <div>
            <h2 className="font-serif text-[2.5rem] sm:text-5xl md:text-7xl lg:text-[8rem] leading-[0.9] tracking-tight text-ivory">
              Dra. Brenda M. <em className="font-light text-gold">Rubio</em>.
            </h2>
            <p className="overline mt-4 text-ivory/60 text-[10px]">Abogada UBA · Mediadora Judicial · Conciliadora Ley 26.993</p>
          </div>
          <div className="hidden md:flex flex-col items-end">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gold text-navy font-serif text-2xl">R</span>
          </div>
        </div>

        <div className="mt-16 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-12 border-t border-ivory/15 pt-12">
          <div className="md:col-span-4">
            <p className="overline text-[10px] mb-4 text-gold">Contacto</p>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a href="tel:+541143746820" data-testid="footer-landline" className="hover:text-gold transition-colors">
                  Tel. fijo: (011) 4374-6820
                </a>
              </li>
              <li>
                <a href="tel:+541156392309" data-testid="footer-phone" className="hover:text-gold transition-colors">
                  Móvil: +54 9 11 5639-2309
                </a>
              </li>
              <li>
                <a href="mailto:brendamrubio@gmail.com" data-testid="footer-email" className="hover:text-gold transition-colors">
                  brendamrubio@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5491156392309"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp · 11 5639-2309
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="overline text-[10px] mb-4 text-gold">Domicilio constituido · CABA</p>
            <ul className="space-y-3 font-sans text-sm">
              <li>Paraná 426, Piso 15° "K"</li>
              <li>Ciudad Autónoma de Buenos Aires</li>
              <li className="text-ivory/60 text-xs mt-3">
                Cobertura: Argentina · Audiencias presenciales en CABA o virtuales por Zoom.
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="overline text-[10px] mb-4 text-gold">Marco jurídico</p>
            <ul className="space-y-3 font-sans text-sm">
              <li>Ley Nacional 26.589 · Mediación</li>
              <li>Ley Nacional 26.993 · Consumo</li>
              <li>Registro Nacional de Conciliadores</li>
              <li>Ministerio de Justicia y DH</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans text-xs text-ivory/60">
          <p>© {year} Dra. Brenda Mayra Rubio. Todos los derechos reservados.</p>
          <p className="md:text-right">
            Estudio profesional independiente · Servicios de mediación y conciliación conforme normativa vigente.
          </p>
        </div>
      </div>
    </footer>
  );
}
