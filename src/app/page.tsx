import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Credibility from "@/components/Credibility";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Featured />
      <Credibility />
      <Projects />
      <Process />
      <Skills />
      <Contact />
    </main>
  );
}
