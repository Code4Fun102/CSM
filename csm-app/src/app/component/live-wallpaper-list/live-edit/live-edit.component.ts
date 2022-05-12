import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LiveWallPaperModel } from 'src/app/share/model/live-wallpaper';
import { LiveWallPaperService } from 'src/app/service/live-wallpaper.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-live-edit',
  templateUrl: './live-edit.component.html',
  styleUrls: ['./live-edit.component.scss'],
})
export class LiveEditComponent implements OnInit {
  isLoading = false;
  id;
  model: LiveWallPaperModel = {
    videos: [],
    isPremium: false,
    isLiveWallpaper: false,
    priority: null,
    thumbs: [],
  };
  modelToSave: LiveWallPaperModel;
  constructor(
    public route: ActivatedRoute,
    private liveWallPaperService: LiveWallPaperService,
    private location: Location,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.modelToSave = JSON.parse(JSON.stringify(this.model));
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isLoading = true;
      this.liveWallPaperService
        .getLiveWallPaperByID(this.id)
        .subscribe((res) => {
          this.isLoading = false;
          if (res) {
            this.model = res.data;
            this.modelToSave = JSON.parse(JSON.stringify(this.model));
          }
        },
        err=>{
          this.isLoading = false;
        });
    }
  }

  addVideo() {
    this.model.videos.push('');
    this.model.videos.push('');
  }
  deleteVideo(index) {
    this.model.videos.splice(index, 1);
    this.modelToSave.videos.splice(index, 1);
  }

  addThumb() {
    this.model.thumbs.push('');
    this.modelToSave.thumbs.push('');
  }
  deleteThumb(index) {
    this.model.thumbs.splice(index, 1);
    this.modelToSave.thumbs.splice(index, 1);
  }
  back() {
    this.location.back();
  }

  saveData() {
    this.toastr.info('Chức năng đang trong quá trình thi công');
    return;
    this.liveWallPaperService.saveLiveWallPaper(this.model);
  }

  changevideos(e, background, index) {
    this.modelToSave.videos[index] = e.srcElement.value;
  }

  changethumbs(e, link, index) {
    this.modelToSave.thumbs[index] = e.srcElement.value;
  }
}
