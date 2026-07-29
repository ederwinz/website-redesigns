import type { Metadata } from "next";

import { newsletterBlurb, newsletterUnsubscribeHref } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { NewsletterForm } from "@/components/sections/newsletter-form";

export const metadata: Metadata = {
  title: "newsletter — Henry Pan",
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-20">
      <Reveal>
        <h1 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Newsletter
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700">
          {newsletterBlurb}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <NewsletterForm className="mt-8 max-w-sm" />
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-6 max-w-md text-sm text-muted-foreground">
          No third-party tracking. Unsubscribe anytime by replying
          &ldquo;unsubscribe&rdquo; to any email, or by{" "}
          <a
            href={newsletterUnsubscribeHref}
            className="underline decoration-muted-foreground underline-offset-2 hover:decoration-foreground"
          >
            emailing me directly
          </a>
          .
        </p>
      </Reveal>
    </div>
  );
}
