import { Play } from "lucide-react";

import type { VideoItem } from "@/lib/types";

export function VideoCard({ video }: { video: VideoItem }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full border-3 border-border bg-card text-left text-card-foreground shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="relative aspect-video overflow-hidden bg-ink-900">
        {/* eslint-disable-next-line @next/next/no-img-element -- external YouTube CDN thumbnail, not a local/optimizable asset */}
        <img
          src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
          alt=""
          className="size-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink-900/20 transition-colors group-hover:bg-ink-900/35">
          <span className="flex size-14 items-center justify-center rounded-full border-2 border-surface-stage-foreground/70 bg-surface-stage/60 text-surface-stage-foreground transition-transform group-hover:scale-110">
            <Play className="size-6 translate-x-0.5" aria-hidden="true" />
          </span>
        </div>
      </div>
      <p className="border-t-3 border-border p-4 font-display text-sm uppercase leading-snug tracking-tight">
        {video.title}
      </p>
    </a>
  );
}
