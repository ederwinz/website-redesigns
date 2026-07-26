import { Heart } from "lucide-react";

const VIEW_W = 200;
const VIEW_H = 125;
const SHADOW_OFFSET = 10;

// Rect body + tail as ONE outline, so the border and hard-offset shadow
// trace the whole bubble silhouette instead of the rect and tail each
// getting their own separate stroke.
function bubblePath(dx = 0, dy = 0) {
  const p = (x: number, y: number) => `${x + dx},${y + dy}`;
  return [
    `M${p(0, 0)}`,
    `L${p(180, 0)}`,
    `L${p(180, 80)}`,
    `L${p(48, 80)}`,
    `L${p(30, 100)}`,
    `L${p(20, 80)}`,
    `L${p(0, 80)}`,
    "Z",
  ].join(" ");
}

/**
 * Wordmark adapted from the original site's chat-bubble logo (a speech
 * bubble reading "house of / feelings." with a small heart-reply bubble
 * pinned to its corner) — redrawn with our own type (font-display) and
 * token colors instead of reusing the source asset. The bubble + tail are
 * one SVG path so the border and drop-shadow trace a single silhouette.
 */
export function Logo({
  size = "sm",
  className = "",
}: {
  size?: "sm" | "lg";
  className?: string;
}) {
  const isLarge = size === "lg";

  return (
    <span
      className={`relative inline-block ${
        isLarge ? "w-72 sm:w-80 lg:w-96" : "w-28 sm:w-32"
      } ${className}`}
      style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}
    >
      <svg
        aria-hidden="true"
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="absolute inset-0 size-full overflow-visible"
      >
        <path d={bubblePath(SHADOW_OFFSET, SHADOW_OFFSET)} fill="var(--color-border)" />
        <path
          d={bubblePath()}
          fill="var(--color-primary)"
          stroke="var(--color-border)"
          strokeWidth={isLarge ? 4 : 3}
          strokeLinejoin="round"
        />
      </svg>

      <span
        className="absolute inset-x-0 top-0 flex flex-col items-start justify-center px-[8%] text-primary-foreground"
        style={{ height: `${(80 / VIEW_H) * 100}%` }}
      >
        <span
          className={`font-display leading-[0.95] font-normal normal-case ${
            isLarge
              ? "text-3xl sm:text-5xl lg:text-6xl"
              : "text-sm sm:text-base"
          }`}
        >
          house of
        </span>
        <span
          className={`font-display leading-[0.95] font-normal normal-case ${
            isLarge
              ? "text-3xl sm:text-5xl lg:text-6xl"
              : "text-sm sm:text-base"
          }`}
        >
          feelings.
        </span>
      </span>

      <span
        aria-hidden="true"
        className={`absolute flex items-center justify-center rounded-full border-2 border-border bg-secondary text-primary shadow-card-sm ${
          isLarge ? "-top-4 -right-4 size-10" : "-top-2 -right-2 size-5"
        }`}
      >
        <Heart
          className={isLarge ? "size-5 fill-current" : "size-2.5 fill-current"}
        />
      </span>
    </span>
  );
}
