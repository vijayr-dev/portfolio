import { education } from "@/data/portfolio";
import { SectionHeader } from "@/components/SectionHeader";

export function Education() {
  return (
    <section className="site-container py-14 sm:py-16 md:py-24">
      <SectionHeader
        eyebrow="Education"
        title="Academic foundation"
        description="Technical education and professional grounding from a leading institute in the region."
      />

      <div className="grid gap-x-10 md:grid-cols-2">
        {education.map((item) => (
          <div key={item.title} className="border-t border-[#dcdedb] py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#19324A]">{item.title}</p>
            <h3 className="mt-2 text-lg font-medium text-[#171717]">{item.institution}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
