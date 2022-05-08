import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/share/share.module';
import { UploadChargingComponent } from './upload-charging/upload-charging.component';
import { UploadLiveComponent } from './upload-live/upload-live.component';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadStaticComponent } from './upload-static/upload-static.component';
import { UploadComponent } from './upload.component';
@NgModule({
  declarations: [
    UploadChargingComponent,
    UploadStaticComponent,
    UploadLiveComponent,
    UploadComponent
  ],
  imports: [
    UploadRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: []
})
export class UploadModule { }
