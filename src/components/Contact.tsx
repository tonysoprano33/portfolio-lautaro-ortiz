"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, FileDown, ArrowRight, Check, Copy } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const { t, locale } = useLocale();
  const email = t.contact.email;

  const handleEmailClick = async (e: React.MouseEvent) => {
    // Try to copy to clipboard as fallback
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.log("Clipboard write failed, relying on mailto:");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-24 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-background/50 text-sm tracking-widest uppercase mb-8">
          {t.contact.title}
        </p>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
          {t.contact.headline}
        </h2>

        <p className="text-background/60 text-lg sm:text-xl max-w-lg mx-auto mb-12">
          {t.contact.subheadline}
        </p>

        <div className="flex flex-col items-center gap-4 mb-12">
          {/* Email with copy feedback */}
          <div className="flex flex-col items-center gap-2">
            <a
              href={`mailto:${email}`}
              onClick={handleEmailClick}
              className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 text-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              {t.contact.cta}
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={handleEmailClick}
              className="inline-flex items-center gap-2 text-background/60 hover:text-background text-sm transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span>{t.contact.copySuccess}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{email} — {t.contact.copyHint}</span>
                </>
              )}
            </button>
          </div>

          <a
            href="/cv-lautaro-ortiz.pdf"
            download
            className="inline-flex items-center gap-3 border-2 border-background/30 text-background px-8 py-3 text-base font-medium hover:border-background hover:bg-background hover:text-foreground transition-all"
          >
            <FileDown className="w-5 h-5" />
            {t.contact.downloadCV}
          </a>
        </div>

        <div className="flex justify-center gap-8 pt-10 border-t border-background/20">
          <a 
            href="https://www.linkedin.com/in/lautaro-ortiz-b79866235/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-background/40 hover:text-background transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/tonysoprano33" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-background/40 hover:text-background transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        <p className="text-background/30 text-sm mt-12">
          {t.footer.copyright}
        </p>
      </div>
    </section>
  );
}
