import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../models/film.model';
import { FilmService } from '../services/film.service';
@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styles: [
  ]
})
export class UpdateFilmComponent implements OnInit {
  currentFilm = new Film();
  constructor(private activatedRoute: ActivatedRoute,
    private filmService: FilmService) { }

  ngOnInit(): void {

  //  this.currentFilm=this.filmService.currentFilm((this.activatedRoute.snapshot.params.id);
  }
  updateProduit()
  { //console.log(this.currentProduit);
  this.filmService.updateProduit(this.currentFilm);
  }
}
