import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Experience | Divyansh Rathore",
  description: "Professional experience of Divyansh Rathore at Persistent Systems and Nomura.",
  openGraph: { title: "Experience | Divyansh Rathore", description: "Professional experience of Divyansh Rathore.", type: "website" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageIntro eyebrow="Experience" title="Professional experience" description="A career progression through software engineering, automation, and production-focused work." />
      <ExperienceTimeline />
    </>
  );
}
