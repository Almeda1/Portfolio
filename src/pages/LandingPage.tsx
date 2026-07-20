import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Portfolio from "@/components/landing/Portfolio";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/layout/Footer";
import ThemeBackground from "@/components/layout/ThemeBackground";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden"> 
      <ThemeBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <About/>
        <Contact/>
      </main>
      <div className="relative z-10">
        <Footer/>
      </div>
    </div>
  );
}