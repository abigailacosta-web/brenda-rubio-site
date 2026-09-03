import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import About from "@/components/landing/About";
import Process from "@/components/landing/Process";
import DigitalSystem from "@/components/landing/DigitalSystem";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="bg-ivory text-navy overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <DigitalSystem />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
