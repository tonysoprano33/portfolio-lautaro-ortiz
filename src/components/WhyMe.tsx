"use client";

import { useLocale } from "./LocaleProvider";
import { DollarSign, Clock, Code } from "lucide-react";

export default function WhyMe() {
  const { t } = useLocale();

  const differentiators = [
    {
      icon: DollarSign,
      title: t.whyMe?.builtToSell || "Built to Sell",
      description:
        t.whyMe?.builtToSellDesc ||
        "I do not just build demos. I shipped an Excel system to a real clinic that their staff uses daily."
    },
    {
      icon: Clock,
      title: t.whyMe?.speed || "Speed of Execution",
      description:
        t.whyMe?.speedDesc ||
        "The report generator went from idea to clinic deployment in 3 weeks. I prototype fast and iterate with real users."
    },
    {
      icon: Code,
      title: t.whyMe?.fullStack || "End-to-End",
      description:
        t.whyMe?.fullStackDesc ||
        "From Excel systems to React frontends and Python backends. One person who can own the whole solution."
    }
  ];

  const shippedStack = [
    "React / Next.js",
    "Python / FastAPI",
    "PostgreSQL",
    "Supabase",
    "Excel systems",
    "Docker",
    "TypeScript"
  ];

  return (
    <section id="why-me" className="py-20 sm:py-28 px-6 sm:px-12 lg:px-24 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">
          {t.whyMe?.title || "Why Me"}
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium mb-12">
          {t.whyMe?.headline || "Not another developer who disappears after shipping."}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 text-accent">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-medium pt-2">{item.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-[3.25rem]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-border">
          <p className="text-muted-foreground text-sm mb-6 text-center">
            {t.whyMe?.trust || "Technologies I've shipped to production:"}
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 text-muted-foreground/60 text-sm">
            {shippedStack.map((item, index) => (
              <div key={item} className="flex items-center gap-5">
                <span>{item}</span>
                {index < shippedStack.length - 1 ? <span>/</span> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
