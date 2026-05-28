import Hero from "@/components/Hero";
import Credibility from "@/components/Credibility";
import ProjectShowcase from "@/components/ProjectShowcase";
import WhyMe from "@/components/WhyMe";
import ProfileWork from "@/components/ProfileWork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Credibility />
      <ProjectShowcase />
      <WhyMe />
      <ProfileWork />
      <Contact />
    </main>
  );
}
