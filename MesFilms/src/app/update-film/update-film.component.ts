import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../models/film.models';
import { Scenariste } from '../models/scenariste.models';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styles: [
  ]
})
export class UpdateFilmComponent implements OnInit {
  currentFilm = new Film()

  scenaristes!: Scenariste[];
  updatedScenariste!: Scenariste;

  constructor(private filmService: FilmService
    , private router: Router

    , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    // this.currentFilm = this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']);
    //console.log(this.currentFilm)
    //
    //  this.scenaristes = this.filmService.listeScenaristes();
    // this.currentFilm = this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']);

    //
    this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']).
      subscribe(f => { this.currentFilm = f; });
  }
  /*updateFilm() { //console.log(this.currentProduit);
    this.filmService.updateFilm(this.currentFilm);
    this.router.navigate(['films']);
  }

*/
  updateFilm() {
    this.filmService.updateFilm(this.currentFilm).subscribe(prod => {
      this.router.navigate(['films']);
    }, (error) => { alert("Problème lors de la modification !"); }
    );
  }
}
