export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  tools: string[];
  results: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
  previewImage?: string;
  previewSlideshow?: Array<{ src: string; caption: string }>;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Dental Appointment & Patient System",
    description: "Production PWA for a private dental clinic. It digitizes appointments, patient profiles, payments, insurance, odontograms, and arrival alerts.",
    tags: ["Healthcare", "PWA", "Operations", "Production"],
    tools: ["Next.js", "Supabase", "TypeScript", "Telegram Bot API", "PWA"],
    results: "100+ registered patients, daily use by doctor and 2 secretaries, anonymized evidence and reference available upon request",
    githubUrl: "https://github.com/tonysoprano33/consultorio-dental",
    liveUrl: undefined,
    caseStudyUrl: "/case-studies/agenda",
    previewSlideshow: [
      {
        src: "/projects/turnos/captured/02-panel-control.png",
        caption: "Control panel: appointment metrics, patient activity, and monthly operations",
      },
      {
        src: "/projects/turnos/captured/03-calendario-general.png",
        caption: "Calendar: monthly schedule, workdays, and occupied days",
      },
      {
        src: "/projects/turnos/captured/05-lista-pacientes-blur.png",
        caption: "Patient list: searchable records, coverage, profile access, and clinical history",
      },
      {
        src: "/projects/turnos/captured/06-perfil-paciente-blur.png",
        caption: "Patient profile: visits, payments, odontogram, images, and clinical context",
      },
      {
        src: "/projects/turnos/captured/07-historia-clinica-blur.png",
        caption: "Clinical history: structured medical fields ready to print or save",
      },
      {
        src: "/projects/turnos/captured/10-config-alertas-blur.png",
        caption: "Alerts: push, email, and Telegram configuration for arrival notifications",
      },
      {
        src: "/projects/turnos/captured/12-perfil-odontograma-blur.png",
        caption: "Odontogram: dental state stored inside the patient profile",
      },
    ],
  },
  {
    id: "2",
    title: "Job Application Copilot",
    description: "Responsible job search assistant that reads a CV, searches allowed job sources, ranks opportunities, explains fit and stores applications in a tracker.",
    tags: ["Internal Tools", "Automation", "ATS", "Productivity"],
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "pdfjs-dist"],
    results: "CV parsing, ATS/API search, local fit scoring, red flags, outreach drafts and CSV tracker",
    githubUrl: "https://github.com/tonysoprano33/ats-searcher",
    liveUrl: undefined,
    caseStudyUrl: "/case-studies/job-copilot",
    previewSlideshow: [
      {
        src: "/projects/job-copilot/workspace-hero.png",
        caption: "Workspace: market snapshot, top 10 ranking, fit analysis and tracker panel",
      },
      {
        src: "/projects/job-copilot/onboarding-hero.png",
        caption: "Onboarding: manual profile setup or PDF CV import before searching",
      },
      {
        src: "/projects/job-copilot/profile-editor-hero.png",
        caption: "Profile editor: extracted CV fields, preferences, locations, skills and languages",
      },
      {
        src: "/projects/job-copilot/dark-workspace-hero.png",
        caption: "Dark workspace: ranked jobs, risk signals, source trust and application strategy",
      },
    ],
  },
  {
    id: "3",
    title: "Clinical Cover Sheet Generator",
    description: "Production intake and print workflow for a respiratory clinic. Secretaries fill patient data, select insurance and referring doctors, then print or export the cover sheet in seconds.",
    tags: ["Healthcare", "Automation", "Operations", "Production"],
    tools: ["Vite", "TypeScript", "jsPDF", "docx", "Vercel"],
    results: "Daily use by 2 clinic secretaries, faster intake-to-print flow, printable PDF output and editable Word export",
    githubUrl: "https://github.com/tonysoprano33/auto-form-clinical",
    liveUrl: "https://auto-form-clinical.vercel.app",
    previewSlideshow: [
      {
        src: "/projects/clinical-cover-generator/main.png",
        caption: "Main workflow: wide form, live preview, dynamic insurance and doctor suggestions, and one-click print/export",
      },
    ],
  },
  {
    id: "4",
    title: "Spirometry Report Generator",
    description: "Desktop app I use at work to generate spirometry reports from patient data and create Word documents in minutes.",
    tags: ["Healthcare", "Desktop App", "Document Generation"],
    tools: ["Python", "CustomTkinter", "python-docx", "pandas", "openpyxl"],
    results: "300+ reports generated, reducing work from hours to minutes",
    githubUrl: "https://github.com/tonysoprano33/espiro-informes",
    liveUrl: undefined,
    caseStudyUrl: "/case-studies/espirometria",
    previewSlideshow: [
      {
        src: "/projects/01-interfaz-principal.png",
        caption: "Main dashboard: patient list with quick search and date filters",
      },
      {
        src: "/projects/02-formulario-completo.png",
        caption: "Report form: patient data, respiratory pattern, and clinical options",
      },
      {
        src: "/projects/03-generacion-exitosa.png",
        caption: "Report generation: Word document created and ready for review",
      },
    ],
  },
  {
    id: "5",
    title: "Medical Clinic Management System",
    description: "Production Excel system for clinic appointments and finance, with morning/afternoon shifts, automatic balances, and monthly visibility.",
    tags: ["Excel", "Healthcare", "Financial Tracking", "Sold Product"],
    tools: ["Excel", "Advanced Formulas", "Conditional Formatting", "Data Validation"],
    results: "60% reduction in appointment tracking time, 3,000+ annual appointments managed",
    githubUrl: "https://github.com/tonysoprano33/Excel-Clinica",
    liveUrl: undefined,
    caseStudyUrl: "/case-studies/excel-clinica",
    previewSlideshow: [
      {
        src: "/projects/excel-clinica/03-vista-dia.png",
        caption: "Monthly overview: daily appointment and finance totals in one sheet",
      },
      {
        src: "/projects/excel-clinica/01-menu-principal.png",
        caption: "Daily sheet: morning and afternoon shifts with payments, expenses, and balances",
      },
      {
        src: "/projects/excel-clinica/02-vista-mes.png",
        caption: "Day summary: automatic totals for cash, transfers, consultations, expenses, and balance",
      },
      {
        src: "/projects/excel-clinica/04-turno-manana.png",
        caption: "Statistics dashboard: annual performance metrics and clinic overview",
      },
      {
        src: "/projects/excel-clinica/06-estadisticas.png",
        caption: "Month menu: navigation across years, months, statistics, and usage notes",
      },
      {
        src: "/projects/excel-clinica/05-turno-tarde.png",
        caption: "Configuration: clinic data, secretary names, contact fields, and color guide",
      },
    ],
  },
  {
    id: "6",
    title: "NexusData AI",
    description: "AI-assisted workflow for cleaning CSV, Excel, or JSON files, checking data quality, exploring insights, and exporting reports.",
    tags: ["AI", "Data Analysis", "Automation"],
    tools: ["Next.js", "TypeScript", "FastAPI", "Python", "Pandas"],
    results: "One-click demo: upload, clean, analyze, explain, and export",
    githubUrl: "https://github.com/tonysoprano33/nexusdata",
    liveUrl: "https://nexusdata-ai-dashboard.vercel.app/",
    caseStudyUrl: "https://nexusdata-ai-dashboard.vercel.app/case-study",
    previewSlideshow: [
      {
        src: "/projects/nexus/dashboard.png",
        caption: "Dashboard: executive overview, quality score, charts, and recommendations",
      },
      {
        src: "/projects/nexus/data-upload.png",
        caption: "Data Upload: import CSV, Excel, or JSON, or run the prepared demo dataset",
      },
      {
        src: "/projects/nexus/chat-interface.png",
        caption: "Dataset chat: ask business questions about the analyzed file",
      },
      {
        src: "/projects/nexus/insights.png",
        caption: "Insights: cleaning log, raw vs cleaned comparison, and analyst notes",
      },
    ],
  },
];
