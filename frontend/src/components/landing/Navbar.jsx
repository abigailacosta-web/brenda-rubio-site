import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-ivory/90 backdrop-blur-md border-b border-navy/10" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <a href="#top" onClick={scrollTo("top")} data-testid="nav-brand" className="flex items-center gap-3 leading-none">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-navy text-gold font-serif text-lg tracking-tight">R</span>
          <span className="flex flex-col">
            <span className="font-serif text-lg md:text-xl tracking-tight text-navy">Dra. Brenda M. Rubio</span>
            <span className="eyebrow mt-0.5 text-[9px]">Abogada UBA · Mediadora Judicial</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm text-navy">
          <a href="#sobre-mi" onClick={scrollTo("sobre-mi")} className="hover:text-gold transition-colors">Sobre mí</a>
          <a href="#servicios" onClick={scrollTo("servicios")} className="hover:text-gold transition-colors">Servicios</a>
          <a href="#proceso" onClick={scrollTo("proceso")} className="hover:text-gold transition-colors">Proceso</a>
          <a href="#contacto" onClick={scrollTo("contacto")} className="hover:text-gold transition-colors">Contacto</a>
        </nav>
        <a
          href="#contacto"
          onClick={scrollTo("contacto")}
          data-testid="nav-cta"
          className="hidden md:inline-flex items-center gap-2 bg-gold text-navy px-5 py-2.5 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md shadow-[0_8px_20px_-10px_rgba(200,164,100,0.7)] hover:bg-gold-dark hover:text-white hover:-translate-y-0.5 transition-all duration-300"
        >
          Consultar disponibilidad
        </a>
      </div>
    </header>
  );
}
