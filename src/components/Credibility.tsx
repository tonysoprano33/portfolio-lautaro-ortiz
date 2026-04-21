"use client";

const impacts = [
  "Reports reduced from manual workflow to <30 sec",
  "Real clinic daily operations improved",
  "Custom systems delivered to real users",
  "Multi-format analytics exports automated",
];

export default function Credibility() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-12">
          Results / Impact
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-accent font-semibold">0{index + 1}</span>
              <p className="text-foreground">{impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
