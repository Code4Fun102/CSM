import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LiveCategoryService } from 'src/app/service/live-category.service';
import { UploadLiveWallpaperService } from 'src/app/service/upload/upload-live-wallpaper.service';
import { UploadLiveWallPaperModel } from 'src/app/share/model/upload/upload-live-wallpaper';

@Component({
  selector: 'app-upload-live',
  templateUrl: './upload-live.component.html',
  styleUrls: ['./upload-live.component.scss']
})
export class UploadLiveComponent implements OnInit {
  chargingCategory = [];
  formData = new FormData();
  data: UploadLiveWallPaperModel = new UploadLiveWallPaperModel();
  constructor(
    private uploadLiveWallpaperService: UploadLiveWallpaperService,
    private toastr: ToastrService,
    private liveCategoryService: LiveCategoryService) { }

  ngOnInit(): void {
    this.liveCategoryService.getListLiveCategory().subscribe(res=>{
      if(res && res.data){
        this.chargingCategory = res.data;
      }
    });
  } 

  saveData() {
    this.formData.set('isPremium', this.data.isPremium ? 'true' : 'false');
    this.formData.set('category', this.data.category);
    this.uploadLiveWallpaperService.uploadData(this.formData).subscribe(
      (res) => {
        // console.log(res);
        this.toastr.success('Lưu thành công');
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
