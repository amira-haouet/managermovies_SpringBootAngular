import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient, public authService: AuthService) { }
  getMovie(page: number): Observable<any> {

   

    return this.httpClient.get("http://localhost:8000/project/movie/api/page?p=" + page)

  }
  getMovieById(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8000/project/movie/api/" + id);

  }
  getSpecialiteById(id: number): Observable<any> {
    return this.httpClient.get("http://localhost:8000/project/scenariste/api/" + id);

  }
  addMovie(m): Observable<any> {
    return this.httpClient.post("http://localhost:8000/project/movie/api", m)
  }

  deleteMovie(id: number): Observable<any> {
    return this.httpClient.delete("http://localhost:8000/project/movie/api/" + id)
  }
  updateMovie(m): Observable<any> {
    return this.httpClient.put("http://localhost:8000/project/movie/api", m)
  }
  getMovieByScneariste(s): Observable<any> {
    return this.httpClient.get("http://localhost:8000/project/movie/api/findSpec/" + s)
  }

  getSc(): Observable<any> {
    return this.httpClient.get("http://localhost:8000/project/scenariste/api")

  }
  getSpecialiteParPage(page: number): Observable<any> {
    return this.httpClient.get("http://localhost:8000/project/scenariste/api/page?p=" + page)

  }

  deleteSpecialite(id: number): Observable<any> {
    return this.httpClient.delete("http://localhost:8000/project/scenariste/api/" + id)
  }
  updateSpecialite(s): Observable<any> {
    return this.httpClient.put("http://localhost:8000/project/scenariste/api", s)
  }

  addSpecialite(s): Observable<any> {
    return this.httpClient.post("http://localhost:8000/project/scenariste/api", s)
  }

  /* produitsRecherche: [];
   rechercherParCategorie(idCat: number): Observable<any> {
     this.produitsRecherche = [];
     this.produits.forEach((cur, index) => {
       if (idCat == cur.categorie.idCat) {
         console.log("cur " + cur);
         this.produitsRecherche.push(cur);
       }
     });
     return this.produitsRecherche;
   }*/
}
