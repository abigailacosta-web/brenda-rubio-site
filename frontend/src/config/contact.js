// Centralized contact & professional info — change here to update whole site
export const CONTACT = {
  fullName: "Dra. Brenda Mayra Rubio",
  shortName: "Dra. Brenda M. Rubio",
  role: "Abogada UBA · Mediadora prejudicial matriculada",
  matricula: "Mat. MJyDH N° 5050/2020",
  law: "Ley N° 26.589",
  jurisdiction: "CABA",
  email: "brendamrubio@gmail.com",
  whatsappNumber: "5491156392309",
  whatsappDisplay: "+54 9 11 5639-2309",
  address: 'Paraná 426, piso 15, oficina "K", CABA',
  addressCity: "Ciudad Autónoma de Buenos Aires",
  modality: "100% virtual por Zoom",
  // Portrait — Brenda's professional photo
  portraitImage: "https://customer-assets-4nw71qhi.emergentagent.net/job_dra-brenda-rubio/artifacts/rq2zg6xk_Foto%20orginal%20Brenda.png",
  portraitAlt: "Retrato profesional de la Dra. Brenda Mayra Rubio",
  portraitIsInstitutional: false,
};

export const waLink = (message = "Hola Dra. Rubio, quisiera consultar disponibilidad para una mediación.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
