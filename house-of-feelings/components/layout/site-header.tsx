import Link from "next/link";
import { Clapperboard, ShoppingCart } from "lucide-react";

import { Logo } from "@/components/brand/logo";
import { MembersDropdown } from "@/components/layout/members-dropdown";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navLinks } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-3 border-border bg-background/95 backdrop-blur-none">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" aria-label="House of Feelings — home">
          <Logo size="sm" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <MembersDropdown />
          <a
            href="/account"
            className="text-sm font-medium uppercase tracking-wide hover:text-primary"
          >
            Account
          </a>
          <a
            href="https://youtube.com"
            className="text-foreground hover:text-primary"
            aria-label="House of Feelings on YouTube"
          >
            <Clapperboard className="size-5" />
          </a>
          <a
            href="/cart"
            className="text-foreground hover:text-primary"
            aria-label="Cart"
          >
            <ShoppingCart className="size-5" />
          </a>
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
