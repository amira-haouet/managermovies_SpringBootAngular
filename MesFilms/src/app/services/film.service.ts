import { Injectable } from '@angular/core';
import { Film } from '../models/film.models';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films: Film[]; //un tableau de Produit
  constructor() {
    this.films = [
      { idFilm: 1, titre: "Dora", prixticket: 3000.600, dateSortie: new Date("01/14/2011") },
      { idFilm: 2, titre: "dark", prixticket: 450, dateSortie: new Date("12/17/2010") },
      {
        idFilm: 3, titre: "stars", prixticket: 900.123, dateSortie: new Date("02/20/2020")
      }
    ];
  }
  listeFilms(): Film[] {

    return this.films;
  }
  ajouterFilm(prod: Film) {
    this.films.push(prod);
  }
}