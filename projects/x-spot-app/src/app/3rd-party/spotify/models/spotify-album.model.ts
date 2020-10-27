import SpotifyArtist from "./spotify-artist.model";
import SpotifyExternalUrls from "./spotify-external-urls.model";
import SpotifyImage from "./spotify-image.model";
import SpotifyTrack from "./spotify-track.model";

export interface SpotifyCopyright {
  text: string;
  type: string;
}

export interface SpotifyExternalIds {
  upc: string;
}

export interface ExternalUrls4 {
  spotify: string;
}

export interface SpotifyTracks {
  href: string;
  items: SpotifyTrack[];
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total: number;
}

export default interface SpotifyAlbum {
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  copyrights: SpotifyCopyright[];
  external_ids: SpotifyExternalIds;
  external_urls: SpotifyExternalUrls;
  genres: any[];
  href: string;
  id: string;
  images: SpotifyImage[];
  label: string;
  name: string;
  popularity: number;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  tracks: SpotifyTracks;
  type: string;
  uri: string;
}
