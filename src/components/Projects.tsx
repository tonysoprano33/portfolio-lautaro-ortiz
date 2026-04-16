"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  // Show remaining projects (skip first one which is featured)
  const otherProjects = projects.slice(1, 4);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">
          Más proyectos
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-medium mb-12">
          Otros trabajos
        </h2>

        <div className="space-y-0 divide-y divide-border">
          {otherProjects.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl || "#"}
              className="group block py-8 hover:pl-4 transition-all duration-300"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-medium group-hover:text-accent transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                  <p className="text-accent text-sm mt-3 font-medium">
                    {project.results}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
