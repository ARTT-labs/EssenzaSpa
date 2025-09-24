import React from "react";
import Navbar from "../components/Navbar";
import HeroSpa from "../components/HeroSpa";
import Treatments from "../components/Treatments";
import WhyTrust from "../components/WhyTrust";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function SpaLanding() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <HeroSpa />
        <Treatments />
        <WhyTrust />
        <Testimonials />
        <CTASection />
        <Team />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}
