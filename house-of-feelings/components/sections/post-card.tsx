"use client";

import { useState } from "react";
import { Heart, Lock, MessageCircle, Play } from "lucide-react";
import { toast } from "sonner";

import type { Post } from "@/lib/types";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1"];

export function PostCard({ post, index }: { post: Post; index: number }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const rotation = rotations[index % rotations.length];

  function toggleLike() {
    setLiked((value) => !value);
    setLikeCount((count) => (liked ? count - 1 : count + 1));
  }

  return (
    <article
      className={`group relative overflow-hidden border-3 border-border bg-card text-card-foreground shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-hover ${rotation}`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2 left-6 z-10 h-5 w-10 -rotate-3 border border-border/40 bg-sticky-400/80"
      />

      <div className="relative aspect-video">
        {/* eslint-disable-next-line @next/next/no-img-element -- real teaser image from the source site's own public CDN */}
        <img
          src={post.imageUrl}
          alt=""
          className="size-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/5 to-transparent" />

        <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-sm bg-ink-900/80 px-1.5 py-0.5 text-xs font-medium text-paper-100">
          <Play className="size-3" aria-hidden="true" />
          {post.duration}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-display text-base uppercase leading-snug tracking-tight">
          {post.title}
        </h3>

        {post.locked && (
          <button
            type="button"
            onClick={() =>
              toast("Locked to members", {
                description: "Join Inner Circle or My Homies to unlock this video.",
              })
            }
            className="mt-4 inline-flex items-center gap-2 border-2 border-border bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Lock className="size-3.5" aria-hidden="true" />
            Join to access
          </button>
        )}

        <div className="mt-4 flex items-center gap-4 border-t border-border/30 pt-3 text-sm text-muted-foreground">
          <button
            type="button"
            onClick={toggleLike}
            aria-pressed={liked}
            className="inline-flex items-center gap-1.5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Heart
              className={`size-4 ${liked ? "fill-primary text-primary" : ""}`}
              aria-hidden="true"
            />
            <span>{likeCount}</span>
            <span className="sr-only">likes</span>
          </button>
          <span className="inline-flex items-center gap-1.5">
            <MessageCircle className="size-4" aria-hidden="true" />
            {post.commentCount}
            <span className="sr-only">comments</span>
          </span>
        </div>
      </div>
    </article>
  );
}
