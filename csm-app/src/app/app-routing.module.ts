import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargingListCategoryComponent } from './component/charging-list-category/charging-list-category.component';
import { ChargingListComponent } from './component/charging-list/charging-list.component';
import { LiveWallpaperListComponent } from './component/live-wallpaper-list/live-wallpaper-list.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { StaticWallpaperListComponent } from './component/static-wallpaper-list/static-wallpaper-list.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'signup', component: SignupComponent },
  { path: 'charging', loadChildren: () => import('./component/charging-list/charging.module').then(m => m.ChargingModule) },
  { path: 'static-wallpaper', component: StaticWallpaperListComponent },
  { path: 'live-wallpaper', component: LiveWallpaperListComponent },
  { path: 'upload', loadChildren: () => import('./component/upload/upload.module').then(m => m.UploadModule) },
  { path: 'user', component: UserComponent },
  { path: "charging-category", component: ChargingListCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
