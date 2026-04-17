"use client";

import { ArrowUpRight } from "lucide-react";

export default function Featured() {
  return (
    <section id="featured" className="min-h-screen bg-accent text-accent-foreground flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-24 relative overflow-hidden">
      {/* Big background number - identidad */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] sm:text-[30rem] font-display font-bold text-accent-foreground/[0.03] select-none pointer-events-none">
        01
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Label */}
        <p className="text-accent-foreground/60 text-sm tracking-widest uppercase mb-8">
          Proyecto Destacado
        </p>

        {/* TÍTULO ENORME */}
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[0.9] mb-12 max-w-5xl">
          Dashboard de KPIs que ahorró 20 horas semanales
        </h2>

        {/* Grid content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left - description */}
          <div>
            <p className="text-accent-foreground/80 text-lg sm:text-xl leading-relaxed mb-8">
              El equipo pasó de generar 12 reportes manuales a tener un dashboard en tiempo real. Automatización completa con SQL y Python.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12">
              <div>
                <p className="font-display text-5xl sm:text-6xl font-semibold">20h</p>
                <p className="text-accent-foreground/60 text-sm mt-1">Ahorradas semanales</p>
              </div>
              <div>
                <p className="font-display text-5xl sm:text-6xl font-semibold">12→1</p>
                <p className="text-accent-foreground/60 text-sm mt-1">Reportes consolidados</p>
              </div>
            </div>
          </div>

          {/* Right - visual */}
          <div className="bg-accent-foreground/10 border border-accent-foreground/20 p-6 sm:p-8">
            <div className="flex items-end gap-2 h-56 sm:h-64 mb-4">
              {[35, 55, 45, 75, 60, 90, 70, 85, 55, 95, 80, 92].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-accent-foreground/40 hover:bg-accent-foreground/60 transition-all duration-300"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-accent-foreground/50 uppercase tracking-wider">
              <span>Ene</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
          </div>
        </div>

        {/* CTA - bottom */}
        <a
          href="#projects"
          className="inline-flex items-center gap-3 border-2 border-accent-foreground text-accent-foreground px-8 py-4 mt-16 text-lg font-medium hover:bg-accent-foreground hover:text-accent transition-colors"
        >
          Ver más proyectos
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
