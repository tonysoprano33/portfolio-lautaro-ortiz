"use client";

import { Activity, FileText, FolderOpen, HeartPulse, ListChecks, Upload } from "lucide-react";
import CaseStudyTemplate from "./CaseStudyTemplate";

const githubUrl = "https://github.com/tonysoprano33/espiro-informes";

const copy = {
  en: {
    back: "Back to portfolio",
    eyebrow: "Automation Case Study",
    title: "Spirometry report generator that turns hours of work into minutes.",
    intro:
      "A desktop app I use in my own healthcare workflow to load patient data, validate fields, select respiratory patterns, and generate structured Word reports much faster.",
    primaryCta: "View GitHub",
    secondaryCta: "Contact me",
    githubUrl,
    metrics: [
      { value: "300+", label: "reports generated" },
      { value: "min", label: "report turnaround" },
      { value: "Word", label: "output format" },
      { value: "Excel", label: "batch loading" },
    ],
    overview: [
      { label: "Role", value: "Problem analysis, Python development, UI, document automation and testing in real use" },
      { label: "Context", value: "Healthcare workflow for spirometry report generation" },
      { label: "Status", value: "Used in my own work" },
      { label: "Stack", value: "Python, CustomTkinter, python-docx, pandas, openpyxl" },
    ],
    problemTitle: "The problem",
    problem:
      "Spirometry reporting involved repetitive manual work: copying patient data, selecting clinical patterns, writing similar report structures, organizing output files and preparing documents for delivery.",
    goalTitle: "The goal",
    goal:
      "Build a focused desktop tool that reduces repetitive typing, standardizes the report format, supports batch loading from Excel, and makes report generation fast enough for daily clinical work.",
    screenshotsTitle: "Product views",
    screenshots: [
      { src: "/projects/01-interfaz-principal.png", title: "Main interface", caption: "Patient list, search and a desktop workflow designed for fast report work." },
      { src: "/projects/02-formulario-completo.png", title: "Report form", caption: "Patient data, respiratory pattern, bronchodilator result and optional test information." },
      { src: "/projects/03-generacion-exitosa.png", title: "Generated report", caption: "Confirmation flow after creating the medical document." },
    ],
    workflowTitle: "What the system does",
    workflow: [
      { title: "Patient data", description: "Captures patient name, ID, referring physician and relevant values for the report.", icon: FileText },
      { title: "Clinical options", description: "Supports normal, obstructive, restrictive and mixed respiratory patterns.", icon: HeartPulse },
      { title: "Bronchodilator test", description: "Allows marking positive bronchodilator response and adding it to the final document.", icon: Activity },
      { title: "Excel batch loading", description: "Loads patient batches from spreadsheets to avoid repetitive manual entry.", icon: Upload },
      { title: "Report generation", description: "Creates structured Word documents in organized date folders.", icon: FolderOpen },
      { title: "Workflow consistency", description: "Standardizes report format and reduces omissions in repetitive document work.", icon: ListChecks },
    ],
    processTitle: "How I built it",
    process: [
      {
        title: "Started from my own workflow",
        description:
          "I built the tool around the exact repetitive steps I was doing while preparing spirometry reports.",
      },
      {
        title: "Turned repeated text into structured logic",
        description:
          "Patterns, options and patient data became inputs that generate a consistent Word document instead of being rewritten manually.",
      },
      {
        title: "Improved it through use",
        description:
          "After generating hundreds of reports, the app became faster and more practical for the real routine.",
      },
    ],
    technicalTitle: "Technical decisions",
    technical: [
      "Python desktop app with CustomTkinter for a simple local workflow.",
      "python-docx for generating editable Word reports instead of static screenshots or PDFs.",
      "pandas and openpyxl for Excel batch loading and spreadsheet processing.",
      "Organized output folders by date to keep generated reports easy to find.",
      "UI designed for quick data entry and readable fields during repetitive work.",
      "Report logic separated into structured inputs: patient data, clinical pattern, optional tests and output generation.",
    ],
    impactTitle: "Impact",
    impact:
      "I have generated more than 300 reports with this tool. It reduced a repetitive task from hours to minutes and made the workflow more consistent in my own healthcare work.",
    learningTitle: "Why this project matters",
    learning:
      "This project shows that I do not only build portfolio demos. I also build small, useful tools that solve my own real work problems and survive repeated daily use.",
  },
  es: {
    back: "Volver al portfolio",
    eyebrow: "Case study de automatización",
    title: "Generador de informes de espirometría que pasa horas de trabajo a minutos.",
    intro:
      "Una app de escritorio que uso en mi propio flujo de salud para cargar datos de pacientes, validar campos, elegir patrones respiratorios y generar informes Word estructurados mucho más rápido.",
    primaryCta: "Ver GitHub",
    secondaryCta: "Contactarme",
    githubUrl,
    metrics: [
      { value: "300+", label: "informes generados" },
      { value: "min", label: "tiempo de informe" },
      { value: "Word", label: "formato de salida" },
      { value: "Excel", label: "carga por lotes" },
    ],
    overview: [
      { label: "Rol", value: "Análisis del problema, desarrollo Python, UI, automatización documental y prueba en uso real" },
      { label: "Contexto", value: "Flujo de salud para generación de informes de espirometría" },
      { label: "Estado", value: "Usado en mi propio trabajo" },
      { label: "Stack", value: "Python, CustomTkinter, python-docx, pandas, openpyxl" },
    ],
    problemTitle: "El problema",
    problem:
      "La generación de informes de espirometría tenía mucho trabajo manual repetitivo: copiar datos del paciente, elegir patrón clínico, escribir estructuras similares, organizar archivos de salida y preparar documentos para entregar.",
    goalTitle: "El objetivo",
    goal:
      "Construir una herramienta de escritorio enfocada que reduzca tipeo repetitivo, estandarice el formato, permita cargar lotes desde Excel y haga la generación de informes lo bastante rápida para el trabajo diario.",
    screenshotsTitle: "Vistas del producto",
    screenshots: [
      { src: "/projects/01-interfaz-principal.png", title: "Interfaz principal", caption: "Lista de pacientes, búsqueda y flujo de escritorio pensado para trabajar rápido." },
      { src: "/projects/02-formulario-completo.png", title: "Formulario del informe", caption: "Datos del paciente, patrón respiratorio, broncodilatador y pruebas opcionales." },
      { src: "/projects/03-generacion-exitosa.png", title: "Informe generado", caption: "Confirmación después de crear el documento médico." },
    ],
    workflowTitle: "Qué hace el sistema",
    workflow: [
      { title: "Datos del paciente", description: "Carga nombre, DNI, médico derivante y valores necesarios para el informe.", icon: FileText },
      { title: "Opciones clínicas", description: "Soporta patrones normal, obstructivo, restrictivo y mixto.", icon: HeartPulse },
      { title: "Broncodilatador", description: "Permite marcar respuesta positiva al broncodilatador e incluirla en el documento final.", icon: Activity },
      { title: "Carga desde Excel", description: "Carga lotes de pacientes desde planillas para evitar ingreso manual repetido.", icon: Upload },
      { title: "Generación de informes", description: "Crea documentos Word estructurados en carpetas organizadas por fecha.", icon: FolderOpen },
      { title: "Consistencia", description: "Estandariza el formato del informe y reduce omisiones en una tarea repetitiva.", icon: ListChecks },
    ],
    processTitle: "Cómo lo construí",
    process: [
      {
        title: "Partí de mi propio flujo",
        description:
          "Construí la herramienta alrededor de los pasos repetitivos que hacía al preparar informes de espirometría.",
      },
      {
        title: "Convertí texto repetido en lógica",
        description:
          "Patrones, opciones y datos del paciente pasaron a ser inputs que generan un Word consistente en vez de reescribirse a mano.",
      },
      {
        title: "La mejoré usándola",
        description:
          "Después de generar cientos de informes, la app se volvió más rápida y práctica para la rutina real.",
      },
    ],
    technicalTitle: "Decisiones técnicas",
    technical: [
      "App de escritorio en Python con CustomTkinter para un flujo local simple.",
      "python-docx para generar informes Word editables, no documentos cerrados.",
      "pandas y openpyxl para carga por lotes desde Excel y procesamiento de planillas.",
      "Carpetas de salida organizadas por fecha para encontrar informes rápidamente.",
      "UI pensada para entrada rápida de datos y campos legibles durante trabajo repetitivo.",
      "Lógica de informe separada en inputs: datos del paciente, patrón clínico, pruebas opcionales y generación.",
    ],
    impactTitle: "Impacto",
    impact:
      "Ya generé más de 300 informes con esta herramienta. Redujo una tarea repetitiva de horas a minutos y volvió el flujo más consistente en mi propio trabajo de salud.",
    learningTitle: "Por qué este proyecto importa",
    learning:
      "Este proyecto muestra que no solo construyo demos de portfolio. También construyo herramientas chicas y útiles que resuelven problemas reales de mi trabajo y sobreviven al uso repetido.",
  },
} as const;

export default function SpirometryCaseStudy() {
  return <CaseStudyTemplate copy={copy} />;
}
