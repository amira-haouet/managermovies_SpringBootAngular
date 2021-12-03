import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: string[];
  constructor() {

    this.films = ["Dora", "dark", "stars"];
  }

  ngOnInit(): void {
  }

}
