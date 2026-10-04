import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { otherProjects } from "@/data/portfolio";
import Link from "next/link";
import { featuredProject, achievements, experienceTimeline } from "@/data/portfolio";
import { YouTubeSection } from "@/components/YouTubeSection";

export const metadata: Metadata = {
  title: "Divyansh Rathore | Senior Analyst | Backend & Automation",
  description: "Software professional focused on backend engineering, automation, reliable systems, and practical digital solutions.",
  openGraph: {
    title: "Divyansh Rathore | Senior Analyst | Backend & Automation",
    description: "Software professional focused on backend engineering, automation, reliable systems, and practical digital solutions.",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <section className="border-b border-[#e5e5e1] bg-white">
        <div className="site-container grid grid-cols-2 gap-y-0 md:grid-cols-4">
          {[
            ["01", "Professional experience"],
            ["02", "Backend engineering"],
            ["03", "Automation"],
            ["04", "State topper"],
          ].map(([number, label]) => (
            <div key={number} className="border-r border-[#e5e5e1] py-5 pr-4 first:pl-0 last:border-r-0 md:px-5">
              <span className="text-[10px] font-semibold tracking-[0.12em] text-[#82929d]">{number}</span>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[#19324A]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#19324A] text-white">
        <div className="site-container grid gap-8 py-12 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c3d1dc]">Featured project · Production automation</p>
            <h2 className="mt-3 max-w-xl text-3xl font-medium tracking-[-0.04em] sm:text-4xl">{featuredProject.title}</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#d1dbe2]">{featuredProject.summary}</p>
            <Link href="/projects/production-automation" className="mt-5 inline-flex border-b border-[#c3d1dc] pb-1 text-xs font-medium text-white hover:border-white">
              Explore case study <span aria-hidden="true" className="ml-2">↗</span>
            </Link>
          </div>
          <div className="flex items-center justify-between gap-4 border-t border-white/20 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <div>
              <p className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">45 min</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#c3d1dc]">Manual process</p>
            </div>
            <span className="text-xl text-[#c3d1dc]" aria-hidden="true">→</span>
            <div>
              <p className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">One click</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#c3d1dc]">Automation</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container grid gap-8 py-12 md:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#19324A]">Career snapshot</p>
          <h2 className="mt-2 text-2xl font-medium tracking-[-0.03em] text-[#171717]">A steady progression</h2>
        </div>
        <div className="grid grid-cols-4 border-y border-[#dcdedb]">
          {[
            { year: "2022", role: experienceTimeline[0].role },
            { year: "2023", role: `${experienceTimeline[1].role} / ${experienceTimeline[2].role}` },
            { year: "2024", role: `${experienceTimeline[2].role} / ${experienceTimeline[3].role}` },
            { year: "Present", role: experienceTimeline[3].role },
          ].map((item, index) => (
            <div key={item.year} className="border-r border-[#e5e5e1] py-4 pl-2 last:border-0 sm:pl-4">
              <span className="text-[10px] text-[#83919b]">0{index + 1}</span>
              <p className="mt-1 text-sm font-medium text-[#19324A]">{item.year}</p>
              <p className="mt-2 hidden text-[10px] leading-4 text-[#777b7d] sm:block">{item.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#dce2e6] bg-[#E9EFF3]">
        <div className="site-container grid gap-6 py-9 md:grid-cols-[1fr_2fr] md:items-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#19324A]">Recognition</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xl font-medium text-[#171717]">{achievements[0].title}</p>
              <p className="mt-1 text-sm text-[#5F6368]">{achievements[0].subtitle}</p>
            </div>
            <Link href="/achievements" className="text-xs font-medium text-[#19324A] hover:underline">View achievement ↗</Link>
          </div>
        </div>
      </section>

      <YouTubeSection />

      <section className="bg-white">
        <div className="site-container flex flex-col gap-5 py-9 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#19324A]">Explore more</p>
            <h2 className="mt-2 text-xl font-medium text-[#171717]">Experience, projects, and more.</h2>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs font-medium text-[#19324A]">
            {otherProjects.slice(0, 2).map((project) => <Link key={project.title} href={project.href} className="hover:underline">{project.title} ↗</Link>)}
            <Link href="/contact" className="hover:underline">Get in touch ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
