import React from "react";

export default function WhatsAppFloat() {
  const phone = "5491156392309"; // Argentina country + area
  const message = encodeURIComponent(
    "Hola Dra. Rubio, soy abogado/a y quisiera solicitar una mediación prejudicial por accidente de tránsito."
  );
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-float"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp/30 animate-ping group-hover:animate-none" />
      <span className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-whatsapp text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105">
        <svg viewBox="0 0 32 32" className="w-7 h-7 md:w-8 md:h-8" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.495-1.318.144-.343.144-.626.103-.715-.087-.13-.388-.218-.674-.346"
          />
          <path
            fill="currentColor"
            d="M16.04 4c-6.617 0-12 5.385-12 12.002 0 2.115.553 4.193 1.603 6.022L4 28l6.13-1.605a11.96 11.96 0 0 0 5.91 1.51c6.616 0 12-5.385 12-12.003 0-3.207-1.247-6.222-3.516-8.49A11.93 11.93 0 0 0 16.04 4m0 21.928a9.85 9.85 0 0 1-5.026-1.376l-.36-.213-3.643.954.972-3.55-.237-.376a9.94 9.94 0 0 1-1.524-5.367c0-5.484 4.461-9.946 9.945-9.946 2.656 0 5.155 1.034 7.034 2.916a9.85 9.85 0 0 1 2.91 7.035c0 5.485-4.462 9.945-9.945 9.945"
          />
        </svg>
      </span>
    </a>
  );
}
