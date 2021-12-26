import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Scenariste } from '../models/scenariste.models';
import { ScenaristeService } from '../services/scenariste.service';

@Component({
  selector: 'app-add-scenariste',
  templateUrl: './add-scenariste.component.html',
  styleUrls: ['./add-scenariste.component.css']
})
export class AddScenaristeComponent implements OnInit {

  newScenariste = new Scenariste();
  message!: string;
  constructor(private scenaristeService: ScenaristeService,
    private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

  //26122021 add catego(sc)
   // this.scenaristes = this.filmService.listeScenaristes();
//



  }


  addScenariste() {

    // this.newScenariste = this.filmService.consulterScenariste(this.newIdSc);
    // this.newFilm.scenariste = this.newScenariste;
     this.scenaristeService.ajouterScenariste(this.newScenariste).subscribe(f => {
 
       console.log(f);
     });
     this.router.navigate(['scenaristes']).then(() => {
 
       window.location.reload();
     });
   }
}
