import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { StorageService } from "@x-spot-lib/services/storage/storage.service";
import { SpotifyModule } from "./3rd-party/spotify/spotify.module";
import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routing";
import { HeaderModule } from "./shared/components/header/header.module";
import { AuthInterceptor } from "./shared/interceptors/auth.interceptor";

@NgModule({
  declarations: [AppComponent, AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule, AppRoutes, SpotifyModule, HeaderModule],
  providers: [
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
