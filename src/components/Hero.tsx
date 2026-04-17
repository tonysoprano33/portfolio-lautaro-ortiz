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

        {/* Ilustración artística - silueta elegante apoyada */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-8">
          <svg width="300" height="450" viewBox="0 0 300 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
            {/* Silueta de persona apoyada - línea continua artística */}
            <path 
              d="M 80 400 Q 75 350 80 300 Q 85 250 75 200 Q 70 150 80 120 Q 90 90 110 85 Q 135 80 150 95 Q 165 110 160 140 Q 155 170 140 180 Q 125 190 130 220 Q 135 250 150 280 Q 165 310 170 350 Q 175 390 170 420" 
              stroke="currentColor" 
              strokeWidth="3" 
              fill="none" 
              className="text-primary"
              strokeLinecap="round"
            />
            
            {/* Línea de pared/vertical */}
            <line x1="60" y1="50" x2="60" y2="450" stroke="currentColor" strokeWidth="2" className="text-accent opacity-40" strokeLinecap="round"/>
            
            {/* Detalle de mano en bolsillo */}
            <ellipse cx="135" cy="310" rx="8" ry="12" fill="currentColor" className="text-primary opacity-60"/>
            
            {/* Cuello de camisa - detalle accent */}
            <path d="M 115 200 L 115 220 Q 130 225 145 220 L 145 200" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            
            {/* Pelo largo - líneas fluidas */}
            <path d="M 85 140 Q 70 160 75 200 Q 80 230 70 260" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary opacity-60" strokeLinecap="round"/>
            <path d="M 165 140 Q 180 160 175 200 Q 170 230 180 250" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary opacity-40" strokeLinecap="round"/>
            <path d="M 95 100 Q 110 90 130 95 Q 150 100 155 120" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary" strokeLinecap="round"/>
            
            {/* Ojos mirando a la izquierda (hacia el nombre) - simples */}
            <circle cx="105" cy="125" r="3" fill="currentColor" className="text-accent"/>
            <circle cx="135" cy="125" r="3" fill="currentColor" className="text-accent"/>
            
            {/* Sombra suave */}
            <ellipse cx="125" cy="435" rx="50" ry="10" fill="currentColor" className="text-primary opacity-10"/>
            
            {/* Animación: dedo señalando abajo (ocasional) */}
            <g opacity="0">
              <path d="M 160 280 Q 180 320 185 370" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
              <circle cx="188" cy="380" r="5" fill="currentColor" className="text-accent"/>
              <line x1="188" y1="385" x2="188" y2="395" stroke="currentColor" strokeWidth="2" className="text-accent"/>
              <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.8;0.82;0.88;0.9;1" dur="6s" repeatCount="indefinite"/>
            </g>
            
            {/* Flecha de scroll que aparece */}
            <g opacity="0" transform="translate(170, 410)">
              <path d="M 0 0 L 10 20 L 20 0" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
              <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.8;0.82;0.88;0.9;1" dur="6s" repeatCount="indefinite"/>
              <animateTransform attributeName="transform" type="translate" values="170,410; 170,415; 170,410" dur="0.8s" repeatCount="indefinite"/>
            </g>
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
