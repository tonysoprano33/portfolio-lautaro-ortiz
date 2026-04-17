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

        {/* Ilustración - persona con pelo largo, corte italiano, automatizando */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4">
          <svg width="340" height="420" viewBox="0 0 340 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
            {/* Sombra */}
            <ellipse cx="170" cy="400" rx="70" ry="12" fill="currentColor" className="text-primary opacity-10"/>
            
            {/* Pelo largo - ondulado */}
            <path d="M 110 70 Q 90 100 95 140 Q 100 180 110 200" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 230 70 Q 250 100 245 140 Q 240 180 230 200" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 120 60 Q 170 40 220 60" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            {/* Mechones frontales */}
            <path d="M 140 65 Q 135 90 145 110" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary opacity-70"/>
            <path d="M 200 65 Q 205 90 195 110" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary opacity-70"/>
            
            {/* Cabeza */}
            <ellipse cx="170" cy="95" rx="48" ry="58" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Ojos - concentrados en la automatización */}
            <ellipse cx="155" cy="90" rx="5" ry="3" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <circle cx="155" cy="90" r="2" fill="currentColor" className="text-primary"/>
            <ellipse cx="185" cy="90" rx="5" ry="3" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <circle cx="185" cy="90" r="2" fill="currentColor" className="text-primary"/>
            
            {/* Cejas - pensativas */}
            <path d="M 148 82 Q 155 78 162 82" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
            <path d="M 178 82 Q 185 78 192 82" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
            
            {/* Nariz */}
            <path d="M 170 95 L 168 110 Q 170 114 172 110" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
            
            {/* Sonrisa sutil - satisfecho automatizando */}
            <path d="M 160 122 Q 170 126 180 122" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Cuello */}
            <rect x="155" y="148" width="30" height="25" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Blazer italiano - corte elegante */}
            {/* Solapas amplias características corte italiano */}
            <path d="M 115 175 L 170 220 L 115 300" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 225 175 L 170 220 L 225 300" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            {/* Hombros marcados */}
            <path d="M 115 175 Q 100 180 95 220 L 90 360" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 225 175 Q 240 180 245 220 L 250 360" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            {/* Línea cintura entallada */}
            <path d="M 90 360 Q 170 380 250 360" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Camisa blanca asomando */}
            <polygon points="170,173 160,210 170,230 180,210" fill="currentColor" className="text-primary opacity-10"/>
            <line x1="170" y1="173" x2="170" y2="230" stroke="currentColor" strokeWidth="1" className="text-primary opacity-30"/>
            
            {/* Botón accent */}
            <circle cx="170" cy="270" r="3" fill="currentColor" className="text-accent"/>
            
            {/* Mano derecha - señalando/código (automatizando) */}
            <path d="M 245 240 Q 270 260 280 290" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <ellipse cx="285" cy="300" rx="12" ry="10" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            {/* Dedos señalando */}
            <path d="M 290 295 L 300 285" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <path d="M 292 300 L 305 295" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Símbolos de código flotando - representa automatización */}
            <text x="310" y="270" fill="currentColor" className="text-accent text-lg font-mono opacity-80" style={{animation: 'fade 2s ease-in-out infinite'}}>{ }</text>
            <text x="300" y="250" fill="currentColor" className="text-accent text-sm font-mono opacity-60" style={{animation: 'fade 2s ease-in-out infinite 0.3s'}}>//</text>
            <text x="320" y="290" fill="currentColor" className="text-accent text-xs font-mono opacity-40" style={{animation: 'fade 2s ease-in-out infinite 0.6s'}}>;</text>
            
            {/* Laptop/tablet - herramienta de trabajo */}
            <rect x="100" y="320" width="80" height="50" rx="3" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent opacity-70"/>
            <line x1="110" y1="335" x2="170" y2="335" stroke="currentColor" strokeWidth="1" className="text-accent opacity-50"/>
            <line x1="110" y1="345" x2="150" y2="345" stroke="currentColor" strokeWidth="1" className="text-accent opacity-50"/>
            <line x1="110" y1="355" x2="160" y2="355" stroke="currentColor" strokeWidth="1" className="text-accent opacity-50"/>
            {/* Brillo pantalla */}
            <path d="M 105 325 L 120 340 L 105 355 Z" fill="currentColor" className="text-accent opacity-20"/>
            
            {/* Piernas - postura relajada pero elegante */}
            <line x1="125" y1="375" x2="125" y2="390" stroke="currentColor" strokeWidth="2.5" className="text-primary"/>
            <line x1="215" y1="375" x2="215" y2="390" stroke="currentColor" strokeWidth="2.5" className="text-primary"/>
            
            {/* Zapatos italianos - elegante */}
            <ellipse cx="115" cy="395" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            <ellipse cx="225" cy="395" rx="20" ry="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            
            {/* Línea de flujo de automatización - de la laptop al aire */}
            <path d="M 180 345 Q 220 330 260 310" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent opacity-40" strokeDasharray="4 4" style={{animation: 'dash 3s linear infinite'}}/>
            <circle cx="265" cy="308" r="3" fill="currentColor" className="text-accent" style={{animation: 'fade 1s ease-in-out infinite'}}/>
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
