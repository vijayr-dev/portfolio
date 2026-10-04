import Link from "next/link";
import { profile, socialLinks } from "@/data/portfolio";
import { Portrait } from "@/components/Portrait";

export function Hero() {
  return (
    <section className="border-b border-[#e5e5e1]">
      <div className="site-container grid items-center gap-10 py-14 sm:gap-12 sm:py-16 md:py-20 lg:grid-cols-[1fr_0.72fr] lg:gap-20 lg:py-24">
        <div className="order-1">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#19324A]">Senior Analyst · Backend &amp; Automation</p>
          <h1 className="max-w-3xl text-[clamp(2.5rem,5.5vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.055em] text-[#171717]">
            <span className="uppercase">{profile.name}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#5F6368]">{profile.description}</p>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-7 sm:gap-y-4">
            <Link href="/experience" className="inline-flex items-center border-b border-[#19324A] pb-1.5 text-sm font-medium text-[#19324A] transition-colors hover:border-[#5F6368] hover:text-[#5F6368]">
              View Experience <span aria-hidden="true" className="ml-3">→</span>
            </Link>
            <Link href="/projects" className="inline-flex items-center border-b border-[#d6d9da] pb-1.5 text-sm font-medium text-[#19324A] transition-colors hover:border-[#19324A]">
              View Projects <span aria-hidden="true" className="ml-3">→</span>
            </Link>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center border-b border-transparent pb-1.5 text-sm font-medium text-[#5F6368] transition-colors hover:border-[#19324A] hover:text-[#19324A]">
              LinkedIn <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </div>
          <div className="mt-12 border-t border-[#e5e5e1] pt-5">
            <p className="text-xs leading-5 text-[#777b7d]">{profile.badge}</p>
          </div>
        </div>

        <figure className="order-2 mx-auto w-full max-w-[410px] lg:mx-0 lg:ml-auto">
          <div className="overflow-hidden rounded-[3px] bg-[#eeefeb]">
            <Portrait priority sizes="(max-width: 768px) 90vw, 36vw" />
          </div>
          <figcaption className="mt-3 flex flex-col gap-1 border-t border-[#deded9] pt-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#666b70] sm:flex-row sm:items-center sm:justify-between">
            <span>Professional profile</span>
            <span>Senior Analyst — Nomura</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
