import SpotifyArtist from "./spotify-artist.model";
import SpotifyExternalUrls from "./spotify-external-urls.model";

export default interface SpotifyTrack {
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;

  // custom properties
  auto_play: boolean;
}
