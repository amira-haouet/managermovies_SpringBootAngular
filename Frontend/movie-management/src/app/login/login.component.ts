import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();

  constructor() { }

  ngOnInit(): void {
  }
  onLoggedin() {
    console.log(this.user);
  }
}
