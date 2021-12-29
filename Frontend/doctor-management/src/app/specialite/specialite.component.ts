import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent implements OnInit {

  constructor(private _apiService: ApiService) { }


  ngOnInit(): void {
    this.listSpecialite()
  }

  specialite: Array<any>;
  pages: Array<number>;
  page: number = 0;
  setPage(i, event: any) {
    event.preventDefault();
    this.page = i
    this.listSpecialite();
  }
  listSpecialite() {
    console.log(this.page)
    this._apiService.getSpecialiteParPage(this.page).subscribe(
      data => {
        console.log(data);
        this.specialite = data['content'];
        this.pages = new Array(data['totalPages']);
      }
    )
  }
  delete(id: number) {
    console.log(id)
    this._apiService.deleteSpecialite(id).subscribe(
      data => {
        console.log(data);
        this.specialite = data;
        this.listSpecialite()
      }
    )
  }

}
