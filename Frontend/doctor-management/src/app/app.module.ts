import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from './api.service';
import { MedecinComponent } from './medecin/medecin.component';
import { AddComponent } from './add/add.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { SpecialiteComponent } from './specialite/specialite.component';
import { EditSpecComponent } from './edit-spec/edit-spec.component';
import { AddSpecComponent } from './add-spec/add-spec.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MedecinComponent,
    AddComponent,
    EditComponent,
    SpecialiteComponent,
    EditSpecComponent,
    AddSpecComponent,

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
