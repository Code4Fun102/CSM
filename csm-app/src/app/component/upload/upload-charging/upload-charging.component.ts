import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UploadChargingService } from 'src/app/service/upload/upload-charging.service';
import { UploadChargingModel } from 'src/app/share/model/upload/upload-charging';

@Component({
  selector: 'app-upload-charging',
  templateUrl: './upload-charging.component.html',
  styleUrls: ['./upload-charging.component.scss'],
})
export class UploadChargingComponent implements OnInit {

  data: UploadChargingModel = new UploadChargingModel();

  formData = new FormData();
  constructor(private uploadChargingService: UploadChargingService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.data.category = "Trending";
  }

  saveData() {
    this.formData.set("isPremium", this.data.isPremium ? 'true' : 'false');
    this.formData.set("category", this.data.category);
    this.formData.set("priority", this.data.priority.toString());
    this.uploadChargingService.uploadData(this.formData).subscribe((res) => {
      // console.log(res);
      this.toastr.success("Lưu thành công");
    },
    err=>{
      this.toastr.error("Có lỗi xảy ra!");
    });
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
