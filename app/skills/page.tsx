import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = {
  title: "Skills | Divyansh Rathore",
  description: "Backend, programming, automation, testing, DevOps, web, and digital skills of Divyansh Rathore.",
  openGraph: { title: "Skills | Divyansh Rathore", description: "Technical skills of Divyansh Rathore.", type: "website" },
};

export default function SkillsPage() {
  return (
    <>
      <PageIntro eyebrow="Skills" title="Tools and technologies" description="A focused set of technologies and capabilities across backend, automation, operations, and web development." />
      <Skills />
    </>
  );
}
