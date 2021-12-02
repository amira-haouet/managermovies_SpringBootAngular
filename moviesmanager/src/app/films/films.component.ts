import { Component, OnInit } from '@angular/core';
import { Film } from '../film.model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films : Film[]; //un tableau de chînes de caractères
  FilmService: any;

  constructor() {
    this.films = [
    {idFilm : 1, nomFilm : "PC Asus", prixFilm : 3000.600, dateCreation : new Date("01/14/2011")},
    {idFilm : 2, nomFilm : "Imprimante Epson", prixFilm : 450, dateCreation : new Date("12/17/2010")},
    {idFilm : 3, nomFilm :"Tablette Samsung", prixFilm : 900.123, dateCreation : new Date("02/20/2020")}
     ];
    }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }
  supprimerFilm(f: Film)
  {
  //console.log(f);
  this.FilmService.supprimerFilm(f);

  }
}
