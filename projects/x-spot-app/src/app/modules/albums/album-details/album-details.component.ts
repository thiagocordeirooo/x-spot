import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpotifyAlbum, SpotifyTrack } from "@x-spot-app/app/3rd-party/spotify/models";
import { SpotifyService } from "@x-spot-app/app/3rd-party/spotify/services/spotify.service";

@Component({
  selector: "app-album-details",
  templateUrl: "./album-details.component.html",
  styleUrls: ["./album-details.component.scss"],
})
export class AlbumDetailsComponent implements OnInit {
  private _albumId: string;
  public album: SpotifyAlbum;

  public currentTrack: SpotifyTrack;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private spotifyService: SpotifyService) {
    if (!this.activatedRoute.snapshot.params["id"]) {
      this.router.navigate(["/"]);
    } else {
      this._albumId = this.activatedRoute.snapshot.params["id"];
    }
  }

  async ngOnInit() {
    this.album = await this.spotifyService.getAlbumById(this._albumId);
    this.currentTrack = this.album.tracks.items[0];
  }

  public playTrack(track: SpotifyTrack): void {
    this.currentTrack = { ...track, auto_play: true };
  }

  public msToTime(msTime: number): string {
    const ms = msTime % 1000;
    msTime = (msTime - ms) / 1000;
    const secs = msTime % 60;
    msTime = (msTime - secs) / 60;
    const mins = msTime % 60;

    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
}
