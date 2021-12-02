import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films : string[]; //un tableau de chînes de caractères

  constructor() {
    this.films = ["Dora", "vivo", "mulan"];
   }

  ngOnInit(): void {
  }

}
