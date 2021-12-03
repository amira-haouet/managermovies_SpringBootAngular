import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmsComponent } from "./films/films.component";
import { UpdateFilmComponent } from './update-produit/update-film.component';



const routes: Routes = [
  {path : "films", component : FilmsComponent},
  {path : "add-Filmfilm", component : AddFilmComponent},
  {path: "updateFilm/:id", component: UpdateFilmComponent},
  {path: "", redirectTo: "Films", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
