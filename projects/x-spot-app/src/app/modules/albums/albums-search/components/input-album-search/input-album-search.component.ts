import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import { SpotifySearch } from "@x-spot-app/app/3rd-party/spotify/models";
import { SpotifyService } from "@x-spot-app/app/3rd-party/spotify/services/spotify.service";
import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { SetAlbums, SetSearchTerm } from "../../../albums-store/albums-store.actions";
import AlbumsReducerModel from "../../../albums-store/albums-store.reducer.model";

@Component({
  selector: "app-input-album-search",
  templateUrl: "./input-album-search.component.html",
  styleUrls: ["./input-album-search.component.scss"],
})
export class InputAlbumSearchComponent implements AfterViewInit {
  @ViewChild("inputSearch") inputSearch: ElementRef;

  constructor(private spotyfyService: SpotifyService, private store: Store<{ albumsReducer: AlbumsReducerModel }>) {}

  ngAfterViewInit() {
    fromEvent(this.inputSearch.nativeElement, "keyup")
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(async (searchTerm: string) => {
        let albums = [];
        if (searchTerm) {
          const spotifySearch: SpotifySearch = await this.spotyfyService.searchAlbums(searchTerm);
          albums = spotifySearch.albums.items;
        }

        this.store.dispatch(SetAlbums({ payload: albums }));
        this.store.dispatch(SetSearchTerm({ payload: searchTerm }));
      });
  }
}
