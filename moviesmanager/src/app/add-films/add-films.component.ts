import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';

@Component({
  selector: 'app-add-films',
  templateUrl: './add-films.component.html',
  styleUrls: ['./add-films.component.css']
})
export class AddFilmsComponent implements OnInit {

  newFilm = new Film();

  constructor() { }

  ngOnInit(): void {
  }
  addProduit(){
    console.log(this.newFilm);
    }
    
}
