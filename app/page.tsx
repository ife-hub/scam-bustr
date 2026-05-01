import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChargeBackSection from "@/components/ChargeBackSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <CTA />
        <ChargeBackSection/>
      </main>
      <Footer />
    </>
  );
}