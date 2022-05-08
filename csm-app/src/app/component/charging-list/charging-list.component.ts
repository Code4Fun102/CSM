import { Component, OnInit } from '@angular/core';
import {
  ColDef,
  ICellRendererParams,
  ValueFormatterParams,
} from 'ag-grid-community';
import { ChargingService } from 'src/app/service/charging.service';

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
  columnDefs: ColDef[] = [
    {
      field: 'thumbs',
      cellRenderer: (data: ICellRendererParams) => {
        return `<img height='64px' src='${data.value}'>`;
      },
    },
    {
      field: 'videos',
    },
    { field: 'sounds' },
  ];
  constructor(private chargingService: ChargingService) {}

  ngOnInit(): void {
    this.chargingService.getListCharging().subscribe((res) => {
      this.data = res.datas;
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();
  }
}
