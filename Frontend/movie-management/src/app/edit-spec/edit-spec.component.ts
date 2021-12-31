import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-edit-spec',
  templateUrl: './edit-spec.component.html',
  styleUrls: ['./edit-spec.component.css']
})
export class EditSpecComponent implements OnInit {
  s: any;
  editForm: FormGroup;
  id: number;
  constructor(
    private _apiService: ApiService,
    private formBuilder: FormBuilder,
    private router: Router,
    private Aroute: ActivatedRoute) {

    this.editForm = formBuilder.group(
      {
        nomSc: new FormControl(null, [
          Validators.required,
          Validators.minLength(2)]),
        prenomSc: new FormControl(null, [
          Validators.required,
          Validators.minLength(2)]),
      })
  }

  ngOnInit(): void {

    this.Aroute.queryParams.subscribe(params => {
      this.id = params['id'];

    });
    this.getSpecialiteById(this.id)

  }

  getSpecialiteById(id) {
    this._apiService.getSpecialiteById(id).subscribe(
      data => {
        this.s = data;

      }, error => console.log(error)
    )
  }

  edit() {
    let conf = confirm("si vous voulez modifier cliquer sur ok");
    if (conf)
      var data = this.editForm.value;

    console.log(data)

    var sc = {
      idSc: this.id,
      nomSc: data.nomSc,
      prenomSc: data.prenomSc
    }

    this._apiService.updateSpecialite(sc).subscribe(
      () => {
        this.router.navigate(['scenariste']);
      }, (error) => { alert("Problème lors de la modification !"); }

    )

  }

}
