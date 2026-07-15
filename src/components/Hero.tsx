"use client";

import { Github, Mail } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function Hero() {
  const { t, locale } = useLocale();

  const proofLine = locale === "es"
    ? "Herramientas reales que siguen en uso después de la entrega."
    : "Real tools that keep being used after delivery.";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 py-20 relative overflow-hidden text-center bg-[#080808] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,78,255,0.18),transparent_34%),radial-gradient(circle_at_bottom,rgba(91,78,255,0.08),transparent_28%)]" />

      <div className="w-full max-w-[1180px] mx-auto relative z-10">
        <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-6">
          {t.hero.role}
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium mb-6">
          Lautaro Ortiz
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium leading-[0.96] mb-7 max-w-[1080px] mx-auto">
          {t.hero.headline.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="text-accent">{t.hero.headline.split(" ").slice(-2).join(" ")}</span>
        </h2>

        <p className="text-lg sm:text-xl lg:text-2xl text-white/68 mb-8 max-w-4xl mx-auto leading-relaxed">
          {t.hero.subheadline}
        </p>

        <p className="text-base sm:text-lg lg:text-xl font-medium mb-12 max-w-3xl mx-auto border-t border-accent/40 pt-6 text-white">
          {t.hero.tagline}
        </p>

        <div className="max-w-3xl mx-auto mb-12 border-y border-accent/30 py-5">
          <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-accent mb-2">
            {locale === "es" ? "Evidencia real" : "Real-world proof"}
          </p>
          <p className="text-base sm:text-lg lg:text-xl font-medium text-white">
            {proofLine}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#heroproject"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-6 py-3 font-medium hover:border-white hover:bg-white hover:text-[#080808] transition-all"
          >
            <Mail className="w-4 h-4" />
            {locale === "es" ? "Contactarme" : "Contact Me"}
          </a>
          <a
            href="https://github.com/tonysoprano33"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 font-medium hover:bg-white hover:text-[#080808] transition-all"
          >
            <Github className="w-4 h-4" />
            {t.hero.ctaGitHub}
          </a>
        </div>
      </div>
    </section>
  );
}

