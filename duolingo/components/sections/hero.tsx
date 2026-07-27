"use client";

import { motion } from "motion/react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { siteConfig } from "@/lib/content";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden bg-surface-stage px-4 py-24 text-center text-surface-stage-foreground sm:min-h-[90vh]">
      <div
        aria-hidden="true"
        className="rule-meander absolute inset-x-0 top-0 opacity-60"
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="font-label border border-surface-stage-foreground/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-marble-300/90">
          {siteConfig.learnerCount} {siteConfig.learnerCountNote}
        </span>

        <h1 className="font-display text-4xl leading-tight tracking-wide uppercase sm:text-6xl">
          A Treatise on the
          <br />
          Cultivation of Language
        </h1>

        <p className="max-w-xl font-body text-lg text-marble-300/90 italic sm:text-xl">
          {siteConfig.tagline}
        </p>

        <a
          href="#curriculum"
          className="mt-4 inline-flex items-center gap-2 rounded-[var(--radius-tablet)] border border-bronze-400 bg-primary px-8 py-3 font-label text-xs uppercase tracking-[0.15em] text-primary-foreground shadow-relief-md transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-stage"
        >
          Begin Your Studies
        </a>
      </motion.div>
    </section>
  );
}
