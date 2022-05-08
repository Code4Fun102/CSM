import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargingListComponent } from './charging-list/charging-list.component';
import { LiveWallpaperListComponent } from './live-wallpaper-list/live-wallpaper-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StaticWallpaperListComponent } from './static-wallpaper-list/static-wallpaper-list.component';
import { UploadChargingComponent } from './upload-charging/upload-charging.component';
import { UploadLiveComponent } from './upload-live/upload-live.component';
import { UploadStaticComponent } from './upload-static/upload-static.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'charging', component: ChargingListComponent },
  { path: 'static-wallpaper', component: StaticWallpaperListComponent },
  { path: 'live-wallpaper', component: LiveWallpaperListComponent },
  { path: 'upload-charging', component: UploadChargingComponent },
  { path: 'upload-static', component: UploadStaticComponent },
  { path: 'upload-live', component: UploadLiveComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
