import { NextResponse } from "next/server";
import { getYoutubeVideos } from "@/lib/youtube";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const videos = await getYoutubeVideos();

    return NextResponse.json({ videos });
  } catch (error) {
    console.error("Unable to load YouTube videos", error);
    return NextResponse.json(
      { error: "Unable to load YouTube videos." },
      { status: 502 },
    );
  }
}
