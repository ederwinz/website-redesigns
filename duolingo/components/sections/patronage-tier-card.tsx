"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";

import type { PatronTier } from "@/lib/types";

export function PatronageTierCard({ tier }: { tier: PatronTier }) {
  const [enrolled, setEnrolled] = useState(false);

  function handleEnroll() {
    setEnrolled(true);
    toast.success(`Enrolled as a ${tier.name}`, {
      description: "Prototype only — no real charge or account was created.",
    });
  }

  return (
    <div
      className={`relative flex flex-col rounded-[var(--radius-tablet)] border p-6 sm:p-8 ${
        tier.recommended
          ? "border-bronze-400 bg-surface-stage-foreground/5 shadow-relief-lg"
          : "border-surface-stage-foreground/20 shadow-relief-sm"
      }`}
    >
      {tier.recommended && (
        <span
          aria-hidden="true"
          className="absolute -top-3 right-6 rounded-[var(--radius-tablet)] border border-bronze-400 bg-bronze-400 px-3 py-1 font-label text-[0.65rem] uppercase text-ink-950"
        >
          Preferred
        </span>
      )}

      <h3 className="font-display text-xl tracking-wide uppercase">{tier.name}</h3>
      <p className="mt-2 flex items-baseline gap-1">
        <span className="font-display text-4xl">
          {tier.priceMonthly === 0 ? "Gratis" : `$${tier.priceMonthly}`}
        </span>
        {tier.priceMonthly !== 0 && (
          <span className="font-label text-xs uppercase text-marble-300/70">/ month</span>
        )}
      </p>
      <p className="mt-1 font-body text-sm text-marble-300/70 italic">{tier.priceNote}</p>

      <ul className="mt-6 flex-1 space-y-3 font-body text-sm">
        {tier.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <Check className="mt-0.5 size-4 shrink-0 text-verdigris-400" aria-hidden="true" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handleEnroll}
        disabled={enrolled}
        className="mt-8 inline-flex items-center justify-center rounded-[var(--radius-tablet)] border border-bronze-400 bg-primary px-4 py-2.5 font-label text-xs uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {enrolled ? "Enrolled" : `Become a ${tier.name}`}
      </button>
    </div>
  );
}
