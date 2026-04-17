"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-6 sm:px-12 lg:px-24 relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative lg:pr-[400px]">
        {/* NOMBRE - extrema dominancia */}
        <h1 className="font-display text-8xl sm:text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-medium leading-[0.75] tracking-tighter mb-2">
          LAUTARO
        </h1>
        <h1 className="font-display text-8xl sm:text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-medium leading-[0.75] tracking-tighter mb-8 text-accent">
          ORTIZ
        </h1>

        {/* Ilustración caballero - solo desktop */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4">
          <svg width="320" height="400" viewBox="0 0 320 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
            {/* Cabeza */}
            <ellipse cx="160" cy="80" rx="50" ry="60" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            {/* Monóculo */}
            <circle cx="175" cy="75" r="12" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            <line x1="187" y1="75" x2="200" y2="70" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
            {/* Ojo izquierdo (sin monóculo) */}
            <circle cx="145" cy="75" r="3" fill="currentColor" className="text-primary"/>
            {/* Sonrisa pensativa */}
            <path d="M 145 100 Q 160 108 175 100" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            {/* Cuello */}
            <rect x="145" y="135" width="30" height="25" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            {/* Cuerpo/Esmoquin */}
            <path d="M 100 160 L 110 160 L 110 380 L 100 380 Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <path d="M 210 160 L 220 160 L 220 380 L 210 380 Z" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <line x1="110" y1="160" x2="210" y2="160" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            {/* Solapa */}
            <path d="M 110 160 L 160 200 L 110 240" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <path d="M 210 160 L 160 200 L 210 240" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            {/* Corbata pajarita */}
            <polygon points="150,170 160,185 170,170 160,155" fill="currentColor" className="text-accent"/>
            {/* Brazo derecho (sosteniendo taza) */}
            <path d="M 210 180 Q 240 200 230 250" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <ellipse cx="230" cy="260" rx="12" ry="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            {/* Taza de café */}
            <ellipse cx="250" cy="255" rx="20" ry="12" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            <path d="M 230 255 L 230 285 Q 230 300 250 300 Q 270 300 270 285 L 270 255" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            <ellipse cx="250" cy="285" rx="20" ry="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            {/* Asa de taza */}
            <path d="M 270 270 Q 285 270 285 285 Q 285 300 270 295" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            {/* Vapor del café - animado con CSS */}
            <path d="M 245 240 Q 250 230 245 220" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-muted-foreground opacity-60" style={{animation: 'float 3s ease-in-out infinite'}}>
              <animate attributeName="d" values="M 245 240 Q 250 230 245 220;M 245 238 Q 240 228 245 218;M 245 240 Q 250 230 245 220" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M 255 238 Q 260 228 255 218" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-muted-foreground opacity-40" style={{animation: 'float 3s ease-in-out infinite 0.5s'}}>
              <animate attributeName="d" values="M 255 238 Q 260 228 255 218;M 255 236 Q 250 226 255 216;M 255 238 Q 260 228 255 218" dur="3s" repeatCount="indefinite"/>
            </path>
            {/* Piernas - sentado/relajado */}
            <line x1="130" y1="380" x2="130" y2="350" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            <line x1="190" y1="380" x2="190" y2="350" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            {/* Zapatos elegantes */}
            <ellipse cx="125" cy="390" rx="18" ry="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            <ellipse cx="195" cy="390" rx="18" ry="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            {/* Líneas de pensamiento */}
            <circle cx="280" cy="100" r="3" fill="currentColor" className="text-muted-foreground opacity-40" style={{animation: 'fade 4s ease-in-out infinite'}}/>
            <circle cx="295" cy="85" r="4" fill="currentColor" className="text-muted-foreground opacity-30" style={{animation: 'fade 4s ease-in-out infinite 0.5s'}}/>
            <circle cx="315" cy="70" r="5" fill="currentColor" className="text-muted-foreground opacity-20" style={{animation: 'fade 4s ease-in-out infinite 1s'}}/>
          </svg>
        </div>

        {/* Rol - minimal, elegante */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light text-muted-foreground tracking-[0.2em] uppercase mb-12">
          Analyst · Developer · Automatizador
        </p>

        {/* FRASE POSICIONADORA - agresiva y corta */}
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight max-w-4xl mb-16">
          Si se repite más de dos veces,<br />
          <span className="text-accent">debe automatizarse</span>.
        </p>

        {/* Detalle distintivo - eficiencia medida */}
        <div className="flex items-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-muted-foreground text-sm tracking-wider uppercase">3 apps activas</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-75" />
            <span className="text-muted-foreground text-sm tracking-wider uppercase">2026</span>
          </div>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-150" />
            <span className="text-muted-foreground text-sm tracking-wider uppercase">Full Stack</span>
          </div>
        </div>

        {/* CTA elegante */}
        <a
          href="#heroproject"
          className="group inline-flex items-center gap-4 text-accent border-b-2 border-accent pb-1 text-lg font-medium hover:gap-6 transition-all"
        >
          Ver sistema de turnos
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>

      {/* Corner detail */}
      <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12">
        <div className="w-16 h-16 sm:w-24 sm:h-24 border-2 border-accent/30 rounded-full flex items-center justify-center">
          <span className="text-accent text-xs sm:text-sm font-medium tracking-widest rotate-90">2026</span>
        </div>
      </div>
    </section>
  );
}
