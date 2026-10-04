"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { socialLinks } from "@/data/portfolio";
import type { YoutubeVideo } from "@/lib/youtube";

type YouTubeSectionProps = {
  variant?: "home" | "archive";
};

type YouTubeResponse = {
  videos?: YoutubeVideo[];
  configured?: boolean;
};

function formattedDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function YouTubeMark({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

function VideoCard({ video }: { video: YoutubeVideo }) {
  return (
    <article className="flex min-w-0 flex-col overflow-hidden border border-[#d7e0e5] bg-white">
      <a
        href={video.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Watch ${video.title} on YouTube`}
        className="group relative block aspect-video overflow-hidden bg-[#dce2e6]"
      >
        <Image
          src={video.thumbnail}
          alt={`Thumbnail for ${video.title}`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-200 group-hover:scale-[1.015]"
        />
      </a>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7b8c97]">
          {formattedDate(video.publishedAt)}
        </p>
        <h3 className="mt-2 break-words text-base font-medium leading-6 tracking-[-0.015em] text-[#171717]">
          <a href={video.url} target="_blank" rel="noreferrer" className="hover:text-[#19324A]">
            {video.title}
          </a>
        </h3>
        <a
          href={video.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-4 text-xs font-medium text-[#19324A]"
        >
          <YouTubeMark className="h-4 w-4 text-[#b3261e]" />
          <span className="border-b border-[#19324A] pb-1">Watch on YouTube</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function VideoGrid({ videos }: { videos: YoutubeVideo[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={`${video.title}-${video.publishedAt}`} video={video} />
      ))}
    </div>
  );
}

export function YouTubeSection({ variant = "home" }: YouTubeSectionProps) {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [isConfigured, setIsConfigured] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const isArchive = variant === "archive";

  useEffect(() => {
    let isCurrent = true;

    async function fetchVideos() {
      try {
        const response = await fetch("/api/youtube");
        if (!response.ok) {
          throw new Error(`YouTube feed request failed with status ${response.status}`);
        }
        const data = (await response.json()) as YouTubeResponse;
        if (isCurrent) {
          setVideos(Array.isArray(data.videos) ? data.videos : []);
          setIsConfigured(data.configured === true);
        }
      } catch (error) {
        console.error("Failed to fetch YouTube videos", error);
        if (isCurrent) setHasError(true);
      } finally {
        if (isCurrent) setIsLoading(false);
      }
    }

    void fetchVideos();
    return () => {
      isCurrent = false;
    };
  }, []);

  const archiveVideos = videos.slice(1);

  return (
    <section className="border-y border-[#dce2e6] bg-[#E9EFF3]">
      <div className="site-container py-9 md:py-12">
        <div className="mb-6 flex flex-col gap-4 border-b border-[#cdd8df] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#19324A]">
              YouTube · Divyansh Rathore
            </p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-[#171717] sm:text-3xl">
              {isArchive ? "Latest from the channel" : "LATEST FROM YOUTUBE"}
            </h2>
          </div>
          <a
            href={socialLinks.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-fit items-center gap-2 border-b border-[#aab8c1] text-xs font-medium text-[#19324A] hover:border-[#19324A]"
          >
            <YouTubeMark className="h-4 w-4 text-[#b3261e]" />
            Visit channel <span aria-hidden="true">↗</span>
          </a>
        </div>

        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" aria-label="Loading YouTube videos">
            {Array.from({ length: isArchive ? 6 : 3 }, (_, index) => (
              <div key={index} className="aspect-video animate-pulse bg-white/70" />
            ))}
          </div>
        ) : hasError ? (
          <div className="border border-[#d7e0e5] bg-white p-5 sm:p-6" role="status">
            <p className="text-sm font-medium text-[#171717]">The YouTube feed could not be loaded.</p>
            <p className="mt-1 text-xs leading-5 text-[#5F6368]">
              Please try again later or visit the channel directly.
            </p>
          </div>
        ) : videos.length > 0 ? (
          isArchive ? (
            <div className="space-y-8">
              <article className="grid min-w-0 overflow-hidden border border-[#d7e0e5] bg-white md:grid-cols-[1.35fr_1fr]">
                <a
                  href={videos[0].url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Watch ${videos[0].title} on YouTube`}
                  className="group relative block aspect-video overflow-hidden bg-[#dce2e6]"
                >
                  <Image
                    src={videos[0].thumbnail}
                    alt={`Thumbnail for ${videos[0].title}`}
                    fill
                    sizes="(max-width: 767px) 100vw, 60vw"
                    className="object-cover transition-transform duration-200 group-hover:scale-[1.015]"
                    priority
                  />
                </a>
                <div className="flex flex-col justify-center p-5 sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7b8c97]">
                    Latest video · {formattedDate(videos[0].publishedAt)}
                  </p>
                  <h3 className="mt-3 break-words text-xl font-medium leading-7 tracking-[-0.025em] text-[#171717] sm:text-2xl">
                    {videos[0].title}
                  </h3>
                  <a
                    href={videos[0].url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 text-xs font-medium text-[#19324A]"
                  >
                    <YouTubeMark className="h-4 w-4 text-[#b3261e]" />
                    <span className="border-b border-[#19324A] pb-1">Watch on YouTube</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
              {archiveVideos.length > 0 ? (
                <div>
                  <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#19324A]">
                    More videos
                  </h3>
                  <VideoGrid videos={archiveVideos} />
                </div>
              ) : null}
            </div>
          ) : (
            <VideoGrid videos={videos.slice(0, 3)} />
          )
        ) : (
          <div className="flex flex-col gap-4 border border-[#d7e0e5] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-medium text-[#171717]">
                {isConfigured === false ? "YouTube videos are not configured yet." : "No public videos are available."}
              </p>
              <p className="mt-1 max-w-2xl text-xs leading-5 text-[#5F6368]">
                {isConfigured === false
                  ? "Add YOUTUBE_API_KEY and YOUTUBE_CHANNEL_ID to the server environment in Vercel to load actual uploads. No sample videos are shown."
                  : "When public uploads are available, they will appear here automatically. No sample videos are shown."}
              </p>
            </div>
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 w-fit items-center gap-2 text-xs font-medium text-[#19324A]"
            >
              <YouTubeMark className="h-4 w-4 text-[#b3261e]" />
              <span className="border-b border-[#19324A] pb-1">Open YouTube channel</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}

        {!isArchive ? (
          <div className="mt-6 flex justify-end">
            <Link
              href="/youtube"
              className="inline-flex min-h-11 items-center border-b border-[#19324A] text-xs font-semibold uppercase tracking-[0.12em] text-[#19324A]"
            >
              View all videos <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
