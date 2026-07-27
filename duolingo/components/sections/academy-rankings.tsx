import { Reveal } from "@/components/motion/reveal";
import { rankingEntries } from "@/lib/content";

export function AcademyRankings() {
  return (
    <section
      id="rankings"
      aria-labelledby="rankings-heading"
      className="bg-marble-100 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-2xl">
        <Reveal className="mb-10 flex flex-col items-center gap-2 text-center">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-verdigris-600">
            IV.
          </span>
          <h2 id="rankings-heading" className="font-display text-3xl tracking-wide sm:text-4xl">
            Academy Rankings
          </h2>
          <p className="max-w-md font-body text-muted-foreground italic">
            An honor roll, illustrative of standing among one&rsquo;s cohort.
          </p>
        </Reveal>

        <Reveal>
          <ol className="divide-y divide-border border border-border bg-card shadow-relief-sm">
            {rankingEntries.map((entry, index) => (
              <li
                key={entry.id}
                className={`flex items-center justify-between gap-4 px-6 py-4 ${
                  entry.name === "You" ? "bg-verdigris-600/10" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-xl text-bronze-600">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-body text-sm font-medium">{entry.name}</p>
                    <p className="font-label text-[0.65rem] uppercase text-muted-foreground">
                      {entry.discipline}
                    </p>
                  </div>
                </div>
                <span className="font-label text-xs uppercase text-verdigris-600">
                  {entry.standing}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
