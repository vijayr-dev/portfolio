"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { socialLinks } from "@/data/portfolio";
import type { YoutubeVideo } from "@/lib/youtube";

function formattedDate(date: string) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function YouTubeSection() {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("/api/youtube");
        if (!response.ok) {
          throw new Error(`YouTube feed request failed with status ${response.status}`);
        }
        const data = await response.json();
        setVideos(data.videos ?? []);
      } catch (error) {
        console.error("Failed to fetch YouTube videos", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVideos();
  }, []);

  return (
    <section className="border-y border-[#dce2e6] bg-[#E9EFF3]">
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 md:py-12 lg:px-10">
        <div className="mb-6 flex flex-col gap-4 border-b border-[#cdd8df] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#19324A]">YouTube · Divyansh Rathore</p>
            <h2 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-[#171717] sm:text-3xl">Latest videos</h2>
          </div>
          <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="inline-flex w-fit border-b border-[#aab8c1] pb-1 text-xs font-medium text-[#19324A] hover:border-[#19324A]">
            Visit channel <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        </div>

        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="aspect-video animate-pulse bg-white/70" />
            ))}
          </div>
        ) : videos.length > 0 ? (
          <>
            {videos[0] ? (
              <article className="grid overflow-hidden border border-[#d7e0e5] bg-white md:grid-cols-[1.4fr_1fr]">
                <a href={videos[0].url} target="_blank" rel="noreferrer" className="group relative block aspect-video overflow-hidden bg-[#dce2e6]">
                  <Image src={videos[0].thumbnail} alt={videos[0].title} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition-transform duration-200 group-hover:scale-[1.015]" priority />
                  <span className="absolute bottom-3 left-3 bg-[#19324A] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">Latest upload</span>
                </a>
                <div className="flex flex-col justify-center p-5 sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#7b8c97]">{formattedDate(videos[0].publishedAt)}</p>
                  <h3 className="mt-3 text-xl font-medium leading-7 tracking-[-0.025em] text-[#171717] sm:text-2xl">{videos[0].title}</h3>
                  <a href={videos[0].url} target="_blank" rel="noreferrer" className="mt-5 inline-flex w-fit border-b border-[#19324A] pb-1 text-xs font-medium text-[#19324A]">
                    Watch video <span aria-hidden="true" className="ml-2">↗</span>
                  </a>
                </div>
              </article>
            ) : null}
            {videos.length > 1 ? (
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {videos.slice(1).map((video) => (
                  <article key={`${video.title}-${video.publishedAt}`} className="grid grid-cols-[minmax(120px,0.8fr)_1.2fr] border border-[#d7e0e5] bg-white">
                    <a href={video.url} target="_blank" rel="noreferrer" className="relative block min-h-28 overflow-hidden bg-[#dce2e6]">
                      <Image src={video.thumbnail} alt={video.title} fill sizes="(max-width: 640px) 40vw, 25vw" className="object-cover transition-transform duration-200 hover:scale-[1.02]" />
                    </a>
                    <div className="flex flex-col justify-center p-3 sm:p-4">
                      <p className="text-[9px] uppercase tracking-[0.12em] text-[#7b8c97]">{formattedDate(video.publishedAt)}</p>
                      <h3 className="mt-1 text-sm font-medium leading-5 text-[#171717]">{video.title}</h3>
                      <a href={video.url} target="_blank" rel="noreferrer" className="mt-2 text-[10px] font-medium text-[#19324A]">Watch →</a>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </>
        ) : (
          <div className="flex flex-col gap-4 border border-[#d7e0e5] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-medium text-[#171717]">Latest videos will appear here.</p>
              <p className="mt-1 text-xs leading-5 text-[#5F6368]">Configure the YouTube Data API credentials to load the channel feed. No sample thumbnails are shown.</p>
            </div>
            <a href={socialLinks.youtube} target="_blank" rel="noreferrer" className="inline-flex w-fit border-b border-[#19324A] pb-1 text-xs font-medium text-[#19324A]">
              Open YouTube channel <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
