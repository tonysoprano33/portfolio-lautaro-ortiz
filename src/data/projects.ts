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
    title: "Segmentación de Clientes",
    description: "Análisis de clustering para segmentación de base de clientes basado en comportamiento de compra, frecuencia y valor monetario. Identificación de 5 segmentos distintos con estrategias personalizadas.",
    tags: ["Clustering", "RFM Analysis", "Customer Analytics"],
    tools: ["R", "K-means", "ggplot2", "BigQuery"],
    results: "Incremento del 15% en retención de clientes",
    githubUrl: "#"
  },
  {
    id: "4",
    title: "Detección de Anomalías Financieras",
    description: "Sistema de detección de fraudes y anomalías en transacciones financieras utilizando técnicas de detección de outliers y análisis estadístico avanzado.",
    tags: ["Fraud Detection", "Statistics", "Anomaly Detection"],
    tools: ["Python", "PySpark", "AWS", "Elasticsearch"],
    results: "Detección de $2M en transacciones sospechosas",
    githubUrl: "#"
  },
  {
    id: "5",
    title: "Análisis de Sentimiento en Redes Sociales",
    description: "Procesamiento de lenguaje natural para analizar sentimiento de marca en redes sociales. Extracción de insights sobre percepción de clientes y tendencias de mercado.",
    tags: ["NLP", "Sentiment Analysis", "Social Media"],
    tools: ["Python", "NLTK", "Transformers", "MongoDB"],
    results: "Análisis de 1M+ menciones mensuales",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "6",
    title: "Optimización de Inventario",
    description: "Modelo de optimización de stock utilizando análisis de demanda histórica y predicciones. Reducción de costos de almacenamiento y minimización de productos obsoletos.",
    tags: ["Supply Chain", "Optimization", "Forecasting"],
    tools: ["Python", "OR-Tools", "Excel VBA", "MySQL"],
    results: "Reducción del 30% en costos de inventario",
    githubUrl: "#"
  },
  {
    id: "7",
    title: "NexusData AI",
    description: "Plataforma de inteligencia de datos empresarial con pipeline neural para limpieza de datos de alta fidelidad y extracción de insights estratégicos. Arquitectura con procesamiento en tiempo real y encriptación E2E.",
    tags: ["AI", "Data Pipeline", "Enterprise"],
    tools: ["GROQ LPU", "React", "TypeScript", "E2E Encryption"],
    results: "Procesamiento <12ms latencia, 99.9% uptime",
    githubUrl: "https://github.com/tonysoprano33/nexusdata",
    liveUrl: "https://nexusdata-gamma.vercel.app/"
  }
];
