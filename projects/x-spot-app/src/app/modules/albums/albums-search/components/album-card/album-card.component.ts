import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StorageService } from "@x-spot-lib/services/storage/storage.service";
import { SpotifyAlbum } from "projects/x-spot-app/src/app/3rd-party/spotify/models";

@Component({
  selector: "app-album-card",
  templateUrl: "./album-card.component.html",
  styleUrls: ["./album-card.component.scss"],
})
export class AlbumCardComponent implements OnInit {
  @Input()
  public album: SpotifyAlbum;

  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {}

  public showAlbum(): void {
    const recentsSearches = this.storageService.getObjectItem("recents-searches") || [];

    if (recentsSearches && !recentsSearches.find((album) => album.id === this.album.id)) {
      this.storageService.setItem("recents-searches", [...recentsSearches, this.album]);
    }

    this.router.navigate([`/albums/${this.album.id}`]);
  }
}
