import { NextResponse } from "next/server";
import { getYoutubeVideos } from "@/lib/youtube";

export const dynamic = "force-dynamic";

export async function GET() {
  const configured = Boolean(
    process.env.YOUTUBE_API_KEY && process.env.YOUTUBE_CHANNEL_ID,
  );

  try {
    const videos = await getYoutubeVideos();

    return NextResponse.json({ videos, configured });
  } catch (error) {
    console.error("Unable to load YouTube videos", error);
    return NextResponse.json(
      { error: "Unable to load YouTube videos." },
      { status: 502 },
    );
  }
}
