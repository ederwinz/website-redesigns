"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

// Season 3, Episode 1 ("A New House of Feelings") — verified via the official
// Season 3 YouTube playlist: earliest episode-style upload, one week before
// the video explicitly labeled "EP 2", and its contestant list (8 names)
// matches the official S3E1 synopsis.
const HERO_YOUTUBE_ID = "IU8mjG5xtvU";

/**
 * Full-bleed stage backdrop behind the hero heading, using the real
 * Season 3 Episode 1 upload as a silent looping background (youtube-nocookie
 * embed, scaled to cover via the standard 16:9 vh/vw trick). Falls back to a
 * static YouTube still frame when prefers-reduced-motion is set, since a
 * background video is still motion even muted.
 */
export function HeroVideo() {
  const prefersReducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const isPlaying = !prefersReducedMotion && !paused;

  function togglePlayback() {
    const willPause = !paused;
    setPaused(willPause);
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: willPause ? "pauseVideo" : "playVideo",
        args: [],
      }),
      "*",
    );
  }

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 overflow-hidden bg-surface-stage">
        {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube CDN still frame, shown instead of motion per prefers-reduced-motion */}
        <img
          src={`https://i.ytimg.com/vi/${HERO_YOUTUBE_ID}/maxresdefault.jpg`}
          alt=""
          className="size-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-stage via-surface-stage/50 to-surface-stage/70" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden bg-surface-stage">
      <iframe
        ref={iframeRef}
        aria-hidden="true"
        tabIndex={-1}
        title="House of Feelings background video"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[100vh] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
        src={`https://www.youtube-nocookie.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_YOUTUBE_ID}&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&enablejsapi=1`}
        allow="autoplay; encrypted-media"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-stage via-surface-stage/40 to-surface-stage/70" />

      <button
        type="button"
        onClick={togglePlayback}
        className="absolute right-4 bottom-4 z-10 inline-flex items-center gap-2 border-3 border-surface-stage-foreground/40 bg-surface-stage/80 px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-surface-stage-foreground hover:border-surface-stage-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface-stage"
        aria-pressed={paused}
      >
        {isPlaying ? (
          <>
            <Pause className="size-3.5" aria-hidden="true" /> Pause
          </>
        ) : (
          <>
            <Play className="size-3.5" aria-hidden="true" /> Play
          </>
        )}
      </button>
    </div>
  );
}
