import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { YouTubeSection } from "@/components/YouTubeSection";

export const metadata: Metadata = {
  title: "YouTube | Divyansh Rathore",
  description: "Latest videos and channel updates from Divyansh Rathore.",
  openGraph: { title: "YouTube | Divyansh Rathore", description: "Latest videos and channel updates from Divyansh Rathore.", type: "website" },
};

export default function YouTubePage() {
  return (
    <>
      <PageIntro eyebrow="YouTube" title="Divyansh Rathore on YouTube" description="Recent uploads and channel updates." />
      <YouTubeSection />
    </>
  );
}
