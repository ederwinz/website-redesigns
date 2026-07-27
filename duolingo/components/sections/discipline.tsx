"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { toast } from "sonner";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const STARTING_DAYS = 12;
const GOAL_DAYS = 20;

export function Discipline() {
  const [daysObserved, setDaysObserved] = useState(STARTING_DAYS);
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const progress = Math.min(daysObserved / GOAL_DAYS, 1);
  const offset = CIRCUMFERENCE * (1 - progress);
  const alreadyRecordedToday = daysObserved > STARTING_DAYS;

  function recordSession() {
    if (alreadyRecordedToday) return;
    setDaysObserved((d) => Math.min(d + 1, GOAL_DAYS));
    toast.success("Session recorded.", {
      description: "The discipline is maintained through repetition, not intensity.",
    });
  }

  return (
    <section id="discipline" aria-labelledby="discipline-heading" className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-5xl items-center gap-12 sm:grid-cols-2">
        <div>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-verdigris-600">
            III.
          </span>
          <h2 id="discipline-heading" className="mt-2 font-display text-3xl tracking-wide sm:text-4xl">
            The Discipline
          </h2>
          <p className="mt-4 max-w-md font-body text-muted-foreground">
            Mastery is not seized in a single sitting; it is practiced daily,
            in the manner of <em>askesis</em> — the philosopher&rsquo;s
            discipline of small, repeated exercises.
          </p>
          <button
            type="button"
            onClick={recordSession}
            disabled={alreadyRecordedToday}
            className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-tablet)] border border-border bg-primary px-6 py-2.5 font-label text-xs uppercase tracking-[0.15em] text-primary-foreground shadow-relief-sm transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
          >
            {alreadyRecordedToday ? "Today's Session Recorded" : "Record Today's Session"}
          </button>
        </div>

        <div ref={ref} className="flex items-center justify-center">
          <div className="relative size-56">
            <svg viewBox="0 0 120 120" className="size-full -rotate-90">
              <circle
                cx="60"
                cy="60"
                r={RADIUS}
                fill="none"
                stroke="var(--color-marble-300)"
                strokeWidth="6"
              />
              <motion.circle
                cx="60"
                cy="60"
                r={RADIUS}
                fill="none"
                stroke="var(--color-laurel-600)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                initial={{ strokeDashoffset: CIRCUMFERENCE }}
                animate={{
                  strokeDashoffset:
                    prefersReducedMotion || isInView ? offset : CIRCUMFERENCE,
                }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-4xl">{daysObserved}</span>
              <span className="font-label text-xs uppercase text-muted-foreground">
                of {GOAL_DAYS} days observed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
