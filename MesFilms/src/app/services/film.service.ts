import { Injectable } from '@angular/core';
import { Film } from '../models/film.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  apiURL: string = 'http://localhost:4000/films/api';

  films!: Film[]; //un tableau de film 
  film = new Film();

  constructor(private http: HttpClient) {
    /*  this.films = [
        { idFilm: 1, titre: "Dora", prixticket: 3000.600, dateSortie: new Date("01/14/2011") },
        { idFilm: 2, titre: "dark", prixticket: 450, dateSortie: new Date("12/17/2010") },
        {
          idFilm: 3, titre: "stars", prixticket: 900.123, dateSortie: new Date("02/20/2020")
        }
      ];*/
  }

  listeFilm(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiURL);
  }
  listeFilms(): Film[] {

    return this.films;
  }
  ajouterFilm(prod: Film) {
    this.films.push(prod);
  }


  supprimerFilm(prod: Film) {
    //supprimer le film prod du tableau films
    const index = this.films.indexOf(prod, 0);
    if (index > -1) {
      this.films.splice(index, 1);
    }
    //or
    /* this.films.forEach((cur, index) => {
    if(prod.idFilm === cur.idFilm) {
    this.films.splice(index, 1);
    }
    }); */


  }
  consulterFilm(id: number): Film {
    this.film != this.films.find(f => f.idFilm == id);
    return this.film;
  }
  updateFilm(p: Film) {
    // console.log(p);
    this.supprimerFilm(p);
    this.ajouterFilm(p);
  }

  trierProduits() {
    this.films = this.films.sort((n1, n2) => {
      if (n1.idFilm > n2.idFilm) {
        return 1;
      }
      if (n1.idFilm < n2.idFilm) {
        return -1;
      }
      return 0;
    });
  }
  updateProduit(f: Film) {
    // console.log(p);
    this.supprimerFilm(f);
    this.ajouterFilm(f);
    this.trierProduits();
  }

 
}