import { Injectable } from '@angular/core';
import { Scenariste } from '../models/scenariste.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ScenaristeService {

  apiURL: string = 'http://localhost:4000/films/apisc';

  scenaristes!: Scenariste[]; //un tableau de film 
  scenariste = new Scenariste();

  constructor(private http: HttpClient) {


  }

  listeScenariste(): Observable<Scenariste[]> {
    return this.http.get<Scenariste[]>(this.apiURL);
  }
  listeScenaristes(): Scenariste[] {

    return this.scenaristes;
  }


  ajouterScenariste(s: Scenariste): Observable<Scenariste> {
    return this.http.post<Scenariste>(this.apiURL, s, httpOptions);
  }

  supprimerScenariste(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterScenariste(id: number): Observable<Scenariste> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Scenariste>(url);
  }

  updateScenariste(s: Scenariste): Observable<Scenariste> {
    return this.http.put<Scenariste>(this.apiURL, s, httpOptions);
  }
}
