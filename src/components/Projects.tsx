"use client";

import { projects } from "@/data/projects";
import type { Project } from "@/data/projects";
import type { TranslationBundle } from "@/lib/i18n";
import type { MouseEvent } from "react";
import { ArrowUpRight, BookOpen, Github } from "lucide-react";
import ProjectSlideshow from "./ProjectSlideshow";
import { useLocale } from "./LocaleProvider";

type PreviewSource = 
  | { type: "slideshow"; images: Array<{ src: string; caption: string }> }
  | { type: "local"; src: string }
  | { type: "microlink"; src: string }
  | null;

type ProjectKey = "agenda" | "respiratory" | "excel" | "nexus";
type ProjectDetails = TranslationBundle["projectDetails"][ProjectKey];

function getTranslatedSlides(details: ProjectDetails | null): string[] | undefined {
  if (details && "slides" in details && Array.isArray(details.slides)) {
    return details.slides as string[];
  }
  return undefined;
}

function getPreviewSource(project: Project, translatedSlides?: string[]): PreviewSource {
  // Priority: slideshow > local image > microlink screenshot > null
  if (project.previewSlideshow && project.previewSlideshow.length > 0) {
    if (translatedSlides && translatedSlides.length > 0) {
      const translatedImages = project.previewSlideshow.map((img, index) => ({
        src: img.src,
        caption: translatedSlides[index] || img.caption
      }));
      return { type: "slideshow", images: translatedImages };
    }
    return { type: "slideshow", images: project.previewSlideshow };
  }
  if (project.previewImage) return { type: "local", src: project.previewImage };
  if (project.liveUrl && project.liveUrl !== "#") {
    return { 
      type: "microlink", 
      src: `https://api.microlink.io/?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&embed=screenshot.url&wait=5000` 
    };
  }
  return null;
}

// Map project ID to translation key
const projectKeyMap: Record<string, ProjectKey> = {
  "1": "nexus",
  "2": "agenda",
  "3": "respiratory",
  "4": "excel",
};

interface ProjectsProps {
  selectedProjectId: string;
  onSelectProject: (projectId: string) => void;
}

export default function Projects({ selectedProjectId, onSelectProject }: ProjectsProps) {
  const { t } = useLocale();
  const secondaryProjects = projects.filter((project) => project.id !== selectedProjectId);

  const handleProjectClick = (event: MouseEvent<HTMLDivElement>, projectId: string) => {
    if ((event.target as HTMLElement).closest("a,button")) return;
    onSelectProject(projectId);
  };

  return (
    <section id="projects" className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          {t.projects.title}
        </p>
        <p className="text-muted-foreground text-sm mb-10">
          {t.projects.subtitle}
        </p>

        <div className="space-y-0">
          {secondaryProjects.map((project) => {
            const projectKey = projectKeyMap[project.id];
            
            // Get translations safely
            const details = projectKey ? t.projectDetails[projectKey] : null;
            const preview = getPreviewSource(project, getTranslatedSlides(details));
            const projectTitle = details?.title || project.title;
            const projectDesc = details?.description || project.description;
            const projectResults = details?.results || project.results;
            
            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                onClick={(event) => handleProjectClick(event, project.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelectProject(project.id);
                  }
                }}
                className="group py-12 border-t border-border hover:bg-muted/30 transition-colors -mx-6 sm:-mx-12 lg:-mx-24 px-6 sm:px-12 lg:px-24 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-accent text-sm font-medium">0{project.id}</span>
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium group-hover:text-accent transition-colors">
                        {projectTitle}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-4">
                      {projectDesc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-2">
                      <span className="font-medium text-foreground">{t.projects.stack}</span>
                      {project.tools.join(" · ")}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-medium text-foreground">{t.projects.results}</span> {projectResults}
                    </p>
                    
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project.id)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        {t.projects.promote}
                      </button>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          {t.projects.viewCode}
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                          {t.projects.liveDemo}
                        </a>
                      )}
                      {project.caseStudyUrl && (
                        <a
                          href={project.caseStudyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          <BookOpen className="w-4 h-4" />
                          {t.projects.caseStudy}
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Project Preview */}
                  <div className="w-full lg:w-72 h-44 bg-muted border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group">
                    {preview ? (
                      preview.type === "slideshow" && preview.images ? (
                        <ProjectSlideshow images={preview.images} alt={project.title} labels={t.projects} />
                      ) : preview.type === "local" || preview.type === "microlink" ? (
                        <img
                          src={preview.src}
                          alt={`${project.title} preview`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : null
                    ) : (
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <ArrowUpRight className="w-6 h-6 text-accent" />
                        </div>
                        <p className="text-xs text-muted-foreground">{t.projects.previewUnavailable}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
