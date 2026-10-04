import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Digital Seva Website | Divyansh Rathore",
  description: "A website created as a digital seva project for Shri Shri Krishna Balram / Gupt Vrindavan Dham.",
  openGraph: { title: "Digital Seva Website | Divyansh Rathore", description: "Digital seva website for Shri Shri Krishna Balram / Gupt Vrindavan Dham.", type: "article" },
};

export default function DigitalSevaPage() {
  return (
    <ProjectDetail
      eyebrow="Project · Digital seva"
      title="Shri Shri Krishna Balram / Gupt Vrindavan Dham"
      description="A website created as a digital seva project."
      sections={[
        { title: "Project context", body: "Shri Shri Krishna Balram / Gupt Vrindavan Dham." },
        { title: "Contribution", body: "Created a website as a digital seva project." },
      ]}
      note="Additional technology and outcome details have not been provided."
    />
  );
}
