"use client";

import { BarChart3, Code2, Search } from "lucide-react";
import { useLocale } from "./LocaleProvider";

const icons = [Search, Code2, BarChart3] as const;

export default function ProfileWork() {
  const { t } = useLocale();

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 bg-muted/10 border-y border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.34fr_0.66fr] gap-10 lg:gap-16 mb-12">
          <div>
            <p className="text-accent text-sm font-medium mb-2">{t.profileWork.eyebrow}</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium leading-tight">
              {t.profileWork.title}
            </h2>
          </div>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl">
            {t.profileWork.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {t.profileWork.pillars.map((pillar, index) => {
            const Icon = icons[index];

            return (
              <div key={pillar.title} className="border border-border bg-background p-6">
                <Icon className="w-6 h-6 text-accent mb-5" />
                <h3 className="font-display text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_0.4fr] gap-8 items-start">
          <div>
            <p className="text-foreground text-sm font-medium mb-4">{t.profileWork.stackTitle}</p>
            <div className="flex flex-wrap gap-2">
              {t.profileWork.stack.map((item) => (
                <span key={item} className="px-3 py-1.5 border border-border bg-background text-sm text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {t.profileWork.metrics.map((metric) => (
              <div key={metric.label} className="border-l-2 border-accent pl-4">
                <p className="font-display text-3xl sm:text-4xl font-semibold text-accent leading-none mb-2">
                  {metric.value}
                </p>
                <p className="text-muted-foreground text-xs leading-snug">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
