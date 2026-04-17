export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  tools: string[];
  results: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Análisis Predictivo de Ventas",
    description: "Modelo de machine learning para predecir tendencias de ventas trimestrales utilizando series temporales y regresión. Implementación de pipeline ETL automatizado para procesar datos de múltiples fuentes.",
    tags: ["Machine Learning", "Time Series", "Python"],
    tools: ["Python", "Scikit-learn", "Pandas", "PostgreSQL", "Tableau"],
    results: "Reducción del 25% en errores de forecast",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "2",
    title: "Dashboard de KPIs Operativos",
    description: "Desarrollo de dashboard interactivo en tiempo real para monitoreo de métricas clave de rendimiento. Integración con APIs internas y automatización de reportes semanales.",
    tags: ["Dashboard", "ETL", "Data Visualization"],
    tools: ["Power BI", "SQL Server", "Python", "REST APIs"],
    results: "Ahorro de 20 horas semanales en reporting",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "3",
    title: "NexusData AI",
    description: "Plataforma de inteligencia de datos empresarial con pipeline neural para limpieza de datos de alta fidelidad y extracción de insights estratégicos. Arquitectura con procesamiento en tiempo real y encriptación E2E.",
    tags: ["AI", "Data Pipeline", "Enterprise"],
    tools: ["GROQ LPU", "React", "TypeScript", "E2E Encryption"],
    results: "Procesamiento <12ms latencia, 99.9% uptime",
    githubUrl: "https://github.com/tonysoprano33/nexusdata",
    liveUrl: "https://nexusdata-gamma.vercel.app/"
  }
];
