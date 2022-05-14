import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/share/share.module';
import { ChargingListComponent } from './charging-list.component';
import { ChargingRoutingModule } from './charging-routing.module';
import { ChargingEditComponent } from './charging-edit/charging-edit.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    ChargingListComponent,
    ChargingEditComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    AgGridModule,
    SharedModule,
    ChargingRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,

  ],
  providers: []
})
export class ChargingModule { }
