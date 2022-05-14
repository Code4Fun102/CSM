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
declare const $: any;
@Component({
  selector: 'app-charging-list-category',
  templateUrl: './charging-list-category.component.html',
  styleUrls: ['./charging-list-category.component.scss']
})
export class ChargingListCategoryComponent implements OnInit {
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
          <span class="my-css-class"><button class="btn btn-info btn-view">Charging</button></span>`;
        let eButtonEdit = eDiv.querySelectorAll('.btn-secondary')[0];

        eButtonEdit.addEventListener('click', function () {
          me.router.navigate([`charging-category-edit/${data.data.id}`], {
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
          me.router.navigate([`charging-item/${data.data.id}/${data.data.name||'Default Name'}`], {
            relativeTo: me.route,
          });
        });

        return eDiv;
      },
      autoHeight:true,
      wrapText: true,
      cellClass:'v-align-center h-align-center'
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
      autoHeight:true,
      wrapText: true,
      cellClass:'v-align-center h-align-center'
      // tooltipComponentParams: { type: 0 },
      // tooltipComponent: CustomTooltipComponent,
    }, {
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
      autoHeight:true,
      wrapText: true,
      cellClass:'v-align-center h-align-center'
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,

    },
    {
      field: 'background',
      cellRenderer: (data: ICellRendererParams) => {
        let tmpl = '';
        if (data.value && data.value?.length) {
          for (const item of data.value) {
            tmpl += `<img onerror="this.onerror=null; this.src='assets/image/default.png'" class="m-3" height="72" src="${item}">`;
          }
        }
        return tmpl;
      },
      tooltipField: 'background',
      autoHeight:true,
      wrapText: true,
      cellClass:'v-align-center h-align-center'
      // tooltipComponentParams: { type: 1 },
      // tooltipComponent: CustomTooltipComponent,

    },

  ];
  defaultColumnDef: ColDef = {
    resizable: true,
  };
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

  getData(){
    this.chargingCategoryService.getListChargingCategory().subscribe((res) => {
        if(res && res.data)
        {
          const result = res.data
          this.data = result;
        }
        else{
          this.data = []
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
    this.chargingCategoryService.deleteChargingCategory(this.selectedID).subscribe(
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
  export() {
    // this.chargingCategoryService.getListChargingCategory().subscribe((res) => {
    //   if (res) {
    //     let dataStr = JSON.stringify(this.data);
    //     let dataUri =
    //       'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    //     let exportFileDefaultName = 'charging_category_list.json';

    //     let linkElement = document.createElement('a');
    //     linkElement.setAttribute('href', dataUri);
    //     linkElement.setAttribute('download', exportFileDefaultName);
    //     linkElement.click();
    //   }
    // });
    this.chargingCategoryService.export().subscribe((res) => {
      if (res) {
        this.toastr.success('Xuất khẩu thành công');
      }
    });
  }
}
