"use client";

import { useState, useEffect } from "react";

type Language = "es" | "en";

interface LanguageState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export function useLanguage(): LanguageState {
  const [lang, setLangState] = useState<Language>("es");

  useEffect(() => {
    // Detectar idioma del navegador
    const detectLanguage = (): Language => {
      if (typeof window === "undefined") return "es";
      
      const browserLang = navigator.language || navigator.languages?.[0] || "es";
      const primaryLang = browserLang.split("-")[0].toLowerCase();
      
      // Solo soportamos español e inglés
      return primaryLang === "en" ? "en" : "es";
    };

    setLangState(detectLanguage());
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  return { lang, setLang };
}
