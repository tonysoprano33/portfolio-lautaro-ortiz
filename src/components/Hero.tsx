"use client";

import { ArrowDown, Github } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20 relative overflow-hidden">
      {/* LO Illustration - right side */}
      <div className="hidden lg:block absolute top-1/2 right-12 -translate-y-1/2">
        <svg
          width="300"
          height="350"
          viewBox="0 0 380 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-80"
          aria-hidden="true"
          focusable="false"
        >
          {/* Fondo circular sutil */}
          <circle cx="190" cy="220" r="180" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent opacity-10"/>
          <circle cx="190" cy="220" r="150" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent opacity-5"/>
          
          {/* L inicial - elegante */}
          <path 
            d="M 80 100 L 80 280 Q 80 320 120 320 L 180 320" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
            className="text-primary"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* O - loop de automatización */}
          <ellipse cx="260" cy="210" rx="70" ry="85" 
            stroke="currentColor" 
            strokeWidth="6" 
            fill="none" 
            className="text-accent"
          />
          
          {/* Flecha de loop dentro del O */}
          <path 
            d="M 235 155 Q 300 170 290 220 Q 280 260 215 245" 
            stroke="currentColor" 
            strokeWidth="4" 
            fill="none" 
            className="text-accent"
            strokeLinecap="round"
            strokeDasharray="8 12"
          />
          
          {/* Entrada de datos */}
          <circle cx="60" cy="70" r="10" fill="currentColor" className="text-primary opacity-50"/>
          <circle cx="75" cy="85" r="5" fill="currentColor" className="text-primary opacity-30"/>
          <line x1="70" y1="90" x2="78" y2="110" stroke="currentColor" strokeWidth="2" className="text-primary opacity-40"/>
          
          {/* Conexión L → O */}
          <path d="M 180 320 Q 210 320 225 295" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary opacity-40"/>
          
          {/* Puntos de proceso */}
          <circle cx="200" cy="210" r="6" fill="currentColor" className="text-accent opacity-60"/>
          <circle cx="260" cy="125" r="5" fill="currentColor" className="text-primary opacity-30"/>
          <circle cx="330" cy="210" r="5" fill="currentColor" className="text-primary opacity-30"/>
          <circle cx="260" cy="295" r="5" fill="currentColor" className="text-primary opacity-30"/>
          
          {/* Output */}
          <circle cx="360" cy="210" r="10" fill="currentColor" className="text-accent opacity-80"/>
          <line x1="330" y1="210" x2="352" y2="210" stroke="currentColor" strokeWidth="3" className="text-accent"/>
          
          {/* Texto "auto" centrado */}
          <text x="235" y="220" fill="currentColor" className="text-accent text-base font-mono font-medium opacity-90">auto</text>
        </svg>
      </div>

      <div className="max-w-4xl relative z-10">
        {/* Name */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium mb-6">
          Lautaro Ortiz
        </h1>

        {/* Main headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6">
          {t.hero.headline.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="text-accent">{t.hero.headline.split(" ").slice(-2).join(" ")}</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
          {t.hero.subheadline}
        </p>

        {/* Key phrase */}
        <p className="text-base sm:text-lg font-medium mb-12 border-l-2 border-accent pl-4">
          {t.hero.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            {t.hero.ctaProjects}
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/tonysoprano33"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 font-medium hover:bg-foreground hover:text-background transition-all"
          >
            <Github className="w-4 h-4" />
            {t.hero.ctaGitHub}
          </a>
        </div>
      </div>
    </section>
  );
}
