import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HosAdminSidebarComponent } from './hosadmin-sidebar/hosadmin-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    
    HosAdminSidebarComponent
  ],
  exports: [
    
    HosAdminSidebarComponent
  ]
})
export class HosAdminBarsModule { }
