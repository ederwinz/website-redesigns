import { Clapperboard } from "lucide-react";

import { footerLinks, siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-3 border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="font-display text-base">{siteConfig.name}</span>
          <p className="text-sm text-muted-foreground">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium uppercase tracking-wide"
        >
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://youtube.com"
          className="text-foreground hover:text-primary"
          aria-label="House of Feelings on YouTube"
        >
          <Clapperboard className="size-5" />
        </a>
      </div>
    </footer>
  );
}
