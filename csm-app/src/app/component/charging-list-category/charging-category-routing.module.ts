 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargingListCategoryComponent } from './charging-list-category.component';
import { ChargingCategoryEditComponent } from './charging-category-edit/charging-category-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { ChargingListComponent } from '../charging-list/charging-list.component';

const routes: Routes = [
  {
    path: '',
    component: ChargingListCategoryComponent,
  },
  {
    path: 'charging-category-edit/:id',
    component: ChargingCategoryEditComponent
  },
  {
    path: 'charging-category-add',
    component: ChargingCategoryEditComponent
  },
  {
    path: 'charging-item/:id',
    component: ChargingListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargingCategoryRoutingModule { }
