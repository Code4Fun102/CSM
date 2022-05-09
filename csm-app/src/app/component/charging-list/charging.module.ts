import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SharedModule } from 'src/app/share/share.module';
import { ChargingListComponent } from './charging-list.component';
import { ChargingRoutingModule } from './charging-routing.module';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { ChargingEditComponent } from './charging-edit/charging-edit.component';
@NgModule({
  declarations: [
    ChargingListComponent,
    CustomTooltipComponent,
    ChargingEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AgGridModule,
    SharedModule,
    ChargingRoutingModule
  ],
  providers: []
})
export class ChargingModule { }
