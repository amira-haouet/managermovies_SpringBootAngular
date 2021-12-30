import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient:HttpClient) { }
  getMedecin(page:number):Observable<any>{
    return this.httpClient.get("http://localhost:3000/project/movie/api/page?p="+page)

  }
  getMedecinById(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:3000/project/movie/api/"+id);

  }
  addMedecin(m):Observable<any>{
    return  this.httpClient.post("http://localhost:3000/project/movie/api",m)
  }
  
  deleteMedecin(id:number):Observable<any>
  {
    return this.httpClient.delete("http://localhost:3000/project/movie/api/"+id)
  }
  updateMedecin(m):Observable<any>{
    return  this.httpClient.put("http://localhost:3000/project/movie/api",m)
  }
  getMedecinBySpecialite(s):Observable<any>{
    return  this.httpClient.get("http://localhost:3000/project/movie/api/findSpec/"+s)
  }

  getSpecialite():Observable<any>{
    return this.httpClient.get("http://localhost:3000/project/specialite/api")

  }
  getSpecialiteParPage(page:number):Observable<any>{
    return this.httpClient.get("http://localhost:3000/project/specialite/api/page?p="+page)

  }
  getSpecialiteById(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:3000/project/specialite/api/"+id);

  }
  deleteSpecialite(id:number):Observable<any>
  {
    return this.httpClient.delete("http://localhost:3000/project/specialite/api/"+id)
  }
  updateSpecialite(s):Observable<any>{
    return  this.httpClient.put("http://localhost:3000/project/specialite/api",s)
  }

  addSpecialite(s):Observable<any>{
    return  this.httpClient.post("http://localhost:3000/project/specialite/api",s)
  }

  
}
