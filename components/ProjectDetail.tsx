import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

type ProjectDetailProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections?: { title: string; body: string }[];
  technology?: string[];
  impact?: string;
  note?: string;
  connectionDiagram?: { left: string; connector: string; right: string };
};

export function ProjectDetail({ eyebrow, title, description, sections = [], technology = [], impact, note, connectionDiagram }: ProjectDetailProps) {
  return (
    <>
      <PageIntro eyebrow={eyebrow} title={title} description={description} />
      <article className="mx-auto max-w-7xl px-5 py-8 sm:px-8 md:py-12 lg:px-10">
        {impact ? (
          <div className="mb-9 grid gap-5 bg-[#19324A] px-5 py-6 text-white sm:grid-cols-[0.7fr_1.3fr] sm:items-center sm:px-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#c3d1dc]">Process improvement</p>
            <p className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">{impact}</p>
          </div>
        ) : null}

        {connectionDiagram ? (
          <div className="mb-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3 border border-[#d7e0e5] bg-[#E9EFF3] p-5 text-center sm:gap-6 sm:p-7">
            <p className="text-sm font-medium text-[#19324A] sm:text-base">{connectionDiagram.left}</p>
            <div className="text-[10px] leading-5 text-[#5F6368]">
              <span aria-hidden="true" className="block text-lg text-[#19324A]">→</span>
              {connectionDiagram.connector}
            </div>
            <p className="text-sm font-medium text-[#19324A] sm:text-base">{connectionDiagram.right}</p>
          </div>
        ) : null}

        {sections.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {sections.map((section) => (
              <section key={section.title} className="min-h-32 border border-[#e1e2de] bg-white p-5 sm:p-6">
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#19324A]">{section.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5F6368]">{section.body}</p>
              </section>
            ))}
          </div>
        ) : null}

        {technology.length > 0 ? (
          <section className="mt-5 border border-[#d7e0e5] bg-[#E9EFF3] p-5 sm:p-6">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#19324A]">Technology stack</h2>
            <p className="mt-3 text-sm leading-7 text-[#5F6368]">{technology.join(" · ")}</p>
          </section>
        ) : null}

        {note ? <p className="mt-5 border-l-2 border-[#19324A] bg-[#E9EFF3] px-5 py-4 text-sm leading-7 text-[#5F6368]">{note}</p> : null}

        <Link href="/projects" className="mt-12 inline-flex border-b border-[#d6d9da] pb-1 text-sm font-medium text-[#19324A] hover:border-[#19324A]">
          ← All projects
        </Link>
      </article>
    </>
  );
}
