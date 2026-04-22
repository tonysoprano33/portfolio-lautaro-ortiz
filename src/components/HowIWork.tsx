"use client";

import { Search, Code2, RefreshCw, ArrowRight } from "lucide-react";
import { useLocale } from "./LocaleProvider";

const steps = [
  {
    icon: Search,
    number: "01",
    key: "step1",
  },
  {
    icon: Code2,
    number: "02",
    key: "step2",
  },
  {
    icon: RefreshCw,
    number: "03",
    key: "step3",
  },
] as const;

export default function HowIWork() {
  const { t, locale } = useLocale();

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-2">{locale === "es" ? "Mi Proceso" : "My Process"}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium">
            {t.howIWork.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-border w-4 h-4" />
                </div>
              )}
              
              <div className="bg-muted/30 border border-border p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent font-display text-2xl font-bold">
                    {step.number}
                  </span>
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-1">
                  {step.key === "step1" ? t.howIWork.step1Title : step.key === "step2" ? t.howIWork.step2Title : t.howIWork.step3Title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                  {step.key === "step1" ? t.howIWork.step1Desc : step.key === "step2" ? t.howIWork.step2Desc : t.howIWork.step3Desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
