"use client";

import { motion } from "motion/react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

const MEDALLION_VIEW = 64;

/**
 * The owl-of-Athena medallion: an original silhouette drawn in the
 * front-facing, round-eyed, folded-wing style of ancient Athenian owl
 * tetradrachms — not a redraw of Duolingo's actual mascot art. Struck as
 * a coin (bronze ring, laurel-dark field) rather than an illustration,
 * since the whole concept is "Duo the owl" reframed as Athena's owl.
 */
function OwlMedallionGlyph() {
  return (
    <svg
      aria-hidden="true"
      viewBox={`0 0 ${MEDALLION_VIEW} ${MEDALLION_VIEW}`}
      className="size-full"
    >
      <circle
        cx={MEDALLION_VIEW / 2}
        cy={MEDALLION_VIEW / 2}
        r={MEDALLION_VIEW / 2 - 1.5}
        fill="var(--color-laurel-900)"
        stroke="var(--color-bronze-400)"
        strokeWidth={2}
      />
      {/* Folded wings / body */}
      <path
        d="M14 46 C14 30, 20 20, 32 20 C44 20, 50 30, 50 46 C50 50, 45 50, 45 44 C45 34, 40 27, 32 27 C24 27, 19 34, 19 44 C19 50, 14 50, 14 46 Z"
        fill="var(--color-marble-100)"
      />
      {/* Head */}
      <circle cx={32} cy={24} r={11} fill="var(--color-marble-100)" />
      {/* Ear tufts */}
      <path d="M22 16 L25 22 L20 22 Z" fill="var(--color-marble-100)" />
      <path d="M42 16 L44 22 L39 22 Z" fill="var(--color-marble-100)" />
      {/* Eyes */}
      <circle cx={27} cy={24} r={4} fill="var(--color-laurel-900)" />
      <circle cx={37} cy={24} r={4} fill="var(--color-laurel-900)" />
      <circle cx={27} cy={24} r={1.4} fill="var(--color-bronze-400)" />
      <circle cx={37} cy={24} r={1.4} fill="var(--color-bronze-400)" />
      {/* Beak */}
      <path d="M32 27 L29 31 L35 31 Z" fill="var(--color-bronze-400)" />
      {/* Talons */}
      <path
        d="M24 48 L24 54 M32 50 L32 56 M40 48 L40 54"
        stroke="var(--color-marble-100)"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  size = "sm",
  className = "",
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  const isLarge = size === "lg";
  const prefersReducedMotion = useReducedMotion();

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <motion.span
        className={`inline-block shrink-0 ${isLarge ? "size-16 sm:size-20" : "size-9 sm:size-10"}`}
        whileHover={prefersReducedMotion ? undefined : { rotateY: 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <OwlMedallionGlyph />
      </motion.span>
      <span
        className={`font-display uppercase leading-none tracking-[0.08em] text-foreground ${
          isLarge ? "text-2xl sm:text-3xl lg:text-4xl" : "text-sm sm:text-base"
        }`}
      >
        The Athenaeum
      </span>
    </span>
  );
}
