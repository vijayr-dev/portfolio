import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "KakushIN Healthcare Hackathon | Divyansh Rathore",
  description: "KakushIN Hackathon concept: connecting patients with healthcare workers based on location.",
  openGraph: { title: "KakushIN Healthcare Hackathon | Divyansh Rathore", description: "A healthcare concept connecting patients and healthcare workers by location.", type: "article" },
};

export default function HealthcareHackathonPage() {
  return (
    <ProjectDetail
      eyebrow="Project · Healthcare"
      title="KakushIN Hackathon"
      description="A healthcare system concept designed to connect patients with healthcare workers based on location."
      sections={[
        { title: "Concept", body: "A location-aware healthcare system concept." },
      ]}
      connectionDiagram={{ left: "Patients", connector: "Location-based connection", right: "Healthcare workers" }}
      note="Further details about solution implementation, technology, and individual role have not been provided."
    />
  );
}
