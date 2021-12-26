import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { AddScenaristeComponent } from './add-scenariste/add-scenariste.component';
import { FilmsComponent } from './films/films.component';
import { ScenaristesComponent } from './scenaristes/scenaristes.component';
import { SearchWithScriptwriterComponent } from './search-with-scriptwriter/search-with-scriptwriter.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
//import {FilmDetailsComponent} from './film-details/film-details.component';


const routes: Routes = [
  { path: "films", component: FilmsComponent },
  { path: "add-film", component: AddFilmComponent },
  { path: "add-scenariste", component: AddScenaristeComponent },

  { path: "", redirectTo: "films", pathMatch: "full" },
  { path: "updateFilm/:id", component: UpdateFilmComponent },
  { path: "scenaristes", component: ScenaristesComponent },
 // { path: "film-details", component: FilmDetailsComponent },
 {path: "SearchWithScriptwriterComponent", component : SearchWithScriptwriterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
