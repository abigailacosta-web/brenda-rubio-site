import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2, Phone, Mail as MailIcon, MapPin } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const initial = {
  lawyer_name: "",
  matricula: "",
  email: "",
  phone: "",
  procedure_type: "Mediación Prejudicial · Accidente de Tránsito",
  insurance_company: "",
  description: "",
};

const procedureOptions = [
  "Mediación Prejudicial · Accidente de Tránsito",
  "Mediación Privada · Siniestro Vial",
  "Consulta de Abogado del Interior / CABA",
  "Otro",
];

const baseInput =
  "w-full bg-white border border-navy/15 rounded-md px-4 py-3 font-sans text-[15px] text-navy placeholder:text-slate-500/70 focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:border-navy focus-visible:outline-none transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.lawyer_name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.procedure_type.trim() ||
      form.description.trim().length < 10
    ) {
      toast.error("Por favor complete los campos requeridos. El mensaje debe tener al menos 10 caracteres.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/audience-requests`, form, {
        headers: { "Content-Type": "application/json" },
      });
      setSubmitted(true);
      setForm(initial);
      toast.success("Consulta enviada. La Dra. Rubio se pondrá en contacto a la brevedad.");
    } catch (err) {
      const msg = err?.response?.data?.detail || "No se pudo enviar la consulta. Intente nuevamente o escriba a brendamrubio@gmail.com";
      toast.error(typeof msg === "string" ? msg : "Error al enviar la consulta.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" data-testid="contact-section" className="bg-cloud py-24 md:py-40 border-y border-navy/5">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="divider-gold" />
              <span className="overline">Contacto directo</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.02] tracking-tight text-navy">
              Solicite su <em className="font-light text-gold-dark">audiencia</em> o realice su consulta.
            </h2>
            <p className="font-sans text-base leading-relaxed text-slate-700 mt-6 max-w-md">
              Complete el formulario o escríbame por WhatsApp. Le responderé personalmente con la propuesta de fecha, el canal de audiencia (presencial o Zoom) y el detalle del trámite.
            </p>

            <div className="mt-12 space-y-5">
              <a href="tel:+541143746820" data-testid="contact-phone-fixed" className="flex items-start gap-4 group">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-navy text-gold flex-shrink-0">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="overline text-[9px] mb-1">Teléfono fijo · Estudio</p>
                  <p className="font-serif text-xl md:text-2xl text-navy group-hover:text-gold-dark transition-colors">(011) 4374-6820</p>
                </div>
              </a>
              <a
                href="https://wa.me/5491156392309"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp"
                className="flex items-start gap-4 group"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-whatsapp text-white flex-shrink-0">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="overline text-[9px] mb-1">WhatsApp · Móvil</p>
                  <p className="font-serif text-xl md:text-2xl text-navy group-hover:text-gold-dark transition-colors">+54 9 11 5639-2309</p>
                </div>
              </a>
              <a href="mailto:brendamrubio@gmail.com" data-testid="contact-email" className="flex items-start gap-4 group">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-navy text-gold flex-shrink-0">
                  <MailIcon className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="overline text-[9px] mb-1">Email institucional</p>
                  <p className="font-serif text-xl md:text-2xl text-navy group-hover:text-gold-dark transition-colors">brendamrubio@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-navy text-gold flex-shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="overline text-[9px] mb-1">Domicilio constituido · CABA</p>
                  <p className="font-serif text-xl md:text-2xl text-navy leading-tight">Paraná 426, Piso 15° "K"</p>
                  <p className="font-sans text-sm text-slate-500 mt-1">Ciudad Autónoma de Buenos Aires · Cobertura: Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div
                data-testid="form-success"
                className="bg-white border border-navy/10 rounded-2xl p-10 md:p-14 shadow-[0_20px_50px_-25px_rgba(15,42,71,0.25)]"
              >
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-3 py-1 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                  <p className="overline text-[9px] text-gold-dark">Consulta recibida</p>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4 text-navy">Gracias. Recibí su consulta.</h3>
                <p className="font-sans text-base text-slate-700 leading-relaxed mb-8">
                  Le responderé personalmente a la brevedad por el medio que indicó, con la propuesta de audiencia y el detalle del trámite correspondiente.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  data-testid="form-new-request"
                  className="inline-flex items-center gap-3 border border-navy text-navy px-6 py-3 text-xs uppercase font-semibold tracking-[0.22em] rounded-md hover:bg-navy hover:text-ivory transition-all duration-300"
                >
                  Enviar otra consulta
                  <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="bg-white border border-navy/10 rounded-2xl p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_-25px_rgba(15,42,71,0.25)] space-y-8"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                  <div className="md:col-span-2">
                    <Label htmlFor="lawyer_name" className="overline mb-2 block">
                      Nombre / Estudio *
                    </Label>
                    <Input
                      id="lawyer_name"
                      data-testid="input-lawyer-name"
                      value={form.lawyer_name}
                      onChange={update("lawyer_name")}
                      className={baseInput}
                      placeholder="Nombre y apellido — o razón social del estudio"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="overline mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-testid="input-email"
                      value={form.email}
                      onChange={update("email")}
                      className={baseInput}
                      placeholder="contacto@ejemplo.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="overline mb-2 block">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-testid="input-phone"
                      value={form.phone}
                      onChange={update("phone")}
                      className={baseInput}
                      placeholder="+54 9 11 ..."
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="matricula" className="overline mb-2 block">
                      Matrícula profesional <span className="normal-case tracking-normal text-slate-500">(opcional)</span>
                    </Label>
                    <Input
                      id="matricula"
                      data-testid="input-matricula"
                      value={form.matricula}
                      onChange={update("matricula")}
                      className={baseInput}
                      placeholder="Tº / Fº · CPACF · CSJN"
                    />
                  </div>
                  <div>
                    <Label htmlFor="procedure_type" className="overline mb-2 block">
                      Tipo de trámite *
                    </Label>
                    <select
                      id="procedure_type"
                      data-testid="input-procedure"
                      value={form.procedure_type}
                      onChange={update("procedure_type")}
                      className={`${baseInput} appearance-none pr-10 bg-white`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%230F2A47' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                      required
                    >
                      {procedureOptions.map((op) => (
                        <option key={op} value={op}>
                          {op}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="description" className="overline mb-2 block">
                      Mensaje / Descripción del caso *
                    </Label>
                    <Textarea
                      id="description"
                      data-testid="input-description"
                      value={form.description}
                      onChange={update("description")}
                      rows={5}
                      className={`${baseInput} resize-none`}
                      placeholder="Detalle brevemente el hecho, partes involucradas y qué necesita gestionar."
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4 border-t border-navy/10">
                  <p className="font-sans text-xs text-slate-500 max-w-xs leading-relaxed">
                    Trato sus datos con estricta confidencialidad. Los utilizo únicamente para responder su consulta.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="form-submit"
                    className="inline-flex items-center gap-3 bg-gold text-navy px-8 py-4 text-xs uppercase font-semibold tracking-[0.22em] rounded-md shadow-[0_14px_30px_-14px_rgba(200,164,100,0.85)] hover:bg-gold-dark hover:text-white hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {submitting ? (
                      <>
                        Enviando
                        <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.75} />
                      </>
                    ) : (
                      <>
                        Enviar consulta
                        <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
