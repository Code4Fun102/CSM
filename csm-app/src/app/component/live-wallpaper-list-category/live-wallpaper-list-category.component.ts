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
import { LiveCategoryService } from 'src/app/service/live-category.service';
import { LiveWallPaperService } from 'src/app/service/live-wallpaper.service';
declare const $: any;
@Component({
  selector: 'app-live-wallpaper-list-category',
  templateUrl: './live-wallpaper-list-category.component.html',
  styleUrls: ['./live-wallpaper-list-category.component.scss'],
})
export class LiveWallpaperListCategoryComponent implements OnInit {
  data;
  gridApi;
  gridColumnApi;
  public tooltipShowDelay = 0;
  public rowData!: any[];
  selectedID;
  columnDefs: ColDef[] = [
    {
      headerName: '',
      width: 200,
      cellRenderer: (data: ICellRendererParams) => {
        const me = this;
        let eDiv = document.createElement('div');
        eDiv.innerHTML = `<span class="my-css-class"><button class="btn btn-secondary">Xem</button></span>
          <span class="my-css-class"><button class="btn btn-danger">Xoá</button></span>
          <span class="my-css-class"><button class="btn btn-info btn-view">Live Wallpaper</button></span>`;
        let eButtonEdit = eDiv.querySelectorAll('.btn-secondary')[0];

        eButtonEdit.addEventListener('click', function () {
          me.router.navigate([`live-category-edit/${data.data.id}`], {
            relativeTo: me.route,
          });
        });

        let eButtonDelete = eDiv.querySelectorAll('.btn-danger')[0];

        eButtonDelete.addEventListener('click', function () {
          me.selectedID = data.data.id;
          me.openModal();
        });

        let eButtonView = eDiv.querySelectorAll('.btn-view')[0];

        eButtonView.addEventListener('click', function () {
          me.router.navigate(
            [`live-item/${data.data.id}/${data.data.name || 'Default Name'}`],
            {
              relativeTo: me.route,
            }
          );
        });

        return eDiv;
      },
      autoHeight: true,
      wrapText: true,
      cellClass: 'v-align-center h-align-center',
    },
    { field: 'name',width: 70, cellClass: 'h-align-center' },
    {
      field: 'links',
      cellRenderer: (data: ICellRendererParams) => {
        let tmpl = '';
        if (data.value && data.value?.length) {
          for (const item of data.value) {
            tmpl += `${item}<br>`;
          }
        }
        return tmpl;
      },
      tooltipField: 'links',
      autoHeight: true,
      wrapText: true,
      cellClass: 'v-align-center h-align-center',
      // tooltipComponentParams: { type: 0 },
      // tooltipComponent: CustomTooltipComponent,
    },
    {
      field: 'icon',
      cellRenderer: (data: ICellRendererParams) => {
        let tmpl = '';
        if (data.value && data.value?.length) {
          for (const item of data.value) {
            tmpl += `<img onerror="this.onerror=null; this.src='assets/image/default.png'" class="m-3" height="72" src="${item}">`;
          }
        }
        return tmpl;
      },
      tooltipField: 'icon',
      autoHeight: true,
      wrapText: true,
      cellClass: 'v-align-center h-align-center',
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,
    },
  ];
  defaultColumnDef: ColDef = {
    resizable: true,
  };
  getRowHeight(params: RowHeightParams): number | undefined | null {
    return params.data.rowHeight;
  }
  constructor(
    private liveCategoryService: LiveCategoryService,
    private liveWallPaperService: LiveWallPaperService,
    public router: Router,
    public route: ActivatedRoute,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.liveCategoryService.getListLiveCategory().subscribe((res) => {
      if (res && res.data) {
        const result = res.data;
        result?.forEach(function (dataItem: any, index: number) {
          dataItem.rowHeight =
            dataItem.links?.length > dataItem.icon?.length
              ? dataItem.links?.length * 48
              : dataItem.icon?.length * 48;
        });
        this.data = result;
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

  openModal() {
    this.modalRef = this.modalService.show(this.modalTemplateRef, {
      class: 'modal-sm',
    });
  }

  confirm(): void {
    this.liveCategoryService.deleteLiveCategory(this.selectedID).subscribe(
      (res) => {
        if (res) {
          this.data = this.data.filter((obj) => obj.id !== this.selectedID);
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
  viewLive(e)
  {
    this.router.navigate([`live-category-edit/${e.id}`],{
      relativeTo: this.route,
    });
  }

  deleteLive(e)
  {
    const me = this;
    me.selectedID = e.id;
    me.openModal();
  }
  detailLive(e){
    const me = this;
    me.router.navigate(
      [`live-item/${e.id}/${e.name || 'Default Name'}`],
      {
        relativeTo: me.route,
      }
    );
  }
}
