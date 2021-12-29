import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../models/film.models';
import { Scenariste } from '../models/scenariste.models';
import { FilmService } from '../services/film.service';
import { ScenaristeService } from '../services/scenariste.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  //  films: string[];
  //tableau de film
  films: Film[];
  scenaristes: Scenariste[];

  // scenaristes: Scenariste[];
  constructor(private filmService: FilmService, private scenaristeservice: ScenaristeService, private router: Router) {

    // this.films = ["Dora", "dark", "stars"];
    /*this.films = [

      { idFilm: 1, titre: "Dora", prixticket: 3000.600, dateSortie: new Date("01/14/2011") },
      { idFilm: 2, titre: "dark", prixticket: 450, dateSortie: new Date("12/17/2010") },
      {
        idFilm: 3, titre: "stars", prixticket: 900.123, dateSortie: new Date("02/20/2020")      }
    ];
    */
    this.scenaristes = scenaristeservice.listeScenaristes();
    this.films = filmService.listeFilms();
  }

  ngOnInit(): void {
    this.filmService.listeFilm().subscribe(f => {
      console.log(f);
      this.films = f;
    });
    this.scenaristeservice.listeScenariste().subscribe(s => {
      console.log(s);
      this.scenaristes = s;
    });

    /* this.filmService.listeScenariste().subscribe(s=> {
 
       this.scenaristes = s
     } );*/
  }
  /* supprimerFilm(f: Film) {
     //console.log(f);
     let conf = confirm("Etes-vous sûr ?");
     if (conf)
 
       this.filmService.supprimerFilm(f);
   }
 */
  /*
    supprimerFilm(f: Film) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
        this.filmService.supprimerFilm(f.idFilm).subscribe(() => {
          console.log("film supprimé");
        });
      this.router.navigate(['films']).then(() => {
        window.location.reload();
      });
    }
  */
  supprimerFilm(p: Film) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.filmService.supprimerFilm(p.idFilm).subscribe(() => {
        console.log("film supprimé");
        this.SuprimerfilmDuTableau(p);
      });
  }

  SuprimerfilmDuTableau(prod: Film) {
    this.films.forEach((cur, index) => {
      if (prod.idFilm === cur.idFilm) {
        this.films.splice(index, 1);
      }
    });
  }
}
