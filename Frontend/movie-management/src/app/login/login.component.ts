import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
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
  err: number = 0;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }




  onLoggedin() {
    this.authService.login(this.user).subscribe((data) => {
      let jwToken = data.headers.get('Authorization');
      this.authService.saveToken(jwToken);
      this.router.navigate(['/']);
    }, (err) => {
      this.err = 1;
    });
  }

  /* onLoggedin() {
     this.authService.getUserFromDB(this.user.username).subscribe((usr: User) => {
       if (usr.password == this.user.password) {
         this.authService.signIn(usr);
         this.router.navigate(['/']);
       }
       else
         this.erreur = 1;
     }, (err) => console.log(err));
   }*/



}
