"use client";

const mainTools = ["SQL", "Python", "Tableau", "Power BI"];
const otherTools = ["Pandas", "NumPy", "BigQuery", "AWS", "Git", "Excel"];

export default function Skills() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <span className="text-muted-foreground text-sm font-medium">Stack:</span>
          
          {mainTools.map((tool) => (
            <span key={tool} className="text-primary font-medium">
              {tool}
            </span>
          ))}
          
          <span className="text-muted-foreground">+</span>
          
          {otherTools.map((tool, i) => (
            <span key={tool} className="text-muted-foreground text-sm">
              {tool}{i < otherTools.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
