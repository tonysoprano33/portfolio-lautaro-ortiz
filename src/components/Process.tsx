"use client";

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <p className="text-accent text-3xl font-display font-medium mb-4">01</p>
            <h3 className="text-lg font-medium text-primary mb-2">Exploración</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Entiendo el negocio primero. Qué preguntas importan, qué datos tenemos, qué falta.
            </p>
          </div>
          <div>
            <p className="text-accent text-3xl font-display font-medium mb-4">02</p>
            <h3 className="text-lg font-medium text-primary mb-2">Análisis</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              SQL para extracción, Python para procesamiento, dashboards para visualizar.
            </p>
          </div>
          <div>
            <p className="text-accent text-3xl font-display font-medium mb-4">03</p>
            <h3 className="text-lg font-medium text-primary mb-2">Insights</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Traduzco números en acciones que alguien puede usar para decidir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
