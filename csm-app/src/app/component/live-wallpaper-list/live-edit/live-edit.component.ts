import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LiveWallPaperModel } from 'src/app/share/model/live-wallpaper';
import { LiveWallPaperService } from 'src/app/service/live-wallpaper.service';

@Component({
  selector: 'app-live-edit',
  templateUrl: './live-edit.component.html',
  styleUrls: ['./live-edit.component.scss']
})
export class LiveEditComponent implements OnInit {

    id;
    model: LiveWallPaperModel = {
      videos: [],
      isPremium : false,
      isLiveWallpaper : false,
      priority: null,
      thumbs: []
    };
    constructor(
      public route: ActivatedRoute,
      private liveWallPaperService: LiveWallPaperService,
      private location: Location
    ) {}
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      if (this.id) {
        this.liveWallPaperService.getLiveWallPaperByID(this.id).subscribe((res) => {
          if (res) {
            this.model = res.data;
          }
        });
      }
    }
  
    addVideo() {
      //this.model.videos.push('');
    }
    deleteVideo(index) {
      this.model.videos.splice(index, 1);
    }
  
    addThumb() {
     // this.model.thumbs.push('');
    }
    deleteThumb(index) {
      this.model.thumbs.splice(index, 1);
    }
    back() {
      this.location.back();
    }

    saveData(){
      this.liveWallPaperService.saveLiveWallPaper(this.model);
    }
  }