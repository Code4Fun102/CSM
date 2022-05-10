import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/share/share.module';
import { ChargingCategoryRoutingModule } from './charging-category-routing.module';
import { ChargingListCategoryComponent } from './charging-list-category.component';
import { ChargingCategoryEditComponent } from './charging-category-edit/charging-category-edit.component';



@NgModule({
  declarations: [
    ChargingListCategoryComponent,
    ChargingCategoryEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AgGridModule,
    SharedModule,
    ChargingCategoryRoutingModule
  ]
})
export class ChargingCategoryModule { }
