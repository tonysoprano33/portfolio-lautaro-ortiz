"use client";

export default function Process() {
  return (
    <section id="process" className="py-32 sm:py-40 px-6 sm:px-12 lg:px-24 bg-muted/30">
      <div>
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-16">
          Cómo trabajo
        </p>

        <div className="space-y-16 sm:space-y-24">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <p className="text-accent font-display text-5xl sm:text-6xl font-medium">01</p>
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-primary mb-3">Exploración</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Entiendo el negocio primero. Qué preguntas importan, qué datos tenemos, qué falta.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <p className="text-accent font-display text-5xl sm:text-6xl font-medium">02</p>
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-primary mb-3">Análisis</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                SQL para extracción, Python para procesamiento, dashboards para visualizar.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <p className="text-accent font-display text-5xl sm:text-6xl font-medium">03</p>
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-primary mb-3">Insights</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Traduzco números en acciones que alguien puede usar para decidir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
