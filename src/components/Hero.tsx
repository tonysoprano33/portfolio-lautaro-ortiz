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
          <svg width="380" height="480" viewBox="0 0 380 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-95">
            {/* Sombra suave debajo */}
            <ellipse cx="190" cy="450" rx="80" ry="15" fill="currentColor" className="text-primary opacity-10"/>
            
            {/* Sombrero elegante (derby/bowler) */}
            <ellipse cx="165" cy="35" rx="55" ry="20" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 125 35 L 125 5 Q 125 -10 165 -10 Q 205 -10 205 5 L 205 35" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <ellipse cx="165" cy="5" rx="40" ry="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent opacity-80"/>
            {/* Banda del sombrero */}
            <path d="M 125 20 Q 165 28 205 20" stroke="currentColor" strokeWidth="3" className="text-accent"/>
            
            {/* Cabello */}
            <path d="M 120 45 Q 110 60 115 80" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary opacity-60"/>
            <path d="M 210 45 Q 220 60 215 80" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary opacity-60"/>
            
            {/* Orejas */}
            <ellipse cx="118" cy="95" rx="8" ry="12" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <ellipse cx="212" cy="95" rx="8" ry="12" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Cabeza - más detallada */}
            <ellipse cx="165" cy="95" rx="55" ry="65" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            
            {/* Cejas refinadas */}
            <path d="M 135 78 Q 145 73 155 78" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <path d="M 180 75 Q 190 70 195 75" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Ojo izquierdo (expresivo) */}
            <ellipse cx="145" cy="88" rx="6" ry="4" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <circle cx="145" cy="88" r="2.5" fill="currentColor" className="text-primary"/>
            
            {/* Monóculo - ojo derecho (elegante) */}
            <circle cx="185" cy="85" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent"/>
            <circle cx="185" cy="85" r="10" stroke="currentColor" strokeWidth="1" fill="none" className="text-accent opacity-50"/>
            <circle cx="185" cy="85" r="3" fill="currentColor" className="text-accent"/>
            {/* Cadena del monóculo */}
            <path d="M 199 85 Q 210 100 205 120" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent opacity-70"/>
            <circle cx="205" cy="125" r="3" fill="currentColor" className="text-accent opacity-70"/>
            
            {/* Nariz refinada */}
            <path d="M 165 95 L 160 115 Q 165 120 170 115" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Bigote elegante */}
            <path d="M 150 118 Q 165 112 180 118" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 135 120 Q 125 115 130 110" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary opacity-60"/>
            <path d="M 195 120 Q 205 115 200 110" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary opacity-60"/>
            
            {/* Sonrisa pensativa refinada */}
            <path d="M 150 132 Q 165 138 180 132" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 155 136 Q 165 140 175 136" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary opacity-50"/>
            
            {/* Arrugas de expresión (pensativo) */}
            <path d="M 130 60 Q 140 65 145 60" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary opacity-40"/>
            <path d="M 185 58 Q 195 63 200 58" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary opacity-40"/>
            
            {/* Cuello con camisa */}
            <rect x="145" y="155" width="40" height="30" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <line x1="165" y1="155" x2="165" y2="185" stroke="currentColor" strokeWidth="1" className="text-primary opacity-30"/>
            
            {/* Cuerpo/Esmoquin - más detallado */}
            <path d="M 100 185 Q 85 200 90 400 L 100 420" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 230 185 Q 245 200 240 400 L 230 420" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            
            {/* Solapas grandes */}
            <path d="M 100 185 L 165 240 L 100 320" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            <path d="M 230 185 L 165 240 L 230 320" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Botones de esmoquin */}
            <circle cx="165" cy="280" r="4" fill="currentColor" className="text-accent"/>
            <circle cx="165" cy="320" r="4" fill="currentColor" className="text-accent"/>
            
            {/* Corbata de moño elegante */}
            <polygon points="155,195 165,215 175,195 165,175" fill="currentColor" className="text-accent"/>
            <polygon points="160,210 165,230 170,210" fill="currentColor" className="text-accent opacity-70"/>
            <line x1="165" y1="230" x2="165" y2="260" stroke="currentColor" strokeWidth="3" className="text-accent"/>
            
            {/* Bolsillo con pañuelo */}
            <path d="M 200 240 L 220 240 L 220 260 Q 210 270 200 260 Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
            <path d="M 205 245 L 215 245 L 210 265 Z" fill="currentColor" className="text-accent opacity-60"/>
            
            {/* Brazo izquierdo (reposando) */}
            <path d="M 90 200 Q 60 250 70 320" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <ellipse cx="75" cy="330" rx="15" ry="12" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Brazo derecho (sosteniendo taza) - más natural */}
            <path d="M 230 200 Q 260 220 255 280" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 255 280 Q 270 300 265 330" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <ellipse cx="265" cy="345" rx="18" ry="15" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary"/>
            
            {/* Dedos sosteniendo taza */}
            <ellipse cx="250" cy="340" rx="5" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
            <ellipse cx="280" cy="340" rx="5" ry="8" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary"/>
            
            {/* Taza de café elegante */}
            <ellipse cx="285" cy="340" rx="22" ry="14" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent"/>
            <path d="M 263 340 L 263 375 Q 263 395 285 395 Q 307 395 307 375 L 307 340" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent"/>
            <ellipse cx="285" cy="375" rx="22" ry="18" stroke="currentColor" strokeWidth="2" fill="none" className="text-accent"/>
            
            {/* Asa de taza elegante */}
            <path d="M 307 355 Q 325 355 325 375 Q 325 395 307 390" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent"/>
            
            {/* Café dentro */}
            <ellipse cx="285" cy="340" rx="18" ry="10" fill="currentColor" className="text-accent opacity-30"/>
            
            {/* Vapor del café - múltiples líneas animadas */}
            <path d="M 275 325 Q 280 310 275 295" stroke="currentColor" strokeWidth="2" fill="none" className="text-muted-foreground opacity-70" style={{animation: 'float 3s ease-in-out infinite'}}>
              <animate attributeName="d" values="M 275 325 Q 280 310 275 295;M 275 323 Q 270 308 275 293;M 275 325 Q 280 310 275 295" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M 285 320 Q 290 305 285 290" stroke="currentColor" strokeWidth="2" fill="none" className="text-muted-foreground opacity-50" style={{animation: 'float 3s ease-in-out infinite 0.4s'}}>
              <animate attributeName="d" values="M 285 320 Q 290 305 285 290;M 285 318 Q 280 303 285 288;M 285 320 Q 290 305 285 290" dur="3s" repeatCount="indefinite"/>
            </path>
            <path d="M 295 325 Q 300 310 295 295" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-muted-foreground opacity-40" style={{animation: 'float 3s ease-in-out infinite 0.8s'}}>
              <animate attributeName="d" values="M 295 325 Q 300 310 295 295;M 295 323 Q 290 308 295 293;M 295 325 Q 300 310 295 295" dur="3s" repeatCount="indefinite"/>
            </path>
            
            {/* Piernas cruzadas - postura elegante */}
            <path d="M 130 420 Q 140 450 160 460" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 200 420 Q 220 440 240 430" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            <path d="M 160 460 Q 180 470 200 465" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-primary"/>
            
            {/* Pantalones */}
            <line x1="130" y1="420" x2="130" y2="380" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            <line x1="200" y1="420" x2="200" y2="380" stroke="currentColor" strokeWidth="2" className="text-primary"/>
            
            {/* Zapatos elegantes Oxford */}
            <ellipse cx="155" cy="470" rx="25" ry="10" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent"/>
            <ellipse cx="225" cy="435" rx="25" ry="10" stroke="currentColor" strokeWidth="2.5" fill="none" className="text-accent"/>
            {/* Detalle de los zapatos */}
            <path d="M 140 470 Q 155 475 170 470" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent opacity-50"/>
            <path d="M 210 435 Q 225 440 240 435" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-accent opacity-50"/>
            
            {/* Líneas de pensamiento - más elaboradas */}
            <circle cx="320" cy="120" r="4" fill="currentColor" className="text-muted-foreground opacity-50" style={{animation: 'fade 3s ease-in-out infinite'}}/>
            <circle cx="340" cy="100" r="6" fill="currentColor" className="text-muted-foreground opacity-40" style={{animation: 'fade 3s ease-in-out infinite 0.4s'}}/>
            <circle cx="365" cy="80" r="8" fill="currentColor" className="text-muted-foreground opacity-30" style={{animation: 'fade 3s ease-in-out infinite 0.8s'}}/>
            
            {/* Brillo en el monóculo (reflejo) */}
            <circle cx="180" cy="80" r="3" fill="currentColor" className="text-accent-foreground opacity-80"/>
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
