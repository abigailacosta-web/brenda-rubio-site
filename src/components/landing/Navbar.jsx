import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { CONTACT } from "@/config/contact";

const links = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Proceso" },
  { id: "contacto", label: "Contacto" },
];

const linkBase =
  "inline-flex items-center justify-center uppercase font-semibold tracking-[0.16em] rounded-md border transition-all duration-300";
const linkIdle =
  "border-gold-dark/70 bg-gold-pale text-navy shadow-[0_6px_16px_-10px_rgba(168,136,73,0.7)] hover:bg-gold hover:text-navy hover:border-gold-dark";
const linkActive = "border-gold-dark bg-gold-dark text-white shadow-[0_8px_20px_-10px_rgba(168,136,73,0.9)]";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean);
    const onScroll = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const s of sections) if (s.offsetTop <= marker) current = s.id;
      setActive(current);
    };
    onScroll();
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
      <div className="container-narrow flex items-center justify-between gap-4 h-16 md:h-[76px]">
        <a href="#top" onClick={go("top")} data-testid="nav-brand" className="flex items-center gap-3 min-w-0" aria-label="Brenda Rubio, mediadora — ir al inicio">
          <img
            src={CONTACT.logoMark}
            alt="Logo BR — Brenda Rubio"
            data-testid="nav-logo"
            className="h-10 md:h-12 w-auto flex-shrink-0 select-none"
            draggable="false"
          />
          <span className="flex flex-col min-w-0 leading-none">
            <span className="font-sans text-[11px] md:text-[12px] uppercase tracking-[0.24em] font-semibold text-navy truncate">Brenda Rubio</span>
            <span className="mt-1 font-serif text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-slate-700 truncate">Mediadora</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-3 font-sans" aria-label="Navegación principal">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={go(l.id)}
              data-testid={`nav-link-${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              className={`${linkBase} ${active === l.id ? linkActive : linkIdle} px-5 py-2.5 text-[11px] hover:-translate-y-0.5`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          data-testid="nav-mobile-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-navy/15 bg-white/80 text-navy hover:bg-navy/5 transition-colors flex-shrink-0"
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
          <nav className="flex flex-col gap-2.5 font-sans" aria-label="Navegación móvil">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={go(l.id)}
                data-testid={`nav-mobile-link-${l.id}`}
                aria-current={active === l.id ? "true" : undefined}
                className={`${linkBase} ${active === l.id ? linkActive : linkIdle} py-3.5 px-4 text-[12px]`}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
