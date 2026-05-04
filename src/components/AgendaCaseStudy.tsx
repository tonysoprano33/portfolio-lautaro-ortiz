"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Database,
  Github,
  HeartPulse,
  Users,
} from "lucide-react";
import { useLocale } from "./LocaleProvider";

const copy = {
  en: {
    back: "Back to portfolio",
    eyebrow: "Production Case Study",
    title: "Dental appointment system used in a real clinic.",
    intro:
      "A private PWA built for a dentist and her two secretaries to replace paper scheduling with patient records, appointment control, payments, insurance data, odontograms, and faster daily coordination.",
    primaryCta: "View GitHub",
    secondaryCta: "Contact me",
    metrics: [
      { value: "100+", label: "registered patients" },
      { value: "3", label: "daily users" },
      { value: "PWA", label: "installable app" },
      { value: "Paper", label: "workflow replaced" },
    ],
    overview: [
      { label: "Client", value: "Private dental clinic in Argentina" },
      { label: "Role", value: "Product analysis, UX, frontend, backend, database and deployment" },
      { label: "Users", value: "1 dentist and 2 secretaries" },
      { label: "Status", value: "Private production system" },
      { label: "Evidence", value: "Anonymized screenshots, 100+ registered patients and reference available upon request" },
      { label: "Stack", value: "Next.js, TypeScript, Supabase, PWA, Telegram Bot API" },
    ],
    problemTitle: "The problem",
    problem:
      "The clinic was managing appointments and patient information with paper notes. The process worked, but it was fragile: information lived in one place, appointment changes were easy to miss, and the dentist depended on manual coordination to know what was happening during the day.",
    goalTitle: "The goal",
    goal:
      "Build a practical internal tool that matched the clinic's real workflow: fast enough for secretaries, useful enough for the dentist, and simple enough to become part of daily work without training friction.",
    workflowTitle: "What the system does",
    workflow: [
      {
        title: "Daily agenda",
        description:
          "A shared view for today's appointments, patient status, arrival indicators, and quick actions.",
        icon: CalendarDays,
      },
      {
        title: "Patient profiles",
        description:
          "Patient records with personal data, insurance coverage, visit history, payments, notes, images, and clinical context.",
        icon: Users,
      },
      {
        title: "Clinical tools",
        description:
          "Odontogram, clinical history, alerts for relevant conditions, and treatment notes inside the patient profile.",
        icon: HeartPulse,
      },
      {
        title: "Calendar control",
        description:
          "The team can mark non-working days, full days, occupied slots, appointment duration, and overlap warnings.",
        icon: ClipboardList,
      },
      {
        title: "Notifications",
        description:
          "When a patient arrives, the secretary can mark it and notify the dentist through real-time updates and Telegram/push flows.",
        icon: Bell,
      },
      {
        title: "Operational data",
        description:
          "Supabase stores appointments, patients, payments and status changes, giving the clinic a structured base for daily decisions.",
        icon: Database,
      },
    ],
    processTitle: "How I built it",
    process: [
      {
        title: "Observed the paper workflow",
        description:
          "The first step was understanding how appointments were actually written, changed and communicated during a clinic day.",
      },
      {
        title: "Built around real users",
        description:
          "Features were added from feedback: patient profiles, payments, insurance, odontogram, day blocking, full-day markers and arrival notifications.",
      },
      {
        title: "Kept the app practical",
        description:
          "The priority was not adding every possible clinic feature. The priority was making the system fast, clear and useful for this specific team.",
      },
    ],
    technicalTitle: "Technical decisions",
    technical: [
      "Next.js and TypeScript for an installable, responsive PWA.",
      "Supabase Auth, PostgreSQL and realtime subscriptions for shared updates across devices.",
      "API route for arrival status changes, push notifications, email fallback and Telegram integration.",
      "Relational data model for patients, appointments, payments, odontograms, images and inventory.",
      "Client-side image compression to keep uploads lighter for clinical documents.",
      "Calendar logic for blocked days, full days, appointment duration and overlap warnings.",
    ],
    impactTitle: "Impact",
    impact:
      "The system is used as part of a private clinic's real daily workflow. It moved patient and appointment management from paper notes into a shared digital tool, with more than 100 registered patients, anonymized product evidence and constant feedback from the dentist and secretaries.",
    learningTitle: "Why this project matters",
    learning:
      "This is the project that best shows how I like to work: observe a real operational problem, talk with the people who live with it, build the solution, and keep improving it until it becomes useful in practice.",
    screenshotsTitle: "Product views",
    screenshots: [
      { src: "/projects/turnos/captured/02-panel-control.png", title: "Control panel", caption: "Monthly metrics, patient activity and appointment status in one operational view." },
      { src: "/projects/turnos/captured/03-calendario-general.png", title: "Calendar", caption: "Monthly scheduling with workdays, occupied days and availability context." },
      { src: "/projects/turnos/captured/05-lista-pacientes-blur.png", title: "Patient list", caption: "Searchable records with coverage, profile access and clinical history actions." },
      { src: "/projects/turnos/captured/06-perfil-paciente-blur.png", title: "Patient profile", caption: "Visits, payments, odontogram, gallery and clinical context in a single profile." },
      { src: "/projects/turnos/captured/07-historia-clinica-blur.png", title: "Clinical history", caption: "Structured medical fields that can be saved or printed for signing." },
      { src: "/projects/turnos/captured/10-config-alertas-blur.png", title: "Arrival alerts", caption: "Push, email and Telegram configuration for real-time clinic coordination." },
    ],
  },
  es: {
    back: "Volver al portfolio",
    eyebrow: "Case study en producción",
    title: "Sistema de agenda odontológica usado en una clínica real.",
    intro:
      "Una PWA privada creada para una odontóloga y sus dos secretarias. Reemplaza la agenda en papel por perfiles de pacientes, turnos, pagos, mutual, odontograma y coordinación diaria más rápida.",
    primaryCta: "Ver GitHub",
    secondaryCta: "Contactarme",
    metrics: [
      { value: "100+", label: "pacientes registrados" },
      { value: "3", label: "usuarios diarios" },
      { value: "PWA", label: "app instalable" },
      { value: "Papel", label: "flujo reemplazado" },
    ],
    overview: [
      { label: "Cliente", value: "Consultorio odontológico privado, Argentina" },
      { label: "Rol", value: "Análisis del problema, UX, frontend, backend, base de datos y deploy" },
      { label: "Usuarios", value: "1 odontóloga y 2 secretarias" },
      { label: "Estado", value: "Sistema privado en producción" },
      { label: "Evidencia", value: "Capturas anonimizadas, 100+ pacientes registrados y referencia disponible bajo solicitud" },
      { label: "Stack", value: "Next.js, TypeScript, Supabase, PWA, Telegram Bot API" },
    ],
    problemTitle: "El problema",
    problem:
      "La clínica gestionaba turnos e información de pacientes con agenda en papel y anotaciones manuales. El flujo funcionaba, pero era frágil: la información quedaba en un solo lugar, los cambios podían perderse y la doctora dependía de coordinación manual para saber qué estaba pasando durante el día.",
    goalTitle: "El objetivo",
    goal:
      "Construir una herramienta interna práctica que se adapte al flujo real de la clínica: rápida para las secretarias, útil para la doctora y lo bastante simple como para usarse todos los días sin fricción.",
    workflowTitle: "Qué hace el sistema",
    workflow: [
      {
        title: "Agenda diaria",
        description:
          "Vista compartida de turnos del día, estado del paciente, indicadores de llegada y acciones rápidas.",
        icon: CalendarDays,
      },
      {
        title: "Perfiles de pacientes",
        description:
          "Ficha con datos personales, mutual, historial de visitas, pagos, notas, imágenes y contexto clínico.",
        icon: Users,
      },
      {
        title: "Herramientas clínicas",
        description:
          "Odontograma, historia clínica, alertas relevantes y notas de tratamiento dentro del perfil del paciente.",
        icon: HeartPulse,
      },
      {
        title: "Control del calendario",
        description:
          "Permite marcar días no laborables, días completos, horarios ocupados, duración de turnos y avisos de superposición.",
        icon: ClipboardList,
      },
      {
        title: "Notificaciones",
        description:
          "Cuando llega un paciente, la secretaria puede marcarlo y avisar a la doctora con actualizaciones en tiempo real y flujo Telegram/push.",
        icon: Bell,
      },
      {
        title: "Datos operativos",
        description:
          "Supabase guarda turnos, pacientes, pagos y cambios de estado, dejando una base ordenada para el trabajo diario.",
        icon: Database,
      },
    ],
    processTitle: "Cómo lo construí",
    process: [
      {
        title: "Observé el flujo en papel",
        description:
          "El primer paso fue entender cómo se anotaban, modificaban y comunicaban los turnos durante un día real de trabajo.",
      },
      {
        title: "Construí alrededor de usuarios reales",
        description:
          "Las funciones salieron del feedback: perfiles, pagos, mutual, odontograma, bloqueo de días, días completos y avisos de llegada.",
      },
      {
        title: "Priorizé utilidad antes que exceso",
        description:
          "La prioridad no fue agregar todas las funciones posibles de una clínica. Fue hacer un sistema rápido, claro y útil para este equipo específico.",
      },
    ],
    technicalTitle: "Decisiones técnicas",
    technical: [
      "Next.js y TypeScript para una PWA instalable y responsive.",
      "Supabase Auth, PostgreSQL y realtime subscriptions para actualizaciones compartidas entre dispositivos.",
      "API route para cambios de estado, push notifications, fallback por email e integración con Telegram.",
      "Modelo relacional para pacientes, turnos, pagos, odontogramas, imágenes e inventario.",
      "Compresión de imágenes en cliente para subir documentos clínicos con menos peso.",
      "Lógica de calendario para días bloqueados, días completos, duración de turnos y avisos de superposición.",
    ],
    impactTitle: "Impacto",
    impact:
      "El sistema forma parte del flujo diario real de un consultorio privado. Pasó la gestión de pacientes y turnos desde papel a una herramienta digital compartida, con más de 100 pacientes registrados, evidencia visual anonimizada y feedback constante de la doctora y sus secretarias.",
    learningTitle: "Por qué este proyecto importa",
    learning:
      "Es el proyecto que mejor muestra cómo me gusta trabajar: observar un problema operativo real, conversar con quienes lo viven, construir la solución y seguir mejorándola hasta que sea útil en la práctica.",
    screenshotsTitle: "Vistas del producto",
    screenshots: [
      { src: "/projects/turnos/captured/02-panel-control.png", title: "Panel de control", caption: "Métricas mensuales, actividad de pacientes y estado de turnos en una vista operativa." },
      { src: "/projects/turnos/captured/03-calendario-general.png", title: "Calendario", caption: "Agenda mensual con días laborales, días ocupados y contexto de disponibilidad." },
      { src: "/projects/turnos/captured/05-lista-pacientes-blur.png", title: "Lista de pacientes", caption: "Registros buscables con mutual, acceso al perfil e historia clínica." },
      { src: "/projects/turnos/captured/06-perfil-paciente-blur.png", title: "Perfil del paciente", caption: "Visitas, pagos, odontograma, galería y contexto clínico en un solo perfil." },
      { src: "/projects/turnos/captured/07-historia-clinica-blur.png", title: "Historia clínica", caption: "Campos médicos estructurados para guardar o imprimir y firmar." },
      { src: "/projects/turnos/captured/10-config-alertas-blur.png", title: "Alertas de llegada", caption: "Configuración push, email y Telegram para coordinación en tiempo real." },
    ],
  },
} as const;

const githubUrl = "https://github.com/tonysoprano33/consultorio-dental";

export default function AgendaCaseStudy() {
  const { locale } = useLocale();
  const t = copy[locale];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 py-8 sm:px-10 lg:px-16 xl:px-24 border-b border-border">
        <div className="max-w-[1280px] mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,0.58fr)] gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-5">{t.eyebrow}</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] max-w-5xl">
              {t.title}
            </h1>
          </div>

          <div className="lg:pt-16">
            <p className="text-xl sm:text-2xl leading-relaxed border-l-2 border-accent pl-5 mb-8">
              {t.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 font-medium hover:opacity-90 transition-opacity"
              >
                <Github className="w-4 h-4" />
                {t.primaryCta}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 font-medium hover:border-accent hover:text-accent transition-colors"
              >
                {t.secondaryCta}
              </Link>
            </div>
            <figure className="hidden lg:block mt-8 overflow-hidden border border-border bg-background shadow-xl">
              <div className="aspect-[16/10] bg-muted">
                <img
                  src={t.screenshots[0].src}
                  alt={t.screenshots[0].title}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                {t.screenshots[0].caption}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 border border-border bg-muted/10 divide-x divide-y lg:divide-y-0 divide-border overflow-hidden">
          {t.metrics.map((metric) => (
            <div key={metric.label} className="p-6 sm:p-8 text-center bg-background">
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-accent leading-none mb-3">
                {metric.value}
              </p>
              <p className="text-sm sm:text-base text-foreground leading-tight">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {t.overview.map((item) => (
              <div key={item.label} className="border border-border bg-background p-5">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">{item.label}</p>
                <p className="text-base leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-border bg-muted/10 p-7">
              <h2 className="font-display text-3xl font-medium mb-4">{t.problemTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.problem}</p>
            </div>
            <div className="border border-border bg-muted/10 p-7">
              <h2 className="font-display text-3xl font-medium mb-4">{t.goalTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.goal}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 xl:px-24 bg-muted/10 border-y border-border">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between gap-6 mb-8">
            <h2 className="font-display text-4xl sm:text-5xl font-medium">{t.screenshotsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.screenshots.map((screenshot) => (
              <figure key={screenshot.src} className="border border-border bg-background overflow-hidden">
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  <img
                    src={screenshot.src}
                    alt={screenshot.title}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <figcaption className="p-5">
                  <p className="font-display text-2xl font-medium mb-2">{screenshot.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{screenshot.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-5">{t.workflowTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {t.workflow.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="border border-border bg-background p-6 hover:border-accent/50 transition-colors">
                  <Icon className="w-6 h-6 text-accent mb-5" />
                  <h3 className="font-display text-2xl font-medium mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 xl:px-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-5">{t.processTitle}</p>
            <div className="space-y-4">
              {t.process.map((item, index) => (
                <div key={item.title} className="border border-border bg-muted/10 p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent font-display font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-2xl font-medium">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-5">{t.technicalTitle}</p>
            <div className="border border-border bg-background p-6">
              <ul className="space-y-4">
                {t.technical.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24 bg-foreground text-background">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-background/50 text-sm tracking-widest uppercase mb-5">{t.impactTitle}</p>
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              {t.impact}
            </p>
          </div>
          <div className="lg:pt-12">
            <p className="text-background/50 text-sm tracking-widest uppercase mb-5">{t.learningTitle}</p>
            <p className="text-background/75 text-xl leading-relaxed border-l-2 border-background/30 pl-5">
              {t.learning}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
