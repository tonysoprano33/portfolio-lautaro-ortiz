"use client";

import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium mb-6 leading-tight">
          Hablemos
        </h2>
        <p className="text-background/70 text-lg max-w-xl mx-auto mb-12">
          ¿Tenés un proyecto donde los datos puedan marcar la diferencia?
        </p>

        <a
          href="mailto:tu.email@ejemplo.com"
          className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 hover:opacity-90 transition-opacity text-lg font-medium"
        >
          <Mail className="w-5 h-5" />
          tu.email@ejemplo.com
        </a>

        <div className="flex justify-center gap-8 mt-16 pt-10 border-t border-background/20">
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
