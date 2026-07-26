import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { ConfessionTicker } from "@/components/sections/confession-ticker";
import { PostFeed } from "@/components/sections/post-feed";
import { PricingTiers } from "@/components/sections/pricing-tiers";
import { VideoGrid } from "@/components/sections/video-grid";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <ConfessionTicker />
        <PostFeed />
        <PricingTiers />
        <VideoGrid />
      </main>
      <SiteFooter />
    </>
  );
}
