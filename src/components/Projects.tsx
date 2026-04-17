"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="py-32 sm:py-40 px-6 sm:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-8">
          Más proyectos
        </p>

        <div className="space-y-0">
          {otherProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.liveUrl || project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-12 border-t border-border hover:bg-muted/30 transition-colors -mx-6 sm:-mx-12 lg:-mx-24 px-6 sm:px-12 lg:px-24 cursor-pointer"
            >
              <div className="flex justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-accent text-sm font-medium">0{index + 2}</span>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-2">
                    <span className="font-medium text-foreground">Stack:</span>
                    {project.tools.join(" · ")}
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium text-foreground">Resultados:</span> {project.results}
                  </p>
                  
                  <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <span className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-accent transition-colors">
                        <Github className="w-4 h-4" />
                        Ver código →
                      </span>
                    )}
                  </div>
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
