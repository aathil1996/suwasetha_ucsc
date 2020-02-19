import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PatientFooterComponent } from './patient-footer/patient-footer.component';
import { PatientNavbarComponent } from './patient-navbar/patient-navbar.component';
import { PatientSidebarComponent } from './patient-sidebar/patient-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    PatientFooterComponent,
    PatientNavbarComponent,
    PatientSidebarComponent
  ],
  exports: [
    PatientFooterComponent,
    PatientNavbarComponent,
    PatientSidebarComponent
  ]
})
export class PatientBarsModule { }
