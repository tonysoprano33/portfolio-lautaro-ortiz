import type { Metadata } from "next";
import ExcelClinicCaseStudy from "@/components/ExcelClinicCaseStudy";

export const metadata: Metadata = {
  title: "Excel Clinic System Case Study",
  description:
    "Case study del sistema Excel para clinica medica de Lautaro Ortiz: turnos, finanzas, dashboards, formulas y flujo usado por secretarias.",
  alternates: {
    canonical: "/case-studies/excel-clinica",
  },
};

export default function ExcelClinicCaseStudyPage() {
  return <ExcelClinicCaseStudy />;
}
