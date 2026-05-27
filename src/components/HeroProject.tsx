"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import type { TranslationBundle } from "@/lib/i18n";
import ProjectSlideshow from "./ProjectSlideshow";
import { useLocale } from "./LocaleProvider";

type ProjectKey = "agenda" | "clinicalCover" | "jobCopilot" | "respiratory" | "excel" | "nexus";

const projectKeyMap: Record<string, ProjectKey> = {
  "1": "agenda",
  "2": "clinicalCover",
  "3": "jobCopilot",
  "4": "respiratory",
  "5": "excel",
  "6": "nexus",
};

interface HeroProjectProps {
  projectId: string;
  onSelectProject: (projectId: string) => void;
}

function getTranslatedSlides(
  project: (typeof projects)[number],
  details: TranslationBundle["projectDetails"][ProjectKey]
) {
  const slides = "slides" in details ? details.slides : undefined;

  return (project.previewSlideshow || []).map((image, index) => ({
    ...image,
    caption: slides?.[index] || image.caption,
  }));
}

export default function HeroProject({ projectId, onSelectProject }: HeroProjectProps) {
  const { t } = useLocale();
  const project = projects.find((item) => item.id === projectId) || projects[0];
  const projectKey = projectKeyMap[project.id] || "agenda";
  const details = t.projectDetails[projectKey];
  const spotlight = details.spotlight;
  const images = getTranslatedSlides(project, details);
  const primaryHref = project.liveUrl || project.githubUrl;
  const primaryLabel = project.liveUrl ? spotlight.primaryCta : t.heroProject.viewCode;
  const showCodeLink = project.githubUrl && project.liveUrl;
  const selectedIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = projects[(selectedIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(selectedIndex + 1) % projects.length];
  const displayTitle = spotlight.displayTitle;

  return (
    <section id="heroproject" className="min-h-screen lg:h-screen lg:min-h-[860px] bg-background text-foreground border-b border-border overflow-hidden relative [overflow-anchor:none]">
      <div className="min-h-screen lg:h-full px-6 sm:px-10 lg:px-12 xl:px-14 2xl:px-16 pt-10 pb-24 lg:pb-20 max-w-[1840px] mx-auto flex items-center">
        <div className="w-full lg:h-full flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(560px,1.1fr)_minmax(560px,1fr)] xl:grid-cols-[minmax(640px,1.08fr)_minmax(620px,1fr)] gap-8 lg:gap-10 xl:gap-14 items-center">
            <div className="lg:min-h-[690px] lg:flex lg:flex-col lg:justify-center">
            <div className="flex flex-wrap items-center gap-3 mb-4 lg:mb-5">
              <span className="px-3 py-1 bg-accent/15 text-accent text-xs font-medium tracking-wider uppercase rounded-full">
                {t.heroProject.badge}
              </span>
              <span className="text-muted-foreground text-sm">{spotlight.status}</span>
            </div>

            <p className="text-accent text-sm sm:text-base font-medium mb-3 lg:mb-4 lg:h-6">
              {spotlight.kicker}
            </p>

            <h2
              className="font-display font-medium leading-[0.95] lg:leading-[0.92] mb-4 lg:mb-6 lg:h-[128px] xl:h-[154px] max-w-[780px] text-4xl sm:text-5xl xl:text-6xl"
            >
              {displayTitle}
              <br />
              <span className="text-accent">{spotlight.headlineAccent}</span>
            </h2>

            <p className="text-base sm:text-lg xl:text-xl text-muted-foreground leading-relaxed mb-5 lg:mb-7 max-w-[760px] lg:h-[112px] overflow-hidden">
              {spotlight.quote}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-4 mb-5 lg:mb-7 max-w-[760px] lg:h-[82px]">
              {spotlight.stats.slice(0, 4).map((stat) => (
                <div key={stat.label} className="border-l-2 border-accent pl-4">
                  <p className="font-display text-3xl sm:text-4xl font-semibold text-accent leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-5 lg:mb-7 max-w-[760px] lg:h-[118px] overflow-hidden">
              {spotlight.proofPoints.slice(0, 4).map((point) => (
                <div key={point} className="flex gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="hidden sm:flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6 lg:mb-7 lg:h-[24px] overflow-hidden">
              {project.tools.map((item, index) => (
                <span key={item} className="flex items-center gap-x-4">
                  <span>{item}</span>
                  {index < project.tools.length - 1 && <span className="text-muted-foreground/50">/</span>}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mb-2 lg:mb-0 lg:h-[54px]">
              {primaryHref && (
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
                >
                  {project.liveUrl ? <ExternalLink className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                  {primaryLabel}
                </a>
              )}
              {project.caseStudyUrl && (
                <a
                  href={project.caseStudyUrl}
                  target={project.caseStudyUrl.startsWith("/") ? undefined : "_blank"}
                  rel={project.caseStudyUrl.startsWith("/") ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2 border-2 border-foreground text-foreground px-6 py-3 font-medium hover:bg-foreground hover:text-background transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  {t.projects.caseStudy}
                </a>
              )}
              {showCodeLink && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground px-1 py-3 font-medium hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  {t.heroProject.viewCode}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            </div>

            <div className="relative lg:justify-self-end w-full">
              <div className="absolute -inset-4 bg-accent/10 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <p className="text-muted-foreground text-sm">{spotlight.screenshotsTitle}</p>
                  <div className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span>{spotlight.status}</span>
                  </div>
                </div>
                <div className="w-full lg:w-[min(100%,780px)] xl:w-[min(100%,860px)] h-[34vh] sm:h-[42vh] lg:h-[58vh] min-h-[240px] sm:min-h-[320px] lg:min-h-[460px] max-h-[640px] bg-muted border border-border rounded-lg overflow-hidden shadow-2xl group">
                  {images.length > 0 ? (
                    <ProjectSlideshow images={images} alt={details.title} labels={t.projects} />
                  ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      {t.projects.previewUnavailable}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20">
            <div className="flex items-center gap-5 text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-2">
              <button
                type="button"
                onClick={() => onSelectProject(previousProject.id)}
                className="inline-flex h-10 w-10 items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
                aria-label={t.heroProject.previousProject}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2" aria-label={t.heroProject.projectProgress}>
                {projects.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelectProject(item.id)}
                    className={`h-2.5 rounded-full transition-all ${
                      item.id === project.id
                        ? "w-7 bg-accent"
                        : "w-2.5 bg-border hover:bg-accent/50"
                    }`}
                    aria-label={`${t.heroProject.viewProject} ${projectKeyMap[item.id] ? t.projectDetails[projectKeyMap[item.id]].title : item.title}`}
                    aria-current={item.id === project.id ? "true" : undefined}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => onSelectProject(nextProject.id)}
                className="inline-flex h-10 w-10 items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors"
                aria-label={t.heroProject.nextProject}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
