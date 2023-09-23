import type { APIRoute } from "astro";
import { google } from "googleapis";
import { youtube } from "../../../lib/youtube";
export const prerender = false;

const allVideosPlaylistId = "PLwMU3qodnH-_eST3QRRukEX7x9Z9362ZJ" // programas completos;

export const GET: APIRoute = async ({ params }) => {

  const currentPage = params.page

  const videosFromYT = await youtube.playlistItems.list({
    playlistId: allVideosPlaylistId,
    part: ["snippet"],
    pageToken: currentPage,
    maxResults: 10,
  });

  const videos = videosFromYT.data.items?.map((video) => {
    return {
      title: video.snippet?.title,
      description: video.snippet?.description,
      thumbnailUrl: video.snippet?.thumbnails?.maxres?.url,
      videoId: video.snippet?.resourceId?.videoId,
      publishedDate: video.snippet?.publishedAt,
    };
  });
  

  return new Response(JSON.stringify({ videos, nextPageToken: videosFromYT.data.nextPageToken }));
};
