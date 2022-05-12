import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-live',
  templateUrl: './upload-live.component.html',
  styleUrls: ['./upload-live.component.scss']
})
export class UploadLiveComponent implements OnInit {
  formData
  constructor() { }

  ngOnInit(): void {
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
