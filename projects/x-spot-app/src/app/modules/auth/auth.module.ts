import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { XSpotButtonModule } from "@x-spot-lib/components/x-spot-button/x-spot-button.module";
import { AuthRoutes } from "./auth.routing";
import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [CommonModule, AuthRoutes, XSpotButtonModule],
  declarations: [LoginComponent],
  providers: [],
})
export class AuthModule {}
