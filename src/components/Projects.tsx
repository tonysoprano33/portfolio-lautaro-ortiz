"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";
import ProjectSlideshow from "./ProjectSlideshow";
import { useLocale } from "./LocaleProvider";

type PreviewSource = 
  | { type: "slideshow"; images: Array<{ src: string; caption: string }> }
  | { type: "local"; src: string }
  | { type: "microlink"; src: string }
  | null;

function getPreviewSource(project: typeof projects[0]): PreviewSource {
  // Priority: slideshow > local image > microlink screenshot > null
  if (project.previewSlideshow && project.previewSlideshow.length > 0) {
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
const projectKeyMap: Record<string, "respiratory" | "excel" | "nexus"> = {
  "1": "respiratory",
  "2": "excel", 
  "3": "nexus",
};

export default function Projects() {
  const { t, locale } = useLocale();

  return (
    <section id="projects" className="py-20 sm:py-28 px-6 sm:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          {t.projects.title}
        </p>
        <p className="text-muted-foreground text-sm mb-10">
          {t.projects.subtitle}
        </p>

        <div className="space-y-0">
          {projects.map((project, index) => {
            const preview = getPreviewSource(project);
            const projectKey = projectKeyMap[project.id];
            
            // Get translations safely
            const details = projectKey ? (t as any).projectDetails?.[projectKey] : null;
            const projectTitle = details?.title || project.title;
            const projectDesc = details?.description || project.description;
            const projectResults = details?.results || project.results;
            
            return (
              <div
                key={project.id}
                className="group py-12 border-t border-border hover:bg-muted/30 transition-colors -mx-6 sm:-mx-12 lg:-mx-24 px-6 sm:px-12 lg:px-24"
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-accent text-sm font-medium">0{index + 1}</span>
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
                    </div>
                  </div>
                  
                  {/* Project Preview */}
                  <div className="w-full lg:w-72 h-44 bg-muted border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group">
                    {preview ? (
                      preview.type === "slideshow" && preview.images ? (
                        <ProjectSlideshow images={preview.images} alt={project.title} />
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
