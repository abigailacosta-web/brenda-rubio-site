import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2, MessageSquare, Mail as MailIcon, MapPin } from "lucide-react";
import { CONTACT, waLink } from "@/config/contact";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const initial = {
  consultant_type: "abogado",
  lawyer_name: "",
  matricula: "",
  email: "",
  phone: "",
  procedure_type: "Mediación prejudicial por accidente de tránsito",
  description: "",
  privacy_accepted: false,
  website: "", // honeypot
};

const procedureOptions = [
  "Mediación prejudicial por accidente de tránsito",
  "Consulta sobre designación privada",
  "Consulta sobre sorteo público",
  "Disponibilidad de fechas",
  "Otra consulta profesional",
];

const inputBase =
  "w-full bg-white border border-navy/20 rounded-md px-4 py-3 font-sans text-[15px] text-navy placeholder:text-slate-500/80 focus-visible:ring-2 focus-visible:ring-gold-dark/50 focus-visible:border-navy focus-visible:outline-none transition-colors";

export default function ContactForm({ onOpenPrivacy }) {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [k]: value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const validate = () => {
    const errs = {};
    if (!form.lawyer_name.trim() || form.lawyer_name.trim().length < 2) errs.lawyer_name = "Ingrese su nombre o estudio.";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Ingrese un email válido.";
    if (!form.procedure_type.trim()) errs.procedure_type = "Seleccione un tipo de trámite.";
    if (!form.description.trim() || form.description.trim().length < 10) errs.description = "Describa brevemente la consulta (mínimo 10 caracteres).";
    if (!form.privacy_accepted) errs.privacy_accepted = "Debe aceptar la Política de Privacidad.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Por favor revise los campos marcados.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/audience-requests`, form, { headers: { "Content-Type": "application/json" } });
      setSubmitted(true);
      setForm(initial);
      toast.success("Consulta enviada. Le responderé personalmente a la brevedad.");
    } catch (err) {
      const msg = err?.response?.data?.detail || "No se pudo enviar la consulta. Intente nuevamente o escriba a brendamrubio@gmail.com";
      toast.error(typeof msg === "string" ? msg : "Error al enviar la consulta.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" data-testid="contact-section" className="bg-cloud py-20 md:py-28 border-y border-navy/5">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14">
          {/* Sidebar */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="divider-gold" />
              <span className="eyebrow text-navy">Contacto directo</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.02] tracking-tight text-navy">
              Solicite su <em className="font-light text-gold-dark">audiencia</em> o realice su consulta.
            </h2>
            <p className="font-sans text-[15px] leading-relaxed text-slate-700 mt-5 max-w-[62ch]">
              Complete el formulario o comuníquese por WhatsApp. Recibirá una respuesta personal con la información necesaria, la disponibilidad de fechas y los próximos pasos.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contact-whatsapp"
                className="flex items-start gap-4 group"
                aria-label={`Escribir por WhatsApp al ${CONTACT.whatsappDisplay}`}
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-whatsapp text-white flex-shrink-0">
                  <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="eyebrow-sm text-slate-700 mb-0.5">WhatsApp · Móvil</p>
                  <p className="font-serif text-lg md:text-xl text-navy group-hover:text-gold-dark transition-colors">{CONTACT.whatsappDisplay}</p>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                data-testid="contact-email"
                className="flex items-start gap-4 group"
                aria-label={`Enviar email a ${CONTACT.email}`}
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-navy text-gold-light flex-shrink-0">
                  <MailIcon className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="eyebrow-sm text-slate-700 mb-0.5">Correo electrónico</p>
                  <p className="font-serif text-lg md:text-xl text-navy group-hover:text-gold-dark transition-colors break-all">{CONTACT.email}</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-navy text-gold-light flex-shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="eyebrow-sm text-slate-700 mb-0.5">Domicilio constituido · CABA</p>
                  <p className="font-serif text-lg md:text-xl text-navy leading-tight">{CONTACT.address}</p>
                  <p className="font-sans text-sm text-slate-700 mt-1">{CONTACT.addressCity} · Audiencias {CONTACT.modality}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div
                data-testid="form-success"
                className="bg-white border border-navy/10 rounded-2xl p-10 md:p-12 shadow-[0_20px_50px_-25px_rgba(15,42,71,0.25)]"
              >
                <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 rounded-full px-3 py-1 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-dark" />
                  <p className="eyebrow-sm text-gold-dark">Consulta recibida</p>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4 text-navy">Gracias. Recibí su consulta.</h3>
                <p className="font-sans text-[15px] text-slate-700 leading-relaxed mb-8">
                  Le responderé personalmente a la brevedad por el medio que indicó, con la disponibilidad de fechas y los próximos pasos.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  data-testid="form-new-request"
                  className="inline-flex items-center gap-2.5 border border-navy text-navy px-6 py-3 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md hover:bg-navy hover:text-ivory transition-all duration-300"
                >
                  Enviar otra consulta
                  <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="bg-white border border-navy/10 rounded-2xl p-7 md:p-9 shadow-[0_20px_50px_-25px_rgba(15,42,71,0.25)] space-y-7"
                noValidate
                aria-label="Formulario de consulta profesional"
              >
                {/* Tipo de consultante */}
                <fieldset>
                  <legend className="eyebrow text-navy mb-3 block">Tipo de consultante</legend>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { v: "abogado", label: "Abogado/a o estudio jurídico" },
                      { v: "particular", label: "Particular" },
                    ].map((opt) => (
                      <label
                        key={opt.v}
                        data-testid={`radio-consultant-${opt.v}`}
                        className={`cursor-pointer flex items-center gap-3 border rounded-md px-4 py-3 transition-all ${
                          form.consultant_type === opt.v
                            ? "border-navy bg-navy/[0.03] shadow-[0_2px_8px_-4px_rgba(15,42,71,0.2)]"
                            : "border-navy/15 hover:border-navy/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name="consultant_type"
                          value={opt.v}
                          checked={form.consultant_type === opt.v}
                          onChange={update("consultant_type")}
                          className="sr-only"
                        />
                        <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                          form.consultant_type === opt.v ? "border-gold-dark" : "border-navy/30"
                        }`}>
                          {form.consultant_type === opt.v && <span className="w-2 h-2 rounded-full bg-gold-dark" />}
                        </span>
                        <span className="font-sans text-sm font-medium text-navy">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                  <div className="md:col-span-2">
                    <Label htmlFor="lawyer_name" className="eyebrow-sm text-navy mb-2 block">
                      {form.consultant_type === "abogado" ? "Nombre y apellido o estudio *" : "Nombre y apellido *"}
                    </Label>
                    <Input
                      id="lawyer_name"
                      data-testid="input-lawyer-name"
                      value={form.lawyer_name}
                      onChange={update("lawyer_name")}
                      className={inputBase}
                      placeholder={form.consultant_type === "abogado" ? "Ej. Estudio Jurídico Pérez & Asoc." : "Nombre completo"}
                      aria-invalid={!!errors.lawyer_name}
                      aria-describedby={errors.lawyer_name ? "err-lawyer-name" : undefined}
                      required
                    />
                    {errors.lawyer_name && <p id="err-lawyer-name" className="mt-1.5 text-[12px] text-red-700 font-sans">{errors.lawyer_name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email" className="eyebrow-sm text-navy mb-2 block">Correo electrónico *</Label>
                    <Input
                      id="email" type="email" data-testid="input-email"
                      value={form.email} onChange={update("email")}
                      className={inputBase} placeholder="contacto@ejemplo.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "err-email" : undefined}
                      required
                    />
                    {errors.email && <p id="err-email" className="mt-1.5 text-[12px] text-red-700 font-sans">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone" className="eyebrow-sm text-navy mb-2 block">
                      Teléfono o WhatsApp <span className="normal-case tracking-normal text-slate-700 font-normal">(opcional)</span>
                    </Label>
                    <Input
                      id="phone" type="tel" data-testid="input-phone"
                      value={form.phone} onChange={update("phone")}
                      className={inputBase} placeholder="+54 9 11 ..."
                    />
                  </div>

                  {form.consultant_type === "abogado" && (
                    <div className="md:col-span-2">
                      <Label htmlFor="matricula" className="eyebrow-sm text-navy mb-2 block">
                        Matrícula profesional <span className="normal-case tracking-normal text-slate-700 font-normal">(opcional)</span>
                      </Label>
                      <Input
                        id="matricula" data-testid="input-matricula"
                        value={form.matricula} onChange={update("matricula")}
                        className={inputBase} placeholder="Tº / Fº · CPACF · CSJN"
                      />
                    </div>
                  )}

                  <div className="md:col-span-2">
                    <Label htmlFor="procedure_type" className="eyebrow-sm text-navy mb-2 block">Tipo de trámite *</Label>
                    <select
                      id="procedure_type"
                      data-testid="input-procedure"
                      value={form.procedure_type}
                      onChange={update("procedure_type")}
                      className={`${inputBase} appearance-none pr-10 bg-white cursor-pointer`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%230F2A47' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                      required
                    >
                      {procedureOptions.map((op) => (
                        <option key={op} value={op}>{op}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <Label htmlFor="description" className="eyebrow-sm text-navy mb-2 block">Breve descripción de la consulta *</Label>
                    <Textarea
                      id="description" data-testid="input-description"
                      value={form.description} onChange={update("description")}
                      rows={5} className={`${inputBase} resize-none`}
                      placeholder="Describa brevemente la consulta. No incluya documentación médica, imágenes ni información personal sensible en este primer contacto."
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? "err-description" : undefined}
                      required
                    />
                    {errors.description && <p id="err-description" className="mt-1.5 text-[12px] text-red-700 font-sans">{errors.description}</p>}
                  </div>
                </div>

                {/* Honeypot — hidden from users */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">No completar</label>
                  <input id="website" name="website" type="text" value={form.website} onChange={update("website")} tabIndex={-1} autoComplete="off" />
                </div>

                {/* Privacy */}
                <div className="pt-2">
                  <label
                    htmlFor="privacy_accepted"
                    data-testid="privacy-label"
                    className={`flex items-start gap-3 cursor-pointer p-3 rounded-md border transition-colors ${
                      errors.privacy_accepted ? "border-red-500/60 bg-red-50/60" : "border-navy/10 hover:border-navy/25"
                    }`}
                  >
                    <input
                      id="privacy_accepted"
                      data-testid="input-privacy"
                      type="checkbox"
                      checked={form.privacy_accepted}
                      onChange={update("privacy_accepted")}
                      className="mt-0.5 w-4 h-4 accent-gold-dark cursor-pointer flex-shrink-0"
                      aria-invalid={!!errors.privacy_accepted}
                      required
                    />
                    <span className="font-sans text-[13px] leading-relaxed text-slate-700">
                      He leído y acepto la{" "}
                      <button type="button" onClick={onOpenPrivacy} data-testid="open-privacy" className="text-navy font-semibold underline underline-offset-2 hover:text-gold-dark">
                        Política de Privacidad
                      </button>{" "}
                      y autorizo el uso de mis datos exclusivamente para responder esta consulta.
                    </span>
                  </label>
                  {errors.privacy_accepted && <p className="mt-1.5 text-[12px] text-red-700 font-sans">{errors.privacy_accepted}</p>}
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-4 border-t border-navy/10">
                  <p className="font-sans text-[12px] text-slate-700 max-w-md leading-relaxed">
                    Sus datos serán utilizados únicamente para gestionar y responder su consulta profesional. No serán incorporados a comunicaciones promocionales sin su autorización.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="form-submit"
                    className="inline-flex items-center gap-2.5 bg-navy text-ivory px-7 py-3.5 text-[11px] uppercase font-semibold tracking-[0.2em] rounded-md shadow-[0_14px_30px_-14px_rgba(15,42,71,0.6)] hover:bg-navy-mid hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {submitting ? (<>Enviando<Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.75} /></>) : (<>Enviar consulta<ArrowRight className="w-4 h-4" strokeWidth={1.75} /></>)}
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
