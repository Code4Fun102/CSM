import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ColDef,
  ICellRendererParams,
  RowHeightParams,
  ValueFormatterParams,
} from 'ag-grid-community';
import { ChargingService } from 'src/app/service/charging.service';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';

declare const $: any;
@Component({
  selector: 'app-charging-list',
  templateUrl: './charging-list.component.html',
  styleUrls: ['./charging-list.component.scss'],
})
export class ChargingListComponent implements OnInit {
  data;
  gridApi;
  gridColumnApi;
  public tooltipShowDelay = 0;
  public tooltipHideDelay = 2000;
  public rowData!: any[];
  columnDefs: ColDef[] = [
    {
      headerName: '',
      cellRenderer: (data: ICellRendererParams) => {
        const me = this;
        let eDiv = document.createElement('div');
        eDiv.innerHTML =
          '<span class="my-css-class"><button class="btn btn-secondary">Sửa</button></span>';
        let eButton = eDiv.querySelectorAll('.btn')[0];

        eButton.addEventListener('click', function () {
          me.router.navigate(['charging-add'], {relativeTo: me.route});
        });

        return eDiv;
      },
    },
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
      tooltipComponent: CustomTooltipComponent,
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
      tooltipComponent: CustomTooltipComponent,
    },
    { field: 'sounds' },
  ];

  getRowHeight(params: RowHeightParams): number | undefined | null {
    return params.data.rowHeight;
  }
  constructor(private chargingService: ChargingService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.chargingService.getListCharging().subscribe((res) => {
      res.datas.forEach(function (dataItem: any, index: number) {
        dataItem.rowHeight =
          dataItem.thumbs.length > dataItem.videos.length
            ? dataItem.thumbs.length * 48
            : dataItem.videos.length * 48;
      });
      this.data = res.datas;
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }
}
