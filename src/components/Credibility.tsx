"use client";

import { useLocale } from "./LocaleProvider";

const metrics = [
  {
    value: "<30s",
    labelKey: "metric1Label",
    contextKey: "metric1Context",
  },
  {
    value: "50+",
    labelKey: "metric2Label",
    contextKey: "metric2Context",
  },
  {
    value: "3",
    labelKey: "metric3Label",
    contextKey: "metric3Context",
  },
  {
    value: "<12ms",
    labelKey: "metric4Label",
    contextKey: "metric4Context",
  },
] as const;

export default function Credibility() {
  const { t, locale } = useLocale();

  // Manual mapping since we need to access nested keys
  const getLabel = (key: string) => {
    switch (key) {
      case "metric1Label": return locale === "es" ? "Generación de reportes médicos" : "Medical report generation";
      case "metric2Label": return locale === "es" ? "Turnos semanales gestionados" : "Weekly appointments managed";
      case "metric3Label": return locale === "es" ? "Sistemas en producción" : "Live production systems";
      case "metric4Label": return locale === "es" ? "Tiempo de respuesta API" : "API response time";
      default: return "";
    }
  };

  const getContext = (key: string) => {
    switch (key) {
      case "metric1Context": return locale === "es" ? "De 15+ min a <30 seg" : "Down from 15+ minutes";
      case "metric2Context": return locale === "es" ? "Cero doble reserva" : "Zero double-bookings";
      case "metric3Context": return locale === "es" ? "Clínicas usándolo diariamente" : "Clinics using daily";
      case "metric4Context": return locale === "es" ? "Plataforma de analytics enterprise" : "Enterprise analytics platform";
      default: return "";
    }
  };

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
                {getLabel(metric.labelKey)}
              </p>
              <p className="text-muted-foreground text-xs">
                {getContext(metric.contextKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
