"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";

import type { Tier } from "@/lib/types";

export function TierCard({ tier }: { tier: Tier }) {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe() {
    setSubscribed(true);
    toast.success(`Welcome to ${tier.name}`, {
      description: `You're now one of ${tier.memberCount + 1} members. (Prototype only — no real charge.)`,
    });
  }

  return (
    <div
      className={`relative flex flex-col border-3 border-border bg-card p-6 text-card-foreground shadow-card sm:p-8 ${
        tier.recommended ? "sm:-translate-y-2" : ""
      }`}
    >
      {tier.recommended && (
        <span
          aria-hidden="true"
          className="absolute -top-4 right-6 -rotate-3 border-2 border-border bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground shadow-card-sm"
        >
          Recommended
        </span>
      )}

      <h3 className="font-display text-xl uppercase tracking-tight">
        {tier.name}
      </h3>
      <p className="mt-2 flex items-baseline gap-1">
        <span className="font-display text-4xl">${tier.priceMonthly}</span>
        <span className="text-sm text-muted-foreground">/ month</span>
      </p>
      <p className="mt-1 text-sm text-muted-foreground">
        {tier.memberCount} members
      </p>

      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {tier.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <Check
              className="mt-0.5 size-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handleSubscribe}
        disabled={subscribed}
        className="mt-8 inline-flex items-center justify-center border-3 border-border bg-primary px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-card-sm hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {subscribed ? "You're in" : `Join ${tier.name}`}
      </button>
    </div>
  );
}
