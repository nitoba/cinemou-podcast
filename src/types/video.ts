export interface Item {
  snippet: VideoDetails;
}

export interface VideoDetails {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

export interface Thumbnails {
  default: DetailsThumb;
  medium: DetailsThumb;
  high: DetailsThumb;
  standard: DetailsThumb;
}

export interface DetailsThumb {
  url: string;
  width: number;
  height: number;
}

export interface ResourceId {
  kind: string;
  videoId: string;
}
