import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {
  seachForm: FormGroup;
  constructor(private _apiService : ApiService, private formBuilder: FormBuilder) {
    this.seachForm = formBuilder.group(
      {
        spec: new FormControl()
      })
   }

  ngOnInit(): void {
    this.listMedecin()
  }

  medecins:Array<any>;
  pages:Array<number>;
  page:number = 0;
  setPage(i,event:any)
  {
      event.preventDefault();
      this.page=i
      this.listMedecin();
  }

  listMedecin()
  {
    console.log(this.page)
    this._apiService.getMedecin(this.page).subscribe(
      data=>{
          console.log(data);
          this.medecins=data['content'];
          this.pages = new Array(data['totalPages']);
      }
    )
   }
   listSpecialite()
  {
    
    this._apiService.getSpecialite().subscribe(
      data=>{
          console.log(data);
          this.medecins=data;
      }
    )
   }
   delete(id:number)
   {
    console.log(id)
    this._apiService.deleteMedecin(id).subscribe(
      data=>{
          console.log(data);
          this.medecins=data;
          this.listMedecin()
      }
    )
   
   }
   search()
   {
     
     var medecins = this.medecins
     var dataMed = this.seachForm.value
     console.log(dataMed.spec)
     this._apiService.getMedecinBySpecialite(dataMed.spec).subscribe(
       data=>{
         console.log(data)
         if(dataMed.spec !=null)
         {
          this.medecins=data
         }
         else
         {
          this.listMedecin()
         }
        
       },err=>{
        this.listMedecin()
       }
     )
   }

}
