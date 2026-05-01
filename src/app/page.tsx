import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProfileWork from "@/components/ProfileWork";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectShowcase />
      <ProfileWork />
      <Contact />
    </main>
  );
}
