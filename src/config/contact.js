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
  modality: "presenciales y por herramientas virtuales",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Paran%C3%A1+426%2C+CABA%2C+Argentina",
  // Portrait — Brenda's professional photo
  portraitImage: "/images/brenda-rubio.png",
  portraitAlt: "Retrato profesional de la Dra. Brenda Mayra Rubio",
  portraitIsInstitutional: false,
  // Logo BR (monograma + nombre), fondo transparente
  logoMark: "/images/logo-br-mark.png",
  logoMarkLight: "/images/logo-br-mark-light.png",
  logoFull: "/images/logo-br.png",
  phonePrefix: "+54 9",
};

export const waLink = (message = "Hola Dra. Rubio, quisiera consultar disponibilidad para una mediación.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
