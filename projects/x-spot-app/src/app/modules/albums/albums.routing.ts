import { RouterModule, Routes } from "@angular/router";
import { AlbumDetailsComponent } from "./album-details/album-details.component";
import { AlbumsSearchComponent } from "./albums-search/albums-search.component";

const routes: Routes = [
  {
    path: "",
    component: AlbumsSearchComponent,
  },
  { path: ":id", component: AlbumDetailsComponent },
];

export const AlbumsRoutes = RouterModule.forChild(routes);
