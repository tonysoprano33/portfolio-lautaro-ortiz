"use client";

import { useState } from "react";
import HeroProject from "./HeroProject";
import Projects from "./Projects";

export default function ProjectShowcase() {
  const [selectedProjectId, setSelectedProjectId] = useState("0");

  const handleSelectProject = (projectId: string, shouldScroll = true) => {
    setSelectedProjectId(projectId);
    if (!shouldScroll) return;

    window.setTimeout(() => {
      document.getElementById("heroproject")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  };

  return (
    <>
      <HeroProject projectId={selectedProjectId} onSelectProject={(projectId) => handleSelectProject(projectId, false)} />
      <Projects selectedProjectId={selectedProjectId} onSelectProject={handleSelectProject} />
    </>
  );
}
