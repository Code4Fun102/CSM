import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { SharedModule } from 'src/app/share/share.module';
import { FormsModule } from '@angular/forms';
import { VersionListComponent } from './version-list.component';
import { VersionRoutingModule } from './version-routing.module';

@NgModule({
  declarations: [
    VersionListComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AgGridModule,
    SharedModule,
    FormsModule,
    VersionRoutingModule
  ],
  providers: []
})

export class VersionModule { }
