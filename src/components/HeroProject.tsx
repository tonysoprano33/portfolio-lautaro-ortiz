"use client";

import { ArrowUpRight, Smartphone, Bell, Calendar, Users } from "lucide-react";
import ProjectSlideshow from "./ProjectSlideshow";

const turnosImages = [
  { 
    src: "/projects/turnos/Captura de pantalla 2026-04-21 145859.png", 
    caption: "Dashboard principal: Vista general de la agenda del día con estadísticas de turnos" 
  },
  { 
    src: "/projects/turnos/Captura de pantalla 2026-04-21 150013.png", 
    caption: "Lista de pacientes: Gestión de citas con indicadores de llegada y estado" 
  },
  { 
    src: "/projects/turnos/Captura de pantalla 2026-04-21 150130.png", 
    caption: "Formulario de paciente: Registro completo con historial y datos de contacto" 
  },
  { 
    src: "/projects/turnos/Captura de pantalla 2026-04-21 150212.png", 
    caption: "Calendario de turnos: Vista semanal con disponibilidad y bloqueos de horarios" 
  }
];

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
          <span className="text-muted-foreground text-sm">En producción</span>
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
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16 border-t border-border pt-12">
          <div>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-accent mb-2">
              71+
            </p>
            <p className="text-muted-foreground text-sm">Pacientes registrados</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-accent mb-2">
              50+
            </p>
            <p className="text-muted-foreground text-sm">Turnos semanales</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-2">
              0
            </p>
            <p className="text-muted-foreground text-sm">Doble reserva</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold mb-2">
              3s
            </p>
            <p className="text-muted-foreground text-sm">Notificación instantánea</p>
          </div>
          <div>
            <p className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-accent mb-2">
              PWA
            </p>
            <p className="text-muted-foreground text-sm">App instalable</p>
          </div>
        </div>

        {/* Slideshow Preview */}
        <div className="mb-16">
          <p className="text-muted-foreground text-sm mb-4">Vistas de la aplicación</p>
          <div className="w-full h-80 lg:h-96 bg-muted border border-border rounded-lg overflow-hidden group">
            <ProjectSlideshow images={turnosImages} alt="Sistema de turnos" />
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
          Ver todos los proyectos
          <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
