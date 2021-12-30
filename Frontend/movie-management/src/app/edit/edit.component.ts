import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl,Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  editForm: FormGroup;
  constructor(private _apiService: ApiService, private formBuilder: FormBuilder, private router: Router, private Aroute: ActivatedRoute) {
    this.editForm = formBuilder.group(
      {
        nom: new FormControl(null,[
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-]+$')
        ]),
        prenom: new FormControl(null,[
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.-]+$')
        ]),
        date: new FormControl(null,[
          Validators.required,
        ]),
        sexe: new FormControl(null,[
          Validators.required,
        ]),
        spec: new FormControl(null,[
          Validators.required,
        ])
      })
  }
  
  m :any;
  specialite: Array<any>;
  id:number;
  ngOnInit(): void {
  
    this.Aroute.queryParams.subscribe(params => {
       this.id = params['id'];
      
    });
    
    this.getMedecinById(this.id);
    this.listSpecialite();

  }


  listSpecialite() {

    this._apiService.getSpecialite().subscribe(
      data => {
        this.specialite = data;
      }
    )
  }

  getMedecinById(id)
  {
    this._apiService.getMedecinById(id).subscribe(
      data=>{
        this.m =data;
         
      },error=>console.log(error)
    )
  }
  edit() {

    var data = this.editForm.value;
    
    var spec = {
      idSpec: data.spec
    }
    console.log(data)
    var m = {
      idMedecin:this.id,
      nomMedecin: data.nom,
      prenomMedecin: data.prenom,
      dateNaiss: data.date,
      sexe: data.sexe,
      specialite: spec
    }
    this._apiService.updateMedecin(m).subscribe(
      () => {

        this.router.navigate(['medecin']);
      }
    )

  }

}
