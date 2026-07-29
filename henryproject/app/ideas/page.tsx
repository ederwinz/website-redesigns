import type { Metadata } from "next";

import { ideas } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "ideas — Henry Pan",
};

const categories = Array.from(new Set(ideas.map((idea) => idea.category)));

export default function IdeasPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-20">
      <Reveal>
        <h1 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Ideas
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10 space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="font-label text-xs uppercase text-muted-foreground">
                {category}
              </h2>
              <ul className="mt-4 space-y-3">
                {ideas
                  .filter((idea) => idea.category === category)
                  .map((idea) => (
                    <li
                      key={idea.slug}
                      id={idea.slug}
                      className="border-b border-border pb-3 font-display text-xl uppercase tracking-wide"
                    >
                      {idea.title}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
