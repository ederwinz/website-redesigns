"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

const confessions = [
  <>
    &ldquo;I can&apos;t believe{" "}
    <span className="redacted">Marcus</span> said that&rdquo;
  </>,
  <>
    &ldquo;we all agreed to never speak of the{" "}
    <span className="redacted">Jenga incident</span> again&rdquo;
  </>,
  <>
    &ldquo;someone rigged the{" "}
    <span className="redacted">buzzer</span> and we have proof&rdquo;
  </>,
  <>
    &ldquo;the extended cut has{" "}
    <span className="redacted">forty extra seconds</span> of silence&rdquo;
  </>,
  <>
    &ldquo;started as advice, ended as a{" "}
    <span className="redacted">full breakdown</span>&rdquo;
  </>,
];

export function ConfessionTicker() {
  const prefersReducedMotion = useReducedMotion();

  const strip = (keyPrefix: string) => (
    <div
      className="flex shrink-0 items-center gap-10 pr-10"
      aria-hidden={keyPrefix === "b"}
    >
      {confessions.map((confession, index) => (
        <span
          key={`${keyPrefix}-${index}`}
          className="font-display text-sm uppercase tracking-wide whitespace-nowrap sm:text-base"
        >
          {confession}
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y-3 border-border bg-card py-3">
      <div
        className={
          "flex w-max" +
          (prefersReducedMotion ? "" : " animate-marquee")
        }
      >
        {strip("a")}
        {!prefersReducedMotion && strip("b")}
      </div>
    </div>
  );
}
