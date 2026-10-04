import { education, experienceTimeline, profile } from "@/data/portfolio";
import { Portrait } from "@/components/Portrait";

export function About() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-14 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <figure className="relative w-full max-w-md self-start">
          <div className="absolute -bottom-3 -right-3 -z-10 h-2/3 w-2/3 bg-[#E9EFF3]" aria-hidden="true" />
          <Portrait sizes="(max-width: 768px) 90vw, 30vw" />
          <figcaption className="mt-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#666b70]">
            Senior Analyst — Nomura
          </figcaption>
        </figure>

        <div>
          <p className="max-w-xl text-xl font-medium leading-8 tracking-[-0.02em] text-[#171717]">
            Divyansh Rathore is a software professional with experience in backend development, automation, web development, production environments, and software engineering. {profile.currentRole}
          </p>
          <p className="mt-5 text-base leading-7 text-[#5F6368]">
            His professional journey spans Persistent Systems and Nomura, progressing from a software engineering internship to his current senior analyst role.
          </p>

          <div className="mt-7 border-t border-[#deded9] pt-4">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#19324A]">01 · Career journey</h2>
            <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {experienceTimeline.map((item) => (
                <div key={`${item.company}-${item.role}`} className="border-b border-[#e5e5e1] py-3">
                  <p className="text-xs text-[#777b7d]">{item.period}</p>
                  <p className="mt-1 text-sm font-medium text-[#171717]">{item.role}</p>
                  <p className="text-sm text-[#5F6368]">{item.company}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 border-t border-[#deded9] pt-4">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#19324A]">02 · Education</h2>
            <div className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {education.map((item) => (
                <div key={item.title} className="border-b border-[#e5e5e1] py-3">
                  <p className="text-sm font-medium text-[#171717]">{item.title}</p>
                  <p className="mt-1 text-sm text-[#5F6368]">{item.institution}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="mt-10 grid gap-0 border-y border-[#d3dde3] bg-[#E9EFF3] sm:grid-cols-2">
        <div className="p-5 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#19324A]">03 · Professional interests</p>
          <p className="mt-3 text-sm leading-6 text-[#4f5b62]">Backend engineering · Automation · Reliable systems · Practical digital solutions</p>
        </div>
        <div className="border-t border-[#d3dde3] p-5 sm:border-l sm:border-t-0 sm:p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#19324A]">04 · Digital seva / volunteering</p>
          <p className="mt-3 text-sm leading-6 text-[#4f5b62]">Created a website as a digital seva project for Shri Shri Krishna Balram / Gupt Vrindavan Dham.</p>
        </div>
      </div>
    </div>
  );
}
