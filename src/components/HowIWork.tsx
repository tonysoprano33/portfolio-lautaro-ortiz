"use client";

import { Search, Code2, RefreshCw, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Analyze",
    subtitle: "Detect friction",
    description: "Study workflows, identify bottlenecks, measure wasted time",
  },
  {
    icon: Code2,
    number: "02",
    title: "Build",
    subtitle: "Software solution",
    description: "Design tools around real user needs, not assumptions",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Ship",
    subtitle: "Iterate & improve",
    description: "Deploy fast, gather feedback, optimize continuously",
  },
];

export default function HowIWork() {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-24 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-2">My Process</p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium">
            How I Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, index) => (
            <div key={step.number} className="group relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-px">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 text-border w-4 h-4" />
                </div>
              )}
              
              <div className="bg-muted/30 border border-border p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-accent font-display text-2xl font-bold">
                    {step.number}
                  </span>
                  <step.icon className="w-5 h-5 text-accent" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-1">
                  {step.title}
                </h3>
                <p className="text-accent text-sm font-medium mb-3">
                  {step.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
