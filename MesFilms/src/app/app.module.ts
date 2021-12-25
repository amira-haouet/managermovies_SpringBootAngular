import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FormsModule } from '@angular/forms';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { HttpClientModule } from '@angular/common/http';
import { ScenaristeComponent } from './scenariste/scenariste.component';
import { AddScenaristeComponent } from './add-scenariste/add-scenariste.component';
import { ScenaristesComponent } from './scenaristes/scenaristes.component';
//import { FilmDetailsComponent } from './film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    AddFilmComponent,
    UpdateFilmComponent,
    ScenaristeComponent,
    AddScenaristeComponent,
    ScenaristesComponent,
   // ProduitDetailsComponent,
   // FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
