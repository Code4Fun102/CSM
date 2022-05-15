import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { LiveCategoryService } from 'src/app/service/live-category.service';
import { VersionService } from 'src/app/service/version.service';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})
export class VersionComponent implements OnInit {
  dataUser:any;
  constructor(
    private liveCategoryService: LiveCategoryService,
    public router: Router,
    public route: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private versionSevice: VersionService
  ) { }

  ngOnInit(): void {
    this.GetAllUser();
  }

  GetAllUser() {
    this.versionSevice.getListVersion().subscribe(rs => {
      if (rs && rs.data) {
        this.dataUser = rs.data;
      }
    });
  }
  
  export() {
    this.liveCategoryService.export().subscribe((res) => {
      if (res) {
        this.toastr.success('Xuất khẩu thành công');
      }
    });
  }
}
