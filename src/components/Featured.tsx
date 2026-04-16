"use client";

import { ArrowUpRight } from "lucide-react";

export default function Featured() {
  return (
    <section id="featured" className="py-32 px-4 sm:px-6 lg:px-8 bg-accent text-accent-foreground">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-accent-foreground/70 text-sm font-medium uppercase tracking-wider mb-4">
          Proyecto destacado
        </p>

        {/* Title */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-tight">
          Dashboard de KPIs que<br />
          ahorró 20 horas semanales
        </h2>

        {/* Description */}
        <p className="text-accent-foreground/80 text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed">
          El equipo operativo pasó de generar 12 reportes manuales a tener
          un dashboard en tiempo real. Automatización completa del pipeline de datos.
        </p>

        {/* Visual mock */}
        <div className="bg-accent-foreground/10 backdrop-blur-sm border border-accent-foreground/20 p-6 sm:p-8 mb-12">
          {/* Chart bars simulation */}
          <div className="flex items-end gap-2 h-48 mb-6">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-accent-foreground/30 hover:bg-accent-foreground/50 transition-colors"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-sm text-accent-foreground/60">
            <span>Ene</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
          </div>
        </div>

        {/* Result highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-accent-foreground/20 pt-12">
          <div>
            <p className="font-display text-4xl sm:text-5xl font-semibold mb-2">20h</p>
            <p className="text-accent-foreground/70 text-sm">Ahorradas por semana</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl font-semibold mb-2">12→1</p>
            <p className="text-accent-foreground/70 text-sm">Reportes consolidados</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl font-semibold mb-2">SQL+Python</p>
            <p className="text-accent-foreground/70 text-sm">Stack utilizado</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-accent-foreground text-accent px-8 py-4 mt-16 font-medium hover:opacity-90 transition-opacity"
        >
          Ver más proyectos
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
