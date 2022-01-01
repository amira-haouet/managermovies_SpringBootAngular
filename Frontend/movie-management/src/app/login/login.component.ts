import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur = 0;


  /* constructor() { }
 
   ngOnInit(): void {
   }
   onLoggedin() {
     console.log(this.user);
   }*/

  constructor(private authService: AuthService,
    private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onLoggedin() {
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      this.erreur = 1;
    //  alert('Login ou mot de passe incorrecte!');
  }
}
