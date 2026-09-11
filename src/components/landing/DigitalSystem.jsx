import React from "react";
import {
  FileSignature, ExternalLink, BookOpen, LifeBuoy,
  ShieldCheck, MonitorSmartphone, Lock, CheckCircle2, Mail
} from "lucide-react";

export default function DigitalSystem() {
  const scrollToResources = (e) => {
    e.preventDefault();
    document.getElementById("sigim-recursos")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="sigim"
      data-testid="digital-section"
      className="relative py-20 md:py-28 bg-cloud overflow-hidden border-y border-navy/5"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,42,71,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,42,71,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[520px] h-[520px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A464 0%, transparent 65%)" }}
      />

      <div className="relative container-narrow">
        {/* Top block */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start mb-14 md:mb-16">
          <div className="md:col-span-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="divider-gold" />
              <span className="eyebrow text-navy">Sistema SIGIM</span>
            </div>
            <h2
              data-testid="digital-title"
              className="font-serif font-medium text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.05] tracking-tight text-navy"
            >
              ¿Qué es el nuevo sistema <em className="font-light text-gold-dark">SIGIM</em>?
            </h2>
            <div className="mt-6 space-y-4 font-sans text-[15px] leading-relaxed text-slate-700 max-w-[65ch]">
              <p>
                Desde el <strong className="text-navy">29 de junio de 2026</strong> se encuentra vigente el Sistema Informatizado de Gestión Integral de la Mediación Prejudicial Obligatoria (SIGIM), aprobado por la <strong className="text-navy">Resolución MJ N° 277/2026</strong>.
              </p>
              <p>
                El SIGIM es la plataforma oficial para la gestión digital del procedimiento de mediación prejudicial obligatoria e integra el sistema MEPRE.
              </p>
              <p>
                El Portal de Mediación permite a las personas intervinientes acceder a las actas y completar las firmas correspondientes. Su implementación concentra en un mismo entorno distintas etapas del procedimiento, favoreciendo una gestión más ordenada e integrada.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="https://mediacion.jus.gob.ar/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="sigim-portal-btn"
                className="inline-flex items-center gap-2.5 bg-navy text-ivory px-6 py-3.5 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md shadow-[0_14px_30px_-14px_rgba(15,42,71,0.6)] hover:bg-navy-mid hover:-translate-y-0.5 transition-all duration-300"
              >
                Acceder al Portal SIGIM
                <ExternalLink className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a
                href="#sigim-recursos"
                onClick={scrollToResources}
                data-testid="sigim-resources-btn"
                className="inline-flex items-center gap-2.5 border border-navy/30 text-navy px-6 py-3.5 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md bg-white/70 hover:bg-navy hover:text-ivory hover:border-navy transition-all duration-300"
              >
                Instructivos y normativa
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                { icon: ShieldCheck, label: "SIGIM / MEPRE" },
                { icon: MonitorSmartphone, label: "Audiencias presenciales y a distancia" },
                { icon: Lock, label: "Firma habilitada en SIGIM" },
                { icon: CheckCircle2, label: "Trazabilidad del procedimiento" },
              ].map((chip) => {
                const Icon = chip.icon;
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-2 bg-white border border-navy/10 rounded-full px-3 py-1.5 text-[11.5px] font-sans font-medium text-navy shadow-[0_2px_10px_-6px_rgba(15,42,71,0.15)]"
                  >
                    <Icon className="w-3.5 h-3.5 text-gold-dark" strokeWidth={1.75} />
                    {chip.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Illustrative mock */}
          <div className="md:col-span-6">
            <div className="relative">
              <div aria-hidden="true" className="absolute -top-8 -right-6 w-40 h-40 rounded-full bg-gold/20 blur-2xl" />
              <p className="mb-2 text-[10px] uppercase tracking-[0.22em] font-semibold text-slate-700">
                Representación ilustrativa · Infografía conceptual
              </p>
              <div
                data-testid="digital-mock"
                className="relative bg-navy rounded-2xl shadow-[0_40px_80px_-30px_rgba(15,42,71,0.55)] overflow-hidden border border-navy/20"
                role="img"
                aria-label="Infografía conceptual del flujo de gestión digital en SIGIM"
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-navy-deep">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-ivory/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-ivory/30" />
                  <div className="flex-1 mx-4 h-6 rounded-md bg-white/[0.08] flex items-center px-3">
                    <span className="text-[10px] font-mono text-ivory/50 tracking-wider">portal-mediacion / expediente</span>
                  </div>
                </div>
                <div className="p-5 md:p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-gold-dark text-white">
                      <FileSignature className="w-5 h-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold-light">SIGIM · MEPRE</p>
                      <p className="font-serif text-base text-ivory leading-tight">Expediente ilustrativo</p>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: "Carga inicial", state: "Completa", pct: 100 },
                      { label: "Notificaciones", state: "En curso", pct: 68 },
                      { label: "Audiencia", state: "Programada", pct: 40 },
                      { label: "Firma del acta", state: "Pendiente", pct: 12 },
                    ].map((row) => (
                      <div key={row.label} className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-sans text-[11.5px] text-ivory/90">{row.label}</span>
                          <span className="font-sans text-[10px] uppercase tracking-wider text-gold-light">{row.state}</span>
                        </div>
                        <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-gold-dark to-gold-light" style={{ width: `${row.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <p className="font-sans text-[11px] text-ivory/70">Firma habilitada en SIGIM</p>
                    <span className="inline-flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-wider text-gold-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-light" />
                      Trazable
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instructivos y normativa + Ayuda y soporte */}
        <div id="sigim-recursos" data-testid="sigim-resources" className="scroll-mt-24 grid md:grid-cols-2 gap-4 md:gap-5">
          <div className="bg-white border border-navy/10 rounded-2xl p-6 md:p-7 shadow-[0_4px_20px_-12px_rgba(15,42,71,0.15)]">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/[0.05] text-navy">
                <BookOpen className="w-5 h-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-serif text-xl md:text-2xl leading-tight text-navy">Instructivos y normativa oficial</h3>
            </div>
            <ul className="divide-y divide-navy/10">
              {[
                {
                  eyebrow: "Manual oficial",
                  title: "Manual de uso del SIGIM",
                  href: "https://www.saij.gob.ar/docs-f/manual-sigim.pdf",
                  testid: "link-manual-sigim",
                },
                {
                  eyebrow: "Guía de onboarding",
                  title: "Guía para registrarse en el Portal de Mediación",
                  href: "https://www.cpacf.org.ar/public/uploads/files/com/29062610_Instructivo%20Proceso%20de%20onboarding%20-%20Ministerio%20de%20Justicia_c.pdf",
                  testid: "link-guia-registro",
                },
                {
                  eyebrow: "Consultas frecuentes",
                  title: "Preguntas frecuentes sobre SIGIM",
                  href: "https://www.argentina.gob.ar/sites/default/files/2018/07/preguntas_frecuentes_sigim_v1.pdf",
                  testid: "link-faq-sigim",
                },
                {
                  eyebrow: "Norma vigente",
                  title: "Resolución MJ N° 277/2026",
                  href: "https://www.argentina.gob.ar/normativa/nacional/norma-427062/texto",
                  testid: "link-resolucion",
                },
              ].map((item) => (
                <li key={item.testid}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={item.testid}
                    className="flex items-center justify-between gap-4 py-3.5 group"
                  >
                    <span className="flex items-start gap-3 min-w-0">
                      <BookOpen className="w-4 h-4 mt-1 text-gold-dark flex-shrink-0" strokeWidth={1.75} aria-hidden="true" />
                      <span className="min-w-0">
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-slate-700 block mb-0.5">{item.eyebrow}</span>
                        <span className="font-serif text-[16px] md:text-[17px] text-navy group-hover:text-gold-dark transition-colors block">{item.title}</span>
                      </span>
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-700 group-hover:text-gold-dark transition-colors flex-shrink-0" strokeWidth={1.75} aria-label="Recurso externo oficial (abre en pestaña nueva)" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 pt-4 border-t border-navy/10 font-sans text-[11.5px] leading-relaxed text-slate-700">
              Los documentos enlazados pertenecen a sus respectivos organismos oficiales y pueden ser actualizados por las autoridades competentes.
            </p>
          </div>

          <div className="bg-white border border-navy/10 rounded-2xl p-6 md:p-7 shadow-[0_4px_20px_-12px_rgba(15,42,71,0.15)]">
            <div className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-navy/[0.05] text-navy">
                <LifeBuoy className="w-5 h-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-serif text-xl md:text-2xl leading-tight text-navy">Ayuda y soporte</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="font-sans text-[13px] leading-snug text-slate-700 mb-1">
                  Consultas relacionadas con una mediación concreta:
                </p>
                <a
                  href="mailto:mesadeayudasigim@jus.gov.ar"
                  data-testid="mail-mesa-ayuda"
                  className="inline-flex items-center gap-2 font-serif text-[15px] md:text-[16px] text-navy hover:text-gold-dark transition-colors break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.75} />
                  mesadeayudasigim@jus.gov.ar
                </a>
              </li>
              <li className="pt-3 border-t border-navy/10">
                <p className="font-sans text-[13px] leading-snug text-slate-700 mb-1">
                  Problemas técnicos para ingresar al sistema:
                </p>
                <a
                  href="mailto:soporte@miaid.me"
                  data-testid="mail-soporte"
                  className="inline-flex items-center gap-2 font-serif text-[15px] md:text-[16px] text-navy hover:text-gold-dark transition-colors break-all"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" strokeWidth={1.75} />
                  soporte@miaid.me
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
