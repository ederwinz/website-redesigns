import { Reveal } from "@/components/motion/reveal";
import { TenetCard } from "@/components/sections/tenet-card";
import { tenets } from "@/lib/content";

export function Tenets() {
  return (
    <section id="tenets" aria-labelledby="tenets-heading" className="bg-marble-100 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="mb-12 flex flex-col items-center gap-2 text-center">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-verdigris-600">
            II.
          </span>
          <h2 id="tenets-heading" className="font-display text-3xl tracking-wide sm:text-4xl">
            The Tenets
          </h2>
          <p className="max-w-lg font-body text-muted-foreground italic">
            Three axioms, held since the founding of the Academy.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {tenets.map((tenet, index) => (
            <Reveal key={tenet.id} delay={index * 0.1}>
              <TenetCard tenet={tenet} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
