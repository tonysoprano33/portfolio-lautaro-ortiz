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
  previewSlideshow?: string[];
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
      "/projects/01-interfaz-principal.png",
      "/projects/02-formulario-completo.png",
      "/projects/03-generacion-exitosa.png"
    ] as string[]
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
      "/projects/turnos/Captura de pantalla 2026-04-21 145859.png",
      "/projects/turnos/Captura de pantalla 2026-04-21 150013.png",
      "/projects/turnos/Captura de pantalla 2026-04-21 150130.png",
      "/projects/turnos/Captura de pantalla 2026-04-21 150212.png"
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
