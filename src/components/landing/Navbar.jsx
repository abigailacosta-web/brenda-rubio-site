import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Proceso" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || open ? "bg-ivory/95 backdrop-blur-md border-b border-navy/10" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-[76px]">
        <a href="#top" onClick={go("top")} data-testid="nav-brand" className="flex items-center gap-3 leading-none min-w-0">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-navy text-gold font-serif text-lg tracking-tight flex-shrink-0">R</span>
          <span className="flex flex-col min-w-0">
            <span className="font-serif text-base md:text-lg tracking-tight text-navy truncate">Dra. Brenda M. Rubio</span>
            <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-slate-700 font-medium truncate">
              Abogada UBA · Mediadora prejudicial matriculada
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-2.5 font-sans text-navy">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id)}
              data-testid={`nav-link-${l.id}`}
              className="inline-flex items-center border border-navy/15 bg-white/80 rounded-md px-4 py-2 text-[13px] font-medium shadow-[0_2px_10px_-6px_rgba(15,42,71,0.2)] hover:bg-navy hover:text-ivory hover:border-navy hover:-translate-y-0.5 transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          onClick={go("contacto")}
          data-testid="nav-cta"
          className="hidden lg:inline-flex items-center gap-2 bg-gold-dark text-white px-4 xl:px-5 py-2.5 text-[10px] xl:text-[11px] uppercase font-semibold tracking-[0.18em] rounded-md shadow-[0_8px_20px_-10px_rgba(168,136,73,0.75)] hover:bg-navy hover:text-ivory hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
        >
          Consultar disponibilidad
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-navy hover:bg-navy/5 transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        data-testid="nav-mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-navy/10 bg-ivory ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-narrow py-4">
          <nav className="flex flex-col gap-2 font-sans">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={go(l.id)}
                data-testid={`nav-mobile-link-${l.id}`}
                className="py-3 px-4 text-navy text-[15px] font-medium border border-navy/15 rounded-md bg-white hover:bg-navy hover:text-ivory hover:border-navy transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={go("contacto")}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-gold-dark text-white px-5 py-3.5 text-[11px] uppercase font-semibold tracking-[0.18em] rounded-md"
            >
              Consultar disponibilidad
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
