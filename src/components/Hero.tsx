"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main content - NO container, full bleed */}
      <div>
        {/* Pre-title */}
        <p className="text-muted-foreground text-sm sm:text-base mb-6 tracking-widest uppercase">
          Lautaro Ortiz / Data Analyst
        </p>

        {/* HEADLINE EXTREMO */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-medium leading-[0.85] tracking-tight mb-8">
          Datos<br />
          <span className="text-accent italic">que</span><br />
          convencen
        </h1>

        {/* Value prop - una línea nada más */}
        <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-lg leading-relaxed mb-16">
          Transformo información compleja en decisiones claras. SQL, Python, y visuales que hablan.
        </p>

        {/* CTA - solo texto + flecha */}
        <a
          href="#featured"
          className="group inline-flex items-center gap-4 text-accent text-lg sm:text-xl font-medium hover:gap-6 transition-all"
        >
          Ver proyecto destacado
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* Corner detail - identidad */}
      <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12">
        <div className="w-16 h-16 sm:w-24 sm:h-24 border-2 border-accent/30 rounded-full flex items-center justify-center">
          <span className="text-accent text-xs sm:text-sm font-medium tracking-widest rotate-90">2024</span>
        </div>
      </div>
    </section>
  );
}
