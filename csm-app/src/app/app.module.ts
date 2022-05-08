import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChargingListComponent } from './charging-list/charging-list.component';
import { LiveWallpaperListComponent } from './live-wallpaper-list/live-wallpaper-list.component';
import { StaticWallpaperListComponent } from './static-wallpaper-list/static-wallpaper-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UploadChargingComponent } from './upload-charging/upload-charging.component';
import { UploadStaticComponent } from './upload-static/upload-static.component';
import { UploadLiveComponent } from './upload-live/upload-live.component';
import { UserComponent } from './user/user.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChargingListComponent,
    LiveWallpaperListComponent,
    StaticWallpaperListComponent,
    HeaderComponent,
    UploadChargingComponent,
    UploadStaticComponent,
    UploadLiveComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
