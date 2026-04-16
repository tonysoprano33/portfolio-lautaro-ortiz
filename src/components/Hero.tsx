"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Main headline - AGRESIVO */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium leading-[0.95] mb-8 tracking-tight">
          Datos que<br />
          <span className="text-accent">convencen</span>
        </h1>

        {/* Subheadline - directo */}
        <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
          No vendo dashboards. Entrego respuestas que hacen que alguien diga "ah, entonces eso".
        </p>

        {/* Single CTA - prominente */}
        <a
          href="#featured"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-none text-base font-medium hover:opacity-90 transition-opacity"
        >
          Ver el mejor proyecto
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Scroll hint minimal */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
