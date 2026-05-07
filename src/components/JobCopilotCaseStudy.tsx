"use client";

import {
  FileText,
  Gauge,
  ListChecks,
  MessageSquareText,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import CaseStudyTemplate from "./CaseStudyTemplate";

const githubUrl = "https://github.com/tonysoprano33/ats-searcher";

const copy = {
  en: {
    back: "Back to portfolio",
    eyebrow: "Product Case Study",
    title: "A responsible job search assistant for junior candidates.",
    intro:
      "A web app that turns a CV and search preferences into a ranked list of job opportunities, with fit explanations, red flags, suggested messages, a local tracker, and explicit limits against auto-apply or platform scraping.",
    primaryCta: "View GitHub",
    secondaryCta: "Contact me",
    githubUrl,
    metrics: [
      { value: "3", label: "allowed job sources" },
      { value: "PDF", label: "CV parser" },
      { value: "Top 10", label: "ranked opportunities" },
      { value: "CSV", label: "tracker export" },
    ],
    overview: [
      { label: "Role", value: "Product design, frontend, parsing logic, scoring heuristics, API integration and UX" },
      { label: "Users", value: "Junior, trainee and early-career candidates" },
      { label: "Status", value: "MVP ready, local persistence and real source integrations" },
      { label: "Stack", value: "Next.js 16, React 19, TypeScript, Tailwind CSS v4, pdfjs-dist, localStorage" },
    ],
    problemTitle: "The problem",
    problem:
      "Job search is repetitive and noisy, especially for junior candidates. Many offers look relevant but hide seniority mismatches, weak remote fit, low source trust or vague requirements. Applying blindly wastes time and creates a messy follow-up process.",
    goalTitle: "The goal",
    goal:
      "Build an ethical assistant that helps candidates decide where to apply, not a bot that applies for them. The product should read a profile, search permitted sources, rank opportunities, explain the score and keep the application process organized.",
    screenshotsTitle: "Product views",
    screenshots: [
      { src: "/projects/job-copilot/workspace-crop.png", title: "Ranking workspace", caption: "Market snapshot, top 10 ranking, selected job analysis, red flags, message strategy and tracker tabs." },
      { src: "/projects/job-copilot/onboarding-crop.png", title: "Guided onboarding", caption: "The app asks for profile basics before searching, or lets the user import a PDF CV." },
      { src: "/projects/job-copilot/profile-editor-crop.png", title: "Profile editor", caption: "Editable extracted fields: role, seniority, locations, technologies, languages, preferences and CV text." },
      { src: "/projects/job-copilot/dark-workspace-crop.png", title: "Dark mode workspace", caption: "Ranked jobs with fit score, risk signals, source trust and application strategy in a dense dashboard." },
    ],
    workflowTitle: "What the system does",
    workflow: [
      { title: "CV import", description: "Reads a dropped PDF resume client-side and extracts candidate signals for ranking.", icon: FileText },
      { title: "Search rules", description: "Lets the user configure role, seniority, location, work mode, technologies and search mode.", icon: SlidersHorizontal },
      { title: "Allowed sources", description: "Queries Greenhouse boards, Remotive and Adzuna instead of scraping protected platforms.", icon: Search },
      { title: "Fit scoring", description: "Scores opportunities using skills, seniority, remote fit, clarity, red flags and source trust.", icon: Gauge },
      { title: "Message strategy", description: "Suggests outreach angles and short messages based on the selected opportunity.", icon: MessageSquareText },
      { title: "Tracker", description: "Saves jobs locally, supports notes/statuses and exports the application list to CSV.", icon: ListChecks },
    ],
    processTitle: "How I built it",
    process: [
      {
        title: "Defined ethical constraints first",
        description:
          "The app intentionally avoids LinkedIn scraping, browser automation, auto-apply flows and fake engagement behavior.",
      },
      {
        title: "Built the profile layer",
        description:
          "I used pdfjs-dist to reconstruct PDF resume lines and extract profile data before the search starts.",
      },
      {
        title: "Made ranking explainable",
        description:
          "Instead of returning a black-box score, each job shows fit reasons, risk signals, source trust and a recommended application strategy.",
      },
    ],
    technicalTitle: "Technical decisions",
    technical: [
      "Next.js App Router with a dashboard-first interface instead of a marketing landing page.",
      "Client-side PDF parsing with pdfjs-dist, reconstructing lines from coordinates before extracting fields.",
      "Backend route for permitted job sources: Greenhouse curated boards, Remotive and Adzuna.",
      "Shared normalized job shape with deduplication, relevance filtering and source trust scoring.",
      "Local scoring layer for skills, seniority fit, remote/hybrid match, red flags and company clarity.",
      "localStorage persistence behind a small adapter so Supabase or another database can be added later.",
    ],
    impactTitle: "Impact",
    impact:
      "The project turns job search from a scattered manual process into a ranked, explainable workflow. It reduces low-signal browsing, helps candidates prioritize better matches and keeps application follow-up measurable.",
    learningTitle: "Why this project matters",
    learning:
      "It fits my portfolio because it solves a real tedious workflow with software, data and responsible automation. It also shows product judgment: the app automates decision support without crossing into spammy auto-apply behavior.",
  },
  es: {
    back: "Volver al portfolio",
    eyebrow: "Case study de producto",
    title: "Un asistente responsable de búsqueda laboral para perfiles junior.",
    intro:
      "Una app web que convierte un CV y preferencias de búsqueda en un ranking de oportunidades, con explicación de fit, red flags, mensajes sugeridos, tracker local y límites claros contra auto-apply o scraping de plataformas.",
    primaryCta: "Ver GitHub",
    secondaryCta: "Contactarme",
    githubUrl,
    metrics: [
      { value: "3", label: "fuentes permitidas" },
      { value: "PDF", label: "parser de CV" },
      { value: "Top 10", label: "oportunidades rankeadas" },
      { value: "CSV", label: "export tracker" },
    ],
    overview: [
      { label: "Rol", value: "Diseño de producto, frontend, parsing, scoring, integración de APIs y UX" },
      { label: "Usuarios", value: "Candidatos junior, trainee y perfiles en primeras experiencias" },
      { label: "Estado", value: "MVP listo, persistencia local e integraciones con fuentes reales" },
      { label: "Stack", value: "Next.js 16, React 19, TypeScript, Tailwind CSS v4, pdfjs-dist, localStorage" },
    ],
    problemTitle: "El problema",
    problem:
      "Buscar trabajo es repetitivo y ruidoso, especialmente para perfiles junior. Muchas ofertas parecen relevantes pero esconden seniority incorrecto, modalidad poco clara, baja confianza de fuente o requisitos vagos. Aplicar sin criterio hace perder tiempo y desordena el seguimiento.",
    goalTitle: "El objetivo",
    goal:
      "Construir un asistente ético que ayude a decidir dónde aplicar, no un bot que aplique por la persona. El producto debía leer el perfil, buscar en fuentes permitidas, ordenar oportunidades, explicar el puntaje y organizar el proceso.",
    screenshotsTitle: "Vistas del producto",
    screenshots: [
      { src: "/projects/job-copilot/workspace-crop.png", title: "Workspace de ranking", caption: "Snapshot del mercado, ranking top 10, análisis del empleo seleccionado, red flags, estrategia y tracker." },
      { src: "/projects/job-copilot/onboarding-crop.png", title: "Onboarding guiado", caption: "La app pide datos mínimos del perfil antes de buscar o permite importar un CV en PDF." },
      { src: "/projects/job-copilot/profile-editor-crop.png", title: "Editor de perfil", caption: "Campos extraídos y editables: rol, seniority, ubicaciones, tecnologías, idiomas, preferencias y texto del CV." },
      { src: "/projects/job-copilot/dark-workspace-crop.png", title: "Workspace en dark mode", caption: "Empleos rankeados con fit score, señales de riesgo, confianza de fuente y estrategia de postulación." },
    ],
    workflowTitle: "Qué hace el sistema",
    workflow: [
      { title: "Importación de CV", description: "Lee un CV en PDF desde el cliente y extrae señales del candidato para el ranking.", icon: FileText },
      { title: "Reglas de búsqueda", description: "Permite configurar rol, seniority, ubicación, modalidad, tecnologías y modo de búsqueda.", icon: SlidersHorizontal },
      { title: "Fuentes permitidas", description: "Consulta Greenhouse, Remotive y Adzuna en vez de scrapear plataformas protegidas.", icon: Search },
      { title: "Scoring de fit", description: "Puntúa oportunidades por skills, seniority, remoto/híbrido, claridad, red flags y confianza.", icon: Gauge },
      { title: "Estrategia de mensaje", description: "Sugiere ángulos y mensajes cortos según la oportunidad seleccionada.", icon: MessageSquareText },
      { title: "Tracker", description: "Guarda empleos en local, permite notas/estados y exporta la lista de postulaciones a CSV.", icon: ListChecks },
    ],
    processTitle: "Cómo lo construí",
    process: [
      {
        title: "Definí límites éticos primero",
        description:
          "La app evita scraping de LinkedIn, automatización de navegador, auto-apply y comportamiento artificial.",
      },
      {
        title: "Construí la capa de perfil",
        description:
          "Usé pdfjs-dist para reconstruir líneas del CV desde coordenadas y extraer datos antes de iniciar la búsqueda.",
      },
      {
        title: "Hice explicable el ranking",
        description:
          "En vez de mostrar un puntaje opaco, cada empleo explica razones de fit, riesgos, confianza de fuente y estrategia recomendada.",
      },
    ],
    technicalTitle: "Decisiones técnicas",
    technical: [
      "Next.js App Router con interfaz tipo dashboard, no landing page.",
      "Parsing de PDF en cliente con pdfjs-dist, reconstruyendo líneas desde coordenadas antes de extraer campos.",
      "API route para fuentes permitidas: Greenhouse curado, Remotive y Adzuna.",
      "Modelo normalizado de empleos con deduplicación, filtrado de relevancia y confianza de fuente.",
      "Scoring local por skills, seniority, modalidad, red flags y claridad de empresa.",
      "Persistencia en localStorage detrás de un adapter para poder sumar Supabase u otra base después.",
    ],
    impactTitle: "Impacto",
    impact:
      "El proyecto convierte una búsqueda laboral dispersa en un flujo rankeado y explicable. Reduce navegación de baja señal, ayuda a priorizar mejores oportunidades y ordena el seguimiento de postulaciones.",
    learningTitle: "Por qué este proyecto importa",
    learning:
      "Encaja con mi portfolio porque resuelve un proceso tedioso real con software, datos y automatización responsable. También muestra criterio de producto: automatiza soporte de decisión sin cruzar la línea hacia auto-apply o spam.",
  },
} as const;

export default function JobCopilotCaseStudy() {
  return <CaseStudyTemplate copy={copy} />;
}
