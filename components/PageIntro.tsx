type PageIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="border-b border-[#e5e5e1] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-12 lg:px-10">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#19324A]">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl font-medium leading-[1.1] tracking-[-0.045em] text-[#171717] sm:text-5xl">{title}</h1>
        {description ? <p className="mt-5 max-w-2xl text-base leading-7 text-[#5F6368]">{description}</p> : null}
      </div>
    </header>
  );
}
