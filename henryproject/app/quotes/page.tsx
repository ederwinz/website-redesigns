import type { Metadata } from "next";

import { quotes } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "quotes — Henry Pan",
};

export default function QuotesPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-20">
      <Reveal>
        <h1 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Quotes
        </h1>
      </Reveal>

      <div className="mt-10 space-y-5">
        {quotes.map((quote, index) => (
          <Reveal key={quote.text} delay={Math.min(index * 0.03, 0.3)}>
            <figure className="border border-surface-stage-border bg-surface-stage px-6 py-6 text-surface-stage-foreground shadow-relief-sm sm:px-8">
              <blockquote className="font-body text-lg italic leading-relaxed">
                &ldquo;{quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-label text-xs uppercase text-surface-stage-foreground/70">
                — {quote.attribution}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
