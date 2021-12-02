import { Injectable } from '@angular/core';
import { Film } from '../film.model';

@Injectable({
providedIn: 'root'
})
export class FilmService {
Films : Film[]; //un tableau de Film
constructor(private FilmService: FilmService ) {
this.Films = FilmService.listeFilms();
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
ajouterFilm( prod: Film){
this.Films.push(prod);
}
}
