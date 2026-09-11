import React from "react";
import { CONTACT, waLink } from "@/config/contact";
import { ArrowUp } from "lucide-react";

export default function Footer({ onOpenPrivacy }) {
  const year = new Date().getFullYear();

  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="bg-navy-deep text-ivory pt-16 md:pt-20 pb-8 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-20 w-[420px] h-[420px] rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A464 0%, transparent 65%)" }}
      />
      <div className="relative container-narrow">
        <div className="flex items-start justify-between flex-wrap gap-6">
          <div>
            <h2 className="font-serif text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[6.5rem] leading-[0.9] tracking-tight text-ivory">
              Dra. Brenda M. <em className="font-light text-gold-light">Rubio</em>.
            </h2>
            <p className="eyebrow-sm mt-3 text-ivory/70">
              Abogada UBA · Mediadora prejudicial matriculada · {CONTACT.matricula}
            </p>
            <p className="mt-1 font-sans text-sm text-ivory/70">Jurisdicción {CONTACT.jurisdiction}</p>
          </div>
          <div className="hidden md:flex flex-col items-end">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gold-dark text-white font-serif text-2xl">R</span>
          </div>
        </div>

        <div className="mt-12 md:mt-14 grid md:grid-cols-12 gap-8 md:gap-10 border-t border-ivory/15 pt-10">
          <div className="md:col-span-4">
            <p className="eyebrow-sm text-gold-light mb-3">Contacto</p>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <a href={`mailto:${CONTACT.email}`} data-testid="footer-email" className="hover:text-gold-light transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="hover:text-gold-light transition-colors"
                >
                  WhatsApp · {CONTACT.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow-sm text-gold-light mb-3">Domicilio constituido · CABA</p>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>{CONTACT.address}</li>
              <li>{CONTACT.addressCity}</li>
              <li className="text-ivory/70 text-xs mt-2">
                Modalidad: audiencias {CONTACT.modality}.
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow-sm text-gold-light mb-3">Enlaces</p>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <button type="button" onClick={onOpenPrivacy} data-testid="footer-privacy" className="hover:text-gold-light transition-colors">
                  Política de Privacidad
                </button>
              </li>
              <li>
                <a href="#contacto" data-testid="footer-contact" className="hover:text-gold-light transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp-2"
                  className="hover:text-gold-light transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <button type="button" onClick={toTop} data-testid="footer-top" className="inline-flex items-center gap-1.5 hover:text-gold-light transition-colors">
                  Volver arriba
                  <ArrowUp className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-ivory/15">
          <p className="font-sans text-[12px] leading-relaxed text-ivory/70 max-w-4xl">
            La información publicada es de carácter general y no sustituye el asesoramiento jurídico particular. La mediadora actúa con imparcialidad y no representa a ninguna de las partes dentro del procedimiento.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-ivory/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-sans text-[11.5px] text-ivory/70">
          <p>© {year} Dra. Brenda Mayra Rubio. Todos los derechos reservados.</p>
          <p className="md:text-right">Estudio profesional independiente · Servicios de mediación conforme a la normativa vigente.</p>
        </div>
      </div>
    </footer>
  );
}
