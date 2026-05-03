"use client";

import { ArrowRight } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function ProfileWork() {
  const { t } = useLocale();

  return (
    <section id="about" className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24 bg-muted/10 border-y border-border">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(380px,0.62fr)] gap-10 lg:gap-16 items-start mb-10 lg:mb-12">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              {t.profileWork.eyebrow}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.02] tracking-normal">
              {t.profileWork.title}
            </h2>
          </div>

          <div className="lg:pt-12 max-w-2xl">
            <p className="text-foreground text-lg sm:text-xl lg:text-2xl leading-relaxed border-l-2 border-accent pl-5">
              {t.profileWork.intro}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 border border-border bg-background divide-y divide-border sm:divide-y-0 sm:divide-x mb-10 lg:mb-12 overflow-hidden">
          {t.profileWork.metrics.map((metric) => (
            <div key={metric.label} className="px-7 py-8 sm:px-8 lg:px-10 lg:py-9 text-center">
              <p className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-none text-accent mb-3">
                {metric.value}
              </p>
              <p className="text-base sm:text-lg leading-tight text-foreground max-w-[12rem] mx-auto">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-9 sm:mb-12">
          <p className="text-foreground text-sm font-medium tracking-widest uppercase mb-5">
            {t.profileWork.stepsTitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-5 items-stretch">
            {t.profileWork.steps.map((step, index) => (
              <div key={step.title} className="contents">
                <div className="border border-border bg-background p-6 sm:p-7 min-h-[172px] hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent text-base font-display font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-medium text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>

                {index < t.profileWork.steps.length - 1 ? (
                  <div className="hidden md:flex items-center justify-center text-muted-foreground/70">
                    <ArrowRight className="w-7 h-7" strokeWidth={1.75} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-foreground text-sm font-medium tracking-widest uppercase mb-4">
            {t.profileWork.stackTitle}
          </p>
          <div className="flex flex-wrap gap-3">
            {t.profileWork.stack.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 border border-border bg-background text-sm text-muted-foreground transition-colors duration-200 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
