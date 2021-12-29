import { Injectable } from '@angular/core';
import { Film } from '../models/film.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Scenariste } from '../models/scenariste.models';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class FilmService {
  apiURL: string = 'http://localhost:4000/films/api';
  apiURLs: string = 'http://localhost:4000/films/apisc';
  films!: Film[]; //un tableau de film 
  film = new Film();
  /*
  films!: Film[]; //un tableau de film 
  film = new Film();
 // scenariste = new Scenariste();
  //scenaristes!: Scenariste[];


  constructor(private http: HttpClient) {
  /*  this.scenaristes = [{ idSc: 5, nom: "amira", prenom: "haouet" },
    { idSc: 6, nom: "test", prenom: "test" }
    ];

    this.films = [
      { idFilm: 1, titre: "Dora", prixticket: 3000.600, dateSortie: new Date("01/14/2011"), scenariste: { idSc: 5, nom: "amira", prenom: "haouet" } },
      { idFilm: 2, titre: "dark", prixticket: 450, dateSortie: new Date("12/17/2010"), scenariste: { idSc: 5, nom: "amira", prenom: "haouet" } },
      {
        idFilm: 3, titre: "stars", prixticket: 900.123, dateSortie: new Date("02/20/2020"), scenariste: { idSc: 5, nom: "amira", prenom: "haouet" }
      }
    ];*/

  constructor(private http: HttpClient) { }

  listeFilm(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiURL);
  }
  supprimerFilm(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }
  consulterFilm(id: number): Observable<Film> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Film>(url);
  }
  updateFilm(prod: Film): Observable<Film> {
    return this.http.put<Film>(this.apiURL, prod, httpOptions);
  }
  listeFilms(): Film[] {

    return this.films;
  }
  ajouterFilm(f: Film): Observable<Film> {
    return this.http.post<Film>(this.apiURL, f, httpOptions);
  }
}





/*
  listeFilm(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiURL);
  }
  listeFilms(): Film[] {

    return this.films;
  }
  /*ajouterFilm(prod: Film) {
    this.films.push(prod);
  }*/
/*
ajouterFilm(f: Film): Observable<Film> {
  return this.http.post<Film>(this.apiURL, f, httpOptions);
}
/*
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
    }); 
 
 
  }*/
/*
supprimerFilm(id: number) {
const url = `${this.apiURL}/${id}`;
return this.http.delete(url, httpOptions);
}
/*consulterFilm(id: number): Film {
this.film != this.films.find(f => f.idFilm == id);
return this.film;
}
consulterFilm(id: number): Observable<Film> {
const url = `${this.apiURL}/${id}`;
return this.http.get<Film>(url);
}

/*updateFilm(f: Film) {
// console.log(p);
this.supprimerFilm(f.idFilm);
this.ajouterFilm(f);
}
updateFilm(prod: Film): Observable<Film> {
return this.http.put<Film>(this.apiURL, prod, httpOptions);
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


/* updateProduit(f: Film) {
 // console.log(p);
 this.supprimerFilm(f);
 this.ajouterFilm(f);
 this.trierFilm();
}*/


/*listeScenaristes(): Scenariste[] {
  return this.scenaristes;
}


consulterScenariste(id: number): Scenariste {
  this.scenariste = this.scenaristes.find(sc => sc.idSc == id)!;
  return this.scenariste;
}
*/
