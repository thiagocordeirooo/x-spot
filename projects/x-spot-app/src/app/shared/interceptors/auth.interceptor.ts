import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import SpotifyCredentials from "@x-spot-app/app/3rd-party/spotify/models/spotify-credentials.model";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

const UNAUTHORIZED_STATUS_CODE = 401;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthService);
    const { spotifyCredentials } = authService;

    if (spotifyCredentials) {
      const requestClone = request.clone({
        setHeaders: { Authorization: `${spotifyCredentials.token_type} ${spotifyCredentials.access_token}` },
      });

      return next.handle(requestClone).pipe(
        catchError((err) => {
          if (err.status === UNAUTHORIZED_STATUS_CODE) {
            // TODO: Concluir estratégia de refresh token this.tryRefreshToken(authService, spotifyCredentials);
            authService.logOut();
          }

          return throwError(err.error.message || err.statusText);
        })
      );
    } else {
      return next.handle(request);
    }
  }

  private async tryRefreshToken(authService: AuthService, spotifyCredentials: SpotifyCredentials) {
    if (spotifyCredentials && spotifyCredentials.refresh_token) {
      await authService.getSpotifyRefreshToken(spotifyCredentials);

      authService.logOut();
    }
  }
}
