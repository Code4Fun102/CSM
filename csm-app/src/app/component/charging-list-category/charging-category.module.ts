import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/share/share.module';
import { ChargingCategoryRoutingModule } from './charging-category-routing.module';
import { ChargingListCategoryComponent } from './charging-list-category.component';
import { ChargingCategoryEditComponent } from './charging-category-edit/charging-category-edit.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
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
    ChargingCategoryRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule
  ]
})
export class ChargingCategoryModule { }
