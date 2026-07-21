"use client";

import { useLocale } from "./LocaleProvider";

export default function Credibility() {
  const { t, locale } = useLocale();
  const metrics = locale === "es"
    ? [
        {
          value: "100+",
          label: "Pacientes registrados",
          context: "Sistema odontológico en uso diario",
        },
        {
          value: "300+",
          label: "Informes de espirometría",
          context: "Generados con mi herramienta",
        },
        {
          value: "En uso",
          label: "Flujo clínico real",
          context: "Recepción, médico y espirometría",
        },
        {
          value: "min",
          label: "Tiempo de informes",
          context: "Trabajo reducido de horas a minutos",
        },
      ]
    : [
        {
          value: "100+",
          label: "Registered patients",
          context: "Dental system used daily",
        },
        {
          value: "300+",
          label: "Spirometry reports",
          context: "Generated with my tool",
        },
        {
          value: "Live",
          label: "Clinical workflow",
          context: "Reception, doctor, and spirometry",
        },
        {
          value: "min",
          label: "Report turnaround",
          context: "Work reduced from hours to minutes",
        },
      ];

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-2">{locale === "es" ? "Impacto" : "Impact"}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium">
            {t.credibility.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="border-l-2 border-accent pl-4">
              <p className="font-display text-4xl sm:text-5xl font-bold text-accent mb-2">
                {metric.value}
              </p>
              <p className="text-foreground text-sm font-medium mb-1">
                {metric.label}
              </p>
              <p className="text-muted-foreground text-xs">
                {metric.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
