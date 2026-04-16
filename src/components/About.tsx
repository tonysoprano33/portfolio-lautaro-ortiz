"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function About() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section id="about" className="py-24 px-6 lg:px-12 xl:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              {t.title}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t.description1}</p>
              <p>{t.description2}</p>
              <p>{t.description3}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 border border-border rounded-sm bg-card">
              <p className="font-display text-4xl md:text-5xl font-semibold text-accent mb-2">5+</p>
              <p className="text-sm text-muted-foreground">{t.stats.experience}</p>
            </div>
            <div className="p-6 border border-border rounded-sm bg-card">
              <p className="font-display text-4xl md:text-5xl font-semibold text-accent mb-2">50+</p>
              <p className="text-sm text-muted-foreground">{t.stats.projects}</p>
            </div>
            <div className="p-6 border border-border rounded-sm bg-card">
              <p className="font-display text-4xl md:text-5xl font-semibold text-accent mb-2">10+</p>
              <p className="text-sm text-muted-foreground">{t.stats.companies}</p>
            </div>
            <div className="p-6 border border-border rounded-sm bg-card">
              <p className="font-display text-4xl md:text-5xl font-semibold text-accent mb-2">99%</p>
              <p className="text-sm text-muted-foreground">{t.stats.satisfaction}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
