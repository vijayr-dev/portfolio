import { featuredProject } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";

export function FeaturedProject() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24 lg:px-10">
      <SectionHeader
        eyebrow="Featured project"
        title={featuredProject.title}
        description={featuredProject.summary}
      />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div className="space-y-8">
          {[
            ["The problem", featuredProject.problem],
            ["The solution", featuredProject.solution],
          ].map(([label, text]) => (
            <div key={label} className="grid gap-2 border-t border-[#deded9] pt-4 sm:grid-cols-[150px_1fr] sm:gap-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#19324A]">{label}</p>
              <p className="text-sm leading-7 text-[#555a5d]">{text}</p>
            </div>
          ))}
          <div className="grid gap-2 border-t border-[#deded9] pt-4 sm:grid-cols-[150px_1fr] sm:gap-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#19324A]">The impact</p>
            <p className="text-sm leading-7 text-[#555a5d]">{featuredProject.impact}</p>
          </div>
        </div>

        <aside className="border-y border-[#dcdedb] py-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#19324A]">Process improvement</p>
          <div className="mt-5 flex items-baseline gap-3">
            <span className="text-3xl font-medium tracking-[-0.04em] text-[#171717]">45 min</span>
            <span className="text-sm text-[#777b7d]">manual process</span>
          </div>
          <div className="my-3 text-xl leading-none text-[#8b9295]" aria-hidden="true">↓</div>
          <p className="text-2xl font-medium tracking-[-0.03em] text-[#19324A]">One-click automation</p>

          <div className="mt-8 border-t border-[#e5e5e1] pt-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#19324A]">Technology</p>
            <p className="mt-3 text-xs leading-6 text-[#6b7073]">{featuredProject.technology.join(" · ")}</p>
          </div>
          <div className="mt-5 border-t border-[#e5e5e1] pt-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#19324A]">Highlights</p>
            <ul className="mt-3 space-y-2">
              {featuredProject.highlights.map((item) => (
                <li key={item} className="flex gap-2 text-xs leading-5 text-[#62676a]">
                  <span className="text-[#19324A]" aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
