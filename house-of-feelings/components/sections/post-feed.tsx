import { PostCard } from "@/components/sections/post-card";
import { posts } from "@/lib/content";

export function PostFeed() {
  return (
    <section
      id="feed"
      aria-labelledby="feed-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <div className="mb-10 flex flex-col items-center gap-2 text-center">
        <span className="font-marker text-xl text-primary">
          the corkboard
        </span>
        <h2
          id="feed-heading"
          className="font-display text-2xl uppercase tracking-tight sm:text-3xl"
        >
          Members-only confessions
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </div>
    </section>
  );
}
