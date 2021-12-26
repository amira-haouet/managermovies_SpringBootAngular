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
}
