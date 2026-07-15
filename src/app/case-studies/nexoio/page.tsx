import type { Metadata } from "next";
import NexoIOCaseStudy from "@/components/NexoIOCaseStudy";

export const metadata: Metadata = {
  title: "NexoIO Industrial Monitoring Case Study",
  description: "Caso de estudio de NexoIO: monitoreo industrial local, ingesta HTTP, trazabilidad, alarmas y diagnostico offline-first.",
  alternates: {
    canonical: "/case-studies/nexoio",
  },
};

export default function NexoIOCaseStudyPage() {
  return <NexoIOCaseStudy />;
}
