import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CustomTooltipComponent } from '../component/charging-list/custom-tooltip/custom-tooltip.component';
import { HeaderComponent } from './component/header/header.component';
import { LoadingComponent } from './component/loading/loading.component';
@NgModule({
  declarations: [HeaderComponent, CustomTooltipComponent, LoadingComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    CommonModule
  ],
  exports: [HeaderComponent, CustomTooltipComponent, LoadingComponent],
  providers: [],
})
export class SharedModule {}
