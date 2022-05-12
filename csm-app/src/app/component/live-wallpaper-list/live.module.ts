import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from 'src/app/share/share.module';
import { LiveEditComponent } from './live-edit/live-edit.component';
import { LiveWallpaperListComponent } from './live-wallpaper-list.component';
import { LiveRoutingModule } from './live-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LiveWallpaperListComponent,
    LiveEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AgGridModule,
    SharedModule,
    LiveRoutingModule,
    FormsModule
  ],
  providers: []
})
export class LiveModule { }
