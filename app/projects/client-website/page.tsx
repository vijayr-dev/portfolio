import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";

export const metadata: Metadata = {
  title: "Client Website | Divyansh Rathore",
  description: "Client website project by Divyansh Rathore.",
  openGraph: { title: "Client Website | Divyansh Rathore", description: "Client website project by Divyansh Rathore.", type: "article" },
};

export default function ClientWebsitePage() {
  return (
    <ProjectDetail
      eyebrow="Project · Web development"
      title="Client Website"
      description="A client website project."
      sections={[
        { title: "Project overview", body: "Client website." },
        { title: "Project information", body: "Role, technology, and outcome details have not been provided." },
      ]}
      note="Public project URL not provided."
    />
  );
}
