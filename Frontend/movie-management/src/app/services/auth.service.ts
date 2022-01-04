import { User } from '../model/user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../model/role.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* users: User[] = [{ "username": "admin", "password": "123", "roles": ['ADMIN'] },
   { "username": "amira", "password": "123", "roles": ['USER'] }];*/

  apiURL: string = 'http://localhost:8081/users';
  token: string;
  public loggedUser: string;
  public isloggedIn: Boolean = false;
  public roles: string[];
  private helper = new JwtHelperService();
  //public loggedUser: string;
  //public isloggedIn: Boolean = false;
  //public roles: String[];


  constructor(private router: Router, private http: HttpClient) { }
  /* logout() {
     this.isloggedIn = false;
     this.loggedUser = undefined;
     this.roles = undefined;
     localStorage.removeItem('loggedUser');
     localStorage.setItem('isloggedIn', String(this.isloggedIn));
     this.router.navigate(['/login']);
   }
 
   /*
   SignIn(user: User): Boolean {
     let validUser: Boolean = false;
     this.users.forEach((curUser) => {
       if (user.username === curUser.username && user.password == curUser.password) {
         validUser = true;
         this.loggedUser = curUser.username;
         this.isloggedIn = true;
         this.roles = curUser.roles;
         localStorage.setItem('loggedUser', this.loggedUser);
         localStorage.setItem('isloggedIn', String(this.isloggedIn));
       }
     });
     return validUser;
   }
   isAdmin(): Boolean {
     if (!this.roles) //this.roles== undefiened
       return false;
     return (this.roles.indexOf('ADMIN') > -1);
     ;
   }*/


  getUserFromDB(username: string): Observable<User> {
    const url = `${this.apiURL}/${username}`; return this.http.get<User>(url);
  }


  login(user: User) {
    return this.http.post<User>(this.apiURL + '/login', user, { observe: 'response' });
  }

  saveToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
    this.token = jwt;
    this.isloggedIn = true;
    this.decodeJWT();
    console.log(this.isAdmin);
    console.log(this.roles + " these arev the roles");
  }

  decodeJWT() {
    if (this.token == undefined)
      return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.roles;
    this.loggedUser = decodedToken.sub;
  }



  loadToken() {
    this.token = localStorage.getItem('jwt');
    this.decodeJWT();
  }

  getToken(): string {
    return this.token;
  }

  logout() {
    this.loggedUser = undefined;
    this.roles = undefined;
    this.token = undefined;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    this.router.navigate(['/login']);
  }



  isAdmin(): Boolean {
    console.log("the roles in isAdmin is " + this.roles);
    if (!this.roles)
      return false;
    return this.roles.indexOf('ADMIN') >= 0;
  }



  isTokenExpired(): Boolean {
    return this.helper.isTokenExpired(this.token);
  }


  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }

  getUserRoles(login: string) {

  }

}