import Link from "next/link";
import type { Metadata } from "next";

import { essays } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "writings — Henry Pan",
};

export default function WritingsPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-20">
      <Reveal>
        <h1 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Writings
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="mt-10 divide-y divide-border border-t border-border">
          {essays.map((essay) => (
            <li key={essay.slug}>
              <Link
                href={`/essays/${essay.slug}`}
                className="flex items-baseline justify-between gap-4 py-4 group"
              >
                <span className="font-display text-xl normal-case tracking-normal text-foreground group-hover:opacity-70">
                  {essay.title}
                </span>
                <span className="shrink-0 font-label text-xs uppercase text-muted-foreground">
                  {essay.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
