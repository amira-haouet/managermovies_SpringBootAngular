import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../models/film.models';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  newFilm = new Film();
  message!: string;
  constructor(private filmService: FilmService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  /* addFilm() {
     //console.log(this.newFilm);
     this.filmService.ajouterFilm(this.newFilm);
   }*/
  addFilm() {
    this.filmService.ajouterFilm(this.newFilm).subscribe(f => {

      console.log(f);
    });
    this.router.navigate(['films']).then(() => {

      window.location.reload();
    });
  }
}
