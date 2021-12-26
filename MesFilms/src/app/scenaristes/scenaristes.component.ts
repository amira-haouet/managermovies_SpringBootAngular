import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scenariste } from '../models/scenariste.models';
import { ScenaristeService } from '../services/scenariste.service';

@Component({
  selector: 'app-scenaristes',
  templateUrl: './scenaristes.component.html',
  styleUrls: ['./scenaristes.component.css']
})
export class ScenaristesComponent implements OnInit {

scenaristes :Scenariste[];

  constructor(private scenaristeservice: ScenaristeService,private router: Router) {
this.scenaristes=scenaristeservice.listeScenaristes();
   }

  ngOnInit(): void {
    this.scenaristeservice.listeScenariste().subscribe(s => {
      console.log(s);
      this.scenaristes = s;
    });
  }

}
