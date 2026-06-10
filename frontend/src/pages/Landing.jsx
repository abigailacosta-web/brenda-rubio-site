import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ValueProps from "@/components/landing/ValueProps";
import About from "@/components/landing/About";
import Process from "@/components/landing/Process";
import Checklist from "@/components/landing/Checklist";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="bg-cream text-anthracite overflow-x-hidden">
      <Navbar />
      <Hero />
      <ValueProps />
      <About />
      <Process />
      <Checklist />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
