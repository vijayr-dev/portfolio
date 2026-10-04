import { otherProjects } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";

export function ProjectsGrid() {
  return (
    <section id="projects" className="border-y border-[#e5e5e1] bg-[#f1f2ef]">
      <div className="site-container py-14 sm:py-16 md:py-24">
        <SectionHeader
          eyebrow="Projects"
          title="Additional work"
          description="Selected project work across client development, automation, healthcare concepting, and community-driven digital initiatives."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {otherProjects.map((project) => (
            <article key={project.title} className="group flex min-h-[220px] flex-col border border-[#e1e2de] bg-white p-6 transition-transform duration-200 hover:-translate-y-0.5 sm:p-8">
              <div className="flex items-start justify-between gap-6">
                <h3 className="max-w-md text-xl font-medium tracking-[-0.025em] text-[#171717]">{project.title}</h3>
                <span className="shrink-0 pt-1 text-[10px] uppercase tracking-[0.12em] text-[#777b7d]">{project.tag}</span>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#5F6368]">{project.description}</p>
              <a href={project.href} className="mt-auto inline-flex w-fit items-center border-b border-[#d6d9da] pt-6 text-xs font-medium text-[#19324A] transition-colors hover:border-[#19324A]">
                View project <span aria-hidden="true" className="ml-2">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
