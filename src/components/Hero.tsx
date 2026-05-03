"use client";

import { ArrowDown, Github } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 lg:px-24 py-20 relative overflow-hidden text-center bg-[#080808] text-white">
      <div className="w-full max-w-[1120px] mx-auto relative z-10">
        <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-6">
          {t.hero.role}
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium mb-6">
          Lautaro Ortiz
        </h1>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-medium leading-[0.98] mb-7 max-w-[1040px] mx-auto">
          {t.hero.headline.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="text-accent">{t.hero.headline.split(" ").slice(-2).join(" ")}</span>
        </h2>

        <p className="text-lg sm:text-xl lg:text-2xl text-white/65 mb-8 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subheadline}
        </p>

        <p className="text-base sm:text-lg lg:text-xl font-medium mb-12 max-w-3xl mx-auto border-t border-accent/50 pt-6 text-white">
          {t.hero.tagline}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#heroproject"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            {t.hero.ctaProjects}
            <ArrowDown className="w-4 h-4" />
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

      <div
        aria-hidden="true"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40"
      >
        <span className="h-8 w-px bg-white/20" />
        <ArrowDown className="w-4 h-4" strokeWidth={1.75} />
      </div>
    </section>
  );
}
