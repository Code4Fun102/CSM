import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charging-list-category',
  templateUrl: './charging-list-category.component.html',
  styleUrls: ['./charging-list-category.component.scss']
})
export class ChargingListCategoryComponent implements OnInit {
  dataCategory: any ={
    links: [],
    icon:[],
    name:"",
    background:[]
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.GetCategory();
  }

  GetCategory()
  {
    this.http.get<any>("http://localhost:3000/list-category").subscribe(rs => {
      if (rs) {
        this.dataCategory = rs;
      }
    });
  }
}
