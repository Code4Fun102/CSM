import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dataUser: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.GetAllUser();
  }
  GetAllUser() {
    this.http.get<any>("http://localhost:3000/signupUser").subscribe(rs => {
      if (rs) {
        this.dataUser = rs;
      }
    });
  }
}
