export type Locale = "en" | "es";

export const translations = {
  en: {
    // Hero
    hero: {
      role: "Industrial Engineer",
      headline: "From chaos to operations that run themselves.",
      subheadline: "I build internal tools, automation systems, and data workflows for businesses that can't afford to stop.",
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
    },
    // Projects
    projects: {
      title: "Featured Projects",
      subtitle: "Projects built for real clinics and business operations.",
      stack: "Stack:",
      results: "Results:",
      viewCode: "View Code",
      liveDemo: "Live Demo",
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
    // Contact
    contact: {
      title: "Contact",
      headline: "Looking for someone who can turn messy operations into efficient tools?",
      subheadline: "I don't just analyze problems — I build the solution.",
      cta: "Contact Me",
      email: "johnsopranojr@outlook.com",
      copySuccess: "Copied to clipboard!",
      copyHint: "Click to copy",
      downloadCV: "Download CV",
    },
    // Footer
    footer: {
      copyright: "© 2026 Lautaro Ortiz",
    },
  },
  es: {
    // Hero
    hero: {
      role: "Ingeniero Industrial",
      headline: "Del caos a operaciones que se manejan solas.",
      subheadline: "Construyo herramientas internas, sistemas de automatización y flujos de datos para negocios que no pueden detenerse.",
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
    },
    // Projects
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Proyectos construidos para clínicas reales y operaciones de negocio.",
      stack: "Stack:",
      results: "Resultados:",
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo",
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
    // Contact
    contact: {
      title: "Contacto",
      headline: "¿Buscás alguien que pueda convertir operaciones caóticas en herramientas eficientes?",
      subheadline: "No solo analizo problemas — construyo la solución.",
      cta: "Contactarme",
      email: "johnsopranojr@outlook.com",
      copySuccess: "¡Copiado al portapapeles!",
      copyHint: "Clic para copiar",
      downloadCV: "Descargar CV",
    },
    // Footer
    footer: {
      copyright: "© 2026 Lautaro Ortiz",
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
