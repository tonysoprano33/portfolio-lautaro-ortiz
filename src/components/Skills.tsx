"use client";

import { useLocale } from "./LocaleProvider";

const skillCategories = [
  {
    key: "data",
    skills: ["Python", "SQL", "Pandas", "Scikit-Learn"],
  },
  {
    key: "frontend",
    skills: ["Next.js", "React", "TypeScript", "APIs"],
  },
  {
    key: "automation",
    skills: ["Excel", "Reporting", "Process Design", "Internal Tools"],
  },
] as const;

export default function Skills() {
  const { t } = useLocale();

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-2">Toolkit</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium">
            {t.skills.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.key}>
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                {category.key === "data" ? t.skills.data : category.key === "frontend" ? t.skills.frontend : t.skills.automation}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background border border-border text-sm font-medium hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
