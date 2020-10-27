import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticatedGuard } from "./shared/guards/authenticated.guard";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "albums",
    loadChildren: () => import("./modules/albums/albums.module").then((m) => m.AlbumsModule),
    canActivate: [AuthenticatedGuard],
  },
  { path: "**", redirectTo: "albums" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
