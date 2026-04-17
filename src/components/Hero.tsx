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

        {/* Ilustración - chico elegante apoyado en pared de oficina */}
        <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4">
          <svg width="320" height="500" viewBox="0 0 320 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90">
            {/* Pared de oficina */}
            <line x1="60" y1="0" x2="60" y2="500" stroke="currentColor" strokeWidth="2" className="text-border"/>
            {/* Sombra de la pared */}
            <rect x="0" y="0" width="60" height="500" fill="currentColor" className="text-primary opacity-5"/>
            
            {/* Chico apoyado en la pared */}
            <g>
              {/* Piernas - cruzadas, apoyadas */}
              <line x1="110" y1="400" x2="110" y2="320" stroke="currentColor" strokeWidth="2.5" className="text-primary"/>
              <line x1="150" y1="420" x2="150" y2="330" stroke="currentColor" strokeWidth="2.5" className="text-primary"/>
              <path d="M 110 400 Q 130 420 150 420" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
              
              {/* Zapatos elegantes */}
              <ellipse cx="115" cy="430" rx="22" ry="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
              <ellipse cx="155" cy="445" rx="22" ry="8" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
              
              {/* Torso - camisa elegante */}
              <path d="M 110 320 L 110 220 Q 130 215 150 220 L 150 320" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
              
              {/* Cuello camisa */}
              <rect x="118" y="205" width="24" height="20" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
              <line x1="130" y1="205" x2="130" y2="225" stroke="currentColor" strokeWidth="1" className="text-primary opacity-30"/>
              
              {/* Cabeza */}
              <ellipse cx="130" cy="175" rx="32" ry="38" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
              
              {/* Cabello - estilizado */}
              <path d="M 100 165 Q 95 140 105 125 Q 130 110 155 125 Q 165 140 160 165" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
              <path d="M 105 135 Q 130 130 155 135" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary opacity-70"/>
              
              {/* Ojos - mirando a la izquierda (hacia el nombre) */}
              <g>
                {/* Ojo izquierdo */}
                <ellipse cx="115" cy="172" rx="4" ry="2.5" fill="currentColor" className="text-primary"/>
                <circle cx="114" cy="172" r="1.5" fill="currentColor" className="text-accent"/>
                {/* Ojo derecho */}
                <ellipse cx="135" cy="172" rx="4" ry="2.5" fill="currentColor" className="text-primary"/>
                <circle cx="134" cy="172" r="1.5" fill="currentColor" className="text-accent"/>
                
                {/* Parpadeo ocasional */}
                <rect x="108" y="168" width="14" height="8" fill="currentColor" className="text-primary opacity-0">
                  <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.95;0.96;0.97;1" dur="4s" repeatCount="indefinite"/>
                </rect>
                <rect x="128" y="168" width="14" height="8" fill="currentColor" className="text-primary opacity-0">
                  <animate attributeName="opacity" values="0;0;1;0;0" keyTimes="0;0.95;0.96;0.97;1" dur="4s" repeatCount="indefinite"/>
                </rect>
              </g>
              
              {/* Cejas */}
              <path d="M 110 165 Q 115 162 120 165" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
              <path d="M 130 165 Q 135 162 140 165" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
              
              {/* Nariz perfil */}
              <path d="M 125 175 L 122 188 Q 125 192 128 188" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
              
              {/* Boca neutra/pensativa */}
              <line x1="120" y1="198" x2="135" y2="198" stroke="currentColor" strokeWidth="1.5" className="text-primary"/>
              
              {/* Brazo derecho - apoyado en la pared */}
              <path d="M 110 230 Q 80 260 75 300" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
              <ellipse cx="72" cy="310" rx="12" ry="10" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
              
              {/* Brazo izquierdo - en el bolsillo inicialmente */}
              <g>
                {/* Estado normal - mano en bolsillo */}
                <path d="M 150 230 Q 170 280 165 320" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary">
                  <animate attributeName="d" values="M 150 230 Q 170 280 165 320;M 150 230 Q 170 280 165 320" dur="8s" repeatCount="indefinite"/>
                </path>
                <ellipse cx="165" cy="330" rx="12" ry="10" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary">
                  <animate attributeName="cy" values="330;330" dur="8s" repeatCount="indefinite"/>
                </ellipse>
                
                {/* Animación: de vez en cuando saca el brazo y señala abajo */}
                <path d="M 150 230 Q 180 300 200 380" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent opacity-0">
                  <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.7;0.75;0.85;0.9;1" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="d" values="M 150 230 Q 180 300 200 380;M 150 230 Q 180 300 200 380" dur="8s" repeatCount="indefinite"/>
                </path>
                
                {/* Mano señalando abajo */}
                <g opacity="0">
                  <ellipse cx="205" cy="395" rx="12" ry="10" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
                  {/* Dedos señalando */}
                  <path d="M 205 405 L 205 420" stroke="currentColor" strokeWidth="2" className="text-accent"/>
                  <path d="M 200 410 L 205 420 L 210 410" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
                  <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.7;0.75;0.85;0.9;1" dur="8s" repeatCount="indefinite"/>
                </g>
              </g>
              
              {/* Cabeza animación - de vez en cuando mira abajo */}
              <g opacity="1">
                <animate attributeName="opacity" values="1;1;0;0;1;1" keyTimes="0;0.7;0.75;0.85;0.9;1" dur="8s" repeatCount="indefinite"/>
              </g>
              
              {/* Cabeza mirando abajo (capa separada que aparece) */}
              <g opacity="0">
                {/* Cabeza ligeramente inclinada */}
                <ellipse cx="130" cy="178" rx="32" ry="38" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
                {/* Ojos mirando abajo */}
                <ellipse cx="118" cy="180" rx="3" ry="2" fill="currentColor" className="text-primary"/>
                <ellipse cx="138" cy="180" rx="3" ry="2" fill="currentColor" className="text-primary"/>
                {/* Cejas mirando abajo */}
                <path d="M 113 172 Q 118 175 123 172" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
                <path d="M 133 172 Q 138 175 143 172" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
                <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.7;0.75;0.85;0.9;1" dur="8s" repeatCount="indefinite"/>
              </g>
            </g>
            
            {/* Flecha indicando scroll - aparece cuando señala */}
            <g opacity="0" transform="translate(180, 420)">
              <path d="M 0 0 L 15 25 L 30 0" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
              <line x1="15" y1="25" x2="15" y2="40" stroke="currentColor" strokeWidth="2" className="text-accent"/>
              <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.7;0.75;0.85;0.9;1" dur="8s" repeatCount="indefinite"/>
              <animateTransform attributeName="transform" type="translate" values="180,420; 180,425; 180,420" dur="1s" repeatCount="indefinite"/>
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
