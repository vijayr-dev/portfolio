import type { Metadata } from "next";
import { About } from "@/components/About";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About | Divyansh Rathore",
  description: "Professional biography, career journey, education, interests, and digital seva work of Divyansh Rathore.",
  openGraph: { title: "About | Divyansh Rathore", description: "Professional biography and career journey of Divyansh Rathore.", type: "website" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About Divyansh" title="Engineering, automation, and practical digital solutions." />
      <About />
    </>
  );
}
