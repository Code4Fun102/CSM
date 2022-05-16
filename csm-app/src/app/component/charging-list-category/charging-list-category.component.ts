import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ColDef,
  ICellRendererParams,
  RowHeightParams,
  ValueFormatterParams,
} from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { ChargingService } from 'src/app/service/charging.service';
import { CustomTooltipComponent } from '../charging-list/custom-tooltip/custom-tooltip.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ChargingCategoryService } from 'src/app/service/charging-category.service';
import { ChargingCategoryModel } from 'src/app/share/model/ChargingCategory';
declare const $: any;
@Component({
  selector: 'app-charging-list-category',
  templateUrl: './charging-list-category.component.html',
  styleUrls: ['./charging-list-category.component.scss']
})
export class ChargingListCategoryComponent implements OnInit {
  dataCategory: ChargingCategoryModel[] = [];
  isLoading = false;
  public tooltipShowDelay = 0;
  public rowData!: any[];
  selectedID;
  constructor(
    private chargingCategoryService: ChargingCategoryService,
    private chargingService: ChargingService,
    public router: Router,
    public route: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    this.chargingCategoryService.getListChargingCategory().subscribe((res) => {
      this.isLoading = false;
      if (res && res.data) {
        const result = res.data
        this.dataCategory = result;
        this.getDataDetails();
      }
      else {
        this.dataCategory = []
      }
      if (!this.dataCategory || this.dataCategory.length === 0) {
        this.toastr.success('Dữ liệu trống!');
      }
    },err=>{
      this.isLoading = false;
      this.toastr.error("Error!");
    });
  }

  getDataDetails(){
    this.dataCategory.forEach(async c => {
      const d = await this.chargingService.getListCharging(c.id).toPromise();
      d.data.datas.splice(5);
      c.listCharging = d.data.datas
    });
  }

  @ViewChild('template')
  modalTemplateRef;
  modalRef: BsModalRef;
  message: string;

  openModal() {
    this.modalRef = this.modalService.show(this.modalTemplateRef, {
      class: 'modal-sm',
    });
  }

  confirm(): void {
    this.chargingCategoryService.deleteChargingCategory(this.selectedID).subscribe(
      (res) => {
        if (res) {
          this.dataCategory = this.dataCategory.filter(obj => obj.id !== this.selectedID);
          this.toastr.success('Xoá thành công!');
          this.getData();
        }
      },
      (err) => {
        this.toastr.error('Xoá thất bại!');
      }
    );
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined';
    this.modalRef.hide();
  }
  export() {
    this.chargingCategoryService.export().subscribe((res) => {
      if (res) {
        this.toastr.success('Xuất khẩu thành công');
      }
    });
  }

  viewCharging(e) {
    const me = this;
    this.router.navigate([`charging-category-edit/${e.id}`],{
      relativeTo: me.route,
    });
  }

  deleteCharging(e) {
    const me = this;
    me.selectedID = e.id;
    me.openModal();
  }
  detailCharging(e) {
    const me = this;
    me.router.navigate([`charging-item/${e.id}/${e.name || 'Default Name'}`], {
      relativeTo: me.route,
    });
  }
}
