export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  tools: string[];
  results: string;
  githubUrl?: string;
  liveUrl?: string;
  previewImage?: string;
  previewSlideshow?: Array<{ src: string; caption: string }>;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "NexusData AI",
    description: "AI-powered data intelligence platform that transforms raw files into actionable dashboards, business insights, and predictive analytics for enterprise operations.",
    tags: ["AI", "Data Pipeline", "Enterprise"],
    tools: ["React", "TypeScript", "Python", "GROQ LPU"],
    results: "Processing <12ms latency, 99.9% uptime",
    githubUrl: "https://github.com/tonysoprano33/nexusdata",
    liveUrl: "https://nexusdata-gamma.vercel.app/",
    previewSlideshow: [
      {
        src: "/projects/nexus/dashboard.png",
        caption: "Dashboard: Main interface with data visualization and navigation"
      },
      {
        src: "/projects/nexus/data-upload.png",
        caption: "Data Upload: Interface for importing CSV and Excel files"
      },
      {
        src: "/projects/nexus/chat-interface.png",
        caption: "Chat Interface: AI-powered conversational data analysis"
      },
      {
        src: "/projects/nexus/insights.png",
        caption: "Insights: Automated business insights and analytics dashboard"
      }
    ]
  },
  {
    id: "2",
    title: "Spirometry Report Generator",
    description: "Desktop application for generating medical spirometry reports. Uses CustomTkinter for the UI and generates Word documents with patient data. Includes Excel batch loading for processing multiple patients at once.",
    tags: ["Healthcare", "Desktop App", "Document Generation"],
    tools: ["Python", "CustomTkinter", "python-docx", "pandas", "openpyxl"],
    results: "Reports reduced from 15+ min to <30 seconds",
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
    id: "3",
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
