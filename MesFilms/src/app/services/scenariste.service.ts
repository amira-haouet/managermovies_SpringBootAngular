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

  constructor(

  ) {


  }
}
