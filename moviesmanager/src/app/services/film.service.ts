import { Injectable } from '@angular/core';
import { Film } from '../film.model';

@Injectable({
providedIn: 'root'
})
export class FilmService {
films : Film[]; //un tableau de Film
constructor(private FilmService: FilmService ) {
this.films = FilmService.listeFilms();
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
ajouterFilm( film: Film){
this.films.push(film);
}

supprimerFilm( film: Film){
  //supprimer le Film prod du tableau Films
  const index = this.films.indexOf(film, 0);
  if (index > -1) {
  }}
}
