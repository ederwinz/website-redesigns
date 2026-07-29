import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import {
  essays,
  homeNewsletterBlurb,
  librarySections,
  quotes,
  siteName,
  socialLinks,
  tagline,
} from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { NewsletterForm } from "@/components/sections/newsletter-form";

const primaryLinks = socialLinks.filter((link) =>
  ["Instagram", "YouTube"].includes(link.label)
);

const latestEssay = essays[0];

const readingNow = librarySections
  .find((section) => section.category === "Books")!
  .items.filter((item) => item.status === "reading");

const featuredQuote = quotes.find(
  (quote) => quote.attribution === "Charlie Munger" && quote.text.includes("attention span")
)!;

export default function HomePage() {
  return (
    <>
      <section className="flex min-h-[85vh] flex-col justify-center px-6 sm:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <Reveal>
            <h1 className="font-display text-[16vw] leading-[0.9] uppercase tracking-tight sm:text-[11vw] lg:text-[8.5rem]">
              {siteName}
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <blockquote className="mt-8 max-w-lg">
              <p className="text-xl leading-relaxed text-ink-700 italic sm:text-2xl">
                &ldquo;{tagline}&rdquo;
              </p>
              <cite className="mt-3 block font-label text-xs not-italic uppercase text-muted-foreground">
                — Colossians 3:23 (NIV)
              </cite>
            </blockquote>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2">
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-foreground underline decoration-muted-foreground underline-offset-4 hover:decoration-foreground"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/writings"
                className="text-lg text-foreground underline decoration-muted-foreground underline-offset-4 hover:decoration-foreground"
              >
                Essays
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto grid w-full max-w-5xl gap-10 sm:grid-cols-3">
          <Reveal>
            <DigestCard label="Latest writing" href={`/essays/${latestEssay.slug}`}>
              <p className="font-display text-xl normal-case tracking-normal">
                {latestEssay.title}
              </p>
              <p className="mt-2 font-label text-xs uppercase text-muted-foreground">
                {latestEssay.date}
              </p>
            </DigestCard>
          </Reveal>

          <Reveal delay={0.05}>
            <DigestCard label="Currently reading" href="/library">
              <ul className="space-y-2">
                {readingNow.map((book) => (
                  <li key={book.title} className="text-base text-ink-700">
                    {book.title}
                  </li>
                ))}
              </ul>
            </DigestCard>
          </Reveal>

          <Reveal delay={0.1}>
            <DigestCard label="A quote worth keeping" href="/quotes">
              <p className="text-base italic leading-relaxed text-ink-700">
                &ldquo;{featuredQuote.text}&rdquo;
              </p>
              <p className="mt-2 font-label text-xs uppercase text-muted-foreground">
                — {featuredQuote.attribution}
              </p>
            </DigestCard>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 sm:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <Reveal>
            <div className="max-w-sm">
              <p className="font-label text-xs uppercase text-muted-foreground">
                Join my newsletter!
              </p>
              <p className="mt-2 text-sm text-ink-700">
                {homeNewsletterBlurb}{" "}
                <Link
                  href="/newsletter"
                  className="underline decoration-muted-foreground underline-offset-2 hover:decoration-foreground"
                >
                  More info →
                </Link>
              </p>
              <NewsletterForm className="mt-6" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function DigestCard({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col border border-border bg-card px-6 py-6 shadow-relief-sm transition-shadow hover:shadow-relief-md"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-label text-xs uppercase text-muted-foreground">
          {label}
        </span>
        <ArrowRightIcon className="size-3.5 text-muted-foreground transition-transform group-hover:translate-x-1" />
      </div>
      <div className="mt-4 flex-1">{children}</div>
    </Link>
  );
}
