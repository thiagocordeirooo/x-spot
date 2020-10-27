import SpotifyAlbum from "./spotify-album.model";

export interface SpotifyAlbums {
  href: string;
  items: SpotifyAlbum[];
  limit: number;
  next: string;
  offset: number;
  previous?: any;
  total: number;
}

export default interface SpotifySearch {
  albums: SpotifyAlbums;
}
