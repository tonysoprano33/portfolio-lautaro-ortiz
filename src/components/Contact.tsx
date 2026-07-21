"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, FileDown, ArrowRight } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function Contact() {
  const { t, locale } = useLocale();
  const email = t.contact.email;
  const [copied, setCopied] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const subject = locale === "es" ? "Consulta desde tu portfolio" : "Portfolio inquiry";
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Ignore clipboard failures and keep the mail action available.
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
          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setShowFallback(true);
                window.setTimeout(() => {
                  window.location.href = mailtoHref;
                }, 50);
              }}
              aria-label={t.contact.cta}
              className="inline-flex items-center gap-3 bg-background text-foreground px-10 py-5 text-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              {t.contact.cta}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={copyEmail}
              className="text-background/50 text-sm transition-colors hover:text-background"
              aria-label={copied ? t.contact.copySuccess : t.contact.copyHint}
            >
              {email}
            </button>
            <p className="text-background/35 text-xs" aria-live="polite">
              {copied ? t.contact.copySuccess : t.contact.copyHint}
            </p>
            {showFallback && (
              <div className="mt-3 rounded-2xl border border-background/15 bg-background/5 px-4 py-3 text-center">
                <p className="text-background/55 text-xs mb-3">
                  {t.contact.mailFallback}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={gmailHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-background/25 text-background px-4 py-2 text-sm font-medium hover:bg-background hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {t.contact.openGmail}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 border border-background/25 text-background px-4 py-2 text-sm font-medium hover:bg-background hover:text-foreground transition-colors"
                  >
                    {t.contact.copyAction}
                  </button>
                </div>
              </div>
            )}
          </div>

          <a
            href={locale === "es" ? "/cv-lautaro-ortiz-esp.pdf" : "/cv-lautaro-ortiz.pdf"}
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
