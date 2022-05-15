import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargingListCategoryComponent } from './component/charging-list-category/charging-list-category.component';
import { LiveWallpaperListComponent } from './component/live-wallpaper-list/live-wallpaper-list.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { StaticWallpaperListComponent } from './component/static-wallpaper-list/static-wallpaper-list.component';
import { UserComponent } from './component/user/user.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'charging-category', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'charging',
    loadChildren: () =>
      import('./component/charging-list/charging.module').then(
        (m) => m.ChargingModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'static-wallpaper',
    component: StaticWallpaperListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'live-wallpaper',
    loadChildren: () =>
      import('./component/live-wallpaper-list/live.module').then(
        (m) => m.LiveModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./component/upload/upload.module').then((m) => m.UploadModule),
    canActivate: [AuthGuard],
  },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] },
  {
    path: 'charging-category',
    loadChildren: () =>
      import(
        './component/charging-list-category/charging-category.module'
      ).then((m) => m.ChargingCategoryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'live-category',
    loadChildren: () =>
      import(
        './component/live-wallpaper-list-category/live-category.module'
      ).then((m) => m.LiveCategoryModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'version',
    loadChildren: () =>
      import(
        './component/version/version.module'
      ).then((m) => m.VersionModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
