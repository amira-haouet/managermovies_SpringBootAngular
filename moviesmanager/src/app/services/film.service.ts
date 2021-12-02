import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';

@Injectable({
providedIn: 'root'
})
export class FilmService {
  Films : Film[]; //un tableau de Film
constructor( ) {
//this.films = FilmService.listeFilms();
this.Films = [
  { idFilm : 1, nomFilm : "Dora", prixFilm : 3000.600, dateCreation: new Date("01/14/2011")},
  { idFilm : 2, nomFilm : "mulan", prixFilm : 450, dateCreation : new Date("12/17/2010")},
  { idFilm : 3, nomFilm :"xxx", prixFilm : 900.123, dateCreation : new Date("02/20/2020")}
  ];
}


/*constructor() {
this.Films = [
{ idFilm : 1, nomFilm : "PC Asus", prixFilm : 3000.600, dateCreation: new Date("01/14/2011")},
{ idFilm : 2, nomFilm : "Imprimante Epson", prixFilm : 450, dateCreation : new Date("12/17/2010")},
{ idFilm : 3, nomFilm :"Tablette Samsung", prixFilm : 900.123, dateCreation : new Date("02/20/2020")}
];
}*/
listeFilms():Film[] {
  return this.Films
}
ajouterFilm( film: Film){
this.Films.push(film);
}

supprimerFilm( film: Film){
  //supprimer le Film prod du tableau Films
  const index = this.Films.indexOf(film, 0);
  if (index > -1) {
  }}

  consulterProduit(id:number): Film{
    this.Films = this.Films.find(f => f.idFilm == id);
    return this.film;
    }
}
