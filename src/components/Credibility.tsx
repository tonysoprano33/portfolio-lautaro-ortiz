"use client";

export default function Credibility() {
  return (
    <section className="py-32 sm:py-40 px-6 sm:px-12 lg:px-24 bg-background">
      <div>
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-16">
          Resultados concretos
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
          <div>
            <p className="font-display text-6xl sm:text-7xl md:text-8xl font-medium text-primary mb-4">
              15+
            </p>
            <p className="text-muted-foreground text-base">
              Proyectos completados
            </p>
          </div>
          <div>
            <p className="font-display text-6xl sm:text-7xl md:text-8xl font-medium text-primary mb-4">
              30<span className="text-accent">%</span>
            </p>
            <p className="text-muted-foreground text-base">
              Reducción en tiempos de reporte
            </p>
          </div>
          <div>
            <p className="font-display text-5xl sm:text-6xl md:text-7xl font-medium text-accent mb-4">
              SQL
            </p>
            <p className="text-muted-foreground text-base">
              Python · Tableau · Power BI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
