import { Reveal } from "@/components/motion/reveal";
import { PatronageTierCard } from "@/components/sections/patronage-tier-card";
import { patronTiers } from "@/lib/content";

export function Patronage() {
  return (
    <section
      id="patronage"
      aria-labelledby="patronage-heading"
      className="bg-surface-stage px-4 py-20 text-surface-stage-foreground sm:px-6"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-12 flex flex-col items-center gap-2 text-center">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-verdigris-400">
            V.
          </span>
          <h2 id="patronage-heading" className="font-display text-3xl tracking-wide sm:text-4xl">
            Patronage
          </h2>
          <p className="max-w-md font-body text-marble-300/80 italic">
            As academies have long relied on their patrons, so too does this one.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {patronTiers.map((tier, index) => (
            <Reveal key={tier.id} delay={index * 0.1}>
              <PatronageTierCard tier={tier} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
