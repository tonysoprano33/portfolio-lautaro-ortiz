import type { Metadata } from "next";
import ClinicaEspiroCaseStudy from "@/components/ClinicaEspiroCaseStudy";

export const metadata: Metadata = {
  title: "Clinica Espiro Case Study",
  description: "Case study del sistema de Clinica Espiro: admision de pacientes, SO2/FC, revision medica, informes automaticos, calendario, estadisticas e historial.",
  alternates: {
    canonical: "/case-studies/clinica-espiro",
  },
};

export default function ClinicaEspiroCaseStudyPage() {
  return <ClinicaEspiroCaseStudy />;
}
