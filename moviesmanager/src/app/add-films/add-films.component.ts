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
  addFilm(){
    console.log(this.newFilm);
    }
    
}
