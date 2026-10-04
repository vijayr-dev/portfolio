"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, socialLinks } from "@/data/portfolio";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.5 9.8h2.88v8.7H5.5V9.8Zm4.75 0h2.76v1.18h.04c.38-.72 1.32-1.49 2.72-1.49 2.91 0 3.45 1.91 3.45 4.39v6.62H17.6v-6.2c0-1.48-.03-3.39-2.07-3.39-2.08 0-2.4 1.62-2.4 3.29v6.3H10.25V9.8Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
      <path d="M21.6 8.2a2.7 2.7 0 0 0-1.9-1.9C17.9 5.8 12 5.8 12 5.8s-5.9 0-7.7.5A2.7 2.7 0 0 0 2.4 8.2 28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .4 3.8 2.7 2.7 0 0 0 1.9 1.9c1.8.5 7.7.5 7.7.5s5.9 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.4-3.8ZM10 15.1V8.9l5.4 3.1L10 15.1Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e1] bg-[#F7F7F5]/95">
      <nav className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10" aria-label="Main navigation">
        <Link href="/" className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#19324A]">
          Divyansh Rathore
        </Link>

        <div className="hidden items-center gap-4 xl:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`text-xs transition-colors hover:text-[#19324A] ${isActive(item.href) ? "font-medium text-[#19324A]" : "text-[#5F6368]"}`}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-4 sm:flex">
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#5F6368] transition-colors hover:text-[#19324A]">
            <LinkedInIcon />
          </a>
          <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-[#5F6368] transition-colors hover:text-[#19324A]">
            <YouTubeIcon />
          </a>
          <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#5F6368] transition-colors hover:text-[#19324A]">
            <InstagramIcon />
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="rounded border border-[#d9d9d4] p-2 text-[#19324A] xl:hidden"
        >
          <span className="block h-px w-5 bg-current" />
          <span className="mt-1.5 block h-px w-5 bg-current" />
          <span className="mt-1.5 block h-px w-5 bg-current" />
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-[#e5e5e1] bg-[#F7F7F5] xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={() => setIsOpen(false)} className={`py-2 text-sm hover:text-[#19324A] ${isActive(item.href) ? "font-medium text-[#19324A]" : "text-[#4f5357]"}`}>
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-5 border-t border-[#e5e5e1] pt-4">
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-[#5F6368] hover:text-[#19324A]"><LinkedInIcon /></a>
              <a href={socialLinks.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="text-[#5F6368] hover:text-[#19324A]"><YouTubeIcon /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="text-[#5F6368] hover:text-[#19324A]"><InstagramIcon /></a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
