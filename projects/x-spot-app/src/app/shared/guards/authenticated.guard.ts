import { Injectable } from "@angular/core";
import { CanActivate, CanLoad } from "@angular/router";
import { SPOTIFY_CREDENTIALS_STORAGE_KEY } from "@x-spot-app/app/3rd-party/spotify/spotify.constants";
import { StorageService } from "@x-spot-lib/services/storage/storage.service";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class AuthenticatedGuard implements CanLoad, CanActivate {
  constructor(private storageService: StorageService, private authService: AuthService) {}

  canLoad(): boolean {
    return this.checkAuthentication();
  }

  canActivate(): boolean {
    return this.checkAuthentication();
  }

  private checkAuthentication(): boolean {
    const spotifyCredentials = this.storageService.getObjectItem(SPOTIFY_CREDENTIALS_STORAGE_KEY);

    if (!spotifyCredentials) {
      this.authService.logOut();
    }

    return !!spotifyCredentials;
  }
}
