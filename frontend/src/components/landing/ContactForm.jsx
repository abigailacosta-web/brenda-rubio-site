import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Loader2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const initial = {
  lawyer_name: "",
  matricula: "",
  email: "",
  phone: "",
  insurance_company: "",
  description: "",
};

const baseInput =
  "w-full bg-transparent border-0 border-b border-anthracite/30 rounded-none px-0 py-3 font-sans text-base text-anthracite placeholder:text-anthracite-soft/60 focus-visible:ring-0 focus-visible:border-anthracite focus-visible:outline-none transition-colors";

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
      !form.insurance_company.trim() ||
      form.description.trim().length < 10
    ) {
      toast.error("Por favor complete todos los campos obligatorios. La descripción debe tener al menos 10 caracteres.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/audience-requests`, form, {
        headers: { "Content-Type": "application/json" },
      });
      setSubmitted(true);
      setForm(initial);
      toast.success("Solicitud enviada. La Dra. Rubio se pondrá en contacto a la brevedad.");
    } catch (err) {
      const msg = err?.response?.data?.detail || "No se pudo enviar la solicitud. Intente nuevamente o escriba a brendamrubio@gmail.com";
      toast.error(typeof msg === "string" ? msg : "Error al enviar la solicitud.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contacto" data-testid="contact-section" className="bg-cream-200/60 py-20 md:py-32 border-y border-anthracite/15">
      <div className="container-narrow">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="block w-12 h-px bg-anthracite" />
              <span className="overline">Solicitud de audiencia</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight">
              Inicie su mediación virtual <em className="font-light">hoy</em>.
            </h2>
            <p className="font-sans text-base leading-relaxed text-anthracite-soft mt-6 max-w-md">
              Complete el formulario con los datos del caso. Recibirá una respuesta institucional con la fecha y enlace de Zoom propuesto, y el detalle del trámite de notificaciones.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="overline text-[10px] mb-2">Contacto directo</p>
                <p className="font-serif text-2xl">+54 9 11 5639-2309</p>
              </div>
              <div>
                <p className="overline text-[10px] mb-2">Email</p>
                <a href="mailto:brendamrubio@gmail.com" className="font-serif text-2xl underline-offset-4 hover:underline">
                  brendamrubio@gmail.com
                </a>
              </div>
              <div>
                <p className="overline text-[10px] mb-2">Domicilio constituido · CABA</p>
                <p className="font-sans text-sm leading-relaxed text-anthracite-soft">
                  Paraná 426, Piso 15° "K" · CABA<br />
                  Tel. fijo: (011) 4374-6820
                </p>
              </div>
            </div>
          </div>

          {/* Right column — Form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div data-testid="form-success" className="border border-anthracite p-10 md:p-14 bg-cream">
                <p className="overline text-[10px] mb-4">Solicitud recibida</p>
                <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4">Gracias por confiar su expediente.</h3>
                <p className="font-sans text-base text-anthracite-soft leading-relaxed mb-8">
                  Recibimos su solicitud correctamente. La Dra. Brenda M. Rubio se pondrá en contacto a la brevedad por el medio que indicó para coordinar la audiencia virtual y avanzar con las notificaciones por Carta Documento.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  data-testid="form-new-request"
                  className="inline-flex items-center gap-3 border border-anthracite text-anthracite px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-anthracite hover:text-cream transition-colors"
                >
                  Enviar otra solicitud
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-testid="contact-form"
                className="border border-anthracite/20 p-8 md:p-10 lg:p-12 bg-cream space-y-8"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                  <div className="md:col-span-2">
                    <Label htmlFor="lawyer_name" className="overline text-[10px]">
                      Nombre del Abogado / Estudio *
                    </Label>
                    <Input
                      id="lawyer_name"
                      data-testid="input-lawyer-name"
                      value={form.lawyer_name}
                      onChange={update("lawyer_name")}
                      className={baseInput}
                      placeholder="Dr. / Dra. — Nombre y Apellido"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="matricula" className="overline text-[10px]">
                      Matrícula (opcional)
                    </Label>
                    <Input
                      id="matricula"
                      data-testid="input-matricula"
                      value={form.matricula}
                      onChange={update("matricula")}
                      className={baseInput}
                      placeholder="T° / F° / CSJN / CPACF"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="overline text-[10px]">
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
                    <Label htmlFor="email" className="overline text-[10px]">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-testid="input-email"
                      value={form.email}
                      onChange={update("email")}
                      className={baseInput}
                      placeholder="contacto@estudio.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="insurance" className="overline text-[10px]">
                      Aseguradora demandada *
                    </Label>
                    <Input
                      id="insurance"
                      data-testid="input-insurance"
                      value={form.insurance_company}
                      onChange={update("insurance_company")}
                      className={baseInput}
                      placeholder="Compañía / aseguradora"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="description" className="overline text-[10px]">
                      Breve descripción del siniestro *
                    </Label>
                    <Textarea
                      id="description"
                      data-testid="input-description"
                      value={form.description}
                      onChange={update("description")}
                      rows={5}
                      className={`${baseInput} resize-none`}
                      placeholder="Fecha y lugar del hecho, partes involucradas, daños, etc."
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-4 border-t border-anthracite/15">
                  <p className="font-sans text-xs text-anthracite-soft max-w-xs leading-relaxed">
                    Sus datos son tratados con estricta confidencialidad y utilizados únicamente para evaluar la causa.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    data-testid="form-submit"
                    className="inline-flex items-center gap-3 bg-anthracite text-cream px-8 py-4 text-xs uppercase tracking-[0.25em] hover:bg-anthracite-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        Enviando
                        <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.5} />
                      </>
                    ) : (
                      <>
                        Enviar solicitud
                        <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
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
