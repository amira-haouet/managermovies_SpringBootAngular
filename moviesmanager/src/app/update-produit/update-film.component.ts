import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { ActivatedRoute,Router } from '@angular/router';
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
              private router :Router,
              private filmService: FilmService) { }

  ngOnInit(): void {
   // this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']).
  //  subscribe( prod =>{ this.currentFilm = prod; });
  }

 
  

}
