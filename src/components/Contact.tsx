"use client";

import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 xl:px-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
          {t.title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12">
          <a
            href="mailto:tu.email@ejemplo.com"
            className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 border border-gray-700 rounded-md hover:border-white hover:bg-white hover:text-primary transition-all text-sm sm:text-base"
          >
            <Mail className="w-5 h-5" />
            {t.email}
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 border border-gray-700 rounded-md hover:border-white hover:bg-white hover:text-primary transition-all text-sm sm:text-base"
          >
            <Linkedin className="w-5 h-5" />
            {t.linkedin}
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 border border-gray-700 rounded-md hover:border-white hover:bg-white hover:text-primary transition-all text-sm sm:text-base"
          >
            <Github className="w-5 h-5" />
            {t.github}
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 border border-gray-700 rounded-md hover:border-white hover:bg-white hover:text-primary transition-all text-sm sm:text-base"
          >
            <FileText className="w-5 h-5" />
            {t.cv}
          </a>
        </div>

        <footer className="pt-12 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Data Analyst Portfolio. 
            {t.footer}
          </p>
        </footer>
      </div>
    </section>
  );
}
