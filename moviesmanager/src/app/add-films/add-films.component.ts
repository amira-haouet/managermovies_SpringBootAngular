import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-add-films',
  templateUrl: './add-films.component.html',
  styleUrls: ['./add-films.component.css']
})
export class AddFilmsComponent implements OnInit {

  newFilm = new Film();

  constructor( private filmService: FilmService) { }

  ngOnInit(): void {
  }
  addFilm(){
  //  console.log(this.newFilm);
  this.filmService.ajouterFilm(this.newFilm);
    }
    
}
