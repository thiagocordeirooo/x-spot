import { createAction, props } from "@ngrx/store";
import { SpotifyAlbum } from "@x-spot-app/app/3rd-party/spotify/models";

enum AlbumsActions {
  SetAlbums = "SetAlbums",
  SetSearchTerm = "SetSearchTerm",
}

export const SetAlbums = createAction(AlbumsActions.SetAlbums, props<{ payload: SpotifyAlbum[] }>());
export const SetSearchTerm = createAction(AlbumsActions.SetSearchTerm, props<{ payload: string }>());
