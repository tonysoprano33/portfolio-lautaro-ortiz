import Hero from "@/components/Hero";
import HeroProject from "@/components/HeroProject";
import Projects from "@/components/Projects";
import HowIWork from "@/components/HowIWork";
import Skills from "@/components/Skills";
import Credibility from "@/components/Credibility";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HeroProject />
      <Projects />
      <HowIWork />
      <Skills />
      <Credibility />
      <Contact />
    </main>
  );
}
