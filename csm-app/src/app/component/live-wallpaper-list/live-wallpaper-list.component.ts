import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ColDef, ICellRendererParams, RowHeightParams } from 'ag-grid-community';
import { ChargingService } from 'src/app/service/charging.service';
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
          me.router.navigate(['live-add'], { relativeTo: me.route });
        });

        return eDiv;
      },
    },
    {
      field: 'videos',
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
    },
    { field: 'isPremium' },
    { field: 'isLiveWallpaper' },
    { field: 'priority' },
    {
      field: 'thumbs',
      cellRenderer: (data: ICellRendererParams) => {
        let tmpl = '';
        if (data.value && data.value != null && data.value?.length) {
          for (const item of data.value) {
            tmpl += `${item}<br>`;
          }
        }
        return tmpl;
      },
      tooltipField: 'thumbs',
      tooltipComponent: CustomTooltipComponent,
    },
    
  ];
  getRowHeight(params: RowHeightParams): number | undefined | null {
    return params.data.rowHeight;
  }
  constructor(private chargingService: ChargingService, private router: Router, private route: ActivatedRoute) { }

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

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit(); 
  }
}
