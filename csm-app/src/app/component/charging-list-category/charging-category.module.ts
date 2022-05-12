import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/share/share.module';
import { ChargingCategoryRoutingModule } from './charging-category-routing.module';
import { ChargingListCategoryComponent } from './charging-list-category.component';
import { ChargingCategoryEditComponent } from './charging-category-edit/charging-category-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ChargingListCategoryComponent,
    ChargingCategoryEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    AgGridModule,
    SharedModule,
    ChargingCategoryRoutingModule
  ]
})
export class ChargingCategoryModule { }
