"use client";

export default function Credibility() {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-24 bg-background border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-8 sm:gap-12">
          <div className="text-center">
            <p className="font-display text-5xl sm:text-6xl font-semibold text-accent mb-1">
              15+
            </p>
            <p className="text-muted-foreground text-sm">
              Proyectos Data
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-5xl sm:text-6xl font-semibold text-accent mb-1">
              30%
            </p>
            <p className="text-muted-foreground text-sm">
              Menos tiempo reporting
            </p>
          </div>
          <div className="text-center">
            <p className="font-display text-5xl sm:text-6xl font-semibold text-accent mb-1">
              &lt;12ms
            </p>
            <p className="text-muted-foreground text-sm">
              Latencia pipeline
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
