import { Component, OnInit } from '@angular/core';
import { ITooltipAngularComp } from 'ag-grid-angular';
import { ITooltipParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-tooltip',
  templateUrl: './custom-tooltip.component.html',
  styleUrls: ['./custom-tooltip.component.scss']
})
export class CustomTooltipComponent implements ITooltipAngularComp {
  private params!: { color: string } & ITooltipParams;
  public data!: any;
  public color!: string;

  constructor() { }

  agInit(params: { color: string } & ITooltipParams): void {
    this.data = params.value;
  }
}
