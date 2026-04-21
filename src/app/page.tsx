import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import HowIWork from "@/components/HowIWork";
import Skills from "@/components/Skills";
import Credibility from "@/components/Credibility";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Projects />
      <HowIWork />
      <Skills />
      <Credibility />
      <Contact />
    </main>
  );
}
