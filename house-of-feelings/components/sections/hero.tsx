import { Logo } from "@/components/brand/logo";
import { HeroVideo } from "@/components/sections/hero-video";
import { siteConfig } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-24 text-center sm:min-h-[80vh]">
      <HeroVideo />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-surface-stage-foreground">
        <span className="border-2 border-surface-stage-foreground/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em]">
          Season 3 &middot; Now streaming
        </span>

        <h1>
          <Logo size="lg" />
        </h1>

        <p className="max-w-xl text-base text-surface-stage-foreground/80 sm:text-lg">
          {`${siteConfig.tagline} Extended cuts, iPhone chaos, and the panel reactions we weren't supposed to keep.`}
        </p>

        <a
          href="#pricing"
          className="inline-flex items-center gap-2 border-3 border-surface-stage-foreground bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-card hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-stage"
        >
          Join the Inner Circle
        </a>
      </div>
    </section>
  );
}
