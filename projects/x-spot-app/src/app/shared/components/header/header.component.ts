import { Component, OnInit } from "@angular/core";
import { SpotifyUser } from "@x-spot-app/app/3rd-party/spotify/models";
import { AuthService } from "@x-spot-app/app/shared/services/auth.service";
import { retry } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public spotifyUser: SpotifyUser;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.spotifyUser.pipe(retry(1)).subscribe((spotifyUser) => {
      if (!spotifyUser && this.authService.spotifyCredentials) {
        this.authService.getSpotifyUser();
      } else {
        this.spotifyUser = spotifyUser;
      }
    });
  }

  public logOut(): void {
    this.authService.logOut();
  }
}
