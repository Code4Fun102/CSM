import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadChargingComponent } from './upload-charging/upload-charging.component';
import { UploadLiveComponent } from './upload-live/upload-live.component';
import { UploadStaticComponent } from './upload-static/upload-static.component';
import { UploadComponent } from './upload.component';

const routes: Routes = [
  {
    path: '',
    component: UploadComponent,
    children: [
      { path: 'upload-charging', component: UploadChargingComponent },
      { path: 'upload-static', component: UploadStaticComponent },
      { path: 'upload-live', component: UploadLiveComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadRoutingModule {}
