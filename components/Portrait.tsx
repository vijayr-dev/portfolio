import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

const portraitPath = "/images/divyansh-portrait.png";
const portraitFile = join(process.cwd(), "public", "images", "divyansh-portrait.png");

type PortraitProps = {
  sizes: string;
  priority?: boolean;
  className?: string;
};

export function Portrait({ sizes, priority = false, className = "" }: PortraitProps) {
  if (!existsSync(portraitFile)) {
    return (
      <div
        role="img"
        aria-label="Divyansh Rathore — Senior Analyst and Software Professional. Add the provided portrait at public/images/divyansh-portrait.png."
        className={`flex min-h-72 items-end border border-[#e5e5e1] bg-[#eeefeb] p-5 text-sm leading-6 text-[#5F6368] ${className}`}
      >
        Portrait placeholder — add the provided image at{" "}
        <code className="ml-1 text-xs text-[#19324A]">public/images/divyansh-portrait.png</code>
      </div>
    );
  }

  return (
    <Image
      src={portraitPath}
      alt="Divyansh Rathore — Senior Analyst and Software Professional"
      width={1086}
      height={1448}
      sizes={sizes}
      priority={priority}
      className={`h-auto w-full rounded-[3px] object-cover ${className}`}
    />
  );
}
