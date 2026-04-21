"use client";

import { Search, Code2, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Detect Problem",
    description: "Observe friction and inefficiency in real operations",
  },
  {
    icon: Code2,
    number: "02",
    title: "Build Solution",
    description: "Design practical software around actual user needs",
  },
  {
    icon: RefreshCw,
    number: "03",
    title: "Iterate Fast",
    description: "Use feedback to improve quickly and deliver value",
  },
];

export default function HowIWork() {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-12">
          How I Work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <span className="text-accent text-sm font-semibold mt-1">
                  {step.number}
                </span>
                <div>
                  <step.icon className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
