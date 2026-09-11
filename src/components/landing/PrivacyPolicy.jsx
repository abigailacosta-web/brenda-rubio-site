import React, { useEffect } from "react";
import { X } from "lucide-react";
import { CONTACT } from "@/config/contact";

export default function PrivacyPolicy({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      data-testid="privacy-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center px-4 py-6 md:p-8 bg-navy-deep/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-ivory rounded-2xl shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] max-h-[92vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-navy/10 bg-navy text-ivory">
          <h2 id="privacy-title" className="font-serif text-xl md:text-2xl text-ivory">Política de Privacidad</h2>
          <button
            type="button"
            onClick={onClose}
            data-testid="privacy-close"
            aria-label="Cerrar Política de Privacidad"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 md:px-8 py-6 overflow-y-auto space-y-5 font-sans text-[14px] leading-relaxed text-slate-700">
          <p>
            El presente aviso describe el tratamiento de los datos personales aportados voluntariamente a través del formulario de consulta y de los canales de contacto directos publicados en este sitio.
          </p>
          <div>
            <h3 className="font-serif text-lg text-navy mb-2">Responsable del tratamiento</h3>
            <p>{CONTACT.fullName} — {CONTACT.matricula}. Domicilio constituido: {CONTACT.address}, {CONTACT.addressCity}. Correo: {CONTACT.email}.</p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-navy mb-2">Finalidad</h3>
            <p>
              Los datos personales serán utilizados exclusivamente para gestionar y responder la consulta profesional recibida, coordinar la disponibilidad de fechas de mediación y comunicarnos con el consultante en relación al trámite planteado.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-navy mb-2">Alcance</h3>
            <p>
              No se incorporarán los datos a comunicaciones promocionales sin autorización expresa. La información recibida no será cedida a terceros ajenos al procedimiento, salvo obligación legal o requerimiento judicial.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-navy mb-2">Conservación</h3>
            <p>
              Los datos se conservarán por el plazo necesario para atender la consulta y cumplir con las obligaciones profesionales derivadas del ejercicio de la mediación conforme a la normativa vigente.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-navy mb-2">Derechos del titular</h3>
            <p>
              El titular podrá ejercer los derechos de acceso, rectificación, actualización o supresión de sus datos personales conforme a la Ley N° 25.326 de Protección de Datos Personales, escribiendo a {CONTACT.email}.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg text-navy mb-2">Recomendación</h3>
            <p>
              Se recomienda no incluir en el primer contacto documentación médica, imágenes o información personal sensible. Estos elementos se coordinarán en una etapa posterior mediante un canal seguro.
            </p>
          </div>
        </div>
        <div className="px-6 md:px-8 py-4 border-t border-navy/10 bg-cloud">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 bg-navy text-ivory px-6 py-2.5 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md hover:bg-navy-mid transition-all"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
