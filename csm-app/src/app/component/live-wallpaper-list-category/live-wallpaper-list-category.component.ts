import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef, ICellRendererParams, RowHeightParams } from 'ag-grid-community';
import { ChargingService } from 'src/app/service/charging.service';
import { CustomTooltipComponent } from '../charging-list/custom-tooltip/custom-tooltip.component';
declare const $: any;
@Component({
  selector: 'app-live-wallpaper-list-category',
  templateUrl: './live-wallpaper-list-category.component.html',
  styleUrls: ['./live-wallpaper-list-category.component.scss']
})

export class LiveWallpaperListCategoryComponent implements OnInit {
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
          me.router.navigate(['live-category-add'], { relativeTo: me.route });
        });

        return eDiv;
      },
    },
    { field: 'name' },
    {
      field: 'links',
      cellRenderer: (data: ICellRendererParams) => {
        let tmpl = '';
        if (data.value && data.value != null && data.value?.length) {
          for (const item of data.value) {
            tmpl += `${item}<br>`;
          }
        }
        return tmpl;
      },
      tooltipComponent: CustomTooltipComponent,
    }, {
      field: 'icon',
      cellRenderer: (data: ICellRendererParams) => {
        let tmpl = '';
        if (data.value && data.value != null && data.value?.length) {
          for (const item of data.value) {
            tmpl += `${item}<br>`;
          }
        }
        return tmpl;
      },
      tooltipField: 'icon',
      tooltipComponent: CustomTooltipComponent,
    },
  ];
  getRowHeight(params: RowHeightParams): number | undefined | null {
    return params.data.rowHeight;
  }
  constructor(private chargingService: ChargingService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.chargingService.getListliveCategory().subscribe((res) => {
      res.forEach(function (dataItem: any, index: number) {
        dataItem.rowHeight =
          dataItem.links?.length > dataItem.icon?.length
            ? dataItem.links?.length * 48
            : dataItem.icon?.length * 48;
      });
      this.data = res;
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }
}
