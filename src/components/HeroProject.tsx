"use client";

import { ArrowUpRight, Smartphone, Bell, Calendar, Users } from "lucide-react";

export default function HeroProject() {
  return (
    <section id="heroproject" className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background gradient accent - abajo izquierda */}
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-accent/10 dark:bg-accent/20 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/3" />
      
      <div className="relative z-10 px-6 sm:px-12 lg:px-24 py-20 sm:py-32 max-w-7xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium tracking-wider uppercase rounded-full">
            Proyecto Destacado
          </span>
          <span className="text-muted-foreground text-sm">2024</span>
        </div>

        {/* HEADLINE MASIVO */}
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium leading-[0.85] mb-8 max-w-6xl">
          Sistema de turnos<br />
          <span className="text-accent">sin llamadas</span>
        </h2>

        {/* Subheadline propio */}
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl mb-16 leading-relaxed">
          "La secretaria marca el ingreso, la doctora recibe la notificación. 
          Nada de interrupciones, nada de papel."
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16 border-t border-border pt-12">
          <div>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-accent mb-2">
              50+
            </p>
            <p className="text-muted-foreground text-sm">Turnos semanales gestionados</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-2">
              0
            </p>
            <p className="text-muted-foreground text-sm">Doble reserva desde la implementación</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-2">
              3s
            </p>
            <p className="text-muted-foreground text-sm">Notificación de paciente listo</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-accent mb-2">
              PWA
            </p>
            <p className="text-muted-foreground text-sm">Instalada en móviles, sin app stores</p>
          </div>
        </div>

        {/* Features visual */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="bg-muted/50 dark:bg-white/5 border border-border p-6">
            <Bell className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-medium mb-2">Notificaciones en tiempo real</h3>
            <p className="text-muted-foreground text-sm">Telegram + Push nativas. La doctora sabe sin mirar el teléfono.</p>
          </div>
          <div className="bg-muted/50 dark:bg-white/5 border border-border p-6">
            <Calendar className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-medium mb-2">Agenda sincronizada</h3>
            <p className="text-muted-foreground text-sm">Secretaría y consultorio siempre actualizados. Sin Excel.</p>
          </div>
          <div className="bg-muted/50 dark:bg-white/5 border border-border p-6">
            <Users className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-lg font-medium mb-2">Fichas centralizadas</h3>
            <p className="text-muted-foreground text-sm">Historial, odontograma, evolución. Todo en un lugar.</p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-12">
          <span>Next.js</span>
          <span className="text-muted-foreground/50">·</span>
          <span>Supabase</span>
          <span className="text-muted-foreground/50">·</span>
          <span>TypeScript</span>
          <span className="text-muted-foreground/50">·</span>
          <span>Telegram Bot API</span>
          <span className="text-muted-foreground/50">·</span>
          <span>PWA</span>
        </div>

        {/* CTA */}
        <a
          href="#projects"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-medium hover:opacity-90 transition-opacity"
        >
          <Smartphone className="w-5 h-5" />
          Ver demostración
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
