import { Component, Input, OnDestroy } from "@angular/core";
import SpotifyTrack from "@x-spot-app/app/3rd-party/spotify/models/spotify-track.model";

@Component({
  selector: "app-album-details-player",
  templateUrl: "./album-details-player.component.html",
  styleUrls: ["./album-details-player.component.scss"],
})
export class AlbumDetailsPlayerComponent implements OnDestroy {
  private _currentTrack: SpotifyTrack;
  public get currentTrack(): SpotifyTrack {
    return this._currentTrack;
  }
  @Input()
  public set currentTrack(v: SpotifyTrack) {
    this._currentTrack = v;
    if (v) {
      if (v.preview_url) {
        this.audioTrack.src = v.preview_url;

        if (v.auto_play) {
          this.audioTrack.play();
        }
      } else {
        this.audioTrack.pause();
      }

      this.previewDisabled = !v.preview_url;
    }
  }

  public audioTrack: HTMLAudioElement = new Audio();
  public previewDisabled = false;

  constructor() {}

  ngOnDestroy(): void {
    this.pause();
  }

  public play(): void {
    if (!this.previewDisabled) {
      this.audioTrack.play();
    }
  }

  public pause(): void {
    if (!this.previewDisabled) {
      this.audioTrack.pause();
    }
  }
}
