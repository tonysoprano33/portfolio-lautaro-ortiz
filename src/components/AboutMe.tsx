"use client";

import { useLocale } from "./LocaleProvider";

export default function AboutMe() {
  const { t } = useLocale();

  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 bg-muted/10 border-y border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.36fr_0.64fr] gap-10 lg:gap-16">
        <div>
          <p className="text-accent text-sm font-medium mb-2">{t.aboutMe.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium">
            {t.aboutMe.title}
          </h2>
        </div>

        <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          <p>{t.aboutMe.paragraph1}</p>
          <p>{t.aboutMe.paragraph2}</p>
          <p>{t.aboutMe.paragraph3}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {t.aboutMe.focus.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 border border-border bg-background text-sm text-foreground"
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
