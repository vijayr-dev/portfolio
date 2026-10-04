export type YoutubeVideo = {
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
  embedUrl?: string;
};

type YouTubeSearchItem = {
  id?: {
    videoId?: string;
  };
  snippet?: {
    title?: string;
    publishedAt?: string;
    thumbnails?: {
      high?: { url?: string };
      medium?: { url?: string };
    };
  };
};

export async function getYoutubeVideos(): Promise<YoutubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return [];
  }

  const searchUrl = new URL("https://www.googleapis.com/youtube/v3/search");
  searchUrl.searchParams.set("key", apiKey);
  searchUrl.searchParams.set("channelId", channelId);
  searchUrl.searchParams.set("part", "snippet");
  searchUrl.searchParams.set("order", "date");
  searchUrl.searchParams.set("maxResults", "12");
  searchUrl.searchParams.set("type", "video");

  const response = await fetch(searchUrl.toString(), {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`YouTube Data API request failed with status ${response.status}`);
  }

  const data = (await response.json()) as { items?: YouTubeSearchItem[] };
  const items = Array.isArray(data.items) ? data.items : [];

  return items.flatMap((item) => {
    const snippet = item.snippet ?? {};
    const id = item.id?.videoId;
    const publishedAt = snippet.publishedAt;
    const title = snippet.title;
    const thumbnail =
      snippet.thumbnails?.high?.url ??
      snippet.thumbnails?.medium?.url;

    if (!id || !publishedAt || !title || !thumbnail) {
      return [];
    }

    return [{
      title,
      thumbnail,
      publishedAt,
      url: `https://www.youtube.com/watch?v=${id}`,
      embedUrl: `https://www.youtube.com/embed/${id}`,
    }];
  }).slice(0, 12);
}
