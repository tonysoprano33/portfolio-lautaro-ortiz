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
      <div className="relative lg:pr-[500px]">
        {/* NOMBRE - reducido pero impactante */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-medium leading-[0.8] tracking-tighter mb-2">
          LAUTARO
        </h1>
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-medium leading-[0.8] tracking-tighter mb-8 text-accent">
          ORTIZ
        </h1>

        {/* Ilustración única - Símbolo LO más grande y pro */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-8">
          <svg width="380" height="440" viewBox="0 0 380 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
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
            
            {/* Flecha de loop animada dentro del O */}
            <path 
              d="M 235 155 Q 300 170 290 220 Q 280 260 215 245" 
              stroke="currentColor" 
              strokeWidth="4" 
              fill="none" 
              className="text-accent"
              strokeLinecap="round"
              strokeDasharray="8 12"
            >
              <animate attributeName="stroke-dashoffset" values="0;-40" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Entrada de datos */}
            <circle cx="60" cy="70" r="10" fill="currentColor" className="text-primary opacity-50"/>
            <circle cx="75" cy="85" r="5" fill="currentColor" className="text-primary opacity-30"/>
            <line x1="70" y1="90" x2="78" y2="110" stroke="currentColor" strokeWidth="2" className="text-primary opacity-40"/>
            
            {/* Conexión L → O */}
            <path d="M 180 320 Q 210 320 225 295" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary opacity-40"/>
            
            {/* Puntos de proceso */}
            <circle cx="200" cy="210" r="6" fill="currentColor" className="text-accent">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="260" cy="125" r="5" fill="currentColor" className="text-primary opacity-30"/>
            <circle cx="330" cy="210" r="5" fill="currentColor" className="text-primary opacity-30"/>
            <circle cx="260" cy="295" r="5" fill="currentColor" className="text-primary opacity-30"/>
            
            {/* Output */}
            <circle cx="360" cy="210" r="8" fill="currentColor" className="text-accent">
              <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <line x1="330" y1="210" x2="352" y2="210" stroke="currentColor" strokeWidth="3" className="text-accent"/>
            
            {/* Texto "auto" centrado */}
            <text x="235" y="220" fill="currentColor" className="text-accent text-base font-mono font-medium opacity-90">auto</text>
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
