import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/share/share.module';
import { LiveWallpaperListCategoryComponent } from './live-wallpaper-list-category.component';
import { LiveCategoryEditComponent } from './live-category-edit/live-category-edit.component';
import { LiveCategoryRoutingModule } from './live-category-routing.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    LiveWallpaperListCategoryComponent,
    LiveCategoryEditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AgGridModule,
    LiveCategoryRoutingModule,
    SharedModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  providers: []
})

export class LiveCategoryModule { }
