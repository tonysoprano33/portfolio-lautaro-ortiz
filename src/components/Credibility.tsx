"use client";

export default function Credibility() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-y border-border bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-primary mb-2">
              15+
            </p>
            <p className="text-muted-foreground text-sm">
              Proyectos de análisis completados
            </p>
          </div>
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-primary mb-2">
              30%
            </p>
            <p className="text-muted-foreground text-sm">
              Reducción promedio en tiempos de reporte
            </p>
          </div>
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold text-primary mb-2">
              SQL · Python
            </p>
            <p className="text-muted-foreground text-sm">
              Stack principal + Tableau/Power BI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
