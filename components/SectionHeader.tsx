type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-7 max-w-2xl">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#19324A]">{eyebrow}</p>
      <h2 className="text-3xl font-medium leading-tight tracking-[-0.035em] text-[#171717] md:text-[2.45rem]">{title}</h2>
      {description ? <p className="mt-5 max-w-xl text-base leading-7 text-[#5F6368]">{description}</p> : null}
    </div>
  );
}
