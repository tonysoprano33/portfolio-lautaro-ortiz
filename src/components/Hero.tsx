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
      <div className="relative">
        {/* NOMBRE - extrema dominancia */}
        <h1 className="font-display text-8xl sm:text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-medium leading-[0.75] tracking-tighter mb-2">
          LAUTARO
        </h1>
        <h1 className="font-display text-8xl sm:text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-medium leading-[0.75] tracking-tighter mb-8 text-accent">
          ORTIZ
        </h1>

        {/* Rol - minimal, elegante */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground tracking-[0.2em] uppercase mb-12">
          Analyst · Developer · Automatizador
        </p>

        {/* FRASE POSICIONADORA - agresiva y corta */}
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight max-w-4xl mb-16">
          Si se repite más de dos veces,<br />
          <span className="text-accent">debe automatizarse</span>.
        </p>

        {/* Detalle distintivo - eficiencia medida */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-muted-foreground text-sm tracking-wider uppercase">3 apps activas</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-75" />
            <span className="text-muted-foreground text-sm tracking-wider uppercase">2026</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-150" />
            <span className="text-muted-foreground text-sm tracking-wider uppercase">Full Stack</span>
          </div>
        </div>

        {/* CTA elegante */}
        <a
          href="#heroproject"
          className="group inline-flex items-center gap-4 text-accent border-b-2 border-accent pb-1 text-lg font-medium hover:gap-6 transition-all"
        >
          Ver sistema de turnos
          <ArrowDown className="w-5 h-5" />
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
