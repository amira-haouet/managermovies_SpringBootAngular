import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.models';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  newFilm = new Film();
  constructor() { }

  ngOnInit(): void {
  }

}
