"use client";

export default function Process() {
  return (
    <section id="process" className="py-32 sm:py-40 px-6 sm:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-16">
          Cómo trabajo
        </p>

        <div className="space-y-20 sm:space-y-28">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16">
            <p className="text-accent font-display text-6xl sm:text-7xl font-medium">01</p>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-medium text-primary mb-4">Exploración</h3>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl">
                Antes de tocar una línea de código, me sumerjo en el negocio. 
                Hablo con los equipos, identifico los dolores reales, y descubro 
                qué datos están disponibles vs. qué datos realmente necesitamos. 
                Un buen análisis empieza por preguntar "¿para qué?" antes de "¿cómo?".
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16">
            <p className="text-accent font-display text-6xl sm:text-7xl font-medium">02</p>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-medium text-primary mb-4">Análisis & Automatización</h3>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl">
                SQL para extracción eficiente, Python para limpieza y modelado, 
                y dashboards que cuentan historias claras. Pero lo clave es el 
                siguiente paso: automatizar. Si un proceso se repite, merece un 
                script que lo haga solo. Ese es mi diferencial.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16">
            <p className="text-accent font-display text-6xl sm:text-7xl font-medium">03</p>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-medium text-primary mb-4">Insights Accionables</h3>
              <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl">
                Un dashboard que nadie entiende es decoración. Traduzco números 
                complejos en recomendaciones claras: "hacé esto, no lo otro". 
                Mi objetivo es que alguien tome una decisión mejor después de ver 
                mi trabajo, no solo quedar impresionado por los colores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
