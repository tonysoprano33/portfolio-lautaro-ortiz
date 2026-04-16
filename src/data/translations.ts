export type Language = "es" | "en";

export const translations = {
  es: {
    hero: {
      available: "Disponible para nuevas oportunidades",
      role: "Data Analyst & Business Intelligence Specialist",
      headline: "Analista de datos",
      headlineAccent: "enfocado en resultados",
      description: "Trabajo con datos para encontrar respuestas concretas. Experiencia en SQL, Python y visualización. Busco aportar valor real con análisis claros y accionables.",
      ctaProjects: "Ver Proyectos",
      ctaContact: "Contactar",
      companies: "Experiencia trabajando con",
      stats: {
        revenue: "Revenue impact generado",
        projects: "Proyectos completados",
        efficiency: "Eficiencia mejorada"
      }
    },
    about: {
      title: "Sobre mí",
      description1: "Analista de datos con experiencia en transformar información compleja en insights accionables que impulsan el crecimiento empresarial.",
      description2: "Especializado en business intelligence, machine learning y visualización de datos. He trabajado con empresas líderes para optimizar procesos y aumentar rentabilidad.",
      description3: "Mi enfoque combina habilidades técnicas sólidas con pensamiento estratégico de negocio, permitiéndome comunicar resultados complejos de manera clara a stakeholders.",
      stats: {
        experience: "Años de experiencia",
        projects: "Proyectos completados",
        companies: "Empresas asesoradas",
        satisfaction: "Clientes satisfechos"
      }
    },
    projects: {
      title: "Proyectos",
      subtitle: "Selección de proyectos que demuestran mi experiencia en análisis de datos, visualización y machine learning. Cada proyecto incluye datos reales de impacto empresarial.",
      technologies: "Tecnologías",
      code: "Código",
      demo: "Demo"
    },
    skills: {
      title: "Habilidades",
      subtitle: "Stack tecnológico y herramientas que utilizo para transformar datos en valor empresarial.",
      certifications: "Certificaciones"
    },
    contact: {
      title: "¿Trabajemos juntos?",
      subtitle: "Estoy disponible para proyectos de análisis de datos, consultoría y oportunidades laborales. Envíame un mensaje y conversemos sobre cómo puedo ayudar a tu equipo.",
      email: "tu.email@ejemplo.com",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Descargar CV",
      footer: "Diseñado y desarrollado con fines profesionales."
    }
  },
  en: {
    hero: {
      available: "Open to new opportunities",
      role: "Data Analyst & Business Intelligence Specialist",
      headline: "Data analyst",
      headlineAccent: "focused on results",
      description: "I work with data to find concrete answers. Experienced in SQL, Python, and visualization. I aim to deliver real value with clear, actionable analysis.",
      ctaProjects: "View Projects",
      ctaContact: "Get in Touch",
      companies: "Experience working with",
      stats: {
        revenue: "Revenue impact generated",
        projects: "Projects completed",
        efficiency: "Efficiency improved"
      }
    },
    about: {
      title: "About Me",
      description1: "Data analyst with experience in transforming complex information into actionable insights that drive business growth.",
      description2: "Specialized in business intelligence, machine learning, and data visualization. I've worked with leading companies to optimize processes and increase profitability.",
      description3: "My approach combines solid technical skills with strategic business thinking, allowing me to communicate complex results clearly to stakeholders.",
      stats: {
        experience: "Years of experience",
        projects: "Projects completed",
        companies: "Companies advised",
        satisfaction: "Satisfied clients"
      }
    },
    projects: {
      title: "Projects",
      subtitle: "Selection of projects demonstrating my experience in data analysis, visualization, and machine learning. Each project includes real business impact data.",
      technologies: "Technologies",
      code: "Code",
      demo: "Demo"
    },
    skills: {
      title: "Skills",
      subtitle: "Technology stack and tools I use to transform data into business value.",
      certifications: "Certifications"
    },
    contact: {
      title: "Let's work together?",
      subtitle: "I'm available for data analysis projects, consulting, and job opportunities. Send me a message and let's discuss how I can help your team.",
      email: "your.email@example.com",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Download CV",
      footer: "Designed and developed for professional purposes."
    }
  }
} as const;

export type Translations = typeof translations;
