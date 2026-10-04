import { achievements } from "@/data/portfolio";

export function Achievements() {
  const achievement = achievements[0];

  return (
    <section className="site-container py-9 md:py-12">
      <div className="grid gap-3 md:grid-cols-2">
        <article className="relative overflow-hidden bg-[#19324A] p-6 text-white sm:p-8">
          <span className="absolute -right-2 -top-12 select-none text-[10rem] font-medium leading-none text-white/[0.04]" aria-hidden="true">01</span>
          <p className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c3d1dc]">Academic distinction</p>
          <h2 className="relative mt-8 max-w-md text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl">{achievement.title}</h2>
          <p className="relative mt-3 text-sm text-[#d1dbe2]">{achievement.subtitle}</p>
        </article>
        <article className="relative flex min-h-56 flex-col justify-between border border-[#d7e0e5] bg-[#E9EFF3] p-6 sm:p-8">
          <span className="absolute -right-2 -top-12 select-none text-[10rem] font-medium leading-none text-[#19324A]/[0.04]" aria-hidden="true">02</span>
          <p className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-[#19324A]">Award</p>
          <h2 className="relative mt-8 max-w-md text-2xl font-medium leading-tight tracking-[-0.035em] text-[#171717] sm:text-3xl">{achievement.award}</h2>
        </article>
      </div>
    </section>
  );
}
