import type { Metadata } from "next";

import { librarySections } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { LibraryBrowser } from "@/components/sections/library-browser";

export const metadata: Metadata = {
  title: "library — Henry Pan",
};

export default function LibraryPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-20">
      <Reveal>
        <h1 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Library
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-10">
          <LibraryBrowser sections={librarySections} />
        </div>
      </Reveal>
    </div>
  );
}
