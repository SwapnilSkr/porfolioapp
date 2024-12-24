import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WorkExperience from "@/components/WorkExperience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <WorkExperience />
      <Projects />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
