"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight, Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-6 sm:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          Featured Projects
        </p>
        <p className="text-muted-foreground text-sm mb-10">
          Projects built for real clinics and business operations.
        </p>

        <div className="space-y-0">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.liveUrl || project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group block py-12 border-t border-border hover:bg-muted/30 transition-colors -mx-6 sm:-mx-12 lg:-mx-24 px-6 sm:px-12 lg:px-24 cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-accent text-sm font-medium">0{index + 1}</span>
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
                  
                  <div className="flex gap-4 mt-4" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Project Preview Placeholder */}
                <div className="w-full lg:w-64 h-40 bg-muted border border-border rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <ArrowUpRight className="w-6 h-6 text-accent" />
                    </div>
                    <p className="text-xs text-muted-foreground">Dashboard Preview</p>
                    <p className="text-[10px] text-muted-foreground/60 mt-1">Screenshot coming soon</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
