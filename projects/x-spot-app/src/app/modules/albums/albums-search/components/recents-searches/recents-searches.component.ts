import { Component, OnInit } from "@angular/core";
import { StorageService } from "@x-spot-lib/services/storage/storage.service";
import { SpotifyAlbum } from "projects/x-spot-app/src/app/3rd-party/spotify/models";

@Component({
  selector: "app-recents-searches",
  templateUrl: "./recents-searches.component.html",
  styleUrls: ["./recents-searches.component.scss"],
})
export class RecentsSearchesComponent implements OnInit {
  public albums: SpotifyAlbum[];
  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.albums = this.storageService.getObjectItem("recents-searches");
  }
}
