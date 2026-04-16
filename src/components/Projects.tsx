"use client";

import { projects } from "@/data/projects";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Projects() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="py-24 px-6 lg:px-12 xl:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-4">{t.title}</h2>
          <p className="text-muted-foreground max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group border border-border rounded-sm p-6 hover:border-accent/50 hover:shadow-sm transition-all duration-300 bg-card"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-muted/10 text-muted-foreground rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-xl md:text-2xl font-medium mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">
                  {t.technologies}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs text-muted-foreground"
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

              <div className="flex gap-4 pt-4 border-t border-border">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {t.code}
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.demo}
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
