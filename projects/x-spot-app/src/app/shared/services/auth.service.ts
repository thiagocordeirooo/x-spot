import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { SpotifyCredentials, SpotifyUser } from "@x-spot-app/app/3rd-party/spotify/models";
import { SPOTIFY_CREDENTIALS_STORAGE_KEY } from "@x-spot-app/app/3rd-party/spotify/spotify.constants";
import { SpotifyService } from "@x-spot-app/app/3rd-party/spotify/services/spotify.service";
import { StorageService } from "@x-spot-lib/services/storage/storage.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public spotifyCredentials: SpotifyCredentials;

  public spotifyUser = new BehaviorSubject<SpotifyUser>(null);

  constructor(private router: Router, private storageService: StorageService, private spotifyService: SpotifyService) {
    this.spotifyCredentials = this.storageService.getObjectItem(SPOTIFY_CREDENTIALS_STORAGE_KEY);
  }

  public loginWithSpotify(): void {
    this.spotifyService.authorize();
  }

  public async loginWithSpotify_callback(code: string): Promise<void> {
    await this.getSpotifyToken(code);
    await this.getSpotifyUser();
    this.router.navigate(["/albums"]);
  }

  public async getSpotifyToken(code: string): Promise<void> {
    const spotifyCredentials: SpotifyCredentials = await this.spotifyService.token(code);
    if (spotifyCredentials) {
      this.setSpotifyCredentials(spotifyCredentials);
    }
  }

  public async getSpotifyRefreshToken(spotifyCredentials: SpotifyCredentials): Promise<SpotifyCredentials> {
    return this.spotifyService.refreshToken(spotifyCredentials);
  }

  public async getSpotifyUser() {
    const spotifyUser = await this.spotifyService.me();
    this.spotifyUser.next(spotifyUser);
  }

  public logOut(): void {
    this.storageService.removeItem(SPOTIFY_CREDENTIALS_STORAGE_KEY);
    this.spotifyCredentials = null;
    this.spotifyUser.next(null);
    this.router.navigate(["/auth/login"]);
  }

  private async setSpotifyCredentials(spotifyCredentials: SpotifyCredentials): Promise<void> {
    this.spotifyCredentials = spotifyCredentials;
    this.storageService.setItem(SPOTIFY_CREDENTIALS_STORAGE_KEY, spotifyCredentials);
  }
}
