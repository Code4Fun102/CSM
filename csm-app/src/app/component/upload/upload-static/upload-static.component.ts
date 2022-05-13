import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-static',
  templateUrl: './upload-static.component.html',
  styleUrls: ['./upload-static.component.scss']
})
export class UploadStaticComponent implements OnInit {

  constructor(private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.toastr.success('Tính năng đang trong quá trình thành công!');
    this.router.navigate(["charging-category"])
  }

}
