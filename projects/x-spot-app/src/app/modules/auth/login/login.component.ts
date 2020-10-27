import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "@x-spot-app/app/shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.activatedRoute.queryParams.subscribe(async ({ code }) => {
      if (code) {
        this.authService.loginWithSpotify_callback(code);
      }
    });
  }

  public loginWithSpotify(): void {
    this.authService.loginWithSpotify();
  }
}
