"use client";

import { useState } from "react";
import { Heart, Lock, MessageCircle } from "lucide-react";
import { toast } from "sonner";

import type { Post } from "@/lib/types";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

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
      className={`group relative border-3 border-border bg-card p-5 text-card-foreground shadow-card transition-transform hover:-translate-y-1 hover:shadow-card-hover ${rotation}`}
    >
      <span
        aria-hidden="true"
        className="absolute -top-2 left-6 h-5 w-10 -rotate-3 border border-border/40 bg-sticky-400/80"
      />

      <h3 className="pr-8 font-display text-base uppercase leading-snug tracking-tight">
        {post.title}
      </h3>
      <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>

      {post.locked && (
        <button
          type="button"
          onClick={() =>
            toast("Locked to members", {
              description: "Join Inner Circle or My Homies to keep reading.",
            })
          }
          className="mt-4 inline-flex items-center gap-2 border-2 border-border bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Lock className="size-3.5" aria-hidden="true" />
          Continue reading
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
    </article>
  );
}
