"use client";

import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 bg-foreground text-background">
      <div>
        <p className="text-background/50 text-sm tracking-widest uppercase mb-8">
          Contacto
        </p>

        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] mb-8 max-w-4xl">
          Trabajemos<br />juntos
        </h2>

        <p className="text-background/60 text-lg sm:text-xl max-w-lg mb-12">
          ¿Tenés un proyecto donde los datos puedan marcar la diferencia?
        </p>

        <a
          href="mailto:tu.email@ejemplo.com"
          className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 text-lg font-medium hover:opacity-90 transition-opacity"
        >
          <Mail className="w-5 h-5" />
          tu.email@ejemplo.com
        </a>

        <div className="flex gap-8 mt-20 pt-10 border-t border-background/20">
          <a href="#" className="text-background/40 hover:text-background transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-background/40 hover:text-background transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
