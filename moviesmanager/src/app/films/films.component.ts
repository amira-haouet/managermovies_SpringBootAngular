import { OnInit } from "@angular/core";
import { Film } from "../model/film.model";
import { FilmService } from "../services/film.service";

export class FilmsComponent implements OnInit {
films : Film[]; //un tableau de Produit
/*constructor() {
  this.films = [
  {idFilm : 1, titre : "PC Asus", prixticket : 3000.600, dateSortie : new Date("01/14/2011")},
  {idFilm : 2, titre : "Imprimante Epson", prixticket : 450, dateSortie : new Date("12/17/2010")},
  {idFilm : 3, titre :"Tablette Samsung", prixticket : 900.123, dateSortie : new Date("02/20/2020")}
   ];
  }*/


constructor(private filmService: FilmService ) {
this.films = filmService.listeFilms();
}

  ngOnInit(): void {
  //  throw new Error("Method not implemented.");
  }
}
