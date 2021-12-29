import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { HttpClientModule } from '@angular/common/http';
//import { ScenaristesComponent } from './scenaristes/scenaristes.component';
import { AddScenaristeComponent } from './add-scenariste/add-scenariste.component';
import { ScenaristesComponent } from './scenaristes/scenaristes.component';
import { SearchWithScriptwriterComponent } from './search-with-scriptwriter/search-with-scriptwriter.component';
import { HomeComponent } from './home/home.component';
//import { FilmDetailsComponent } from './film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    AddFilmComponent,
    UpdateFilmComponent,
    ScenaristesComponent,
    AddScenaristeComponent,
    ScenaristesComponent,
    SearchWithScriptwriterComponent,
    HomeComponent,
   // ProduitDetailsComponent,
   // FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
