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
        {/* NOMBRE - reducido pero impactante */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-medium leading-[0.8] tracking-tighter mb-2">
          LAUTARO
        </h1>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-medium leading-[0.8] tracking-tighter mb-8 text-accent">
          ORTIZ
        </h1>

        {/* Ilustración única - Símbolo de automatización LO */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-4">
          <svg width="280" height="320" viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
            {/* L inicial - transformándose en loop de automatización */}
            <path 
              d="M 60 80 L 60 200 Q 60 240 100 240 L 140 240" 
              stroke="currentColor" 
              strokeWidth="4" 
              fill="none" 
              className="text-primary"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* O que se convierte en loop/ciclo de automatización */}
            <ellipse cx="180" cy="160" rx="50" ry="60" 
              stroke="currentColor" 
              strokeWidth="4" 
              fill="none" 
              className="text-accent"
            />
            
            {/* Flecha de loop dentro del O - representa automatización */}
            <path 
              d="M 165 120 Q 210 130 205 170 Q 200 200 160 190" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              fill="none" 
              className="text-accent"
              strokeLinecap="round"
              strokeDasharray="4 6"
            >
              <animate attributeName="stroke-dashoffset" values="0;-20" dur="2s" repeatCount="indefinite"/>
            </path>
            
            {/* Punto de entrada (datos crudos) */}
            <circle cx="50" cy="60" r="6" fill="currentColor" className="text-primary opacity-40"/>
            <line x1="55" y1="65" x2="58" y2="75" stroke="currentColor" strokeWidth="1.5" className="text-primary opacity-40"/>
            
            {/* Línea de conexión L → O */}
            <path d="M 140 240 Q 160 240 170 220" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary opacity-50"/>
            
            {/* Puntos de proceso (pasos) */}
            <circle cx="140" cy="160" r="4" fill="currentColor" className="text-accent">
              <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="180" cy="110" r="3" fill="currentColor" className="text-primary opacity-40"/>
            <circle cx="220" cy="160" r="3" fill="currentColor" className="text-primary opacity-40"/>
            <circle cx="180" cy="210" r="3" fill="currentColor" className="text-primary opacity-40"/>
            
            {/* Output/Resultado */}
            <circle cx="250" cy="160" r="5" fill="currentColor" className="text-accent">
              <animate attributeName="r" values="5;7;5" dur="2s" repeatCount="indefinite"/>
            </circle>
            <line x1="230" y1="160" x2="245" y2="160" stroke="currentColor" strokeWidth="2" className="text-accent"/>
            
            {/* Texto sutil "auto" */}
            <text x="155" y="165" fill="currentColor" className="text-accent text-xs font-mono opacity-80">auto</text>
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

    </section>
  );
}
