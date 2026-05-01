export type Locale = "en" | "es";

export const translations = {
  en: {
    // Hero
    hero: {
      role: "Python Developer & Data Analyst Student",
      headline: "From chaos to operations that run themselves.",
      subheadline: "I analyze operational problems, then build the tools, automations, and data workflows that solve them.",
      tagline: "I like both sides of the work: understanding the problem and shipping the system that fixes it.",
      ctaProjects: "View Projects",
      ctaGitHub: "View GitHub",
    },
    // HeroProject
    heroProject: {
      badge: "Featured Project",
      status: "Live Demo",
      kicker: "AI data cleaner + insight engine",
      headline: "NexusData AI",
      headlineAccent: "from data to decisions",
      quote: "A full workflow for messy business datasets: upload a file, clean common issues, generate quality checks, surface insights, and export an executive report.",
      stats: [
        { value: "3", label: "File formats" },
        { value: "Score", label: "Quality checks" },
        { value: "Chat", label: "Ask the data" },
        { value: "Charts", label: "Auto visuals" },
        { value: "Export", label: "Reports ready" },
      ],
      proofPoints: [
        "Cleans CSV, Excel, and JSON files",
        "Highlights missing values, duplicates, outliers, and schema issues",
        "Turns the cleaned dataset into charts, insights, and recommendations",
        "Exports analysis reports for business review",
      ],
      screenshotsTitle: "NexusData AI views",
      featureNotifications: "Multi-format upload",
      featureNotificationsDesc: "CSV, Excel, and JSON files become an analyzable dataset in the same flow.",
      featureAgenda: "Cleaning + quality checks",
      featureAgendaDesc: "The app detects data issues, cleans common problems, and explains what changed.",
      featureRecords: "Insights and exports",
      featureRecordsDesc: "Executive summaries, charts, recommendations, dataset chat, and downloadable reports.",
      cta: "Open live demo",
      viewCode: "View Code",
      previousProject: "Previous project",
      nextProject: "Next project",
      projectProgress: "Featured project progress",
      viewProject: "View project",
      slides: [
        "Dashboard: executive overview, quality score, charts, and recommendations",
        "Data Upload: import CSV, Excel, or JSON, or run the prepared demo dataset",
        "Dataset chat: ask business questions about the analyzed file",
        "Insights: cleaning log, raw vs cleaned comparison, and analyst notes",
      ],
    },
    // Projects
    projects: {
      title: "More Projects",
      subtitle: "Additional projects with real users, measurable impact, and operational context.",
      stack: "Stack:",
      results: "Results:",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      caseStudy: "Case Study",
      promote: "View as spotlight",
      previewUnavailable: "Preview unavailable",
      expandImage: "Expand image",
      previousImage: "Previous image",
      nextImage: "Next image",
      goToImage: "Go to image",
      zoomImage: "Click to zoom",
      modalHelp: "Use arrow keys to navigate, ESC to close, click image to zoom",
    },
    // AboutMe
    aboutMe: {
      eyebrow: "About Me",
      title: "I build practical tools for messy real-world workflows.",
      paragraph1: "I'm Lautaro Ortiz, a Python-focused developer and aspiring Data Analyst based in Argentina. I already have experience solving real workflow problems by building applications used in clinics and day-to-day operations.",
      paragraph2: "I'm an analytical person: I can observe how someone performs a task, listen to what slows them down, ask the right questions, and propose a software solution that makes the process clearer, faster, and easier to manage.",
      paragraph3: "I use AI tools as part of my workflow, but my focus is not just generating code. I care about understanding the problem, designing the solution, testing it with real use, and making the final product genuinely useful.",
      focus: ["Python", "Data Analysis", "Automation", "Applied AI", "Internal Tools"],
    },
    // ProfileWork
    profileWork: {
      eyebrow: "Profile & Workflow",
      title: "I analyze the workflow, then build the tool.",
      intro: "I'm Lautaro Ortiz, a Python-focused developer and aspiring Data Analyst based in Argentina. I have experience solving real operational problems by observing how people work, identifying friction, and building software that makes daily tasks clearer and faster.",
      pillars: [
        {
          title: "Understand",
          description: "I observe the task, listen to the user, ask questions, and find where time, information, or coordination gets lost.",
        },
        {
          title: "Build",
          description: "I turn the problem into a practical tool: automation, dashboards, internal apps, reports, or data workflows.",
        },
        {
          title: "Measure",
          description: "I care about usefulness: less manual work, cleaner information, faster reports, and tools people actually use.",
        },
      ],
      stackTitle: "Tools I use to solve these problems",
      stack: ["Python", "Pandas", "SQL", "Excel", "Next.js", "TypeScript", "Supabase", "Automation", "Applied AI", "Internal Tools"],
      metrics: [
        { value: "100+", label: "patients in active system" },
        { value: "300+", label: "reports generated" },
        { value: "3", label: "real systems shipped" },
      ],
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
      agenda: {
        title: "Dental Appointment & Patient System",
        description: "Production PWA used daily by one doctor and two secretaries. It replaced paper notes and manual scheduling with patient profiles, payments, insurance coverage, odontograms, workday calendar configuration, occupied-day tracking, and constant feedback from real users.",
        results: "100+ registered patients, daily use by doctor and 2 secretaries, paper workflow replaced by instant updates",
        spotlight: {
          status: "In production",
          kicker: "Operational system for a dental clinic",
          displayTitle: "Dental clinic system",
          headlineAccent: "patients and appointments",
          quote: "A real clinic tool used every day by the doctor and two secretaries. It replaces paper notes with patient records, payments, insurance data, odontograms, and calendar control.",
          stats: [
            { value: "100+", label: "Registered patients" },
            { value: "3", label: "Daily users" },
            { value: "PWA", label: "Installable app" },
            { value: "0", label: "Paper agenda" },
          ],
          proofPoints: [
            "Patient profiles, payments, coverage, and clinical notes",
            "Workday calendar, availability, and occupied slots",
            "Appointment status and arrival indicators for secretaries",
            "Improved with feedback from daily clinic users",
          ],
          screenshotsTitle: "Dental system views",
          primaryCta: "View project",
        },
        slides: [
          "Dashboard: daily agenda, appointment stats, and operational overview",
          "Patient list: search, appointment state, arrival indicators, and records",
          "Patient profile: personal data, history, coverage, payments, and clinical notes",
          "Calendar: workdays, availability, occupied slots, and scheduling",
        ],
      },
      respiratory: {
        title: "Spirometry Report Generator",
        description: "Desktop application I use in my own work to generate medical spirometry reports. It loads patient data, validates fields, and creates Word documents in minutes instead of hours.",
        results: "300+ reports generated, reducing work from hours to minutes",
        spotlight: {
          status: "Used in my work",
          kicker: "Medical report automation",
          displayTitle: "Spirometry reports",
          headlineAccent: "from hours to minutes",
          quote: "A desktop tool I use in my own work to generate spirometry reports faster and with fewer repetitive steps. It turns patient data into ready-to-edit Word documents.",
          stats: [
            { value: "300+", label: "Reports generated" },
            { value: "min", label: "Turnaround time" },
            { value: "Word", label: "Report output" },
            { value: "Excel", label: "Batch loading" },
          ],
          proofPoints: [
            "Loads and validates patient data before generation",
            "Creates Word documents with clinical report structure",
            "Supports batch loading from spreadsheets",
            "Cuts repetitive report work from hours to minutes",
          ],
          screenshotsTitle: "Spirometry generator views",
          primaryCta: "View project",
        },
      },
      excel: {
        title: "Medical Clinic Management System",
        description: "Production-ready Excel solution for medical clinic appointment scheduling and financial tracking. Features dual-shift system (morning/afternoon), automated balance calculations, and real-time dashboards. Sold and deployed to clinic with 2 secretaries actively using it daily.",
        results: "60% reduction in appointment tracking time, 3,000+ annual appointments managed",
        spotlight: {
          status: "Sold product",
          kicker: "Excel system for clinic operations",
          displayTitle: "Clinic Excel system",
          headlineAccent: "appointments and finance",
          quote: "A practical Excel-based system sold and deployed to a clinic. It manages appointment tracking, payments, shifts, balances, and operational dashboards in one file.",
          stats: [
            { value: "60%", label: "Less tracking time" },
            { value: "3k+", label: "Annual appointments" },
            { value: "2", label: "Active secretaries" },
            { value: "Excel", label: "Production tool" },
          ],
          proofPoints: [
            "Morning and afternoon shift workflow",
            "Automatic balance and payment calculations",
            "Daily and monthly views for clinic tracking",
            "Designed for non-technical staff to use daily",
          ],
          screenshotsTitle: "Excel clinic system views",
          primaryCta: "View project",
        },
      },
      nexus: {
        title: "NexusData AI",
        description: "AI-assisted data workflow that turns messy CSV, Excel, or JSON files into cleaned data, quality checks, executive summaries, charts, business recommendations, dataset chat, and downloadable reports.",
        results: "One-click demo: upload, clean, analyze, explain, and export",
        spotlight: {
          status: "Live Demo",
          kicker: "AI data cleaner + insight engine",
          displayTitle: "NexusData AI",
          headlineAccent: "from data to decisions",
          quote: "A full workflow for messy business datasets: upload a file, clean common issues, generate quality checks, surface insights, and export an executive report.",
          stats: [
            { value: "3", label: "File formats" },
            { value: "Score", label: "Quality checks" },
            { value: "Chat", label: "Ask the data" },
            { value: "Charts", label: "Auto visuals" },
          ],
          proofPoints: [
            "Cleans CSV, Excel, and JSON files",
            "Flags missing values, duplicates, outliers, and schema issues",
            "Turns cleaned data into charts, insights, and recommendations",
            "Exports analysis reports for business review",
          ],
          screenshotsTitle: "NexusData AI views",
          primaryCta: "Open live demo",
        },
        slides: [
          "Dashboard: executive overview, quality score, charts, and recommendations",
          "Data Upload: import CSV, Excel, or JSON, or run the prepared demo dataset",
          "Dataset chat: ask business questions about the analyzed file",
          "Insights: cleaning log, raw vs cleaned comparison, and analyst notes"
        ]
      },
    },
  },
  es: {
    // Hero
    hero: {
      role: "Desarrollador Python y estudiante de analisis de datos",
      headline: "Del caos a operaciones que se manejan solas.",
      subheadline: "Analizo problemas operativos y después construyo las herramientas, automatizaciones y flujos de datos que los resuelven.",
      tagline: "Me gustan las dos partes del trabajo: entender el problema y crear el sistema que lo arregla.",
      ctaProjects: "Ver Proyectos",
      ctaGitHub: "Ver GitHub",
    },
    // HeroProject
    heroProject: {
      badge: "Proyecto Destacado",
      status: "Demo en vivo",
      kicker: "Data cleaner con IA + motor de insights",
      headline: "NexusData AI",
      headlineAccent: "de datos a decisiones",
      quote: "Un flujo completo para datasets de negocio desordenados: subís el archivo, limpia problemas comunes, genera controles de calidad, encuentra insights y exporta un reporte ejecutivo.",
      stats: [
        { value: "3", label: "Formatos de archivo" },
        { value: "Score", label: "Control de calidad" },
        { value: "Chat", label: "Consultas al dataset" },
        { value: "Charts", label: "Gráficos automáticos" },
        { value: "Export", label: "Reporte listo" },
      ],
      proofPoints: [
        "Limpia archivos CSV, Excel y JSON",
        "Detecta valores faltantes, duplicados, outliers y problemas de estructura",
        "Convierte el dataset limpio en gráficos, insights y recomendaciones",
        "Exporta reportes de análisis para revisión de negocio",
      ],
      screenshotsTitle: "Vistas de NexusData AI",
      featureNotifications: "Carga multi-formato",
      featureNotificationsDesc: "Archivos CSV, Excel y JSON se convierten en un dataset analizable dentro del mismo flujo.",
      featureAgenda: "Limpieza y control de calidad",
      featureAgendaDesc: "La app detecta problemas, limpia errores comunes y explica qué cambió.",
      featureRecords: "Insights y reportes",
      featureRecordsDesc: "Resumen ejecutivo, gráficos, recomendaciones, preguntas al dataset y reportes descargables.",
      cta: "Abrir demo",
      viewCode: "Ver Código",
      previousProject: "Proyecto anterior",
      nextProject: "Proyecto siguiente",
      projectProgress: "Progreso de proyectos destacados",
      viewProject: "Ver proyecto",
      slides: [
        "Dashboard: resumen ejecutivo, score de calidad, gráficos y recomendaciones",
        "Carga de datos: importar CSV, Excel o JSON, o correr el dataset demo",
        "Preguntas al dataset: consultas de negocio sobre el archivo analizado",
        "Insights: log de limpieza, raw vs cleaned y notas de analista",
      ],
    },
    // Projects
    projects: {
      title: "Más proyectos",
      subtitle: "Otros trabajos con usuarios reales, impacto medible y contexto operativo.",
      stack: "Stack:",
      results: "Resultados:",
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo",
      caseStudy: "Caso de Estudio",
      promote: "Ver como destacado",
      previewUnavailable: "Vista previa no disponible",
      expandImage: "Ampliar imagen",
      previousImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      goToImage: "Ir a la imagen",
      zoomImage: "Clic para ampliar",
      modalHelp: "Usá las flechas para navegar, ESC para cerrar y clic en la imagen para ampliar",
    },
    // AboutMe
    aboutMe: {
      eyebrow: "Sobre mí",
      title: "Construyo herramientas prácticas para flujos de trabajo reales.",
      paragraph1: "Soy Lautaro Ortiz, desarrollador enfocado en Python y estudiante orientado al análisis de datos, residente en Argentina. Ya tengo experiencia resolviendo problemas reales mediante aplicaciones usadas en clínicas y operaciones del día a día.",
      paragraph2: "Soy una persona analítica: puedo observar cómo alguien realiza una tarea, escuchar qué le hace perder tiempo, conversar sobre el problema y proponer una solución de software que mejore la eficiencia del proceso.",
      paragraph3: "Uso herramientas de IA como parte de mi flujo de trabajo, pero mi foco no es solo generar código. Me importa entender el problema, diseñar la solución, probarla en uso real y lograr que el producto final sea realmente útil.",
      focus: ["Python", "Análisis de datos", "Automatización", "IA aplicada", "Herramientas internas"],
    },
    // ProfileWork
    profileWork: {
      eyebrow: "Perfil & forma de trabajo",
      title: "Analizo el flujo y después construyo la herramienta.",
      intro: "Soy Lautaro Ortiz, desarrollador enfocado en Python y estudiante orientado al análisis de datos en Argentina. Tengo experiencia resolviendo problemas operativos reales: observo cómo trabajan las personas, detecto fricciones y construyo software para hacer sus tareas más claras y rápidas.",
      pillars: [
        {
          title: "Entender",
          description: "Observo la tarea, escucho al usuario, hago preguntas y detecto dónde se pierde tiempo, información o coordinación.",
        },
        {
          title: "Construir",
          description: "Convierto el problema en una herramienta práctica: automatizaciones, dashboards, apps internas, reportes o flujos de datos.",
        },
        {
          title: "Medir",
          description: "Me importa que sea útil: menos trabajo manual, información más ordenada, reportes más rápidos y herramientas que se usen.",
        },
      ],
      stackTitle: "Herramientas que uso para resolver estos problemas",
      stack: ["Python", "Pandas", "SQL", "Excel", "Next.js", "TypeScript", "Supabase", "Automatización", "IA aplicada", "Herramientas internas"],
      metrics: [
        { value: "100+", label: "pacientes en sistema activo" },
        { value: "300+", label: "informes generados" },
        { value: "3", label: "sistemas reales creados" },
      ],
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
      agenda: {
        title: "Sistema de agenda odontológica",
        description: "PWA en producción usada diariamente por una doctora y dos secretarias. Reemplazó el uso de papel y anotaciones manuales por perfiles de pacientes, pagos, mutual, odontograma, configuración de días laborales, días ocupados, agenda y feedback constante de usuarios reales.",
        results: "100+ pacientes registrados, uso diario por la doctora y 2 secretarias, flujo en papel reemplazado por actualizaciones instantáneas",
        spotlight: {
          status: "En producción",
          kicker: "Sistema operativo para consultorio odontológico",
          displayTitle: "Sistema odontológico",
          headlineAccent: "pacientes y turnos",
          quote: "Una herramienta real usada todos los días por la doctora y dos secretarias. Reemplaza anotaciones en papel por fichas, pagos, mutual, odontograma y control de calendario.",
          stats: [
            { value: "100+", label: "Pacientes registrados" },
            { value: "3", label: "Usuarios diarios" },
            { value: "PWA", label: "App instalable" },
            { value: "0", label: "Agenda en papel" },
          ],
          proofPoints: [
            "Fichas con historial, mutual, pagos y notas clínicas",
            "Calendario con disponibilidad y turnos ocupados",
            "Estado del turno e indicadores de llegada",
            "Mejorada con feedback de usuarios reales",
          ],
          screenshotsTitle: "Vistas del sistema odontológico",
          primaryCta: "Ver proyecto",
        },
        slides: [
          "Dashboard: agenda diaria, estadísticas de turnos y vista operativa",
          "Lista de pacientes: búsqueda, estado del turno, llegada y fichas",
          "Perfil de paciente: datos, historial, mutual, pagos y notas clínicas",
          "Calendario: días laborales, disponibilidad, horarios ocupados y agenda",
        ],
      },
      respiratory: {
        title: "Generador de Informes de Espirometría",
        description: "Aplicación de escritorio que uso en mi propio trabajo para generar informes médicos de espirometría. Carga datos del paciente, valida campos y crea documentos Word en minutos en vez de horas.",
        results: "300+ informes generados, reduciendo trabajo de horas a minutos",
        spotlight: {
          status: "Usada en mi trabajo",
          kicker: "Automatización de informes médicos",
          displayTitle: "Informes de espirometría",
          headlineAccent: "de horas a minutos",
          quote: "Una herramienta de escritorio que uso en mi trabajo para generar informes de espirometría más rápido y con menos pasos repetitivos. Convierte datos del paciente en documentos Word.",
          stats: [
            { value: "300+", label: "Informes generados" },
            { value: "min", label: "Tiempo de trabajo" },
            { value: "Word", label: "Salida del informe" },
            { value: "Excel", label: "Carga por lote" },
          ],
          proofPoints: [
            "Carga y valida datos antes de generar el informe",
            "Crea documentos Word con estructura clínica",
            "Permite carga por lotes desde planillas",
            "Reduce trabajo repetitivo de horas a minutos",
          ],
          screenshotsTitle: "Vistas del generador de informes",
          primaryCta: "Ver proyecto",
        },
      },
      excel: {
        title: "Sistema de Gestión para Clínica Médica",
        description: "Solución Excel lista para producción para programación de citas médicas y seguimiento financiero. Sistema de doble turno (mañana/tarde), cálculos de balance automáticos y dashboards en tiempo real. Vendido y desplegado en clínica con 2 secretarias usándolo activamente.",
        results: "60% de reducción en tiempo de seguimiento de citas, 3,000+ citas anuales gestionadas",
        spotlight: {
          status: "Producto vendido",
          kicker: "Sistema Excel para operación clínica",
          displayTitle: "Sistema Excel clínico",
          headlineAccent: "turnos y finanzas",
          quote: "Una solución práctica en Excel vendida e implementada en una clínica. Gestiona turnos, pagos, turnos mañana/tarde, balances y dashboards operativos en un archivo.",
          stats: [
            { value: "60%", label: "Menos tiempo de seguimiento" },
            { value: "3k+", label: "Turnos anuales" },
            { value: "2", label: "Secretarias activas" },
            { value: "Excel", label: "Herramienta real" },
          ],
          proofPoints: [
            "Flujo separado para mañana y tarde",
            "Cálculos automáticos de pagos y balances",
            "Vistas diarias y mensuales para seguimiento",
            "Diseñado para personal no técnico",
          ],
          screenshotsTitle: "Vistas del sistema Excel",
          primaryCta: "Ver proyecto",
        },
      },
      nexus: {
        title: "NexusData AI",
        description: "Workflow de datos asistido por IA que convierte archivos CSV, Excel o JSON desordenados en datos limpios, controles de calidad, resumen ejecutivo, gráficos, recomendaciones, preguntas al dataset y reportes descargables.",
        results: "Demo en un clic: subir, limpiar, analizar, explicar y exportar",
        spotlight: {
          status: "Demo en vivo",
          kicker: "Data cleaner con IA + motor de insights",
          displayTitle: "NexusData AI",
          headlineAccent: "de datos a decisiones",
          quote: "Un flujo completo para datasets de negocio desordenados: subís el archivo, limpia problemas comunes, genera controles de calidad, encuentra insights y exporta un reporte ejecutivo.",
          stats: [
            { value: "3", label: "Formatos de archivo" },
            { value: "Score", label: "Control de calidad" },
            { value: "Chat", label: "Consultas al dataset" },
            { value: "Charts", label: "Gráficos automáticos" },
          ],
          proofPoints: [
            "Limpia archivos CSV, Excel y JSON",
            "Detecta valores faltantes, duplicados, outliers y problemas de estructura",
            "Convierte datos limpios en gráficos, insights y recomendaciones",
            "Exporta reportes de análisis para revisión de negocio",
          ],
          screenshotsTitle: "Vistas de NexusData AI",
          primaryCta: "Abrir demo",
        },
        slides: [
          "Dashboard: resumen ejecutivo, score de calidad, gráficos y recomendaciones",
          "Carga de datos: importar CSV, Excel o JSON, o correr el dataset demo",
          "Preguntas al dataset: consultas de negocio sobre el archivo analizado",
          "Insights: log de limpieza, raw vs cleaned y notas de analista"
        ]
      },
    },
  },
};

export type TranslationBundle = typeof translations.en;

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
