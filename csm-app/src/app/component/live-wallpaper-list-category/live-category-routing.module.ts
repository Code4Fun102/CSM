import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LiveWallpaperListCategoryComponent } from './live-wallpaper-list-category.component';
import { LiveCategoryEditComponent } from './live-category-edit/live-category-edit.component';
import { LiveWallpaperListComponent } from '../live-wallpaper-list/live-wallpaper-list.component';



const routes: Routes = [
  {
    path: '',
    component: LiveWallpaperListCategoryComponent,
  },
  {
    path: 'live-category-edit/:id',
    component: LiveCategoryEditComponent
  },
  {
    path: 'live-category-add',
    component: LiveCategoryEditComponent
  },
  {
    path: 'live-item/:id',
    component: LiveWallpaperListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveCategoryRoutingModule { }
