import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { FilmsComponent } from './films/films.component';
const routes: Routes = [
  { path: "films", component: FilmsComponent },
  {path: "add-produit", component : AddFilmComponent},
  { path: "", redirectTo: "films", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
