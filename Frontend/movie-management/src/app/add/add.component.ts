import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import {FormGroup , FormControl , FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm : FormGroup ;
  constructor(private _apiService : ApiService , private formBuilder : FormBuilder ,private router: Router ) {
    this.addForm = formBuilder.group(
      {
        nom: new FormControl(null,[
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-]+$')
        ]),
        prenom : new FormControl(null,[
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-]+$')
        ]),
        date : new FormControl(null,[
          Validators.required,
        ]),
        sexe : new FormControl(null,[
          Validators.required,
        ]),
        spec: new FormControl(null,[
          Validators.required,
        ])
      } 
    )    
    

   }
   specialite:Array<any>;
  ngOnInit(): void {
    this.listSpecialite();
  }
  listSpecialite()
  {
    
    this._apiService.getSpecialite().subscribe(
      data=>{
          console.log(data)
          this.specialite=data;
        
      }
    )
   }
   add()
   {
    
     var data = this.addForm.value;
     var spec = {
       idSpec:data.spec
     }
     console.log(data.date)
     var m ={
      nomMedecin : data.nom , 
      prenomMedecin : data.prenom ,
      dateNaiss: data.date,
      sexe : data.sexe , 
      specialite :spec
     }
     this._apiService.addMedecin(m).subscribe(
      ()=>{
          
        this.router.navigate(['medecin']);
      }
    )

   }
}
