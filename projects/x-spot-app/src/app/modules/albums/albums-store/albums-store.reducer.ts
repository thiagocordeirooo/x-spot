import { createReducer, on } from "@ngrx/store";
import { SetAlbums, SetSearchTerm } from "./albums-store.actions";
import AlbumsReducerModel from "./albums-store.reducer.model";

const INITIAL_STATE: AlbumsReducerModel = {
  albums: [],
  searchTerm: "",
};

export const albumsReducer = createReducer(
  INITIAL_STATE,
  on(SetAlbums, (state, { payload }) => ({
    ...state,
    albums: payload,
  })),
  on(SetSearchTerm, (state, { payload }) => ({
    ...state,
    searchTerm: payload,
  }))
);
