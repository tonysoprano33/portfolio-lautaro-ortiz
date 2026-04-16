"use client";

import { projects } from "@/data/projects";
import { ExternalLink, Github, TrendingUp } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-12 xl:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4">Proyectos</h2>
          <p className="text-muted max-w-2xl">
            Selección de proyectos que demuestran mi experiencia en análisis de datos,
            visualización y machine learning. Cada proyecto incluye datos reales de impacto empresarial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group border border-gray-200 rounded-sm p-6 hover:border-accent/50 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 text-muted rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-xl md:text-2xl font-medium mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-muted text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs text-muted mb-2 uppercase tracking-wide">
                  Tecnologías
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs text-secondary"
                    >
                      {tool}
                      {project.tools.indexOf(tool) < project.tools.length - 1 && (
                        <span className="mx-1">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-accent text-sm mb-4">
                <TrendingUp className="w-4 h-4" />
                <span>{project.results}</span>
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-100">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
