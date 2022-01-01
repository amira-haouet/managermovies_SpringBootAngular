import { User } from './../model/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser: string;
  public isloggedIn: Boolean = false;
  //public roles: string[];
  public roles: Role[];
  apiURL: string = 'http://localhost:1234/users/login';
  /*
    users: User[] =
  
      [
  
        { "username": "admin", "password": "123", "roles": ['ADMIN'] },
        { "username": "amira", "password": "123", "roles": ['USER'] }
  
      ];
  */



  constructor(private router: Router) { }



  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

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

  }

  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }
  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }




}