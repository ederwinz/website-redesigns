import { appStoreBadges, footerLinks, siteConfig } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface-stage text-surface-stage-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rule-meander mb-8" aria-hidden="true" />
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <span className="font-display text-lg uppercase tracking-wide">
              {siteConfig.name}
            </span>
            <p className="max-w-xs font-body text-sm text-marble-300/80 italic">
              Colophon: this instruction was set and issued in the tradition
              of the academy, not the algorithm.
            </p>
            <p className="font-label text-xs uppercase text-marble-300/60">
              &copy; {siteConfig.copyrightYear} {siteConfig.name}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-label text-xs uppercase sm:justify-start"
          >
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-verdigris-400">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col items-center gap-2 sm:items-end">
            <span className="font-label text-xs uppercase text-marble-300/60">
              Enroll on your device
            </span>
            <div className="flex flex-col gap-2">
              {appStoreBadges.map((badge) => (
                <a
                  key={badge.id}
                  href={badge.href}
                  className="rounded-[var(--radius-tablet)] border border-bronze-400 px-3 py-1.5 text-xs hover:bg-bronze-400 hover:text-ink-950"
                >
                  {badge.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
