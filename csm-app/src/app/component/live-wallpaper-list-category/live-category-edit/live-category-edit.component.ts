import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChargingService } from 'src/app/service/charging.service';
import { ChargingCategoryModel } from 'src/app/share/model/ChargingCategory';
import { LiveCategoryModel } from 'src/app/share/model/live-category';
import { LiveCategoryService } from 'src/app/service/live-category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-live-category-edit',
  templateUrl: './live-category-edit.component.html',
  styleUrls: ['./live-category-edit.component.scss'],
})
export class LiveCategoryEditComponent implements OnInit {
  isLoading = false;
  id: number;
  model: LiveCategoryModel = {
    links: [],
    icon: [],
    name: '',
    background:[]
  };
  modelToSave: LiveCategoryModel;
  constructor(
    public route: ActivatedRoute,
    private liveCategoryService: LiveCategoryService,
    private location: Location,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.modelToSave = JSON.parse(JSON.stringify(this.model));
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isLoading = true;
      this.liveCategoryService.getLiveCategoryByID(this.id).subscribe((res) => {
        if (res) {
          this.isLoading = false;
          const result = res;
          this.model = result.data;
          this.modelToSave = JSON.parse(JSON.stringify(this.model));
        }
      });
    }
  }
  // hoavntb
  addLinks() {
    this.model.links.push('');
    this.modelToSave.links.push('');
  }
  deleteLinks(index) {
    this.model.links.splice(index, 1);
    this.modelToSave.links.splice(index, 1);
  }

  addIcon() {
    this.model.icon.push('');
    this.modelToSave.icon.push('');
  }
  deleteIcon(index) {
    this.model.icon.splice(index, 1);
    this.modelToSave.icon.splice(index, 1);
  }

  addBackground() {
    this.model.background.push('');
    this.modelToSave.background.push('');
  }
  deleteBackground(index) {
    this.model.background.splice(index, 1);
    this.modelToSave.background.splice(index, 1);
  }

  back() {
    this.location.back();
  }

  saveData() {
    this.toastr.info('Chức năng đang trong quá trình thi công');
    return;
    this.liveCategoryService.saveLiveCategory(this.model);
  }

  changeLink(e, link, index) {
    this.modelToSave.links[index] = e.srcElement.value;
  }

  changeIcon(e, link, index) {
    this.modelToSave.icon[index] = e.srcElement.value;
  }

  changeBackground(e, link, index) {
    this.modelToSave.background[index] = e.srcElement.value;
  }
}
