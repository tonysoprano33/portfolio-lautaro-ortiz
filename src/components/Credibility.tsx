"use client";

const metrics = [
  {
    value: "<30s",
    label: "Medical report generation",
    context: "Down from 15+ minutes",
  },
  {
    value: "50+",
    label: "Weekly appointments managed",
    context: "Zero double-bookings",
  },
  {
    value: "3",
    label: "Live production systems",
    context: "Clinics using daily",
  },
  {
    value: "<12ms",
    label: "API response time",
    context: "Enterprise analytics platform",
  },
];

export default function Credibility() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-background/50 text-sm font-medium mb-2">Impact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-background">
            Results That Matter
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="border-l-2 border-accent pl-4">
              <p className="font-display text-4xl sm:text-5xl font-bold text-accent mb-2">
                {metric.value}
              </p>
              <p className="text-background/80 text-sm font-medium mb-1">
                {metric.label}
              </p>
              <p className="text-background/50 text-xs">
                {metric.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
