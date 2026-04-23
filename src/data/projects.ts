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
    title: "Respiratory Report Generator",
    description: "Automated medical report generation system for respiratory clinics. Processes patient data and generates clinical reports in under 30 seconds, replacing 15+ minute manual workflows.",
    tags: ["Healthcare", "Automation", "PDF Generation"],
    tools: ["Python", "FastAPI", "PostgreSQL", "Docker"],
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
    id: "2",
    title: "Clinic Management Excel System",
    description: "Custom Excel solution with VBA automation sold to dental clinic. Manages patient records, appointment tracking, and financial reporting. Used daily by clinic staff.",
    tags: ["Excel", "VBA", "Automation", "Sold Product"],
    tools: ["Excel", "VBA Macros", "Power Query", "Data Validation"],
    results: "Sold to clinic, used by 3+ staff members daily",
    githubUrl: undefined,
    liveUrl: undefined,
    previewImage: "/projects/excel-clinic-demo.png"
  },
  {
    id: "3",
    title: "NexusData AI",
    description: "AI-powered data intelligence platform that transforms raw files into actionable dashboards, business insights, and predictive analytics for enterprise operations.",
    tags: ["AI", "Data Pipeline", "Enterprise"],
    tools: ["React", "TypeScript", "Python", "GROQ LPU"],
    results: "Processing <12ms latency, 99.9% uptime",
    githubUrl: "https://github.com/tonysoprano33/nexusdata",
    liveUrl: "https://nexusdata-gamma.vercel.app/"
  }
];
