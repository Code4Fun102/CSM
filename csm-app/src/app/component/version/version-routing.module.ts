import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LiveWallpaperListComponent } from '../live-wallpaper-list/live-wallpaper-list.component';
import { VersionListComponent } from './version-list.component';



const routes: Routes = [
  {
    path: '',
    component: VersionListComponent,
  },
  // {
  //   path: 'live-item/:id/:name',
  //   component: LiveWallpaperListComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersionRoutingModule { }
