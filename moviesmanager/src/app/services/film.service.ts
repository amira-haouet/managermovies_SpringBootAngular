import { Injectable } from '@angular/core';
import { Film } from '../models/film.model';
import { Observable, of } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class FilmService {
  films : Film[]; 
  film = new Film();//un tableau de Film

constructor( ) {
//this.films = FilmService.listeFilms();
this.films = [
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
  return this.films
}
ajouterFilm( f: Film){
this.films.push(f);
}

supprimerFilm( f: Film){
  //supprimer le Film prod du tableau Films
  const index = this.films.indexOf(f, 0);
  if (index > -1) {
    this.films.splice(index, 1);
  }}

  consulterFilm(id:number): Film
  {
    this.film = this.films.find(f => f.idFilm == id);
    return this.film;
    }
   

    updateFilm(f:Film)
{
// console.log(f);
this.supprimerFilm(f);
this.ajouterFilm(f);
}
}
