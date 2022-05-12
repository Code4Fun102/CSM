import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChargingService } from 'src/app/service/charging.service';
import { ChargingModel } from 'src/app/share/model/charging';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-charging-edit',
  templateUrl: './charging-edit.component.html',
  styleUrls: ['./charging-edit.component.scss'],
})
export class ChargingEditComponent implements OnInit {
  isLoading = false;
  id;
  model: ChargingModel = {
    thumbs: [],
    thumbvideos: [],
    sounds: [],
    videos: [],
    priority: null,
    isPremium: false
  };
  modelToSave: ChargingModel;
  constructor(
    public route: ActivatedRoute,
    private chargingService: ChargingService,
    private location: Location,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.modelToSave = JSON.parse(JSON.stringify(this.model));
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isLoading = true;
      this.chargingService
        .getChargingByID(this.id)
        .subscribe((res) => {
          this.isLoading = false;
          if (res) {
            const data = res.data;
            this.model = data;

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
    this.modelToSave.videos.push('');
  }
  deleteVideo(index) {
    this.model.videos.splice(index, 1);
    this.modelToSave.videos.splice(index, 1);
  }

  addThumbvideos() {
    this.model.thumbvideos.push('');
    this.modelToSave.thumbvideos.push('');
  }
  deleteThumbvideos(index) {
    this.model.thumbvideos.splice(index, 1);
    this.modelToSave.thumbvideos.splice(index, 1);
  }

  addThumb() {
    this.model.thumbs.push('');
    this.modelToSave.thumbs.push('');
  }
  deleteThumb(index) {
    this.model.thumbs.splice(index, 1);
    this.modelToSave.thumbs.splice(index, 1);
  }

  addSound() {
    this.model.sounds.push('');
    this.modelToSave.sounds.push('');
  }
  deleteSound(index) {
    this.model.sounds.splice(index, 1);
    this.modelToSave.sounds.splice(index, 1);
  }

  back() {
    this.location.back();
  }

  saveData() {
    this.isLoading = true;
    console.log(this.model);
    console.log(this.modelToSave);
    this.chargingService
      .saveCharging(this.modelToSave, this.id)
      .subscribe(
        (res) => {
          this.isLoading = false;
          if (res) {
            this.toastr.success('Lưu thành công');
          } else {
            this.toastr.error('Có lỗi xảy ra');
          }
        },
        (err) => {
          this.toastr.error('Có lỗi xảy ra');
          this.isLoading = false;
        }
      );
  }

  changevideos(e, background, index) {
    this.modelToSave.videos[index] = e.srcElement.value;
  }

  changethumbvideos(e, icon, index) {
    this.modelToSave.thumbvideos[index] = e.srcElement.value;
  }

  changethumbs(e, link, index) {
    this.modelToSave.thumbs[index] = e.srcElement.value;
  }

  changesounds(e, link, index) {
    this.modelToSave.sounds[index] = e.srcElement.value;
  }
}
