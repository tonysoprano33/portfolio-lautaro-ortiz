"use client";

import { ArrowDown, FileDown, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20 relative overflow-hidden">
      <div className="max-w-4xl">
        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium mb-6">
          Lautaro Ortiz
        </h1>

        {/* Main headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6">
          I Build Software That Solves{" "}
          <span className="text-accent">Real Operational Problems</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
          Python, Data, Automation & Web Apps focused on real business impact.
        </p>

        {/* Key phrase */}
        <p className="text-base sm:text-lg font-medium mb-12 border-l-2 border-accent pl-4">
          I don't just analyze problems — I build the solution.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="/cv-lautaro-ortiz.pdf"
            download
            className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 font-medium hover:bg-foreground hover:text-background transition-all"
          >
            <FileDown className="w-4 h-4" />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground px-6 py-3 font-medium transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
