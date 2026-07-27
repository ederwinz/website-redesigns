import { Reveal } from "@/components/motion/reveal";
import { testimonials } from "@/lib/content";

export function Testimonia() {
  return (
    <section id="testimonia" aria-labelledby="testimonia-heading" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal className="mb-12 flex flex-col items-center gap-2 text-center">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-verdigris-600">
            VI.
          </span>
          <h2 id="testimonia-heading" className="font-display text-3xl tracking-wide sm:text-4xl">
            Testimonia
          </h2>
          <p className="max-w-lg font-body text-muted-foreground italic">
            Recorded observations, entered into the public record.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.1}>
              <figure className="marginalia-notch flex h-full flex-col justify-between gap-4 border border-border bg-card p-6 shadow-relief-sm">
                <blockquote className="font-body text-base italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="font-label text-xs uppercase text-muted-foreground">
                  {testimonial.attribution}
                  <span className="block text-[0.65rem] normal-case text-muted-foreground/70">
                    {testimonial.source}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
