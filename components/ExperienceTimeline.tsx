import { experienceTimeline } from "@/data/portfolio";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="border-y border-[#e5e5e1] bg-[#F7F7F5]">
      <div className="site-container py-7 md:py-9">
        <div className="relative border-t border-[#dcdedb] before:absolute before:bottom-0 before:left-[7px] before:top-0 before:w-px before:bg-[#d5dfe5] md:before:left-[calc(25%-1px)]">
          {[...experienceTimeline].reverse().map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className={`relative grid gap-3 border-b border-[#e5e5e1] py-5 pl-7 md:grid-cols-[1fr_3fr] md:gap-8 md:py-6 ${
                item.highlight ? "bg-[#E9EFF3] md:-mx-5 md:px-5" : ""
              }`}
            >
              <span className={`absolute left-[2px] top-6 h-3 w-3 rounded-full border-2 border-[#F7F7F5] ${item.highlight ? "bg-[#19324A]" : "bg-[#9aabb5]"} md:left-[calc(25%-6px)]`} aria-hidden="true" />
              <div className="flex flex-wrap items-center gap-3 md:pl-4">
                <p className="pt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#19324A]">{item.period}</p>
                {item.highlight ? <span className="rounded-sm bg-[#19324A] px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.12em] text-white">Current role</span> : null}
              </div>

              <div className="md:pl-4">
                <h3 className="text-lg font-medium tracking-[-0.02em] text-[#171717]">{item.role}</h3>
                <p className="mt-0.5 text-sm font-medium text-[#19324A]">{item.company}</p>
                <p className="mt-2 text-sm text-[#777b7d]">{item.location} <span className="px-1.5 text-[#b0b2b0]">·</span> {item.workMode}</p>
                {item.description ? <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5F6368]">{item.description}</p> : null}
                {item.skills && item.skills.length > 0 ? (
                  <p className="mt-3 text-xs leading-6 text-[#73777a]">{item.skills.join(" · ")}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
