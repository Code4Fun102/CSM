import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/share/share.module';
import { ChargingListComponent } from './charging-list.component';
import { ChargingRoutingModule } from './charging-routing.module';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { ChargingEditComponent } from './charging-edit/charging-edit.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ChargingListComponent,
    CustomTooltipComponent,
    ChargingEditComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    AgGridModule,
    SharedModule,
    ChargingRoutingModule
  ],
  providers: []
})
export class ChargingModule { }
