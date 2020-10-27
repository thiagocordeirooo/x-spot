import { SpotifyAlbum } from "@x-spot-app/app/3rd-party/spotify/models";

export default interface AlbumsReducerModel {
  albums: SpotifyAlbum[];
  searchTerm: string;
}
