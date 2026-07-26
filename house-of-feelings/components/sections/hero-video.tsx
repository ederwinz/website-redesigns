"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

// Season 3, Episode 1 ("A New House of Feelings") — verified via the official
// Season 3 YouTube playlist: earliest episode-style upload, one week before
// the video explicitly labeled "EP 2", and its contestant list (8 names)
// matches the official S3E1 synopsis.
const HERO_YOUTUBE_ID = "IU8mjG5xtvU";

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
}

interface YTPlayerStateChangeEvent {
  data: number;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        options: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onStateChange?: (event: YTPlayerStateChangeEvent) => void;
          };
        },
      ) => YTPlayer;
      PlayerState: { PLAYING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let youtubeApiPromise: Promise<void> | null = null;

function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(script);
  });
  return youtubeApiPromise;
}

/**
 * Full-bleed stage backdrop behind the hero heading, using the real Season 3
 * Episode 1 upload as a silent looping background. Built on the YouTube
 * IFrame Player API (not a raw iframe src) so we get an onStateChange signal
 * for when playback actually starts — a poster still frame covers the
 * player until then, hiding YouTube's own thumbnail/play-button flash so
 * playback appears seamless. Falls back to a static still frame entirely
 * when prefers-reduced-motion is set, since a background video is still
 * motion even muted.
 */
export function HeroVideo() {
  const prefersReducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [isPlaybackVisible, setIsPlaybackVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const isPlaying = !prefersReducedMotion && !paused;

  useEffect(() => {
    if (prefersReducedMotion) return;
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !containerRef.current || !window.YT) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: HERO_YOUTUBE_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: HERO_YOUTUBE_ID,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1,
        },
        events: {
          onStateChange: (event) => {
            if (event.data === window.YT?.PlayerState.PLAYING) {
              setIsPlaybackVisible(true);
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, [prefersReducedMotion]);

  function togglePlayback() {
    setPaused((wasPaused) => {
      const willPause = !wasPaused;
      if (willPause) {
        playerRef.current?.pauseVideo();
      } else {
        playerRef.current?.playVideo();
      }
      return willPause;
    });
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
      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[100vh] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
      />

      {/* Covers the player's own load/thumbnail/play-button flash until onStateChange confirms real playback has begun. */}
      {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube CDN still frame used as a load-in mask */}
      <img
        aria-hidden="true"
        src={`https://i.ytimg.com/vi/${HERO_YOUTUBE_ID}/maxresdefault.jpg`}
        alt=""
        className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out ${
          isPlaybackVisible ? "opacity-0" : "opacity-100"
        }`}
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
