import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-static-wallpaper-list',
  templateUrl: './static-wallpaper-list.component.html',
  styleUrls: ['./static-wallpaper-list.component.css']
})
export class StaticWallpaperListComponent implements OnInit {

  constructor(private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.toastr.success('Tính năng đang trong quá trình thành công!');
    this.router.navigate(["charging-category"])
  }

}
