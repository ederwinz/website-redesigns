import Link from "next/link";
import type { Metadata } from "next";

import { nowFootnotes, nowLastUpdated } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { FootnoteRef, FootnoteList } from "@/components/layout/footnote";

export const metadata: Metadata = {
  title: "now — Henry Pan",
};

export default function NowPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-20">
      <Reveal>
        <h1 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          Now
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="mt-4 font-label text-xs uppercase text-muted-foreground">
          {nowLastUpdated}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="prose-marginalia mt-10 text-base leading-relaxed text-ink-700">
          <h2>Work</h2>
          <p>
            I&apos;m currently the lead content strategist at{" "}
            <a
              href="https://good-marketing.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Good Marketing
            </a>
            .
          </p>
          <p>
            Any time that isn&apos;t devoted to getting millions of views in
            undisclosed ads for my clients is for growing my{" "}
            <a
              href="https://www.instagram.com/henrybpan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            . YouTube has kind of been put on the backburner.
          </p>
          <p>
            In the interest of me being able to pursue my goals of full time
            content creation, I&apos;ve decided to pivot from philosophy at
            UVA to economics (where I can graduate in 2.5 years). Still might
            get a philosophy minor though.
          </p>

          <h2>Location</h2>
          <p>
            I&apos;m going to be in NYC (7/5-7/13), Spain (7/14-7/26), Cape
            Cod, and Miami.{" "}
            <Link href="/contact">reach out</Link> if you got any recs or you
            live there.
          </p>
          <p>In the fall I&apos;ll be at UVA (probably).</p>

          <h2>Personal</h2>
          <p>
            Unfortunately (or maybe fortunately), ya boy still has no motion.
            That&apos;s okay though. It might sound like cope, but I really
            don&apos;t think now is the time for a relationship. Apart from
            the occasional Hinge redownload to see if any asian sugar
            mommies matched with me, I don&apos;t really put myself out
            there. I feel like right now I need to focus on my work and my
            faith. Everything else is ultimately a distraction.
            <FootnoteRef id="1" />
          </p>

          <h2>Goals</h2>
          <p>
            I have absolutely terrible{" "}
            <a
              href="https://en.wikipedia.org/wiki/Shiny_object_syndrome"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shiny Object Syndrome
            </a>{" "}
            and so to remedy that, I am setting two goals that I cannot
            deviate from until Jan 1, 2027.
          </p>
          <ol>
            <li>
              Get 100k followers on{" "}
              <a
                href="https://www.instagram.com/henrybpan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>Make 10k/month via my job as a content strategist</li>
          </ol>
        </div>
      </Reveal>

      <FootnoteList footnotes={nowFootnotes} />
    </div>
  );
}
