import Link from "next/link";
import type { Metadata } from "next";

import { aboutFootnotes } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";
import { FootnoteRef } from "@/components/layout/footnote";

export const metadata: Metadata = {
  title: "about — Henry Pan",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-20">
      <Reveal>
        <h1 className="font-display text-3xl uppercase tracking-wide sm:text-4xl">
          About
        </h1>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="prose-marginalia mt-10 text-base leading-relaxed text-ink-700">
          <p>
            I hate when people say: &ldquo;tell me about yourself.&rdquo;
            What do you want to know?
          </p>
          <p>My age? My ethnicity? My religion? My interests? My job?</p>
          <p>
            I could give you the answers to those questions but you still
            wouldn&apos;t know who I am. That&apos;s because I, like you and
            every other person in the world, cannot be described by an
            amalgamation of nouns, adjectives, and adverbs. I am not [blank],
            and neither are you. We are a collection of experiences,
            conversations, and impacts.
          </p>
          <p>
            For that reason I find that the best way for people to know who I
            am is to watch{" "}
            <a
              href="https://www.instagram.com/henrybpan"
              target="_blank"
              rel="noopener noreferrer"
            >
              my videos
            </a>{" "}
            or read <Link href="/writings">my essays</Link>.
            <FootnoteRef id="1" />
          </p>
          <p>If you are looking for a more concrete answer to this question:</p>
          <p>
            I am a 19 year-old 2nd gen Chinese American Christian content
            creator. I study philosphy at{" "}
            <a
              href="https://www.virginia.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              UVA
            </a>{" "}
            (go Hoos!). I&apos;m also 6&apos;0 ft tall, rich, and single.
            <FootnoteRef id="2" />
          </p>
          <p>
            I believe that clarity is better than complexity, that doing is
            better than planning, that focus is the ultimate moat, and that to
            think we must be able to write.
          </p>
          <p>
            I&apos;m interested in Christian ethics, aesthetics, and
            behavioral economics. I am trying to become a better writer, and
            read more books.
          </p>
        </div>
      </Reveal>

      <ol className="mt-12 space-y-1 border-t border-border pt-6 text-sm text-muted-foreground">
        <li id="fn1">
          {aboutFootnotes[0].id}. {aboutFootnotes[0].text}{" "}
          <a href="#fnref1" aria-label="Back to text">
            ↩
          </a>
        </li>
        <li id="fn2">
          {aboutFootnotes[1].id}. ladies, you can{" "}
          <Link href="/contact">contact me here</Link>.{" "}
          <a href="#fnref2" aria-label="Back to text">
            ↩
          </a>
        </li>
      </ol>
    </div>
  );
}
