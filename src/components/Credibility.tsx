"use client";

export default function Credibility() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-accent text-sm font-medium uppercase tracking-wider mb-12">
          Resultados concretos
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16">
          <div className="border-l-2 border-accent pl-6">
            <p className="font-display text-4xl sm:text-5xl font-semibold text-primary mb-2">
              15+
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Proyectos de análisis completados
            </p>
          </div>
          <div className="border-l-2 border-accent pl-6">
            <p className="font-display text-4xl sm:text-5xl font-semibold text-primary mb-2">
              30%
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Reducción promedio en tiempos de reporte
            </p>
          </div>
          <div className="border-l-2 border-accent pl-6">
            <p className="font-display text-4xl sm:text-5xl font-semibold text-primary mb-2">
              SQL · Python
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Stack principal + Tableau/Power BI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
