import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSpecComponent } from './add-spec/add-spec.component';
import { AddComponent } from './add/add.component';
import { EditSpecComponent } from './edit-spec/edit-spec.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SpecialiteComponent } from './specialite/specialite.component';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'movie' , component:MovieComponent},
  {path:'medecin/add' , component:AddComponent},
  {path:'medecin/edit' , component:EditComponent},
  {path:'specialite' , component:SpecialiteComponent},
  {path:'specialite/edit' , component:EditSpecComponent},
  {path:'specialite/add' , component:AddSpecComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
