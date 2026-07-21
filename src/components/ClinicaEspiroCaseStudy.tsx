"use client";

import { Activity, Database, FileText, FolderOpen, HeartPulse, ListChecks } from "lucide-react";
import CaseStudyTemplate from "./CaseStudyTemplate";

const githubUrl = "https://github.com/tonysoprano33/Clinica-automatizador-espiro";

const screenshots = {
  intake: "/projects/espiro/01-intake-dashboard.png",
  report: "/projects/espiro/02-generated-report.png",
  calendar: "/projects/espiro/03-calendar.png",
  statistics: "/projects/espiro/04-statistics.png",
  patients: "/projects/espiro/05-patient-database.png",
  review: "/projects/espiro/06-medical-review.png",
};

const copy = {
  en: {
    back: "Back to portfolio",
    eyebrow: "Healthcare Automation Case Study",
    title: "Respiratory clinic system that turns intake data into printable medical reports.",
    intro: "A real operational tool for a respiratory clinic: reception loads patients, the spirometrist captures values once, the doctor validates the final result, and the system generates the correct report for spirometry, cyclometry, and mutual coverage.",
    primaryCta: "View GitHub",
    secondaryCta: "Contact me",
    githubUrl,
    metrics: [
      { value: "300+", label: "reports generated" },
      { value: "3", label: "role-focused views" },
      { value: "2", label: "study workflows" },
      { value: "SO2/FC", label: "captured before and after" },
    ],
    overview: [
      { label: "Role", value: "Workflow analysis, product design, full-stack development, report automation, and iteration with real use." },
      { label: "Context", value: "Respiratory clinic operation: patient intake, PDF review, medical validation, printable reports, calendar, patient history, and mutual-aware statistics." },
      { label: "Status", value: "Production workflow used in a real clinic, with role-focused views for reception, doctor, and spirometry work." },
      { label: "Stack", value: "Django, Python, Supabase, Vercel, document generation, PDF/print workflows." },
    ],
    problemTitle: "The problem",
    problem: "The report workflow depended on many small manual decisions: patient data, study type, coverage, SO2/FC values at rest and after bronchodilator, physician result, and the final printable document. Before this system, report handling also involved manual sending, printing or even taking photos of documents, which was slower, less professional and used unnecessary paper.",
    goalTitle: "The goal",
    goal: "Build a simple internal system where each important clinical value is captured once, the pulmonologist can review the spirometry file and automatic suggestion, save the final medical result, and then reuse that decision to generate the correct printable report.",
    screenshotsTitle: "Real System Screenshots",
    screenshots: [
      { src: screenshots.intake, title: "Daily intake", caption: "Reception adds the patient, selects study type and coverage, records SO2/FC at rest and post bronchodilator, and keeps the patient status visible." },
      { src: screenshots.report, title: "Automatic report", caption: "The printable output is generated from the captured data. Spirometry, cyclometry, private coverage and insurance coverage can produce different report content." },
      { src: screenshots.calendar, title: "Operational calendar", caption: "The calendar shows which days have patients, which are complete, and lets the clinic open or edit a day if something was loaded incorrectly." },
      { src: screenshots.statistics, title: "Clinic statistics", caption: "Monthly operational and descriptive clinical indicators show attendance, named mutual coverage, completed results, follow-up work, and aggregated profile data." },
      { src: screenshots.patients, title: "Patient database", caption: "Patient records centralize history, previous reports, spirometry results, and one clinical search by name, DNI, mutual, date, or final result." },
      { src: screenshots.review, title: "Doctor review workspace", caption: "The pulmonologist opens the spirometry file, sees patient data, reviews the automatic result suggestion, decides whether it matches, saves the final result and enables report generation." },
    ],
    workflowTitle: "What the system handles",
    workflow: [
      { title: "Role-focused intake", description: "Reception, doctor, and spirometrist each see the controls that matter for their part of the workflow.", icon: ListChecks },
      { title: "Clinical values", description: "SO2 and FC are tracked at rest and after bronchodilator because those values affect the final interpretation.", icon: HeartPulse },
      { title: "Doctor validation", description: "The system can suggest a result, but the pulmonologist makes and saves the final medical choice before the report is generated.", icon: Activity },
      { title: "Conditional reports", description: "The printed document changes depending on study type, coverage, captured values and medical result.", icon: FileText },
      { title: "Calendar control", description: "The clinic can see loaded days, occupied days, completed days, and edit appointments when data was entered incorrectly.", icon: FolderOpen },
      { title: "History and statistics", description: "Patients keep previous reports and final results, while the clinic can search by clinical context and review monthly activity by named mutual coverage.", icon: Database },
    ],
    processTitle: "Development process",
    process: [
      { title: "Observed the workflow", description: "I started from the actual clinic flow: what reception loads, what the pulmonologist reviews, what changes the report, and what used to require manual sending or printing." },
      { title: "Modeled the decisions", description: "I treated each field as meaningful: study type, coverage, SO2/FC values, result and status all affect the final workflow." },
      { title: "Built around daily use", description: "I connected intake, calendar, review, report generation, statistics and patient history so the tool works as one operational system." },
    ],
    technicalTitle: "Technical decisions",
    technical: [
      "Centralized patient and day status so reception, review and reporting stay in the same workflow.",
      "Conditional report generation for spirometry/cyclometry and private/insurance coverage differences.",
      "Reusable patient history with previous reports and spirometry results.",
      "Calendar view designed for fast day-level checks and corrections.",
      "Statistics layer built from the same clinical data already captured during daily work, including named mutual coverage and final-result distribution.",
      "Role-focused views reduce clutter for reception and doctor workflows while preserving the spirometrist's full operational access.",
      "Public portfolio screenshots anonymized to show the product without exposing patient identifiers.",
    ],
    impactTitle: "Impact",
    impact: "The system removed several manual handoffs: data is captured once, the pulmonologist validates the result inside the app, and the final report can be generated without paper-based workarounds or low-quality photo sharing. The same record also powers traceable history, mutual coverage follow-up, and monthly clinic visibility.",
    learningTitle: "Key takeaway",
    learning: "The strongest part of this project is not the stack. It is the product thinking: understanding which small clinical details matter, designing the flow around them, and making the software useful in a real workplace.",
  },
  es: {
    back: "Volver al portfolio",
    eyebrow: "Case study de automatizacion en salud",
    title: "Sistema para clinica respiratoria que convierte datos de atencion en informes listos para imprimir.",
    intro: "Una herramienta operativa real para una clinica respiratoria: recepcion carga pacientes, el espirometrista toma los valores una sola vez, el medico valida el resultado final y el sistema genera el informe correcto para espirometria, ciclometria y mutual.",
    primaryCta: "Ver GitHub",
    secondaryCta: "Contactarme",
    githubUrl,
    metrics: [
      { value: "300+", label: "informes generados" },
      { value: "3", label: "vistas por rol" },
      { value: "2", label: "flujos de estudio" },
      { value: "SO2/FC", label: "antes y despues" },
    ],
    overview: [
      { label: "Rol", value: "Analisis del flujo, diseno de producto, desarrollo full-stack, automatizacion de informes e iteracion con uso real." },
      { label: "Contexto", value: "Operacion de clinica respiratoria: admision, revision de PDF, validacion medica, informes imprimibles, calendario, historial y estadisticas por mutual." },
      { label: "Estado", value: "Flujo de produccion usado en una clinica real, con vistas enfocadas para secretaria, medico y espirometrista." },
      { label: "Stack", value: "Django, Python, Supabase, Vercel, generacion documental y flujo de PDF/impresion." },
    ],
    problemTitle: "El problema",
    problem: "El flujo de informes dependia de muchas decisiones manuales pequenas: datos del paciente, tipo de estudio, cobertura, SO2/FC en reposo y post broncodilatador, resultado definido por el medico y documento final. Antes de este sistema, tambien habia pasos manuales como enviar el informe, imprimirlo o incluso sacarle foto, lo que era mas lento, menos profesional y gastaba papel.",
    goalTitle: "El objetivo",
    goal: "Construir un sistema interno simple donde cada dato clinico importante se cargue una sola vez, el neumologo pueda revisar el archivo de espirometria y la sugerencia automatica, guardar el resultado medico final y usar esa decision para generar el informe correcto.",
    screenshotsTitle: "Capturas reales del sistema",
    screenshots: [
      { src: screenshots.intake, title: "Carga diaria", caption: "Recepcion agrega el paciente, elige tipo de estudio y cobertura, registra SO2/FC en reposo y post broncodilatador, y mantiene visible el estado del paciente." },
      { src: screenshots.report, title: "Informe automatico", caption: "La salida imprimible se genera desde los datos cargados. Espirometria, ciclometria, particular y mutual pueden producir contenido distinto." },
      { src: screenshots.calendar, title: "Calendario operativo", caption: "El calendario muestra que dias tienen pacientes, cuales estan completos y permite abrir o editar el dia si algo se cargo mal." },
      { src: screenshots.statistics, title: "Estadisticas de clinica", caption: "Los indicadores mensuales muestran asistencia, mutuales por nombre, resultados cargados, tareas de seguimiento y datos clinicos agregados." },
      { src: screenshots.patients, title: "Base de pacientes", caption: "Los pacientes tienen historial, informes previos, resultados de espirometria y una busqueda clinica por nombre, DNI, mutual, fecha o resultado." },
      { src: screenshots.review, title: "Revision del neumologo", caption: "El neumologo abre la ficha, ve los datos del paciente, revisa la sugerencia automatica, decide si coincide, guarda el resultado final y habilita la generacion del informe." },
    ],
    workflowTitle: "Que resuelve el sistema",
    workflow: [
      { title: "Carga por rol", description: "Secretaria, medico y espirometrista ven los controles que importan para su parte del flujo.", icon: ListChecks },
      { title: "Valores clinicos", description: "SO2 y FC se registran en reposo y post broncodilatador porque esos datos afectan la interpretacion final.", icon: HeartPulse },
      { title: "Validacion medica", description: "El sistema puede sugerir un resultado, pero el neumologo toma y guarda la decision final antes de generar el informe.", icon: Activity },
      { title: "Informes condicionales", description: "El documento impreso cambia segun tipo de estudio, cobertura, valores cargados y resultado medico.", icon: FileText },
      { title: "Control de calendario", description: "La clinica ve dias cargados, ocupados, completos y puede editar turnos cuando hubo una carga incorrecta.", icon: FolderOpen },
      { title: "Historial y estadisticas", description: "Cada paciente conserva informes y resultados finales, mientras la clinica puede buscar por contexto clinico y revisar la actividad mensual por mutual." , icon: Database },
    ],
    processTitle: "Proceso de desarrollo",
    process: [
      { title: "Observe el flujo", description: "Parti del flujo real de la clinica: que carga recepcion, que revisa el neumologo, que cambia el informe y que antes requeria envio manual o impresion." },
      { title: "Modele las decisiones", description: "Trate cada campo como algo importante: estudio, cobertura, SO2/FC, resultado y estado modifican el flujo final." },
      { title: "Construido para uso diario", description: "Conecte admision, calendario, revision, informes, estadisticas e historial para que funcione como un sistema operativo completo." },
    ],
    technicalTitle: "Decisiones tecnicas",
    technical: [
      "Estado centralizado de pacientes y dias para que recepcion, revision e informes vivan en el mismo flujo.",
      "Generacion condicional de informes para diferencias entre espirometria/ciclometria y particular/mutual.",
      "Historial reutilizable por paciente con informes previos y resultados de espirometria.",
      "Vista de calendario pensada para revisar y corregir rapidamente a nivel dia.",
      "Capa de estadisticas construida con los mismos datos clinicos capturados durante el trabajo diario, incluyendo mutuales por nombre y distribucion de resultados finales.",
      "Vistas por rol para reducir ruido visual en secretaria y medico, preservando el acceso operativo completo del espirometrista.",
      "Capturas anonimizadas en el portfolio para mostrar el producto sin exponer identificadores de pacientes.",
    ],
    impactTitle: "Impacto",
    impact: "El sistema elimino varios traspasos manuales: los datos se cargan una vez, el neumologo valida el resultado dentro de la app y el informe final se genera sin depender de papel, fotos de documentos o envios improvisados. El mismo registro tambien sostiene historial trazable, seguimiento de mutuales y visibilidad mensual de la clinica.",
    learningTitle: "Aprendizaje clave",
    learning: "Lo mas fuerte del proyecto no es el stack. Es el criterio de producto: entender que detalles clinicos importan, disenar el flujo alrededor de ellos y hacer que el software sirva en un trabajo real.",
  },
} as const;

export default function ClinicaEspiroCaseStudy() {
  return <CaseStudyTemplate copy={copy} />;
}
