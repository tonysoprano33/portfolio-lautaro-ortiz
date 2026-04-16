"use client";

import { 
  ArrowRight, 
  Database, 
  BarChart3
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-20">
      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent text-xs sm:text-sm font-medium rounded-full mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {t.available}
        </div>

        {/* Name */}
        <p className="text-accent text-sm sm:text-base mb-2 tracking-wide uppercase font-semibold">
          Lautaro Ortiz
        </p>

        {/* Role */}
        <p className="text-muted-foreground text-xs sm:text-sm mb-8 tracking-wide uppercase">
          {t.role}
        </p>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
          {t.headline}{" "}
          <span className="text-accent italic">{t.headlineAccent}</span>
        </h1>

        {/* Description */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.description}
        </p>

        {/* Tech Stack - minimal */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["Python", "SQL", "Tableau", "Power BI", "AWS"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-card border border-border text-muted-foreground text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
          >
            <Database className="w-4 h-4" />
            {t.ctaProjects}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary px-6 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
          >
            <BarChart3 className="w-4 h-4" />
            {t.ctaContact}
          </a>
        </div>
      </div>
    </section>
  );
}
