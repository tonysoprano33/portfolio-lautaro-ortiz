"use client";

import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import ImageModal from "./ImageModal";
import { useLocale } from "./LocaleProvider";

type CaseStudyCopy = {
  back: string;
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  githubUrl?: string;
  metrics: ReadonlyArray<{ value: string; label: string }>;
  overview: ReadonlyArray<{ label: string; value: string }>;
  problemTitle: string;
  problem: string;
  goalTitle: string;
  goal: string;
  screenshotsTitle: string;
  screenshots: ReadonlyArray<{ src: string; title: string; caption: string }>;
  workflowTitle: string;
  workflow: ReadonlyArray<{ title: string; description: string; icon: LucideIcon }>;
  processTitle: string;
  process: ReadonlyArray<{ title: string; description: string }>;
  technicalTitle: string;
  technical: ReadonlyArray<string>;
  impactTitle: string;
  impact: string;
  learningTitle: string;
  learning: string;
};

interface CaseStudyTemplateProps {
  copy: Record<"en" | "es", CaseStudyCopy>;
}

export default function CaseStudyTemplate({ copy }: CaseStudyTemplateProps) {
  const { locale, t: siteCopy } = useLocale();
  const t = copy[locale];
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const isModalOpen = modalIndex !== null;
  const modalImages = t.screenshots.map((screenshot) => ({
    src: screenshot.src,
    caption: screenshot.caption,
  }));
  const showPreviousImage = () => {
    setModalIndex((value) => (value === null ? 0 : (value - 1 + modalImages.length) % modalImages.length));
  };
  const showNextImage = () => {
    setModalIndex((value) => (value === null ? 0 : (value + 1) % modalImages.length));
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 py-8 sm:px-10 lg:px-16 xl:px-24 border-b border-border">
        <div className="max-w-[1280px] mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.back}
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,0.58fr)] gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-5">{t.eyebrow}</p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.02] max-w-5xl">
              {t.title}
            </h1>
          </div>

          <div className="lg:pt-16">
            <p className="text-xl sm:text-2xl leading-relaxed border-l-2 border-accent pl-5 mb-8">
              {t.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              {t.githubUrl ? (
                <a
                  href={t.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 font-medium hover:opacity-90 transition-opacity"
                >
                  <Github className="w-4 h-4" />
                  {t.primaryCta}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : null}
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 font-medium hover:border-accent hover:text-accent transition-colors"
              >
                {t.secondaryCta}
              </Link>
            </div>
            {t.screenshots[0] ? (
              <figure className="hidden lg:block mt-8 overflow-hidden border border-border bg-background shadow-xl">
                <div className="aspect-[16/10] bg-muted">
                  <img
                    src={t.screenshots[0].src}
                    alt={t.screenshots[0].title}
                    className="h-full w-full object-cover object-left-top"
                  />
                </div>
                <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                  {t.screenshots[0].caption}
                </figcaption>
              </figure>
            ) : null}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 lg:grid-cols-4 border border-border bg-muted/10 divide-x divide-y lg:divide-y-0 divide-border overflow-hidden">
          {t.metrics.map((metric) => (
            <div key={metric.label} className="p-6 sm:p-8 text-center bg-background">
              <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-accent leading-none mb-3">
                {metric.value}
              </p>
              <p className="text-sm sm:text-base text-foreground leading-tight">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-8 lg:gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {t.overview.map((item) => (
              <div key={item.label} className="border border-border bg-background p-5">
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">{item.label}</p>
                <p className="text-base leading-relaxed">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-border bg-muted/10 p-7">
              <h2 className="font-display text-3xl font-medium mb-4">{t.problemTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.problem}</p>
            </div>
            <div className="border border-border bg-muted/10 p-7">
              <h2 className="font-display text-3xl font-medium mb-4">{t.goalTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{t.goal}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 xl:px-24 bg-muted/10 border-y border-border">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-8">{t.screenshotsTitle}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {t.screenshots.map((screenshot, index) => (
              <figure
                key={screenshot.src}
                role="button"
                tabIndex={0}
                onClick={() => setModalIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setModalIndex(index);
                  }
                }}
                aria-label={`${siteCopy.projects.expandImage}: ${screenshot.title}`}
                className="group border border-border bg-background overflow-hidden cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="aspect-[16/10] bg-muted overflow-hidden">
                  <img src={screenshot.src} alt={screenshot.title} className="h-full w-full object-cover object-left-top" />
                </div>
                <figcaption className="p-5">
                  <p className="font-display text-2xl font-medium mb-2">{screenshot.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{screenshot.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-5">{t.workflowTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {t.workflow.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="border border-border bg-background p-6 hover:border-accent/50 transition-colors">
                  <Icon className="w-6 h-6 text-accent mb-5" />
                  <h3 className="font-display text-2xl font-medium mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 xl:px-24">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-5">{t.processTitle}</p>
            <div className="space-y-4">
              {t.process.map((item, index) => (
                <div key={item.title} className="border border-border bg-muted/10 p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent font-display font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="font-display text-2xl font-medium">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-5">{t.technicalTitle}</p>
            <div className="border border-border bg-background p-6">
              <ul className="space-y-4">
                {t.technical.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24 bg-foreground text-background">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="text-background/50 text-sm tracking-widest uppercase mb-5">{t.impactTitle}</p>
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">{t.impact}</p>
          </div>
          <div className="lg:pt-12">
            <p className="text-background/50 text-sm tracking-widest uppercase mb-5">{t.learningTitle}</p>
            <p className="text-background/75 text-xl leading-relaxed border-l-2 border-background/30 pl-5">{t.learning}</p>
          </div>
        </div>
      </section>

      <ImageModal
        images={modalImages}
        currentIndex={modalIndex ?? 0}
        isOpen={isModalOpen}
        onClose={() => setModalIndex(null)}
        onNext={showNextImage}
        onPrevious={showPreviousImage}
        labels={siteCopy.projects}
      />
    </main>
  );
}
