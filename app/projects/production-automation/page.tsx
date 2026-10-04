import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { featuredProject } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Automation in Production Environment | Divyansh Rathore",
  description: featuredProject.summary,
  openGraph: { title: "Automation in Production Environment | Divyansh Rathore", description: featuredProject.summary, type: "article" },
};

export default function ProductionAutomationPage() {
  return (
    <ProjectDetail
      eyebrow="Case study · Production automation"
      title={featuredProject.title}
      description={featuredProject.summary}
      impact="45-minute manual process → One-click automation"
      sections={[
        { title: "Problem", body: featuredProject.problem },
        { title: "Approach", body: "Created reusable automation framework/templates and automated file creation and execution." },
        { title: "Solution", body: featuredProject.solution },
      ]}
      technology={featuredProject.technology}
      note={featuredProject.highlights.join(" · ")}
    />
  );
}
