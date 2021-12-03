import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-Film',
  templateUrl: './add-Film.component.html'
})
export class AddFilmComponent implements OnInit {

  newFilm = new Film();

  ngOnInit(): void {
  }

  addProduit(){
    console.log(this.newFilm);
    }
    
 

}
