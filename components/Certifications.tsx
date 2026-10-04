import { certifications } from "@/data/portfolio";

const categories = ["Digital", "Web development", "Training", "Training", "Training"];

export function Certifications() {
  return (
    <section className="site-container py-9 md:py-12">
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((entry, index) => {
          const [name, ...organizationParts] = entry.split(" — ");
          const organization = organizationParts.join(" — ");
          return (
            <article key={entry} className={`flex min-h-40 flex-col border p-5 sm:p-6 ${index % 2 === 0 ? "border-[#e1e2de] bg-white" : "border-[#d7e0e5] bg-[#E9EFF3]"}`}>
              <div className="flex items-start justify-between gap-4">
                <span className="text-sm font-medium tracking-[0.08em] text-[#82919a]">0{index + 1}</span>
                <span className="w-fit border border-[#d7dfe3] px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-[#19324A]">{categories[index]}</span>
              </div>
              <h2 className="mt-5 text-sm font-medium leading-6 text-[#171717]">{name}</h2>
              <p className="mt-2 text-xs leading-5 text-[#5F6368]">{organization}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
