"use client";

import { Search, BarChart2, Lightbulb } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Exploración",
    desc: "Entiendo el negocio primero. Qué preguntas importan, qué datos tenemos, qué falta."
  },
  {
    icon: BarChart2,
    title: "Análisis",
    desc: "Limpio, transformo y analizo. SQL para extracción, Python para procesamiento, dashboards para visualizar."
  },
  {
    icon: Lightbulb,
    title: "Insights",
    desc: "Traduzco números en acciones. Un buen análisis es el que alguien puede usar para decidir."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-4">
          Cómo trabajo
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-medium mb-12">
          De datos a decisiones
        </h2>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <step.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
