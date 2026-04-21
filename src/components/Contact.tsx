"use client";

import { Mail, Linkedin, Github, FileDown, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-background/50 text-sm tracking-widest uppercase mb-8">
          Contact
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
          Looking for someone who can turn messy operations into efficient tools?
        </h2>

        <p className="text-background/60 text-lg sm:text-xl max-w-lg mx-auto mb-12">
          I don't just analyze problems — I build the solution.
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <a
            href="mailto:tu.email@ejemplo.com"
            className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 text-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            Contact Me
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="/cv-lautaro-ortiz.pdf"
            download
            className="inline-flex items-center gap-3 border-2 border-background/30 text-background px-8 py-3 text-base font-medium hover:border-background hover:bg-background hover:text-foreground transition-all"
          >
            <FileDown className="w-5 h-5" />
            Download CV
          </a>
        </div>

        <div className="flex justify-center gap-8 pt-10 border-t border-background/20">
          <a href="#" className="text-background/40 hover:text-background transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-background/40 hover:text-background transition-colors">
            <Github className="w-6 h-6" />
          </a>
        </div>

        <p className="text-background/30 text-sm mt-12">
          © 2026 Lautaro Ortiz
        </p>
      </div>
    </section>
  );
}
