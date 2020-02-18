import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientLayoutRoutes } from './patient-layout.routing';




import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

import { BookappointmentComponent } from 'app/layouts/patient-components/bookappointment/bookappointment.component';
//import { ClinicComponent } from 'app/layouts/patient-components/clinic/clinic.component';
//import {HospitalComponent} from 'app/layouts/patient-components/hospital/hospital.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { AboutComponent } from 'app/layouts/patient-components/about/about.component';
import { AdminLayoutModule } from '../admin-layout/admin-layout.module';
import { BookappointmentListComponent } from '../patient-components/bookappointment/bookappointment-list/bookappointment-list.component';
import { ClinicListComponent } from 'app/layouts/patient-components/clinic/clinic-list/clinic-list.component';
import { HospitalListComponent } from 'app/layouts/patient-components/hospital/hospital-list/hospital-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PatientLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MaterialModule,
    AdminLayoutModule
  ],
  declarations: [
    
    AboutComponent,
    BookappointmentComponent,
    ClinicListComponent,
    HospitalListComponent,
    BookappointmentListComponent,

  

   /* TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,*/
  ],
  entryComponents: [BookappointmentComponent, BookappointmentListComponent]

  
})

export class PatientLayoutModule {}
