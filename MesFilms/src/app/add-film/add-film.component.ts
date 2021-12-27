import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../models/film.models';
import { Scenariste } from '../models/scenariste.models';
import { FilmService } from '../services/film.service';
import { ScenaristeService } from '../services/scenariste.service';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent implements OnInit {

  //26122021 add catego(sc)
  scenaristes!: Scenariste[];
  newIdSc!: number;
  newScenariste!: Scenariste;


  newFilm = new Film();
  message!: string;
  constructor(private filmService: FilmService, private scenaristeservice: ScenaristeService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //26122021 add catego(sc)
    this.scenaristes = this.scenaristeservice.listeScenaristes();
    //
  }
  /* addFilm() {
     //console.log(this.newFilm);
     this.filmService.ajouterFilm(this.newFilm);
   }*/
  addFilm() {

    // this.newScenariste = this.scenaristeservice.consulterScenariste(this.newIdSc);
    this.newFilm.scenariste = this.newScenariste;
    this.filmService.ajouterFilm(this.newFilm).subscribe(f => {

      console.log(f);
    });
    this.router.navigate(['films']).then(() => {

      window.location.reload();
    });
  }
}
