import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChargingService } from 'src/app/service/charging.service';
import { ChargingModel } from 'src/app/share/model/charging';
import { ChargingCategoryModel } from 'src/app/share/model/ChargingCategory';
import { ChargingCategoryService } from 'src/app/service/charging-category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-charging-category-edit',
  templateUrl: './charging-category-edit.component.html',
  styleUrls: ['./charging-category-edit.component.scss'],
})
export class ChargingCategoryEditComponent implements OnInit {
  isLoading = false;
  id: number;
  model: ChargingCategoryModel = {
    links: [],
    background: [],
    icon: [],
    name: '',
  };

  modelToSave: ChargingCategoryModel;
  constructor(
    public route: ActivatedRoute,
    private chargingCategoryService: ChargingCategoryService,
    private location: Location,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.modelToSave = JSON.parse(JSON.stringify(this.model));
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isLoading = true;
      this.chargingCategoryService
        .getChargingCategoryByID(this.id)
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

  addLinks() {
    this.model.links.push('');
    this.modelToSave.links.push('');
  }
  deleteLinks(index) {
    this.model.links.splice(index, 1);
    this.modelToSave.links.splice(index, 1);
  }

  addBackground() {
    this.model.background.push('');
    this.modelToSave.background.push('');
  }
  deleteBackground(index) {
    this.model.background.splice(index, 1);
    this.modelToSave.background.splice(index, 1);
  }

  addIcon() {
    this.model.icon.push('');
    this.modelToSave.icon.push('');
  }
  deleteIcon(index) {
    this.model.icon.splice(index, 1);
    this.modelToSave.icon.splice(index, 1);
  }
  back() {
    this.location.back();
  }

  saveData() {
    this.toastr.info("Chức năng đang trong quá trình thi công");
    return;
    this.isLoading = true;
    console.log(this.model);
    console.log(this.modelToSave);
    this.chargingCategoryService
      .saveChargingCategory(this.modelToSave, this.id)
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

  changeBackground(e, background, index) {
    this.modelToSave.background[index] = e.srcElement.value;
  }

  changeIcon(e, icon, index) {
    this.modelToSave.icon[index] = e.srcElement.value;
  }

  changeLink(e, link, index) {
    this.modelToSave.links[index] = e.srcElement.value;
  }
}
