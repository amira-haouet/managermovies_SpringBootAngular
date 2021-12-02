import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmsComponent } from './add-films/add-films.component';
import { UpdateFilmComponent } from './update-film/update-film.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    AddFilmsComponent,
    UpdateFilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
