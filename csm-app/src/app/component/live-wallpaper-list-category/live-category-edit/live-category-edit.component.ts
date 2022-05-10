import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChargingService } from 'src/app/service/charging.service';
import { ChargingCategoryModel } from 'src/app/share/model/ChargingCategory';

@Component({
  selector: 'app-live-category-edit',
  templateUrl: './live-category-edit.component.html',
  styleUrls: ['./live-category-edit.component.scss']
})
export class LiveCategoryEditComponent implements OnInit {

    id;
    model: ChargingCategoryModel = {
      links: [],
      icon: [],
      name: ""
    };
    constructor(
      public route: ActivatedRoute,
      private chargingService: ChargingService,
      private location: Location
    ) {}
  
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
  
    addLinks() {
      this.model.links.push('');
    }
    deleteLinks(index) {
      this.model.links.splice(index, 1);
    }
  
    addBackground() {
      this.model.background.push('');
    }
    deleteBackground(index) {
      this.model.background.splice(index, 1);
    }
  
    addIcon() {
      this.model.icon.push('');
    }
    deleteIcon(index) {
      this.model.icon.splice(index, 1);
    }
    back() {
      this.location.back();
    }
  }