import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  addForm!: FormGroup;
  //26122021 add catego(sc)
  scenaristes!: Scenariste[];
  newIdSc!: number;
  newScenariste!: Scenariste;
  scenaristeService!: ScenaristeService;


  newFilm = new Film();
  message!: string;
  constructor(private filmService: FilmService, private scenaristeservice: ScenaristeService,
    private router: Router, private activatedRoute: ActivatedRoute) { }
  scenariste!: Array<any>;

  ngOnInit(): void {

    //26122021 add catego(sc)
    // this.scenaristes = this.scenaristeservice.listeScenaristes();
    //

    this.listeScenaristes();


  }


  listeScenaristes() {

    this.scenaristeService.listeScenariste().subscribe(
      data => {
        console.log(data)
        this.scenariste = data;

      }
    )
  }
  /* addFilm() {
     //console.log(this.newFilm);
     this.filmService.ajouterFilm(this.newFilm);
   }*/
  addFilm() {
    var data = this.addForm.value;
    var sc = {

      idSc: data.nom
    }


    console.log(data.date)
    var m = {
      titre: data.titre,
      prixticket: data.prixticket,
      dateSortie: data.dateSortie,
      scenariste: sc
    }
    // this.newScenariste = this.scenaristeservice.consulterScenariste(this.newIdSc);
    //  this.newFilm.scenariste = this.newScenariste;
    // this.filmService.ajouterFilm(this.newFilm).subscribe(f => {

    //26122021 console.log(f);
    // });

    this.filmService.ajouterFilm(m).subscribe(
      () => {
        this.router.navigate(['films']).then(() => {

          window.location.reload();
        });
      })
  }
}

