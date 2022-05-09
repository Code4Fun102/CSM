import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { LiveWallpaperListComponent } from './component/live-wallpaper-list/live-wallpaper-list.component';
import { StaticWallpaperListComponent } from './component/static-wallpaper-list/static-wallpaper-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserComponent } from './component/user/user.component';
import { UploadModule } from './component/upload/upload.module';
import { SharedModule } from './share/share.module';
import { ChargingListCategoryComponent } from './component/charging-list-category/charging-list-category.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LiveWallpaperListComponent,
    StaticWallpaperListComponent,
    UserComponent,
    ChargingListCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
