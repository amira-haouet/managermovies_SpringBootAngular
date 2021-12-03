import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmsComponent } from './films/films.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
const routes: Routes = [
  { path: "films", component: FilmsComponent },
  { path: "add-film", component: AddFilmComponent },
  { path: "", redirectTo: "films", pathMatch: "full" },
  {path: "updateFilm/:id", component: UpdateFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
