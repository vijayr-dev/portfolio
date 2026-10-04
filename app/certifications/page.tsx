import type { Metadata } from "next";
import { Certifications } from "@/components/Certifications";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Certifications | Divyansh Rathore",
  description: "Certifications and training in digital marketing, web development, BASH, Git, and Python.",
  openGraph: { title: "Certifications | Divyansh Rathore", description: "Training and certifications completed by Divyansh Rathore.", type: "website" },
};

export default function CertificationsPage() {
  return (
    <>
      <PageIntro eyebrow="Certifications" title="Training and continued learning" />
      <Certifications />
    </>
  );
}
