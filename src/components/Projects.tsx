"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  // Show only first 4 projects
  const featuredProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium uppercase tracking-wide mb-4">
          Proyectos
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-medium mb-12">
          Trabajos seleccionados
        </h2>

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl || "#"}
              className="group block p-6 sm:p-8 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="font-display text-xl sm:text-2xl font-medium group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
              </div>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="text-accent font-medium">{project.results}</span>
                <span className="text-muted-foreground">|</span>
                {project.tools.slice(0, 3).map((tool, i) => (
                  <span key={tool} className="text-muted-foreground">
                    {tool}{i < 2 && ","}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
