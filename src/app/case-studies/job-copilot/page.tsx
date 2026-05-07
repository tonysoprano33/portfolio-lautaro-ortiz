import type { Metadata } from "next";
import JobCopilotCaseStudy from "@/components/JobCopilotCaseStudy";

export const metadata: Metadata = {
  title: "Job Application Copilot Case Study",
  description:
    "Case study del Job Application Copilot de Lautaro Ortiz: CV parsing, ATS search, ranking local, red flags, mensajes y tracker.",
  alternates: {
    canonical: "/case-studies/job-copilot",
  },
};

export default function JobCopilotCaseStudyPage() {
  return <JobCopilotCaseStudy />;
}
