import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DoctorFooterComponent } from './doctor-footer/doctor-footer.component';
import { DoctorNavbarComponent } from './doctor-navbar/doctor-navbar.component';
import { DoctorSidebarComponent } from './doctor-sidebar/doctor-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DoctorFooterComponent,
    DoctorNavbarComponent,
    DoctorSidebarComponent
  ],
  exports: [
    DoctorFooterComponent,
    DoctorNavbarComponent,
    DoctorSidebarComponent
  ]
})
export class DoctorBarsModule { }
