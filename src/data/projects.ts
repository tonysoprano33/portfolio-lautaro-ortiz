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
    id: "0",
    title: "Clinica Espiro - Respiratory Clinic Workflow",
    description: "Operational clinic system for respiratory studies: patient intake, SO2/FC tracking, physician review, automatic printable reports, calendar, statistics, and patient history.",
    tags: ["Healthcare", "Automation", "Reports", "Operations", "Production"],
    tools: ["Django", "Python", "Supabase", "Vercel", "docx", "PDF"],
    results: "300+ reports generated, clinical data captured once and reused for automatic spirometry/cyclometry reports, calendar, statistics, and patient history.",
    githubUrl: "https://github.com/tonysoprano33/Clinica-automatizador-espiro",
    liveUrl: undefined,
    caseStudyUrl: "/case-studies/clinica-espiro",
    previewSlideshow: [
      {
        src: "/projects/espiro/01-intake-dashboard.png",
        caption: "Daily intake: add patients, choose study type and coverage, record SO2/FC, and generate the report from captured data",
      },
      {
        src: "/projects/espiro/02-generated-report.png",
        caption: "Automatic print output: the report changes by study type, coverage, captured values, and physician-reviewed result",
      },
      {
        src: "/projects/espiro/03-calendar.png",
        caption: "Calendar: loaded patients by day, quick review, and edit flow when reception needs to correct data",
      },
      {
        src: "/projects/espiro/04-statistics.png",
        caption: "Statistics: monthly operation, coverage mix, pending reports, clinical averages, and patient demographics",
      },
      {
        src: "/projects/espiro/05-patient-database.png",
        caption: "Patient database: search, medical history, previous reports, and spirometry results in one place",
      },
      {
        src: "/projects/espiro/06-medical-review.png",
        caption: "Doctor review: the pulmonologist opens the spirometry file, compares the automatic suggestion, chooses the final result, and saves it for report generation",
      },
    ],
  },
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
        src: "/projects/clinical-cover-generator/01-dashboard.png",
        caption: "Main workflow: wide form, live preview, dynamic insurance and doctor suggestions, and one-click print/export",
      },
      {
        src: "/projects/clinical-cover-generator/02-form-filled.png",
        caption: "Filled intake form: patient data, insurance, medical referral, and print-ready cover sheet in the same screen",
      },
      {
        src: "/projects/clinical-cover-generator/03-lists-modal.png",
        caption: "Editable lists: secretaries can maintain insurance and referring doctor options without touching code",
      },
      {
        src: "/projects/clinical-cover-generator/04-word-export-ready.png",
        caption: "Export flow: generate the editable Word version when a last-minute correction is needed before delivery",
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
  {
    id: "7",
    title: "NexoIO Industrial Monitoring",
    description: "Offline-first industrial monitoring system for local plants: device ingestion, current values, history, grouped equipment views, alarms, diagnostics, and backup-ready operation.",
    tags: ["Industry 4.0", "Offline-first", "Industrial Monitoring", "Local Systems"],
    tools: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker Compose", "HTTP REST"],
    results: "Working local demo with simulated edge data, device authentication, historical traceability, alarms, diagnostics, and no cloud dependency",
    caseStudyUrl: "/case-studies/nexoio",
    previewSlideshow: [
      {
        src: "/projects/nexoio-dashboard.png",
        caption: "Operational dashboard: local server health, device status, fresh values, groups, and active alarms",
      },
      {
        src: "/projects/nexoio-industrial.png",
        caption: "Industrial visualization: values grouped by equipment and area with state badges and mini trends",
      },
      {
        src: "/projects/nexoio-system.png",
        caption: "System diagnostics: database, ingestion, freshness, devices, accepted values, duplicates, and recovery",
      },
      {
        src: "/projects/nexoio-comparator.png",
        caption: "Local comparison view: compare equipment variables, review 60 historical records, and export the selection as CSV",
      },
      {
        src: "/projects/nexoio-industrial-detail.png",
        caption: "Equipment detail: current values, range chart, mini trend, and historical records for Motor 1",
      },
      {
        src: "/projects/nexoio-reports.png",
        caption: "Offline reporting: local historical data, variable filters, record counts, and CSV export workflow",
      },
    ],
  },
];
