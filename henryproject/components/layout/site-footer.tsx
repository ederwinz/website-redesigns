import { siteName, socialLinks } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-10">
        <div className="max-w-sm">
          <p className="font-display text-sm uppercase tracking-wide">
            {siteName}
          </p>
        </div>

        <nav
          aria-label="Social links"
          className="grid grid-cols-2 gap-x-8 gap-y-2 sm:text-right"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="font-label text-xs uppercase text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
