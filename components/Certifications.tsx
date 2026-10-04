import { certifications } from "@/data/portfolio";

const categories = ["Digital", "Web development", "Training", "Training", "Training"];

export function Certifications() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-9 sm:px-8 md:py-12 lg:px-10">
      <div className="mb-5 grid grid-cols-[48px_1fr] gap-4 px-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#82919a] sm:grid-cols-[64px_1.5fr_1fr_auto]">
        <span>No.</span><span>Certification</span><span className="hidden sm:block">Organization</span><span className="hidden sm:block">Category</span>
      </div>
      <div className="border-t border-[#d7dfe3]">
        {certifications.map((entry, index) => {
          const [name, ...organizationParts] = entry.split(" — ");
          const organization = organizationParts.join(" — ");
          return (
            <article key={entry} className={`grid grid-cols-[48px_1fr] gap-4 border-b border-[#d7dfe3] px-4 py-5 sm:grid-cols-[64px_1.5fr_1fr_auto] sm:items-center ${index % 2 === 0 ? "bg-white" : "bg-[#E9EFF3]"}`}>
              <span className="text-sm font-medium tracking-[0.08em] text-[#82919a]">0{index + 1}</span>
              <div>
                <h2 className="text-sm font-medium leading-6 text-[#171717]">{name}</h2>
                <p className="mt-1 text-xs text-[#777b7d] sm:hidden">{organization}</p>
              </div>
              <p className="hidden text-xs leading-5 text-[#5F6368] sm:block">{organization}</p>
              <span className="col-start-2 mt-1 w-fit border border-[#d7dfe3] px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-[#19324A] sm:col-auto sm:mt-0">{categories[index]}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}
