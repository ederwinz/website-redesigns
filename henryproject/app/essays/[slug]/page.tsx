import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { essays } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const essay = essays.find((entry) => entry.slug === slug);
  return { title: essay ? `${essay.title} — Henry Pan` : "Henry Pan" };
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = essays.find((entry) => entry.slug === slug);

  if (!essay) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-10 sm:py-20">
      <Reveal>
        <Link
          href="/writings"
          className="font-label text-xs uppercase text-muted-foreground hover:text-foreground"
        >
          ← Writings
        </Link>

        <h1 className="mt-6 font-display text-3xl normal-case tracking-normal sm:text-4xl">
          {essay.title}
        </h1>

        <div className="mt-3 flex items-center gap-4">
          <span className="font-label text-xs uppercase text-muted-foreground">
            {essay.date}
          </span>
          {essay.substackUrl && (
            <a
              href={essay.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-xs uppercase text-muted-foreground hover:text-foreground"
            >
              Read on Substack ↗
            </a>
          )}
        </div>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="prose-marginalia mt-10 text-base leading-relaxed text-ink-700">
          {essay.blocks.map((block, index) => {
            if (block.type === "heading") {
              return <h2 key={index}>{block.text}</h2>;
            }
            if (block.type === "blockquote") {
              return (
                <blockquote key={index}>
                  &ldquo;{block.text}&rdquo;
                  <cite className="mt-2 block font-label text-xs not-italic uppercase text-muted-foreground">
                    — {block.cite}
                  </cite>
                </blockquote>
              );
            }
            return <p key={index}>{block.text}</p>;
          })}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-16 border-t border-border pt-8">
          <p className="font-label text-xs uppercase text-muted-foreground">
            Newsletter
          </p>
          <a
            href="https://henrybpan.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-base text-foreground underline decoration-muted-foreground underline-offset-4 hover:decoration-foreground"
          >
            Subscribe on Substack →
          </a>
        </div>
      </Reveal>
    </div>
  );
}
