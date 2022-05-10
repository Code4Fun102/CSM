import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChargingListCategoryComponent } from './charging-list-category.component';
import { ChargingCategoryEditComponent } from './charging-category-edit/charging-category-edit.component';
import { RouterModule, Routes } from '@angular/router';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargingCategoryRoutingModule { }
