export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface Artist {
  external_urls: {};
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  artists: Array<Artist>;
  available_markets: Array<string>;
  external_urls: {};
  href: string;
  id: string;
  images: Array<Image>;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Track {
  album: Album;
  artists: Array<Artist>;
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {};
  external_urls: {};
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}
