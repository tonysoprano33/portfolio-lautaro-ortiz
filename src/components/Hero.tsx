"use client";

import { ArrowDown, Github, Mail } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function Hero() {
  const { t, locale } = useLocale();

  const proofStats =
    locale === "es"
      ? [
          { value: "3", label: "sistemas activos" },
          { value: "2", label: "secretarias usando mis herramientas" },
          { value: "horas -> min", label: "reducciones reales en trabajo operativo" }
        ]
      : [
          { value: "3", label: "active systems" },
          { value: "2", label: "secretaries using my tools" },
          { value: "hours -> min", label: "real reductions in operational work" }
        ];

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 text-left">
          {proofStats.map((item) => (
            <div key={item.label} className="border border-white/10 bg-white/[0.03] px-5 py-5">
              <p className="font-display text-3xl sm:text-4xl text-accent mb-2">{item.value}</p>
              <p className="text-sm sm:text-base text-white/72 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#heroproject"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            {t.hero.ctaProjects}
            <ArrowDown className="w-4 h-4" />
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
