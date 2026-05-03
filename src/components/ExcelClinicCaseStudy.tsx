"use client";

import { BarChart3, Calculator, CalendarDays, FileSpreadsheet, Printer, Users } from "lucide-react";
import CaseStudyTemplate from "./CaseStudyTemplate";

const githubUrl = "https://github.com/tonysoprano33/Excel-Clinica";

const copy = {
  en: {
    back: "Back to portfolio",
    eyebrow: "Production Case Study",
    title: "Excel clinic system sold and used by two secretaries.",
    intro:
      "A production Excel system for a medical clinic that organizes appointments, separates morning and afternoon shifts, tracks payments and expenses, and gives the team daily and monthly visibility.",
    primaryCta: "View GitHub",
    secondaryCta: "Contact me",
    githubUrl,
    metrics: [
      { value: "2", label: "active secretaries" },
      { value: "3k+", label: "annual appointments" },
      { value: "60%", label: "less tracking time" },
      { value: "Excel", label: "production tool" },
    ],
    overview: [
      { label: "Role", value: "Business analysis, solution design, Excel build, deployment and user handoff" },
      { label: "Users", value: "2 medical secretaries" },
      { label: "Status", value: "Sold and deployed in clinic workflow" },
      { label: "Stack", value: "Excel, advanced formulas, conditional formatting, data validation" },
    ],
    problemTitle: "The problem",
    problem:
      "The clinic needed a clearer way to manage appointments and financial tracking. Manual methods made it harder to see daily performance, calculate balances and keep morning and afternoon shifts organized.",
    goalTitle: "The goal",
    goal:
      "Create a practical Excel-based system that could be adopted quickly by secretaries, reduce calculation errors, organize appointments by shift and provide daily, monthly and annual summaries.",
    screenshotsTitle: "Product views",
    screenshots: [
      { src: "/projects/excel-clinica/03-vista-dia.png", title: "Monthly overview", caption: "Daily appointment and finance totals aggregated into a month-level view." },
      { src: "/projects/excel-clinica/01-menu-principal.png", title: "Daily appointment sheet", caption: "Morning and afternoon shifts with payments, expenses and automatic balances." },
      { src: "/projects/excel-clinica/02-vista-mes.png", title: "Day totals", caption: "Automatic totals for cash, transfers, consultations, expenses and balance." },
      { src: "/projects/excel-clinica/04-turno-manana.png", title: "Statistics dashboard", caption: "Annual performance metrics and clinic overview." },
      { src: "/projects/excel-clinica/06-estadisticas.png", title: "Month navigation", caption: "Navigation across years, months, statistics and usage notes." },
      { src: "/projects/excel-clinica/05-turno-tarde.png", title: "Configuration", caption: "Clinic data, secretary names, contact fields and color guide." },
    ],
    workflowTitle: "What the system does",
    workflow: [
      { title: "Appointment tracking", description: "Organizes daily patients in separate morning and afternoon shift sections.", icon: CalendarDays },
      { title: "Financial control", description: "Tracks cash, transfers, consultation prices, expenses and daily balances.", icon: Calculator },
      { title: "Monthly summaries", description: "Aggregates daily sheets into month-level totals and quick navigation.", icon: FileSpreadsheet },
      { title: "Statistics dashboard", description: "Shows yearly clinic metrics and performance overview.", icon: BarChart3 },
      { title: "Secretary workflow", description: "Keeps the interface familiar because the team already works in Excel.", icon: Users },
      { title: "Printable records", description: "Uses structured sheets that can be printed and archived when needed.", icon: Printer },
    ],
    processTitle: "How I built it",
    process: [
      {
        title: "Observed the clinic workflow",
        description:
          "The system came from seeing how secretaries handled appointment and financial tracking in daily work.",
      },
      {
        title: "Chose Excel intentionally",
        description:
          "Instead of forcing a new platform, I built inside a tool the team already understood, reducing adoption friction.",
      },
      {
        title: "Delivered a usable system",
        description:
          "The final workbook was sold, deployed and handed off to the clinic with a structure the secretaries could use every day.",
      },
    ],
    technicalTitle: "Technical decisions",
    technical: [
      "Separate daily sheets with morning and afternoon shift structures.",
      "Cross-sheet formulas to aggregate daily totals into monthly summaries.",
      "IF, AND, IFERROR and SUM logic to handle blanks and prevent calculation errors.",
      "Data validation for specialties and consistent input options.",
      "Conditional formatting and visual sections to make scanning easier for secretaries.",
      "Print-oriented layouts for daily appointment and financial records.",
    ],
    impactTitle: "Impact",
    impact:
      "The system is used by two secretaries in a real clinic workflow. It reduced appointment tracking time, removed manual balance calculations and gave the clinic clearer visibility into appointments and finances.",
    learningTitle: "Why this project matters",
    learning:
      "This project shows that useful software is not always a full web app. Sometimes the right solution is a well-designed spreadsheet that fits the user's context and gets adopted quickly.",
  },
  es: {
    back: "Volver al portfolio",
    eyebrow: "Case study en producción",
    title: "Sistema Excel para clínica vendido y usado por dos secretarias.",
    intro:
      "Un sistema Excel en producción para una clínica médica que organiza turnos, separa mañana y tarde, registra pagos y egresos, y da visibilidad diaria y mensual al equipo.",
    primaryCta: "Ver GitHub",
    secondaryCta: "Contactarme",
    githubUrl,
    metrics: [
      { value: "2", label: "secretarias activas" },
      { value: "3k+", label: "turnos anuales" },
      { value: "60%", label: "menos tiempo de seguimiento" },
      { value: "Excel", label: "herramienta en uso" },
    ],
    overview: [
      { label: "Rol", value: "Análisis del negocio, diseño de solución, construcción en Excel, deploy y entrega a usuarios" },
      { label: "Usuarios", value: "2 secretarias médicas" },
      { label: "Estado", value: "Vendido y desplegado en flujo de clínica" },
      { label: "Stack", value: "Excel, fórmulas avanzadas, formato condicional, validación de datos" },
    ],
    problemTitle: "El problema",
    problem:
      "La clínica necesitaba una forma más clara de gestionar turnos y seguimiento financiero. Los métodos manuales dificultaban ver el rendimiento diario, calcular balances y mantener ordenados los turnos de mañana y tarde.",
    goalTitle: "El objetivo",
    goal:
      "Crear un sistema basado en Excel que las secretarias pudieran adoptar rápido, redujera errores de cálculo, organizara los turnos por franja horaria y mostrara resúmenes diarios, mensuales y anuales.",
    screenshotsTitle: "Vistas del producto",
    screenshots: [
      { src: "/projects/excel-clinica/03-vista-dia.png", title: "Vista mensual", caption: "Turnos y totales financieros diarios agregados en una vista mensual." },
      { src: "/projects/excel-clinica/01-menu-principal.png", title: "Hoja diaria de turnos", caption: "Turnos de mañana y tarde con pagos, egresos y balances automáticos." },
      { src: "/projects/excel-clinica/02-vista-mes.png", title: "Totales del día", caption: "Totales automáticos de efectivo, transferencias, consultas, egresos y balance." },
      { src: "/projects/excel-clinica/04-turno-manana.png", title: "Dashboard de estadísticas", caption: "Métricas anuales y resumen general de la clínica." },
      { src: "/projects/excel-clinica/06-estadisticas.png", title: "Navegación mensual", caption: "Acceso a años, meses, estadísticas y notas de uso." },
      { src: "/projects/excel-clinica/05-turno-tarde.png", title: "Configuración", caption: "Datos de clínica, secretarias, contacto y guía de colores." },
    ],
    workflowTitle: "Qué hace el sistema",
    workflow: [
      { title: "Seguimiento de turnos", description: "Organiza pacientes diarios en secciones separadas para mañana y tarde.", icon: CalendarDays },
      { title: "Control financiero", description: "Registra efectivo, transferencias, precio de consulta, egresos y balances diarios.", icon: Calculator },
      { title: "Resúmenes mensuales", description: "Agrega hojas diarias en totales mensuales con navegación rápida.", icon: FileSpreadsheet },
      { title: "Dashboard", description: "Muestra métricas anuales y rendimiento general de la clínica.", icon: BarChart3 },
      { title: "Flujo para secretarias", description: "Mantiene una interfaz familiar porque el equipo ya trabajaba con Excel.", icon: Users },
      { title: "Registros imprimibles", description: "Usa hojas estructuradas que pueden imprimirse y archivarse cuando hace falta.", icon: Printer },
    ],
    processTitle: "Cómo lo construí",
    process: [
      {
        title: "Observé el flujo de la clínica",
        description:
          "El sistema nació de ver cómo las secretarias manejaban turnos y seguimiento financiero en el trabajo diario.",
      },
      {
        title: "Elegí Excel a propósito",
        description:
          "En vez de forzar una plataforma nueva, construí dentro de una herramienta que el equipo ya entendía, reduciendo fricción de adopción.",
      },
      {
        title: "Entregué un sistema usable",
        description:
          "El archivo final fue vendido, desplegado y entregado a la clínica con una estructura que las secretarias podían usar todos los días.",
      },
    ],
    technicalTitle: "Decisiones técnicas",
    technical: [
      "Hojas diarias separadas con estructura de turno mañana y turno tarde.",
      "Fórmulas entre hojas para agregar totales diarios en resúmenes mensuales.",
      "Lógica con IF, AND, IFERROR y SUM para manejar celdas vacías y evitar errores.",
      "Validación de datos para especialidades y opciones consistentes.",
      "Formato condicional y secciones visuales para facilitar lectura rápida.",
      "Diseño orientado a impresión para registros diarios de turnos y finanzas.",
    ],
    impactTitle: "Impacto",
    impact:
      "El sistema es usado por dos secretarias en un flujo real de clínica. Redujo el tiempo de seguimiento de turnos, eliminó cálculos manuales de balance y dio más visibilidad sobre turnos y finanzas.",
    learningTitle: "Por qué este proyecto importa",
    learning:
      "Este proyecto muestra que el software útil no siempre tiene que ser una app web completa. A veces la mejor solución es una planilla bien diseñada que encaja con el contexto del usuario y se adopta rápido.",
  },
} as const;

export default function ExcelClinicCaseStudy() {
  return <CaseStudyTemplate copy={copy} />;
}
