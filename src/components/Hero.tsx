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

      {/* Main content */}
      <div>
        {/* NOMBRE GIGANTE - protagonista absoluto */}
        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-medium leading-[0.8] tracking-tighter mb-4">
          LAUTARO<br />
          <span className="text-accent">ORTIZ</span>
        </h1>

        {/* Rol claro y grande */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-primary mb-6 tracking-wide">
          Data Analyst & Developer
        </p>

        {/* Impacto inmediato - frase corta potente */}
        <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed mb-12">
          Construyo sistemas que automatizan lo manual. 
          Apps reales, usadas todos los días, que ahorran horas.
        </p>

        {/* Stats de impacto inmediato */}
        <div className="flex flex-wrap gap-8 sm:gap-12 mb-16">
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-accent">2026</p>
            <p className="text-muted-foreground text-sm">Proyectos activos</p>
          </div>
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold">Full Stack</p>
            <p className="text-muted-foreground text-sm">Next.js · SQL · Python</p>
          </div>
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-accent">3</p>
            <p className="text-muted-foreground text-sm">Apps en producción</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#heroproject"
          className="group inline-flex items-center gap-4 text-accent text-lg sm:text-xl font-medium hover:gap-6 transition-all"
        >
          Ver proyecto principal
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>

      {/* Corner detail */}
      <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12">
        <div className="w-16 h-16 sm:w-24 sm:h-24 border-2 border-accent/30 rounded-full flex items-center justify-center">
          <span className="text-accent text-xs sm:text-sm font-medium tracking-widest rotate-90">2026</span>
        </div>
      </div>
    </section>
  );
}
