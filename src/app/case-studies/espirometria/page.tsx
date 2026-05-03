import type { Metadata } from "next";
import SpirometryCaseStudy from "@/components/SpirometryCaseStudy";

export const metadata: Metadata = {
  title: "Spirometry Report Generator Case Study",
  description:
    "Case study del generador de informes de espirometria de Lautaro Ortiz: Python, CustomTkinter, Word, Excel y automatizacion documental usada en trabajo real.",
  alternates: {
    canonical: "/case-studies/espirometria",
  },
};

export default function SpirometryCaseStudyPage() {
  return <SpirometryCaseStudy />;
}
