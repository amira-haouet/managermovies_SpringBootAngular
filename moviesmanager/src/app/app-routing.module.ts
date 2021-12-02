import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmsComponent } from './films/films.component';
import { AddFilmsComponent } from './add-films/add-films.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
const routes: Routes = [
{path: "films", component : FilmsComponent},
{path: "add-films", component : AddFilmsComponent},
{path: "", redirectTo: "films", pathMatch: "full" },
{path: "updateFilm/:id", component: UpdateFilmComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
