import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { featuredProject, otherProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects | Divyansh Rathore",
  description: "Selected work in production automation, healthcare concepting, client web development, and digital seva.",
  openGraph: { title: "Projects | Divyansh Rathore", description: "Selected projects by Divyansh Rathore.", type: "website" },
};

const projects = [
  {
    title: featuredProject.title,
    description: featuredProject.summary,
    href: "/projects/production-automation",
    tag: "Automation",
    technology: featuredProject.technology.join(" · "),
  },
  ...otherProjects.map((project) => ({
    ...project,
    href: project.title.startsWith("Healthcare")
      ? "/projects/healthcare-hackathon"
      : project.title.startsWith("Client")
        ? "/projects/client-website"
        : project.title.startsWith("Digital Seva")
          ? "/projects/digital-seva"
          : "/projects#other-web",
    technology: "",
  })),
];

export default function ProjectsPage() {
  const [featured, ...additional] = projects;

  return (
    <>
      <PageIntro eyebrow="Projects" title="Selected work" description="Engineering and web projects across production automation, healthcare concepting, client work, and digital seva." />
      <section className="mx-auto max-w-7xl px-5 py-9 sm:px-8 md:py-12 lg:px-10">
        <article className="grid overflow-hidden border border-[#d7e0e5] bg-[#E9EFF3] md:grid-cols-[1.15fr_0.85fr]">
          <div className="p-6 sm:p-9">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#19324A]">Featured project · 01</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] text-[#171717]">{featured.title}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#5F6368]">{featured.description}</p>
            <p className="mt-5 text-xs leading-6 text-[#687780]">{featured.technology}</p>
            <Link href={featured.href} className="mt-6 inline-flex border-b border-[#19324A] pb-1 text-xs font-medium text-[#19324A]">View case study <span className="ml-2">↗</span></Link>
          </div>
          <div className="flex items-center justify-between gap-4 bg-[#19324A] p-6 text-white sm:p-9">
            <div><p className="text-3xl font-medium">45 min</p><p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#c3d1dc]">Manual process</p></div>
            <span className="text-xl text-[#c3d1dc]" aria-hidden="true">→</span>
            <div><p className="text-2xl font-medium sm:text-3xl">One click</p><p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#c3d1dc]">Automation</p></div>
          </div>
        </article>

        <div className="mb-4 mt-9 flex items-center justify-between border-b border-[#dcdedb] pb-3">
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#19324A]">Project grid</h2>
          <span className="text-[10px] text-[#777b7d]">02—05</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {additional.map((project, index) => (
            <article key={project.title} id={project.title === "Other Web Development Projects" ? "other-web" : undefined} className={`group flex min-h-[190px] flex-col border p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:p-6 ${index % 2 === 0 ? "border-[#e1e2de] bg-white" : "border-[#d7e0e5] bg-[#E9EFF3]"}`}>
              <div className="flex items-start justify-between gap-5">
                <span className="text-[10px] font-semibold tracking-[0.14em] text-[#7b8c97]">0{index + 2}</span>
                <span className="text-[10px] uppercase tracking-[0.12em] text-[#777b7d]">{project.tag}</span>
              </div>
              <h3 className="mt-3 text-lg font-medium tracking-[-0.02em] text-[#171717]">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5F6368]">{project.description}</p>
              {project.technology ? <p className="mt-2 text-xs leading-5 text-[#777b7d]">{project.technology}</p> : null}
              <Link href={project.href} className="mt-auto inline-flex w-fit border-b border-[#d6d9da] pt-4 text-xs font-medium text-[#19324A] hover:border-[#19324A]">
                View project <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
