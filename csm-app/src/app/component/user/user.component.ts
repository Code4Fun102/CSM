import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';

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
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    // this.toastr.success('Tính năng đang trong quá trình thành công!');
    // this.router.navigate(["charging-category"])
    this.GetAllUser();
  }

  GetAllUser() {
    this.userService.getListUser().subscribe(rs => {
      if (rs && rs.data) {
        this.dataUser = rs.data;
      }
    });
  }
}
