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

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CustomTooltipComponent } from '../charging-list/custom-tooltip/custom-tooltip.component';

declare const $: any;
@Component({
  selector: 'app-live-wallpaper-list',
  templateUrl: './live-wallpaper-list.component.html',
  styleUrls: ['./live-wallpaper-list.component.scss']
})
export class LiveWallpaperListComponent implements OnInit {
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
        eDiv.innerHTML = `<span class="my-css-class"><button class="btn btn-secondary">Sửa</button></span>
          <span class="my-css-class"><button class="btn btn-danger">Xoá</button></span>`;
        let eButtonEdit = eDiv.querySelectorAll('.btn-secondary')[0];

        eButtonEdit.addEventListener('click', function () {
          me.router.navigate([`charging-edit/${data.data.id}`], {
            relativeTo: me.route,
          });
        });

        let eButtonDelete = eDiv.querySelectorAll('.btn-danger')[0];

        eButtonDelete.addEventListener('click', function () {
          me.selectedID = data.data.id;
          me.openModal();
        });
        return eDiv;
      },
    },
    {
      field: 'videos',
      cellRenderer: (data: ICellRendererParams) => {
        let tmpl = '';
        if (data.value && data.value?.length) {
          for (const item of data.value) {
            tmpl += `${item}<br>`;
          }
        }
        return tmpl;
      },
      tooltipField: 'videos',
      tooltipComponentParams: { type: 2 },
      tooltipComponent: CustomTooltipComponent,
    },
    { field: 'isPremium' },
    { field: 'isLiveWallpaper' },
    { field: 'priority' },
    {
      field: 'thumbs',
      cellRenderer: (data: ICellRendererParams) => {
        let tmpl = '';
        if (data.value && data.value?.length) {
          for (const item of data.value) {
            tmpl += `${item}<br>`;
          }
        }
        return tmpl;
      },
      tooltipField: 'thumbs',
      tooltipComponentParams: { type: 1 },
      tooltipComponent: CustomTooltipComponent,
    },
    
  ];
  defaultColumnDef: ColDef = {
    resizable: true,
  };
  getRowHeight(params: RowHeightParams): number | undefined | null {
    return params.data.rowHeight;
  }
  constructor(
    private chargingService: ChargingService, 
    public router: Router, 
    public route: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.chargingService.getListLiveWallpaper().subscribe((res) => {
      res.datas.forEach(function (dataItem: any, index: number) {
        dataItem.rowHeight =
          dataItem.thumbs?.length > dataItem.videos?.length
            ? dataItem.thumbs?.length * 48
            : dataItem.videos?.length * 48;
      });
      this.data = res.datas;
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
    this.chargingService.deleteCharging(this.selectedID).subscribe(
      (res) => {
        if (res) {
          this.toastr.success('Xoá thành công!');
        }
      },
      (err) => {
        this.toastr.error('Xoá thất bại!');
      }
    );
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }
  export() {
    this.chargingService.getListCharging().subscribe((res) => {
      if (res) {
        let dataStr = JSON.stringify(this.data);
        let dataUri =
          'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        let exportFileDefaultName = 'data.json';

        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
      }
    });
  }
}
