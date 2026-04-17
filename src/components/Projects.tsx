"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const otherProjects = projects.slice(1, 4);

  return (
    <section id="projects" className="py-32 sm:py-40 px-6 sm:px-12 lg:px-24 bg-background">
      <div>
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-8">
          Más proyectos
        </p>

        <div className="space-y-0">
          {otherProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.githubUrl || "#"}
              className="group block py-12 border-t border-border hover:bg-muted/30 transition-colors -mx-6 sm:-mx-12 lg:-mx-24 px-6 sm:px-12 lg:px-24"
            >
              <div className="flex justify-between items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-accent text-sm font-medium">0{index + 2}</span>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
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
