import type { Metadata } from "next";
import { Achievements } from "@/components/Achievements";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Achievements | Divyansh Rathore",
  description: "Rajasthan State Topper recognition and the Sarla Birla Memorial Award.",
  openGraph: { title: "Achievements | Divyansh Rathore", description: "Academic recognition of Divyansh Rathore.", type: "website" },
};

export default function AchievementsPage() {
  return (
    <>
      <PageIntro eyebrow="Achievements" title="Recognition" description="Rajasthan State Topper — Polytechnic Computer Science, and the Sarla Birla Memorial Award." />
      <Achievements />
    </>
  );
}
