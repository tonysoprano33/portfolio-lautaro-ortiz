"use client";

const skillCategories = [
  {
    title: "Languages & Data",
    skills: "Python, SQL, Pandas",
  },
  {
    title: "Web Products",
    skills: "Next.js, React, TypeScript",
  },
  {
    title: "Business Solutions",
    skills: "Automation, Dashboards, Reporting, Process Design",
  },
];

export default function Skills() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-12">
          Skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-display text-lg font-semibold mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
