"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-12">
          Más proyectos
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-accent text-sm font-semibold">0{index + 2}</span>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.liveUrl || project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  aria-label="Ver proyecto"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-4">
                {project.tools.map((tool, i) => (
                  <span key={tool} className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-muted rounded">{tool}</span>
                    {i < project.tools.length - 1 && (
                      <span className="text-border">·</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Results */}
              <p className="text-sm text-foreground font-medium mb-4">
                {project.results}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                {project.githubUrl && project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    Ver código
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-all duration-200"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                    Visitar sitio
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
