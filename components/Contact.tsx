import { socialLinks } from "@/data/portfolio";

const channels = [
  { name: "LinkedIn", description: "Professional profile and network", href: socialLinks.linkedin, number: "01" },
  { name: "Instagram", description: "Personal updates", href: socialLinks.instagram, number: "02" },
  { name: "YouTube", description: "Videos and channel updates", href: socialLinks.youtube, number: "03" },
];

export function Contact() {
  return (
    <section className="bg-[#19324A] text-white">
      <div className="site-container py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c3d1dc]">Contact</p>
            <h2 className="mt-3 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">Let&apos;s connect.</h2>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#d1dbe2]">
              Interested in backend engineering, automation, or professional collaboration? Find Divyansh on these channels.
            </p>
          </div>

          <div className="border-t border-white/20">
            {channels.map((channel) => (
              <a key={channel.name} href={channel.href} target="_blank" rel="noreferrer" className="group grid grid-cols-[40px_1fr_auto] items-center gap-3 border-b border-white/20 py-4 transition-colors hover:bg-white/[0.04] sm:grid-cols-[52px_1fr_auto] sm:gap-4">
                <span className="text-[10px] tracking-[0.1em] text-[#aebfca]">{channel.number}</span>
                <div>
                  <h3 className="text-lg font-medium text-white">{channel.name}</h3>
                  <p className="mt-0.5 text-xs text-[#c3d1dc]">{channel.description}</p>
                </div>
                <span aria-hidden="true" className="text-lg text-[#c3d1dc] transition-transform group-hover:translate-x-1">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
