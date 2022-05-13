import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dataUser: any;
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.toastr.success('Tính năng đang trong quá trình thành công!');
    this.router.navigate(["charging-category"])
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
