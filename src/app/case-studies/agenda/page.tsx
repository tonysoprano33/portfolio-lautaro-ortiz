import type { Metadata } from "next";
import AgendaCaseStudy from "@/components/AgendaCaseStudy";

export const metadata: Metadata = {
  title: "Dental Appointment System Case Study",
  description:
    "Case study del sistema odontologico de Lautaro Ortiz: agenda, pacientes, pagos, odontograma, Supabase, PWA y flujo real usado en una clinica.",
  alternates: {
    canonical: "/case-studies/agenda",
  },
};

export default function AgendaCaseStudyPage() {
  return <AgendaCaseStudy />;
}
