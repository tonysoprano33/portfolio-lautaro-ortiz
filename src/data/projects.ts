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
    title: "NexusData AI",
    description: "AI-assisted data workflow that turns messy CSV, Excel, or JSON files into cleaned data, quality checks, executive summaries, charts, business recommendations, dataset chat, and downloadable reports.",
    tags: ["AI", "Data Analysis", "Automation"],
    tools: ["Next.js", "TypeScript", "FastAPI", "Python", "Pandas"],
    results: "One-click demo: upload, clean, analyze, explain, and export",
    githubUrl: "https://github.com/tonysoprano33/nexusdata",
    liveUrl: "https://nexusdata-ai-dashboard.vercel.app/",
    caseStudyUrl: "https://nexusdata-ai-dashboard.vercel.app/case-study",
    previewSlideshow: [
      {
        src: "/projects/nexus/dashboard.png",
        caption: "Dashboard: executive overview, quality score, charts, and recommendations"
      },
      {
        src: "/projects/nexus/data-upload.png",
        caption: "Data Upload: import CSV, Excel, or JSON, or run the prepared demo dataset"
      },
      {
        src: "/projects/nexus/chat-interface.png",
        caption: "Dataset chat: ask business questions about the analyzed file"
      },
      {
        src: "/projects/nexus/insights.png",
        caption: "Insights: cleaning log, raw vs cleaned comparison, and analyst notes"
      }
    ]
  },
  {
    id: "2",
    title: "Dental Appointment & Patient System",
    description: "Production PWA used daily by one doctor and two secretaries. It replaced paper notes and manual scheduling with patient profiles, payments, insurance coverage, odontograms, workday calendar configuration, occupied-day tracking, and constant feedback from real users.",
    tags: ["Healthcare", "PWA", "Operations", "Production"],
    tools: ["Next.js", "Supabase", "TypeScript", "Telegram Bot API", "PWA"],
    results: "100+ registered patients, daily use by doctor and 2 secretaries, paper workflow replaced by instant updates",
    githubUrl: "https://github.com/tonysoprano33/consultorio-dental",
    liveUrl: undefined,
    previewSlideshow: [
      {
        src: "/projects/turnos/dashboard-main.png",
        caption: "Dashboard: daily agenda, appointment stats, and operational overview"
      },
      {
        src: "/projects/turnos/patient-list.png",
        caption: "Patient list: search, appointment state, arrival indicators, and records"
      },
      {
        src: "/projects/turnos/patient-form.png",
        caption: "Patient profile: personal data, history, coverage, payments, and clinical notes"
      },
      {
        src: "/projects/turnos/calendar-weekly.png",
        caption: "Calendar: workdays, availability, occupied slots, and scheduling"
      }
    ]
  },
  {
    id: "3",
    title: "Spirometry Report Generator",
    description: "Desktop application I use in my own work to generate medical spirometry reports. It loads patient data, validates fields, and creates Word documents in minutes instead of hours.",
    tags: ["Healthcare", "Desktop App", "Document Generation"],
    tools: ["Python", "CustomTkinter", "python-docx", "pandas", "openpyxl"],
    results: "300+ reports generated, reducing work from hours to minutes",
    githubUrl: "https://github.com/tonysoprano33/espiro-informes",
    liveUrl: undefined,
    previewSlideshow: [
      { 
        src: "/projects/01-interfaz-principal.png", 
        caption: "Dashboard principal: Lista de pacientes con búsqueda instantánea y filtros por fecha" 
      },
      { 
        src: "/projects/02-formulario-completo.png", 
        caption: "Formulario inteligente: Auto-completado de datos médicos con validación en tiempo real" 
      },
      { 
        src: "/projects/03-generacion-exitosa.png", 
        caption: "Generación de reporte: PDF clínico generado en <30 segundos listo para imprimir" 
      }
    ]
  },
  {
    id: "4",
    title: "Medical Clinic Management System",
    description: "Production-ready Excel solution for medical clinic appointment scheduling and financial tracking. Features dual-shift system (morning/afternoon), automated balance calculations, and real-time dashboards. Sold and deployed to clinic with 2 secretaries actively using it daily.",
    tags: ["Excel", "Healthcare", "Financial Tracking", "Sold Product"],
    tools: ["Excel", "Advanced Formulas", "Conditional Formatting", "Data Validation"],
    results: "60% reduction in appointment tracking time, 3,000+ annual appointments managed",
    githubUrl: "https://github.com/tonysoprano33/Excel-Clinica",
    liveUrl: undefined,
    previewSlideshow: [
      {
        src: "/projects/excel-clinica/01-menu-principal.png",
        caption: "Main menu: Central navigation hub with emoji-enhanced interface for quick access"
      },
      {
        src: "/projects/excel-clinica/02-vista-mes.png",
        caption: "Monthly overview: Aggregated daily data with automatic totals and navigation"
      },
      {
        src: "/projects/excel-clinica/03-vista-dia.png",
        caption: "Daily view: Complete appointment records with date header and navigation"
      },
      {
        src: "/projects/excel-clinica/04-turno-manana.png",
        caption: "Morning shift: Patient tracking with payments, prices, and automatic totals"
      },
      {
        src: "/projects/excel-clinica/05-turno-tarde.png",
        caption: "Afternoon shift: Same structure maintaining consistency across the system"
      },
      {
        src: "/projects/excel-clinica/06-estadisticas.png",
        caption: "Statistics dashboard: Annual performance metrics and clinic overview"
      }
    ]
  }
];
