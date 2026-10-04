import Link from "next/link";
import { navItems, socialLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-[#dce2e6] bg-[#E9EFF3]">
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 lg:px-10">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1.5fr_auto] md:items-start">
          <div>
            <Link href="/" className="text-xs font-semibold uppercase tracking-[0.16em] text-[#19324A]">Divyansh Rathore</Link>
            <p className="mt-2 text-sm text-[#5F6368]">Senior Analyst · Backend &amp; Automation</p>
          </div>
          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs text-[#5F6368] transition-colors hover:text-[#19324A]">{item.label}</Link>
            ))}
          </nav>
          <div className="flex gap-4">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-xs text-[#19324A] hover:underline">LinkedIn ↗</a>
            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-xs text-[#19324A] hover:underline">Instagram ↗</a>
            <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="text-xs text-[#19324A] hover:underline">YouTube ↗</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-[#cdd8df] pt-4 text-[11px] text-[#777b7d] sm:flex-row sm:items-center sm:justify-between">
          <p>© Divyansh Rathore. All rights reserved.</p>
          <p>Backend engineering · Automation · Reliable systems</p>
        </div>
      </div>
    </footer>
  );
}
