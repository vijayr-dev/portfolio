type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="border-b border-[#e5e5e1] bg-white">
      <div className="site-container py-9 sm:py-10 md:py-12">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#19324A]">{eyebrow}</p>
        <h1 className="max-w-4xl text-[clamp(2.25rem,4.7vw,3.75rem)] font-medium leading-[1.1] tracking-[-0.045em] text-[#171717]">{title}</h1>
        {description ? <p className="mt-5 max-w-2xl text-base leading-7 text-[#5F6368]">{description}</p> : null}
      </div>
    </header>
  );
}
