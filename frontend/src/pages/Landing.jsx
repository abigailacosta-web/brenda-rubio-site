import React, { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import About from "@/components/landing/About";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import DigitalSystem from "@/components/landing/DigitalSystem";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";
import PrivacyPolicy from "@/components/landing/PrivacyPolicy";

export default function Landing() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <main data-testid="landing-page" className="bg-ivory text-navy overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <DigitalSystem />
      <ContactForm onOpenPrivacy={() => setPrivacyOpen(true)} />
      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <WhatsAppFloat />
      <PrivacyPolicy open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </main>
  );
}
