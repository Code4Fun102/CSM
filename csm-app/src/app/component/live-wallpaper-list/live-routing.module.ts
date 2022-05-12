import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveEditComponent } from './live-edit/live-edit.component';
import { LiveWallpaperListComponent } from './live-wallpaper-list.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: LiveWallpaperListComponent,
  // },
  {
    path: 'live-edit/:id',
    component: LiveEditComponent
  },
  {
    path: 'live-add',
    component: LiveEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class LiveRoutingModule { }
