import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChargingService } from 'src/app/service/charging.service';
import { ChargingModel } from 'src/app/share/model/charging';

@Component({
  selector: 'app-charging-edit',
  templateUrl: './charging-edit.component.html',
  styleUrls: ['./charging-edit.component.scss'],
})
export class ChargingEditComponent implements OnInit {
  id;
  model: ChargingModel = {
    thumbs: [],
    thumbvideos: [],
    sounds: [],
    videos: [],
    priority: null,
    isPremium: false
  };
  constructor(
    public route: ActivatedRoute,
    private chargingService: ChargingService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.chargingService.getChargingByID(this.id).subscribe((res) => {
        if (res) {
          this.model = res;
        }
      });
    }
  }

  addVideo() {
    this.model.videos.push('');
  }
  deleteVideo(index) {
    this.model.videos.splice(index, 1);
  }

  addhumbvideos() {
    this.model.thumbvideos.push('');
  }
  deleteThumbvideos(index) {
    this.model.thumbvideos.splice(index, 1);
  }

  addThumb() {
    this.model.thumbs.push('');
  }
  deleteThumb(index) {
    this.model.thumbs.splice(index, 1);
  }

  addSound() {
    this.model.sounds.push('');
  }
  deleteSound(index) {
    this.model.sounds.splice(index, 1);
  }
  back() {
    this.location.back();
  }
}
