import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SpotifyService } from "./services/spotify.service";

@NgModule({
  imports: [CommonModule],
  providers: [SpotifyService],
})
export class SpotifyModule {}
