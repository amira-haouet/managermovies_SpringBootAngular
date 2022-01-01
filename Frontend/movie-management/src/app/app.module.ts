import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from './services/api.service';
import { MovieComponent } from './movie/movie.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { ScenaristeComponent } from './scenariste/scenariste.component';
import { EditScComponent } from './edit-sc/edit-sc.component';
import { AddSpecComponent } from './add-spec/add-spec.component';
import { RechercheParScenaristeComponent } from './recherche-par-scenariste/recherche-par-scenariste.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MovieComponent,
    AddComponent,
    EditComponent,
    ScenaristeComponent,
    EditScComponent,
    AddSpecComponent,
    RechercheParScenaristeComponent,
    TestComponent,
    LoginComponent,
    ForbiddenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


  ],

  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
