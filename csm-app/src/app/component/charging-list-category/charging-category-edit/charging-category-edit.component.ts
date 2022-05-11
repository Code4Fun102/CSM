import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChargingService } from 'src/app/service/charging.service';
import { ChargingModel } from 'src/app/share/model/charging';
import { ChargingCategoryModel } from 'src/app/share/model/ChargingCategory';
import { ChargingCategoryService } from 'src/app/service/charging-category.service';

@Component({
  selector: 'app-charging-category-edit',
  templateUrl: './charging-category-edit.component.html',
  styleUrls: ['./charging-category-edit.component.scss']
})
export class ChargingCategoryEditComponent implements OnInit {
    id;
    model: ChargingCategoryModel = {
      links: [],
      background: [],
      icon: [],
      name: ""
    };
    constructor(
      public route: ActivatedRoute,
      private chargingCategoryService: ChargingCategoryService,
      private location: Location
    ) {}
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      if (this.id) {
        this.chargingCategoryService.getChargingCategoryByID(this.id).subscribe((res) => {
          if (res && res.success) {
            this.model = res.data;
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

    saveData(){
      this.chargingCategoryService.saveChargingCategory(this.model);
    }
  }