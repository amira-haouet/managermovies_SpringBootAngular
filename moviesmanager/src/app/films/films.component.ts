import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films : Film[]; //un tableau de chînes de caractères
  

  constructor(private filmService: FilmService) {
    this.films=filmService.listeFilms();
   /* this.films = [
    {idFilm : 1, nomFilm : "Dora", prixFilm : 3000.600, dateCreation : new Date("01/14/2011")},
    {idFilm : 2, nomFilm : "mulan", prixFilm : 450, dateCreation : new Date("12/17/2010")},
    {idFilm : 3, nomFilm :"dark", prixFilm : 900.123, dateCreation : new Date("02/20/2020")}
     ];*/
    }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
  supprimerFilm(f: Film)
  {
  //console.log(f);
  this.filmService.supprimerFilm(f);
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
  this.filmService.supprimerFilm(f);
  }
}
