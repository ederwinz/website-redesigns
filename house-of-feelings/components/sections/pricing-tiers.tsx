import { TierCard } from "@/components/sections/tier-card";
import { tiers } from "@/lib/content";

export function PricingTiers() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="bg-surface-stage px-4 py-20 text-surface-stage-foreground sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center gap-2 text-center">
          <span className="font-marker text-xl text-sticky-400">
            pick your side
          </span>
          <h2
            id="pricing-heading"
            className="font-display text-2xl uppercase tracking-tight sm:text-3xl"
          >
            Membership tiers
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {tiers.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  );
}
