import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {
  ColDef,
  ICellRendererParams,
  RowHeightParams,
  ValueFormatterParams,
} from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { ChargingService } from 'src/app/service/charging.service';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';

declare const $: any;
@Component({
  selector: 'app-charging-list',
  templateUrl: './charging-list.component.html',
  styleUrls: ['./charging-list.component.scss'],
})
export class ChargingListComponent implements OnInit {
  idUpdate: number;
  priority: number;
  name: '';
  data;
  gridApi;
  gridColumnApi;
  public tooltipShowDelay = 0;
  public rowData!: any[];
  selectedID;
  columnDefs: ColDef[] = [
    {
      headerName: '',
      width: 110,
      cellRenderer: (data: ICellRendererParams) => {
        const me = this;
        let eDiv = document.createElement('div');
        eDiv.innerHTML = `<span class="my-css-class"><button class="btn btn-secondary">Xem</button></span>
          <span class="my-css-class"><button class="btn btn-danger">Xoá</button></span>
          `;
        let eButtonEdit = eDiv.querySelectorAll('.btn-secondary')[0];

        eButtonEdit.addEventListener('click', function () {
          me.router.navigate([`/charging/charging-edit/${data.data.id}/${me.id}/${me.name}`]);
        });

        let eButtonDelete = eDiv.querySelectorAll('.btn-danger')[0];

        eButtonDelete.addEventListener('click', function () {
          me.selectedID = data.data.id;
          me.openModal();
        });

        return eDiv;
      },
      cellClass: 'v-align-center h-align-center',
      autoHeight: true,
      wrapText: true,
    },
    { field: 'isPremium', width: 70, cellClass: 'h-align-center' },
    { field: 'priority', width: 70, cellClass: 'h-align-center' },
    {
      field: 'thumbs',
      cellRenderer: (data: ICellRendererParams) => {
        let tmpl = '<div style="display: block;">';
        if (data.value && data.value?.length) {
          for (const item of data.value) {
            tmpl += `<img onerror="this.onerror=null; this.src='assets/image/default.png'" class="m-3" height="128" src="${item}">`;
          }
        }
        tmpl = tmpl + '</div>';
        return tmpl;
      },
      tooltipField: 'thumbs',
      cellClass: 'v-align-center h-align-center',
      autoHeight: true,
      wrapText: true,
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,
    },
    {
      field: 'videos',
      cellRenderer: (data: ICellRendererParams) => {
        let tmpl = '<div style="display: block;">';
        if (data.value && data.value?.length) {
          for (const item of data.value) {
            tmpl += `<video class="m-3" autoplay muted loop id="myVideo" height="128">
            <source src="${item}" type="video/mp4">
            <source src="assets/video/video_default.mp4" type="video/mp4">
          </video>`;
          }
        }
        tmpl = tmpl + '</div>';
        return tmpl;
      },
      tooltipField: 'videos',
      cellClass: 'v-align-center h-align-center',
      autoHeight: true,
      wrapText: true,
      // tooltipComponentParams: { type: 2 },
      // tooltipComponent: CustomTooltipComponent,
    },
    { field: 'sounds', autoHeight: true, cellClass: 'h-align-center' },
  ];

  defaultColumnDef: ColDef = {
    resizable: true,
  };
  getRowHeight(params: RowHeightParams): number | undefined | null {
    return params.data.rowHeight;
  }
  id: number;
  isPremium: boolean;
  formData = new FormData();
  constructor(
    private chargingService: ChargingService,
    public router: Router,
    public route: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.name = this.route.snapshot.params["name"];
    this.getData();
  }

  getData() {
    this.chargingService.getListCharging(this.id).subscribe((res) => {
      if (res && res.data) {
        const data = res.data.datas;
        data?.forEach(function (dataItem: any, index: number) {
          dataItem.rowHeight =
            dataItem.thumbs?.length > dataItem.videos?.length
              ? dataItem.thumbs?.length * 48
              : dataItem.videos?.length * 48;
        });
        this.data = data;
      } else {
        this.data = [];
      }
      if (!this.data || this.data.length === 0) {
        this.toastr.success('Dữ liệu trống!');
      }
    });
  }

  @ViewChild('template')
  modalTemplateRef;
  modalRef: BsModalRef;
  message: string;
  @ViewChild('templateUpdate')
  modalTemplateUpdate;
  openModal() {
    this.modalRef = this.modalService.show(this.modalTemplateRef, {
      class: 'modal-sm',
    });
  }

  confirm(): void {
    this.chargingService.deleteCharging(this.selectedID).subscribe(
      (res) => {
        if (res) {
          this.data = this.data.filter(obj => obj.id !== this.selectedID);
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

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }

  openModalUpdate() {
    this.modalRef = this.modalService.show(this.modalTemplateUpdate, {
      class: 'modal-sm',
    });
  }
  onCellDoubleClicked(e) {
    if (e && e.colDef && (e.colDef["field"] === "priority" || e.colDef["field"] === "isPremium")) {
      const priority = e.value;
      this.priority = priority;
      this.idUpdate = e.data.id;
      this.isPremium = e.data.isPremium;
      this.openModalUpdate();
    }
  }
  confirmUpdate(): void {
    this.formData.set('isPremium', this.isPremium ? 'true' : 'false');
    this.formData.set('priority', this.priority.toString());
    this.chargingService.updatePriority(this.idUpdate, this.formData).subscribe(
      (res) => {
        if (res) {
          this.toastr.success('Cập nhật thành công!');
          this.getData();
        }
      },
      (err) => {
        this.toastr.error('Cập nhật thất bại!');
      }
    );
    this.modalRef.hide();
  }
  back() {
    this.location.back();
  }

  viewCharging(e) {
    const me = this;
    this.router.navigate([`/charging/charging-edit/${e.id}/${me.id}/${me.name}`]);
  }

  deleteCharging(e) {
    const me = this;
    me.selectedID = e.id;
    me.openModal();
  }

  updateCharging(e)
  {
    this.formData.set('thumbs', '');
    this.formData.set('thumbvideos', '');
    this.formData.set('videos', '');
    this.priority = e.priority;
      this.idUpdate = e.id;
      this.isPremium = e.isPremium;
      this.openModalUpdate();
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
