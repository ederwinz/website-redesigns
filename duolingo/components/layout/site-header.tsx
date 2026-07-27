import Link from "next/link";

import { Logo } from "@/components/brand/logo";
import { CourseDropdown } from "@/components/layout/course-dropdown";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" aria-label="The Athenaeum — home">
          <Logo size="sm" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-label text-xs uppercase hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <CourseDropdown />
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
