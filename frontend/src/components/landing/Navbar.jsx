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
        scrolled ? "bg-cream/90 backdrop-blur-md border-b border-anthracite/15" : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between h-16 md:h-20">
        <a href="#top" onClick={scrollTo("top")} data-testid="nav-brand" className="flex flex-col leading-none">
          <span className="font-serif text-lg md:text-xl tracking-tight">Dra. Brenda M. Rubio</span>
          <span className="overline mt-0.5 text-[10px]">Mediadora Prejudicial · Ley 26.589</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm">
          <a href="#valor" onClick={scrollTo("valor")} className="hover:opacity-60 transition-opacity">Servicio</a>
          <a href="#sobre-mi" onClick={scrollTo("sobre-mi")} className="hover:opacity-60 transition-opacity">Sobre mí</a>
          <a href="#proceso" onClick={scrollTo("proceso")} className="hover:opacity-60 transition-opacity">Proceso</a>
          <a href="#documentacion" onClick={scrollTo("documentacion")} className="hover:opacity-60 transition-opacity">Documentación</a>
        </nav>
        <a
          href="#contacto"
          onClick={scrollTo("contacto")}
          data-testid="nav-cta"
          className="hidden md:inline-flex items-center gap-2 bg-anthracite text-cream px-5 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-anthracite-light transition-colors"
        >
          Solicitar audiencia
        </a>
      </div>
    </header>
  );
}
