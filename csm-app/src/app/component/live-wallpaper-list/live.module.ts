import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from 'src/app/share/share.module';
import { LiveEditComponent } from './live-edit/live-edit.component';
import { LiveWallpaperListComponent } from './live-wallpaper-list.component';
import { LiveRoutingModule } from './live-routing.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';




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
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: []
})
export class LiveModule { }
