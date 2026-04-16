"use client";

import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-medium mb-4">
          Trabajemos juntos
        </h2>
        <p className="text-background/70 max-w-xl mx-auto mb-10">
          ¿Tenés un proyecto o búsqueda laboral? Hablemos.
        </p>

        <a
          href="mailto:tu.email@ejemplo.com"
          className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-4 rounded-md hover:opacity-90 transition-opacity text-base font-medium mb-12"
        >
          <Mail className="w-5 h-5" />
          Enviar email
        </a>

        <div className="flex justify-center gap-6 pt-10 border-t border-background/20">
          <a href="#" className="text-background/50 hover:text-background transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-background/50 hover:text-background transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
