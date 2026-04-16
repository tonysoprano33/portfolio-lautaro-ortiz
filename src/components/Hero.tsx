"use client";

import { 
  ArrowRight, 
  Database, 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Activity,
  Target,
  Zap,
  Award,
  ChevronDown
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

const stats = [
  { value: "$2.4M", icon: TrendingUp },
  { value: "50+", icon: Target },
  { value: "30%", icon: Zap },
];

const companies = ["Google", "Mercado Libre", "Globant", "IBM", "Accenture"];

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-12">
      {/* Background gradients - subtle in both modes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4 dark:bg-accent/10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/4 dark:bg-gray-800/30" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 xl:px-24">
        {/* Top badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            {t.available}
          </span>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <p className="text-accent text-sm sm:text-base mb-3 tracking-wide uppercase font-semibold">
            Lautaro Ortiz
          </p>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 tracking-wide uppercase font-medium">
            {t.role}
          </p>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6">
            {t.headline}{" "}
            <span className="text-accent italic">{t.headlineAccent}</span>
          </h1>
          
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Tech Stack - Mobile optimized */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 px-2">
          {[
            "Python",
            "SQL",
            "Tableau", 
            "Power BI",
            "Machine Learning",
            "AWS",
            "BigQuery"
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card border border-border text-muted-foreground text-xs sm:text-sm rounded-md shadow-sm hover:border-accent/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:opacity-90 transition-opacity text-sm sm:text-base font-medium"
          >
            <Database className="w-4 h-4 sm:w-5 sm:h-5" />
            {t.ctaProjects}
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors text-sm sm:text-base font-medium"
          >
            <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" />
            {t.ctaContact}
          </a>
        </div>

        {/* Stats Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 sm:p-6 bg-card border border-border rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-display font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">{[t.stats.revenue, t.stats.projects, t.stats.efficiency][index]}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Companies/Social Proof */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mb-4">
            {t.companies}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-2 text-muted-foreground/60">
            {companies.map((company) => (
              <span key={company} className="text-sm sm:text-base font-medium">
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Data Visualization Cards - Desktop Only */}
        <div className="hidden lg:block relative h-[400px] max-w-5xl mx-auto mt-8">
          {/* Main metric card */}
          <div className="absolute top-0 left-1/4 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-primary">Revenue Growth</span>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-4xl font-display font-semibold text-primary mb-1">
              +127%
            </div>
            <div className="text-sm text-green-600 font-medium mb-4">
              vs período anterior
            </div>
            <div className="h-20 flex items-end gap-1.5">
              {[35, 55, 40, 70, 50, 85, 60, 90, 75, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-accent/20 rounded-t hover:bg-accent/30 transition-colors"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Performance card */}
          <div className="absolute top-8 right-1/4 w-64 bg-primary text-white rounded-xl shadow-lg p-5">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-accent" />
              <span className="text-xs text-gray-400">KPI Dashboard</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Conversion Rate</span>
                  <span>24.5%</span>
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full">
                  <div className="h-full w-[75%] bg-accent rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-400">Customer LTV</span>
                  <span>$4,250</span>
                </div>
                <div className="h-1.5 bg-gray-700 rounded-full">
                  <div className="h-full w-[60%] bg-green-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Achievement badge */}
          <div className="absolute bottom-16 left-1/3 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-medium text-amber-700">
              Top Performer Q4 2024
            </span>
          </div>

          {/* Secondary metric */}
          <div className="absolute bottom-0 right-1/3 w-56 bg-white border border-gray-200 rounded-xl shadow-lg p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-12 h-12">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="#e5e7eb" strokeWidth="3" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="3"
                    strokeDasharray="85 15"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
                  85%
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">Data Quality</p>
                <p className="text-xs text-muted">+12% este mes</p>
              </div>
            </div>
            <div className="flex gap-2">
              <PieChart className="w-4 h-4 text-accent" />
              <span className="text-xs text-muted">12 fuentes integradas</span>
            </div>
          </div>
        </div>

        {/* Mobile visual alternative */}
        <div className="lg:hidden flex justify-center mt-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
            <BarChart3 className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm text-accent font-medium">
              +127% ROI promedio en proyectos
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted uppercase tracking-wider hidden sm:block">
          Explorar
        </span>
        <ChevronDown className="w-5 h-5 text-muted animate-bounce" />
      </div>
    </section>
  );
}
