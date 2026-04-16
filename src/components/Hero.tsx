"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* One line intro */}
        <p className="text-muted-foreground text-sm sm:text-base mb-6 tracking-wide">
          Lautaro Ortiz — Data Analyst
        </p>

        {/* Main headline - big and direct */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-8">
          Transformo datos<br />
          <span className="text-accent">en decisiones</span>
        </h1>

        {/* One line value prop */}
        <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mb-12 leading-relaxed">
          SQL, Python y visualización. Análisis claro que genera resultados concretos.
        </p>

        {/* Single CTA */}
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md hover:opacity-90 transition-opacity text-base font-medium"
        >
          Ver proyectos
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
