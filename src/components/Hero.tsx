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

        {/* Ilustración única - Setup estilo 90s, muy personal */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4">
          <svg width="360" height="400" viewBox="0 0 360 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
            {/* Fondo sutil estilo 90s grid */}
            <pattern id="grid90s" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-10"/>
            </pattern>
            <rect width="360" height="400" fill="url(#grid90s)"/>
            
            {/* Monitor CRT estilo 90s */}
            <rect x="80" y="60" width="200" height="160" rx="8" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary"/>
            {/* Pantalla con scanlines */}
            <rect x="90" y="75" width="180" height="130" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent opacity-60"/>
            {/* Scanlines */}
            <line x1="90" y1="95" x2="270" y2="95" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20"/>
            <line x1="90" y1="115" x2="270" y2="115" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20"/>
            <line x1="90" y1="135" x2="270" y2="135" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20"/>
            <line x1="90" y1="155" x2="270" y2="155" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20"/>
            <line x1="90" y1="175" x2="270" y2="175" stroke="currentColor" strokeWidth="0.5" className="text-accent opacity-20"/>
            {/* Cursor parpadeante estilo 90s */}
            <rect x="110" y="105" width="12" height="20" fill="currentColor" className="text-accent" style={{animation: 'blink 1s step-end infinite'}}/>
            {/* Código en pantalla */}
            <text x="130" y="120" fill="currentColor" className="text-accent text-xs font-mono"> automatizar()</text>
            <text x="110" y="140" fill="currentColor" className="text-accent text-xs font-mono opacity-70"> if (repetido &gt; 2)</text>
            <text x="130" y="160" fill="currentColor" className="text-accent text-xs font-mono opacity-70"> auto.run()</text>
            
            {/* Base del monitor */}
            <rect x="150" y="220" width="60" height="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <rect x="130" y="250" width="100" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Teclado mecánico estilo 90s */}
            <rect x="70" y="280" width="220" height="40" rx="4" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            {/* Teclas */}
            <rect x="85" y="290" width="15" height="12" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent opacity-60"/>
            <rect x="105" y="290" width="15" height="12" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent opacity-60"/>
            <rect x="125" y="290" width="15" height="12" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent opacity-60"/>
            <rect x="145" y="290" width="15" height="12" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent opacity-60"/>
            <rect x="165" y="290" width="100" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent opacity-40"/>
            <rect x="85" y="306" width="180" height="8" rx="2" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent opacity-40"/>
            
            {/* Camisa estilo 90s - cuello alto, oversize */}
            {/* Cuello alto estilo 90s */}
            <path d="M 290 180 L 290 220 Q 320 230 350 220 L 350 180" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent"/>
            <line x1="320" y1="200" x2="320" y2="220" stroke="currentColor" strokeWidth="1" className="text-accent opacity-50"/>
            
            {/* Hombros camisa oversize 90s */}
            <path d="M 260 240 Q 290 230 320 235 Q 350 230 370 245" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            {/* Mangas anchas */}
            <path d="M 260 240 L 250 320" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 370 245 L 380 310" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            {/* Puños */}
            <rect x="245" y="320" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            <rect x="375" y="310" width="20" height="15" rx="3" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            
            {/* Taza de café estilo 90s - mug clásica */}
            <rect x="300" y="260" width="35" height="45" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent"/>
            {/* Asa taza */}
            <path d="M 335 275 Q 350 275 350 290 Q 350 305 335 295" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            {/* Café dentro */}
            <ellipse cx="317" cy="265" rx="15" ry="5" fill="currentColor" className="text-accent opacity-40"/>
            {/* Vapor animado */}
            <path d="M 310 250 Q 315 240 310 230" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent opacity-50" style={{animation: 'float 2.5s ease-in-out infinite'}}/>
            <path d="M 320 250 Q 325 240 320 235" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent opacity-30" style={{animation: 'float 2.5s ease-in-out infinite 0.5s'}}/>
            
            {/* Reloj de pulsera estilo 90s digital */}
            <rect x="255" y="335" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
            <text x="258" y="343" fill="currentColor" className="text-primary text-[6px] font-mono">12:42</text>
            
            {/* Línea de conexión - datos fluyendo */}
            <path d="M 270 250 Q 290 260 300 280" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent opacity-50" strokeDasharray="3 3" style={{animation: 'dash 2s linear infinite'}}/>
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
