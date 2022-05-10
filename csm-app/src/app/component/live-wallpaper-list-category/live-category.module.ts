import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/share/share.module';
import { LiveWallpaperListCategoryComponent } from './live-wallpaper-list-category.component';
import { LiveCategoryEditComponent } from './live-category-edit/live-category-edit.component';
import { LiveCategoryRoutingModule } from './live-category-routing.module';

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
    SharedModule
  ],
  providers: []
})

export class LiveCategoryModule { }
