import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { XSpotButtonModule } from "@x-spot-lib/components/x-spot-button/x-spot-button.module";
import { AlbumDetailsPlayerComponent } from "./album-details/album-details-player/album-details-player.component";
import { AlbumDetailsComponent } from "./album-details/album-details.component";
import { AlbumsSearchComponent } from "./albums-search/albums-search.component";
import { AlbumCardComponent } from "./albums-search/components/album-card/album-card.component";
import { InputAlbumSearchComponent } from "./albums-search/components/input-album-search/input-album-search.component";
import { RecentsSearchesComponent } from "./albums-search/components/recents-searches/recents-searches.component";
import { albumsReducer } from "./albums-store/albums-store.reducer";
import { AlbumsRoutes } from "./albums.routing";

@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutes,
    XSpotButtonModule,
    StoreModule.forRoot({
      albumsReducer,
    }),
  ],
  declarations: [
    AlbumsSearchComponent,
    InputAlbumSearchComponent,
    AlbumCardComponent,
    RecentsSearchesComponent,
    AlbumDetailsComponent,
    AlbumDetailsPlayerComponent,
  ],
})
export class AlbumsModule {}
