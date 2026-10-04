import { skillGroups } from "@/data/portfolio";

const categoryNames: Record<string, string> = {
  "Programming / Backend": "Backend & Programming",
  "Automation / Testing": "Automation & Testing",
  "DevOps / Automation": "DevOps & Automation",
};

export function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-9 sm:px-8 md:py-12 lg:px-10">
      <div className="grid gap-3 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <article key={group.title} className={`border p-5 sm:p-6 ${index % 2 === 0 ? "border-[#e1e2de] bg-white" : "border-[#d7e0e5] bg-[#E9EFF3]"} ${index === skillGroups.length - 1 ? "md:col-span-2" : ""}`}>
            <div className="flex items-start gap-4">
              <span className="text-xs font-semibold tracking-[0.12em] text-[#8a9aa4]">0{index + 1}</span>
              <div>
                <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#19324A]">{categoryNames[group.title] ?? group.title}</h2>
                <p className="mt-3 text-base leading-7 text-[#343a3e]">{group.items.join(" · ")}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
