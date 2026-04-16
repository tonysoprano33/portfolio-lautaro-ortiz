"use client";

import { skillCategories, certifications } from "@/data/skills";
import { Award, Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Skills() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 xl:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-sm font-medium text-primary mb-4 uppercase tracking-wide">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-card border border-border text-sm text-muted-foreground rounded-sm hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-medium text-primary mb-6 uppercase tracking-wide flex items-center gap-2">
            <Award className="w-4 h-4" />
            {t.certifications}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-start gap-3 p-4 bg-card border border-border rounded-sm"
              >
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-secondary">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
