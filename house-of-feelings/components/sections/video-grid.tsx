import { VideoCard } from "@/components/sections/video-card";
import { videos } from "@/lib/content";

export function VideoGrid() {
  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6"
    >
      <div className="mb-10 flex flex-col items-center gap-2 text-center">
        <span className="font-marker text-xl text-primary">
          fresh off the set
        </span>
        <h2
          id="videos-heading"
          className="font-display text-2xl uppercase tracking-tight sm:text-3xl"
        >
          Recent videos
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}
