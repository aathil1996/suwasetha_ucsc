import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorLayoutRoutes } from './doctor-layout.routing';




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

import { AppointmentsComponent } from 'app/layouts/doctor-components/appointments/appointments.component';
import { BlogPostsComponent } from 'app/layouts/doctor-components/blog-posts/blog-posts.component';
import {PrescriptionsComponent} from 'app/layouts/doctor-components/prescription/prescriptions/prescriptions.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { DashboardComponent } from 'app/layouts/doctor-components/dashboard/dashboard.component';
import { UserProfileComponent} from 'app/layouts/doctor-components/user-profile/user-profile.component';
import { PrescriptionsListComponent} from 'app/layouts/doctor-components/prescription/prescriptions-list/prescriptions-list.component';
import { AdminLayoutModule } from '../admin-layout/admin-layout.module';
import { PatientdetailsComponent} from 'app/layouts/doctor-components/patientdetails/patientdetails.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DoctorLayoutRoutes),
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
    DashboardComponent,
    AppointmentsComponent,
    UserProfileComponent,
    BlogPostsComponent,
    PrescriptionsComponent,
    PrescriptionsListComponent,
    PatientdetailsComponent
   

  

   /* TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,*/
  ],
  entryComponents: [PrescriptionsComponent, PrescriptionsListComponent]

  
})

export class DoctorLayoutModule {}
