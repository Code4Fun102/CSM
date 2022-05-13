import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChargingCategoryService } from 'src/app/service/charging-category.service';
import { UploadChargingService } from 'src/app/service/upload/upload-charging.service';
import { UploadChargingModel } from 'src/app/share/model/upload/upload-charging';

@Component({
  selector: 'app-upload-charging',
  templateUrl: './upload-charging.component.html',
  styleUrls: ['./upload-charging.component.scss'],
})
export class UploadChargingComponent implements OnInit {
  chargingCategory = [];
  data: UploadChargingModel = new UploadChargingModel();

  formData = new FormData();
  constructor(
    private uploadChargingService: UploadChargingService,
    private toastr: ToastrService,
    private chargingCategoryService: ChargingCategoryService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.chargingCategoryService.getListChargingCategory().subscribe(res=>{
      if(res && res.data){
        this.chargingCategory = res.data;
      }
    });
  }

  saveData() {
    this.formData.set('isPremium', this.data.isPremium ? 'true' : 'false');
    this.formData.set('category', this.data.category);
    this.formData.set('priority', this.data.priority.toString());
    this.uploadChargingService.uploadData(this.formData).subscribe(
      (res) => {
        // console.log(res);
        this.toastr.success('Lưu thành công');
        this.router.navigate(["charging-category"])
      },
      (err) => {
        this.toastr.error('Có lỗi xảy ra!');
      }
    );
  }

  onFileChange(event, type) {
    if (type == 1) {
      this.formData.set('thumbs', event.target.files[0]);
    } else if (type == 2) {
      this.formData.set('thumbvideos', event.target.files[0]);
    } else if (type == 3) {
      this.formData.set('videos', event.target.files[0]);
    }
  }
}
