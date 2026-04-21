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
    githubUrl: "#",
    liveUrl: "#",
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
    title: "Dental Office Management System",
    description: "Real-time scheduling, patient management, and analytics platform for dental clinics. Replaced paper workflows with automated notifications, online booking, and operational dashboards.",
    tags: ["SaaS", "Scheduling", "Analytics"],
    tools: ["Next.js", "Supabase", "TypeScript", "PWA"],
    results: "Zero double-bookings, 50+ weekly appointments managed",
    githubUrl: "#",
    liveUrl: "#",
    previewSlideshow: [
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
    ]
  },
  {
    id: "3",
    title: "NexusData AI",
    description: "AI-powered data intelligence platform that transforms raw files into actionable dashboards, business insights, and predictive analytics for enterprise operations.",
    tags: ["AI", "Data Pipeline", "Enterprise"],
    tools: ["React", "TypeScript", "Python", "GROQ LPU"],
    results: "Processing <12ms latency, 99.9% uptime",
    githubUrl: "https://github.com/tonysoprano33/nexusdata",
    liveUrl: "https://nexusdata-ai.vercel.app/"
  }
];
