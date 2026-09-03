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
  address: 'Paraná 426, Piso 5° "K", CABA',
  addressCity: "Ciudad Autónoma de Buenos Aires",
  modality: "100% virtual por Zoom",
  // Portrait image — replace this URL when the professional photo is delivered
  portraitImage: "https://images.pexels.com/photos/3038555/pexels-photo-3038555.jpeg?auto=compress&cs=tinysrgb&w=1000",
  portraitAlt: "Fotografía institucional del Palacio de Justicia — placeholder hasta la incorporación del retrato profesional",
  portraitIsInstitutional: true,
};

export const waLink = (message = "Hola Dra. Rubio, quisiera consultar disponibilidad para una mediación.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
