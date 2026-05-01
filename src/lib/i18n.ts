export type Locale = "en" | "es";

export const translations = {
  en: {
    // Hero
    hero: {
      role: "Industrial Engineer",
      headline: "From chaos to operations that run themselves.",
      subheadline: "I build internal tools, automation systems, and data workflows for businesses that can't afford to stop.",
      tagline: "I don't just analyze problems — I build the solution.",
      ctaProjects: "View Projects",
      ctaGitHub: "View GitHub",
    },
    // HeroProject
    heroProject: {
      badge: "Featured Project",
      status: "In Production",
      headline: "Appointment system",
      headlineAccent: "without calls",
      quote: "\"The secretary marks the check-in, the doctor receives the notification. No interruptions, no paper.\"",
      statPatients: "Patients registered",
      statWeekly: "Weekly appointments",
      statDouble: "Double bookings",
      statNotification: "Instant notification",
      statPWA: "Installable app",
      screenshotsTitle: "Application views",
      featureNotifications: "Real-time notifications",
      featureNotificationsDesc: "Telegram + Native Push. The doctor knows without looking at the phone.",
      featureAgenda: "Synced agenda",
      featureAgendaDesc: "Secretary and office always updated. No Excel.",
      featureRecords: "Centralized records",
      featureRecordsDesc: "History, odontogram, evolution. Everything in one place.",
      cta: "View all projects",
      viewCode: "View Code",
    },
    // Projects
    projects: {
      title: "Featured Projects",
      subtitle: "Projects built for real clinics and business operations.",
      stack: "Stack:",
      results: "Results:",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      caseStudy: "Case Study",
      previewUnavailable: "Preview unavailable",
    },
    // HowIWork
    howIWork: {
      title: "How I Work",
      step1Title: "I Listen",
      step1Desc: "I sit with your team. I map what's actually happening vs. what's supposed to happen.",
      step2Title: "I Build",
      step2Desc: "Fast iterations. Working software in days, not months. No PowerPoint.",
      step3Title: "I Measure",
      step3Desc: "Hours saved, errors reduced, throughput increased. Real metrics.",
    },
    // Skills
    skills: {
      title: "Technical Toolkit",
      frontend: "Frontend",
      backend: "Backend & Infrastructure",
      data: "Data & Analytics",
      automation: "Automation & Integration",
    },
    // Credibility
    credibility: {
      title: "Results & Impact",
      metric1Label: "Weekly appointments managed",
      metric2Label: "Medical reports generated",
      metric3Label: "Zero double-bookings since implementation",
      metric4Label: "Patients in active dental system",
      quote: "\"I don't just analyze problems — I build the solution.\"",
    },
    // Why Me
    whyMe: {
      title: "Why Me",
      headline: "Pragmatic solutions, not perfect demos.",
      builtToSell: "Built to Sell",
      builtToSellDesc: "I don't just build demos. I shipped an Excel system to a real clinic that their staff uses daily.",
      speed: "Speed of Execution",
      speedDesc: "The report generator went from idea to clinic deployment in 3 weeks. I prototype fast and iterate with real users.",
      fullStack: "End-to-End",
      fullStackDesc: "From VBA macros to React frontends to Python backends. One person who can own the whole solution.",
      trust: "Technologies I've shipped to production:",
    },
    // Contact
    contact: {
      title: "Contact",
      headline: "Need someone to automate manual processes?",
      subheadline: "I build internal tools and automation systems. If it sounds like what you need, send me an email and we'll talk.",
      cta: "Send Email",
      email: "johnsopranojr@outlook.com",
      copySuccess: "Copied to clipboard!",
      copyHint: "Click to copy",
      downloadCV: "Download CV",
    },
    // Footer
    footer: {
      copyright: "© 2026 Lautaro Ortiz",
    },
    // Project details
    projectDetails: {
      respiratory: {
        title: "Spirometry Report Generator",
        description: "Desktop application for generating medical spirometry reports. Uses CustomTkinter for the UI and generates Word documents with patient data. Includes Excel batch loading for processing multiple patients at once.",
        results: "Reports reduced from 15+ min to <30 seconds",
      },
      excel: {
        title: "Medical Clinic Management System",
        description: "Production-ready Excel solution for medical clinic appointment scheduling and financial tracking. Features dual-shift system (morning/afternoon), automated balance calculations, and real-time dashboards. Sold and deployed to clinic with 2 secretaries actively using it daily.",
        results: "60% reduction in appointment tracking time, 3,000+ annual appointments managed",
      },
      nexus: {
        title: "NexusData AI",
        description: "Portfolio demo that turns messy CSV, Excel, or JSON files into cleaned data, quality checks, executive summaries, charts, business recommendations, and downloadable reports.",
        results: "One-click demo: upload, clean, analyze, explain, and export",
        slides: [
          "Dashboard: executive overview, quality score, charts, and recommendations",
          "Data Upload: import CSV, Excel, or JSON, or run the prepared demo dataset",
          "Dataset Q&A: ask business questions about the analyzed file",
          "Insights: cleaning log, raw vs cleaned comparison, and analyst notes"
        ]
      },
    },
  },
  es: {
    // Hero
    hero: {
      role: "Ingeniero Industrial",
      headline: "Del caos a operaciones que se manejan solas.",
      subheadline: "Construyo herramientas internas, sistemas de automatización y flujos de datos para negocios que no pueden detenerse.",
      tagline: "No solo analizo problemas — construyo la solución.",
      ctaProjects: "Ver Proyectos",
      ctaGitHub: "Ver GitHub",
    },
    // HeroProject
    heroProject: {
      badge: "Proyecto Destacado",
      status: "En Producción",
      headline: "Sistema de turnos",
      headlineAccent: "sin llamadas",
      quote: "\"La secretaria marca el ingreso, la doctora recibe la notificación. Nada de interrupciones, nada de papel.\"",
      statPatients: "Pacientes registrados",
      statWeekly: "Turnos semanales",
      statDouble: "Doble reserva",
      statNotification: "Notificación instantánea",
      statPWA: "App instalable",
      screenshotsTitle: "Vistas de la aplicación",
      featureNotifications: "Notificaciones en tiempo real",
      featureNotificationsDesc: "Telegram + Push nativas. La doctora sabe sin mirar el teléfono.",
      featureAgenda: "Agenda sincronizada",
      featureAgendaDesc: "Secretaría y consultorio siempre actualizados. Sin Excel.",
      featureRecords: "Fichas centralizadas",
      featureRecordsDesc: "Historial, odontograma, evolución. Todo en un lugar.",
      cta: "Ver todos los proyectos",
      viewCode: "Ver Código",
    },
    // Projects
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Proyectos construidos para clínicas reales y operaciones de negocio.",
      stack: "Stack:",
      results: "Resultados:",
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo",
      caseStudy: "Caso de Estudio",
      previewUnavailable: "Vista previa no disponible",
    },
    // HowIWork
    howIWork: {
      title: "Cómo Trabajo",
      step1Title: "Escucho",
      step1Desc: "Me siento con tu equipo. Mapeo lo que realmente está pasando vs. lo que debería pasar.",
      step2Title: "Construyo",
      step2Desc: "Iteraciones rápidas. Software funcionando en días, no meses. Sin PowerPoint.",
      step3Title: "Mido",
      step3Desc: "Horas ahorradas, errores reducidos, throughput aumentado. Métricas reales.",
    },
    // Skills
    skills: {
      title: "Toolkit Técnico",
      frontend: "Frontend",
      backend: "Backend & Infraestructura",
      data: "Data & Analytics",
      automation: "Automatización & Integración",
    },
    // Credibility
    credibility: {
      title: "Resultados & Impacto",
      metric1Label: "Turnos semanales gestionados",
      metric2Label: "Reportes médicos generados",
      metric3Label: "Cero doble reserva desde implementación",
      metric4Label: "Pacientes en sistema dental activo",
      quote: "\"No solo analizo problemas — construyo la solución.\"",
    },
    // Why Me
    whyMe: {
      title: "Por Qué Yo",
      headline: "Soluciones pragmáticas, no demos perfectas.",
      builtToSell: "Hecho Para Vender",
      builtToSellDesc: "No solo armo demos. Vendí un sistema Excel a una clínica real que usan todos los días.",
      speed: "Velocidad de Ejecución",
      speedDesc: "El generador de reportes pasó de idea a clínica en 3 semanas. Prototipo rápido e itero con usuarios reales.",
      fullStack: "De Punta a Punta",
      fullStackDesc: "Desde macros VBA hasta frontends React y backends Python. Una persona que puede llevar toda la solución.",
      trust: "Tecnologías que mandé a producción:",
    },
    // Contact
    contact: {
      title: "Contacto",
      headline: "¿Necesitás alguien que automatice procesos manuales?",
      subheadline: "Construyo herramientas internas y sistemas de automatización. Si te sirve lo que hago, escribime y vemos si encajo.",
      cta: "Enviar email",
      email: "johnsopranojr@outlook.com",
      copySuccess: "¡Copiado al portapapeles!",
      copyHint: "Clic para copiar",
      downloadCV: "Descargar CV",
    },
    // Footer
    footer: {
      copyright: "© 2026 Lautaro Ortiz",
    },
    // Project details
    projectDetails: {
      respiratory: {
        title: "Generador de Informes de Espirometría",
        description: "Aplicación de escritorio para generar informes médicos de espirometría. Usa CustomTkinter para la interfaz y genera documentos Word con datos del paciente. Incluye carga por lotes desde Excel para procesar múltiples pacientes.",
        results: "Reportes reducidos de 15+ min a <30 segundos",
      },
      excel: {
        title: "Sistema de Gestión para Clínica Médica",
        description: "Solución Excel lista para producción para programación de citas médicas y seguimiento financiero. Sistema de doble turno (mañana/tarde), cálculos de balance automáticos y dashboards en tiempo real. Vendido y desplegado en clínica con 2 secretarias usándolo activamente.",
        results: "60% de reducción en tiempo de seguimiento de citas, 3,000+ citas anuales gestionadas",
      },
      nexus: {
        title: "NexusData AI",
        description: "Demo de portfolio que convierte archivos CSV, Excel o JSON desordenados en datos limpios, controles de calidad, resumen ejecutivo, graficos, recomendaciones de negocio y reportes descargables.",
        results: "Demo en un clic: subir, limpiar, analizar, explicar y exportar",
        slides: [
          "Dashboard: resumen ejecutivo, score de calidad, graficos y recomendaciones",
          "Carga de datos: importar CSV, Excel o JSON, o correr el dataset demo",
          "Preguntas al dataset: consultas de negocio sobre el archivo analizado",
          "Insights: log de limpieza, raw vs cleaned y notas de analista"
        ]
      },
    },
  },
};

export function getInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  
  // Check stored preference
  const stored = localStorage.getItem("locale") as Locale;
  if (stored && (stored === "en" || stored === "es")) return stored;
  
  // Detect from browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("es")) return "es";
  return "en";
}
