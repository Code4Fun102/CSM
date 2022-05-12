import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargingEditComponent } from './charging-edit/charging-edit.component';
import { ChargingListComponent } from './charging-list.component';

const routes: Routes = [
  {
    path: 'charging-edit/:id',
    component: ChargingEditComponent
  },
  {
    path: 'charging-add',
    component: ChargingEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChargingRoutingModule {}
