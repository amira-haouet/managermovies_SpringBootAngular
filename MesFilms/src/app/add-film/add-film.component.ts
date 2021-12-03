import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.models';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  newFilm = new Film();
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }
  addFilm() {
    //console.log(this.newFilm);
    this.filmService.ajouterFilm(this.newFilm);
  }

}
