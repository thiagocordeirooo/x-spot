import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import AlbumsReducerModel from "../albums-store/albums-store.reducer.model";

@Component({
  selector: "app-albums-search",
  templateUrl: "./albums-search.component.html",
  styleUrls: ["./albums-search.component.scss"],
})
export class AlbumsSearchComponent implements OnInit {
  public albumsReducer$: Observable<AlbumsReducerModel>;

  constructor(private store: Store<{ albumsReducer: AlbumsReducerModel }>) {}

  ngOnInit() {
    this.albumsReducer$ = this.store.pipe(select("albumsReducer"));
  }
}
