import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StaffFooterComponent } from './staff-footer/staff-footer.component';
import { StaffNavbarComponent } from './staff-navbar/staff-navbar.component';
import { StaffSidebarComponent } from './staff-sidbar/staff-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    StaffFooterComponent,
    StaffNavbarComponent,
    StaffSidebarComponent
  ],
  exports: [
    StaffFooterComponent,
    StaffNavbarComponent,
    StaffSidebarComponent
  ]
})
export class StaffBarsModule { }
